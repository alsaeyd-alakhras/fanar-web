
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { PROGRAM_COURSES } from '@/data/content';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function LearningPaths() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const navigate = useNavigate();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-program-reveal]',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: '[data-program-intro]',
            start: 'top 85%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        '[data-course-card]',
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power3.out',
          stagger: 0.06,
          scrollTrigger: {
            trigger: '[data-course-grid]',
            start: 'top 85%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        '[data-journey]',
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '[data-journey-container]',
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  const goToProgram = () => {
    navigate('/program');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <section
      ref={sectionRef}
      id="paths"
      dir="rtl"
      className="relative overflow-hidden bg-cream-100 text-navy-700"
    >
      {/* INTRODUCTION */}

      <div
        data-program-intro
        className="relative overflow-hidden bg-navy-900 px-5 py-20 sm:px-8 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 perspective-grid opacity-[0.06]"
        />

        <div className="relative mx-auto max-w-[1320px]">
          <div
            data-program-reveal
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-turquoise-400" />
            <span className="text-[11px] font-medium text-turquoise-400">
              البرنامج التعليمي
            </span>
            <span className="text-[10px] text-cream-100/30">
              FNAR / PROGRAM
            </span>
          </div>

          <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
            <div>
              <h2
                data-program-reveal
                className="text-[clamp(2.7rem,5.2vw,5.2rem)] font-bold leading-[1.45] tracking-[-0.02em] text-cream-100"
              >
                ليس مجموعة دورات.
                <span className="block text-turquoise-400">
                  بل منظومة واحدة.
                </span>
              </h2>

              <p
                data-program-reveal
                className="mt-6 max-w-[590px] text-[14px] leading-[2] text-cream-100/75 sm:text-[16px]"
              >
                تسع دورات مترابطة ضمن باقة تعليمية متكاملة،
                صُممت لبناء طريقة التفكير، وفهم الأسواق المالية،
                والتحليل، وإدارة المخاطر ورأس المال،
                وصولاً إلى صناعة القرار المستقل.
              </p>
            </div>

            <div
              data-program-reveal
              className="grid grid-cols-3 gap-3 border-t border-white/10 pt-7"
            >
              {[
                { value: '09', label: 'دورات تعليمية' },
                { value: '03', label: 'أشهر تعليمية' },
                { value: '01', label: 'برنامج متكامل' },
              ].map((item) => (
                <div key={item.label} className="min-w-0">
                  <div className="font-sans text-[clamp(2rem,3vw,3.1rem)] font-light leading-none text-cream-100">
                    {item.value}
                  </div>
                  <p className="mt-3 text-[11px] leading-5 text-turquoise-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* NINE COURSES */}

      <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end lg:mb-12">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-turquoise-400" />
              <span className="text-[11px] font-medium text-turquoise-600">
                المحتوى التعليمي
              </span>
            </div>

            <h3 className="text-[clamp(2.2rem,4vw,3.6rem)] font-bold leading-[1.45]">
              تسعة محاور.
              <span className="block text-turquoise-500">
                رؤية واحدة.
              </span>
            </h3>
          </div>

          <p className="max-w-[390px] text-[14px] leading-[1.95] text-navy-600">
            كل دورة تكمل الأخرى ضمن مسار تعليمي واحد.
            لا تُطرح الدورات كمنتجات منفصلة، بل كمكونات
            لمنهج فنر المتكامل.
          </p>
        </div>

        <div
          data-course-grid
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          {PROGRAM_COURSES.map((course, index) => (
            <article
              key={course.id}
              data-course-card
              className="
                group relative isolate flex min-w-0 flex-col
                overflow-hidden rounded-[18px]
                border border-navy-700/10
                bg-cream-50 p-6
                transition-[background-color,border-color,box-shadow]
                duration-300
                hover:border-turquoise-400/50
                hover:bg-navy-700
                hover:shadow-[0_16px_35px_rgba(16,25,48,0.12)]
                sm:p-7 lg:p-8
              "
            >
              {/* Upper accent */}
              <div
                aria-hidden="true"
                className="
                  absolute inset-x-0 top-0 h-[2px]
                  origin-right scale-x-0 bg-turquoise-400
                  transition-transform duration-500
                  group-hover:scale-x-100
                "
              />

              {/* Header */}
              <div className="relative z-10 flex items-start justify-between gap-4">
                <span className="font-sans text-[13px] font-medium tracking-[0.12em] text-turquoise-600 transition-colors duration-300 group-hover:text-turquoise-300">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="rounded-full border border-navy-700/10 px-3 py-1.5 text-[10px] text-navy-500 transition-colors duration-300 group-hover:border-white/20 group-hover:text-cream-100/75">
                  ضمن البرنامج
                </span>
              </div>

              {/* Decorative symbol */}
              <div
                aria-hidden="true"
                className="relative mt-6 flex h-14 items-center justify-start"
              >
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-turquoise-400/35 transition-colors duration-300 group-hover:border-turquoise-300/60">
                  <span className="h-2 w-2 rotate-45 bg-turquoise-400 transition-transform duration-300 group-hover:rotate-[135deg] group-hover:bg-turquoise-300" />
                </div>
                <span className="mr-3 h-px w-10 bg-navy-700/10 transition-[width,background-color] duration-300 group-hover:w-16 group-hover:bg-turquoise-400/60" />
              </div>

              {/* Content */}
              <div className="relative z-10 mt-6">
                <h4 className="mb-3 text-[clamp(1.6rem,2vw,2rem)] font-bold leading-[1.55] text-navy-700 transition-colors duration-300 group-hover:text-cream-100">
                  {course.title}
                </h4>

                <p className="text-[13px] leading-[2] text-navy-600 transition-colors duration-300 group-hover:text-cream-100/80 sm:text-[14px]">
                  {course.description}
                </p>
              </div>

              {/* Footer detail */}
              <div className="relative z-10 mt-auto flex items-center justify-between gap-3 border-t border-navy-700/10 pt-5 transition-colors duration-300 group-hover:border-white/15">
                <span className="text-[10px] font-medium text-navy-500 transition-colors duration-300 group-hover:text-turquoise-300">
                  FNAR / COURSE
                </span>
                <span className="font-sans text-[11px] text-navy-400 transition-colors duration-300 group-hover:text-cream-100/60">
                  {String(index + 1).padStart(2, '0')} / 09
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-navy-700/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-turquoise-400" />
            <p className="text-[12px] leading-7 text-navy-600">
              جميع الدورات ضمن باقة تعليمية واحدة،
              والتسجيل الأساسي يشمل البرنامج المتكامل.
            </p>
          </div>
          <span className="shrink-0 font-sans text-[10px] tracking-[0.15em] text-navy-400">
            FNAR / 01—09
          </span>
        </div>
      </div>

      {/* EDUCATIONAL JOURNEY */}

      <div className="bg-cream-200 py-16 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
          <div className="mb-10 lg:mb-12">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-turquoise-400" />
              <span className="text-[11px] font-medium text-turquoise-600">
                الرحلة التعليمية
              </span>
            </div>

            <h3 className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold leading-[1.45]">
              من المعرفة
              <span className="text-turquoise-500"> إلى التطبيق.</span>
            </h3>

            <p className="mt-5 max-w-[590px] text-[14px] leading-8 text-navy-600">
              تبدأ الرحلة بمرحلة تعليمية متكاملة،
              ثم يمكن للمشارك استكشاف فرص الاستمرار
              في الجانب التطبيقي وفق شروط واتفاق مستقل.
            </p>
          </div>

          <div
            data-journey-container
            className="grid grid-cols-1 gap-5 lg:grid-cols-2"
          >
            <div
              data-journey
              className="relative overflow-hidden rounded-[20px] bg-navy-700 p-7 sm:p-9"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-sans text-[12px] tracking-[0.15em] text-turquoise-400">
                  STAGE 01
                </span>
                <span className="rounded-full border border-white/20 px-4 py-2 text-[11px] text-cream-100">
                  3 أشهر
                </span>
              </div>

              <div className="mt-12 lg:mt-14">
                <span className="mb-3 block text-[11px] text-turquoise-400">
                  المرحلة الأساسية
                </span>
                <h4 className="mb-4 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1.45] text-cream-100">
                  التعليم وبناء المنهج
                </h4>
                <p className="max-w-[470px] text-[14px] leading-8 text-cream-100/80">
                  ثلاثة أشهر للتعرف على منهج فنر
                  في التفكير والتحليل والإدارة وفهم الأسواق المالية،
                  وبناء أساس واضح لصناعة القرار.
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-turquoise-400" />
            </div>

            <div
              data-journey
              className="relative overflow-hidden rounded-[20px] border border-navy-700/10 bg-cream-50 p-7 sm:p-9"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-sans text-[12px] tracking-[0.15em] text-turquoise-600">
                  STAGE 02
                </span>
                <span className="rounded-full border border-navy-700/15 px-4 py-2 text-[11px] text-navy-600">
                  اختياري
                </span>
              </div>

              <div className="mt-12 lg:mt-14">
                <span className="mb-3 block text-[11px] text-turquoise-600">
                  بعد المرحلة التعليمية
                </span>
                <h4 className="mb-4 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1.45] text-navy-700">
                  الاستمرار في الجانب التطبيقي
                </h4>
                <p className="max-w-[470px] text-[14px] leading-8 text-navy-600">
                  يمكن للمشارك بعد انتهاء المرحلة التعليمية
                  استكشاف إمكانية الاستمرار في الجانب التطبيقي
                  طويل المدى. هذه المرحلة منفصلة، وتخضع
                  لشروط واتفاق أو عقد مستقل، ولا يتم القبول فيها تلقائياً.
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-turquoise-400/50" />
            </div>
          </div>
        </div>
      </div>

      {/* PROGRAM CTA */}

      <div className="bg-cream-100 px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[850px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-turquoise-400" />
            <span className="text-[11px] text-turquoise-600">
              الخطوة التالية
            </span>
            <span className="h-px w-8 bg-turquoise-400" />
          </div>

          <h3 className="text-[clamp(2.2rem,4vw,3.7rem)] font-bold leading-[1.55] text-navy-700">
            الفهم لا يبدأ من التوصية.
            <span className="block text-turquoise-500">
              يبدأ من المنهج.
            </span>
          </h3>

          <p className="mx-auto mt-6 max-w-[540px] text-[14px] leading-8 text-navy-600">
            تعرف على تفاصيل برنامج فنر التعليمي،
            محتوى الدورات، وآلية الالتحاق بالباقة المتكاملة.
          </p>

          <button
            type="button"
            onClick={goToProgram}
            data-cursor="hover"
            className="
              group relative mt-9 inline-flex min-h-[58px]
              w-full max-w-[320px] items-center justify-between
              overflow-hidden rounded-full bg-navy-700 px-6
              text-[14px] font-semibold text-cream-100
              transition-transform duration-300
              hover:-translate-y-1
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-turquoise-400
            "
          >
            <span className="absolute inset-0 translate-y-full bg-turquoise-600 transition-transform duration-300 group-hover:translate-y-0" />
            <span className="relative z-10">
              اكتشف برنامج فنر
            </span>
            <span
              aria-hidden="true"
              className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-transform duration-300 group-hover:-translate-x-1"
            >
              ←
            </span>
          </button>

          <p className="mt-6 text-[11px] leading-6 text-navy-500">
            برنامج تعليمي متكامل — دون توصيات تداول أو وعود بالربح.
          </p>
        </div>
      </div>
    </section>
  );
}
