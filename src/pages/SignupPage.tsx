import { useState, type FormEvent } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import Logo from '@/components/brand/Logo';

interface LocationState {
  from?: string;
}

function isSafeRedirect(path: string | undefined): boolean {
  if (!path) return false;
  if (path.startsWith('//') || path.startsWith('http')) return false;
  if (!path.startsWith('/')) return false;
  return true;
}

export default function SignupPage() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as LocationState | null)?.from;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    terms?: string;
  }>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const next: typeof errors = {};
    const trimmedName = fullName.trim();
    if (!trimmedName) {
      next.fullName = 'الرجاء إدخال الاسم';
    } else if (trimmedName.length < 2) {
      next.fullName = 'الاسم قصير جداً';
    }
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      next.email = 'الرجاء إدخال البريد الإلكتروني';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      next.email = 'صيغة البريد الإلكتروني غير صحيحة';
    }
    if (!password) {
      next.password = 'الرجاء إدخال كلمة المرور';
    } else if (password.length < 6) {
      next.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
    }
    if (!confirmPassword) {
      next.confirmPassword = 'الرجاء تأكيد كلمة المرور';
    } else if (password !== confirmPassword) {
      next.confirmPassword = 'كلمتا المرور غير متطابقتين';
    }
    if (!agreeTerms) {
      next.terms = 'يجب الموافقة للمتابعة';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      signup(fullName.trim(), email.trim());
      if (isSafeRedirect(from)) {
        navigate(from, { replace: true });
      } else {
        navigate('/academy', { replace: true });
      }
    }, 600);
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
        className="pointer-events-none absolute -right-[20%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#84A4B1]/8 blur-[120px]"
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <header className="px-6 pt-8 sm:pt-10 lg:px-10">
          <div className="mx-auto flex max-w-[480px] items-center justify-between">
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

        {/* Form */}
        <main className="flex flex-1 items-center justify-center px-6 py-10 sm:py-14">
          <div className="w-full max-w-[480px]">
            {/* Heading */}
            <div className="mb-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-7 bg-[#84A4B1]" />
                <span className="font-arabic text-[10px] font-medium tracking-[0.2em] text-[#84A4B1]">
                  إنشاء حساب
                </span>
              </div>
              <h1 className="font-arabic text-[clamp(1.8rem,4vw,2.4rem)] font-bold leading-[1.3] tracking-[-0.02em] text-[#F3F3F1]">
                ابدأ رحلتك التعليمية
              </h1>
              <p className="mt-3 font-arabic text-[13px] leading-7 text-[#F3F3F1]/45">
                أنشئ حساباً تجريبياً للوصول إلى الأكاديمية ودوراتها.
              </p>
            </div>

            {/* Demo notice */}
            <div className="mb-6 flex items-start gap-3 rounded-[12px] border border-[#84A4B1]/15 bg-[#84A4B1]/[0.04] p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#84A4B1]/10">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="#84A4B1" strokeWidth="1.3" />
                  <path d="M8 5V8.5M8 11V11.1" stroke="#84A4B1" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </span>
              <p className="font-arabic text-[11px] leading-6 text-[#F3F3F1]/50">
                هذا حساب تجريبي غير مسجّل على خادم. لا يتم تخزين كلمة المرور أو إرسالها لأي جهة.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Full name */}
              <div>
                <label htmlFor="signup-name" className="mb-2 block font-arabic text-[12px] font-semibold text-[#F3F3F1]/80">
                  الاسم الكامل
                </label>
                <input
                  id="signup-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  autoComplete="name"
                  placeholder="اكتب اسمك هنا..."
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'signup-name-error' : undefined}
                  className={`w-full rounded-[12px] border bg-[#F3F3F1]/[0.04] px-5 py-3.5 font-arabic text-[14px] text-[#F3F3F1] placeholder:text-[#F3F3F1]/20 transition-all duration-300 focus:outline-none focus:ring-2 ${
                    errors.fullName
                      ? 'border-red-400/40 focus:ring-red-400/20'
                      : 'border-[#F3F3F1]/10 focus:border-[#84A4B1] focus:ring-[#84A4B1]/20'
                  }`}
                />
                {errors.fullName && (
                  <p id="signup-name-error" className="mt-2 font-arabic text-[11px] text-red-400/80" role="alert">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="signup-email" className="mb-2 block font-arabic text-[12px] font-semibold text-[#F3F3F1]/80">
                  البريد الإلكتروني
                </label>
                <input
                  id="signup-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  placeholder="name@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'signup-email-error' : undefined}
                  className={`w-full rounded-[12px] border bg-[#F3F3F1]/[0.04] px-5 py-3.5 font-arabic text-[14px] text-[#F3F3F1] placeholder:text-[#F3F3F1]/20 transition-all duration-300 focus:outline-none focus:ring-2 ${
                    errors.email
                      ? 'border-red-400/40 focus:ring-red-400/20'
                      : 'border-[#F3F3F1]/10 focus:border-[#84A4B1] focus:ring-[#84A4B1]/20'
                  }`}
                />
                {errors.email && (
                  <p id="signup-email-error" className="mt-2 font-arabic text-[11px] text-red-400/80" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="signup-password" className="mb-2 block font-arabic text-[12px] font-semibold text-[#F3F3F1]/80">
                  كلمة المرور
                </label>
                <div className="relative">
                  <input
                    id="signup-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    placeholder="6 أحرف على الأقل"
                    aria-invalid={!!errors.password}
                    aria-describedby={errors.password ? 'signup-password-error' : undefined}
                    className={`w-full rounded-[12px] border bg-[#F3F3F1]/[0.04] px-5 py-3.5 pl-12 font-arabic text-[14px] text-[#F3F3F1] placeholder:text-[#F3F3F1]/20 transition-all duration-300 focus:outline-none focus:ring-2 ${
                      errors.password
                        ? 'border-red-400/40 focus:ring-red-400/20'
                        : 'border-[#F3F3F1]/10 focus:border-[#84A4B1] focus:ring-[#84A4B1]/20'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
                    className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[#F3F3F1]/40 transition-colors duration-200 hover:text-[#84A4B1]"
                  >
                    {showPassword ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M3 3L21 21M10.5 10.7C9.9 11.1 9.5 11.8 9.5 12.5C9.5 13.6 10.4 14.5 11.5 14.5C12.2 14.5 12.9 14.1 13.3 13.5M9.4 5.6C10.1 5.4 10.8 5.3 11.5 5.3C16 5.3 19.7 9 21 12.5C20.6 13.5 20 14.5 19.2 15.3M6.2 7.8C4.8 9 3.7 10.6 3 12.5C4.3 16 8 19.7 11.5 19.7C12.9 19.7 14.2 19.3 15.4 18.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M3 12.5C4.3 9 8 5.3 11.5 5.3C15 5.3 18.7 9 20 12.5C18.7 16 15 19.7 11.5 19.7C8 19.7 4.3 16 3 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="11.5" cy="12.5" r="3" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p id="signup-password-error" className="mt-2 font-arabic text-[11px] text-red-400/80" role="alert">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm password */}
              <div>
                <label htmlFor="signup-confirm" className="mb-2 block font-arabic text-[12px] font-semibold text-[#F3F3F1]/80">
                  تأكيد كلمة المرور
                </label>
                <div className="relative">
                  <input
                    id="signup-confirm"
                    type={showConfirm ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autoComplete="new-password"
                    placeholder="أعد كتابة كلمة المرور"
                    aria-invalid={!!errors.confirmPassword}
                    aria-describedby={errors.confirmPassword ? 'signup-confirm-error' : undefined}
                    className={`w-full rounded-[12px] border bg-[#F3F3F1]/[0.04] px-5 py-3.5 pl-12 font-arabic text-[14px] text-[#F3F3F1] placeholder:text-[#F3F3F1]/20 transition-all duration-300 focus:outline-none focus:ring-2 ${
                      errors.confirmPassword
                        ? 'border-red-400/40 focus:ring-red-400/20'
                        : 'border-[#F3F3F1]/10 focus:border-[#84A4B1] focus:ring-[#84A4B1]/20'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    aria-label={showConfirm ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
                    className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[#F3F3F1]/40 transition-colors duration-200 hover:text-[#84A4B1]"
                  >
                    {showConfirm ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M3 3L21 21M10.5 10.7C9.9 11.1 9.5 11.8 9.5 12.5C9.5 13.6 10.4 14.5 11.5 14.5C12.2 14.5 12.9 14.1 13.3 13.5M9.4 5.6C10.1 5.4 10.8 5.3 11.5 5.3C16 5.3 19.7 9 21 12.5C20.6 13.5 20 14.5 19.2 15.3M6.2 7.8C4.8 9 3.7 10.6 3 12.5C4.3 16 8 19.7 11.5 19.7C12.9 19.7 14.2 19.3 15.4 18.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M3 12.5C4.3 9 8 5.3 11.5 5.3C15 5.3 18.7 9 20 12.5C18.7 16 15 19.7 11.5 19.7C8 19.7 4.3 16 3 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="11.5" cy="12.5" r="3" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p id="signup-confirm-error" className="mt-2 font-arabic text-[11px] text-red-400/80" role="alert">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Terms */}
              <div>
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#F3F3F1]/20 bg-transparent accent-[#84A4B1]"
                  />
                  <span className="font-arabic text-[12px] leading-6 text-[#F3F3F1]/50">
                    أوافق على أن هذا حساب تجريبي لأغراض العرض، وليس حساباً مسجلاً لدى مزود خدمة.
                  </span>
                </label>
                {errors.terms && (
                  <p className="mt-2 font-arabic text-[11px] text-red-400/80" role="alert">
                    {errors.terms}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="group relative flex min-h-[52px] w-full items-center justify-center overflow-hidden rounded-full bg-[#1D2C4F] font-arabic text-[14px] font-bold text-[#F3F3F1] transition-all duration-500 hover:-translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="absolute inset-0 translate-y-full bg-[#84A4B1] transition-transform duration-500 ease-out group-hover:translate-y-0 group-disabled:translate-y-full" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#1D2C4F] group-disabled:text-[#F3F3F1]">
                  {submitting ? 'جاري الإنشاء...' : 'إنشاء الحساب التجريبي'}
                </span>
              </button>
            </form>

            {/* Switch to login */}
            <p className="mt-7 text-center font-arabic text-[12px] text-[#F3F3F1]/40">
              لديك حساب بالفعل؟{' '}
              <Link
                to="/login"
                state={from ? { from } : undefined}
                className="font-semibold text-[#84A4B1] transition-colors duration-300 hover:text-[#F3F3F1]"
              >
                تسجيل الدخول
              </Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
