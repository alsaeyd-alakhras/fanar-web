
import {
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react';

import { useAcademyContent } from '@/hooks/useAcademyContent';

import type {
  QuizAttempt,
  QuizResultSummary,
} from '@/types';

const STORAGE_KEY = 'fnar-academy-quiz-attempts';
const EVENT_NAME = 'fnar-academy-quiz-change';

function readAllAttempts(): Record<string, QuizAttempt[]> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};

    const parsed: unknown = JSON.parse(raw);

    if (
      !parsed ||
      typeof parsed !== 'object' ||
      Array.isArray(parsed)
    ) {
      return {};
    }

    return Object.fromEntries(
      Object.entries(parsed).filter(
        ([, attempts]) => Array.isArray(attempts)
      )
    ) as Record<string, QuizAttempt[]>;
  } catch {
    return {};
  }
}

function writeAllAttempts(
  data: Record<string, QuizAttempt[]>
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );

  window.dispatchEvent(new Event(EVENT_NAME));
}

function computeSummary(
  attempts: QuizAttempt[]
): QuizResultSummary {
  if (!attempts.length) {
    return {
      latestScorePercent: null,
      bestScorePercent: null,
      attemptsCount: 0,
      latestAttempt: null,
      bestAttempt: null,
    };
  }

  const sorted = [...attempts].sort(
    (a, b) =>
      new Date(a.submittedAt).getTime() -
      new Date(b.submittedAt).getTime()
  );

  const latest = sorted[sorted.length - 1];

  const best = sorted.reduce((current, attempt) =>
    attempt.scorePercent > current.scorePercent
      ? attempt
      : current
  );

  return {
    latestScorePercent: latest.scorePercent,
    bestScorePercent: best.scorePercent,
    attemptsCount: sorted.length,
    latestAttempt: latest,
    bestAttempt: best,
  };
}

export function useAcademyQuizzes() {
  const academy = useAcademyContent();

  const [allAttempts, setAllAttempts] = useState<
    Record<string, QuizAttempt[]>
  >(() => readAllAttempts());

  useEffect(() => {
    const handler = () =>
      setAllAttempts(readAllAttempts());

    window.addEventListener(EVENT_NAME, handler);
    window.addEventListener('storage', handler);

    return () => {
      window.removeEventListener(EVENT_NAME, handler);
      window.removeEventListener('storage', handler);
    };
  }, []);

  const saveAttempt = useCallback(
    (
      quizId: string,
      courseId: string,
      answers: Record<string, string>
    ) => {
      const quiz = academy.getQuizById(quizId);

      if (
        !quiz ||
        quiz.courseId !== courseId ||
        quiz.questions.length === 0
      ) {
        return;
      }

      const correctCount = quiz.questions.filter(
        (question) =>
          answers[question.id] === question.correctOptionId
      ).length;

      const totalQuestions = quiz.questions.length;

      const scorePercent =
        totalQuestions > 0
          ? Math.round(
              (correctCount / totalQuestions) * 100
            )
          : 0;

      const attempt: QuizAttempt = {
        id: `${quizId}-${crypto.randomUUID()}`,
        quizId,
        courseId,
        answers: { ...answers },
        correctCount,
        totalQuestions,
        scorePercent,
        submittedAt: new Date().toISOString(),
      };

      const data = readAllAttempts();

      const next = {
        ...data,
        [quizId]: [...(data[quizId] ?? []), attempt],
      };

      writeAllAttempts(next);
      setAllAttempts(next);
    },
    [academy]
  );

  const getQuizSummary = useCallback(
    (quizId: string): QuizResultSummary =>
      computeSummary(allAttempts[quizId] ?? []),
    [allAttempts]
  );

  const getCourseQuizSummary = useCallback(
    (courseId: string): QuizResultSummary => {
      const quiz = academy.getQuiz(courseId);

      return computeSummary(
        quiz ? allAttempts[quiz.id] ?? [] : []
      );
    },
    [academy, allAttempts]
  );

  const allQuizSummaries = useMemo(() => {
    const map: Record<string, QuizResultSummary> = {};

    for (const quiz of academy.quizzes) {
      map[quiz.id] = computeSummary(
        allAttempts[quiz.id] ?? []
      );
    }

    return map;
  }, [academy, allAttempts]);

  const completedQuizCount = useMemo(
    () =>
      academy.quizzes.filter(
        (quiz) => (allAttempts[quiz.id] ?? []).length > 0
      ).length,
    [academy, allAttempts]
  );

  return {
    allAttempts,
    saveAttempt,
    getQuizSummary,
    getCourseQuizSummary,
    allQuizSummaries,
    completedQuizCount,
    totalQuizCount: academy.quizzes.length,
  };
}
