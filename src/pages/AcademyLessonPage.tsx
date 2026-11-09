import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ACADEMY_DEMO_LABEL } from '@/data/academy';
import { useAcademyContent } from '@/hooks/useAcademyContent';
import { useAcademyProgress } from '@/hooks/useAcademyProgress';
import { useAcademyNotes } from '@/hooks/useAcademyNotes';
import type {
  AcademyCourseBase,
  AcademyModule,
  AcademyLesson,
} from '@/types';
import AcademyVideoPlayer from '@/components/academy/AcademyVideoPlayer';
import AcademyCurriculum from '@/components/academy/AcademyCurriculum';

type TabKey = 'content' | 'notes' | 'resources';

const TABS: { key: TabKey; label: string }[] = [
  { key: 'content', label: 'الدرس' },
  { key: 'notes', label: 'ملاحظاتي' },
  { key: 'resources', label: 'المصادر' },
];

export default function AcademyLessonPage() {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const navigate = useNavigate();
  const {
    completedIds,
    isLessonComplete,
    markComplete,
    undoComplete,
    setResumeLesson,
  } = useAcademyProgress();

  const [activeTab, setActiveTab] = useState<TabKey>('content');
  const [curriculumOpen, setCurriculumOpen] = useState(false);

  const academy = useAcademyContent();

  const course = courseId
    ? academy.getCourse(courseId)
    : undefined;

  // Validate course
  if (!course) {
    return (
      <div dir="rtl" className="min-h-[60vh] bg-[#F3F3F1]">
        <div className="mx-auto max-w-[600px] px-5 pt-[160px] pb-20 text-center sm:px-6">
          <h1 className="font-arabic text-[clamp(1.6rem,3vw,2rem)] font-bold text-[#1D2C4F]">
            الدورة غير موجودة
          </h1>
          <p className="mt-4 font-arabic text-[13px] leading-7 text-[#1D2C4F]/45">
            لم نتمكن من العثور على هذه الدورة.
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

  const modules = academy.getModules(course.id);
  const flatLessons = academy.getLessons(course.id);

  const lesson = flatLessons.find(
    (item) => item.id === lessonId
  );
  // Validate lesson
  if (!lesson) {
    return (
      <div dir="rtl" className="min-h-[60vh] bg-[#F3F3F1]">
        <div className="mx-auto max-w-[600px] px-5 pt-[160px] pb-20 text-center sm:px-6">
          <h1 className="font-arabic text-[clamp(1.6rem,3vw,2rem)] font-bold text-[#1D2C4F]">
            الدرس غير موجود
          </h1>
          <p className="mt-4 font-arabic text-[13px] leading-7 text-[#1D2C4F]/45">
            لم نتمكن من العثور على هذا الدرس ضمن الدورة.
          </p>
          <Link
            to={`/academy/courses/${course.id}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1D2C4F] px-6 py-3 font-arabic text-[13px] font-semibold text-[#F3F3F1] transition-colors duration-300 hover:bg-[#84A4B1] hover:text-[#1D2C4F]"
          >
            العودة إلى الدورة
            <span className="text-[10px]">←</span>
          </Link>
        </div>
      </div>
    );
  }

  // Find prev/next lessons in the flat list
  const currentIndex = flatLessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? flatLessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < flatLessons.length - 1 ? flatLessons[currentIndex + 1] : null;

  const isDone = isLessonComplete(lesson.id);
  const completedInCourse = flatLessons.filter((l) => completedIds.has(l.id)).length;
  const courseProgress =
    flatLessons.length > 0
      ? Math.round((completedInCourse / flatLessons.length) * 100)
      : 0;

  return (
    <LessonContent
      key={lesson.id}
      quizAvailable={Boolean(academy.getQuiz(course.id))}
      course={course}
      modules={modules}
      lesson={lesson}
      prevLesson={prevLesson}
      nextLesson={nextLesson}
      isDone={isDone}
      completedIds={completedIds}
      completedInCourse={completedInCourse}
      totalLessons={flatLessons.length}
      courseProgress={courseProgress}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      curriculumOpen={curriculumOpen}
      setCurriculumOpen={setCurriculumOpen}
      markComplete={markComplete}
      undoComplete={undoComplete}
      setResumeLesson={setResumeLesson}
      navigate={navigate}
    />
  );
}

// ── Inner component to use notes hook with correct lesson identity ──

interface LessonContentProps {
  course: AcademyCourseBase;
  modules: AcademyModule[];
  quizAvailable: boolean;
  lesson: AcademyLesson;
  prevLesson: AcademyLesson | null;
  nextLesson: AcademyLesson | null;
  isDone: boolean;
  completedIds: Set<string>;
  completedInCourse: number;
  totalLessons: number;
  courseProgress: number;
  activeTab: TabKey;
  setActiveTab: (t: TabKey) => void;
  curriculumOpen: boolean;
  setCurriculumOpen: (v: boolean) => void;
  markComplete: (lessonId: string, courseId?: string) => void;
  undoComplete: (lessonId: string) => void;
  setResumeLesson: (courseId: string, lessonId: string) => void;
  navigate: ReturnType<typeof useNavigate>;
}

function LessonContent({
  course,
  modules,
  quizAvailable,
  lesson,
  prevLesson,
  nextLesson,
  isDone,
  completedIds,
  completedInCourse,
  totalLessons,
  courseProgress,
  activeTab,
  setActiveTab,
  curriculumOpen,
  setCurriculumOpen,
  markComplete,
  undoComplete,
  setResumeLesson,
  navigate,
}: LessonContentProps) {
  const { text: notesText, handleChange: handleNotesChange, saveStatus, flushSave } =
    useAcademyNotes(course.id, lesson.id);

  // Mobile curriculum drawer: focus management + Escape to close
  const drawerRef = useRef<HTMLDivElement>(null);
  const drawerCloseRef = useRef<HTMLButtonElement>(null);

  const closeDrawer = useCallback(() => setCurriculumOpen(false), [setCurriculumOpen]);

  useEffect(() => {
    if (!curriculumOpen) return;
    drawerCloseRef.current?.focus();
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDrawer();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [curriculumOpen, closeDrawer]);

  // Save resume + flush notes on lesson mount
  useEffect(() => {
    setResumeLesson(course.id, lesson.id);
  }, [course.id, lesson.id, setResumeLesson]);

  // Flush notes before navigating away
  useEffect(() => {
    return () => {
      flushSave();
    };
  }, [flushSave]);

  const handleComplete = () => {
    if (isDone) {
      undoComplete(lesson.id);
    } else {
      markComplete(lesson.id, course.id);
    }
  };

  const goToLesson = (targetLesson: AcademyLesson | null) => {
    if (!targetLesson) return;
    flushSave();
    navigate(`/academy/learn/${course.id}/${targetLesson.id}`);
  };

  return (
    <div dir="rtl">
      {/* TOP BAR */}
      <div className="sticky top-[72px] z-30 border-b border-[#1D2C4F]/8 bg-[#F3F3F1]/95 backdrop-blur-xl lg:top-[80px]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-3 sm:px-6 lg:px-10">
          {/* Breadcrumb */}
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
          </nav>

          {/* Mobile curriculum toggle */}
          <button
            type="button"
            onClick={() => setCurriculumOpen(!curriculumOpen)}
            aria-expanded={curriculumOpen}
            className="flex items-center gap-2 rounded-full border border-[#1D2C4F]/12 px-4 py-2 font-arabic text-[11px] font-medium text-[#1D2C4F]/60 transition-colors hover:border-[#84A4B1]/30 hover:text-[#1D2C4F] lg:hidden"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 3.5H12M2 7H12M2 10.5H12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            المحتوى
          </button>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="bg-[#F3F3F1]">
        <div className="mx-auto max-w-[1400px] px-5 py-8 sm:px-6 lg:px-10 lg:py-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px] lg:gap-10">
            {/* ── MAIN COLUMN ── */}
            <div className="min-w-0">
              {/* Lesson title + meta */}
              <div className="mb-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-sans text-[10px] font-bold tracking-[0.15em] text-[#84A4B1]">
                    {course.number} · {String(lesson.order).padStart(2, '0')}
                  </span>
                  <span className="h-px w-6 bg-[#84A4B1]/30" />
                  <span className="font-arabic text-[11px] text-[#1D2C4F]/40">
                    {lesson.durationMinutes} دقيقة
                  </span>
                </div>
                <h1 className="font-arabic text-[clamp(1.5rem,3vw,2.2rem)] font-bold leading-[1.3] tracking-[-0.02em] text-[#1D2C4F]">
                  {lesson.title}
                </h1>
              </div>

              {/* Video player */}
              <AcademyVideoPlayer videoUrl={lesson.videoUrl} lessonTitle={lesson.title} />

              {/* Course progress bar */}
              <div className="mt-6 flex items-center gap-4">
                <div
                  className="relative h-[4px] flex-1 overflow-hidden rounded-full bg-[#1D2C4F]/8"
                  role="progressbar"
                  aria-valuenow={courseProgress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="absolute inset-y-0 right-0 rounded-full bg-[#84A4B1] transition-all duration-500"
                    style={{ width: `${courseProgress}%` }}
                  />
                </div>
                <span className="font-arabic text-[10px] text-[#1D2C4F]/45">
                  {completedInCourse}/{totalLessons}
                </span>
              </div>

              {/* Tabs */}
              <div className="mt-8 border-b border-[#1D2C4F]/8">
                <div className="flex gap-1">
                  {TABS.map((tab) => {
                    const isActive = activeTab === tab.key;
                    return (
                      <button
                        key={tab.key}
                        type="button"
                        onClick={() => setActiveTab(tab.key)}
                        aria-selected={isActive}
                        className={`
                          relative px-5 py-3 font-arabic text-[13px] font-medium
                          transition-colors duration-300
                          ${
                            isActive
                              ? 'text-[#1D2C4F]'
                              : 'text-[#1D2C4F]/40 hover:text-[#1D2C4F]/70'
                          }
                        `}
                      >
                        {tab.label}
                        {isActive && (
                          <span className="absolute bottom-0 right-0 left-0 h-[2px] bg-[#84A4B1]" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tab content */}
              <div className="mt-6 min-h-[200px]">
                {/* CONTENT TAB */}
                {activeTab === 'content' && (
                  <div className="space-y-6">
                    {lesson.description && (
                      <div>
                        <h3 className="mb-3 font-arabic text-[14px] font-bold text-[#1D2C4F]">
                          عن هذا الدرس
                        </h3>
                        <p className="font-arabic text-[13px] leading-8 text-[#1D2C4F]/55">
                          {lesson.description}
                        </p>
                      </div>
                    )}

                    {lesson.objectives && lesson.objectives.length > 0 && (
                      <div>
                        <h3 className="mb-4 font-arabic text-[14px] font-bold text-[#1D2C4F]">
                          أهداف الدرس
                        </h3>
                        <ul className="space-y-3">
                          {lesson.objectives.map((obj, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 rounded-lg border border-[#1D2C4F]/8 bg-[#F3F3F1] p-4"
                            >
                              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#84A4B1]/10 text-[10px] font-bold text-[#84A4B1]">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <span className="font-arabic text-[13px] leading-7 text-[#1D2C4F]/70">
                                {obj}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Demo label */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#84A4B1]/15 bg-[#84A4B1]/[0.03] px-4 py-2">
                      <span className="h-[4px] w-[4px] rounded-full bg-[#84A4B1]/50" />
                      <span className="font-arabic text-[10px] text-[#84A4B1]/70">
                        {ACADEMY_DEMO_LABEL}
                      </span>
                    </div>
                  </div>
                )}

                {/* NOTES TAB */}
                {activeTab === 'notes' && (
                  <NotesPanel
                    text={notesText}
                    onChange={handleNotesChange}
                    saveStatus={saveStatus}
                  />
                )}

                {/* RESOURCES TAB */}
                {activeTab === 'resources' && (
                  <div>
                    {lesson.resources && lesson.resources.length > 0 ? (
                      <ul className="space-y-3">
                        {lesson.resources.map((res, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 rounded-lg border border-[#1D2C4F]/8 bg-[#F3F3F1] p-4"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#84A4B1]/20 bg-[#84A4B1]/[0.06] text-[#84A4B1]">
                              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                <path d="M3 4H8L9.5 5.5H13V12H3V4Z" stroke="currentColor" strokeWidth="1.2" />
                              </svg>
                            </span>
                            <span className="font-arabic text-[13px] text-[#1D2C4F]/65">
                              {res}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-12 text-center">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#1D2C4F]/8 text-[#1D2C4F]/20">
                          <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                            <path d="M3 4H8L9.5 5.5H13V12H3V4Z" stroke="currentColor" strokeWidth="1.2" />
                          </svg>
                        </div>
                        <p className="font-arabic text-[13px] text-[#1D2C4F]/40">
                          لا توجد مصادر إضافية لهذا الدرس حالياً.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Complete button */}
              <div className="mt-8 flex flex-col items-start gap-4 border-t border-[#1D2C4F]/8 pt-6">
                <button
                  type="button"
                  onClick={handleComplete}
                  className={`
                    group relative flex min-h-[52px] min-w-[200px] items-center justify-between
                    overflow-hidden rounded-full px-5 pr-6 font-arabic text-[13px] font-bold
                    transition-all duration-500 hover:-translate-y-[1px]
                    ${
                      isDone
                        ? 'border border-[#84A4B1]/30 bg-[#84A4B1]/10 text-[#84A4B1]'
                        : 'bg-[#1D2C4F] text-[#F3F3F1]'
                    }
                  `}
                >
                  {!isDone && (
                    <span className="absolute inset-0 translate-y-full bg-[#84A4B1] transition-transform duration-500 ease-out group-hover:translate-y-0" />
                  )}
                  <span className={isDone ? 'relative z-10' : 'relative z-10 transition-colors duration-300 group-hover:text-[#1D2C4F]'}>
                    {isDone ? '✓ إكمال الدرس' : 'إكمال الدرس'}
                  </span>
                  {!isDone && (
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#F3F3F1]/10 text-[10px] transition-all duration-500 group-hover:-translate-x-1 group-hover:bg-[#1D2C4F]/10">
                      ←
                    </span>
                  )}
                </button>
                {isDone && (
                  <button
                    type="button"
                    onClick={handleComplete}
                    className="font-arabic text-[11px] text-[#1D2C4F]/35 transition-colors hover:text-[#1D2C4F]/60"
                  >
                    تراجع عن الإكمال
                  </button>
                )}
              </div>

              {/* Prev / Next navigation */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {prevLesson ? (
                  <button
                    type="button"
                    onClick={() => goToLesson(prevLesson)}
                    className="group flex items-center gap-4 rounded-[14px] border border-[#1D2C4F]/8 p-5 text-start transition-colors duration-300 hover:border-[#84A4B1]/25"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#1D2C4F]/10 text-[#1D2C4F]/40 transition-all duration-300 group-hover:border-[#84A4B1]/40 group-hover:text-[#84A4B1]">
                      →
                    </span>
                    <div className="flex-1">
                      <span className="font-arabic text-[10px] text-[#1D2C4F]/35">
                        الدرس السابق
                      </span>
                      <p className="mt-1 font-arabic text-[12px] font-semibold text-[#1D2C4F]">
                        {prevLesson.title}
                      </p>
                    </div>
                  </button>
                ) : (
                  <div />
                )}
                {nextLesson ? (
                  <button
                    type="button"
                    onClick={() => goToLesson(nextLesson)}
                    className="group flex items-center gap-4 rounded-[14px] border border-[#1D2C4F]/8 p-5 text-end transition-colors duration-300 hover:border-[#84A4B1]/25"
                  >
                    <div className="flex-1">
                      <span className="font-arabic text-[10px] text-[#1D2C4F]/35">
                        الدرس التالي
                      </span>
                      <p className="mt-1 font-arabic text-[12px] font-semibold text-[#1D2C4F]">
                        {nextLesson.title}
                      </p>
                    </div>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#1D2C4F]/10 text-[#1D2C4F]/40 transition-all duration-300 group-hover:border-[#84A4B1]/40 group-hover:text-[#84A4B1]">
                      ←
                    </span>
                  </button>
                ) : (
                  <div />
                )}
              </div>
            </div>

            {/* ── CURRICULUM SIDEBAR (desktop) ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-[140px] rounded-[16px] border border-[#1D2C4F]/8 bg-[#F3F3F1] p-5">
                <AcademyCurriculum
                  courseId={course.id}
                  modules={modules}
                  activeLessonId={lesson.id}
                  completedIds={completedIds}
                />

                {/* Quiz entry point */}
                {quizAvailable && (
                  <Link
                    to={`/academy/courses/${course.id}/quiz`}
                    className="group mt-5 flex items-center gap-3 rounded-[12px] border border-[#84A4B1]/15 bg-[#84A4B1]/[0.03] p-4 transition-colors duration-300 hover:border-[#84A4B1]/30 hover:bg-[#84A4B1]/[0.06]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#84A4B1]/10 text-[#84A4B1]">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 4H13V11H9.5L7 13.5V11H3V4Z" stroke="currentColor" strokeWidth="1.2" />
                        <path d="M5.5 7H10.5M5.5 8.5H9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div className="flex-1">
                      <span className="font-arabic text-[11px] font-semibold text-[#1D2C4F]">
                        اختبر معلوماتك
                      </span>
                      <p className="font-arabic text-[9px] text-[#1D2C4F]/40">
                        اختبار الدورة
                      </p>
                    </div>
                    <span className="text-[10px] text-[#84A4B1] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      ←
                    </span>
                  </Link>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* ── MOBILE CURRICULUM DRAWER ── */}
      {curriculumOpen && (
        <div
          className="fixed inset-0 z-[80] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="محتوى الدورة"
        >
          <div
            className="absolute inset-0 bg-[#0B1729]/60 backdrop-blur-sm"
            onClick={() => setCurriculumOpen(false)}
          />
          <div ref={drawerRef} className="absolute inset-y-0 right-0 w-[320px] max-w-[85vw] overflow-y-auto bg-[#F3F3F1] px-5 pb-8 pt-[80px]">
            <button
              ref={drawerCloseRef}
              type="button"
              onClick={() => setCurriculumOpen(false)}
              aria-label="إغلاق"
              className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#1D2C4F]/10 text-[#1D2C4F]/50 transition-colors hover:border-[#84A4B1]/30 hover:text-[#84A4B1]"
            >
              ✕
            </button>
            <AcademyCurriculum
              courseId={course.id}
              modules={modules}
              activeLessonId={lesson.id}
              completedIds={completedIds}
            />
            {quizAvailable && (
              <Link
                to={`/academy/courses/${course.id}/quiz`}
                className="group mt-5 flex items-center gap-3 rounded-[12px] border border-[#84A4B1]/15 bg-[#84A4B1]/[0.03] p-4 transition-colors duration-300 hover:border-[#84A4B1]/30"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#84A4B1]/10 text-[#84A4B1]">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 4H13V11H9.5L7 13.5V11H3V4Z" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M5.5 7H10.5M5.5 8.5H9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                </span>
                <div className="flex-1">
                  <span className="font-arabic text-[11px] font-semibold text-[#1D2C4F]">
                    اختبر معلوماتك
                  </span>
                  <p className="font-arabic text-[9px] text-[#1D2C4F]/40">
                    اختبار الدورة
                  </p>
                </div>
                <span className="text-[10px] text-[#84A4B1] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  ←
                </span>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Notes panel sub-component ──

function NotesPanel({
  text,
  onChange,
  saveStatus,
}: {
  text: string;
  onChange: (value: string) => void;
  saveStatus: 'idle' | 'saving' | 'saved';
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="font-arabic text-[12px] font-medium text-[#1D2C4F]/60">
          ملاحظاتك على هذا الدرس
        </span>
        <span
          className={`flex items-center gap-1.5 font-arabic text-[10px] transition-opacity duration-300 ${
            saveStatus === 'idle' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {saveStatus === 'saving' && (
            <>
              <span className="h-[4px] w-[4px] animate-pulse rounded-full bg-[#54707D]" />
              <span className="text-[#54707D]">جاري الحفظ...</span>
            </>
          )}
          {saveStatus === 'saved' && (
            <>
              <span className="h-[4px] w-[4px] rounded-full bg-[#84A4B1]" />
              <span className="text-[#84A4B1]">تم الحفظ</span>
            </>
          )}
        </span>
      </div>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => onChange(e.target.value)}
        placeholder="اكتب ملاحظاتك هنا..."
        aria-label="ملاحظات الدرس"
        rows={6}
        className="w-full resize-none rounded-[14px] border border-[#1D2C4F]/12 bg-[#F3F3F1] p-5 font-arabic text-[13px] leading-8 text-[#1D2C4F] placeholder:text-[#1D2C4F]/25 transition-colors duration-300 focus:border-[#84A4B1] focus:outline-none focus:ring-2 focus:ring-[#84A4B1]/20"
      />
      <p className="mt-3 font-arabic text-[10px] text-[#1D2C4F]/30">
        تُحفظ الملاحظات محلياً في متصفحك فقط. لا يتم مزامنتها عبر الأجهزة.
      </p>
    </div>
  );
}
