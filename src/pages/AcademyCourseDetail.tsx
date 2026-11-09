import { useParams, Link, useNavigate } from 'react-router-dom';
import { ACADEMY_DEMO_LABEL } from '@/data/academy';
import { useAcademyContent } from '@/hooks/useAcademyContent';
import { useAcademyProgress } from '@/hooks/useAcademyProgress';
import { useAcademyQuizzes } from '@/hooks/useAcademyQuizzes';
import type { AcademyCourse, AcademyCourseStatus } from '@/types';

const STATUS_LABELS: Record<AcademyCourseStatus, string> = {
  'not-started': 'لم يبدأ',
  'in-progress': 'قيد التعلّم',
  'completed': 'مكتمل',
};

const MONTH_LABELS: Record<number, string> = {
  1: 'الشهر الأول',
  2: 'الشهر الثاني',
  3: 'الشهر الثالث',
};

function ProgressBar({ percent, label }: { percent: number; label?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <div className="flex items-center justify-between">
          <span className="font-arabic text-[10px] text-[#1D2C4F]/45">{label}</span>
          <span className="font-sans text-[10px] font-semibold text-[#1D2C4F]/60">{percent}%</span>
        </div>
      )}
      <div
        className="relative h-[5px] w-full overflow-hidden rounded-full bg-[#1D2C4F]/8"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="absolute inset-y-0 right-0 rounded-full bg-[#84A4B1] transition-all duration-700"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default function AcademyCourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();

  const academy = useAcademyContent();
  const { courses, completedIds, resumeInfo } = useAcademyProgress();
  const { getCourseQuizSummary } = useAcademyQuizzes();

  const quiz = courseId
    ? academy.getQuiz(courseId)
    : undefined;

  const quizSummary = courseId
    ? getCourseQuizSummary(courseId)
    : null;

  const courseBase = courseId
    ? academy.getCourse(courseId)
    : undefined;

  if (!courseBase) {
    return (
      <div dir="rtl" className="min-h-[60vh] bg-[#F3F3F1]">
        <div className="mx-auto max-w-[600px] px-5 pt-[160px] pb-20 text-center sm:px-6">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#1D2C4F]/10 text-[#1D2C4F]/20 mx-auto">
            <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
              <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </div>
          <h1 className="font-arabic text-[clamp(1.6rem,3vw,2rem)] font-bold text-[#1D2C4F]">
            الدورة غير موجودة
          </h1>
          <p className="mt-4 font-arabic text-[13px] leading-7 text-[#1D2C4F]/45">
            لم نتمكن من العثور على هذه الدورة. قد يكون الرابط غير صحيح.
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

  const course = courses.find((c) => c.id === courseId)!;

  const modules = academy.getModules(course.id);
  const flatLessons = academy.getLessons(course.id);

  const completedModuleLessons = flatLessons.filter((l) =>
    completedIds.has(l.id),
  ).length;

  const isInProgress = course.status === 'in-progress';
  const isCompleted = course.status === 'completed';
  const isNotStarted = course.status === 'not-started';

  const sortedCourses = [...courses].sort(
  (a, b) => a.order - b.order
);

  const currentCourseIndex = sortedCourses.findIndex(
    (item) => item.id === course.id
  );

  const prevCourse =
    currentCourseIndex > 0
      ? sortedCourses[currentCourseIndex - 1]
      : undefined;

  const nextCourse =
    currentCourseIndex >= 0
      ? sortedCourses[currentCourseIndex + 1]
      : undefined;

  // CTA: "ابدأ التعلّم" opens first lesson; "متابعة التعلّم" opens last visited lesson
  const firstLesson = flatLessons[0];
  const resumeLesson =
    resumeInfo && resumeInfo.courseId === course.id
      ? flatLessons.find((l) => l.id === resumeInfo.lessonId)
      : null;

  const actionLesson = resumeLesson || firstLesson;
  const actionLabel = isNotStarted ? 'ابدأ التعلّم' : 'متابعة التعلّم';

  const handleStartLearning = () => {
    if (actionLesson) {
      navigate(`/academy/learn/${course.id}/${actionLesson.id}`);
    }
  };

  return (
    <div dir="rtl">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#0F1E36]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(132,164,177,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(132,164,177,.05) 1px, transparent 1px)',
            backgroundSize: '84px 84px',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[60px] top-[80px] h-[280px] w-[280px] rounded-full border border-white/[0.06]"
        />
        <div className="relative z-10 mx-auto max-w-[1200px] px-5 pt-[130px] pb-14 sm:px-6 sm:pt-[145px] lg:px-10 lg:pb-16">
          {/* Breadcrumbs */}
          <nav className="mb-6 flex items-center gap-2 text-[11px]">
            <Link
              to="/academy"
              className="font-arabic text-[#F3F3F1]/40 transition-colors hover:text-[#84A4B1]"
            >
              الأكاديمية
            </Link>
            <span className="text-[#F3F3F1]/20">/</span>
            <Link
              to="/academy/courses"
              className="font-arabic text-[#F3F3F1]/40 transition-colors hover:text-[#84A4B1]"
            >
              الدورات
            </Link>
            <span className="text-[#F3F3F1]/20">/</span>
            <span className="font-arabic text-[#84A4B1]">{course.title}</span>
          </nav>

          {/* Course number + status */}
          <div className="mb-6 flex items-center gap-4">
            <span className="font-sans text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-none text-[#84A4B1]/30">
              {course.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-arabic text-[10px] font-medium tracking-[0.15em] text-[#84A4B1]">
                {MONTH_LABELS[course.month] || `شهر ${course.month}`}
              </span>
              <span
                className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 font-arabic text-[10px] font-medium ${
                  isCompleted
                    ? 'border-[#84A4B1]/30 text-[#84A4B1] bg-[#84A4B1]/[0.06]'
                    : isInProgress
                      ? 'border-[#54707D]/25 text-[#54707D] bg-[#54707D]/[0.04]'
                      : 'border-[#F3F3F1]/15 text-[#F3F3F1]/40'
                }`}
              >
                {isInProgress && (
                  <span className="h-[4px] w-[4px] rounded-full bg-[#54707D]" />
                )}
                {isCompleted && (
                  <span className="h-[4px] w-[4px] rounded-full bg-[#84A4B1]" />
                )}
                {STATUS_LABELS[course.status]}
              </span>
            </div>
          </div>

          <h1 className="max-w-[780px] font-arabic text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.3] tracking-[-0.03em] text-[#F3F3F1]">
            {course.title}
          </h1>
          <p className="mt-5 max-w-[560px] font-arabic text-[13px] leading-8 text-[#F3F3F1]/55">
            {course.description}
          </p>

          {/* Demo label */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#84A4B1]/20 bg-[#84A4B1]/[0.06] px-4 py-2">
            <span className="h-[5px] w-[5px] rounded-full bg-[#84A4B1]" />
            <span className="font-arabic text-[10px] text-[#84A4B1]">
              {ACADEMY_DEMO_LABEL}
            </span>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-[#F3F3F1] px-5 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[900px]">
          {/* Progress summary */}
          {(isInProgress || isCompleted) && (
            <div className="mb-12 rounded-[16px] border border-[#1D2C4F]/8 bg-[#F3F3F1] p-6 lg:p-8">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-arabic text-[14px] font-bold text-[#1D2C4F]">
                  ملخّص التقدّم
                </h2>
                <span className="font-arabic text-[11px] text-[#1D2C4F]/40">
                  {completedModuleLessons}/{course.totalLessons} درس مكتمل
                </span>
              </div>
              <ProgressBar
                percent={course.progressPercent}
                label="تقدّم الدورة"
              />
            </div>
          )}

          {/* CTA action */}
          <div className="mb-12">
            <div className="flex flex-col items-start gap-4 rounded-[16px] border border-[#84A4B1]/15 bg-[#84A4B1]/[0.03] p-6 lg:p-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#84A4B1]/60" />
                <span className="font-arabic text-[10px] font-medium tracking-[0.18em] text-[#84A4B1]">
                  {isCompleted ? 'مراجعة' : 'ابدأ الآن'}
                </span>
              </div>
              <p className="font-arabic text-[13px] leading-7 text-[#1D2C4F]/60">
                {isCompleted
                  ? 'أكملت هذه الدورة. يمكنك مراجعة المحتوى في أي وقت.'
                  : resumeLesson
                    ? `آخر درس زرته: ${resumeLesson.title}`
                    : 'ابدأ بأول درس في هذه الدورة.'}
              </p>
              <button
                type="button"
                onClick={handleStartLearning}
                disabled={!actionLesson}
                className="group relative flex min-h-[52px] min-w-[200px] items-center justify-between overflow-hidden rounded-full bg-[#1D2C4F] px-5 pr-6 font-arabic text-[13px] font-bold text-[#F3F3F1] transition-all duration-500 hover:-translate-y-[1px]"
              >
                <span className="absolute inset-0 translate-y-full bg-[#84A4B1] transition-transform duration-500 ease-out group-hover:translate-y-0" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#1D2C4F]">
                  {actionLesson ? actionLabel : 'لا توجد دروس بعد'}
                </span>
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#F3F3F1]/10 text-[10px] transition-all duration-500 group-hover:-translate-x-1 group-hover:bg-[#1D2C4F]/10">
                  ←
                </span>
              </button>
            </div>
          </div>

          {/* Quiz CTA */}
          {quiz && (
            <div className="mb-12">
              <div className="flex flex-col items-start gap-4 rounded-[16px] border border-[#1D2C4F]/8 bg-[#0F1E36] p-6 lg:p-8">
                <div className="flex items-center gap-3">
                  <span className="h-px w-7 bg-[#84A4B1]/60" />
                  <span className="font-arabic text-[10px] font-medium tracking-[0.18em] text-[#84A4B1]">
                    اختبر معلوماتك
                  </span>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between w-full">
                  <div className="max-w-[500px]">
                    <h3 className="font-arabic text-[15px] font-bold text-[#F3F3F1]">
                      {quiz.title}
                    </h3>
                    <p className="mt-2 font-arabic text-[12px] leading-7 text-[#F3F3F1]/50">
                      {quiz.description}
                    </p>
                    {quizSummary && quizSummary.attemptsCount > 0 && (
                      <div className="mt-3 flex flex-wrap gap-3">
                        {quizSummary.latestScorePercent !== null && (
                          <div className="flex items-center gap-2 rounded-full border border-[#F3F3F1]/10 px-3 py-1">
                            <span className="font-arabic text-[10px] text-[#F3F3F1]/40">آخر نتيجة</span>
                            <span className="font-sans text-[11px] font-bold text-[#F3F3F1]">
                              {quizSummary.latestScorePercent}%
                            </span>
                          </div>
                        )}
                        {quizSummary.bestScorePercent !== null && (
                          <div className="flex items-center gap-2 rounded-full border border-[#84A4B1]/20 bg-[#84A4B1]/[0.06] px-3 py-1">
                            <span className="font-arabic text-[10px] text-[#84A4B1]">أفضل نتيجة</span>
                            <span className="font-sans text-[11px] font-bold text-[#84A4B1]">
                              {quizSummary.bestScorePercent}%
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <Link
                    to={`/academy/courses/${course.id}/quiz`}
                    className="group relative flex min-h-[48px] min-w-[160px] items-center justify-between overflow-hidden rounded-full bg-[#84A4B1] px-5 pr-5 font-arabic text-[12px] font-bold text-[#1D2C4F] transition-all duration-500 hover:-translate-y-[1px]"
                  >
                    <span className="relative z-10">
                      {quizSummary && quizSummary.attemptsCount > 0 ? 'إعادة الاختبار' : 'ابدأ الاختبار'}
                    </span>
                    <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-[#1D2C4F]/10 text-[10px] transition-all duration-500 group-hover:-translate-x-1">
                      ←
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Curriculum */}
          <div>
            <div className="mb-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-9 bg-[#84A4B1]/60" />
                <span className="font-arabic text-[10px] font-medium tracking-[0.2em] text-[#84A4B1]">
                  المحتوى التعليمي
                </span>
              </div>
              <h2 className="font-arabic text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.25] tracking-[-0.02em] text-[#1D2C4F]">
                وحدات الدورة
              </h2>
              <p className="mt-3 font-arabic text-[11px] leading-6 text-[#1D2C4F]/35">
                تصفّح وحدات الدورة ودروسها، وتابع تقدّمك في التعلّم.              </p>
            </div>

            <div className="space-y-6">
              {modules.map((module) => {
                const moduleCompleted = module.lessons.filter((l) =>
                  completedIds.has(l.id),
                ).length;
                return (
                  <div
                    key={module.id}
                    className="rounded-[14px] border border-[#1D2C4F]/8 bg-[#F3F3F1] p-5 lg:p-6"
                  >
                    <div className="mb-4 flex items-center justify-between border-b border-[#1D2C4F]/8 pb-4">
                      <h3 className="font-arabic text-[14px] font-bold text-[#1D2C4F]">
                        {module.title}
                      </h3>
                      <span className="font-sans text-[10px] text-[#1D2C4F]/35">
                        {moduleCompleted}/{module.lessons.length}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {module.lessons.map((lesson) => {
                        const lessonDone = completedIds.has(lesson.id);
                        return (
                          <li key={lesson.id}>
                            <Link
                              to={`/academy/learn/${course.id}/${lesson.id}`}
                              className="group flex items-center gap-3 rounded-lg px-2 py-2.5 transition-colors duration-200 hover:bg-[#1D2C4F]/[0.04]"
                            >
                              <span
                                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[9px] transition-colors ${
                                  lessonDone
                                    ? 'border-[#84A4B1]/30 bg-[#84A4B1]/10 text-[#84A4B1]'
                                    : 'border-[#1D2C4F]/10 text-[#1D2C4F]/30 group-hover:border-[#84A4B1]/30'
                                }`}
                              >
                                {lessonDone ? '✓' : String(lesson.order).padStart(2, '0')}
                              </span>
                              <span
                                className={`flex-1 font-arabic text-[12px] transition-colors ${
                                  lessonDone
                                    ? 'text-[#1D2C4F]/50'
                                    : 'text-[#1D2C4F]/80 group-hover:text-[#1D2C4F]'
                                }`}
                              >
                                {lesson.title}
                              </span>
                              <span className="font-sans text-[10px] text-[#1D2C4F]/30">
                                {lesson.durationMinutes} د
                              </span>
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[#1D2C4F]/20 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-[#84A4B1]">
                                ←
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Prev / Next navigation */}
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {prevCourse ? (
              <Link
                to={`/academy/courses/${prevCourse.id}`}
                className="group flex items-center gap-4 rounded-[14px] border border-[#1D2C4F]/8 p-5 transition-colors duration-300 hover:border-[#84A4B1]/25"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#1D2C4F]/10 text-[#1D2C4F]/40 transition-all duration-300 group-hover:border-[#84A4B1]/40 group-hover:text-[#84A4B1]">
                  →
                </span>
                <div className="flex-1">
                  <span className="font-arabic text-[10px] text-[#1D2C4F]/35">
                    الدورة السابقة
                  </span>
                  <p className="mt-1 font-arabic text-[13px] font-semibold text-[#1D2C4F]">
                    {prevCourse.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextCourse ? (
              <Link
                to={`/academy/courses/${nextCourse.id}`}
                className="group flex items-center gap-4 rounded-[14px] border border-[#1D2C4F]/8 p-5 text-end transition-colors duration-300 hover:border-[#84A4B1]/25"
              >
                <div className="flex-1">
                  <span className="font-arabic text-[10px] text-[#1D2C4F]/35">
                    الدورة التالية
                  </span>
                  <p className="mt-1 font-arabic text-[13px] font-semibold text-[#1D2C4F]">
                    {nextCourse.title}
                  </p>
                </div>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#1D2C4F]/10 text-[#1D2C4F]/40 transition-all duration-300 group-hover:border-[#84A4B1]/40 group-hover:text-[#84A4B1]">
                  ←
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* Back to library */}
          <div className="mt-10 flex justify-center">
            <Link
              to="/academy/courses"
              className="font-arabic text-[12px] font-medium text-[#1D2C4F]/50 transition-colors duration-300 hover:text-[#84A4B1]"
            >
              ← العودة إلى مكتبة الدورات
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
