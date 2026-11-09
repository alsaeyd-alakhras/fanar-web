import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/brand/Logo';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | undefined>();
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const trimmed = email.trim();
    if (!trimmed) {
      setError('الرجاء إدخال البريد الإلكتروني');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('صيغة البريد الإلكتروني غير صحيحة');
      return false;
    }
    setError(undefined);
    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <div dir="rtl" className="relative min-h-screen overflow-hidden bg-[#0F1E36]">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(132,164,177,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(132,164,177,.05) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[20%] top-[15%] h-[380px] w-[380px] rounded-full bg-[#84A4B1]/8 blur-[120px]"
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <header className="px-6 pt-8 sm:pt-10 lg:px-10">
          <div className="mx-auto flex max-w-[460px] items-center justify-between">
            <Link to="/" aria-label="فنر — الصفحة الرئيسية">
              <Logo variant="light" />
            </Link>
            <Link
              to="/"
              className="font-arabic text-[11px] text-[#F3F3F1]/40 transition-colors duration-300 hover:text-[#84A4B1]"
            >
              العودة للموقع ←
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="flex flex-1 items-center justify-center px-6 py-10 sm:py-16">
          <div className="w-full max-w-[460px]">
            {/* Heading */}
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-7 bg-[#84A4B1]" />
                <span className="font-arabic text-[10px] font-medium tracking-[0.2em] text-[#84A4B1]">
                  استعادة كلمة المرور
                </span>
              </div>
              <h1 className="font-arabic text-[clamp(1.8rem,4vw,2.4rem)] font-bold leading-[1.3] tracking-[-0.02em] text-[#F3F3F1]">
                نسيت كلمة المرور؟
              </h1>
              <p className="mt-3 font-arabic text-[13px] leading-7 text-[#F3F3F1]/45">
                أدخل بريدك الإلكتروني وسنحاكي إرسال رابط استعادة.
              </p>
            </div>

            {submitted ? (
              /* Success state */
              <div className="rounded-[16px] border border-[#84A4B1]/20 bg-[#84A4B1]/[0.04] p-8 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#84A4B1]/25 bg-[#84A4B1]/10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12L9 18L21 6" stroke="#84A4B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="font-arabic text-[16px] font-bold text-[#F3F3F1]">
                  تم استلام طلبك
                </h2>
                <p className="mt-3 font-arabic text-[12px] leading-7 text-[#F3F3F1]/50">
                  لو كان هذا حساباً حقيقياً، لتم إرسال رابط استعادة كلمة المرور إلى{' '}
                  <span className="font-semibold text-[#84A4B1]">{email.trim()}</span>.
                </p>
                <p className="mt-4 font-arabic text-[11px] leading-6 text-[#F3F3F1]/35">
                  لم يتم إرسال أي بريد إلكتروني فعلي. هذه محاكاة لأغراض العرض فقط.
                </p>
                <Link
                  to="/login"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1D2C4F] px-6 py-3 font-arabic text-[13px] font-semibold text-[#F3F3F1] transition-all duration-300 hover:bg-[#84A4B1] hover:text-[#1D2C4F]"
                >
                  العودة لتسجيل الدخول
                  <span className="text-[10px]">←</span>
                </Link>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="forgot-email" className="mb-2 block font-arabic text-[12px] font-semibold text-[#F3F3F1]/80">
                    البريد الإلكتروني
                  </label>
                  <input
                    id="forgot-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    placeholder="name@example.com"
                    aria-invalid={!!error}
                    aria-describedby={error ? 'forgot-email-error' : undefined}
                    className={`w-full rounded-[12px] border bg-[#F3F3F1]/[0.04] px-5 py-3.5 font-arabic text-[14px] text-[#F3F3F1] placeholder:text-[#F3F3F1]/20 transition-all duration-300 focus:outline-none focus:ring-2 ${
                      error
                        ? 'border-red-400/40 focus:ring-red-400/20'
                        : 'border-[#F3F3F1]/10 focus:border-[#84A4B1] focus:ring-[#84A4B1]/20'
                    }`}
                  />
                  {error && (
                    <p id="forgot-email-error" className="mt-2 font-arabic text-[11px] text-red-400/80" role="alert">
                      {error}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="group relative flex min-h-[52px] w-full items-center justify-center overflow-hidden rounded-full bg-[#1D2C4F] font-arabic text-[14px] font-bold text-[#F3F3F1] transition-all duration-500 hover:-translate-y-[1px]"
                >
                  <span className="absolute inset-0 translate-y-full bg-[#84A4B1] transition-transform duration-500 ease-out group-hover:translate-y-0" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-[#1D2C4F]">
                    إرسال رابط الاستعادة
                  </span>
                </button>
              </form>
            )}

            {/* Back to login */}
            {!submitted && (
              <p className="mt-7 text-center font-arabic text-[12px] text-[#F3F3F1]/40">
                تذكّرت كلمة المرور؟{' '}
                <Link
                  to="/login"
                  className="font-semibold text-[#84A4B1] transition-colors duration-300 hover:text-[#F3F3F1]"
                >
                  تسجيل الدخول
                </Link>
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
