import { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSignalField from './HeroSignalField';
import HeroCore from './HeroCore';
import HeroDesign3Environment from './HeroDesign3Environment';
import { HERO_INFO_FRAGMENTS } from '@/data/content';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import LearningPaths from '@/components/paths/LearningPaths';


gsap.registerPlugin(ScrollTrigger);

const FALLBACK = [
  'معلومات',
  'تحليلات',
  'توصيات',
  'آراء',
  'ضوضاء',
  'أخبار',
  'مؤشرات',
  'تناقضات',
  'مدارس مختلفة',
];

const LABELS = [
  { left: '7%', top: '21%', depth: 0.9, size: '15px' },
  { left: '18%', top: '34%', depth: 0.55, size: '12px' },
  { left: '5%', top: '53%', depth: 0.7, size: '13px' },
  { left: '27%', top: '68%', depth: 0.8, size: '14px' },
  { left: '45%', top: '17%', depth: 0.45, size: '11px' },
  { left: '57%', top: '72%', depth: 0.65, size: '12px' },
  { left: '73%', top: '29%', depth: 0.75, size: '13px' },
  { left: '80%', top: '58%', depth: 0.5, size: '11px' },
  { left: '36%', top: '82%', depth: 0.4, size: '11px' },
];

export default function HeroDesign3() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  const words = useMemo(() => {
    const source = HERO_INFO_FRAGMENTS?.length
      ? HERO_INFO_FRAGMENTS.map((x: any) => x.text)
      : FALLBACK;

    return LABELS.map(
      (_, i) => source[i % source.length] ?? FALLBACK[i % FALLBACK.length],
    );
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (reduced) {
      gsap.set(section.querySelectorAll('[data-hero-enter]'), {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        filter: 'blur(0px)',
      });
      gsap.set(section.querySelectorAll('[data-hero-label]'), {
        autoAlpha: 0.48,
        filter: 'blur(0px)',
      });
      gsap.set(section.querySelector('[data-signal-field]'), {
        autoAlpha: 1,
      });
      return;
    }

    let pointerCleanup: (() => void) | undefined;

    const ctx = gsap.context(() => {
      /*
       * Initial states
       * Keep these in sync with the opacity/translate classes in the JSX.
       */
      gsap.set('[data-hero-copy]', {
        autoAlpha: 0,
        y: 26,
        filter: 'blur(0px)',
      });

      gsap.set('[data-hero-label]', {
        autoAlpha: 0,
        filter: 'blur(5px)',
      });

      gsap.set('[data-signal-field]', {
        autoAlpha: 1,
      });

      gsap.set('[data-signal-link]', {
        strokeDasharray: 160,
        strokeDashoffset: 160,
      });

      gsap.set('[data-signal-node]', {
        autoAlpha: 0,
        scale: 0.45,
        transformOrigin: 'center',
      });

      gsap.set('[data-core]', {
        autoAlpha: 0,
        scale: 0.72,
        rotate: -7,
      });

      gsap.set('[data-core-mark]', {
        scale: 0.6,
        transformOrigin: 'center',
      });

      gsap.set('[data-resolution-copy]', {
        autoAlpha: 0,
        y: 24,
        filter: 'blur(7px)',
      });

      gsap.set('[data-hero-transition]', {
        autoAlpha: 0,
        visibility: 'hidden',
        clipPath: 'circle(0% at 42% 58%)',
      });

      /*
       * Intro
       * IMPORTANT: hero copy is explicitly revealed here.
       */
      const intro = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      intro
        .to(
          '[data-hero-label]',
          {
            autoAlpha: 0.48,
            filter: 'blur(0px)',
            duration: 1.1,
            stagger: 0.06,
          },
          0,
        )
        .to(
          '[data-signal-node]',
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.8,
            stagger: { each: 0.025, from: 'random' },
          },
          0.15,
        )
        .to(
          '[data-signal-link]',
          {
            strokeDashoffset: 0,
            duration: 1.3,
            stagger: 0.025,
            ease: 'power2.inOut',
          },
          0.3,
        )
        .to(
          '[data-core]',
          {
            autoAlpha: 1,
            scale: 1,
            rotate: 0,
            duration: 1.4,
          },
          0.45,
        )
        .to(
          '[data-hero-copy]',
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1,
            stagger: 0.09,
          },
          0.48,
        );

      // Ambient motion
      gsap.to('[data-core-rings]', {
        rotate: 360,
        transformOrigin: 'center',
        duration: 70,
        repeat: -1,
        ease: 'none',
      });

      gsap.to('[data-core-glow]', {
        scale: 1.12,
        opacity: 0.72,
        transformOrigin: 'center',
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('[data-signal-orbits]', {
        rotate: -360,
        transformOrigin: 'center',
        duration: 95,
        repeat: -1,
        ease: 'none',
      });

      section
        .querySelectorAll<HTMLElement>('[data-hero-label]')
        .forEach((el, i) => {
          gsap.to(el, {
            x: (i % 2 ? -1 : 1) * (6 + (i % 4)),
            y: i % 3 === 0 ? -7 : 6,
            duration: 5 + (i % 5),
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        });

      // Desktop pointer parallax
      if (window.matchMedia('(pointer: fine)').matches) {
        const field = section.querySelector<HTMLElement>('[data-signal-field]');
        const core = section.querySelector<HTMLElement>('[data-core]');
        const copy = section.querySelector<HTMLElement>('[data-copy-wrap]');

        const qFieldX = field
          ? gsap.quickTo(field, 'x', { duration: 1.2, ease: 'power2.out' })
          : null;
        const qFieldY = field
          ? gsap.quickTo(field, 'y', { duration: 1.2, ease: 'power2.out' })
          : null;
        const qCoreX = core
          ? gsap.quickTo(core, 'x', { duration: 1.4, ease: 'power2.out' })
          : null;
        const qCoreY = core
          ? gsap.quickTo(core, 'y', { duration: 1.4, ease: 'power2.out' })
          : null;
        const qCopyX = copy
          ? gsap.quickTo(copy, 'x', { duration: 1.6, ease: 'power2.out' })
          : null;

        const move = (e: PointerEvent) => {
          if (window.scrollY > section.offsetTop + 120) return;

          const r = section.getBoundingClientRect();
          const nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
          const ny = ((e.clientY - r.top) / r.height - 0.5) * 2;

          qFieldX?.(nx * -14);
          qFieldY?.(ny * -9);
          qCoreX?.(nx * 7);
          qCoreY?.(ny * 5);
          qCopyX?.(nx * 3);
        };

        const leave = () => {
          qFieldX?.(0);
          qFieldY?.(0);
          qCoreX?.(0);
          qCoreY?.(0);
          qCopyX?.(0);
        };

        section.addEventListener('pointermove', move);
        section.addEventListener('pointerleave', leave);

        pointerCleanup = () => {
          section.removeEventListener('pointermove', move);
          section.removeEventListener('pointerleave', leave);
        };
      }

      const desktop = window.matchMedia('(min-width: 768px)').matches;

      if (desktop) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=370%',
            pin: true,
            scrub: 1.45,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        /*
         * DESIGN 3 STORY
         * 0.00–0.24  Readable opening hero.
         * 0.24–0.46  Chaos breathes outward.
         * 0.46–0.69  Information organizes.
         * 0.69–0.84  Understanding.
         * 0.84–0.93  Resolution.
         * 0.93–1.00  Methodology handoff.
         */

        tl.to({}, { duration: 0.24 });

        // CHAOS
        tl.to(
          '[data-hero-copy]',
          {
            autoAlpha: 0,
            y: -24,
            filter: 'blur(5px)',
            duration: 0.16,
            ease: 'none',
          },
          0.24,
        )
          .to(
            '[data-scroll-cue]',
            {
              autoAlpha: 0,
              duration: 0.06,
              ease: 'none',
            },
            0.24,
          )
          .to(
            '[data-signal-field]',
            {
              scale: 1.075,
              xPercent: -2,
              autoAlpha: 0.92,
              duration: 0.18,
              ease: 'none',
            },
            0.25,
          )
          .to(
            '[data-information-layer]',
            {
              autoAlpha: 0.78,
              duration: 0.14,
              ease: 'none',
            },
            0.25,
          )

          // ORGANIZATION
          .to(
            '[data-signal-field]',
            {
              scale: 0.9,
              xPercent: 7,
              yPercent: 1,
              autoAlpha: 0.68,
              duration: 0.23,
              ease: 'none',
            },
            0.46,
          )
          .to(
            '[data-core]',
            {
              scale: 1.28,
              xPercent: 10,
              duration: 0.23,
              ease: 'none',
            },
            0.46,
          )
          .to(
            '[data-hero-label]',
            {
              autoAlpha: 0.12,
              filter: 'blur(3px)',
              duration: 0.2,
              stagger: { each: 0.014, from: 'random' },
              ease: 'none',
            },
            0.48,
          )

          // UNDERSTANDING
          .to(
            '[data-hero-label]',
            {
              autoAlpha: 0,
              duration: 0.1,
              ease: 'none',
            },
            0.67,
          )
          .to(
            '[data-information-layer]',
            {
              autoAlpha: 0,
              duration: 0.11,
              ease: 'none',
            },
            0.68,
          )
          .to(
            '[data-signal-field]',
            {
              autoAlpha: 0.22,
              scale: 0.82,
              xPercent: 10,
              duration: 0.15,
              ease: 'none',
            },
            0.68,
          )
          .to(
            '[data-core]',
            {
              scale: 1.5,
              xPercent: 18,
              duration: 0.16,
              ease: 'none',
            },
            0.68,
          )

          // RESOLUTION
          .set('[data-hero-label]', { autoAlpha: 0 }, 0.785)
          .set('[data-information-layer]', { autoAlpha: 0 }, 0.785)
          .set('[data-signal-field]', { autoAlpha: 0.22 }, 0.785)
          .fromTo(
            '[data-resolution-copy]',
            {
              autoAlpha: 0,
              y: 24,
              filter: 'blur(7px)',
            },
            {
              autoAlpha: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 0.11,
              ease: 'none',
            },
            0.79,
          )
          .to({}, { duration: 0.12 })

          // HANDOFF
          .to(
            '[data-hero-transition]',
            {
              autoAlpha: 1,
              visibility: 'visible',
              clipPath: 'circle(150% at 42% 58%)',
              duration: 0.085,
              ease: 'none',
            },
            0.915,
          )
          .to(
            '[data-resolution-copy]',
            {
              autoAlpha: 0,
              y: -14,
              duration: 0.055,
              ease: 'none',
            },
            0.925,
          )
          .to(
            '[data-core]',
            {
              autoAlpha: 0,
              scale: 1.66,
              duration: 0.065,
              ease: 'none',
            },
            0.925,
          )
          .to(
            '[data-signal-field]',
            {
              autoAlpha: 0,
              duration: 0.06,
              ease: 'none',
            },
            0.925,
          )
          .set(
            '[data-hero-label], [data-information-layer]',
            { autoAlpha: 0 },
            0.924,
          );
      } else {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.8,
            },
          })
          .to('[data-hero-copy]', { autoAlpha: 0, y: -30 }, 0)
          .to('[data-core]', { scale: 1.18 }, 0)
          .to(
            '[data-signal-field]',
            { autoAlpha: 0.28, scale: 1.04 },
            0,
          )
          .to('[data-information-layer]', { autoAlpha: 0 }, 0.48)
          .to('[data-hero-label]', { autoAlpha: 0 }, 0.48)
          .to(
            '[data-hero-transition]',
            {
              autoAlpha: 1,
              visibility: 'visible',
              clipPath: 'circle(150% at 42% 58%)',
            },
            0.76,
          );
      }

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, section);

    return () => {
      pointerCleanup?.();
      ctx.revert();
    };
  }, [reduced]);

  const scrollTo =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      document
        .querySelector(id)
        ?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
    };

  return (
    <section
      ref={sectionRef}
      id="hero"
      lang="ar"
      dir="rtl"
      className="relative isolate h-[100svh] min-h-[720px] w-full overflow-hidden bg-[#1D2C4F]"
    >
      {/* Static Design 3 environment */}
      <HeroDesign3Environment />

      {/* Information vocabulary */}
      <div
        data-information-layer
        className="pointer-events-none absolute inset-0 z-[4] hidden md:block"
      >
        {LABELS.map((p, i) => (
          <span
            key={i}
            data-hero-label
            data-hero-enter
            className="absolute font-arabic text-[#F3F3F1] opacity-0"
            style={{
              left: p.left,
              top: p.top,
              fontSize: p.size,
            }}
          >
            {words[i]}
          </span>
        ))}
      </div>

      {/* Animated network */}
      <div
        data-signal-field
        className="absolute left-[-7%] top-[12%] z-[6] hidden h-[74%] w-[64%] md:block"
        style={{ willChange: 'transform, opacity' }}
      >
        <HeroSignalField />
      </div>

      {/* Organizing core */}
      <div
        data-core
        data-hero-enter
        className="absolute left-[31%] top-1/2 z-[8] h-[min(52vw,590px)] w-[min(52vw,590px)] -translate-x-1/2 -translate-y-1/2 opacity-0 md:left-[36%]"
        style={{ willChange: 'transform, opacity' }}
      >
        <HeroCore />
      </div>

      {/* =====================================================
          RIGHT-SIDE HERO CONTENT
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 z-[24] flex items-center">
        <div className="mx-auto w-full max-w-[1500px] px-6 md:px-8 lg:px-12 xl:px-16">
          <div
            data-copy-wrap
            className="
              pointer-events-auto
              mx-auto
              mt-[32vh]
              max-w-[640px]
              text-center
              md:mx-0
              md:mr-0
              md:ml-auto
              md:mt-0
              md:w-[44%]
              md:text-right
            "
          >
            {/* Eyebrow */}
            <div
              data-hero-copy
              data-hero-enter
              className="
                mb-5
                flex
                translate-y-[26px]
                items-center
                justify-center
                gap-3
                opacity-0
                md:justify-start
              "
            >
              <span className="h-px w-9 bg-[#84A4B1]/60" />
              <span className="font-arabic text-[12px] font-medium tracking-[0.08em] text-[#F3F3F1]/55">
                من التشتيت إلى القرار
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-arabic font-bold leading-[0.98] tracking-[-0.035em]">
              <span
                data-hero-copy
                data-hero-enter
                className="
                  block
                  translate-y-[26px]
                  pb-[0.08em]
                  text-[clamp(3rem,10vw,4.7rem)]
                  text-[#F3F3F1]
                  opacity-0
                  md:text-[clamp(4rem,6.6vw,7.5rem)]
                "
              >
                من الغموض
              </span>

              <span
                data-hero-copy
                data-hero-enter
                className="
                  block
                  translate-y-[26px]
                  pb-[0.12em]
                  text-[clamp(3rem,10vw,4.7rem)]
                  text-[#84A4B1]
                  opacity-0
                  md:text-[clamp(4rem,6.6vw,7.5rem)]
                "
              >
                إلى الفهم
              </span>
            </h1>

            {/* Description */}
            <p
              data-hero-copy
              data-hero-enter
              className="
                mx-auto
                mt-5
                max-w-[560px]
                translate-y-[26px]
                font-arabic
                text-[14px]
                leading-[1.9]
                text-[#F3F3F1]/68
                opacity-0
                md:mx-0
                md:mr-0
                md:ml-auto
                md:mt-6
                md:text-[16px]
                lg:text-[17px]
              "
            >
              منهج متكامل لبناء الفهم، إدارة المخاطر، وصناعة القرار المستقل
              في الأسواق المالية.
            </p>

            {/* Actions */}
            <div
              data-hero-copy
              data-hero-enter
              className="
                mt-7
                flex
                translate-y-[26px]
                flex-wrap
                items-center
                justify-center
                gap-5
                opacity-0
                md:mt-9
                md:justify-start
                md:gap-6
              "
            >
              <a
                href="#paths"
                onClick={scrollTo('#paths')}
                className="
                  group
                  inline-flex
                  min-w-[158px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#F3F3F1]
                  px-7
                  py-3.5
                  text-[14px]
                  font-semibold
                  text-[#1D2C4F]
                  transition-all
                  duration-300
                  hover:bg-[#84A4B1]
                "
                data-cursor="hover"
              >
                <span>ابدأ مع فنر</span>
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
              </a>

              <a
                href="#paths"
                onClick={scrollTo('#paths')}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border-b
                  border-[#F3F3F1]/25
                  pb-1.5
                  text-[14px]
                  font-medium
                  text-[#F3F3F1]/72
                  transition-colors
                  duration-300
                  hover:border-[#84A4B1]
                  hover:text-[#84A4B1]
                "
                data-cursor="hover"
              >
                <span>استكشف المنهج</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-current text-[10px] transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-only resolution statement */}
      <div
        data-resolution-copy
        className="
          pointer-events-none
          absolute
          right-[7vw]
          top-1/2
          z-[18]
          hidden
          w-[38vw]
          max-w-[600px]
          -translate-y-1/2
          text-right
          opacity-0
          md:block
        "
      >
        <span className="text-[10px] tracking-[0.28em] text-[#84A4B1]">
          وضوح
        </span>
        <p className="mt-3 font-arabic text-[clamp(2.4rem,4.8vw,5rem)] font-bold leading-[1.08] text-[#F3F3F1]">
          حين تتضح الصورة.
        </p>
      </div>

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-[12]"
        style={{
          background:
            'linear-gradient(180deg,rgba(7,15,29,.28),transparent 25%,transparent 68%,rgba(7,15,29,.52)),linear-gradient(90deg,rgba(7,15,29,.2),transparent 28%,transparent 78%,rgba(7,15,29,.18))',
        }}
      />

      {/* Cream handoff to Methodology */}
      <div
        data-hero-transition
        className="pointer-events-none invisible absolute inset-0 z-[35] bg-[#F3F3F1] opacity-0"
        style={{ clipPath: 'circle(0% at 42% 58%)' }}
      />

      {/* Scroll cue */}
      <div
        data-scroll-cue
        className="pointer-events-none absolute bottom-5 left-1/2 z-[40] hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[9px] font-medium tracking-[0.28em] text-[#F3F3F1]/35">
          مرر
        </span>
        <div className="h-10 w-px bg-gradient-to-b from-[#84A4B1]/60 to-transparent" />
      </div>
    </section>
  );
}
