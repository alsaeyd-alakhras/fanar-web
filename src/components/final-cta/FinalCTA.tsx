import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const navigate = useNavigate();

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || reduced) return;

    const ctx = gsap.context(() => {
      /* =========================================
         ARCHITECTURE
      ========================================== */

      gsap.fromTo(
        '[data-final-architecture]',
        {
          opacity: 0,
          scale: 0.96,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            once: true,
          },
        },
      );

      /* =========================================
         LOGO
      ========================================== */

      gsap.fromTo(
        '[data-final-logo]',
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 72%',
            once: true,
          },
        },
      );

      /* =========================================
         EYEBROW
      ========================================== */

      gsap.fromTo(
        '[data-final-eyebrow]',
        {
          opacity: 0,
          y: 16,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            once: true,
          },
        },
      );

      /* =========================================
         HEADLINE
      ========================================== */

      gsap.fromTo(
        '[data-final-title]',
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.25,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 68%',
            once: true,
          },
        },
      );

      /* =========================================
         COPY
      ========================================== */

      gsap.fromTo(
        '[data-final-copy]',
        {
          opacity: 0,
          y: 22,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.35,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 65%',
            once: true,
          },
        },
      );

      /* =========================================
         ACTIONS
      ========================================== */

      gsap.fromTo(
        '[data-final-actions]',
        {
          opacity: 0,
          y: 22,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.45,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 62%',
            once: true,
          },
        },
      );

      /* =========================================
         META
      ========================================== */

      gsap.fromTo(
        '[data-final-meta]',
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
          delay: 0.55,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            once: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  return (
    <section
      ref={sectionRef}
      id="final-cta"
      className="
        relative
        isolate
        min-h-[760px]
        overflow-hidden
        bg-[#0D1A31]
        py-20

        sm:min-h-[820px]
        sm:py-24

        lg:min-h-[900px]
        lg:py-28
      "
    >
      {/* =========================================
          BACKGROUND ATMOSPHERE
      ========================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 42%,
              rgba(132,164,177,.11) 0%,
              rgba(132,164,177,.035) 28%,
              transparent 58%
            )
          `,
        }}
      />

      {/* =========================================
          FINE GRID
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-50
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(132,164,177,.026) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132,164,177,.026) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* =========================================
          CENTER AXIS
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-full
          w-px
          -translate-x-1/2
          bg-gradient-to-b
          from-transparent
          via-white/[0.035]
          to-transparent
        "
      />

      {/* =========================================
          ARCHITECTURAL GATEWAY
      ========================================== */}

      <div
        data-final-architecture
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2

          h-[72%]
          w-[92%]

          max-w-[1050px]

          -translate-x-1/2

          sm:h-[76%]
          sm:w-[80%]

          lg:h-[82%]
          lg:w-[68%]
        "
      >
        {/* outer arch */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            top-0

            rounded-t-[48%]

            border
            border-[#84A4B1]/[0.09]
            border-b-0
          "
        />

        {/* second arch */}

        <div
          className="
            absolute
            bottom-0
            left-[8%]
            right-[8%]
            top-[8%]

            rounded-t-[48%]

            border
            border-[#84A4B1]/[0.12]
            border-b-0
          "
        />

        {/* third arch */}

        <div
          className="
            absolute
            bottom-0
            left-[17%]
            right-[17%]
            top-[17%]

            rounded-t-[48%]

            border
            border-[#84A4B1]/[0.15]
            border-b-0
          "
        />

        {/* inner gateway */}

        <div
          className="
            absolute
            bottom-0
            left-[28%]
            right-[28%]
            top-[30%]

            overflow-hidden

            rounded-t-[48%]

            border
            border-[#84A4B1]/20
            border-b-0

            bg-[#84A4B1]/[0.018]
          "
        >
          <div
            className="
              absolute
              bottom-0
              left-1/2

              h-[85%]
              w-[70%]

              -translate-x-1/2

              bg-gradient-to-t
              from-[#84A4B1]/[0.12]
              via-[#84A4B1]/[0.035]
              to-transparent

              blur-[35px]
            "
          />
        </div>

        {/* floor perspective */}

        <div
          className="
            absolute
            bottom-0
            left-1/2

            h-[36%]
            w-[120%]

            -translate-x-1/2

            overflow-hidden
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-0

              h-full
              w-px

              -translate-x-1/2

              bg-gradient-to-b
              from-[#84A4B1]/20
              to-transparent
            "
          />

          <div
            className="
              absolute
              left-[28%]
              top-0

              h-full
              w-px

              origin-top
              -rotate-[13deg]

              bg-gradient-to-b
              from-[#84A4B1]/10
              to-transparent
            "
          />

          <div
            className="
              absolute
              right-[28%]
              top-0

              h-full
              w-px

              origin-top
              rotate-[13deg]

              bg-gradient-to-b
              from-[#84A4B1]/10
              to-transparent
            "
          />
        </div>
      </div>

      {/* =========================================
          TOP ARCHITECTURAL DETAIL
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-[18%]

          hidden
          items-center

          lg:flex
        "
      >
        <span
          className="
            h-px
            flex-1
            bg-gradient-to-r
            from-transparent
            to-white/[0.055]
          "
        />

        <span
          className="
            mx-5
            h-[4px]
            w-[4px]
            rounded-full
            bg-[#84A4B1]/40
          "
        />

        <span
          className="
            h-px
            flex-1
            bg-gradient-to-l
            from-transparent
            to-white/[0.055]
          "
        />
      </div>

      {/* =========================================
          MAIN CONTENT
      ========================================== */}

      <div
        dir="rtl"
        className="
          relative
          z-10

          mx-auto

          flex
          min-h-[620px]
          max-w-[1200px]

          flex-col
          items-center
          justify-center

          px-5
          text-center

          sm:min-h-[680px]
          sm:px-6

          lg:min-h-[720px]
          lg:px-10
        "
      >
        {/* =====================================
            OFFICIAL LOGO
        ====================================== */}

        <div
          data-final-logo
          className="
            mb-8

            flex
            items-center
            justify-center

            sm:mb-9
          "
        >
          <img
            src="/brand/fnar-icon.svg"
            alt="فنر"
            className="
              h-[68px]
              w-auto
              object-contain
              opacity-90

              sm:h-[78px]
              lg:h-[88px]
            "
          />
        </div>

        {/* =====================================
            EYEBROW
        ====================================== */}

        <div
          data-final-eyebrow
          className="
            mb-5

            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span
            className="
              h-px
              w-9

              bg-gradient-to-l
              from-[#84A4B1]/70
              to-transparent
            "
          />

          <span
            className="
              font-arabic

              text-[9px]
              font-medium

              tracking-[0.12em]

              text-[#84A4B1]

              sm:text-[10px]
            "
          >
            القرار المستقل يبدأ من هنا
          </span>

          <span
            className="
              h-px
              w-9

              bg-gradient-to-r
              from-[#84A4B1]/70
              to-transparent
            "
          />
        </div>

        {/* =====================================
            HEADLINE
            Separate line boxes fix Arabic overlap
        ====================================== */}

        <div
          data-final-title
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >
          <h2
            className="
              pb-[0.16em]

              font-arabic

              text-[clamp(3.1rem,8vw,7.2rem)]
              font-bold

              leading-[1.18]
              tracking-[-0.045em]

              text-[#F3F3F1]
            "
          >
            لا تتبع السوق.
          </h2>

          <div
            className="
              relative

              -mt-1

              px-6
              pb-[0.18em]

              sm:mt-0
              lg:mt-1
            "
          >
            {/* subtle glow behind the key word */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                left-1/2
                top-1/2

                h-[55%]
                w-[130%]

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-[#84A4B1]/[0.07]

                blur-[35px]
              "
            />

            <span
              className="
                relative
                block

                font-arabic

                text-[clamp(3.6rem,9vw,8rem)]
                font-bold

                leading-[1.2]
                tracking-[-0.055em]

                text-[#84A4B1]
              "
            >
              افهمه.
            </span>
          </div>
        </div>

        {/* =====================================
            DESCRIPTION
        ====================================== */}

        <p
          data-final-copy
          className="
            mx-auto
            mt-4
            max-w-[590px]

            font-arabic

            text-[13px]
            leading-7

            text-[#F3F3F1]/45

            sm:mt-5
            sm:text-[15px]
            sm:leading-8
          "
        >
          ابدأ رحلتك نحو فهم أعمق للأسواق،
          وابنِ المعرفة التي تساعدك على اتخاذ قراراتك بنفسك.
        </p>

        {/* =====================================
            PREMIUM ACTIONS
        ====================================== */}

        <div
          data-final-actions
          className="
            mt-9

            flex
            w-full
            max-w-[500px]

            flex-col
            items-stretch
            justify-center

            gap-3

            sm:mt-11
            sm:w-auto
            sm:max-w-none
            sm:flex-row
            sm:items-center
            sm:gap-4
          "
        >
          {/* PRIMARY CTA */}

          <a
            href="/program"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('/program');
            }}
            data-cursor="hover"
            className="
              group
              relative

              flex
              min-h-[62px]
              min-w-[215px]

              items-center
              justify-between

              overflow-hidden

              rounded-full

              border
              border-[#F3F3F1]/90

              bg-[#F3F3F1]

              px-3
              pr-7

              shadow-[0_14px_45px_rgba(0,0,0,0.18)]

              transition-all
              duration-500

              hover:-translate-y-[2px]
              hover:border-[#A7C0CA]
              hover:bg-[#A7C0CA]
              hover:shadow-[0_18px_55px_rgba(0,0,0,0.26)]

              sm:min-w-[220px]
            "
          >
            <span
              className="
                relative
                z-10

                font-arabic

                text-[13px]
                font-bold

                text-[#102039]
              "
            >
              اكتشف برنامج فنر
            </span>

            <span
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

                bg-[#102039]

                text-[#F3F3F1]

                transition-all
                duration-500

                group-hover:-translate-x-1
                group-hover:rotate-[-8deg]
              "
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13 8H3M3 8L7 4M3 8L7 12"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            {/* subtle top reflection */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                left-8
                top-0

                h-px
                w-20

                bg-gradient-to-r
                from-transparent
                via-white
                to-transparent

                opacity-70
              "
            />
          </a>

          {/* SECONDARY CTA */}

          <a
            href="/consultations"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('/consultations');
            }}
            data-cursor="hover"
            className="
              group

              flex
              min-h-[62px]
              min-w-[215px]

              items-center
              justify-between

              rounded-full

              border
              border-[#84A4B1]/25

              bg-[#84A4B1]/[0.045]

              px-3
              pr-7

              backdrop-blur-md

              transition-all
              duration-500

              hover:-translate-y-[2px]
              hover:border-[#84A4B1]/55
              hover:bg-[#84A4B1]/[0.10]

              sm:min-w-[220px]
            "
          >
            <span
              className="
                font-arabic

                text-[12px]
                font-medium

                text-[#F3F3F1]/70

                transition-colors
                duration-300

                group-hover:text-[#F3F3F1]
              "
            >
              احجز استشارة
            </span>

            <span
              className="
                flex
                h-10
                w-10
                shrink-0

                items-center
                justify-center

                rounded-full

                border
                border-[#84A4B1]/25

                bg-[#84A4B1]/[0.08]

                text-[#84A4B1]

                transition-all
                duration-500

                group-hover:-translate-x-1
                group-hover:border-[#84A4B1]/50
                group-hover:bg-[#84A4B1]/15
                group-hover:text-[#F3F3F1]
              "
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13 8H3M3 8L7 4M3 8L7 12"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>

          {/* TERTIARY CTA */}

          <a
            href="/partnerships"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('/partnerships');
            }}
            data-cursor="hover"
            className="
              group

              flex
              min-h-[62px]
              min-w-[215px]

              items-center
              justify-between

              rounded-full

              border
              border-[#84A4B1]/15

              bg-transparent

              px-3
              pr-7

              transition-all
              duration-500

              hover:-translate-y-[2px]
              hover:border-[#84A4B1]/35
              hover:bg-[#84A4B1]/[0.06]

              sm:min-w-[220px]
            "
          >
            <span
              className="
                font-arabic

                text-[12px]
                font-medium

                text-[#F3F3F1]/50

                transition-colors
                duration-300

                group-hover:text-[#F3F3F1]
              "
            >
              فرص الشراكة
            </span>

            <span
              className="
                flex
                h-10
                w-10
                shrink-0

                items-center
                justify-center

                rounded-full

                border
                border-[#84A4B1]/15

                bg-transparent

                text-[#84A4B1]/60

                transition-all
                duration-500

                group-hover:-translate-x-1
                group-hover:border-[#84A4B1]/40
                group-hover:bg-[#84A4B1]/10
                group-hover:text-[#F3F3F1]
              "
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13 8H3M3 8L7 4M3 8L7 12"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>

        {/* =====================================
            TRUST / VALUE LINE
        ====================================== */}

        <div
          data-final-meta
          className="
            mt-10

            flex
            flex-wrap
            items-center
            justify-center

            gap-x-5
            gap-y-3

            sm:mt-12
          "
        >
          <span
            className="
              flex
              items-center
              gap-2

              font-arabic
              text-[9px]

              text-white/30
            "
          >
            <span
              className="
                h-[4px]
                w-[4px]

                rounded-full

                bg-[#84A4B1]
              "
            />

            منهج متدرج
          </span>

          <span
            className="
              hidden

              h-[3px]
              w-[3px]

              rounded-full

              bg-white/15

              sm:block
            "
          />

          <span
            className="
              flex
              items-center
              gap-2

              font-arabic
              text-[9px]

              text-white/30
            "
          >
            <span
              className="
                h-[4px]
                w-[4px]

                rounded-full

                bg-[#84A4B1]
              "
            />

            تعلم تطبيقي
          </span>

          <span
            className="
              hidden

              h-[3px]
              w-[3px]

              rounded-full

              bg-white/15

              sm:block
            "
          />

          <span
            className="
              flex
              items-center
              gap-2

              font-arabic
              text-[9px]

              text-white/30
            "
          >
            <span
              className="
                h-[4px]
                w-[4px]

                rounded-full

                bg-[#84A4B1]
              "
            />

            قرار مستقل
          </span>
        </div>
      </div>

      {/* =========================================
          BOTTOM SIGNATURE
      ========================================== */}

      <div
        data-final-meta
        aria-hidden="true"
        className="
          absolute
          bottom-6
          left-5
          right-5
          z-10

          flex
          items-center
          justify-between

          sm:bottom-8
          sm:left-8
          sm:right-8

          lg:left-10
          lg:right-10
        "
      >
        <span
          className="
            text-[7px]
            tracking-[0.2em]

            text-white/15
          "
        >
          FNAR / KNOWLEDGE BEFORE DECISION
        </span>

        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <span
            className="
              h-px
              w-8

              bg-white/10
            "
          />

          <span
            className="
              text-[7px]
              tracking-[0.18em]

              text-[#84A4B1]/30
            "
          >
            11
          </span>
        </div>
      </div>
    </section>
  );
}