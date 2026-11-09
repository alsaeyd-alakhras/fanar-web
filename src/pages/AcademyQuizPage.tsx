import { useState, useMemo, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { QUIZ_DEMO_LABEL } from '@/data/academyQuizzes';
import { useAcademyContent } from '@/hooks/useAcademyContent';
import { useAcademyQuizzes } from '@/hooks/useAcademyQuizzes';
import type { QuizQuestion } from '@/types';

export default function AcademyQuizPage() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const academy = useAcademyContent();
  const { saveAttempt, getCourseQuizSummary } = useAcademyQuizzes();

  const course = courseId
  ? academy.getCourse(courseId)
  : undefined;

  const quiz = courseId
  ? academy.getQuiz(courseId)
  : undefined;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showConfirm, setShowConfirm] = useState(false);
  const confirmCloseRef = useRef<HTMLButtonElement>(null);

  // Focus management + Escape for submit confirmation modal
  useEffect(() => {
    if (!showConfirm) return;
    confirmCloseRef.current?.focus();
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowConfirm(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [showConfirm]);

  const summary = useMemo(
    () => (courseId ? getCourseQuizSummary(courseId) : null),
    [courseId, getCourseQuizSummary],
  );

  if (!course || !quiz || quiz.questions.length === 0) {
    return (
      <div dir="rtl" className="min-h-[60vh] bg-[#F3F3F1]">
        <div className="mx-auto max-w-[600px] px-5 pt-[160px] pb-20 text-center sm:px-6">
          <h1 className="font-arabic text-[clamp(1.6rem,3vw,2rem)] font-bold text-[#1D2C4F]">
            الاختبار غير موجود
          </h1>
          <p className="mt-4 font-arabic text-[13px] leading-7 text-[#1D2C4F]/45">
            لم نتمكن من العثور على اختبار متاح لهذه الدورة، أو لم تتم إضافة أسئلة إليه بعد.
          </p>
          <Link
            to="/academy/courses"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1D2C4F] px-6 py-3 font-arabic text-[13px] font-semibold text-[#F3F3F1] transition-colors duration-300 hover:bg-[#84A4B1] hover:text-[#1D2C4F]"
          >
            العودة إلى مكتبة الدورات
            <span className="text-[10px]">←</span>
          </Link>
        </div>
      </div>
    );
  }

  const question: QuizQuestion = quiz.questions[currentIndex];
  const totalQuestions = quiz.questions.length;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);
  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === totalQuestions;
  const currentAnswer = answers[question.id];

  const selectAnswer = (optionId: string) => {
    setAnswers((prev) => ({ ...prev, [question.id]: optionId }));
  };

  const goPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const goNext = () => {
    if (currentIndex < totalQuestions - 1) setCurrentIndex(currentIndex + 1);
  };

  const handleSubmit = () => {
    saveAttempt(quiz.id, course.id, answers);
    navigate(`/academy/courses/${course.id}/quiz/results`);
  };

  return (
    <div dir="rtl">
      {/* TOP BAR */}
      <div className="sticky top-[72px] z-30 border-b border-[#1D2C4F]/8 bg-[#F3F3F1]/95 backdrop-blur-xl lg:top-[80px]">
        <div className="mx-auto flex max-w-[900px] items-center justify-between gap-4 px-5 py-3 sm:px-6">
          <nav className="flex items-center gap-2 text-[11px]">
            <Link
              to="/academy"
              className="font-arabic text-[#1D2C4F]/40 transition-colors hover:text-[#84A4B1]"
            >
              الأكاديمية
            </Link>
            <span className="text-[#1D2C4F]/20">/</span>
            <Link
              to={`/academy/courses/${course.id}`}
              className="font-arabic text-[#1D2C4F]/40 transition-colors hover:text-[#84A4B1]"
            >
              {course.title}
            </Link>
            <span className="text-[#1D2C4F]/20">/</span>
            <span className="font-arabic text-[#84A4B1]">اختبار</span>
          </nav>
        </div>
      </div>

      <div className="bg-[#F3F3F1]">
        <div className="mx-auto max-w-[900px] px-5 py-10 sm:px-6 lg:px-10 lg:py-14">
          {/* Header */}
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-3">
              <span className="font-sans text-[10px] font-bold tracking-[0.15em] text-[#84A4B1]">
                {course.number}
              </span>
              <span className="h-px w-6 bg-[#84A4B1]/30" />
              <span className="font-arabic text-[11px] text-[#1D2C4F]/40">
                {totalQuestions} أسئلة
              </span>
            </div>
            <h1 className="font-arabic text-[clamp(1.5rem,3vw,2.2rem)] font-bold leading-[1.3] tracking-[-0.02em] text-[#1D2C4F]">
              {quiz.title}
            </h1>
            <p className="mt-4 max-w-[600px] font-arabic text-[13px] leading-8 text-[#1D2C4F]/55">
              {quiz.description}
            </p>

            {/* Previous results */}
            {summary && summary.attemptsCount > 0 && (
              <div className="mt-5 flex flex-wrap gap-3">
                {summary.latestScorePercent !== null && (
                  <div className="flex items-center gap-2 rounded-full border border-[#1D2C4F]/10 bg-[#F3F3F1] px-4 py-2">
                    <span className="font-arabic text-[10px] text-[#1D2C4F]/40">آخر نتيجة</span>
                    <span className="font-sans text-[12px] font-bold text-[#1D2C4F]">
                      {summary.latestScorePercent}%
                    </span>
                  </div>
                )}
                {summary.bestScorePercent !== null && (
                  <div className="flex items-center gap-2 rounded-full border border-[#84A4B1]/20 bg-[#84A4B1]/[0.06] px-4 py-2">
                    <span className="font-arabic text-[10px] text-[#84A4B1]">أفضل نتيجة</span>
                    <span className="font-sans text-[12px] font-bold text-[#84A4B1]">
                      {summary.bestScorePercent}%
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Demo label */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#84A4B1]/15 bg-[#84A4B1]/[0.03] px-4 py-2">
              <span className="h-[4px] w-[4px] rounded-full bg-[#84A4B1]/50" />
              <span className="font-arabic text-[10px] text-[#84A4B1]/70">
                {QUIZ_DEMO_LABEL}
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-arabic text-[11px] text-[#1D2C4F]/40">
                السؤال {currentIndex + 1} من {totalQuestions}
              </span>
              <span className="font-sans text-[10px] font-semibold text-[#1D2C4F]/50">
                {answeredCount}/{totalQuestions} تمت الإجابة
              </span>
            </div>
            <div
              className="relative h-[5px] w-full overflow-hidden rounded-full bg-[#1D2C4F]/8"
              role="progressbar"
              aria-valuenow={progressPercent}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="absolute inset-y-0 right-0 rounded-full bg-[#84A4B1] transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Question card */}
          <div className="rounded-[16px] border border-[#1D2C4F]/8 bg-[#F3F3F1] p-6 lg:p-8">
            <h2 className="mb-6 font-arabic text-[16px] font-bold leading-relaxed text-[#1D2C4F] sm:text-[18px]">
              {question.prompt}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, i) => {
                const isSelected = currentAnswer === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => selectAnswer(option.id)}
                    aria-pressed={isSelected}
                    className={`
                      flex w-full items-center gap-3 rounded-[12px] border p-4
                      text-start transition-all duration-200 min-h-[52px]
                      ${
                        isSelected
                          ? 'border-[#1D2C4F] bg-[#1D2C4F]/[0.04]'
                          : 'border-[#1D2C4F]/10 hover:border-[#84A4B1]/30 hover:bg-[#84A4B1]/[0.02]'
                      }
                    `}
                  >
                    <span
                      className={`
                        flex h-8 w-8 shrink-0 items-center justify-center rounded-full
                        border text-[12px] font-bold transition-colors
                        ${
                          isSelected
                            ? 'border-[#1D2C4F] bg-[#1D2C4F] text-[#F3F3F1]'
                            : 'border-[#1D2C4F]/15 text-[#1D2C4F]/35'
                        }
                      `}
                    >
                      {['أ', 'ب', 'ج', 'د'][i]}
                    </span>
                    <span
                      className={`flex-1 font-arabic text-[14px] leading-relaxed ${
                        isSelected ? 'text-[#1D2C4F]' : 'text-[#1D2C4F]/65'
                      }`}
                    >
                      {option.text}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={goPrev}
              disabled={currentIndex === 0}
              className={`
                flex items-center gap-2 rounded-full border px-5 py-3 font-arabic text-[12px] font-medium transition-all duration-300
                ${
                  currentIndex === 0
                    ? 'cursor-not-allowed border-[#1D2C4F]/8 text-[#1D2C4F]/20'
                    : 'border-[#1D2C4F]/12 text-[#1D2C4F]/60 hover:border-[#84A4B1]/30 hover:text-[#1D2C4F]'
                }
              `}
            >
              <span>→</span>
              السابق
            </button>

            {currentIndex < totalQuestions - 1 ? (
              <button
                type="button"
                onClick={goNext}
                disabled={!currentAnswer}
                className={`
                  flex items-center gap-2 rounded-full px-5 py-3 font-arabic text-[12px] font-bold transition-all duration-300
                  ${
                    !currentAnswer
                      ? 'cursor-not-allowed bg-[#1D2C4F]/20 text-[#F3F3F1]/50'
                      : 'bg-[#1D2C4F] text-[#F3F3F1] hover:-translate-y-[1px]'
                  }
                `}
              >
                التالي
                <span>←</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowConfirm(true)}
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[#1D2C4F] px-6 py-3 font-arabic text-[12px] font-bold text-[#F3F3F1] transition-all duration-500 hover:-translate-y-[1px]"
              >
                <span className="absolute inset-0 translate-y-full bg-[#84A4B1] transition-transform duration-500 ease-out group-hover:translate-y-0" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#1D2C4F]">
                  تسليم الاختبار
                </span>
                <span className="relative z-10 text-[10px] transition-colors duration-300 group-hover:text-[#1D2C4F]">←</span>
              </button>
            )}
          </div>

          {/* Quick jump indicators */}
          <div className="mt-8 flex flex-wrap gap-2">
            {quiz.questions.map((q, i) => {
              const isAnswered = !!answers[q.id];
              const isCurrent = i === currentIndex;
              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`السؤال ${i + 1}`}
                  className={`
                    flex h-9 w-9 items-center justify-center rounded-full border text-[10px] font-bold transition-all duration-200
                    ${
                      isCurrent
                        ? 'border-[#1D2C4F] bg-[#1D2C4F] text-[#F3F3F1]'
                        : isAnswered
                          ? 'border-[#84A4B1]/30 bg-[#84A4B1]/10 text-[#84A4B1]'
                          : 'border-[#1D2C4F]/10 text-[#1D2C4F]/30 hover:border-[#1D2C4F]/25'
                    }
                  `}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Submit confirmation modal */}
      {showConfirm && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center p-5"
          role="dialog"
          aria-modal="true"
          aria-label="تأكيد تسليم الاختبار"
        >
          <div
            className="absolute inset-0 bg-[#0B1729]/60 backdrop-blur-sm"
            onClick={() => setShowConfirm(false)}
          />
          <div className="relative z-10 w-full max-w-[440px] rounded-[20px] border border-[#1D2C4F]/10 bg-[#F3F3F1] p-8 shadow-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-7 bg-[#84A4B1]/60" />
              <span className="font-arabic text-[10px] font-medium tracking-[0.18em] text-[#84A4B1]">
                تأكيد
              </span>
            </div>
            <h3 className="mb-4 font-arabic text-[18px] font-bold text-[#1D2C4F]">
              هل تريد تسليم الاختبار؟
            </h3>
            <p className="mb-6 font-arabic text-[13px] leading-7 text-[#1D2C4F]/55">
              أجبت على {answeredCount} من {totalQuestions} سؤال.
              {!allAnswered && ' هناك أسئلة لم تتم الإجابة عليها — يمكنك المراجعة قبل التسليم.'}
            </p>
            <div className="flex gap-3">
              <button
                ref={confirmCloseRef}
                type="button"
                onClick={() => setShowConfirm(false)}
                className="flex-1 rounded-full border border-[#1D2C4F]/12 py-3 font-arabic text-[13px] font-medium text-[#1D2C4F]/60 transition-colors duration-300 hover:border-[#1D2C4F]/25 hover:text-[#1D2C4F] min-h-[48px]"
              >
                مراجعة
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="flex-1 rounded-full bg-[#1D2C4F] py-3 font-arabic text-[13px] font-bold text-[#F3F3F1] transition-all duration-300 hover:bg-[#84A4B1] hover:text-[#1D2C4F] min-h-[48px]"
              >
                تسليم نهائي
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
