interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  variant?: 'dark' | 'light';
  align?: 'center' | 'start';
  dataAttribute?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  variant = 'dark',
  align = 'center',
  dataAttribute,
}: SectionHeadingProps) {
  const isLight = variant === 'light';
  const isCenter = align === 'center';

  return (
    <div
      dir="rtl"
      className={`
        flex flex-col
        ${isCenter ? 'items-center text-center' : 'items-start text-start'}
        mb-16
        lg:mb-20
      `}
    >
      <div className="mb-4 flex items-center gap-3" {...(dataAttribute ? { 'data-reveal': dataAttribute } : {})}>
        <span className="h-px w-9 bg-[#84A4B1]/60" />
        <span
          className={`
            font-arabic text-[10px] font-medium tracking-[0.2em]
            ${isLight ? 'text-[#84A4B1]' : 'text-[#84A4B1]'}
          `}
        >
          {eyebrow}
        </span>
        {isCenter && <span className="h-px w-9 bg-[#84A4B1]/60" />}
      </div>

      <h2
        className={`
          font-arabic
          text-[clamp(2rem,4.5vw,3.5rem)]
          font-bold
          leading-[1.2]
          tracking-[-0.02em]
          max-w-[680px]
          ${isLight ? 'text-[#F3F3F1]' : 'text-[#1D2C4F]'}
        `}
        {...(dataAttribute ? { 'data-reveal': dataAttribute } : {})}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`
            mt-5
            max-w-[520px]
            font-arabic
            text-[14px]
            leading-7
            sm:text-[15px]
            sm:leading-8
            ${isLight ? 'text-[#F3F3F1]/50' : 'text-[#1D2C4F]/55'}
          `}
          {...(dataAttribute ? { 'data-reveal': dataAttribute } : {})}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
