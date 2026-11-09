
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHero from '@/components/ui/PageHero';
import {
  PROGRAM_COURSES,
  PROGRAM_STAGES,
  PROGRAM_FAQ,
} from '@/data/content';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function ProgramPage() {
  const pageRef = useRef<HTMLDivElement | null>(null);

  const [openFaq, setOpenFaq] = useState<string | null>(
    PROGRAM_FAQ[0]?.id || null
  );

  const [expandedCourseIds, setExpandedCourseIds] = useState<string[]>([]);

  const reduced = useReducedMotion();
  const navigate = useNavigate();

  useEffect(() => {
    if (reduced) return;

    const page = pageRef.current;
    if (!page) return;

    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>('[data-program-reveal]')
        .forEach((el) => {
          gsap.fromTo(
            el,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 82%',
                once: true,
              },
            }
          );
        });
    }, page);

    return () => ctx.revert();
  }, [reduced]);

  const toggleCourse = (courseId: string) => {
    setExpandedCourseIds((previous) =>
      previous.includes(courseId)
        ? previous.filter((id) => id !== courseId)
        : [...previous, courseId]
    );
  };

  return (
    <div ref={pageRef} dir="rtl">
      <PageHero
        eyebrow="البرنامج التعليمي"
        title="منهج متكامل من تسع دورات. حزمة واحدة. ثلاثة أشهر."
        subtitle="برنامج فنر التعليمي ليس مجموعة دورات منفصلة، بل منهج واحد مصمم معاً — من بناء طريقة التفكير إلى صناعة القرار المستقل."
        variant="cream"
      />

      {/* METHODOLOGY DIFFERENCE */}
      <section className="bg-[#F3F3F1] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div
            data-program-reveal
            className="grid grid-cols-1 gap-8 lg:grid-cols-3"
          >
            {[
              {
                num: '01',
                title: 'منهجية، لا معلومات متفرقة',
                desc: 'كل دورة مبنية لتكمل الأخرى، من طريقة التفكير إلى إدارة رأس المال.',
              },
              {
                num: '02',
                title: 'تعليم تطبيقي',
                desc: 'مفاهيم تُطبّق على واقع السوق، لا مجرد نظريات منفصلة عن الممارسة.',
              },
              {
                num: '03',
                title: 'فهم، لا توصيات',
                desc: 'فنر لا يقدم توصيات أو وعوداً بالربح. يعلّم كيف تفهم وتقرر بنفسك.',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="border-t border-[#1D2C4F]/10 pt-6"
              >
                <span className="font-sans text-[2rem] font-bold leading-none text-[#84A4B1]/30">
                  {item.num}
                </span>

                <h3 className="mt-4 font-arabic text-[1.15rem] font-bold text-[#1D2C4F]">
                  {item.title}
                </h3>

                <p className="mt-3 font-arabic text-[13px] leading-7 text-[#1D2C4F]/55">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL CURRICULUM — EXPANDABLE COURSE CARDS */}
      <section className="relative overflow-hidden bg-[#0F1E36] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(132,164,177,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(132,164,177,.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          {/* Section heading */}
          <div data-program-reveal className="mb-16">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#84A4B1]/60" />

              <span className="font-arabic text-[10px] font-medium tracking-[0.2em] text-[#84A4B1]">
                المنهج الكامل
              </span>
            </div>

            <h2 className="font-arabic text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[#F3F3F1]">
              تسع دورات. منهج واحد.
            </h2>
          </div>

          {/* Nine expandable cards */}
          <div
            data-program-reveal
            className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {PROGRAM_COURSES.map((course) => {
              const isOpen = expandedCourseIds.includes(course.id);
              const panelId = `program-course-${course.id}`;

              return (
                <div
                  key={course.id}
                  className={`
                    relative min-w-0 overflow-hidden rounded-[20px]
                    border bg-[#152742]
                    transition-colors duration-300
                    ${
                      isOpen
                        ? 'border-[#84A4B1]/45'
                        : 'border-[#F3F3F1]/10 hover:border-[#84A4B1]/30'
                    }
                  `}
                >
                  {/* Subtle card background pattern */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(132,164,177,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(132,164,177,.06) 1px, transparent 1px)',
                      backgroundSize: '48px 48px',
                    }}
                  />

                  <div className="relative z-10 p-6 lg:p-7">
                    {/* Clickable card header */}
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleCourse(course.id)}
                      data-cursor="hover"
                      className="
                        group block w-full rounded-lg text-start
                        focus-visible:outline
                        focus-visible:outline-2
                        focus-visible:outline-offset-4
                        focus-visible:outline-[#84A4B1]
                      "
                    >
                      {/* Course number */}
                      <div className="mb-6 flex items-center gap-3">
                        <span className="font-sans text-[3rem] font-bold leading-none text-[#84A4B1]/40">
                          {course.number}
                        </span>

                        <span className="h-px flex-1 bg-[#84A4B1]/15" />

                        <span className="font-arabic text-[10px] text-[#84A4B1]">
                          دورة {course.order} من {PROGRAM_COURSES.length}
                        </span>
                      </div>

                      {/* Title and arrow */}
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-arabic text-[1.45rem] font-bold leading-snug text-[#F3F3F1]">
                          {course.title}
                        </h3>

                        <span
                          className={`
                            flex h-9 w-9 shrink-0 items-center justify-center
                            rounded-full border transition-colors duration-300
                            ${
                              isOpen
                                ? 'border-[#84A4B1]/50 bg-[#84A4B1]/10 text-[#84A4B1]'
                                : 'border-[#F3F3F1]/20 text-[#F3F3F1]/60 group-hover:border-[#84A4B1]/40 group-hover:text-[#84A4B1]'
                            }
                          `}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            aria-hidden="true"
                            className={`
                              transition-transform duration-300
                              motion-reduce:transition-none
                              ${isOpen ? 'rotate-180' : ''}
                            `}
                          >
                            <path
                              d="M3 5L7 9L11 5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </button>

                    {/* Expandable description */}
                    <div
                      id={panelId}
                      className={`
                        grid overflow-hidden
                        transition-[grid-template-rows,opacity]
                        duration-300 ease-out
                        motion-reduce:transition-none
                        ${
                          isOpen
                            ? 'grid-rows-[1fr] opacity-100'
                            : 'grid-rows-[0fr] opacity-0'
                        }
                      `}
                      inert={!isOpen}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <p className="pt-6 font-arabic text-[13px] leading-8 text-[#F3F3F1]/65">
                          {course.description}
                        </p>

                        <div className="mt-6 flex items-center gap-2 border-t border-[#F3F3F1]/10 pt-5">
                          <span className="h-1 w-1 rounded-full bg-[#84A4B1]" />

                          <span className="font-arabic text-[10px] text-[#F3F3F1]/45">
                            ضمن البرنامج المتكامل
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-[#F3F3F1] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div data-program-reveal className="mb-16">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#84A4B1]/60" />

              <span className="font-arabic text-[10px] font-medium tracking-[0.2em] text-[#84A4B1]">
                مراحل البرنامج
              </span>
            </div>

            <h2 className="font-arabic text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[#1D2C4F]">
              رحلة من مرحلتين.
            </h2>
          </div>

          <div
            data-program-reveal
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            {PROGRAM_STAGES.map((stage) => (
              <div
                key={stage.id}
                className={`
                  relative overflow-hidden rounded-[16px] border p-8 lg:p-10
                  ${
                    stage.isOptional
                      ? 'border-[#1D2C4F]/10 bg-[#F3F3F1]'
                      : 'border-[#84A4B1]/20 bg-[#1D2C4F]'
                  }
                `}
              >
                <div className="mb-4 flex items-center gap-4">
                  <span
                    className={`
                      font-sans text-[2.5rem] font-bold leading-none
                      ${
                        stage.isOptional
                          ? 'text-[#1D2C4F]/30'
                          : 'text-[#84A4B1]/40'
                      }
                    `}
                  >
                    {stage.number}
                  </span>

                  <div className="flex flex-col">
                    <span className="font-arabic text-[10px] font-medium tracking-[0.15em] text-[#84A4B1]">
                      {stage.duration}
                    </span>

                    {stage.isOptional && (
                      <span className="font-arabic text-[9px] text-[#1D2C4F]/35">
                        اختياري · يتطلب اتفاقاً منفصلاً
                      </span>
                    )}
                  </div>
                </div>

                <h3
                  className={`
                    mb-3 font-arabic text-[1.3rem] font-bold
                    ${
                      stage.isOptional
                        ? 'text-[#1D2C4F]'
                        : 'text-[#F3F3F1]'
                    }
                  `}
                >
                  {stage.title}
                </h3>

                <p
                  className={`
                    font-arabic text-[13px] leading-7
                    ${
                      stage.isOptional
                        ? 'text-[#1D2C4F]/55'
                        : 'text-[#F3F3F1]/55'
                    }
                  `}
                >
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#1D2C4F]/8 bg-[#F3F3F1] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[860px]">
          <div data-program-reveal className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#84A4B1]/60" />

              <span className="font-arabic text-[10px] font-medium tracking-[0.2em] text-[#84A4B1]">
                الأسئلة الشائعة
              </span>
            </div>

            <h2 className="font-arabic text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[#1D2C4F]">
              ما تحتاج معرفته.
            </h2>
          </div>

          <div
            data-program-reveal
            className="border-t border-[#1D2C4F]/10"
          >
            {PROGRAM_FAQ.map((faq) => {
              const isOpen = openFaq === faq.id;

              return (
                <div
                  key={faq.id}
                  className="border-b border-[#1D2C4F]/10"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`program-faq-${faq.id}`}
                    data-cursor="hover"
                    className="group flex w-full items-center justify-between gap-4 py-5 text-start"
                  >
                    <span className="font-arabic text-[15px] font-semibold text-[#1D2C4F] sm:text-[16px]">
                      {faq.question}
                    </span>

                    <span
                      className={`
                        flex h-7 w-7 shrink-0 items-center justify-center
                        rounded-full border transition-all duration-300
                        ${
                          isOpen
                            ? 'border-[#84A4B1]/40 bg-[#84A4B1]/10 text-[#84A4B1]'
                            : 'border-[#1D2C4F]/15 text-[#1D2C4F]/40'
                        }
                      `}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        aria-hidden="true"
                        className={`
                          transition-transform duration-300
                          motion-reduce:transition-none
                          ${isOpen ? 'rotate-180' : ''}
                        `}
                      >
                        <path
                          d="M2 3.5L5 6.5L8 3.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    id={`program-faq-${faq.id}`}
                    className={`
                      grid transition-[grid-template-rows,opacity]
                      duration-300 ease-out
                      motion-reduce:transition-none
                      ${
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }
                    `}
                    inert={!isOpen}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="pb-5 font-arabic text-[13px] leading-7 text-[#1D2C4F]/55">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENROLLMENT CTA */}
      <section className="bg-[#0F1E36] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div
          data-program-reveal
          className="mx-auto max-w-[800px] text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#84A4B1]/60" />

            <span className="font-arabic text-[10px] font-medium tracking-[0.2em] text-[#84A4B1]">
              الالتحاق
            </span>

            <span className="h-px w-9 bg-[#84A4B1]/60" />
          </div>

          <h2 className="mb-6 font-arabic text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[#F3F3F1]">
            ابدأ رحلتك التعليمية مع فنر.
          </h2>

          <p className="mx-auto mb-10 max-w-[520px] font-arabic text-[14px] leading-8 text-[#F3F3F1]/50">
            لل inquiries حول الالتحاق بالبرنامج، تواصل معنا وسنرشدك خلال الخطوات التالية.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/consultations"
              onClick={(e) => {
                e.preventDefault();
                navigate('/consultations');
                window.scrollTo({ top: 0 });
              }}
              data-cursor="hover"
              className="group relative flex min-h-[56px] min-w-[220px] items-center justify-between overflow-hidden rounded-full bg-[#F3F3F1] px-5 pr-7 font-arabic text-[13px] font-bold text-[#1D2C4F] transition-all duration-500 hover:-translate-y-[2px]"
            >
              <span className="absolute inset-0 translate-y-full bg-[#84A4B1] transition-transform duration-500 ease-out group-hover:translate-y-0" />

              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#1D2C4F]">
                اكتشف البرنامج المتكامل
              </span>

              <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#1D2C4F]/10 text-[10px] transition-all duration-500 group-hover:-translate-x-1 group-hover:bg-[#1D2C4F]/15">
                ←
              </span>
            </a>
          </div>

          <p className="mt-8 font-arabic text-[11px] text-[#F3F3F1]/30">
            نظام الالتحاق قيد التطوير. سيتم توجيه طلبات الاستفسار فور تفعيل الربط.
          </p>

          {/* Discreet academy link */}
          <div className="mt-6">
            <a
              href="/academy"
              onClick={(e) => {
                e.preventDefault();
                navigate('/academy');
                window.scrollTo({ top: 0 });
              }}
              className="font-arabic text-[12px] text-[#84A4B1]/60 transition-colors duration-300 hover:text-[#84A4B1]"
            >
              استكشف الأكاديمية ←
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
