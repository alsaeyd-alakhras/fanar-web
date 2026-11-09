
import {
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react';

import { useAcademyContent } from '@/hooks/useAcademyContent';

import type {
  AcademyCourse,
  AcademyCourseStatus,
  AcademyOverview,
  AcademyResumeInfo,
} from '@/types';

const STORAGE_KEY = 'fnar-academy-progress';
const RESUME_KEY = 'fnar-academy-resume';
const EVENT_NAME = 'fnar-academy-progress-change';

function readCompletedIds(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();

    const parsed: unknown = JSON.parse(raw);

    if (!Array.isArray(parsed)) return new Set();

    return new Set(
      parsed.filter(
        (value): value is string =>
          typeof value === 'string'
      )
    );
  } catch {
    return new Set();
  }
}

function writeCompletedIds(ids: Set<string>) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...ids])
  );

  window.dispatchEvent(new Event(EVENT_NAME));
}

function readResume(): {
  courseId: string;
  lessonId: string;
} | null {
  try {
    const raw = localStorage.getItem(RESUME_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);

    if (
      typeof parsed?.courseId === 'string' &&
      typeof parsed?.lessonId === 'string'
    ) {
      return {
        courseId: parsed.courseId,
        lessonId: parsed.lessonId,
      };
    }

    return null;
  } catch {
    return null;
  }
}

function writeResume(courseId: string, lessonId: string) {
  localStorage.setItem(
    RESUME_KEY,
    JSON.stringify({ courseId, lessonId })
  );

  window.dispatchEvent(new Event(EVENT_NAME));
}

function computeCourseStatus(
  completed: number,
  total: number
): AcademyCourseStatus {
  if (total === 0) return 'not-started';
  if (completed >= total) return 'completed';
  if (completed > 0) return 'in-progress';
  return 'not-started';
}

export function useAcademyProgress() {
  const academy = useAcademyContent();

  const [completedIds, setCompletedIds] = useState<
    Set<string>
  >(() => readCompletedIds());

  const [resume, setResume] = useState(
    () => readResume()
  );

  useEffect(() => {
    const handler = () => {
      setCompletedIds(readCompletedIds());
      setResume(readResume());
    };

    window.addEventListener(EVENT_NAME, handler);
    window.addEventListener('storage', handler);

    return () => {
      window.removeEventListener(EVENT_NAME, handler);
      window.removeEventListener('storage', handler);
    };
  }, []);

  const markComplete = useCallback(
    (lessonId: string, courseId?: string) => {
      const next = new Set(readCompletedIds());
      next.add(lessonId);

      writeCompletedIds(next);
      setCompletedIds(next);

      if (courseId) {
        writeResume(courseId, lessonId);
        setResume({ courseId, lessonId });
      }
    },
    []
  );

  const undoComplete = useCallback(
    (lessonId: string) => {
      const next = new Set(readCompletedIds());
      next.delete(lessonId);

      writeCompletedIds(next);
      setCompletedIds(next);
    },
    []
  );

  const toggleComplete = useCallback(
    (lessonId: string, courseId?: string) => {
      const next = new Set(readCompletedIds());

      if (next.has(lessonId)) {
        next.delete(lessonId);
        writeCompletedIds(next);
        setCompletedIds(next);
      } else {
        markComplete(lessonId, courseId);
      }
    },
    [markComplete]
  );

  const setResumeLesson = useCallback(
    (courseId: string, lessonId: string) => {
      writeResume(courseId, lessonId);
      setResume({ courseId, lessonId });
    },
    []
  );

  const isLessonComplete = useCallback(
    (lessonId: string) => completedIds.has(lessonId),
    [completedIds]
  );

  const courses: AcademyCourse[] = useMemo(
    () =>
      academy.courses.map((course) => {
        const lessons = academy.getLessons(course.id);

        const total = lessons.length;
        const completed = lessons.filter((lesson) =>
          completedIds.has(lesson.id)
        ).length;

        return {
          ...course,
          status:
            total > 0 &&
            completed === 0 &&
            resume?.courseId === course.id &&
            academy
              .getLessons(course.id)
              .some((lesson) => lesson.id === resume.lessonId)
              ? 'in-progress'
              : computeCourseStatus(completed, total),
          progressPercent:
            total > 0
              ? Math.round((completed / total) * 100)
              : 0,
          completedLessons: completed,
          totalLessons: total,
        };
      }),
    [academy, completedIds, resume]
  );

  const overview: AcademyOverview = useMemo(() => {
    const totalLessons = courses.reduce(
      (sum, course) => sum + course.totalLessons,
      0
    );

    const totalCompleted = courses.reduce(
      (sum, course) => sum + course.completedLessons,
      0
    );

    const completedCourses = courses.filter(
      (course) => course.status === 'completed'
    ).length;

    const inProgressCourses = courses.filter(
      (course) => course.status === 'in-progress'
    ).length;

    const programDurationMonths = Math.max(
      0,
      ...academy.courses.map((course) => course.month)
    );

    return {
      totalCourses: courses.length,
      programDurationMonths,
      completedCourses,
      inProgressCourses,
      overallProgressPercent:
        totalLessons > 0
          ? Math.round((totalCompleted / totalLessons) * 100)
          : 0,
      totalCompletedLessons: totalCompleted,
      totalLessons,
    };
  }, [academy, courses]);

  const resumeInfo: AcademyResumeInfo | null = useMemo(() => {
    if (!resume) return null;

    const course = academy.getCourse(resume.courseId);
    if (!course) return null;

    const lesson = academy
      .getLessons(course.id)
      .find((item) => item.id === resume.lessonId);

    if (!lesson) return null;

    return {
      courseId: course.id,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      courseTitle: course.title,
    };
  }, [academy, resume]);

  return {
    completedIds,
    courses,
    overview,
    resumeInfo,
    isLessonComplete,
    markComplete,
    undoComplete,
    toggleComplete,
    setResumeLesson,
  };
}
