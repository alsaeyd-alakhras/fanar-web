import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { QUIZ_DEMO_LABEL } from '@/data/academyQuizzes';
import { useAcademyContent } from '@/hooks/useAcademyContent';
import { useAcademyQuizzes } from '@/hooks/useAcademyQuizzes';

export default function AcademyQuizResultsPage() {
  const { courseId } = useParams<{ courseId: string }>();
  const academy = useAcademyContent();
  const { getCourseQuizSummary } = useAcademyQuizzes();

  const course = courseId
    ? academy.getCourse(courseId)
    : undefined;

  const quiz = courseId
    ? academy.getQuiz(courseId)
    : undefined;

  const summary = useMemo(
    () => (courseId ? getCourseQuizSummary(courseId) : null),
    [courseId, getCourseQuizSummary],
  );

  if (!course || !quiz || !summary || !summary.latestAttempt) {
    return (
      <div dir="rtl" className="min-h-[60vh] bg-[#F3F3F1]">
        <div className="mx-auto max-w-[600px] px-5 pt-[160px] pb-20 text-center sm:px-6">
          <h1 className="font-arabic text-[clamp(1.6rem,3vw,2rem)] font-bold text-[#1D2C4F]">
            لا توجد نتائج
          </h1>
          <p className="mt-4 font-arabic text-[13px] leading-7 text-[#1D2C4F]/45">
            لم نتمكن من العثور على نتائج اختبار. قد يكون الرابط غير صحيح.
          </p>
          {course && (
            <Link
              to={`/academy/courses/${course.id}/quiz`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1D2C4F] px-6 py-3 font-arabic text-[13px] font-semibold text-[#F3F3F1] transition-colors duration-300 hover:bg-[#84A4B1] hover:text-[#1D2C4F]"
            >
              ابدأ الاختبار
              <span className="text-[10px]">←</span>
            </Link>
          )}
          {!course && (
            <Link
              to="/academy/courses"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1D2C4F] px-6 py-3 font-arabic text-[13px] font-semibold text-[#F3F3F1] transition-colors duration-300 hover:bg-[#84A4B1] hover:text-[#1D2C4F]"
            >
              العودة إلى مكتبة الدورات
              <span className="text-[10px]">←</span>
            </Link>
          )}
        </div>
      </div>
    );
  }

  const attempt = summary.latestAttempt;
  const scorePercent = attempt.scorePercent;
  const correctCount = attempt.correctCount;
  const totalQuestions = attempt.totalQuestions;

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
            <span className="font-arabic text-[#84A4B1]">النتائج</span>
          </nav>
        </div>
      </div>

      <div className="bg-[#F3F3F1]">
        <div className="mx-auto max-w-[900px] px-5 py-10 sm:px-6 lg:px-10 lg:py-14">
          {/* Score summary card */}
          <div className="relative overflow-hidden rounded-[20px] border border-[#1D2C4F]/10 bg-[#0F1E36] p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(132,164,177,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(132,164,177,.05) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />
            <div className="relative z-10 flex flex-col items-center gap-6 text-center">
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#84A4B1]" />
                <span className="font-arabic text-[10px] font-medium tracking-[0.18em] text-[#84A4B1]">
                  نتيجة الاختبار
                </span>
                <span className="h-px w-7 bg-[#84A4B1]" />
              </div>

              {/* Score circle */}
              <div className="relative flex h-[140px] w-[140px] items-center justify-center">
                <svg
                  className="absolute inset-0 -rotate-90"
                  viewBox="0 0 120 120"
                  aria-hidden="true"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="rgba(132,164,177,0.15)"
                    strokeWidth="6"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="#84A4B1"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${(scorePercent / 100) * 2 * Math.PI * 52} ${2 * Math.PI * 52}`}
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="relative z-10 flex flex-col items-center">
                  <span className="font-sans text-[2.5rem] font-bold leading-none text-[#F3F3F1]">
                    {scorePercent}%
                  </span>
                </div>
              </div>

              <div>
                <h1 className="font-arabic text-[clamp(1.3rem,3vw,1.8rem)] font-bold text-[#F3F3F1]">
                  {correctCount} من {totalQuestions} إجابة صحيحة
                </h1>
                <p className="mt-2 font-arabic text-[12px] text-[#F3F3F1]/45">
                  {quiz.title}
                </p>
              </div>

              {/* Best score indicator */}
              {summary.bestScorePercent !== null && summary.attemptsCount > 1 && (
                <div className="flex items-center gap-4 rounded-full border border-[#84A4B1]/20 bg-[#84A4B1]/[0.06] px-5 py-2">
                  <span className="font-arabic text-[10px] text-[#84A4B1]">
                    أفضل نتيجة: {summary.bestScorePercent}%
                  </span>
                  <span className="h-[4px] w-[4px] rounded-full bg-[#84A4B1]/30" />
                  <span className="font-arabic text-[10px] text-[#84A4B1]">
                    عدد المحاولات: {summary.attemptsCount}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to={`/academy/courses/${course.id}/quiz`}
              className="group relative flex min-h-[52px] min-w-[180px] items-center justify-center overflow-hidden rounded-full bg-[#1D2C4F] px-6 font-arabic text-[13px] font-bold text-[#F3F3F1] transition-all duration-500 hover:-translate-y-[1px]"
            >
              <span className="absolute inset-0 translate-y-full bg-[#84A4B1] transition-transform duration-500 ease-out group-hover:translate-y-0" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#1D2C4F]">
                إعادة الاختبار
              </span>
            </Link>
            <Link
              to={`/academy/courses/${course.id}`}
              className="flex min-h-[52px] min-w-[180px] items-center justify-center rounded-full border border-[#1D2C4F]/12 px-6 font-arabic text-[13px] font-bold text-[#1D2C4F]/70 transition-all duration-300 hover:border-[#84A4B1]/30 hover:text-[#1D2C4F]"
            >
              العودة إلى الدورة
            </Link>
          </div>

          {/* Questions review */}
          <div className="mt-12">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#84A4B1]/60" />
              <span className="font-arabic text-[10px] font-medium tracking-[0.2em] text-[#84A4B1]">
                مراجعة الإجابات
              </span>
            </div>

              {quiz.questions.length !== attempt.totalQuestions && (
                <p className="mb-5 rounded-lg border border-[#84A4B1]/20 bg-[#84A4B1]/[0.06] p-4 font-arabic text-[12px] leading-7 text-[#1D2C4F]/65">
                  تم تحديث أسئلة هذا الاختبار منذ محاولتك الأخيرة.
                  نتيجتك المحفوظة صحيحة، لكن مراجعة الإجابات أدناه تعرض النسخة الحالية من الأسئلة.
                </p>
              )}
            <div className="space-y-5">
              {quiz.questions.map((question, qIndex) => {
                const userAnswer = attempt.answers[question.id];
                const isCorrect = userAnswer === question.correctOptionId;
                const userOption = question.options.find((o) => o.id === userAnswer);
                const correctOption = question.options.find(
                  (o) => o.id === question.correctOptionId,
                );

                return (
                  <div
                    key={question.id}
                    className={`rounded-[14px] border p-5 lg:p-6 ${
                      isCorrect
                        ? 'border-[#84A4B1]/20 bg-[#84A4B1]/[0.02]'
                        : 'border-[#1D2C4F]/10 bg-[#F3F3F1]'
                    }`}
                  >
                    {/* Question header */}
                    <div className="mb-4 flex items-start gap-3">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                          isCorrect
                            ? 'bg-[#84A4B1]/15 text-[#84A4B1]'
                            : 'bg-[#1D2C4F]/8 text-[#1D2C4F]/50'
                        }`}
                      >
                        {isCorrect ? '✓' : '✕'}
                      </span>
                      <div className="flex-1">
                        <span className="font-arabic text-[10px] text-[#1D2C4F]/35">
                          السؤال {qIndex + 1}
                        </span>
                        <h3 className="mt-1 font-arabic text-[14px] font-bold leading-relaxed text-[#1D2C4F]">
                          {question.prompt}
                        </h3>
                      </div>
                    </div>

                    {/* Answers */}
                    <div className="space-y-2 pr-6 sm:pr-10">
                      {/* User's answer */}
                      <div
                        className={`flex items-center gap-3 rounded-lg p-3 ${
                          isCorrect
                            ? 'bg-[#84A4B1]/[0.06]'
                            : 'bg-[#1D2C4F]/[0.03]'
                        }`}
                      >
                        <span className="font-arabic text-[10px] font-medium text-[#1D2C4F]/40">
                          إجابتك:
                        </span>
                        <span
                          className={`flex-1 font-arabic text-[12px] ${
                            isCorrect ? 'text-[#84A4B1]' : 'text-[#1D2C4F]/60'
                          }`}
                        >
                          {userOption?.text || 'لم تتم الإجابة'}
                        </span>
                      </div>

                      {/* Correct answer (shown when user was wrong) */}
                      {!isCorrect && correctOption && (
                        <div className="flex items-center gap-3 rounded-lg bg-[#84A4B1]/[0.06] p-3">
                          <span className="font-arabic text-[10px] font-medium text-[#84A4B1]">
                            الإجابة الصحيحة:
                          </span>
                          <span className="flex-1 font-arabic text-[12px] text-[#84A4B1]">
                            {correctOption.text}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Explanation */}
                    <div className="mt-4 mr-0 sm:mr-10 rounded-lg border border-[#1D2C4F]/8 bg-[#F3F3F1] p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="6" stroke="#84A4B1" strokeWidth="1.3" />
                          <path d="M8 5V8.5M8 11V11.1" stroke="#84A4B1" strokeWidth="1.3" strokeLinecap="round" />
                        </svg>
                        <span className="font-arabic text-[10px] font-medium text-[#84A4B1]">
                          الشرح التعليمي
                        </span>
                      </div>
                      <p className="font-arabic text-[12px] leading-7 text-[#1D2C4F]/55">
                        {question.explanation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Demo label */}
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#84A4B1]/15 bg-[#84A4B1]/[0.03] px-4 py-2">
              <span className="h-[4px] w-[4px] rounded-full bg-[#84A4B1]/50" />
              <span className="font-arabic text-[10px] text-[#84A4B1]/70">
                {QUIZ_DEMO_LABEL}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
