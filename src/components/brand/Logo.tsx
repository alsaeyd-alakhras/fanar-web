
interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function Logo({
  className = '',
  variant = 'light',
}: LogoProps) {
  const src =
    variant === 'light'
      ? '/brand/fnar-wordmark-logo-light.svg'
      : '/brand/fnar-wordmark-logo-dark.svg';

  return (
    <img
      src={src}
      alt="فنر — FNAR"
      draggable={false}
      className={`
        block
        w-auto
        h-[42px]
        sm:h-[46px]
        lg:h-[54px]
        xl:h-[58px]
        max-w-[160px]
        lg:max-w-[190px]
        object-contain
        select-none
        shrink-0
        transition-opacity
        duration-300
        ${className}
      `}
    />
  );
}
