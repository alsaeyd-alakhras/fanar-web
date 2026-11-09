import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAcademyProfile } from '@/hooks/useAcademyProfile';
import { ACADEMY_DEMO_LABEL } from '@/data/academy';

const SESSION_OPTIONS = [15, 30, 45, 60, 90, 120];

export default function AcademyProfilePage() {
  const { profile, saveProfile, initials, hasName } = useAcademyProfile();
  const [displayName, setDisplayName] = useState(profile.displayName);
  const [learningGoal, setLearningGoal] = useState(profile.learningGoal);
  const [sessionMinutes, setSessionMinutes] = useState(profile.preferredSessionMinutes);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    saveProfile({
      displayName,
      learningGoal,
      preferredSessionMinutes: sessionMinutes,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const hasChanges =
    displayName.trim() !== profile.displayName ||
    learningGoal.trim() !== profile.learningGoal ||
    sessionMinutes !== profile.preferredSessionMinutes;

  return (
    <div dir="rtl">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#0F1E36]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(132,164,177,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(132,164,177,.05) 1px, transparent 1px)',
            backgroundSize: '84px 84px',
          }}
        />
        <div className="relative z-10 mx-auto max-w-[800px] px-5 pt-[132px] pb-14 sm:px-6 sm:pt-[145px] lg:px-10 lg:pb-16">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-[11px]">
            <Link
              to="/academy"
              className="font-arabic text-[#F3F3F1]/40 transition-colors hover:text-[#84A4B1]"
            >
              الأكاديمية
            </Link>
            <span className="text-[#F3F3F1]/20">/</span>
            <span className="font-arabic text-[#84A4B1]">الملف الشخصي</span>
          </nav>

          <div className="flex items-center gap-5">
            {/* Avatar */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#84A4B1]/20 bg-[#84A4B1]/[0.06] sm:h-20 sm:w-20">
              <span className="font-sans text-[18px] font-bold text-[#84A4B1] sm:text-[22px]">
                {hasName ? initials || '؟' : '؟'}
              </span>
            </div>
            <div>
              <h1 className="font-arabic text-[clamp(1.6rem,4vw,2.4rem)] font-bold leading-[1.3] tracking-[-0.02em] text-[#F3F3F1]">
                {hasName ? profile.displayName : 'ملفك الشخصي'}
              </h1>
              <p className="mt-2 font-arabic text-[12px] text-[#F3F3F1]/45">
                {hasName ? 'مرحباً بك في أكاديمية فنر' : 'أنشئ ملفك التعليمي المحلي'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-[#F3F3F1] px-5 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[640px]">
          {/* Local profile notice */}
          <div className="mb-8 flex items-start gap-3 rounded-[14px] border border-[#84A4B1]/15 bg-[#84A4B1]/[0.03] p-5">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#84A4B1]/10">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="#84A4B1" strokeWidth="1.3" />
                <path d="M8 5V8.5M8 11V11.1" stroke="#84A4B1" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <h2 className="font-arabic text-[12px] font-bold text-[#1D2C4F]">
                ملف محلي في متصفحك
              </h2>
              <p className="mt-2 font-arabic text-[11px] leading-6 text-[#1D2C4F]/50">
                هذا الملف الشخصي محفوظ محلياً في متصفحك فقط، وليس حساباً مسجلاً.
                لا يتم مزامنة بياناتك عبر الأجهزة.
              </p>
            </div>
          </div>

          {/* Display name */}
          <div className="mb-6">
            <label
              htmlFor="displayName"
              className="mb-2 block font-arabic text-[12px] font-semibold text-[#1D2C4F]"
            >
              الاسم المعروض
            </label>
            <input
              id="displayName"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              maxLength={60}
              placeholder="اكتب اسمك هنا..."
              className="w-full rounded-[12px] border border-[#1D2C4F]/12 bg-[#F3F3F1] px-5 py-3.5 font-arabic text-[14px] text-[#1D2C4F] placeholder:text-[#1D2C4F]/25 transition-colors duration-300 focus:border-[#84A4B1] focus:outline-none focus:ring-2 focus:ring-[#84A4B1]/20"
            />
            <p className="mt-2 font-arabic text-[10px] text-[#1D2C4F]/35">
              سيظهر هذا الاسم في صفحة الأكاديمية.
            </p>
          </div>

          {/* Learning goal */}
          <div className="mb-6">
            <label
              htmlFor="learningGoal"
              className="mb-2 block font-arabic text-[12px] font-semibold text-[#1D2C4F]"
            >
              هدفك التعليمي <span className="text-[#1D2C4F]/30">(اختياري)</span>
            </label>
            <textarea
              id="learningGoal"
              value={learningGoal}
              onChange={(e) => setLearningGoal(e.target.value)}
              maxLength={200}
              rows={3}
              placeholder="مثال: أتقن التحليل الفني خلال ثلاثة أشهر..."
              className="w-full resize-none rounded-[12px] border border-[#1D2C4F]/12 bg-[#F3F3F1] px-5 py-3.5 font-arabic text-[14px] leading-7 text-[#1D2C4F] placeholder:text-[#1D2C4F]/25 transition-colors duration-300 focus:border-[#84A4B1] focus:outline-none focus:ring-2 focus:ring-[#84A4B1]/20"
            />
          </div>

          {/* Session duration */}
          <div className="mb-8">
            <span className="mb-3 block font-arabic text-[12px] font-semibold text-[#1D2C4F]">
              مدة جلسة التعلّم المفضّلة
            </span>
            <div className="flex flex-wrap gap-2">
              {SESSION_OPTIONS.map((mins) => {
                const isActive = sessionMinutes === mins;
                return (
                  <button
                    key={mins}
                    type="button"
                    onClick={() => setSessionMinutes(mins)}
                    aria-pressed={isActive}
                    className={`min-h-[44px] rounded-full border px-5 py-2.5 font-arabic text-[12px] font-medium transition-all duration-300 ${
                      isActive
                        ? 'border-[#1D2C4F] bg-[#1D2C4F] text-[#F3F3F1]'
                        : 'border-[#1D2C4F]/12 text-[#1D2C4F]/55 hover:border-[#1D2C4F]/25 hover:text-[#1D2C4F]'
                    }`}
                  >
                    {mins} دقيقة
                  </button>
                );
              })}
            </div>
          </div>

          {/* Save button + feedback */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={handleSave}
              disabled={!hasChanges && !saved}
              className={`
                group relative flex min-h-[48px] min-w-[160px] items-center justify-center overflow-hidden rounded-full px-6 font-arabic text-[13px] font-bold transition-all duration-500
                ${
                  !hasChanges && !saved
                    ? 'cursor-not-allowed bg-[#1D2C4F]/20 text-[#F3F3F1]/50'
                    : 'bg-[#1D2C4F] text-[#F3F3F1] hover:-translate-y-[1px]'
                }
              `}
            >
              {hasChanges && (
                <span className="absolute inset-0 translate-y-full bg-[#84A4B1] transition-transform duration-500 ease-out group-hover:translate-y-0" />
              )}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#1D2C4F]">
                {saved ? '✓ تم الحفظ' : 'حفظ التغييرات'}
              </span>
            </button>

            {saved && (
              <span
                className="flex items-center gap-2 font-arabic text-[11px] text-[#84A4B1]"
                role="status"
              >
                <span className="h-[5px] w-[5px] rounded-full bg-[#84A4B1]" />
                تم حفظ ملفك الشخصي
              </span>
            )}
          </div>

          {/* Demo label */}
          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#84A4B1]/15 bg-[#84A4B1]/[0.03] px-4 py-2">
            <span className="h-[4px] w-[4px] rounded-full bg-[#84A4B1]/50" />
            <span className="font-arabic text-[10px] text-[#84A4B1]/70">
              {ACADEMY_DEMO_LABEL}
            </span>
          </div>

          {/* Navigation */}
          <div className="mt-10 flex flex-wrap gap-4 border-t border-[#1D2C4F]/8 pt-8">
            <Link
              to="/academy"
              className="font-arabic text-[12px] font-medium text-[#1D2C4F]/50 transition-colors duration-300 hover:text-[#84A4B1]"
            >
              ← العودة إلى لوحة التحكم
            </Link>
            <Link
              to="/academy/progress"
              className="font-arabic text-[12px] font-medium text-[#1D2C4F]/50 transition-colors duration-300 hover:text-[#84A4B1]"
            >
              تقدّمي التعليمي ←
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
