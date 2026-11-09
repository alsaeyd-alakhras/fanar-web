import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DASHBOARD_DATA } from '@/data/content';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const NAV_ITEMS = [
  { label: 'لوحة التحكم', active: true },
  { label: 'المسارات' },
  { label: 'دروسي' },
  { label: 'المعرفة' },
  { label: 'الإعدادات' },
];

export default function Dashboard() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reduced) return;

    const ctx = gsap.context(() => {
      /* =========================================
         SECTION INTRO
      ========================================== */

      gsap.fromTo(
        '[data-dash-intro]',
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
            trigger: section,
            start: 'top 78%',
            once: true,
          },
        },
      );

      /* =========================================
         PRODUCT WINDOW
      ========================================== */

      gsap.fromTo(
        '[data-dash-window]',
        {
          opacity: 0,
          y: 55,
          scale: 0.985,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '[data-dash-window]',
            start: 'top 82%',
            once: true,
          },
        },
      );

      /* =========================================
         INTERNAL ELEMENTS
      ========================================== */

      const items = section.querySelectorAll('[data-dash-reveal]');

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '[data-dash-window]',
            start: 'top 72%',
            once: true,
          },
        },
      );

      /* =========================================
         PROGRESS BAR
      ========================================== */

      gsap.fromTo(
        '[data-dash-progress]',
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 1.25,
          delay: 0.25,
          ease: 'power3.out',
          transformOrigin: 'right center',
          scrollTrigger: {
            trigger: '[data-dash-progress]',
            start: 'top 90%',
            once: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  const progress = DASHBOARD_DATA.user.progressPercent;

  return (
    <section
      ref={sectionRef}
      id="dashboard"
      className="
        relative
        overflow-hidden
        bg-[#101E38]
        py-20
        sm:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(rgba(132,164,177,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132,164,177,.035) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[30%]
          h-[700px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[#84A4B1]/[0.07]
          blur-[150px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-px
          w-[70%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#84A4B1]/30
          to-transparent
        "
      />

      {/* =========================================
          CONTENT
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
        {/* =====================================
            INTRO
        ====================================== */}

        <div
          data-dash-intro
          dir="rtl"
          className="
            mx-auto
            mb-12
            max-w-[760px]
            text-center
            sm:mb-14
            lg:mb-16
          "
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#84A4B1]/45" />

            <span
              className="
                text-[9px]
                font-medium
                tracking-[0.2em]
                text-[#84A4B1]
                sm:text-[10px]
              "
            >
              منصة فنر
            </span>

            <span className="h-px w-8 bg-[#84A4B1]/45" />
          </div>

          <h2
            className="
              pb-[0.12em]
              font-arabic
              text-[clamp(2.7rem,6vw,5rem)]
              font-bold
              leading-[1.15]
              tracking-[-0.045em]
              text-[#F3F3F1]
            "
          >
            تعلمك.
            <span className="text-[#84A4B1]">
              {' '}في مكان واحد.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[560px]
              font-arabic
              text-[13px]
              leading-7
              text-[#F3F3F1]/45
              sm:text-[15px]
              sm:leading-8
            "
          >
            تجربة تعليمية مصممة لتبقي مسارك واضحاً،
            تقدمك مرئياً، ومعرفتك منظمة.
          </p>
        </div>

        {/* =====================================
            PRODUCT WINDOW
        ====================================== */}

        <div
          data-dash-window
          dir="rtl"
          className="
            relative
            mx-auto
            max-w-[1160px]
            overflow-hidden
            border
            border-white/[0.09]
            bg-[#142541]
            shadow-[0_35px_100px_rgba(0,0,0,.32)]
          "
        >
          {/* =================================
              WINDOW BAR
          ================================== */}

          <div
            className="
              flex
              h-12
              items-center
              justify-between
              border-b
              border-white/[0.07]
              bg-[#102039]
              px-4
              sm:px-5
            "
          >
            <div className="flex items-center gap-2">
              <span className="h-[6px] w-[6px] rounded-full bg-[#84A4B1]/70" />
              <span className="h-[6px] w-[6px] rounded-full bg-white/15" />
              <span className="h-[6px] w-[6px] rounded-full bg-white/10" />
            </div>

            <span
              className="
                text-[8px]
                tracking-[0.18em]
                text-white/25
              "
            >
              FNAR / LEARNING PLATFORM
            </span>
          </div>

          {/* =================================
              DASHBOARD BODY
          ================================== */}

          <div className="flex min-h-[600px]">

            {/* ===============================
                SIDEBAR
            ================================ */}

            <aside
              className="
                hidden
                w-[220px]
                shrink-0
                border-l
                border-white/[0.07]
                bg-[#102039]/70
                p-5
                md:flex
                md:flex-col
              "
            >
              {/* OFFICIAL FNAR LOGO */}

              <div
                data-dash-reveal
                className="
                  border-b
                  border-white/[0.07]
                  pb-6
                "
              >
                <img
                  src="/brand/fnar-icon.svg"
                  alt="فنر"
                  className="
                    h-[58px]
                    w-auto
                    max-w-[150px]
                    object-contain
                    object-right
                  "
                />
              </div>

              {/* NAVIGATION */}

              <nav className="mt-6 space-y-1">
                {NAV_ITEMS.map((item, index) => (
                  <button
                    key={item.label}
                    type="button"
                    data-dash-reveal
                    className={`
                      group
                      relative
                      flex
                      w-full
                      items-center
                      gap-3
                      px-3
                      py-2.5
                      text-right
                      font-arabic
                      text-[11px]
                      transition-colors
                      duration-300

                      ${
                        item.active
                          ? 'bg-[#84A4B1]/10 text-[#F3F3F1]'
                          : 'text-[#F3F3F1]/35 hover:bg-white/[0.025] hover:text-[#F3F3F1]/70'
                      }
                    `}
                  >
                    <span
                      className={`
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        text-[8px]

                        ${
                          item.active
                            ? 'text-[#84A4B1]'
                            : 'text-white/20'
                        }
                      `}
                    >
                      0{index + 1}
                    </span>

                    {item.label}

                    {item.active && (
                      <span
                        className="
                          absolute
                          bottom-2
                          right-0
                          top-2
                          w-[2px]
                          bg-[#84A4B1]
                        "
                      />
                    )}
                  </button>
                ))}
              </nav>

              {/* SIDEBAR FOOTER */}

              <div
                data-dash-reveal
                className="
                  mt-auto
                  border-t
                  border-white/[0.07]
                  pt-5
                "
              >
                <p
                  className="
                    font-arabic
                    text-[10px]
                    text-white/35
                  "
                >
                  التعلم يبدأ بالفهم
                </p>

                <p
                  className="
                    mt-2
                    text-[7px]
                    tracking-[0.18em]
                    text-[#84A4B1]/40
                  "
                >
                  FNAR PLATFORM
                </p>
              </div>
            </aside>

            {/* ===============================
                MAIN CONTENT
            ================================ */}

            <main
              className="
                min-w-0
                flex-1
                p-4
                sm:p-6
                lg:p-8
              "
            >
              {/* =============================
                  TOP BAR — NO USER NAME
              ============================== */}

              <div
                data-dash-reveal
                className="
                  mb-7
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                <div>
                  <p
                    className="
                      mb-1
                      font-arabic
                      text-[10px]
                      text-[#84A4B1]
                    "
                  >
                    مرحباً بك
                  </p>

                  <h3
                    className="
                      font-arabic
                      text-[20px]
                      font-bold
                      text-[#F3F3F1]
                      sm:text-[23px]
                    "
                  >
                    واصل رحلتك المعرفية
                  </h3>

                  <p
                    className="
                      mt-1
                      hidden
                      font-arabic
                      text-[9px]
                      text-white/30
                      sm:block
                    "
                  >
                    تقدم مستمر، وفهم أعمق للأسواق.
                  </p>
                </div>

                {/* SMALL OFFICIAL LOGO ON MOBILE */}

                <div className="md:hidden">
                  <img
                    src="/brand/fnar-icon.svg"
                    alt="فنر"
                    className="
                      h-[42px]
                      w-auto
                      max-w-[110px]
                      object-contain
                    "
                  />
                </div>
              </div>

              {/* =============================
                  MAIN PROGRESS PANEL
              ============================== */}

              <div
                data-dash-reveal
                className="
                  relative
                  mb-4
                  overflow-hidden
                  border
                  border-[#84A4B1]/15
                  bg-[#172B49]
                  p-5
                  sm:p-6
                  lg:p-7
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -left-16
                    -top-20
                    h-56
                    w-56
                    rounded-full
                    bg-[#84A4B1]/[0.07]
                    blur-[50px]
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    grid
                    gap-6
                    md:grid-cols-[1fr_auto]
                    md:items-end
                  "
                >
                  <div>
                    <div className="mb-3 flex items-center gap-2">
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
                          font-arabic
                          text-[9px]
                          text-[#84A4B1]
                        "
                      >
                        مسارك الحالي
                      </span>
                    </div>

                    <h4
                      className="
                        font-arabic
                        text-[20px]
                        font-bold
                        text-[#F3F3F1]
                        sm:text-[24px]
                      "
                    >
                      {DASHBOARD_DATA.currentPath.title}
                    </h4>

                    <p
                      className="
                        mt-2
                        max-w-[500px]
                        font-arabic
                        text-[10px]
                        leading-5
                        text-[#F3F3F1]/35
                        sm:text-[11px]
                      "
                    >
                      واصل التعلم من حيث توقفت، وأكمل
                      خطواتك نحو فهم أعمق للأسواق.
                    </p>
                  </div>

                  <div className="flex items-end gap-1">
                    <span
                      className="
                        text-[38px]
                        font-semibold
                        leading-none
                        tracking-[-0.05em]
                        text-[#F3F3F1]
                        sm:text-[46px]
                      "
                    >
                      {progress}
                    </span>

                    <span
                      className="
                        mb-1
                        text-[13px]
                        text-[#84A4B1]
                      "
                    >
                      %
                    </span>
                  </div>
                </div>

                <div className="relative z-10 mt-6">
                  <div
                    className="
                      h-[3px]
                      w-full
                      overflow-hidden
                      bg-white/[0.07]
                    "
                  >
                    <div
                      data-dash-progress
                      className="
                        h-full
                        origin-right
                        bg-[#84A4B1]
                      "
                      style={{
                        width: `${progress}%`,
                      }}
                    />
                  </div>

                  <div
                    className="
                      mt-2
                      flex
                      justify-between
                      text-[8px]
                      text-white/20
                    "
                  >
                    <span>البداية</span>
                    <span>إتمام المسار</span>
                  </div>
                </div>
              </div>

              {/* =============================
                  STATS
              ============================== */}

              <div
                className="
                  mb-4
                  grid
                  grid-cols-2
                  gap-3
                  md:grid-cols-3
                "
              >
                <div
                  data-dash-reveal
                  className="
                    border
                    border-white/[0.07]
                    bg-[#102039]/65
                    p-4
                    sm:p-5
                  "
                >
                  <span
                    className="
                      font-arabic
                      text-[9px]
                      text-white/25
                    "
                  >
                    التقدم
                  </span>

                  <div className="mt-3 flex items-end gap-1">
                    <strong
                      className="
                        text-[23px]
                        font-semibold
                        text-[#84A4B1]
                      "
                    >
                      {progress}
                    </strong>

                    <span className="mb-1 text-[9px] text-white/25">
                      %
                    </span>
                  </div>
                </div>

                <div
                  data-dash-reveal
                  className="
                    border
                    border-white/[0.07]
                    bg-[#102039]/65
                    p-4
                    sm:p-5
                  "
                >
                  <span
                    className="
                      font-arabic
                      text-[9px]
                      text-white/25
                    "
                  >
                    الدروس المتبقية
                  </span>

                  <div className="mt-3">
                    <strong
                      className="
                        font-arabic
                        text-[23px]
                        font-semibold
                        text-[#F3F3F1]
                      "
                    >
                      8
                    </strong>

                    <span
                      className="
                        mr-1
                        font-arabic
                        text-[9px]
                        text-white/25
                      "
                    >
                      دروس
                    </span>
                  </div>
                </div>

                <div
                  data-dash-reveal
                  className="
                    col-span-2
                    border
                    border-white/[0.07]
                    bg-[#102039]/65
                    p-4
                    sm:p-5
                    md:col-span-1
                  "
                >
                  <span
                    className="
                      font-arabic
                      text-[9px]
                      text-white/25
                    "
                  >
                    حالة المسار
                  </span>

                  <div className="mt-3 flex items-center gap-2">
                    <span
                      className="
                        h-[5px]
                        w-[5px]
                        rounded-full
                        bg-[#84A4B1]
                        shadow-[0_0_8px_rgba(132,164,177,.65)]
                      "
                    />

                    <strong
                      className="
                        font-arabic
                        text-[12px]
                        font-medium
                        text-[#F3F3F1]
                      "
                    >
                      قيد التقدم
                    </strong>
                  </div>
                </div>
              </div>

              {/* =============================
                  LESSONS
              ============================== */}

              <div
                data-dash-reveal
                className="
                  overflow-hidden
                  border
                  border-white/[0.07]
                  bg-[#102039]/65
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/[0.07]
                    px-4
                    py-4
                    sm:px-5
                  "
                >
                  <div>
                    <p
                      className="
                        font-arabic
                        text-[12px]
                        font-medium
                        text-[#F3F3F1]
                      "
                    >
                      أكمل التعلم
                    </p>

                    <p
                      className="
                        mt-1
                        font-arabic
                        text-[8px]
                        text-white/25
                      "
                    >
                      الدروس الأخيرة في مسارك
                    </p>
                  </div>

                  <span
                    className="
                      hidden
                      text-[8px]
                      tracking-[0.15em]
                      text-[#84A4B1]/55
                      sm:block
                    "
                  >
                    RECENT LESSONS
                  </span>
                </div>

                <div className="divide-y divide-white/[0.06]">
                  {DASHBOARD_DATA.recentLessons.map(
                    (lesson, index) => (
                      <button
                        type="button"
                        key={lesson.id}
                        className="
                          group
                          flex
                          w-full
                          items-center
                          gap-3
                          px-4
                          py-3.5
                          text-right
                          transition-colors
                          duration-300
                          hover:bg-white/[0.025]
                          sm:gap-4
                          sm:px-5
                          sm:py-4
                        "
                      >
                        <div
                          className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            border
                            border-white/[0.08]
                            text-[9px]
                            text-white/25
                            transition-colors
                            duration-300
                            group-hover:border-[#84A4B1]/25
                            group-hover:text-[#84A4B1]
                          "
                        >
                          0{index + 1}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p
                            className="
                              truncate
                              font-arabic
                              text-[11px]
                              font-medium
                              text-[#F3F3F1]/80
                              sm:text-[12px]
                            "
                          >
                            {lesson.title}
                          </p>

                          <p
                            className="
                              mt-1
                              font-arabic
                              text-[8px]
                              text-white/25
                            "
                          >
                            {lesson.durationMinutes} دقيقة
                          </p>
                        </div>

                        {lesson.isPreview && (
                          <span
                            className="
                              hidden
                              border
                              border-[#84A4B1]/20
                              px-2
                              py-1
                              font-arabic
                              text-[8px]
                              text-[#84A4B1]
                              sm:block
                            "
                          >
                            معاينة
                          </span>
                        )}

                        <span
                          className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/[0.07]
                            text-[12px]
                            text-white/25
                            transition-all
                            duration-300
                            group-hover:-translate-x-1
                            group-hover:border-[#84A4B1]/25
                            group-hover:text-[#84A4B1]
                          "
                        >
                          ←
                        </span>
                      </button>
                    ),
                  )}
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* =====================================
            BOTTOM CAPTION
        ====================================== */}

        <div
          dir="rtl"
          className="
            mx-auto
            mt-7
            flex
            max-w-[1160px]
            items-center
            justify-between
            gap-6
            border-t
            border-white/[0.06]
            pt-5
          "
        >
          <p
            className="
              font-arabic
              text-[9px]
              text-white/25
              sm:text-[10px]
            "
          >
            كل ما تحتاجه لمواصلة التعلم بوضوح.
          </p>

          <span
            className="
              hidden
              text-[8px]
              tracking-[0.18em]
              text-[#84A4B1]/35
              sm:block
            "
          >
            FNAR / 09
          </span>
        </div>
      </div>
    </section>
  );
}