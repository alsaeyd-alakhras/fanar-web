import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { METHODOLOGY_STAGES } from '@/data/content';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

type Fragment = {
  text: string;
  x: number;
  y: number;
  size: string;
  opacity: number;
  blur?: boolean;
};

const FRAGMENTS: Fragment[] = [
  { text: 'معلومات', x: 12, y: 20, size: 'text-lg', opacity: 0.58 },
  { text: 'تحليلات', x: 28, y: 36, size: 'text-sm', opacity: 0.42 },
  { text: 'توصيات', x: 8, y: 54, size: 'text-base', opacity: 0.5 },
  { text: 'آراء', x: 76, y: 23, size: 'text-sm', opacity: 0.46 },
  { text: 'ضوضاء', x: 68, y: 45, size: 'text-xl', opacity: 0.58 },
  { text: 'أخبار', x: 87, y: 61, size: 'text-sm', opacity: 0.4 },
  { text: 'مؤشرات', x: 23, y: 71, size: 'text-base', opacity: 0.44 },
  { text: 'تناقضات', x: 72, y: 76, size: 'text-sm', opacity: 0.38 },
  { text: 'مدارس مختلفة', x: 43, y: 19, size: 'text-sm', opacity: 0.36 },
  { text: 'قراءات', x: 52, y: 69, size: 'text-base', opacity: 0.42 },
  { text: 'توقعات', x: 91, y: 34, size: 'text-sm', opacity: 0.34 },
  { text: 'بيانات', x: 36, y: 58, size: 'text-lg', opacity: 0.5 },
];

const STAGE_COPY = [
  {
    title: 'التشتيت',
    description: 'معلومات كثيرة. اتجاهات متضاربة. صورة غير مكتملة.',
  },
  {
    title: 'الربط',
    description: 'ربط المفاهيم والأدوات لبناء صورة أكثر وضوحاً.',
  },
  {
    title: 'التحليل',
    description: 'قراءة العلاقات بمنهج نقدي، لا بردّة فعل.',
  },
  {
    title: 'الفهم',
    description: 'حين تتضح الصورة، يصبح التعقيد أبسط.',
  },
  {
    title: 'القرار',
    description: 'قرار مستقل. واعٍ. ومنضبط.',
  },
];

const clamp = (value: number, min = 0, max = 1) =>
  Math.max(min, Math.min(max, value));

