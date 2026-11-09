import { Link } from 'react-router-dom';
import { ACADEMY_DEMO_LABEL } from '@/data/academy';
import { useAcademyContent } from '@/hooks/useAcademyContent';
import { useAcademyProgress } from '@/hooks/useAcademyProgress';
import { useAcademyQuizzes } from '@/hooks/useAcademyQuizzes';
import type { AcademyCourseStatus } from '@/types';

const STATUS_LABELS: Record<AcademyCourseStatus, string> = {
  'not-started': 'لم يبدأ',
  'in-progress': 'قيد التعلّم',
  'completed': 'مكتمل',
};

const STATUS_STYLES: Record<AcademyCourseStatus, string> = {
  'not-started': 'border-[#1D2C4F]/10 text-[#1D2C4F]/40',
  'in-progress': 'border-[#54707D]/25 text-[#54707D] bg-[#54707D]/[0.04]',
  'completed': 'border-[#84A4B1]/30 text-[#84A4B1] bg-[#84A4B1]/[0.06]',
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

export default function AcademyProgressPage() {
  const academy = useAcademyContent();

  const { courses, overview, resumeInfo } = useAcademyProgress();

  const {
    allQuizSummaries,
    completedQuizCount,
    totalQuizCount,
  } = useAcademyQuizzes();

  const totalLessons = overview.totalLessons;
  const totalCompletedLessons = overview.totalCompletedLessons;

  const hasAnyProgress =
    totalCompletedLessons > 0 ||
    completedQuizCount > 0 ||
    Boolean(resumeInfo);

    const monthBlocks = Array.from(
      new Set(courses.map((course) => course.month))
    )
      .sort((a, b) => a - b)
      .map((month) => ({
        month,
        title: `الشهر ${month}`,
        courses: courses
          .filter((course) => course.month === month)
          .sort((a, b) => a.order - b.order),
      }));

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
        <div className="relative z-10 mx-auto max-w-[1000px] px-5 pt-[132px] pb-14 sm:px-6 sm:pt-[145px] lg:px-10 lg:pb-16">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-[11px]">
            <Link
              to="/academy"
              className="font-arabic text-[#F3F3F1]/40 transition-colors hover:text-[#84A4B1]"
            >
              الأكاديمية
            </Link>
            <span className="text-[#F3F3F1]/20">/</span>
            <span className="font-arabic text-[#84A4B1]">تقدّمي التعليمي</span>
          </nav>

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#84A4B1]" />
            <span className="text-[11px] font-medium tracking-[0.08em] text-[#54707D]">
              تقدّمك
            </span>
          </div>
          <h1 className="max-w-[700px] font-arabic text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.3] tracking-[-0.03em] text-[#F3F3F1]">
            تقدّمي التعليمي
          </h1>
          <p className="mt-5 max-w-[500px] font-arabic text-[13px] leading-8 text-[#F3F3F1]/50">
            نظرة شاملة على دروسك المكتملة واختباراتك في جميع دورات البرنامج.
          </p>
        </div>
      </section>

      {/* SUMMARY STATS */}
      <section className="bg-[#F3F3F1] px-5 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1000px]">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {/* Lessons completed */}
            <div className="rounded-[14px] border border-[#1D2C4F]/8 bg-[#F3F3F1] p-5">
              <span className="font-sans text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-none text-[#1D2C4F]">
                {totalCompletedLessons}
              </span>
              <h3 className="mt-2 font-arabic text-[11px] font-semibold text-[#1D2C4F]">
                درس مكتمل
              </h3>
              <p className="mt-1 font-arabic text-[10px] text-[#1D2C4F]/40">
                من {totalLessons} درس
              </p>
            </div>

            {/* Overall progress */}
            <div className="rounded-[14px] border border-[#1D2C4F]/8 bg-[#F3F3F1] p-5">
              <span className="font-sans text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-none text-[#1D2C4F]">
                {overview.overallProgressPercent}%
              </span>
              <h3 className="mt-2 font-arabic text-[11px] font-semibold text-[#1D2C4F]">
                التقدّم الإجمالي
              </h3>
              <p className="mt-1 font-arabic text-[10px] text-[#1D2C4F]/40">
                عبر جميع الدورات
              </p>
            </div>

            {/* Quizzes attempted */}
            <div className="rounded-[14px] border border-[#1D2C4F]/8 bg-[#F3F3F1] p-5">
              <span className="font-sans text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-none text-[#1D2C4F]">
                {completedQuizCount}
              </span>
              <h3 className="mt-2 font-arabic text-[11px] font-semibold text-[#1D2C4F]">
                اختبار مكتمل
              </h3>
              <p className="mt-1 font-arabic text-[10px] text-[#1D2C4F]/40">
                من {totalQuizCount} اختبارات
              </p>
            </div>

            {/* Courses completed */}
            <div className="rounded-[14px] border border-[#1D2C4F]/8 bg-[#F3F3F1] p-5">
              <span className="font-sans text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-none text-[#1D2C4F]">
                {overview.completedCourses}
              </span>
              <h3 className="mt-2 font-arabic text-[11px] font-semibold text-[#1D2C4F]">
                دورة مكتملة
              </h3>
              <p className="mt-1 font-arabic text-[10px] text-[#1D2C4F]/40">
                من {overview.totalCourses} دورات
              </p>
            </div>
          </div>

          {/* Overall progress bar */}
          <div className="mt-8 max-w-[400px]">
            <ProgressBar
              percent={overview.overallProgressPercent}
              label="التقدّم الإجمالي للبرنامج"
            />
          </div>
        </div>
      </section>

      {/* RESUME CARD */}
      {resumeInfo && (
        <section className="bg-[#F3F3F1] px-5 pb-12 sm:px-6 lg:px-10 lg:pb-16">
          <div className="mx-auto max-w-[1000px]">
            <Link
              to={`/academy/learn/${resumeInfo.courseId}/${resumeInfo.lessonId}`}
              className="group relative block overflow-hidden rounded-[20px] border border-[#1D2C4F]/10 bg-[#1D2C4F] p-6 transition-all duration-500 hover:border-[#84A4B1]/30 sm:p-8"
            >
              <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-[500px]">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-7 bg-[#84A4B1]" />
                    <span className="font-arabic text-[10px] font-medium tracking-[0.18em] text-[#84A4B1]">
                      واصل التعلّم
                    </span>
                  </div>
                  <h3 className="font-arabic text-[clamp(1.2rem,2.5vw,1.6rem)] font-bold leading-snug text-[#F3F3F1]">
                    {resumeInfo.lessonTitle}
                  </h3>
                  <p className="mt-2 font-arabic text-[12px] text-[#F3F3F1]/50">
                    ضمن دورة: {resumeInfo.courseTitle}
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#F3F3F1]/20 text-[#F3F3F1] transition-all duration-500 group-hover:border-[#84A4B1] group-hover:bg-[#84A4B1] group-hover:text-[#1D2C4F]">
                  ←
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* EMPTY STATE — no progress at all */}
      {!hasAnyProgress && (
        <section className="bg-[#F3F3F1] px-5 pb-12 sm:px-6 lg:px-10 lg:pb-16">
          <div className="mx-auto max-w-[600px] text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#1D2C4F]/10 bg-[#F3F3F1] mx-auto">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M3 12L9 18L21 6" stroke="#84A4B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="font-arabic text-[16px] font-bold text-[#1D2C4F]">
              لم تبدأ رحلتك التعليمية بعد
            </h2>
            <p className="mt-3 font-arabic text-[12px] leading-7 text-[#1D2C4F]/45">
              ابدأ بفتح أول درس في أي دورة، وسيظهر تقدّمك هنا تلقائياً.
            </p>
            <Link
              to="/academy/courses"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1D2C4F] px-6 py-3 font-arabic text-[13px] font-semibold text-[#F3F3F1] transition-colors duration-300 hover:bg-[#84A4B1] hover:text-[#1D2C4F]"
            >
              تصفّح الدورات
              <span className="text-[10px]">←</span>
            </Link>
          </div>
        </section>
      )}

      {/* COURSE-BY-COURSE PROGRESS */}
      <section className="bg-[#F3F3F1] px-5 pb-12 sm:px-6 lg:px-10 lg:pb-16">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-9 bg-[#84A4B1]/60" />
              <span className="font-arabic text-[10px] font-medium tracking-[0.2em] text-[#84A4B1]">
                الدورات
              </span>
            </div>
            <h2 className="font-arabic text-[clamp(1.4rem,3vw,2rem)] font-bold leading-[1.25] tracking-[-0.02em] text-[#1D2C4F]">
              تقدّم الدورات
            </h2>
          </div>

          <div className="space-y-4">
            {monthBlocks.map((monthBlock) => {
              const monthCourses = monthBlock.courses;

              return (
                <div key={monthBlock.month}>
                  <h3 className="mb-3 font-arabic text-[11px] font-semibold text-[#1D2C4F]/40">
                    {monthBlock.title}
                  </h3>
                  <div className="space-y-3">
                    {monthCourses.map((course) => {
                      const quiz = academy.getQuiz(course.id);
                      const quizSummary = quiz ? allQuizSummaries[quiz.id] : null;
                      const hasQuizAttempt = quizSummary && quizSummary.attemptsCount > 0;

                      return (
                        <div
                          key={course.id}
                          className="rounded-[14px] border border-[#1D2C4F]/8 bg-[#F3F3F1] p-4 sm:p-5"
                        >
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                            {/* Course info */}
                            <div className="flex flex-1 items-start gap-3 min-w-0">
                              <span className="font-sans text-[18px] font-bold leading-none text-[#1D2C4F]/25 shrink-0">
                                {course.number}
                              </span>
                              <div className="min-w-0">
                                <Link
                                  to={`/academy/courses/${course.id}`}
                                  className="font-arabic text-[14px] font-semibold text-[#1D2C4F] transition-colors hover:text-[#84A4B1]"
                                >
                                  {course.title}
                                </Link>
                                <div className="mt-1.5 flex flex-wrap items-center gap-2">
                                  <span
                                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-arabic text-[9px] font-medium ${STATUS_STYLES[course.status]}`}
                                  >
                                    {course.status === 'in-progress' && (
                                      <span className="h-[3px] w-[3px] rounded-full bg-[#54707D]" />
                                    )}
                                    {course.status === 'completed' && (
                                      <span className="h-[3px] w-[3px] rounded-full bg-[#84A4B1]" />
                                    )}
                                    {STATUS_LABELS[course.status]}
                                  </span>
                                  <span className="font-sans text-[10px] text-[#1D2C4F]/35">
                                    {course.completedLessons}/{course.totalLessons} درس
                                  </span>
                                  {hasQuizAttempt && quizSummary && (
                                    <span className="inline-flex items-center gap-1 rounded-full border border-[#84A4B1]/20 bg-[#84A4B1]/[0.06] px-2.5 py-0.5 font-arabic text-[9px] text-[#84A4B1]">
                                      اختبار: {quizSummary.latestScorePercent}%
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Progress bar */}
                            <div className="w-full sm:w-[140px] shrink-0">
                              <ProgressBar percent={course.progressPercent} />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUIZ PROGRESS */}
      <section className="bg-[#F3F3F1] px-5 pb-20 sm:px-6 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-9 bg-[#84A4B1]/60" />
              <span className="font-arabic text-[10px] font-medium tracking-[0.2em] text-[#84A4B1]">
                التقييمات
              </span>
            </div>
            <h2 className="font-arabic text-[clamp(1.4rem,3vw,2rem)] font-bold leading-[1.25] tracking-[-0.02em] text-[#1D2C4F]">
              اختباراتك
            </h2>
          </div>

          {completedQuizCount > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {academy.quizzes.map((quiz) => {
                const summary = allQuizSummaries[quiz.id];
                if (!summary || summary.attemptsCount === 0) return null;
                const course = courses.find((c) => c.id === quiz.courseId);

                return (
                  <div
                    key={quiz.id}
                    className="rounded-[14px] border border-[#1D2C4F]/8 bg-[#F3F3F1] p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="truncate font-arabic text-[13px] font-semibold text-[#1D2C4F]">
                          {course?.title || quiz.title}
                        </h3>
                        <div className="mt-2 flex flex-wrap items-center gap-3">
                          <span className="font-arabic text-[10px] text-[#1D2C4F]/40">
                            {summary.attemptsCount} محاولة
                          </span>
                          {summary.latestScorePercent !== null && (
                            <span className="font-arabic text-[10px] text-[#1D2C4F]/50">
                              آخر: {summary.latestScorePercent}%
                            </span>
                          )}
                          {summary.bestScorePercent !== null && (
                            <span className="font-arabic text-[10px] font-medium text-[#84A4B1]">
                              أفضل: {summary.bestScorePercent}%
                            </span>
                          )}
                        </div>
                      </div>
                      <Link
                        to={`/academy/courses/${quiz.courseId}/quiz`}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#1D2C4F]/10 text-[#1D2C4F]/40 transition-all duration-300 hover:border-[#84A4B1]/40 hover:text-[#84A4B1]"
                        aria-label={`إعادة اختبار ${course?.title || quiz.title}`}
                      >
                        ←
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-[14px] border border-[#1D2C4F]/8 bg-[#F3F3F1] py-12 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#1D2C4F]/10">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <path d="M3 4H13V11H9.5L7 13.5V11H3V4Z" stroke="#84A4B1" strokeWidth="1.2" />
                  <path d="M5.5 7H10.5M5.5 8.5H9" stroke="#84A4B1" strokeWidth="1" strokeLinecap="round" />
                </svg>
              </div>
              <p className="font-arabic text-[13px] font-medium text-[#1D2C4F]/50">
                لم تكمل أي اختبار بعد
              </p>
              <p className="mt-2 font-arabic text-[11px] text-[#1D2C4F]/35">
                ستظهر نتائج اختباراتك هنا عند إكمالها
              </p>
            </div>
          )}

          {/* Demo label */}
          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#84A4B1]/15 bg-[#84A4B1]/[0.03] px-4 py-2">
            <span className="h-[4px] w-[4px] rounded-full bg-[#84A4B1]/50" />
            <span className="font-arabic text-[10px] text-[#84A4B1]/70">
              {ACADEMY_DEMO_LABEL}
            </span>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex flex-wrap gap-4 border-t border-[#1D2C4F]/8 pt-8">
            <Link
              to="/academy"
              className="font-arabic text-[12px] font-medium text-[#1D2C4F]/50 transition-colors duration-300 hover:text-[#84A4B1]"
            >
              ← العودة إلى لوحة التحكم
            </Link>
            <Link
              to="/academy/profile"
              className="font-arabic text-[12px] font-medium text-[#1D2C4F]/50 transition-colors duration-300 hover:text-[#84A4B1]"
            >
              ملفي الشخصي ←
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
