
interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  variant?: 'cream' | 'navy';
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  variant = 'cream',
}: PageHeroProps) {
  const isNavy = variant === 'navy';

  const foreground = isNavy ? 'text-[#F3F3F1]' : 'text-[#1D2C4F]';
  const secondary = isNavy ? 'text-[#F3F3F1]/65' : 'text-[#1D2C4F]/65';
  const border = isNavy ? 'border-white/15' : 'border-[#1D2C4F]/15';

  return (
    <section
      dir="rtl"
      className={`relative isolate overflow-hidden ${
        isNavy ? 'bg-[#0F1E36]' : 'bg-[#F3F3F1]'
      }`}
    >
      {/* SUBTLE ARCHITECTURAL GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(
              ${isNavy ? 'rgba(132,164,177,.06)' : 'rgba(29,44,79,.035)'} 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              ${isNavy ? 'rgba(132,164,177,.06)' : 'rgba(29,44,79,.035)'} 1px,
              transparent 1px
            )
          `,
          backgroundSize: '84px 84px',
        }}
      />

      {/* DECORATIVE ARCHITECTURAL CIRCLE */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -left-[100px] top-[70px] h-[350px] w-[350px] rounded-full border sm:-left-[70px] sm:h-[460px] sm:w-[460px] ${
          isNavy ? 'border-white/[0.07]' : 'border-[#1D2C4F]/[0.07]'
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -left-[30px] top-[140px] h-[210px] w-[210px] rounded-full border sm:left-[30px] sm:h-[310px] sm:w-[310px] ${
          isNavy ? 'border-white/[0.07]' : 'border-[#1D2C4F]/[0.07]'
        }`}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 pt-[132px] sm:px-6 sm:pt-[145px] lg:px-10 lg:pt-[155px]">
        {/* TOP META */}
        <div className="mb-10 flex items-center justify-between gap-4 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#84A4B1]" />
            <span className="text-[11px] font-medium tracking-[0.08em] text-[#54707D]">
              {eyebrow}
            </span>
          </div>

          <span
            className={`hidden font-sans text-[10px] tracking-[0.2em] sm:block ${secondary}`}
            dir="ltr"
          >
            FNAR / INSIGHTS
          </span>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid items-end gap-8 pb-12 sm:pb-16 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)] lg:gap-16 lg:pb-20">
          <div>
            <div className="mb-6 h-[3px] w-12 bg-[#84A4B1]" />

            <h1
              className={`max-w-[780px] font-arabic text-[clamp(2.8rem,5.5vw,5rem)] font-bold leading-[1.35] tracking-[-0.035em] ${foreground}`}
            >
              {title}
            </h1>
          </div>

          {subtitle && (
            <div className={`border-r-2 border-[#84A4B1]/60 pr-5 lg:mb-2`}>
              <p
                className={`max-w-[380px] font-arabic text-[14px] leading-[2.1] sm:text-[15px] ${secondary}`}
              >
                {subtitle}
              </p>
            </div>
          )}
        </div>

        {/* BOTTOM STRIP */}
        <div
          className={`flex items-center justify-between gap-4 border-t py-5 ${border}`}
        >
          <span className={`text-[11px] font-medium ${secondary}`}>
            المعرفة قبل القرار
          </span>

          <div className="flex items-center gap-3">
            <span className={`hidden text-[11px] sm:block ${secondary}`}>
              اكتشف المزيد
            </span>

            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full border text-[15px] ${border} ${foreground}`}
              aria-hidden="true"
            >
              ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