export default function Methodology() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduced = useReducedMotion();

  /*
   * ==========================================================
   * AMBIENT CANVAS
   *
   * The canvas is intentionally NOT responsible for the story.
   * It only supplies atmosphere:
   *
   * residual particles
   * subtle connections
   * movement / texture
   *
   * The cinematic narrative itself is DOM + SVG + GSAP.
   * ==========================================================
   */

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;

    if (!section || !canvas) return;

    const context = canvas.getContext('2d');

    if (!context) return;

    type Particle = {
      x: number;
      y: number;
      originX: number;
      originY: number;
      phase: number;
      speed: number;
      radius: number;
    };

    let width = 0;
    let height = 0;
    let raf = 0;
    let particles: Particle[] = [];
    let storyProgress = reduced ? 1 : 0;
    let displayProgress = storyProgress;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const createParticles = () => {
      const count = width < 768 ? 36 : 72;

      particles = Array.from({ length: count }, () => {
        const x = Math.random() * width;
        const y =
          height * 0.16 +
          Math.random() * height * 0.68;

        return {
          x,
          y,
          originX: x,
          originY: y,
          phase: Math.random() * Math.PI * 2,
          speed: 0.4 + Math.random() * 0.8,
          radius: 0.6 + Math.random() * 1.4,
        };
      });
    };

    const resize = () => {
      const rect = section.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);

      displayProgress +=
        (storyProgress - displayProgress) * 0.07;

      const centerX = width / 2;
      const centerY = height * 0.5;

      const gather = clamp(
        (displayProgress - 0.12) / 0.55,
      );

      const disappear = clamp(
        (displayProgress - 0.68) / 0.25,
      );

      const positions = particles.map((particle) => {
        const driftStrength = (1 - gather) * 13;

        const driftX =
          Math.sin(
            time * 0.0004 * particle.speed +
              particle.phase,
          ) * driftStrength;

        const driftY =
          Math.cos(
            time * 0.00033 * particle.speed +
              particle.phase,
          ) *
          driftStrength *
          0.7;

        const targetRadius =
          Math.min(width, height) *
          (0.22 - gather * 0.12);

        const angle =
          particle.phase +
          particle.originX * 0.003;

        const targetX =
          centerX + Math.cos(angle) * targetRadius;

        const targetY =
          centerY +
          Math.sin(angle) *
            targetRadius *
            0.58;

        return {
          x:
            particle.originX +
            (targetX - particle.originX) * gather +
            driftX,
          y:
            particle.originY +
            (targetY - particle.originY) * gather +
            driftY,
        };
      });

      /*
       * Network connections appear while the information
       * is being organized, then disappear again as the
       * experience reaches clarity.
       */

      const networkIn = clamp(
        (displayProgress - 0.16) / 0.22,
      );

      const networkOut =
        1 -
        clamp(
          (displayProgress - 0.6) / 0.18,
        );

      const networkAlpha = networkIn * networkOut;

      if (networkAlpha > 0.01) {
        const maxDistance = width < 768 ? 72 : 105;

        for (let i = 0; i < positions.length; i++) {
          for (
            let j = i + 1;
            j < Math.min(i + 10, positions.length);
            j++
          ) {
            const a = positions[i];
            const b = positions[j];

            const dx = a.x - b.x;
            const dy = a.y - b.y;

            const distance = Math.sqrt(
              dx * dx + dy * dy,
            );

            if (distance > maxDistance) continue;

            const alpha =
              (1 - distance / maxDistance) *
              networkAlpha *
              0.22;

            context.strokeStyle =
              `rgba(132,164,177,${alpha})`;

            context.lineWidth = 0.7;

            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      positions.forEach((position, index) => {
        const particle = particles[index];

        const alpha =
          (0.18 + gather * 0.3) *
          (1 - disappear * 0.9);

        context.fillStyle =
          `rgba(29,44,79,${alpha})`;

        context.beginPath();

        context.arc(
          position.x,
          position.y,
          particle.radius,
          0,
          Math.PI * 2,
        );

        context.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    resize();

    window.addEventListener('resize', resize);

    const progressTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',

      onUpdate: (self) => {
        storyProgress = self.progress;
      },
    });

    if (!reduced) {
      raf = requestAnimationFrame(draw);
    } else {
      draw(0);
      cancelAnimationFrame(raf);
    }

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
      progressTrigger.kill();
    };
  }, [reduced]);

  /*
   * ==========================================================
   * MASTER CINEMATIC TIMELINE
   * ==========================================================
   */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || reduced) return;

    const ctx = gsap.context(() => {
      const fragments =
        gsap.utils.toArray<HTMLElement>(
          '[data-chaos-fragment]',
          section,
        );

      const scenes =
        gsap.utils.toArray<HTMLElement>(
          '[data-method-scene]',
          section,
        );

      const progressItems =
        gsap.utils.toArray<HTMLElement>(
          '[data-progress-item]',
          section,
        );

      const networkNodes =
        gsap.utils.toArray<HTMLElement>(
          '[data-network-node]',
          section,
        );

      /*
       * Initial state
       */

      gsap.set(scenes, {
        autoAlpha: 0,
      });

      gsap.set(scenes[0], {
        autoAlpha: 1,
      });

      gsap.set('[data-method-eyebrow]', {
        autoAlpha: 0,
        y: -12,
      });

      gsap.set('[data-method-final]', {
        autoAlpha: 0,
        y: 30,
      });

      gsap.set('[data-analysis-grid]', {
        autoAlpha: 0,
        scale: 1.08,
      });

      gsap.set('[data-understanding-ring]', {
  autoAlpha: 0,
  scale: 1.35,
  rotate: -4,
});

gsap.set('[data-understanding-inner]', {
  scale: 0.72,
  transformOrigin: 'center',
});

gsap.set('[data-understanding-axis]', {
  scale: 0,
  transformOrigin: 'center',
});

gsap.set('[data-understanding-tick]', {
  autoAlpha: 0,
});

gsap.set('[data-understanding-glow]', {
  autoAlpha: 0,
  scale: 0.6,
});

gsap.set('[data-decision-mark]', {
  autoAlpha: 0,
});

gsap.set('[data-decision-path]', {
  strokeDasharray: 500,
  strokeDashoffset: 500,
});

gsap.set('[data-decision-origins]', {
  autoAlpha: 0,
});

gsap.set('[data-decision-node]', {
  autoAlpha: 0,
  scale: 0.4,
  transformOrigin: '450px 270px',
});

gsap.set('[data-decision-resolved-path]', {
  strokeDasharray: 240,
  strokeDashoffset: 240,
});

gsap.set('[data-decision-destination]', {
  autoAlpha: 0,
  scale: 0.4,
  transformOrigin: '450px 505px',
});

gsap.set('[data-decision-glow]', {
  autoAlpha: 0,
  scale: 0.6,
  transformOrigin: '450px 270px',
});

      gsap.set(networkNodes, {
        scale: 0,
        transformOrigin: 'center',
      });

      gsap.set('[data-network-line]', {
        strokeDasharray: 500,
        strokeDashoffset: 500,
      });

      gsap.set('[data-progress-fill]', {
        scaleX: 0,
        transformOrigin: 'right center',
      });

      progressItems.forEach((item, index) => {
        gsap.set(item, {
          opacity: index === 0 ? 1 : 0.35,
        });
      });

      /*
       * Random initial displacement makes the first
       * chapter genuinely unstable.
       */

      fragments.forEach((fragment, index) => {
        gsap.set(fragment, {
          x: gsap.utils.random(-45, 45),
          y: gsap.utils.random(-35, 35),
          rotate: gsap.utils.random(-4, 4),
          filter:
            index % 4 === 0
              ? 'blur(2px)'
              : 'blur(0px)',
        });
      });

      const tl = gsap.timeline({
        defaults: {
          ease: 'none',
        },

        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.35,
        },
      });

      /*
       * ----------------------------------------------------------
       * INTRO / CHAOS
       * 0 → 20%
       * ----------------------------------------------------------
       */

      tl.to(
        '[data-method-eyebrow]',
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.05,
          ease: 'power2.out',
        },
        0,
      );

      tl.fromTo(
        '[data-scene-0] [data-scene-copy]',
        {
          y: 28,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.07,
          ease: 'power3.out',
        },
        0.02,
      );

      tl.to(
        fragments,
        {
          x: () => gsap.utils.random(-80, 80),
          y: () => gsap.utils.random(-50, 50),
          rotate: () => gsap.utils.random(-5, 5),
          duration: 0.14,
          stagger: 0.001,
        },
        0.02,
      );

      /*
       * ----------------------------------------------------------
       * CHAOS → CONNECTION
       * 20 → 40%
       * ----------------------------------------------------------
       */

      tl.to(
        '[data-scene-0]',
        {
          autoAlpha: 0,
          scale: 0.97,
          duration: 0.055,
        },
        0.18,
      );

      tl.to(
        fragments,
        {
          x: 0,
          y: 0,
          rotate: 0,
          autoAlpha: 0.12,
          filter: 'blur(0px)',
          duration: 0.1,
          stagger: 0.002,
          ease: 'power2.inOut',
        },
        0.18,
      );

      tl.to(
        '[data-scene-1]',
        {
          autoAlpha: 1,
          duration: 0.04,
        },
        0.22,
      );

      tl.fromTo(
        '[data-scene-1] [data-scene-copy]',
        {
          y: 24,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.06,
          ease: 'power3.out',
        },
        0.23,
      );

      tl.to(
        networkNodes,
        {
          scale: 1,
          duration: 0.07,
          stagger: 0.008,
          ease: 'back.out(1.7)',
        },
        0.24,
      );

      tl.to(
        '[data-network-line]',
        {
          strokeDashoffset: 0,
          duration: 0.12,
          stagger: 0.008,
          ease: 'power2.inOut',
        },
        0.26,
      );

      /*
       * ----------------------------------------------------------
       * CONNECTION → ANALYSIS
       * 40 → 60%
       * ----------------------------------------------------------
       */

      tl.to(
        '[data-scene-1]',
        {
          autoAlpha: 0,
          scale: 0.96,
          duration: 0.05,
        },
        0.39,
      );

      tl.to(
        '[data-scene-2]',
        {
          autoAlpha: 1,
          duration: 0.04,
        },
        0.42,
      );

      tl.fromTo(
        '[data-scene-2] [data-scene-copy]',
        {
          y: 24,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.06,
          ease: 'power3.out',
        },
        0.43,
      );

      tl.to(
        '[data-analysis-grid]',
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.09,
          ease: 'power2.out',
        },
        0.43,
      );

      tl.to(
        '[data-analysis-line]',
        {
          strokeDashoffset: 0,
          duration: 0.12,
          stagger: 0.01,
          ease: 'power2.inOut',
        },
        0.46,
      );

      /*
       * ----------------------------------------------------------
       * ANALYSIS → UNDERSTANDING
       * 60 → 80%
       * ----------------------------------------------------------
       */

      tl.to(
        '[data-scene-2]',
        {
          autoAlpha: 0,
          scale: 0.94,
          duration: 0.055,
        },
        0.59,
      );

      tl.to(
        '[data-scene-3]',
        {
          autoAlpha: 1,
          duration: 0.04,
        },
        0.62,
      );

      tl.fromTo(
        '[data-scene-3] [data-scene-copy]',
        {
          y: 24,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.06,
          ease: 'power3.out',
        },
        0.63,
      );

      tl.to(
        '[data-understanding-ring]',
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.11,
          ease: 'power3.inOut',
        },
        0.62,
      );

      /*
       * ----------------------------------------------------------
       * UNDERSTANDING → DECISION
       * 80 → 94%
       * ----------------------------------------------------------
       */

      /*
 * ==========================================================
 * UNDERSTANDING → DECISION
 * ==========================================================
 *
 * The final chapter deliberately receives more timeline space.
 * We are no longer squeezing the entire narrative into 0 → 1.
 *
 * This gives the resolved decision a genuine cinematic hold.
 */

