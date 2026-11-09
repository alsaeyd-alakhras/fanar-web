import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import type { Aboutpage } from '@/types';

gsap.registerPlugin(ScrollTrigger);

export default function Founder() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || reduced) return;

    const ctx = gsap.context(() => {
      /* ================================================
         EYEBROW
      ================================================= */

      gsap.fromTo(
        '[data-founder-eyebrow]',
        {
          opacity: 0,
          y: 12,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            once: true,
          },
        },
      );

      /* ================================================
         TITLE
      ================================================= */

      gsap.fromTo(
        '[data-founder-title]',
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 72%',
            once: true,
          },
        },
      );

      /* ================================================
         BODY
      ================================================= */

      gsap.fromTo(
        '[data-founder-copy]',
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            once: true,
          },
        },
      );

      /* ================================================
         IMAGE REVEAL
      ================================================= */

      gsap.fromTo(
        '[data-founder-image]',
        {
          opacity: 0,
          scale: 1.04,
          clipPath: 'inset(0 0 100% 0)',
        },
        {
          opacity: 1,
          scale: 1,
          clipPath: 'inset(0% 0 0% 0)',
          duration: 1.25,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '[data-founder-image-wrap]',
            start: 'top 78%',
            once: true,
          },
        },
      );

      /* ================================================
         DETAILS
      ================================================= */

      gsap.fromTo(
        '[data-founder-detail]',
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '[data-founder-details]',
            start: 'top 85%',
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
      id="founder"
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
      {/* ==================================================
          BACKGROUND GRID
      =================================================== */}

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
            linear-gradient(rgba(29,44,79,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(29,44,79,.025) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* soft atmosphere */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[20%]
          top-[5%]

          h-[600px]
          w-[600px]

          rounded-full
          bg-[#84A4B1]/[0.08]
          blur-[130px]
        "
      />

      {/* ==================================================
          CONTENT
      =================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1320px]

          px-5
          sm:px-6
          lg:px-10
        "
      >
        {/* =================================================
            TOP LABEL
        ================================================== */}

        <div
          data-founder-eyebrow
          dir="rtl"
          className="
            mb-10

            flex
            items-center
            gap-3

            lg:mb-14
          "
        >
          <span
            className="
              h-[5px]
              w-[5px]
              rounded-full
              bg-[#6F95A4]
            "
          />

          <span
            className="
              text-[9px]
              font-medium
              tracking-[0.2em]
              text-[#557381]

              sm:text-[10px]
            "
          >
            08 / عن فنر
          </span>

          <span
            className="
              h-px
              w-12
              bg-[#84A4B1]/50
            "
          />
        </div>

        {/* =================================================
            MAIN EDITORIAL GRID
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1

            gap-12

            lg:grid-cols-12
            lg:gap-10

            xl:gap-16
          "
        >
          {/* =================================================
              IMAGE
          ================================================== */}

          <div
            data-founder-image-wrap
            className="
              relative

              lg:col-span-6
              lg:order-1
            "
          >
            <div
              data-founder-image
              className="
                relative

                aspect-[4/5]

                overflow-hidden

                bg-[#0A1930]

                sm:aspect-[5/6]
                lg:aspect-[4/5]
              "
            >
              <img
                src="/images/fnar-founder.svg"
                alt="مؤسس فنر"
                className="
                  absolute
                  inset-0

                  h-full
                  w-full

                  object-cover
                  object-center
                "
              />

              {/* subtle image treatment */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-[#07162B]/35
                  via-transparent
                  to-transparent
                "
              />

              {/* border */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0

                  border
                  border-white/[0.08]
                "
              />

              {/* image label */}

              <div
                className="
                  absolute
                  bottom-5
                  right-5

                  flex
                  items-center
                  gap-3

                  sm:bottom-6
                  sm:right-6
                "
              >
                <span
                  className="
                    h-[5px]
                    w-[5px]

                    rounded-full

                    bg-[#D7C79B]
                  "
                />

                <span
                  className="
                    text-[8px]
                    tracking-[0.18em]

                    text-white/55
                  "
                >
                  FNAR / FOUNDER
                </span>
              </div>

              {/* architectural corners */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  left-5
                  top-5

                  h-10
                  w-10

                  border-l
                  border-t
                  border-white/20
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-5
                  left-5

                  h-10
                  w-10

                  border-b
                  border-l
                  border-white/20
                "
              />
            </div>

            {/* number outside image */}

            <span
              aria-hidden="true"
              className="
                absolute
                -bottom-7
                left-3

                hidden

                text-[72px]
                font-semibold
                leading-none

                text-[#1D2C4F]/[0.055]

                lg:block
                xl:text-[90px]
              "
            >
              08
            </span>
          </div>

          {/* =================================================
              TEXT
          ================================================== */}

          <div
            dir="rtl"
            className="
              flex
              flex-col
              justify-center

              lg:col-span-6
              lg:order-2
              lg:pr-8

              xl:pr-12
            "
          >
            {/* title */}

            <h2
              data-founder-title
              className="
                max-w-[650px]

                pb-[0.12em]

                font-arabic

                text-[clamp(2.8rem,6vw,5.3rem)]
                font-bold
                leading-[1.15]

                tracking-[-0.045em]

                text-[#1D2C4F]
              "
            >
              من الخبرة
              <br />

              <span className="text-[#6F95A4]">
                إلى المنهج.
              </span>
            </h2>

            {/* copy */}

            <div
              data-founder-copy
              className="
                mt-7
                max-w-[560px]

                sm:mt-8
              "
            >
              <p
                className="
                  font-arabic

                  text-[14px]
                  leading-8

                  text-[#1D2C4F]/60

                  sm:text-[16px]
                  sm:leading-9
                "
              >
                رؤية جمعت بين الخبرة العملية في الأسواق المالية
                وبناء منهج يساعد المتعلم على فهم الأسواق واتخاذ
                قرارات مستقلة.
              </p>

              {/* quote */}

              <div
                className="
                  relative

                  mt-8

                  border-r
                  border-[#84A4B1]

                  pr-5

                  sm:mt-10
                  sm:pr-6
                "
              >
                <p
                  className="
                    font-arabic

                    text-[17px]
                    font-medium
                    leading-8

                    text-[#1D2C4F]

                    sm:text-[19px]
                    sm:leading-9
                  "
                >
                  المعرفة ليست أن تعرف أين يتحرك السوق،
                  بل أن تفهم لماذا تتحرك معه أو بدونه.
                </p>
              </div>
            </div>

            {/* =================================================
                FOUNDER DETAILS
            ================================================== */}

            <div
              data-founder-details
              className="
                mt-10

                border-t
                border-[#1D2C4F]/10

                pt-6

                sm:mt-12
                sm:pt-7
              "
            >
              <div
                data-founder-detail
                className="
                  flex
                  items-end
                  justify-between
                  gap-6
                "
              >
                <div>
                  <span
                    className="
                      block

                      text-[10px]
                      font-medium

                      text-[#1D2C4F]/35
                    "
                  >
                    المؤسس
                  </span>

                  <p
                    className="
                      mt-1

                      font-arabic

                      text-[20px]
                      font-bold

                      text-[#1D2C4F]

                      sm:text-[22px]
                    "
                  >
                    عبدالعزيز الشريف
                  </p>
                </div>

                <span
                  className="
                    hidden

                    text-[8px]
                    tracking-[0.18em]

                    text-[#1D2C4F]/25

                    sm:block
                  "
                >
                  FOUNDER / FNAR
                </span>
              </div>

              {/* secondary line */}

              <div
                data-founder-detail
                className="
                  mt-6

                  flex
                  flex-wrap
                  items-center
                  gap-x-6
                  gap-y-3
                "
              >
                <span
                  className="
                    flex
                    items-center
                    gap-2

                    text-[11px]

                    text-[#1D2C4F]/45
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

                  خبرة عملية
                </span>

                <span
                  className="
                    flex
                    items-center
                    gap-2

                    text-[11px]

                    text-[#1D2C4F]/45
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

                  منهج تعليمي
                </span>

                <span
                  className="
                    flex
                    items-center
                    gap-2

                    text-[11px]

                    text-[#1D2C4F]/45
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

            {/* =================================================
                CTA
            ================================================== */}

            <div
              data-founder-detail
              className="
                mt-9

                sm:mt-10
              "
            >
              <a
                href="/about"
                
                className="
                  group

                  inline-flex
                  items-center
                  gap-4

                  font-arabic
                  text-[13px]
                  font-medium

                  text-[#1D2C4F]

                  transition-colors
                  duration-300

                  hover:text-[#6F95A4]
                "
                data-cursor="hover"
              >
                <span>تعرف على فنر</span>

                <span
                  className="
                    flex
                    h-9
                    w-9

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-[#1D2C4F]/15

                    transition-[transform,border-color,background-color]
                    duration-300

                    group-hover:-translate-x-1
                    group-hover:border-[#84A4B1]/60
                    group-hover:bg-[#84A4B1]/10
                  "
                >
                  ←
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}