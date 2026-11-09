import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const PRINCIPLES = [
  {
    number: '01',
    title: 'لا توصيات',
    description: 'لأن القرار الذي لا تفهمه، ليس قرارك.',
  },
  {
    number: '02',
    title: 'لا وعود بالربح',
    description: 'لأن السوق لا يقدم ضمانات، والمعرفة لا تبيع أوهاماً.',
  },
  {
    number: '03',
    title: 'لا اختصارات',
    description: 'لأن الفهم الحقيقي يُبنى، ولا يُختصر.',
  },
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || reduced) return;

    const ctx = gsap.context(() => {
      /* =====================================================
         INTRO
      ===================================================== */

      gsap.fromTo(
        '[data-philosophy-intro]',
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: '[data-philosophy-intro]',
            start: 'top 82%',
            once: true,
          },
        },
      );

      /* =====================================================
         PRINCIPLES
      ===================================================== */

      const principles =
        gsap.utils.toArray<HTMLElement>(
          '[data-philosophy-principle]',
          section,
        );

      gsap.set(principles, {
        opacity: 0,
        y: 35,
      });

      gsap.to(principles, {
        opacity: 1,
        y: 0,

        duration: 0.85,
        stagger: 0.13,

        ease: 'power3.out',

        scrollTrigger: {
          trigger: '[data-philosophy-list]',
          start: 'top 78%',
          once: true,
        },
      });

      /* =====================================================
         FINAL STATEMENT
      ===================================================== */

      gsap.fromTo(
        '[data-philosophy-final]',
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,

          duration: 1,
          ease: 'power4.out',

          scrollTrigger: {
            trigger: '[data-philosophy-final]',
            start: 'top 78%',
            once: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="
        relative
        overflow-hidden
        bg-[#1D2C4F]
      "
    >
      {/* =====================================================
          STATIC BACKGROUND GRID
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-60
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(132,164,177,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132,164,177,.035) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* atmospheric glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-1/2
          top-[18%]

          h-[600px]
          w-[600px]

          -translate-x-1/2

          rounded-full

          bg-[#84A4B1]/[0.055]

          blur-[120px]
        "
      />

      {/* architectural vertical axis */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-1/2
          top-0

          hidden
          h-full
          w-px

          -translate-x-1/2

          bg-white/[0.035]

          lg:block
        "
      />

      {/* =====================================================
          MANIFESTO
      ====================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1240px]

          px-5
          py-20

          sm:px-6
          sm:py-24

          lg:px-10
          lg:py-32
      "
      >
        {/* ===================================================
            INTRO
        ==================================================== */}

        <div
          data-philosophy-intro
          dir="rtl"
          className="
            mb-14

            sm:mb-16
            lg:mb-20
        "
        >
          <div
            className="
              mb-5

              flex
              items-center
              gap-3
          "
          >
            <span
              className="
                h-[5px]
                w-[5px]

                rounded-full

                bg-[#84A4B1]

                shadow-[0_0_12px_rgba(132,164,177,.6)]
              "
            />

            <span
              className="
                text-[9px]
                font-medium
                tracking-[0.2em]

                text-[#84A4B1]

                sm:text-[10px]
              "
            >
              07 / فلسفتنا
            </span>

            <span
              className="
                h-px
                w-12

                bg-[#84A4B1]/35
              "
            />
          </div>

          <div
            className="
              grid
              gap-6

              lg:grid-cols-[1.1fr_.9fr]
              lg:items-end
              lg:gap-20
          "
          >
            <h2
              className="
                max-w-[650px]

                pb-[0.1em]

                font-arabic

                text-[clamp(2.7rem,7vw,5.4rem)]
                font-bold
                leading-[1.18]

                tracking-[-0.04em]

                text-[#F3F3F1]
              "
            >
              ما لا
              <br />
              <span className="text-[#84A4B1]">
                نؤمن به.
              </span>
            </h2>

            <p
              className="
                max-w-[470px]

                font-arabic

                text-[13px]
                leading-7

                text-[#F3F3F1]/45

                sm:text-[15px]
                sm:leading-8
              "
            >
              التعليم المالي الحقيقي لا يبدأ بوعد،
              ولا ينتهي بتوصية. مهمتنا أن نبني طريقة
              تفكير تستطيع الاعتماد عليها.
            </p>
          </div>
        </div>

        {/* ===================================================
            PRINCIPLES
        ==================================================== */}

        <div
          data-philosophy-list
          className="
            border-t
            border-white/[0.08]
          "
        >
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              data-philosophy-principle
              data-cursor="hover"
              dir="rtl"
              className="
                group

                relative

                grid
                gap-5

                overflow-hidden

                border-b
                border-white/[0.08]

                py-8

                transition-colors
                duration-500

                hover:bg-white/[0.025]

                sm:py-10

                lg:grid-cols-[110px_1fr_1fr]
                lg:items-center
                lg:gap-10
                lg:px-5
                lg:py-12
              "
            >
              {/* hover background */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none

                  absolute
                  inset-y-0
                  right-0

                  w-0

                  bg-gradient-to-l
                  from-[#84A4B1]/[0.07]
                  to-transparent

                  transition-[width]
                  duration-700

                  group-hover:w-full
                "
              />

              {/* number */}

              <div
                className="
                  relative
                  z-10

                  flex
                  items-center
                  gap-3

                  lg:block
                "
              >
                <span
                  className="
                    text-[10px]
                    tracking-[0.18em]

                    text-[#84A4B1]/55
                  "
                >
                  {principle.number}
                </span>

                <span
                  className="
                    h-px
                    w-8

                    bg-[#84A4B1]/25

                    lg:mt-3
                    lg:block
                  "
                />
              </div>

              {/* statement */}

              <div
                className="
                  relative
                  z-10

                  flex
                  items-center
                  gap-4
                "
              >
                <span
                  className="
                    font-arabic

                    text-[32px]
                    font-light
                    leading-none

                    text-[#84A4B1]/35

                    transition-colors
                    duration-500

                    group-hover:text-[#84A4B1]

                    sm:text-[38px]
                  "
                >
                  لا
                </span>

                <h3
                  className="
                    pb-[0.08em]

                    font-arabic

                    text-[clamp(1.7rem,4vw,2.7rem)]
                    font-bold
                    leading-[1.3]

                    text-[#F3F3F1]
                  "
                >
                  {principle.title.replace('لا ', '')}
                </h3>
              </div>

              {/* explanation */}

              <p
                className="
                  relative
                  z-10

                  max-w-[430px]

                  font-arabic

                  text-[12px]
                  leading-7

                  text-[#F3F3F1]/35

                  transition-colors
                  duration-500

                  group-hover:text-[#F3F3F1]/55

                  sm:text-[13px]
                "
              >
                {principle.description}
              </p>

              {/* interaction line */}

              <span
                aria-hidden="true"
                className="
                  absolute
                  bottom-0
                  right-0

                  h-[2px]
                  w-0

                  bg-[#84A4B1]

                  transition-[width]
                  duration-700

                  group-hover:w-full
                "
              />
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          FINAL PHILOSOPHY
      ====================================================== */}

      <div
        className="
          relative
          z-10

          overflow-hidden

          bg-[#F3F3F1]

          py-20

          sm:py-24
          lg:py-32
        "
      >
        {/* fine grid */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(29,44,79,.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(29,44,79,.025) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* giant decorative mark */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            font-arabic

            text-[220px]
            font-bold
            leading-none

            text-[#1D2C4F]/[0.025]

            sm:text-[320px]
            lg:text-[440px]
          "
        >
          فنر
        </div>

        <div
          data-philosophy-final
          dir="rtl"
          className="
            relative
            z-10

            mx-auto
            max-w-[1000px]

            px-5

            text-center

            sm:px-6
            lg:px-10
          "
        >
          <span
            className="
              mb-7
              inline-flex

              items-center
              gap-3

              text-[9px]
              font-medium
              tracking-[0.18em]

              text-[#557381]
            "
          >
            <span className="h-px w-8 bg-[#84A4B1]" />

            فلسفة فنر

            <span className="h-px w-8 bg-[#84A4B1]" />
          </span>

          <p
            className="
              font-arabic

              text-[15px]
              font-medium
              leading-8

              text-[#1D2C4F]/45

              sm:text-[18px]
            "
          >
            نحن لا نعلمك
            <span className="font-bold text-[#1D2C4F]">
              {' '}ماذا تشتري.
            </span>
          </p>

          <h2
            className="
              mt-4
              pb-[0.12em]

              font-arabic

              text-[clamp(3rem,9vw,6.5rem)]
              font-bold
              leading-[1.15]

              tracking-[-0.045em]

              text-[#1D2C4F]
            "
          >
            نعلمك كيف
            <br />

            <span className="text-[#6F95A4]">
              تفهم.
            </span>
          </h2>

          <div
            className="
              mx-auto
              mt-8

              h-px
              w-16

              bg-[#84A4B1]
            "
          />
        </div>
      </div>
    </section>
  );
}