// ----------------------------------------------------------
// 1. UNDERSTANDING LEAVES
// ----------------------------------------------------------

tl.to(
  '[data-scene-3]',
  {
    autoAlpha: 0,
    scale: 0.96,
    duration: 0.06,
    ease: 'power2.inOut',
  },
  0.76,
);


// ----------------------------------------------------------
// 2. DECISION SCENE ENTERS
// ----------------------------------------------------------

tl.to(
  '[data-scene-4]',
  {
    autoAlpha: 1,
    duration: 0.05,
  },
  0.79,
);

tl.fromTo(
  '[data-scene-4] [data-scene-copy]',
  {
    y: 22,
    autoAlpha: 0,
  },
  {
    y: 0,
    autoAlpha: 1,
    duration: 0.07,
    ease: 'power3.out',
  },
  0.80,
);


// ----------------------------------------------------------
// 3. REVEAL DECISION FIELD
// ----------------------------------------------------------

tl.to(
  '[data-decision-mark]',
  {
    autoAlpha: 1,
    duration: 0.035,
  },
  0.79,
);

tl.to(
  '[data-decision-origins]',
  {
    autoAlpha: 1,
    duration: 0.05,
    ease: 'power2.out',
  },
  0.80,
);


// ----------------------------------------------------------
// 4. POSSIBILITIES CONVERGE
//
// Let this breathe.
// This is the visual explanation of "decision".
// ----------------------------------------------------------

