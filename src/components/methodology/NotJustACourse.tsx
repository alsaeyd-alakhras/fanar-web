import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { METHODOLOGY_CARDS } from '@/data/content';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   INTERACTIVE VISUALS
========================================================= */

const ICONS: Record<string, React.ReactNode> = {
  market: (
    <svg viewBox="0 0 48 48" fill="none" className="h-full w-full" aria-hidden="true">
      <path
        d="M8 35L17 27L24 30L39 14"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="
          [stroke-dasharray:60]
          [stroke-dashoffset:0]
          transition-all duration-500
          group-hover:[stroke-dashoffset:8]
        "
      />

      <path
        d="M8 39H40"
        stroke="currentColor"
        strokeOpacity=".18"
      />

      <circle
        cx="17"
        cy="27"
        r="2.2"
        fill="currentColor"
        className="
          origin-center
          transition-transform duration-500
          group-hover:scale-125
        "
      />

      <circle
        cx="24"
        cy="30"
        r="2.2"
        fill="currentColor"
        className="
          origin-center
          transition-transform duration-500
          group-hover:scale-125
        "
      />

      <circle
        cx="39"
        cy="14"
        r="2.8"
        fill="currentColor"
        className="
          origin-center
          transition-transform duration-500
          group-hover:scale-150
        "
      />
    </svg>
  ),

  schools: (
    <svg viewBox="0 0 48 48" fill="none" className="h-full w-full" aria-hidden="true">
      <circle
        cx="24"
        cy="24"
        r="3"
        fill="currentColor"
        className="
          origin-center
          transition-transform duration-500
          group-hover:scale-125
        "
      />

      <path
        d="M24 24L10 12"
        stroke="currentColor"
        strokeWidth="1.3"
        className="
          origin-[24px_24px]
          transition-transform duration-500
          group-hover:-rotate-6
        "
      />

      <path
        d="M24 24L38 11"
        stroke="currentColor"
        strokeWidth="1.3"
        className="
          origin-[24px_24px]
          transition-transform duration-500
          group-hover:rotate-6
        "
      />

      <path
        d="M24 24L10 37"
        stroke="currentColor"
        strokeWidth="1.3"
        className="
          origin-[24px_24px]
          transition-transform duration-500
          group-hover:rotate-6
        "
      />

      <path
        d="M24 24L39 36"
        stroke="currentColor"
        strokeWidth="1.3"
        className="
          origin-[24px_24px]
          transition-transform duration-500
          group-hover:-rotate-6
        "
      />

      <circle cx="10" cy="12" r="2" fill="currentColor" />
      <circle cx="38" cy="11" r="2" fill="currentColor" />
      <circle cx="10" cy="37" r="2" fill="currentColor" />
      <circle cx="39" cy="36" r="2" fill="currentColor" />
    </svg>
  ),

  risk: (
    <svg viewBox="0 0 48 48" fill="none" className="h-full w-full" aria-hidden="true">
      <circle
        cx="24"
        cy="24"
        r="8"
        stroke="currentColor"
        strokeWidth="1.3"
      />

      <circle
        cx="24"
        cy="24"
        r="15"
        stroke="currentColor"
        strokeOpacity=".28"
        className="
          origin-center
          transition-transform duration-500
          group-hover:scale-110
        "
      />

      <path
        d="M24 7V12M24 36V41M7 24H12M36 24H41"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      <circle
        cx="24"
        cy="24"
        r="2.5"
        fill="currentColor"
        className="
          origin-center
          transition-transform duration-500
          group-hover:scale-150
        "
      />
    </svg>
  ),

  capital: (
    <svg viewBox="0 0 48 48" fill="none" className="h-full w-full" aria-hidden="true">
      <circle
        cx="24"
        cy="24"
        r="16"
        stroke="currentColor"
        strokeOpacity=".2"
      />

      <circle
        cx="24"
        cy="24"
        r="10"
        stroke="currentColor"
        strokeWidth="1.3"
        className="
          origin-center
          transition-transform duration-500
          group-hover:scale-110
        "
      />

      <path
        d="M24 24L24 8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="
          origin-[24px_24px]
          transition-transform duration-700
          group-hover:rotate-[35deg]
        "
      />

      <path
        d="M24 24L38 31"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="
          origin-[24px_24px]
          transition-transform duration-700
          group-hover:-rotate-[20deg]
        "
      />

      <circle cx="24" cy="24" r="3" fill="currentColor" />
    </svg>
  ),

  behavior: (
    <svg viewBox="0 0 48 48" fill="none" className="h-full w-full" aria-hidden="true">
      <path
        d="
          M7 25
          C11 25 11 17 15 17
          C19 17 19 33 24 33
          C29 33 29 13 34 13
          C38 13 38 25 41 25
        "
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        className="
          [stroke-dasharray:80]
          [stroke-dashoffset:0]
          transition-all duration-700
          group-hover:[stroke-dashoffset:-12]
        "
      />

      <path
        d="M7 25H41"
        stroke="currentColor"
        strokeOpacity=".18"
      />

      <circle
        cx="24"
        cy="33"
        r="2.5"
        fill="currentColor"
        className="
          origin-center
          transition-transform duration-500
          group-hover:scale-150
        "
      />
    </svg>
  ),

  decision: (
    <svg viewBox="0 0 48 48" fill="none" className="h-full w-full" aria-hidden="true">
      <path
        d="M8 11C17 11 18 18 24 24"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        className="
          transition-transform duration-500
          group-hover:translate-x-[2px]
        "
      />

      <path
        d="M8 37C17 37 18 30 24 24"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        className="
          transition-transform duration-500
          group-hover:translate-x-[2px]
        "
      />

      <path
        d="M24 24H40"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="
          transition-transform duration-500
          group-hover:translate-x-[3px]
        "
      />

      <circle
        cx="24"
        cy="24"
        r="3.5"
        fill="currentColor"
        className="
          origin-center
          transition-transform duration-500
          group-hover:scale-125
        "
      />

      <circle cx="40" cy="24" r="2" fill="currentColor" />
    </svg>
  ),
};

