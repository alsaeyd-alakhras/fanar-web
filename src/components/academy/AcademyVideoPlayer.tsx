interface AcademyVideoPlayerProps {
  videoUrl?: string;
  lessonTitle: string;
}

/**
 * AcademyVideoPlayer — renders a video when a supported URL
 * is provided, otherwise shows a designed placeholder.
 *
 * Supports YouTube embed URLs..
 */
export default function AcademyVideoPlayer({
  videoUrl,
  lessonTitle,
}: AcademyVideoPlayerProps) {
  if (videoUrl) {
    // Only allow YouTube embed URLs for now
    const isYouTubeEmbed = videoUrl.includes('youtube.com/embed');

    if (isYouTubeEmbed) {
      return (
        <div
          className="relative aspect-video w-full overflow-hidden rounded-[16px] border border-[#1D2C4F]/10 bg-[#0F1E36]"
          dir="ltr"
        >
          <iframe
            src={videoUrl}
            title={lessonTitle}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }
  }

  // Placeholder — no video available
  return (
    <div
      dir="rtl"
      className="relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-[16px] border border-[#1D2C4F]/10 bg-[#0F1E36]"
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(132,164,177,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(132,164,177,.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Decorative circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[40px] -top-[40px] h-[200px] w-[200px] rounded-full border border-white/[0.05]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[20px] -bottom-[20px] h-[140px] w-[140px] rounded-full border border-white/[0.04]"
      />

      <div className="relative z-10 flex flex-col items-center gap-5 px-6 text-center">
        {/* Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#84A4B1]/20 bg-[#84A4B1]/[0.06]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="4" width="20" height="16" rx="3" stroke="#84A4B1" strokeWidth="1.5" />
            <path d="M10 9L15 12L10 15V9Z" fill="#84A4B1" />
          </svg>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h3 className="font-arabic text-[16px] font-bold text-[#F3F3F1] sm:text-[18px]">
            المحتوى التعليمي لهذا الدرس قيد الإعداد
          </h3>
          <p className="max-w-[380px] font-arabic text-[12px] leading-7 text-[#F3F3F1]/40">
            سيتم توفير المحتوى المرئي للدروس قريباً. يمكنك في الوقت الحالي
            متابعة أهداف الدرس والملاحظات.
          </p>
        </div>

        {/* Lesson title */}
        <div className="mt-2 flex items-center gap-3 rounded-full border border-[#84A4B1]/15 bg-[#84A4B1]/[0.04] px-4 py-2">
          <span className="h-[5px] w-[5px] rounded-full bg-[#84A4B1]/60" />
          <span className="font-arabic text-[11px] text-[#84A4B1]">{lessonTitle}</span>
        </div>
      </div>
    </div>
  );
}
