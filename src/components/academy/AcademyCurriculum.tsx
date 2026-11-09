import { Link } from 'react-router-dom';
import type { AcademyModule } from '@/types';

interface AcademyCurriculumProps {
  courseId: string;
  modules: AcademyModule[];
  activeLessonId: string;
  completedIds: Set<string>;
}

/**
 * AcademyCurriculum — sidebar listing all modules and lessons
 * for a course, with active state and completion indicators.
 */
export default function AcademyCurriculum({
  courseId,
  modules,
  activeLessonId,
  completedIds,
}: AcademyCurriculumProps) {
  return (
    <nav aria-label="محتوى الدورة" className="flex flex-col">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-[#84A4B1]/60" />
          <span className="font-arabic text-[10px] font-medium tracking-[0.18em] text-[#84A4B1]">
            محتوى الدورة
          </span>
        </div>
      </div>

      <div className="space-y-5">
        {modules.map((module) => {
          const moduleCompleted = module.lessons.filter(
            (l) => completedIds.has(l.id),
          ).length;

          return (
            <div key={module.id}>
              <div className="mb-3 flex items-center justify-between border-b border-[#1D2C4F]/8 pb-2">
                <h3 className="font-arabic text-[12px] font-bold text-[#1D2C4F]">
                  {module.title}
                </h3>
                <span className="font-sans text-[9px] text-[#1D2C4F]/35">
                  {moduleCompleted}/{module.lessons.length}
                </span>
              </div>

              <ul className="space-y-0.5">
                {module.lessons.map((lesson) => {
                  const isActive = lesson.id === activeLessonId;
                  const isDone = completedIds.has(lesson.id);

                  return (
                    <li key={lesson.id}>
                      <Link
                        to={`/academy/learn/${courseId}/${lesson.id}`}
                        aria-current={isActive ? 'page' : undefined}
                        className={`
                          group flex items-center gap-3 rounded-lg px-3 py-3
                          transition-colors duration-200
                          ${
                            isActive
                              ? 'bg-[#1D2C4F] text-[#F3F3F1]'
                              : 'text-[#1D2C4F]/70 hover:bg-[#1D2C4F]/[0.04]'
                          }
                        `}
                      >
                        <span
                          className={`
                            flex h-6 w-6 shrink-0 items-center justify-center
                            rounded-full border text-[9px] transition-colors
                            ${
                              isDone
                                ? isActive
                                  ? 'border-[#84A4B1]/40 bg-[#84A4B1]/15 text-[#84A4B1]'
                                  : 'border-[#84A4B1]/30 bg-[#84A4B1]/10 text-[#84A4B1]'
                                : isActive
                                  ? 'border-[#F3F3F1]/20 text-[#F3F3F1]/50'
                                  : 'border-[#1D2C4F]/10 text-[#1D2C4F]/30'
                            }
                          `}
                        >
                          {isDone ? '✓' : String(lesson.order).padStart(2, '0')}
                        </span>
                        <span className="flex-1 font-arabic text-[12px] leading-snug">
                          {lesson.title}
                        </span>
                        <span
                          className={`font-sans text-[9px] ${
                            isActive ? 'text-[#F3F3F1]/40' : 'text-[#1D2C4F]/25'
                          }`}
                        >
                          {lesson.durationMinutes}د
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
    </nav>
  );
}