tl.to(
  '[data-decision-path]',
  {
    strokeDashoffset: 0,

    duration: 0.14,

    stagger: {
      each: 0.012,
      from: 'edges',
    },

    ease: 'power2.inOut',
  },
  0.82,
);


// ----------------------------------------------------------
// 5. CENTRAL DECISION RESOLVES
// ----------------------------------------------------------

tl.to(
  '[data-decision-node]',
  {
    autoAlpha: 1,
    scale: 1,
    duration: 0.08,
    ease: 'back.out(1.35)',
  },
  0.90,
);

tl.to(
  '[data-decision-glow]',
  {
    autoAlpha: 1,
    scale: 1,
    duration: 0.09,
    ease: 'power2.out',
  },
  0.90,
);


// ----------------------------------------------------------
// 6. OLD POSSIBILITIES BECOME SECONDARY
// ----------------------------------------------------------

tl.to(
  '[data-decision-path]',
  {
    opacity: 0.12,
    duration: 0.07,
    ease: 'power2.out',
  },
  0.96,
);

tl.to(
  '[data-decision-origins]',
  {
    autoAlpha: 0.12,
    duration: 0.07,
  },
  0.96,
);


// ----------------------------------------------------------
// 7. ONE DIRECTION EMERGES
//
// Give the vertical path enough time to actually be perceived.
// ----------------------------------------------------------

tl.to(
  '[data-decision-resolved-path]',
  {
    strokeDashoffset: 0,
    duration: 0.13,
    ease: 'power2.inOut',
  },
  0.98,
);


// ----------------------------------------------------------
// 8. DESTINATION LANDS
// ----------------------------------------------------------

tl.to(
  '[data-decision-destination]',
  {
    autoAlpha: 1,
    scale: 1,
    duration: 0.07,
    ease: 'back.out(1.5)',
  },
  1.09,
);


// ----------------------------------------------------------
// 9. HOLD THE COMPLETED DECISION
//
// THIS IS THE IMPORTANT FIX.
//
// There is intentionally no visual change here.
//
// The user scrolls while the completed decision remains
// completely visible.
//
// Do not shorten this until we test it.
// ----------------------------------------------------------

tl.to(
  {},
  {
    duration: 0.22,
  },
  1.16,
);


// ----------------------------------------------------------
// 10. EXIT DECISION
//
// Only after the hold do we allow the composition to leave.
// ----------------------------------------------------------

tl.to(
  '[data-scene-4]',
  {
    autoAlpha: 0,
    scale: 0.97,
    duration: 0.08,
    ease: 'power2.inOut',
  },
  1.38,
);

tl.to(
  '[data-method-visual]',
  {
    scale: 0.9,
    autoAlpha: 0.16,
    duration: 0.08,
    ease: 'power2.inOut',
  },
  1.38,
);


// ----------------------------------------------------------
// 11. FINAL THESIS
//
// Now — and only now — reveal the conclusion.
// ----------------------------------------------------------

