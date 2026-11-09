import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  arrow?: boolean;
  href?: string;
}

export default function MagneticButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
  arrow = false,
  href,
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const arrowRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = btnRef.current;
    if (!el) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' });

    const handleMove = (e: Event) => {
      const me = e as MouseEvent;
      const rect = el.getBoundingClientRect();
      const x = me.clientX - rect.left - rect.width / 2;
      const y = me.clientY - rect.top - rect.height / 2;
      xTo(x * 0.25);
      yTo(y * 0.25);
    };

    const handleLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  const baseClasses = 'group relative inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer select-none';

  const variantClasses = {
    primary: 'bg-cream-100 text-navy-700 hover:bg-turquoise-400 hover:text-navy-900',
    secondary: 'bg-transparent text-cream-100 border border-cream-100/30 hover:border-turquoise-400 hover:text-turquoise-400',
    ghost: 'bg-transparent text-navy-700 border border-navy-700/20 hover:border-navy-700 hover:bg-navy-700 hover:text-cream-100',
  };

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span
          ref={arrowRef}
          className="inline-block transition-transform duration-300 group-hover:-translate-x-1"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="-scale-x-100">
            <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        ref={btnRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        data-cursor="hover"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={btnRef as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      data-cursor="hover"
    >
      {content}
    </button>
  );
}
