import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ACADEMY_DEMO_LABEL } from '@/data/academy';
import { useAcademyProgress } from '@/hooks/useAcademyProgress';
import { useAcademyQuizzes } from '@/hooks/useAcademyQuizzes';
import type { AcademyCourse, AcademyCourseStatus } from '@/types';
import { useAcademyContent } from '@/hooks/useAcademyContent';

const STATUS_FILTERS: { value: AcademyCourseStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'الكل' },
  { value: 'not-started', label: 'لم يبدأ' },
  { value: 'in-progress', label: 'قيد التعلّم' },
  { value: 'completed', label: 'مكتمل' },
];

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

const STORAGE_KEY = 'fnar-academy-filter';

function CourseCard({ course, quizCompleted }: { course: AcademyCourse; quizCompleted: boolean }) {
  const isInProgress = course.status === 'in-progress';
  const isCompleted = course.status === 'completed';

  return (
    <Link
      to={`/academy/courses/${course.id}`}
      className="group flex flex-col rounded-[16px] border border-[#1D2C4F]/8 bg-[#F3F3F1] p-6 transition-all duration-300 hover:border-[#84A4B1]/30 hover:shadow-[0_12px_40px_rgba(29,44,79,0.06)] lg:p-7"
    >
      {/* Header */}
      <div className="mb-5 flex items-start justify-between">
        <span
          className={`font-sans text-[clamp(1.5rem,3vw,2rem)] font-bold leading-none ${
            isCompleted ? 'text-[#84A4B1]' : isInProgress ? 'text-[#1D2C4F]' : 'text-[#1D2C4F]/20'
          }`}
        >
          {course.number}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-arabic text-[10px] font-medium ${STATUS_STYLES[course.status]}`}
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

      {/* Title */}
      <h3 className="mb-3 font-arabic text-[15px] font-bold leading-snug text-[#1D2C4F]">
        {course.title}
      </h3>

      {/* Description */}
      <p className="mb-5 flex-1 font-arabic text-[12px] leading-7 text-[#1D2C4F]/50">
        {course.description}
      </p>

      {/* Footer */}
      <div className="border-t border-[#1D2C4F]/8 pt-4">
        {(isInProgress || isCompleted) && (
          <div className="mb-3">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="font-arabic text-[10px] text-[#1D2C4F]/40">
                {course.completedLessons}/{course.totalLessons} درس
              </span>
              <span className="font-sans text-[10px] font-semibold text-[#1D2C4F]/55">
                {course.progressPercent}%
              </span>
            </div>
            <div
              className="relative h-[4px] w-full overflow-hidden rounded-full bg-[#1D2C4F]/8"
              role="progressbar"
              aria-valuenow={course.progressPercent}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="absolute inset-y-0 right-0 rounded-full bg-[#84A4B1]"
                style={{ width: `${course.progressPercent}%` }}
              />
            </div>
          </div>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-arabic text-[10px] text-[#1D2C4F]/35">
              الشهر {course.month}
            </span>
            {quizCompleted && (
              <span className="inline-flex items-center gap-1 rounded-full border border-[#84A4B1]/20 bg-[#84A4B1]/[0.06] px-2 py-0.5 font-arabic text-[9px] text-[#84A4B1]">
                <span className="h-[3px] w-[3px] rounded-full bg-[#84A4B1]" />
                تم الاختبار
              </span>
            )}
          </div>
          <span className="flex items-center gap-1.5 font-arabic text-[11px] font-medium text-[#84A4B1] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            التفاصيل
            <span className="text-[10px]">←</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function AcademyCourses() {
  const { courses } = useAcademyProgress();
  const { allQuizSummaries } = useAcademyQuizzes();
  const academy = useAcademyContent();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<AcademyCourseStatus | 'all'>(
    'all',
  );

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.statusFilter) setStatusFilter(parsed.statusFilter);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ statusFilter }),
      );
    } catch {
      // ignore
    }
  }, [statusFilter]);

  const filteredCourses = useMemo(() => {
    return [...courses]
      .sort((a, b) => a.order - b.order)
      .filter((course) => {
        const matchesStatus =
          statusFilter === 'all' || course.status === statusFilter;

        const query = search.trim().toLocaleLowerCase();

        const matchesSearch =
          !query ||
          course.title.toLocaleLowerCase().includes(query) ||
          course.description.toLocaleLowerCase().includes(query);

        return matchesStatus && matchesSearch;
      });
  }, [courses, search, statusFilter]);

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
        <div className="relative z-10 mx-auto max-w-[1200px] px-5 pt-[132px] pb-14 sm:px-6 sm:pt-[145px] lg:px-10 lg:pb-16">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-[11px]">
            <Link
              to="/academy"
              className="font-arabic text-[#F3F3F1]/40 transition-colors hover:text-[#84A4B1]"
            >
              الأكاديمية
            </Link>
            <span className="text-[#F3F3F1]/20">/</span>
            <span className="font-arabic text-[#84A4B1]">الدورات</span>
          </nav>

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#84A4B1]" />
            <span className="text-[11px] font-medium tracking-[0.08em] text-[#54707D]">
              مكتبة الدورات
            </span>
          </div>
          <h1 className="max-w-[780px] font-arabic text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold leading-[1.3] tracking-[-0.03em] text-[#F3F3F1]">
            جميع دورات البرنامج
          </h1>
          <p className="mt-5 max-w-[520px] font-arabic text-[13px] leading-8 text-[#F3F3F1]/50">
            {`اكتشف ${courses.length} دورة تعليمية ضمن برنامج فنر. تصفّح الدورات وابدأ أو تابع رحلتك التعليمية.`}
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

      {/* CONTROLS + GRID */}
      <section className="bg-[#F3F3F1] px-5 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          {/* Search + Filters */}
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full max-w-[400px]">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ابحث في الدورات..."
                aria-label="بحث في الدورات"
                className="w-full rounded-full border border-[#1D2C4F]/12 bg-[#F3F3F1] px-5 py-3 pr-12 font-arabic text-[13px] text-[#1D2C4F] placeholder:text-[#1D2C4F]/30 transition-colors duration-300 focus:border-[#84A4B1] focus:outline-none focus:ring-2 focus:ring-[#84A4B1]/20"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1D2C4F]/30">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </span>
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  aria-label="مسح البحث"
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full text-[#1D2C4F]/30 transition-colors hover:text-[#1D2C4F]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Status filters */}
            <div className="flex flex-wrap gap-2">
              {STATUS_FILTERS.map((filter) => {
                const isActive = statusFilter === filter.value;
                return (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => setStatusFilter(filter.value)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-4 py-2 font-arabic text-[12px] font-medium transition-all duration-300 ${
                      isActive
                        ? 'border-[#1D2C4F] bg-[#1D2C4F] text-[#F3F3F1]'
                        : 'border-[#1D2C4F]/12 bg-transparent text-[#1D2C4F]/55 hover:border-[#1D2C4F]/25 hover:text-[#1D2C4F]'
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results count */}
          <div className="mb-6 flex items-center justify-between">
            <span className="font-arabic text-[11px] text-[#1D2C4F]/40">
              {filteredCourses.length} دورة
            </span>
          </div>

          {/* Course grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  quizCompleted={(() => {
                    const quiz = academy.getQuiz(course.id);

                    if (!quiz) return false;

                    const summary = allQuizSummaries[quiz.id];

                    return Boolean(summary && summary.attemptsCount > 0);
                  })()}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#1D2C4F]/10 text-[#1D2C4F]/20">
                <svg width="22" height="22" viewBox="0 0 16 16" fill="none">
                  <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <p className="font-arabic text-[14px] font-medium text-[#1D2C4F]/50">
                لا توجد دورات مطابقة لبحثك
              </p>
              <p className="mt-2 font-arabic text-[12px] text-[#1D2C4F]/35">
                جرّب كلمات بحث مختلفة أو غيّر الفلتر
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch('');
                  setStatusFilter('all');
                }}
                className="mt-6 rounded-full border border-[#1D2C4F]/15 px-5 py-2 font-arabic text-[12px] font-medium text-[#1D2C4F]/60 transition-colors duration-300 hover:border-[#84A4B1]/40 hover:text-[#1D2C4F]"
              >
                إعادة ضبط
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