tl.to(
  '[data-method-final]',
  {
    autoAlpha: 1,
    y: 0,
    duration: 0.10,
    ease: 'power3.out',
  },
  1.45,
);

      /*
       * Progress system
       */

      tl.to(
        '[data-progress-fill]',
        {
          scaleX: 1,
          duration: 1,
        },
        0,
      );

      const stageTimes = [0, 0.22, 0.42, 0.62, 0.79];

      progressItems.forEach((item, index) => {
        tl.to(
          item,
          {
            opacity: 1,
            duration: 0.025,
          },
          stageTimes[index],
        );

        if (index > 0) {
          tl.to(
            progressItems[index - 1],
            {
              opacity: 0.38,
              duration: 0.025,
            },
            stageTimes[index],
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  /*
   * ==========================================================
   * REDUCED MOTION
   * ==========================================================
   */

  useEffect(() => {
    if (!reduced || !sectionRef.current) return;

    const section = sectionRef.current;

    gsap.set(
      section.querySelectorAll(
        '[data-method-scene]',
      ),
      { display: 'none' },
    );

    gsap.set(
      section.querySelector('[data-method-final]'),
      {
        autoAlpha: 1,
        y: 0,
      },
    );
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="methodology"
      dir="rtl"
      className="
        relative
        h-[600svh]
        bg-cream-100
      "
    >
      {/* =====================================================
          STICKY CINEMATIC VIEWPORT
      ====================================================== */}

      <div
        className="
          sticky
          top-0
          h-[100svh]
          overflow-hidden
          bg-cream-100
        "
      >
        {/* ambient canvas */}

        <canvas
          ref={canvasRef}
          className="
            absolute
            inset-0
            w-full
            h-full
            pointer-events-none
            opacity-80
          "
          aria-hidden="true"
        />

        {/* inherited gateway glow */}

        <div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-[-24rem]
            -translate-x-1/2
            w-[52rem]
            h-[52rem]
            rounded-full
            bg-turquoise-400/10
            blur-[140px]
            pointer-events-none
          "
        />

        {/* technical background grid */}

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            opacity-[0.035]
            pointer-events-none
            [background-image:linear-gradient(rgba(29,44,79,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(29,44,79,0.8)_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />

        {/* ===================================================
            EDITORIAL LABEL
        ==================================================== */}

        <div
          className="
            absolute
            z-30
            top-8
            lg:top-10
            right-6
            lg:right-10
            flex
            items-center
            gap-4
          "
          data-method-eyebrow
        >
          <span
            className="
              text-[10px]
              lg:text-xs
              tracking-[0.28em]
              text-navy-700/45
            "
          >
            02
          </span>

          <span className="w-10 h-px bg-navy-700/20" />

          <span
            className="
              text-xs
              lg:text-sm
              font-medium
              text-navy-700/70
            "
          >
            الكشف المنهجي
          </span>
        </div>

        {/* ===================================================
            MAIN VISUAL WORLD
        ==================================================== */}

        <div
          className="
            absolute
            inset-0
            z-10
            flex
            items-center
            justify-center
          "
          data-method-visual
        >
          {/* -----------------------------------------------
              CHAOS FRAGMENTS
          ------------------------------------------------ */}

          <div
            aria-hidden="true"
            className="
              absolute
              inset-[8%]
              lg:inset-[6%]
              pointer-events-none
            "
          >
            {FRAGMENTS.map((fragment, index) => (
              <span
                key={`${fragment.text}-${index}`}
                data-chaos-fragment
                className={`
                  absolute
                  ${fragment.size}
                  text-navy-700
                  whitespace-nowrap
                  will-change-transform
                `}
                style={{
                  left: `${fragment.x}%`,
                  top: `${fragment.y}%`,
                  opacity: fragment.opacity,
                }}
              >
                {fragment.text}
              </span>
            ))}
          </div>

          {/* -----------------------------------------------
              SCENE 01 — CHAOS
          ------------------------------------------------ */}

          <div
            data-method-scene
            data-scene-0
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              pointer-events-none
            "
          >
            <div
              data-scene-copy
              className="
                text-center
                px-6
                max-w-3xl
              "
            >
              <span className="text-xs tracking-[0.25em] text-turquoise-600">
                01
              </span>

              <h2
                className="
                  mt-4
                  text-[clamp(3.8rem,9vw,8.5rem)]
                  leading-[0.95]
                  font-bold
                  text-navy-700
                "
              >
                التشتيت
              </h2>

              <p
                className="
                  mt-6
                  text-base
                  lg:text-xl
                  text-navy-500
                  max-w-xl
                  mx-auto
                  leading-relaxed
                "
              >
                {STAGE_COPY[0].description}
              </p>
            </div>
          </div>

          {/* -----------------------------------------------
              SCENE 02 — CONNECTION
          ------------------------------------------------ */}

          <div
            data-method-scene
            data-scene-1
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              pointer-events-none
            "
          >
            <svg
              viewBox="0 0 800 500"
              className="
                absolute
                w-[min(86vw,900px)]
                h-auto
                overflow-visible
              "
              fill="none"
              aria-hidden="true"
            >
              <g
                stroke="#84A4B1"
                strokeWidth="1.2"
                strokeOpacity="0.65"
              >
                <path
                  data-network-line
                  d="M120 170 L315 245"
                />

                <path
                  data-network-line
                  d="M170 355 L315 245"
                />

                <path
                  data-network-line
                  d="M315 245 L485 155"
                />

                <path
                  data-network-line
                  d="M315 245 L520 335"
                />

                <path
                  data-network-line
                  d="M485 155 L665 235"
                />

                <path
                  data-network-line
                  d="M520 335 L665 235"
                />
              </g>

              {[
                [120, 170],
                [170, 355],
                [315, 245],
                [485, 155],
                [520, 335],
                [665, 235],
              ].map(([cx, cy], index) => (
                <g
                  key={index}
                  data-network-node
                >
                  <circle
                    cx={cx}
                    cy={cy}
                    r="8"
                    fill="#F3F3F1"
                    stroke="#1D2C4F"
                    strokeOpacity="0.5"
                  />

                  <circle
                    cx={cx}
                    cy={cy}
                    r="18"
                    stroke="#84A4B1"
                    strokeOpacity="0.18"
                  />
                </g>
              ))}
            </svg>

            <div
              data-scene-copy
              className="
                relative
                z-10
                text-center
                px-6
                max-w-2xl
                bg-transparent
                py-8
                lg:py-10
              "
            >
              <span className="text-xs tracking-[0.25em] text-turquoise-600">
                02
              </span>

              <h2
                className="
                  mt-3
                  text-[clamp(3.5rem,8vw,7.5rem)]
                  leading-none
                  font-bold
                  text-navy-700
                "
              >
                الربط
              </h2>

              <p className="mt-5 text-base lg:text-lg text-navy-500 leading-relaxed">
                {STAGE_COPY[1].description}
              </p>
            </div>
          </div>

          {/* -----------------------------------------------
              SCENE 03 — ANALYSIS
          ------------------------------------------------ */}

          <div
            data-method-scene
            data-scene-2
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              pointer-events-none
            "
          >
            <svg
              data-analysis-grid
              viewBox="0 0 800 500"
              className="
                absolute
                w-[min(88vw,920px)]
                h-auto
              "
              fill="none"
              aria-hidden="true"
            >
              <g
                stroke="#1D2C4F"
                strokeOpacity="0.08"
                strokeWidth="1"
              >
                {Array.from({ length: 9 }).map(
                  (_, index) => (
                    <line
                      key={`v-${index}`}
                      x1={80 + index * 80}
                      y1="70"
                      x2={80 + index * 80}
                      y2="430"
                    />
                  ),
                )}

                {Array.from({ length: 6 }).map(
                  (_, index) => (
                    <line
                      key={`h-${index}`}
                      x1="80"
                      y1={70 + index * 72}
                      x2="720"
                      y2={70 + index * 72}
                    />
                  ),
                )}
              </g>

              <g
                stroke="#84A4B1"
                strokeWidth="1.4"
                strokeOpacity="0.72"
              >
                <path
                  data-analysis-line
                  strokeDasharray="600"
                  strokeDashoffset="600"
                  d="M120 350 L230 270 L330 300 L430 180 L540 225 L680 125"
                />

                <path
                  data-analysis-line
                  strokeDasharray="600"
                  strokeDashoffset="600"
                  d="M120 385 L245 350 L365 365 L490 285 L680 310"
                  strokeOpacity="0.38"
                />
              </g>

              <g fill="#1D2C4F">
                <circle cx="120" cy="350" r="4" />
                <circle cx="230" cy="270" r="4" />
                <circle cx="330" cy="300" r="4" />
                <circle cx="430" cy="180" r="4" />
                <circle cx="540" cy="225" r="4" />
                <circle cx="680" cy="125" r="4" />
              </g>
            </svg>

            <div
              data-scene-copy
              className="
                relative
                z-10
                text-center
                px-8
                py-9
                max-w-2xl
                bg-transparent
              "
            >
              <span className="text-xs tracking-[0.25em] text-turquoise-600">
                03
              </span>

              <h2
                className="
                  mt-3
                  text-[clamp(3.5rem,8vw,7.5rem)]
                  leading-none
                  font-bold
                  text-navy-700
                "
              >
                التحليل
              </h2>

              <p className="mt-5 text-base lg:text-lg text-navy-500 leading-relaxed">
                {STAGE_COPY[2].description}
              </p>
            </div>
          </div>

          {/* -----------------------------------------------
              SCENE 04 — UNDERSTANDING
          ------------------------------------------------ */}

          <div
            data-method-scene
            data-scene-3
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              pointer-events-none
            "
          >
            {/* CLARITY / FOCUS SYSTEM */}
          
            <div
              data-understanding-ring
              className="
                absolute
                left-1/2
                top-1/2
                w-[min(72vw,560px)]
                aspect-square
                -translate-x-1/2
                -translate-y-1/2
              "
              aria-hidden="true"
            >
              {/* atmospheric glow */}
              <div
                data-understanding-glow
                className="
                  absolute
                  inset-[18%]
                  rounded-full
                  bg-turquoise-400/[0.08]
                  blur-[55px]
                "
              />
          
              {/* outer precision ring */}
              <div
                data-understanding-outer
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-turquoise-400/35
                "
              />
          
              {/* second orbit */}
              <div
                data-understanding-inner
                className="
                  absolute
                  inset-[18%]
                  rounded-full
                  border
                  border-navy-700/[0.10]
                "
              />
          
              {/* horizontal focus axis */}
              <div
                data-understanding-axis
                className="
                  absolute
                  left-[14%]
                  right-[14%]
                  top-1/2
                  h-px
                  -translate-y-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-turquoise-400/30
                  to-transparent
                "
              />
          
              {/* vertical focus axis */}
              <div
                data-understanding-axis
                className="
                  absolute
                  top-[14%]
                  bottom-[14%]
                  left-1/2
                  w-px
                  -translate-x-1/2
                  bg-gradient-to-b
                  from-transparent
                  via-turquoise-400/25
                  to-transparent
                "
              />
          
              {/* four tiny registration marks */}
              <div
                data-understanding-tick
                className="
                  absolute
                  top-[17%]
                  left-1/2
                  -translate-x-1/2
                  w-px
                  h-5
                  bg-turquoise-600/45
                "
              />
          
              <div
                data-understanding-tick
                className="
                  absolute
                  bottom-[17%]
                  left-1/2
                  -translate-x-1/2
                  w-px
                  h-5
                  bg-turquoise-600/45
                "
              />
          
              <div
                data-understanding-tick
                className="
                  absolute
                  left-[17%]
                  top-1/2
                  -translate-y-1/2
                  h-px
                  w-5
                  bg-turquoise-600/45
                "
              />
          
              <div
                data-understanding-tick
                className="
                  absolute
                  right-[17%]
                  top-1/2
                  -translate-y-1/2
                  h-px
                  w-5
                  bg-turquoise-600/45
                "
              />
          
              {/*
                IMPORTANT:
                There is deliberately NO solid center dot.
          
                The center stays empty so nothing can interfere
                visually with the Arabic typography.
              */}
            </div>
          
            {/* COPY */}
          
            <div
              data-scene-copy
              className="
                relative
                z-10
                text-center
                px-6
                max-w-2xl
              "
            >
              <span
                className="
                  text-xs
                  tracking-[0.25em]
                  text-turquoise-600
                "
              >
                04
              </span>
          
              <h2
                data-understanding-title
                className="
                  mt-3
                  text-[clamp(3.5rem,8vw,7.5rem)]
                  leading-none
                  font-bold
                  text-navy-700
                "
              >
                الفهم
              </h2>
          
              <p
                className="
                  mt-5
                  text-base
                  lg:text-lg
                  text-navy-500
                  leading-relaxed
                "
              >
                {STAGE_COPY[3].description}
              </p>
            </div>
          </div>

          {/* -----------------------------------------------
              SCENE 05 — DECISION
          ------------------------------------------------ */}

          <div
            data-method-scene
            data-scene-4
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              pointer-events-none
            "
          >
            {/* DECISION FIELD */}
          
            <svg
              data-decision-mark
              viewBox="0 0 900 620"
              className="
                absolute
                left-1/2
                top-1/2
                w-[min(92vw,1000px)]
                h-auto
                -translate-x-1/2
                -translate-y-1/2
                overflow-visible
              "
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <radialGradient
                  id="decision-glow"
                  cx="50%"
                  cy="50%"
                  r="50%"
                >
                  <stop
                    offset="0%"
                    stopColor="#84A4B1"
                    stopOpacity="0.22"
                  />
          
                  <stop
                    offset="100%"
                    stopColor="#84A4B1"
                    stopOpacity="0"
                  />
                </radialGradient>
              </defs>
          
              {/* quiet destination glow */}
              <circle
                data-decision-glow
                cx="450"
                cy="270"
                r="155"
                fill="url(#decision-glow)"
              />
          
              {/* possibilities approaching the decision */}
          
              <g
                stroke="#84A4B1"
                strokeWidth="1.2"
                strokeLinecap="round"
              >
                <path
                  data-decision-path
                  d="M100 105 C235 115 320 155 450 270"
                  strokeOpacity="0.24"
                />
          
                <path
                  data-decision-path
                  d="M80 205 C220 205 325 225 450 270"
                  strokeOpacity="0.38"
                />
          
                <path
                  data-decision-path
                  d="M105 365 C245 340 335 305 450 270"
                  strokeOpacity="0.24"
                />
          
                <path
                  data-decision-path
                  d="M800 105 C665 115 580 155 450 270"
                  strokeOpacity="0.24"
                />
          
                <path
                  data-decision-path
                  d="M820 205 C680 205 575 225 450 270"
                  strokeOpacity="0.38"
                />
          
                <path
                  data-decision-path
                  d="M795 365 C655 340 565 305 450 270"
                  strokeOpacity="0.24"
                />
              </g>
          
              {/* small origin points */}
          
              <g
                data-decision-origins
                fill="#84A4B1"
                fillOpacity="0.45"
              >
                <circle cx="100" cy="105" r="3" />
                <circle cx="80" cy="205" r="3" />
                <circle cx="105" cy="365" r="3" />
          
                <circle cx="800" cy="105" r="3" />
                <circle cx="820" cy="205" r="3" />
                <circle cx="795" cy="365" r="3" />
              </g>
          
              {/* resolved node */}
          
              <g data-decision-node>
                <circle
                  cx="450"
                  cy="270"
                  r="38"
                  stroke="#84A4B1"
                  strokeOpacity="0.18"
                />
          
                <circle
                  cx="450"
                  cy="270"
                  r="17"
                  fill="#F3F3F1"
                  stroke="#84A4B1"
                  strokeOpacity="0.75"
                  strokeWidth="1.4"
                />
          
                <circle
                  cx="450"
                  cy="270"
                  r="4"
                  fill="#84A4B1"
                />
              </g>
          
              {/* one path remains */}
          
              <path
                data-decision-resolved-path
                d="M450 288 L450 490"
                stroke="#1D2C4F"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
          
              {/* destination marker */}
          
              <g data-decision-destination>
                <circle
                  cx="450"
                  cy="505"
                  r="5"
                  fill="#1D2C4F"
                />
          
                <circle
                  cx="450"
                  cy="505"
                  r="17"
                  stroke="#84A4B1"
                  strokeOpacity="0.3"
                />
              </g>
            </svg>
          
            {/* COPY */}
          
            <div
              data-scene-copy
              className="
                relative
                z-10
                text-center
                px-6
                max-w-2xl
              "
            >
              <span
                className="
                  text-xs
                  tracking-[0.25em]
                  text-turquoise-600
                "
              >
                05
              </span>
          
              <h2
                className="
                  mt-3
                  text-[clamp(3.5rem,8vw,7.5rem)]
                  leading-none
                  font-bold
                  text-navy-700
                "
              >
                القرار
              </h2>
          
              <p
                className="
                  mt-5
                  text-base
                  lg:text-lg
                  text-navy-500
                  leading-relaxed
                "
              >
                {STAGE_COPY[4].description}
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            FINAL RESOLUTION
        ==================================================== */}

        <div
          data-method-final
          className="
            absolute
            inset-0
            z-20
            flex
            items-center
            justify-center
            pointer-events-none
          "
        >
          <div className="text-center px-6 max-w-4xl">
            <span
              className="
                text-xs
                tracking-[0.3em]
                text-turquoise-600
              "
            >
              منهج فنر
            </span>

            <h2
              className="
                mt-5
                text-[clamp(3rem,7vw,7rem)]
                leading-[1.05]
                font-bold
                text-navy-700
              "
            >
              من التشتيت
              <br />
              إلى القرار.
            </h2>

            <p
              className="
                mt-7
                text-base
                lg:text-xl
                text-navy-500
                leading-relaxed
                max-w-xl
                mx-auto
              "
            >
              منهج يحوّل الضوضاء المالية إلى فهم منظم،
              ثم إلى قرار مستقل.
            </p>
          </div>
        </div>

        {/* ===================================================
            PROGRESS / CHAPTER NAVIGATION
        ==================================================== */}

        <div
          className="
            absolute
            z-40
            bottom-6
            lg:bottom-9
            left-6
            right-6
            lg:left-10
            lg:right-10
          "
        >
          <div
            className="
              relative
              h-px
              bg-navy-700/10
              mb-4
            "
          >
            <div
              data-progress-fill
              className="
                absolute
                inset-y-0
                right-0
                w-full
                bg-turquoise-600/80
              "
            />
          </div>

          <div
            className="
              flex
              items-start
              justify-between
              gap-2
            "
          >
            {METHODOLOGY_STAGES.map(
              (stage, index) => (
                <div
                  key={stage.id}
                  data-progress-item
                  className="
                    flex
                    flex-col
                    gap-1
                    transition-none
                  "
                >
                  <span
                    className="
                      text-[9px]
                      lg:text-[10px]
                      tracking-[0.15em]
                      text-turquoise-600
                    "
                  >
                    {String(index + 1).padStart(
                      2,
                      '0',
                    )}
                  </span>

                  <span
                    className="
                      text-[10px]
                      sm:text-xs
                      lg:text-sm
                      font-medium
                      text-navy-700
                    "
                  >
                    {stage.title}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}