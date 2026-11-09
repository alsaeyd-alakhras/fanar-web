
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    );

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    if (!finePointer.matches || reducedMotion.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    gsap.set([dot, ring], {
      xPercent: -50,
      yPercent: -50,
      x: -100,
      y: -100,
      opacity: 0,
    });

    const dotX = gsap.quickTo(dot, 'x', {
      duration: 0.12,
      ease: 'power3.out',
    });

    const dotY = gsap.quickTo(dot, 'y', {
      duration: 0.12,
      ease: 'power3.out',
    });

    const ringX = gsap.quickTo(ring, 'x', {
      duration: 0.38,
      ease: 'power3.out',
    });

    const ringY = gsap.quickTo(ring, 'y', {
      duration: 0.38,
      ease: 'power3.out',
    });

    let visible = false;
    let hovering = false;

    const show = () => {
      if (visible) return;
      visible = true;

      gsap.to([dot, ring], {
        opacity: 1,
        duration: 0.25,
        overwrite: 'auto',
      });
    };

    const hide = () => {
      visible = false;

      gsap.to([dot, ring], {
        opacity: 0,
        duration: 0.2,
        overwrite: 'auto',
      });
    };

    const move = (event: MouseEvent) => {
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);

      show();
    };

    const updateHover = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const isInteractive = Boolean(
        target.closest(
          'a, button, [role="button"], [data-cursor="hover"]'
        )
      );

      if (isInteractive === hovering) return;

      hovering = isInteractive;

      gsap.to(ring, {
        scale: hovering ? 1.65 : 1,
        borderColor: hovering
          ? 'rgba(132,164,177,0.95)'
          : 'rgba(132,164,177,0.65)',
        backgroundColor: hovering
          ? 'rgba(132,164,177,0.12)'
          : 'rgba(132,164,177,0)',
        boxShadow: hovering
          ? '0 0 28px rgba(132,164,177,0.16)'
          : '0 0 0 rgba(132,164,177,0)',
        duration: 0.3,
        ease: 'power3.out',
        overwrite: 'auto',
      });

      gsap.to(dot, {
        scale: hovering ? 0.65 : 1,
        duration: 0.25,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    const press = () => {
      gsap.to(ring, {
        scale: hovering ? 1.35 : 0.8,
        duration: 0.15,
        overwrite: 'auto',
      });
    };

    const release = () => {
      gsap.to(ring, {
        scale: hovering ? 1.65 : 1,
        duration: 0.25,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerover', updateHover);
    window.addEventListener('pointerdown', press);
    window.addEventListener('pointerup', release);
    document.addEventListener('pointerleave', hide);

    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', updateHover);
      window.removeEventListener('pointerdown', press);
      window.removeEventListener('pointerup', release);
      document.removeEventListener('pointerleave', hide);

      gsap.killTweensOf([dot, ring]);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          hidden
          h-[6px]
          w-[6px]
          rounded-full
          bg-[#84A4B1]
          shadow-[0_0_12px_rgba(132,164,177,0.45)]
          md:block
        "
      />

      <div
        ref={ringRef}
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9998]
          hidden
          h-[36px]
          w-[36px]
          rounded-full
          border
          border-[#84A4B1]/65
          bg-transparent
          md:block
        "
      />
    </>
  );
}