/* =========================================================
   DESKTOP POSITIONS

   IMPORTANT:
   Position is handled by a wrapper.
   GSAP never touches that wrapper's transform.
========================================================= */

const DESKTOP_POSITIONS = [
  { left: '4%', top: '12%' },
  { left: '4%', bottom: '12%' },
  { left: '50%', bottom: '0', transform: 'translateX(-50%)' },
  { right: '4%', bottom: '12%' },
  { right: '4%', top: '12%' },
  { left: '50%', top: '0', transform: 'translateX(-50%)' },
];

/* =========================================================
   SYSTEM CORE
========================================================= */

function SystemCore() {
  return (
    <>
      <div
        className="
          absolute inset-0
          rounded-full
          border border-[#84A4B1]/25
        "
      />

      <div
        className="
          absolute
          inset-[14px]
          rounded-full
          border border-[#1D2C4F]/[0.07]

          sm:inset-[16px]
        "
      />

      <div
        className="
          absolute
          inset-[30px]
          rotate-45
          border border-[#84A4B1]/30

          sm:inset-[35px]
        "
      />

      <div
        className="
          relative z-10

          flex
          h-[104px]
          w-[104px]
          flex-col
          items-center
          justify-center

          rounded-full
          bg-[#1D2C4F]

          text-center

          shadow-[0_24px_60px_rgba(29,44,79,0.13)]

          sm:h-[118px]
          sm:w-[118px]
        "
      >
        <img
          src="/brand/fnar-icon.svg"
          alt=""
          className="h-[72px] w-auto object-contain"
        />
      </div>
    </>
  );
}

/* =========================================================
   CARD CONTENT
========================================================= */

interface CardContentProps {
  card: (typeof METHODOLOGY_CARDS)[number];
  index: number;
}

function CardContent({ card, index }: CardContentProps) {
  return (
    <>
      <div className="mb-5 flex items-start justify-between gap-5">
        <span
          className="
            pt-1
            text-[9px]
            font-medium
            tracking-[0.18em]
            text-[#84A4B1]
          "
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* interactive visual */}
        <div
          className="
            relative

            flex
            h-[56px]
            w-[56px]
            shrink-0
            items-center
            justify-center

            text-[#1D2C4F]

            transition-colors
            duration-500

            group-hover:text-[#6F95A4]

            sm:h-[60px]
            sm:w-[60px]
          "
        >
          <span
            className="
              absolute
              inset-[5px]

              rounded-full

              border
              border-[#1D2C4F]/[0.07]

              transition-[transform,border-color]
              duration-500

              group-hover:scale-110
              group-hover:border-[#84A4B1]/30
            "
          />

          <div
            className="
              relative z-10
              h-[42px]
              w-[42px]

              sm:h-[46px]
              sm:w-[46px]
            "
          >
            {ICONS[card.icon]}
          </div>
        </div>
      </div>

      <h3
        className="
          font-arabic
          text-[17px]
          font-bold
          leading-[1.5]
          text-[#1D2C4F]

          sm:text-[18px]
        "
      >
        {card.title}
      </h3>

      <p
        className="
          mt-2

          font-arabic
          text-[12px]
          leading-6

          text-[#1D2C4F]/50

          sm:text-[13px]
          sm:leading-7
        "
      >
        {card.description}
      </p>

      <span
        className="
          absolute
          bottom-0
          right-0

          h-px
          w-0

          bg-[#84A4B1]

          transition-[width]
          duration-500

          group-hover:w-full
        "
      />
    </>
  );
}

/* =========================================================
   RESPONSIVE CARD
========================================================= */

function ResponsiveCard({
  card,
  index,
}: CardContentProps) {
  return (
    <article
      data-responsive-node
      data-cursor="hover"
      className="
        group
        relative

        min-h-[185px]

        bg-[#F3F3F1]

        p-5

        transition-[background-color,box-shadow]
        duration-300

        hover:bg-[#F7F7F4]

        sm:min-h-[210px]
        sm:p-7
      "
    >
      <CardContent card={card} index={index} />
    </article>
  );
}

/* =========================================================
   DESKTOP CARD

   The OUTER wrapper owns positioning.
   The INNER article owns visual interaction.

   This prevents GSAP/Tailwind transform collisions.
========================================================= */

function DesktopCard({
  card,
  index,
}: CardContentProps) {
  return (
    <div
      className="
        absolute
        w-[235px]
        xl:w-[255px]
      "
      style={DESKTOP_POSITIONS[index]}
    >
      <article
        data-desktop-node
        data-cursor="hover"
        className="
          group
          relative

          min-h-[165px]
          w-full

          border
          border-[#1D2C4F]/[0.08]

          bg-[#F3F3F1]/95

          p-5

          backdrop-blur-sm

          transition-[border-color,background-color,box-shadow]
          duration-300

          hover:border-[#84A4B1]/45
          hover:bg-[#F7F7F4]
          hover:shadow-[0_18px_50px_rgba(29,44,79,0.055)]
        "
      >
        <CardContent card={card} index={index} />
      </article>
    </div>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function NotJustACourse() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || reduced) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* =====================================================
         INTRO
      ===================================================== */

      const introEyebrow = section.querySelector(
        '[data-system-eyebrow]',
      );

      const introTitle = section.querySelector(
        '[data-system-title]',
      );

      const introSubtitle = section.querySelector(
        '[data-system-subtitle]',
      );

      gsap.set(introEyebrow, {
        opacity: 0,
        y: 10,
      });

      gsap.set(introTitle, {
        opacity: 0,
        y: 28,
      });

      gsap.set(introSubtitle, {
        opacity: 0,
        y: 14,
      });

      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 72%',
          once: true,
        },
      });

      introTimeline
        .to(introEyebrow, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
        })

        .to(
          introTitle,
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power4.out',
          },
          '-=.22',
        )

        .to(
          introSubtitle,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=.48',
        );

      /* =====================================================
         MOBILE + TABLET
      ===================================================== */

      mm.add('(max-width: 1023px)', () => {
        const responsiveSystem = section.querySelector(
          '[data-responsive-system]',
        );

        const responsiveCore = section.querySelector(
          '[data-responsive-core]',
        );

        const nodes = gsap.utils.toArray<HTMLElement>(
          '[data-responsive-node]',
          section,
        );

        if (!responsiveSystem) return;

        gsap.set(responsiveCore, {
          opacity: 0,
          scale: 0.94,
        });

        gsap.set(nodes, {
          opacity: 0,
          y: 20,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: responsiveSystem,
            start: 'top 82%',
            once: true,
          },
        });

        tl.to(responsiveCore, {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: 'power3.out',
        });

        tl.to(
          nodes,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.07,
            ease: 'power3.out',
          },
          '-=.3',
        );

        return () => {
          tl.kill();
        };
      });

      /* =====================================================
         DESKTOP
      ===================================================== */

      mm.add('(min-width: 1024px)', () => {
        const desktopSystem = section.querySelector(
          '[data-desktop-system]',
        );

        const desktopCore = section.querySelector(
          '[data-desktop-core]',
        );

        const nodes = gsap.utils.toArray<HTMLElement>(
          '[data-desktop-node]',
          section,
        );

        const lines = gsap.utils.toArray<SVGPathElement>(
          '[data-system-line]',
          section,
        );

        if (!desktopSystem) return;

        /*
         * Important:
         * Desktop cards animate ONLY opacity.
         *
         * We deliberately do not animate x/y/scale on the cards,
         * so GSAP cannot interfere with absolute positioning.
         */
        gsap.set(nodes, {
          opacity: 0,
        });

        gsap.set(desktopCore, {
          opacity: 0,
        });

        gsap.set(lines, {
          strokeDasharray: 1,
          strokeDashoffset: 1,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: desktopSystem,
            start: 'top 80%',
            once: true,
          },
        });

        tl.to(desktopCore, {
          opacity: 1,
          duration: 0.65,
          ease: 'power3.out',
        });

        tl.to(
          lines,
          {
            strokeDashoffset: 0,
            duration: 0.9,
            stagger: 0.05,
            ease: 'power2.inOut',
          },
          '-=.3',
        );

        tl.to(
          nodes,
          {
            opacity: 1,
            duration: 0.55,
            stagger: 0.065,
            ease: 'power2.out',
          },
          '-=.5',
        );

        return () => {
          tl.kill();
        };
      });

      return () => {
        mm.revert();
      };
    }, section);

    return () => {
      ctx.revert();
    };
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden

        bg-[#F3F3F1]

        py-20
        sm:py-24
        lg:py-32
        xl:py-36
      "
    >
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

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
            linear-gradient(rgba(29,44,79,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(29,44,79,.03) 1px, transparent 1px)
          `,
          backgroundSize: '88px 88px',
        }}
      />

      {/* =====================================================
          ATMOSPHERE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[62%]

          h-[420px]
          w-[420px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#84A4B1]/[0.05]

          blur-[100px]

          sm:h-[550px]
          sm:w-[550px]

          lg:h-[650px]
          lg:w-[650px]
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative

          mx-auto
          w-full
          max-w-[1440px]

          px-5
          sm:px-6
          lg:px-10
        "
      >
        {/* ===================================================
            INTRO
        ==================================================== */}

        <div
          dir="rtl"
          className="
            mx-auto

            mb-12
            max-w-[800px]

            text-center

            sm:mb-16
            lg:mb-16
          "
        >
          <div
            data-system-eyebrow
            className="
              mb-5

              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-7 bg-[#84A4B1]" />

            <span
              className="
                text-[9px]
                font-medium
                tracking-[0.18em]
                text-[#557381]

                sm:text-[10px]
              "
            >
              05 / المنظومة
            </span>

            <span className="h-px w-7 bg-[#84A4B1]" />
          </div>

          <h2
            data-system-title
            className="
              pb-[0.14em]

              font-arabic
              text-[clamp(2.55rem,9vw,5.2rem)]
              font-bold

              leading-[1.22]
              tracking-[-0.035em]

              text-[#1D2C4F]
            "
          >
            ليس دورة عادية.
          </h2>

          <p
            data-system-subtitle
            className="
              mx-auto

              mt-3
              max-w-[620px]

              px-2

              font-arabic
              text-[14px]
              leading-7

              text-[#1D2C4F]/55

              sm:mt-4
              sm:text-[16px]
              sm:leading-8

              lg:mt-5
              lg:text-[17px]
            "
          >
            بل منظومة تعليمية متكاملة تربط المعرفة بالسلوك
            والمخاطر ورأس المال لبناء فهم أعمق للأسواق.
          </p>
        </div>

        {/* ===================================================
            MOBILE + TABLET
        ==================================================== */}

        <div
          dir="rtl"
          className="lg:hidden"
        >
          {/* core */}

          <div
            data-responsive-core
            className="
              relative

              mx-auto
              mb-10

              flex
              h-[180px]
              w-[180px]

              items-center
              justify-center

              sm:mb-12
              sm:h-[200px]
              sm:w-[200px]
            "
          >
            <SystemCore />
          </div>

          {/* grid */}

          <div
            data-responsive-system
            className="
              mx-auto
              grid
              max-w-[900px]
              grid-cols-1

              gap-px

              overflow-hidden

              border
              border-[#1D2C4F]/[0.08]

              bg-[#1D2C4F]/[0.08]

              sm:grid-cols-2
            "
          >
            {METHODOLOGY_CARDS.map((card, index) => (
              <ResponsiveCard
                key={`responsive-${card.id}`}
                card={card}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* ===================================================
            DESKTOP CONSTELLATION
        ==================================================== */}

        <div
          data-desktop-system
          dir="rtl"
          className="
            relative

            mx-auto
            hidden

            h-[650px]
            w-full
            max-w-[1120px]

            lg:block

            xl:h-[680px]
          "
        >
          {/* ===============================================
              CONNECTION LINES
          ================================================ */}

          <svg
            viewBox="0 0 1000 650"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              inset-0

              h-full
              w-full
            "
          >
            <g
              fill="none"
              stroke="#84A4B1"
              strokeOpacity=".26"
              strokeWidth="1"
            >
              <path
                data-system-line
                pathLength="1"
                d="M500 325 L175 145"
              />

              <path
                data-system-line
                pathLength="1"
                d="M500 325 L175 505"
              />

              <path
                data-system-line
                pathLength="1"
                d="M500 325 L500 590"
              />

              <path
                data-system-line
                pathLength="1"
                d="M500 325 L825 505"
              />

              <path
                data-system-line
                pathLength="1"
                d="M500 325 L825 145"
              />

              <path
                data-system-line
                pathLength="1"
                d="M500 325 L500 60"
              />
            </g>

            {/* center */}

            <circle
              cx="500"
              cy="325"
              r="4"
              fill="#84A4B1"
              opacity=".7"
            />

            {/* destinations */}

            <g
              fill="#84A4B1"
              opacity=".45"
            >
              <circle cx="175" cy="145" r="2.2" />
              <circle cx="175" cy="505" r="2.2" />
              <circle cx="500" cy="590" r="2.2" />
              <circle cx="825" cy="505" r="2.2" />
              <circle cx="825" cy="145" r="2.2" />
              <circle cx="500" cy="60" r="2.2" />
            </g>

            {/* subtle center orbit */}

            <circle
              cx="500"
              cy="325"
              r="125"
              fill="none"
              stroke="#84A4B1"
              strokeOpacity=".09"
            />

            <circle
              cx="500"
              cy="325"
              r="150"
              fill="none"
              stroke="#84A4B1"
              strokeOpacity=".06"
              strokeDasharray="3 10"
            />
          </svg>

          {/* ===============================================
              DESKTOP CORE

              Important:
              wrapper handles translate positioning.
              animated child does NOT need x/y transforms.
          ================================================ */}

          <div
            className="
              absolute
              left-1/2
              top-1/2

              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <div
              data-desktop-core
              className="
                relative

                flex
                h-[210px]
                w-[210px]

                items-center
                justify-center

                xl:h-[220px]
                xl:w-[220px]
              "
            >
              <SystemCore />
            </div>
          </div>

          {/* ===============================================
              DESKTOP CARDS
          ================================================ */}

          {METHODOLOGY_CARDS.map((card, index) => (
            <DesktopCard
              key={`desktop-${card.id}`}
              card={card}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}