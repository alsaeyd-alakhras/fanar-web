import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const COMMUNITY_POINTS = [
  {
    number: '01',
    title: 'مجتمع جاد من المتعلمين',
    description:
      'بيئة تعليمية هادئة وجادة، تركز على الفهم الحقيقي بعيداً عن الضوضاء.',
  },
  {
    number: '02',
    title: 'تعليم تطبيقي',
    description:
      'المفاهيم لا تتوقف عند الشرح، بل ترتبط بأمثلة واقعية من الأسواق.',
  },
  {
    number: '03',
    title: 'منهج مترابط',
    description:
      'كل مرحلة تبني على ما قبلها، لتتكوّن لديك صورة متكاملة لا معلومات متفرقة.',
  },
  {
    number: '04',
    title: 'رحلة تناسب مستواك',
    description:
      'ابدأ من الأساس أو طوّر فهمك الحالي ضمن مسار واضح ومتدرج.',
  },
];

export default function Community() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || reduced) return;

    const ctx = gsap.context(() => {
      /* -----------------------------------------
         INTRO
      ------------------------------------------ */

      gsap.fromTo(
        '[data-community-intro]',
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            once: true,
          },
        },
      );

      /* -----------------------------------------
         POINTS
      ------------------------------------------ */

      gsap.fromTo(
        '[data-community-point]',
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '[data-community-points]',
            start: 'top 78%',
            once: true,
          },
        },
      );

      /* -----------------------------------------
         CENTER LINE
      ------------------------------------------ */

      gsap.fromTo(
        '[data-community-line]',
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          duration: 1.2,
          ease: 'power3.inOut',
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: '[data-community-points]',
            start: 'top 80%',
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
      id="community"
      className="
        relative
        overflow-hidden
        bg-[#F3F3F1]

        py-20
        sm:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* =========================================
          SUBTLE BACKGROUND
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.45]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(29,44,79,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(29,44,79,.025) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      {/* soft atmosphere */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[15%]
          top-[10%]

          h-[520px]
          w-[520px]

          rounded-full

          bg-[#84A4B1]/[0.09]
          blur-[120px]
        "
      />

      {/* =========================================
          MAIN CONTAINER
      ========================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1320px]

          px-5
          sm:px-6
          lg:px-10
        "
      >
        <div
          dir="rtl"
          className="
            grid
            grid-cols-1

            gap-14

            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-20

            xl:gap-28
          "
        >
          {/* =====================================
              MAIN STATEMENT
          ====================================== */}

          <div
            data-community-intro
            className="
              lg:sticky
              lg:top-32
              lg:self-start
            "
          >
            {/* eyebrow */}

            <div
              className="
                mb-6
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-px
                  w-9
                  bg-[#84A4B1]
                "
              />

              <span
                className="
                  font-arabic

                  text-[10px]
                  font-medium

                  tracking-[0.12em]

                  text-[#617E8B]
                "
              >
                مجتمع فنر
              </span>
            </div>

            {/* heading */}

            <h2
              className="
                max-w-[580px]

                pb-[0.12em]

                font-arabic

                text-[clamp(2.7rem,6vw,5.6rem)]
                font-bold

                leading-[1.12]
                tracking-[-0.05em]

                text-[#1D2C4F]
              "
            >
              الفهم لا ينمو
              <br />

              <span className="text-[#84A4B1]">
                في العزلة.
              </span>
            </h2>

            {/* description */}

            <p
              className="
                mt-7
                max-w-[470px]

                font-arabic

                text-[14px]
                leading-8

                text-[#1D2C4F]/55

                sm:text-[15px]
              "
            >
              فنر ليس مجرد محتوى تشاهده ثم تغادر.
              بل بيئة تعليمية تجمع بين المنهج، التطبيق،
              ومجتمع يشاركك نفس الجدية تجاه التعلم.
            </p>

            {/* small quote / statement */}

            <div
              className="
                mt-10

                max-w-[430px]

                border-r-2
                border-[#84A4B1]/60

                pr-5
              "
            >
              <p
                className="
                  font-arabic

                  text-[13px]
                  font-medium
                  leading-7

                  text-[#1D2C4F]/75
                "
              >
                لا ضوضاء. لا مطاردة لتوصيات.
                <br />
                مساحة مخصصة للتعلم والفهم.
              </p>
            </div>

            {/* decorative index */}

            <div
              className="
                mt-12
                hidden

                items-center
                gap-4

                lg:flex
              "
            >
              <span
                className="
                  text-[9px]
                  tracking-[0.2em]

                  text-[#1D2C4F]/25
                "
              >
                FNAR / COMMUNITY
              </span>

              <span
                className="
                  h-px
                  w-16

                  bg-[#1D2C4F]/10
                "
              />
            </div>
          </div>

          {/* =====================================
              COMMUNITY PRINCIPLES
          ====================================== */}

          <div
            data-community-points
            className="relative"
          >
            {/* vertical timeline */}

            <div
              aria-hidden="true"
              className="
                absolute
                bottom-8
                right-[19px]
                top-8

                hidden
                w-px

                bg-[#1D2C4F]/10

                sm:block
              "
            >
              <div
                data-community-line
                className="
                  h-full
                  w-full

                  origin-top

                  bg-gradient-to-b
                  from-[#84A4B1]/70
                  via-[#84A4B1]/25
                  to-transparent
                "
              />
            </div>

            <div className="space-y-3 sm:space-y-4">
              {COMMUNITY_POINTS.map((point) => (
                <article
                  key={point.number}
                  data-community-point
                  data-cursor="hover"
                  className="
                    group
                    relative

                    border
                    border-[#1D2C4F]/[0.07]

                    bg-[#F8F8F6]/70

                    px-5
                    py-7

                    transition-all
                    duration-500

                    hover:-translate-y-[2px]
                    hover:border-[#84A4B1]/35
                    hover:bg-white

                    sm:px-7
                    sm:py-8

                    lg:px-8
                    lg:py-9
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      gap-5

                      sm:gap-7
                    "
                  >
                    {/* number */}

                    <div
                      className="
                        relative
                        z-10

                        flex
                        h-10
                        w-10
                        shrink-0

                        items-center
                        justify-center

                        rounded-full

                        border
                        border-[#1D2C4F]/10

                        bg-[#F3F3F1]

                        transition-all
                        duration-500

                        group-hover:border-[#84A4B1]/60
                        group-hover:bg-[#1D2C4F]
                      "
                    >
                      <span
                        className="
                          text-[9px]
                          font-medium

                          text-[#1D2C4F]/40

                          transition-colors
                          duration-500

                          group-hover:text-[#F3F3F1]
                        "
                      >
                        {point.number}
                      </span>
                    </div>

                    {/* copy */}

                    <div className="min-w-0 flex-1">
                      <div
                        className="
                          flex
                          items-start
                          justify-between
                          gap-5
                        "
                      >
                        <h3
                          className="
                            font-arabic

                            text-[17px]
                            font-bold
                            leading-7

                            text-[#1D2C4F]

                            sm:text-[19px]
                          "
                        >
                          {point.title}
                        </h3>

                        {/* arrow */}

                        <span
                          aria-hidden="true"
                          className="
                            mt-1
                            hidden
                            h-8
                            w-8
                            shrink-0

                            items-center
                            justify-center

                            rounded-full

                            border
                            border-[#1D2C4F]/10

                            text-[12px]

                            text-[#1D2C4F]/30

                            transition-all
                            duration-500

                            group-hover:-translate-x-1
                            group-hover:border-[#84A4B1]/50
                            group-hover:bg-[#84A4B1]/10
                            group-hover:text-[#1D2C4F]

                            sm:flex
                          "
                        >
                          ←
                        </span>
                      </div>

                      <p
                        className="
                          mt-3
                          max-w-[520px]

                          font-arabic

                          text-[12px]
                          leading-7

                          text-[#1D2C4F]/50

                          transition-colors
                          duration-500

                          group-hover:text-[#1D2C4F]/65

                          sm:text-[13px]
                        "
                      >
                        {point.description}
                      </p>
                    </div>
                  </div>

                  {/* bottom hover line */}

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-0
                      right-0

                      h-[2px]
                      w-0

                      bg-[#84A4B1]

                      transition-all
                      duration-700

                      group-hover:w-full
                    "
                  />
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================
            BOTTOM STATEMENT
        ====================================== */}

        <div
          dir="rtl"
          className="
            mt-16

            flex
            flex-col
            gap-5

            border-t
            border-[#1D2C4F]/10

            pt-6

            sm:flex-row
            sm:items-center
            sm:justify-between

            lg:mt-24
          "
        >
          <p
            className="
              font-arabic
              text-[11px]

              text-[#1D2C4F]/40
            "
          >
            لأن جودة البيئة جزء من جودة التعلم.
          </p>

          <div className="flex items-center gap-3">
            <span
              className="
                h-[5px]
                w-[5px]

                rounded-full

                bg-[#84A4B1]
              "
            />

            <span
              className="
                text-[8px]
                tracking-[0.18em]

                text-[#1D2C4F]/25
              "
            >
              LEARN · UNDERSTAND · GROW
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}