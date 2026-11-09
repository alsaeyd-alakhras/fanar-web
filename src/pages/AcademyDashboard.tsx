import { Link } from 'react-router-dom';
import { ACADEMY_DEMO_LABEL } from '@/data/academy';
import { useAcademyContent } from '@/hooks/useAcademyContent';
import { useAcademyProgress } from '@/hooks/useAcademyProgress';
import { useAcademyQuizzes } from '@/hooks/useAcademyQuizzes';
import { useAcademyProfile } from '@/hooks/useAcademyProfile';
import type { AcademyCourse } from '@/types';

const STATUS_LABELS: Record<string, string> = {
  'not-started': 'لم يبدأ',
  'in-progress': 'قيد التعلّم',
  'completed': 'مكتمل',
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

function OverviewCard({
  value,
  label,
  sublabel,
}: {
  value: string;
  label: string;
  sublabel?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[14px] border border-[#1D2C4F]/8 bg-[#F3F3F1] p-6">
      <span className="font-sans text-[clamp(1.8rem,3vw,2.4rem)] font-bold leading-none text-[#1D2C4F]">
        {value}
      </span>
      <h3 className="mt-3 font-arabic text-[12px] font-semibold text-[#1D2C4F]">
        {label}
      </h3>
      {sublabel && (
        <p className="mt-1 font-arabic text-[10px] text-[#1D2C4F]/40">{sublabel}</p>
      )}
    </div>
  );
}

function CourseRow({ course }: { course: AcademyCourse }) {
  const isInProgress = course.status === 'in-progress';
  const isCompleted = course.status === 'completed';

  return (
    <Link
      to={`/academy/courses/${course.id}`}
      className="group flex items-center gap-4 border-b border-[#1D2C4F]/8 py-4 transition-colors duration-300 hover:bg-[#1D2C4F]/[0.02]"
    >
      <span
        className={`font-sans text-[clamp(1.2rem,2.5vw,1.6rem)] font-bold leading-none ${
          isCompleted ? 'text-[#84A4B1]' : isInProgress ? 'text-[#1D2C4F]' : 'text-[#1D2C4F]/25'
        }`}
      >
        {course.number}
      </span>
      <div className="flex-1">
        <h4 className="font-arabic text-[14px] font-semibold text-[#1D2C4F]">
          {course.title}
        </h4>
        <div className="mt-1 flex items-center gap-3">
          <span
            className={`font-arabic text-[10px] ${
              isCompleted
                ? 'text-[#84A4B1]'
                : isInProgress
                  ? 'text-[#54707D]'
                  : 'text-[#1D2C4F]/35'
            }`}
          >
            {STATUS_LABELS[course.status]}
          </span>
          {(isInProgress || isCompleted) && (
            <span className="font-sans text-[10px] text-[#1D2C4F]/35">
              {course.completedLessons}/{course.totalLessons}
            </span>
          )}
        </div>
      </div>
      {(isInProgress || isCompleted) && (
        <div className="hidden w-[100px] sm:block">
          <ProgressBar percent={course.progressPercent} />
        </div>
      )}
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#1D2C4F]/10 text-[#1D2C4F]/40 transition-all duration-300 group-hover:border-[#84A4B1]/40 group-hover:bg-[#84A4B1]/10 group-hover:text-[#84A4B1]">
        ←
      </span>
    </Link>
  );
}

export default function AcademyDashboard() {
  const { courses, overview, resumeInfo } = useAcademyProgress();
  const academy = useAcademyContent();
  const { allQuizSummaries, completedQuizCount, totalQuizCount } = useAcademyQuizzes();
  const { profile, hasName, initials } = useAcademyProfile();

  // Recent quiz results (sorted by submittedAt desc)
  const recentQuizResults = academy.quizzes
    .map((quiz) => {
      const summary = allQuizSummaries[quiz.id];

      if (!summary?.latestAttempt) return null;

      return { quiz, summary };
    })
    .filter(
      (item): item is {
        quiz: (typeof academy.quizzes)[number];
        summary: NonNullable<
          (typeof allQuizSummaries)[string]
        >;
      } => item !== null
    )
    .sort(
      (a, b) =>
        new Date(b.summary.latestAttempt!.submittedAt).getTime() -
        new Date(a.summary.latestAttempt!.submittedAt).getTime()
    )
    .slice(0, 4);

  const resumeCourse = resumeInfo
    ? courses.find((c) => c.id === resumeInfo.courseId)
    : null;

  const inProgressCourses = courses.filter((c) => c.status === 'in-progress');
  const nextCourses = courses
    .filter((c) => c.status === 'not-started')
    .slice(0, 4);
        const monthBlocks = Array.from(
          new Set(courses.map((course) => course.month))
        )
          .sort((a, b) => a - b)
          .map((month) => ({
            month,
            title: `الشهر ${month}`,
            description: 'دورات هذا الشهر ضمن المسار التعليمي.',
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
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[80px] top-[60px] h-[320px] w-[320px] rounded-full border border-white/[0.06]"
        />
        <div className="relative z-10 mx-auto max-w-[1200px] px-5 pt-[132px] pb-16 sm:px-6 sm:pt-[145px] lg:px-10 lg:pb-20">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-[#84A4B1]" />
            <span className="text-[11px] font-medium tracking-[0.08em] text-[#54707D]">
              أكاديمية فنر
            </span>
          </div>

          {/* Student greeting with avatar + quick links */}
          <div className="mb-7 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="max-w-[780px] font-arabic text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.3] tracking-[-0.03em] text-[#F3F3F1]">
              {hasName ? `أهلاً بك، ${profile.displayName}` : 'أهلاً بك في أكاديمية فنر'}
            </h1>

            {hasName && (
              <div className="flex items-center gap-3 rounded-full border border-[#F3F3F1]/10 bg-[#F3F3F1]/[0.03] py-1.5 pl-1.5 pr-4">
                <Link
                  to="/academy/profile"
                  className="flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-80"
                  aria-label="الملف الشخصي"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#84A4B1]/20 bg-[#84A4B1]/[0.08] font-sans text-[12px] font-bold text-[#84A4B1]">
                    {initials || '؟'}
                  </span>
                </Link>
                <Link
                  to="/academy/progress"
                  className="font-arabic text-[11px] font-medium text-[#F3F3F1]/60 transition-colors duration-300 hover:text-[#84A4B1]"
                >
                  تقدّمي ←
                </Link>
              </div>
            )}
          </div>

          {!hasName && (
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <Link
                to="/academy/profile"
                className="inline-flex items-center gap-2 rounded-full border border-[#84A4B1]/25 bg-[#84A4B1]/[0.06] px-4 py-2 font-arabic text-[11px] font-medium text-[#84A4B1] transition-colors duration-300 hover:bg-[#84A4B1]/10"
              >
                أنشئ ملفك الشخصي ←
              </Link>
              <Link
                to="/academy/progress"
                className="inline-flex items-center gap-2 rounded-full border border-[#F3F3F1]/15 px-4 py-2 font-arabic text-[11px] font-medium text-[#F3F3F1]/50 transition-colors duration-300 hover:border-[#84A4B1]/30 hover:text-[#84A4B1]"
              >
                تقدّمي التعليمي ←
              </Link>
            </div>
          )}
          <p className="mt-6 max-w-[560px] font-arabic text-[14px] leading-8 text-[#F3F3F1]/55 sm:text-[15px]">
            {`رحلة تعليمية متكاملة تضم ${overview.totalCourses} دورة على مدى ${overview.programDurationMonths} أشهر. هذه الصفحة تعرض تجربتك التعليمية ومسارك في البرنامج.`}
          </p>

          {/* Demo label */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#84A4B1]/20 bg-[#84A4B1]/[0.06] px-4 py-2">
            <span className="h-[5px] w-[5px] rounded-full bg-[#84A4B1]" />
            <span className="font-arabic text-[10px] text-[#84A4B1]">
              {ACADEMY_DEMO_LABEL}
            </span>
          </div>
        </div>
      </section>

      {/* OVERVIEW CARDS */}
      <section className="bg-[#F3F3F1] px-5 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-9 bg-[#84A4B1]/60" />
              <span className="font-arabic text-[10px] font-medium tracking-[0.2em] text-[#84A4B1]">
                نظرة عامة
              </span>
            </div>
            <h2 className="font-arabic text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold leading-[1.25] tracking-[-0.02em] text-[#1D2C4F]">
              رحلتك في أرقام
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <OverviewCard
              value={String(overview.totalCourses)}
              label="دورات في البرنامج"
              sublabel="منهج متكامل"
            />
            <OverviewCard
              value={`${overview.programDurationMonths}`}
              label="أشهر"
              sublabel="مدة المرحلة التعليمية"
            />
            <OverviewCard
              value={`${overview.totalCompletedLessons}`}
              label="درس مكتمل"
              sublabel={`من ${overview.totalLessons} درس`}
            />
            <OverviewCard
              value={`${overview.overallProgressPercent}%`}
              label="التقدّم الإجمالي"
              sublabel="عرض تجريبي"
            />
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

      {/* ASSESSMENT SUMMARY */}
      {completedQuizCount > 0 && (
        <section className="bg-[#F3F3F1] px-5 py-16 sm:px-6 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-9 bg-[#84A4B1]/60" />
                <span className="font-arabic text-[10px] font-medium tracking-[0.2em] text-[#84A4B1]">
                  التقييمات
                </span>
              </div>
              <h2 className="font-arabic text-[clamp(1.4rem,3vw,2rem)] font-bold leading-[1.25] tracking-[-0.02em] text-[#1D2C4F]">
                اختباراتك الأخيرة
              </h2>
              <p className="mt-3 font-arabic text-[12px] leading-6 text-[#1D2C4F]/40">
                أكملت {completedQuizCount} من {totalQuizCount} اختبارات.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {recentQuizResults.map(({ quiz, summary }) => {
                const course = courses.find((c) => c.id === quiz.courseId);
                return (
                  <Link
                    key={quiz.id}
                    to={`/academy/courses/${quiz.courseId}/quiz`}
                    className="group flex items-center gap-4 rounded-[14px] border border-[#1D2C4F]/8 bg-[#F3F3F1] p-5 transition-colors duration-300 hover:border-[#84A4B1]/25"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#84A4B1]/10">
                      <span className="font-sans text-[14px] font-bold text-[#84A4B1]">
                        {summary.latestScorePercent}%
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="truncate font-arabic text-[13px] font-semibold text-[#1D2C4F]">
                        {course?.title || quiz.title}
                      </h4>
                      <div className="mt-1 flex items-center gap-3">
                        <span className="font-arabic text-[10px] text-[#1D2C4F]/40">
                          {summary.attemptsCount} محاولة
                        </span>
                        {summary.bestScorePercent !== null && (
                          <span className="font-arabic text-[10px] text-[#84A4B1]">
                            أفضل: {summary.bestScorePercent}%
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#1D2C4F]/10 text-[#1D2C4F]/40 transition-all duration-300 group-hover:border-[#84A4B1]/40 group-hover:text-[#84A4B1]">
                      ←
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* RESUME CARD */}
      {resumeCourse && resumeInfo && (
        <section className="bg-[#F3F3F1] px-5 pb-16 sm:px-6 lg:px-10 lg:pb-20">
          <div className="mx-auto max-w-[1200px]">
            <Link
              to={`/academy/learn/${resumeInfo.courseId}/${resumeInfo.lessonId}`}
              className="group relative block overflow-hidden rounded-[20px] border border-[#1D2C4F]/10 bg-[#1D2C4F] p-8 transition-all duration-500 hover:border-[#84A4B1]/30 lg:p-10"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(132,164,177,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(132,164,177,.05) 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                }}
              />
              <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-[560px]">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-7 bg-[#84A4B1]" />
                    <span className="font-arabic text-[10px] font-medium tracking-[0.18em] text-[#84A4B1]">
                      واصل التعلّم
                    </span>
                  </div>
                  <h3 className="font-arabic text-[clamp(1.3rem,3vw,1.8rem)] font-bold leading-snug text-[#F3F3F1]">
                    {resumeInfo.lessonTitle}
                  </h3>
                  <p className="mt-3 font-arabic text-[12px] leading-7 text-[#F3F3F1]/50">
                    ضمن دورة: {resumeInfo.courseTitle}
                  </p>
                  <div className="mt-5 max-w-[300px]">
                    <ProgressBar
                      percent={resumeCourse.progressPercent}
                      label="تقدّم الدورة"
                    />
                  </div>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#F3F3F1]/20 text-[#F3F3F1] transition-all duration-500 group-hover:border-[#84A4B1] group-hover:bg-[#84A4B1] group-hover:text-[#1D2C4F]">
                  ←
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* PROGRAM JOURNEY */}
      <section className="bg-[#F3F3F1] px-5 pb-16 sm:px-6 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-9 bg-[#84A4B1]/60" />
              <span className="font-arabic text-[10px] font-medium tracking-[0.2em] text-[#84A4B1]">
                مسارك التعليمي
              </span>
            </div>
            <h2 className="font-arabic text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold leading-[1.25] tracking-[-0.02em] text-[#1D2C4F]">
              {`${monthBlocks.length} مراحل تعليمية.`}
            </h2>
            <p className="mt-4 max-w-[520px] font-arabic text-[13px] leading-7 text-[#1D2C4F]/50">
              هذا التقسيم الشهري توضيحي ويعرض التسلسل المقترح للدورات ضمن
              البرنامج المتكامل.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {monthBlocks.map((monthBlock) => {
            const monthCourses = monthBlock.courses;

              const monthProgress =
                monthCourses.length > 0
                  ? Math.round(
                      monthCourses.reduce(
                        (sum, c) => sum + c.progressPercent,
                        0,
                      ) / monthCourses.length,
                    )
                  : 0;

              return (
                <div
                  key={monthBlock.month}
                  className="relative overflow-hidden rounded-[16px] border border-[#1D2C4F]/8 bg-[#F3F3F1] p-6 lg:p-7"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-sans text-[2rem] font-bold leading-none text-[#84A4B1]/30">
                      {String(monthBlock.month).padStart(2, '0')}
                    </span>
                    <span className="font-arabic text-[10px] font-medium tracking-[0.15em] text-[#84A4B1]">
                      شهر {monthBlock.month}
                    </span>
                  </div>
                  <h3 className="mb-2 font-arabic text-[15px] font-bold text-[#1D2C4F]">
                    {monthBlock.title}
                  </h3>
                  <p className="mb-5 font-arabic text-[11px] leading-6 text-[#1D2C4F]/45">
                    {monthBlock.description}
                  </p>
                  <div className="mb-5">
                    <ProgressBar
                      percent={monthProgress}
                      label="تقدّم الشهر"
                    />
                  </div>
                  <ul className="space-y-2">
                    {monthCourses.map((course) => (
                      <li key={course.id}>
                        <Link
                          to={`/academy/courses/${course.id}`}
                          className="group flex items-center gap-3 rounded-lg px-2 py-2 transition-colors duration-200 hover:bg-[#1D2C4F]/[0.03]"
                        >
                          <span
                            className={`h-[5px] w-[5px] shrink-0 rounded-full ${
                              course.status === 'completed'
                                ? 'bg-[#84A4B1]'
                                : course.status === 'in-progress'
                                  ? 'bg-[#54707D]'
                                  : 'bg-[#1D2C4F]/20'
                            }`}
                          />
                          <span className="flex-1 font-arabic text-[12px] text-[#1D2C4F]/70 transition-colors duration-200 group-hover:text-[#1D2C4F]">
                            {course.title}
                          </span>
                          <span className="font-sans text-[9px] text-[#1D2C4F]/30">
                            {course.number}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COURSES IN PROGRESS + NEXT */}
      <section className="bg-[#F3F3F1] px-5 pb-20 sm:px-6 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* In progress */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-7 bg-[#84A4B1]/60" />
                <span className="font-arabic text-[11px] font-medium tracking-[0.15em] text-[#84A4B1]">
                  قيد التعلّم
                </span>
              </div>
              <div className="border-t border-[#1D2C4F]/8">
                {inProgressCourses.length > 0 ? (
                  inProgressCourses.map((course) => (
                    <CourseRow key={course.id} course={course} />
                  ))
                ) : (
                  <p className="py-6 font-arabic text-[12px] text-[#1D2C4F]/40">
                    لا توجد دورات قيد التعلّم حالياً.
                  </p>
                )}
              </div>
            </div>

            {/* Next up */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-7 bg-[#84A4B1]/60" />
                <span className="font-arabic text-[11px] font-medium tracking-[0.15em] text-[#84A4B1]">
                  القادمة
                </span>
              </div>
              <div className="border-t border-[#1D2C4F]/8">
                {nextCourses.map((course) => (
                  <CourseRow key={course.id} course={course} />
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 flex flex-col items-center gap-4">
            <Link
              to="/academy/courses"
              className="group relative flex min-h-[56px] min-w-[240px] items-center justify-between overflow-hidden rounded-full bg-[#1D2C4F] px-5 pr-7 font-arabic text-[13px] font-bold text-[#F3F3F1] transition-all duration-500 hover:-translate-y-[2px]"
            >
              <span className="absolute inset-0 translate-y-full bg-[#84A4B1] transition-transform duration-500 ease-out group-hover:translate-y-0" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#1D2C4F]">
                استكشف جميع الدورات
              </span>
              <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#F3F3F1]/10 text-[10px] transition-all duration-500 group-hover:-translate-x-1 group-hover:bg-[#1D2C4F]/10">
                ←
              </span>
            </Link>
          </div>

          {/* Empty state — no completed lessons and no quiz attempts */}
          {overview.totalCompletedLessons === 0 && completedQuizCount === 0 && (
            <div className="mt-12 flex flex-col items-center justify-center rounded-[16px] border border-dashed border-[#1D2C4F]/15 py-12 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#1D2C4F]/10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 6v6l4 2" stroke="#84A4B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="9" stroke="#84A4B1" strokeWidth="1.5" />
                </svg>
              </div>
              <p className="font-arabic text-[14px] font-semibold text-[#1D2C4F]">
                ابدأ أول درس لك اليوم
              </p>
              <p className="mt-2 max-w-[360px] font-arabic text-[12px] leading-7 text-[#1D2C4F]/40">
                لم تكمل أي درس أو اختبار بعد. اختر دورة وابدأ رحلتك التعليمية.
              </p>
              <Link
                to="/academy/progress"
                className="mt-5 font-arabic text-[11px] font-medium text-[#84A4B1] transition-colors duration-300 hover:text-[#1D2C4F]"
              >
                عرض صفحة التقدّم ←
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
