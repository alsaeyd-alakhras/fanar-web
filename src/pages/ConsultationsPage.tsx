
import { useEffect, useRef, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

import PageHero from '@/components/ui/PageHero';
// import {
//   CONSULTATIONS,
//   FOLLOW_UP_SESSIONS,
//   FOLLOW_UP_ELIGIBILITY_WINDOW_DAYS,
//   SUPPORTED_PRICING_INCOME_THRESHOLD_KWD,
// } from '@/data/content';
import {
  FOLLOW_UP_ELIGIBILITY_WINDOW_DAYS,
  SUPPORTED_PRICING_INCOME_THRESHOLD_KWD,
} from '@/data/content';

import { useCMSContent } from '@/hooks/useCMSContent';
import type { Consultation } from '@/types';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

type BookingStep =
  | 'select'
  | 'form'
  | 'review'
  | 'payment'
  | 'paymentFailed'
  | 'submitted';

type PriceMode = 'standard' | 'supported';

type BookingForm = {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  previousRelationship: string;
  experienceLevel: string;
  reason: string;
  mainTopics: string;
  capitalRange: string;
  supportedEligibility: boolean;
  privacyAccepted: boolean;
};

const initialForm: BookingForm = {
  fullName: '',
  phone: '',
  email: '',
  preferredDate: '',
  preferredTime: '',
  previousRelationship: '',
  experienceLevel: '',
  reason: '',
  mainTopics: '',
  capitalRange: '',
  supportedEligibility: false,
  privacyAccepted: false,
};

const TIME_OPTIONS = [
  { value: 'morning', label: 'صباحاً — 9:00 إلى 12:00' },
  { value: 'afternoon', label: 'ظهراً — 12:00 إلى 16:00' },
  { value: 'evening', label: 'مساءً — 16:00 إلى 20:00' },
];

const inputClass =
  'w-full min-h-[48px] rounded-[10px] border border-white/15 ' +
  'bg-[#152742]/80 px-4 py-3 text-[14px] text-[#F3F3F1] ' +
  'outline-none transition-colors focus:border-[#84A4B1] ' +
  'placeholder:text-white/30 backdrop-blur-[2px]';

function getLocalDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default function ConsultationsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();

  const {
    consultations: CONSULTATIONS,
    followUpSessions: FOLLOW_UP_SESSIONS,
  } = useCMSContent();

  const pageRef = useRef<HTMLDivElement | null>(null);
  const bookingRef = useRef<HTMLElement | null>(null);

  const reduced = useReducedMotion();

  const [selectedConsultation, setSelectedConsultation] =
    useState<Consultation | null>(null);

    useEffect(() => {
  if (!selectedConsultation) return;

  const updated = CONSULTATIONS.find(
    (item) => item.id === selectedConsultation.id
  );

  if (!updated) {
    setSelectedConsultation(null);
    setBookingStep('select');
    return;
  }

  if (updated !== selectedConsultation) {
    setSelectedConsultation(updated);
  }
}, [CONSULTATIONS, selectedConsultation]);

  const [bookingStep, setBookingStep] =
    useState<BookingStep>('select');

  const [priceMode, setPriceMode] =
    useState<PriceMode>('standard');

  const [formData, setFormData] =
    useState<BookingForm>(initialForm);

  const [formError, setFormError] = useState('');

  // Restore the chosen consultation after returning from demo login/signup.
  useEffect(() => {
    if (!isAuthenticated) return;

    const params = new URLSearchParams(location.search);
    const consultationId = params.get('consultation');

    if (!consultationId) return;

    const consultation = CONSULTATIONS.find(
      (item) => item.id === consultationId
    );

    if (!consultation) return;

    const mode: PriceMode =
      params.get('price') === 'supported' &&
      consultation.isSupportedEligible
        ? 'supported'
        : 'standard';

    setSelectedConsultation(consultation);
    setPriceMode(mode);

    setFormData({
      ...initialForm,
      fullName: user?.displayName ?? '',
      email: user?.email ?? '',
    });

    setFormError('');
    setBookingStep('form');

    params.delete('consultation');
    params.delete('price');

    const remaining = params.toString();

    navigate(
      `${location.pathname}${remaining ? `?${remaining}` : ''}`,
      { replace: true }
    );
  }, [
      isAuthenticated,
      location.pathname,
      location.search,
      navigate,
      user?.displayName,
      user?.email,
      CONSULTATIONS,
    ]);

  const supportedConsultations = CONSULTATIONS.filter(
    (consultation) => consultation.isSupportedEligible
  );

  const isSupported =
    priceMode === 'supported' &&
    Boolean(selectedConsultation?.isSupportedEligible);

  const currentPrice = isSupported
    ? selectedConsultation?.supportedPriceKWD
    : selectedConsultation?.priceKWD;

  // Scroll reveal animations.
  useEffect(() => {
    const page = pageRef.current;
    if (!page || reduced) return;

    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>('[data-con-reveal]')
        .forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                once: true,
              },
            }
          );
        });
    }, page);

    return () => ctx.revert();
  }, [reduced]);

  // Scroll to booking form when the booking step changes.
  useEffect(() => {
    if (bookingStep === 'select') return;

    const frame = requestAnimationFrame(() => {
      bookingRef.current?.scrollIntoView({
        behavior: reduced ? 'auto' : 'smooth',
        block: 'start',
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [bookingStep, reduced]);

  const updateField = <K extends keyof BookingForm>(
    field: K,
    value: BookingForm[K]
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setFormError('');
  };

  const selectConsultation = (
    consultation: Consultation,
    mode: PriceMode = 'standard'
  ) => {
    if (!isAuthenticated) {
      const params = new URLSearchParams(location.search);

      params.set('consultation', consultation.id);
      params.set('price', mode);

      navigate('/login', {
        state: {
          from: `${location.pathname}?${params.toString()}`,
        },
      });

      return;
    }

    setSelectedConsultation(consultation);
    setPriceMode(mode);

    setFormData({
      ...initialForm,
      fullName: user?.displayName ?? '',
      email: user?.email ?? '',
    });

    setFormError('');
    setBookingStep('form');
  };

  const resetBooking = () => {
    setSelectedConsultation(null);
    setPriceMode('standard');
    setFormData(initialForm);
    setFormError('');
    setBookingStep('select');
  };

  const validateForm = () => {
    if (
      !formData.fullName.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.preferredDate ||
      !formData.preferredTime ||
      !formData.reason.trim() ||
      !formData.mainTopics.trim()
    ) {
      return 'يرجى تعبئة جميع الحقول المطلوبة.';
    }

    if (formData.fullName.trim().length < 2) {
      return 'يرجى إدخال الاسم الكامل بشكل صحيح.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return 'يرجى إدخال بريد إلكتروني صحيح.';
    }

    if (!/^\+?[\d\s()-]{7,20}$/.test(formData.phone)) {
      return 'يرجى إدخال رقم هاتف صحيح.';
    }

    if (formData.preferredDate < getLocalDate()) {
      return 'يرجى اختيار تاريخ اليوم أو تاريخ لاحق.';
    }

    if (isSupported && !formData.supportedEligibility) {
      return 'يرجى تأكيد استيفاء شروط طلب السعر المدعوم.';
    }

    if (!formData.privacyAccepted) {
      return 'يرجى الموافقة على معالجة بيانات طلب الاستشارة.';
    }

    return '';
  };

  const handleReview = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const error = validateForm();

    if (error) {
      setFormError(error);
      return;
    }

    setBookingStep('review');
  };

  const handleDemoPayment = (
    outcome: 'success' | 'failure'
  ) => {
    // Demo UI only: no charge or real booking.
    if (!isAuthenticated) {
      navigate('/login', {
        state: { from: location.pathname },
      });
      return;
    }

    setBookingStep(
      outcome === 'success' ? 'submitted' : 'paymentFailed'
    );
  };

  return (
    <div
      ref={pageRef}
      dir="rtl"
      className="font-arabic"
    >
      {/* PAGE HERO */}

      <PageHero
        eyebrow="الاستشارات"
        title="استشارات احترافية لكل مستوى من الحاجة."
        subtitle="جلسات تعليمية وتحليلية لمناقشة الأسواق المالية والتداول، دون توصيات مباشرة أو وعود بالربح."
        variant="navy"
      />

      {/* CONSULTATION SELECTION */}

      {bookingStep === 'select' && (
        <section className="bg-[#F3F3F1] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[1200px]">
            <div
              data-con-reveal
              className="mb-12"
            >
              <SectionEyebrow
                label="الاستشارات المتاحة"
                dark
              />

              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.5] text-[#1D2C4F]">
                {CONSULTATIONS.length} استشارات.

                <span className="block text-[#54707D]">
                  اختر ما يناسب احتياجك.
                </span>
              </h2>

              <p className="mt-4 max-w-[590px] text-[14px] leading-8 text-[#1D2C4F]/65">
                اختر نوع الاستشارة، ثم حدد التاريخ والفترة الزمنية
                المفضلين لديك وأكمل نموذج التحضير للجلسة.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {CONSULTATIONS.map((consultation) => (
                <article
                  key={consultation.id}
                  data-con-reveal
                  className="group flex flex-col rounded-[16px] border border-[#1D2C4F]/10 bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-[#84A4B1]/50 hover:shadow-[0_16px_45px_rgba(29,44,79,0.07)] sm:p-8"
                >
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="font-sans text-[24px] font-bold text-[#84A4B1]">
                      {consultation.number}
                    </span>

                    <span className="rounded-full border border-[#1D2C4F]/10 px-4 py-2 text-[11px] text-[#1D2C4F]/60">
                      {consultation.durationMinutes} دقيقة
                    </span>
                  </div>

                  <h3 className="mb-3 text-[20px] font-bold leading-[1.6] text-[#1D2C4F]">
                    {consultation.title}
                  </h3>

                  <p className="mb-3 text-[12px] font-medium leading-6 text-[#54707D]">
                    {consultation.targetAudience}
                  </p>

                  <p className="mb-6 text-[13px] leading-8 text-[#1D2C4F]/70">
                    {consultation.description}
                  </p>

                  {consultation.mayLeadToPartnership && (
                    <div className="mb-6 border-r-2 border-[#84A4B1] pr-4">
                      <p className="text-[12px] leading-7 text-[#1D2C4F]/65">
                        عند الرغبة في الجانب التطبيقي، الحد الأدنى
                        لرأس المال المخصص للعمل هو{' '}
                        {consultation.minimumCapitalKWD?.toLocaleString(
                          'en-US'
                        )}{' '}
                        د.ك، في محفظة العميل الخاصة.
                        ولا يعني ذلك القبول التلقائي.
                      </p>
                    </div>
                  )}

                  <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-[#1D2C4F]/10 pt-6">
                    <div>
                      <span className="text-[11px] text-[#1D2C4F]/50">
                        قيمة الاستشارة
                      </span>

                      <p className="mt-1 text-[24px] font-bold text-[#1D2C4F]">
                        {consultation.priceKWD}{' '}
                        <span className="text-[12px] font-normal">
                          د.ك
                        </span>
                      </p>

                      {consultation.isSupportedEligible &&
                        consultation.supportedPriceKWD != null && (
                          <p className="mt-1 text-[11px] text-[#54707D]">
                            السعر المدعوم:{' '}
                            {consultation.supportedPriceKWD} د.ك
                          </p>
                        )}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        selectConsultation(consultation)
                      }
                      className="min-h-[46px] rounded-full bg-[#1D2C4F] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#54707D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#54707D]"
                    >
                      اختر الاستشارة ←
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 text-[12px] leading-7 text-[#1D2C4F]/55">
              اختيار الاستشارة لا يمثل حجزاً مؤكداً.
              المواعيد تخضع للتوفر والتأكيد.
            </p>
          </div>
        </section>
      )}

      {/* ====================================================
          BOOKING FLOW — NO GLOBAL WATERMARK
          ==================================================== */}

      {bookingStep !== 'select' &&
        selectedConsultation && (
          <section
            ref={bookingRef}
            className="relative isolate scroll-mt-[120px] overflow-hidden bg-[#0F1E36] px-5 py-16 sm:px-6 lg:px-10 lg:py-20"
          >
            <div className="relative z-10 mx-auto max-w-[820px]">
              <div className="mb-8 flex items-center justify-between gap-4">
                <SectionEyebrow label="طلب استشارة" />

                <button
                  type="button"
                  onClick={resetBooking}
                  className="text-[12px] text-white/65 transition-colors hover:text-white"
                >
                  العودة للاستشارات ←
                </button>
              </div>

              {/* BOOKING PROGRESS */}

              <div className="mb-8 flex gap-2">
                {[
                  'البيانات',
                  'المراجعة',
                  'الدفع التجريبي',
                  'الانتهاء',
                ].map((label, index) => {
                  const activeIndex =
                    bookingStep === 'form'
                      ? 0
                      : bookingStep === 'review'
                        ? 1
                        : bookingStep === 'payment' ||
                            bookingStep === 'paymentFailed'
                          ? 2
                          : 3;

                  return (
                    <div
                      key={label}
                      className="flex-1"
                    >
                      <div
                        className={`mb-2 h-[3px] rounded-full ${
                          index <= activeIndex
                            ? 'bg-[#84A4B1]'
                            : 'bg-white/15'
                        }`}
                      />

                      <span className="text-[11px] text-white/60">
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* SELECTED CONSULTATION SUMMARY */}

              <div className="mb-8 rounded-[16px] border border-white/10 bg-[#152742]/85 p-6 backdrop-blur-[2px]">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-[#84A4B1]">
                      الاستشارة المختارة
                    </span>

                    <h3 className="mt-2 text-[20px] font-bold leading-7 text-white">
                      {selectedConsultation.title}
                    </h3>

                    <p className="mt-2 text-[12px] text-white/60">
                      {selectedConsultation.durationMinutes} دقيقة
                    </p>
                  </div>

                  <p className="text-[22px] font-bold text-white">
                    {currentPrice}{' '}
                    <span className="text-[12px] font-normal">
                      د.ك
                    </span>
                  </p>
                </div>

                {/* PRICING MODE */}

                {bookingStep === 'form' &&
                  selectedConsultation.isSupportedEligible && (
                    <div className="mt-6 border-t border-white/10 pt-5">
                      <p className="mb-3 text-[12px] text-white/70">
                        نوع السعر
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            setPriceMode('standard')
                          }
                          aria-pressed={
                            priceMode === 'standard'
                          }
                          className={`rounded-full px-4 py-2.5 text-[12px] transition-colors ${
                            priceMode === 'standard'
                              ? 'bg-[#84A4B1] text-[#1D2C4F]'
                              : 'border border-white/20 text-white/75'
                          }`}
                        >
                          القياسي —{' '}
                          {selectedConsultation.priceKWD} د.ك
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            setPriceMode('supported')
                          }
                          aria-pressed={
                            priceMode === 'supported'
                          }
                          className={`rounded-full px-4 py-2.5 text-[12px] transition-colors ${
                            priceMode === 'supported'
                              ? 'bg-[#84A4B1] text-[#1D2C4F]'
                              : 'border border-white/20 text-white/75'
                          }`}
                        >
                          المدعوم —{' '}
                          {selectedConsultation.supportedPriceKWD}{' '}
                          د.ك
                        </button>
                      </div>
                    </div>
                  )}
              </div>

              {/* ================= FORM ================= */}

              {bookingStep === 'form' && (
                <form
                  onSubmit={handleReview}
                  className="space-y-6"
                >
                  {/* NAME AND PHONE */}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="الاسم الكامل" required>
                      <input
                        className={inputClass}
                        autoComplete="name"
                        required
                        minLength={2}
                        value={formData.fullName}
                        onChange={(event) =>
                          updateField(
                            'fullName',
                            event.target.value
                          )
                        }
                      />
                    </Field>

                    <Field label="رقم الهاتف" required>
                      <input
                        className={inputClass}
                        type="tel"
                        dir="ltr"
                        autoComplete="tel"
                        required
                        value={formData.phone}
                        onChange={(event) =>
                          updateField(
                            'phone',
                            event.target.value
                          )
                        }
                      />
                    </Field>
                  </div>

                  {/* EMAIL */}

                  <Field label="البريد الإلكتروني" required>
                    <input
                      className={inputClass}
                      type="email"
                      dir="ltr"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={(event) =>
                        updateField(
                          'email',
                          event.target.value
                        )
                      }
                    />
                  </Field>

                  {/* DATE AND TIME */}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="التاريخ المفضل" required>
                      <input
                        className={inputClass}
                        type="date"
                        dir="ltr"
                        min={getLocalDate()}
                        required
                        value={formData.preferredDate}
                        onChange={(event) =>
                          updateField(
                            'preferredDate',
                            event.target.value
                          )
                        }
                      />
                    </Field>

                    <Field
                      label="الفترة الزمنية المفضلة"
                      required
                    >
                      <select
                        className={inputClass}
                        required
                        value={formData.preferredTime}
                        onChange={(event) =>
                          updateField(
                            'preferredTime',
                            event.target.value
                          )
                        }
                      >
                        <option value="">اختر الفترة</option>

                        {TIME_OPTIONS.map((option) => (
                          <option
                            key={option.value}
                            value={option.value}
                          >
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <p className="text-[11px] leading-6 text-white/55">
                    الفترات المعروضة تفضيلات أولية فقط،
                    وليست مواعيد متاحة أو مؤكدة.
                  </p>

                  {/* RELATIONSHIP AND EXPERIENCE */}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="علاقتك السابقة بفنر">
                      <select
                        className={inputClass}
                        value={formData.previousRelationship}
                        onChange={(event) =>
                          updateField(
                            'previousRelationship',
                            event.target.value
                          )
                        }
                      >
                        <option value="">اختر...</option>
                        <option value="none">
                          لا توجد علاقة سابقة
                        </option>
                        <option value="student">
                          مشترك سابق أو حالي
                        </option>
                        <option value="consultation">
                          استشارة سابقة
                        </option>
                        <option value="other">أخرى</option>
                      </select>
                    </Field>

                    <Field label="مستوى الخبرة">
                      <select
                        className={inputClass}
                        value={formData.experienceLevel}
                        onChange={(event) =>
                          updateField(
                            'experienceLevel',
                            event.target.value
                          )
                        }
                      >
                        <option value="">اختر...</option>
                        <option value="beginner">مبتدئ</option>
                        <option value="intermediate">متوسط</option>
                        <option value="advanced">متقدم</option>
                        <option value="professional">محترف</option>
                      </select>
                    </Field>
                  </div>

                  {/* REASON */}

                  <Field label="سبب طلب الاستشارة" required>
                    <textarea
                      className={inputClass}
                      rows={4}
                      required
                      value={formData.reason}
                      onChange={(event) =>
                        updateField(
                          'reason',
                          event.target.value
                        )
                      }
                      placeholder="اشرح بإيجاز سبب طلب الاستشارة..."
                    />
                  </Field>

                  {/* MAIN TOPICS */}

                  <Field label="أهم الأسئلة أو المواضيع" required>
                    <textarea
                      className={inputClass}
                      rows={4}
                      required
                      value={formData.mainTopics}
                      onChange={(event) =>
                        updateField(
                          'mainTopics',
                          event.target.value
                        )
                      }
                      placeholder="ما المواضيع التي ترغب في مناقشتها؟"
                    />
                  </Field>

                  {/* CAPITAL */}

                  {selectedConsultation.mayLeadToPartnership && (
                    <Field label="حجم رأس المال أو المحفظة (اختياري)">
                      <input
                        className={inputClass}
                        value={formData.capitalRange}
                        onChange={(event) =>
                          updateField(
                            'capitalRange',
                            event.target.value
                          )
                        }
                        placeholder="مثال: 15,000 د.ك"
                      />
                    </Field>
                  )}

                  {/* SUPPORTED PRICING ELIGIBILITY */}

                  {isSupported && (
                    <div className="rounded-[12px] border border-[#84A4B1]/30 bg-[#84A4B1]/10 p-5">
                      <h4 className="mb-3 text-[14px] font-bold text-white">
                        طلب السعر المدعوم
                      </h4>

                      <p className="mb-5 text-[12px] leading-7 text-white/75">
                        مخصص للطلاب أو الأفراد الذين لا يتجاوز
                        دخلهم الشهري أو إعانتهم{' '}
                        {SUPPORTED_PRICING_INCOME_THRESHOLD_KWD} د.ك.
                        المواعيد محدودة، وقد يُطلب إثبات
                        الاستحقاق لاحقاً.
                      </p>

                      <label className="flex cursor-pointer items-start gap-3">
                        <input
                          type="checkbox"
                          className="mt-1 h-4 w-4 accent-[#84A4B1]"
                          checked={formData.supportedEligibility}
                          onChange={(event) =>
                            updateField(
                              'supportedEligibility',
                              event.target.checked
                            )
                          }
                        />

                        <span className="text-[12px] leading-7 text-white/85">
                          أؤكد أنني أستوفي شروط طلب السعر
                          المدعوم، وأفهم أن الموافقة عليه
                          ليست تلقائية.
                        </span>
                      </label>
                    </div>
                  )}

                  {/* PRIVACY AGREEMENT */}

                  <div className="border-t border-white/10 pt-6">
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 accent-[#84A4B1]"
                        checked={formData.privacyAccepted}
                        onChange={(event) =>
                          updateField(
                            'privacyAccepted',
                            event.target.checked
                          )
                        }
                        required
                      />

                      <span className="text-[12px] leading-7 text-white/70">
                        أوافق على استخدام البيانات المقدمة
                        لغرض معالجة طلب الاستشارة، وفق
                        سياسة الخصوصية عند تفعيل
                        استقبال الطلبات.
                      </span>
                    </label>
                  </div>

                  {/* VALIDATION ERROR */}

                  {formError && (
                    <p
                      role="alert"
                      className="rounded-[10px] border border-red-300/30 bg-red-400/10 p-4 text-[12px] text-red-200"
                    >
                      {formError}
                    </p>
                  )}

                  {/* REVIEW BUTTON */}

                  <button
                    type="submit"
                    className="min-h-[54px] w-full rounded-full bg-[#F3F3F1] px-8 text-[14px] font-bold text-[#1D2C4F] transition-colors hover:bg-[#84A4B1] sm:w-auto"
                  >
                    مراجعة الطلب ←
                  </button>
                </form>
              )}

              {/* ====================================================
                  REVIEW — FNAR WATERMARK ONLY HERE
                  LARGE, BOTTOM-RIGHT, BEHIND CONTENT
                  ==================================================== */}

              {bookingStep === 'review' && (
                <div className="relative isolate overflow-hidden rounded-[16px] border border-white/10 bg-[#152742]/90 p-6 sm:p-8">

                  {/* FNAR WATERMARK — LARGE BOTTOM-RIGHT */}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 right-0 z-0 h-[65%] w-[85%] overflow-hidden"
                  >
                    <img
                      src="/images/fnar-background-light.png"
                      alt=""
                      draggable={false}
                      className="
                        absolute
                        bottom-0
                        right-0
                        block
                        h-full
                        w-full
                        select-none
                        object-contain
                        object-right-bottom
                        opacity-[0.18]
                        mix-blend-screen
                      "
                    />
                  </div>

                  {/* REVIEW CONTENT ABOVE WATERMARK */}

                  <div className="relative z-10">
                    <h3 className="mb-3 text-[22px] font-bold text-white">
                      مراجعة بيانات الاستشارة
                    </h3>

                    <p className="mb-7 text-[13px] leading-7 text-white/65">
                      راجع التفاصيل قبل الانتقال إلى محاكاة الدفع.
                    </p>

                    <div className="divide-y divide-white/10">
                      <ReviewRow
                        label="الاستشارة"
                        value={selectedConsultation.title}
                      />

                      <ReviewRow
                        label="السعر المعروض"
                        value={`${currentPrice} د.ك${
                          isSupported ? ' — طلب سعر مدعوم' : ''
                        }`}
                      />

                      <ReviewRow
                        label="الاسم"
                        value={formData.fullName}
                      />

                      <ReviewRow
                        label="الهاتف"
                        value={formData.phone}
                      />

                      <ReviewRow
                        label="البريد"
                        value={formData.email}
                      />

                      <ReviewRow
                        label="التاريخ المفضل"
                        value={formData.preferredDate}
                      />

                      <ReviewRow
                        label="الفترة المفضلة"
                        value={
                          TIME_OPTIONS.find(
                            (option) =>
                              option.value === formData.preferredTime
                          )?.label || ''
                        }
                      />

                      <ReviewRow
                        label="سبب الاستشارة"
                        value={formData.reason}
                      />

                      <ReviewRow
                        label="المواضيع"
                        value={formData.mainTopics}
                      />

                      {formData.capitalRange && (
                        <ReviewRow
                          label="حجم المحفظة"
                          value={formData.capitalRange}
                        />
                      )}
                    </div>

                    <div className="mt-8 rounded-[10px] border border-[#84A4B1]/25 bg-[#84A4B1]/10 p-4">
                      <p className="text-[12px] leading-7 text-white/75">
                        وضع تجريبي: لا يتم تحصيل أي أموال أو
                        إرسال بيانات أو تأكيد موعد. السعر
                        المدعوم يخضع لمراجعة الأهلية.
                      </p>
                    </div>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={() => setBookingStep('payment')}
                        className="min-h-[50px] rounded-full bg-[#F3F3F1] px-7 text-[13px] font-bold text-[#1D2C4F] transition-colors hover:bg-[#84A4B1]"
                      >
                        المتابعة إلى الدفع التجريبي
                      </button>

                      <button
                        type="button"
                        onClick={() => setBookingStep('form')}
                        className="min-h-[50px] rounded-full border border-white/20 px-7 text-[13px] text-white transition-colors hover:border-[#84A4B1]"
                      >
                        تعديل البيانات
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ================= PAYMENT ================= */}

              {bookingStep === 'payment' && (
                <div className="rounded-[16px] border border-white/10 bg-[#152742]/90 p-6 sm:p-8">
                  <h3 className="mb-4 text-[22px] font-bold text-white">
                    الدفع التجريبي
                  </h3>

                  <p className="mb-6 text-[13px] leading-7 text-white/65">
                    هذه محاكاة لواجهة الدفع فقط. لن تُخصم
                    أموال ولن يُنشأ حجز فعلي. لا تُدخل
                    بيانات بطاقة مصرفية.
                  </p>

                  <div className="divide-y divide-white/10 rounded-xl border border-white/10 p-5">
                    <ReviewRow
                      label="الاستشارة"
                      value={selectedConsultation.title}
                    />

                    <ReviewRow
                      label="المدة"
                      value={`${selectedConsultation.durationMinutes} دقيقة`}
                    />

                    <ReviewRow
                      label="نوع السعر"
                      value={
                        isSupported
                          ? 'مدعوم — خاضع للتحقق'
                          : 'قياسي'
                      }
                    />

                    <ReviewRow
                      label="المبلغ الإجمالي (تجريبي)"
                      value={`${currentPrice} د.ك`}
                    />
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => handleDemoPayment('success')}
                      className="min-h-[50px] rounded-full bg-[#F3F3F1] px-6 text-[13px] font-bold text-[#1D2C4F] hover:bg-[#84A4B1]"
                    >
                      محاكاة دفع ناجح
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDemoPayment('failure')}
                      className="min-h-[50px] rounded-full border border-red-300/40 px-6 text-[13px] text-white hover:bg-white/10"
                    >
                      محاكاة فشل الدفع
                    </button>

                    <button
                      type="button"
                      onClick={() => setBookingStep('review')}
                      className="min-h-[50px] rounded-full border border-white/20 px-6 text-[13px] text-white hover:bg-white/10"
                    >
                      العودة للمراجعة
                    </button>
                  </div>
                </div>
              )}

              {/* ================= PAYMENT FAILED ================= */}

              {bookingStep === 'paymentFailed' && (
                <div
                  role="alert"
                  className="rounded-[16px] border border-red-300/30 bg-[#152742]/90 p-8 text-center"
                >
                  <h3 className="mb-3 text-[22px] font-bold text-white">
                    فشلت عملية الدفع التجريبية
                  </h3>

                  <p className="mb-7 text-[13px] leading-7 text-white/70">
                    لم يتم تحصيل أي مبلغ أو إنشاء طلب
                    استشارة. يمكنك إعادة المحاولة.
                  </p>

                  <div className="flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setBookingStep('payment')}
                      className="min-h-[48px] rounded-full bg-[#F3F3F1] px-7 text-[13px] font-bold text-[#1D2C4F]"
                    >
                      إعادة المحاولة
                    </button>

                    <button
                      type="button"
                      onClick={resetBooking}
                      className="min-h-[48px] rounded-full border border-white/20 px-7 text-[13px] text-white"
                    >
                      إلغاء والعودة للاستشارات
                    </button>
                  </div>
                </div>
              )}

              {/* ================= SUBMITTED ================= */}

              {bookingStep === 'submitted' && (
                <div
                  role="status"
                  className="rounded-[16px] border border-[#84A4B1]/25 bg-[#152742]/90 p-8 text-center sm:p-12"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#84A4B1]/40 text-[26px] text-[#84A4B1]">
                    ✓
                  </div>

                  <h3 className="mb-4 text-[24px] font-bold text-white">
                    نجحت محاكاة الدفع
                  </h3>

                  <p className="mx-auto mb-8 max-w-[490px] text-[14px] leading-8 text-white/70">
                    تمت محاكاة الدفع بنجاح، وطلب الاستشارة
                    معروض كتجربة فقط بانتظار تأكيد الموعد.
                    لم يتم خصم أموال أو إرسال طلب أو تأكيد
                    حجز فعلي. وإذا اخترت السعر المدعوم،
                    فلا تزال الأهلية خاضعة للمراجعة.
                  </p>

                  <button
                    type="button"
                    onClick={resetBooking}
                    className="min-h-[48px] rounded-full border border-[#84A4B1]/40 px-7 text-[13px] text-white transition-colors hover:bg-[#84A4B1]/10"
                  >
                    العودة إلى الاستشارات
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

      {/* ================= SUPPORTED PRICING ================= */}

      {bookingStep === 'select' && (
        <>
          <section className="bg-[#0F1E36] px-5 py-20 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-[900px]">
              <SectionEyebrow label="السعر المدعوم" />

              <h2 className="mb-5 text-[clamp(1.8rem,3.5vw,2.7rem)] font-bold leading-[1.5] text-white">
                سعر مدعوم لمن يحتاجه.
              </h2>

              <p className="mb-10 max-w-[620px] text-[14px] leading-8 text-white/70">
                يوفر فنر عدداً محدوداً من المواعيد
                المدعومة للطلاب والأفراد الذين لا يتجاوز
                دخلهم أو إعانتهم الشهرية{' '}
                {SUPPORTED_PRICING_INCOME_THRESHOLD_KWD} د.ك.
                قد يتطلب الطلب إثباتاً بسيطاً للاستحقاق.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {supportedConsultations.map((consultation) => (
                  <div
                    key={consultation.id}
                    className="rounded-[14px] border border-white/10 bg-[#152742] p-6"
                  >
                    <h3 className="mb-5 text-[16px] font-bold leading-7 text-white">
                      {consultation.title}
                    </h3>

                    <div className="mb-6 flex justify-between gap-4">
                      <div>
                        <span className="text-[11px] text-white/50">
                          السعر القياسي
                        </span>

                        <p className="mt-2 text-[18px] text-white/75">
                          {consultation.priceKWD} د.ك
                        </p>
                      </div>

                      <div>
                        <span className="text-[11px] text-[#84A4B1]">
                          السعر المدعوم
                        </span>

                        <p className="mt-2 text-[22px] font-bold text-[#84A4B1]">
                          {consultation.supportedPriceKWD} د.ك
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        selectConsultation(
                          consultation,
                          'supported'
                        )
                      }
                      className="min-h-[44px] rounded-full border border-[#84A4B1]/40 px-5 text-[12px] text-white transition-colors hover:bg-[#84A4B1]/15"
                    >
                      طلب السعر المدعوم ←
                    </button>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-[11px] leading-7 text-white/50">
                السعر المدعوم ليس عرضاً ترويجياً، ولا
                يشمل الاستشارات الأخرى. الأهلية
                والتوفر يخضعان للمراجعة.
              </p>
            </div>
          </section>

          {/* ================= FOLLOW-UP SESSIONS ================= */}

          <section className="bg-[#F3F3F1] px-5 py-20 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-[900px]">
              <SectionEyebrow label="جلسات المتابعة" dark />

              <h2 className="mb-5 text-[clamp(1.8rem,3.5vw,2.7rem)] font-bold leading-[1.5] text-[#1D2C4F]">
                متابعة بعد الاستشارة الأولية.
              </h2>

              <p className="mb-10 max-w-[620px] text-[14px] leading-8 text-[#1D2C4F]/65">
                جلسات منفصلة لمتابعة ما تمت مناقشته
                في استشارة سابقة. لا تتوفر تلقائياً
                للزوار الجدد.
                {FOLLOW_UP_ELIGIBILITY_WINDOW_DAYS !== null
                  ? ` ويمكن طلب المتابعة خلال ${FOLLOW_UP_ELIGIBILITY_WINDOW_DAYS} يوماً من الجلسة الأصلية.`
                  : ' مدة أهلية المتابعة قيد التحديد.'}
              </p>

              <div className="border-t border-[#1D2C4F]/10">
                {FOLLOW_UP_SESSIONS.map((session) => (
                  <div
                    key={session.id}
                    className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1D2C4F]/10 py-6"
                  >
                    <div>
                      <h3 className="text-[15px] font-semibold leading-7 text-[#1D2C4F]">
                        {session.title}
                      </h3>

                      <p className="mt-1 text-[12px] text-[#1D2C4F]/55">
                        {session.durationMinutes} دقيقة
                      </p>
                    </div>

                    <p className="text-[20px] font-bold text-[#1D2C4F]">
                      {session.priceKWD}{' '}
                      <span className="text-[12px] font-normal">
                        د.ك
                      </span>
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-[12px] leading-7 text-[#1D2C4F]/55">
                يتم ترتيب جلسات المتابعة بعد التحقق
                من الاستشارة السابقة والأهلية،
                ولا يتوفر لها حجز مباشر حالياً.
              </p>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

/* ================= SHARED UI ================= */

function SectionEyebrow({
  label,
  dark = false,
}: {
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-9 bg-[#84A4B1]" />

      <span
        className={`text-[11px] font-medium ${
          dark ? 'text-[#54707D]' : 'text-[#84A4B1]'
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function Field({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 text-[12px] font-medium text-white/75">
        {label}

        {required && (
          <span className="mr-1 text-[#84A4B1]">
            *
          </span>
        )}
      </div>

      {children}
    </div>
  );
}

function ReviewRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="grid gap-2 py-4 sm:grid-cols-[160px_1fr]">
      <span className="text-[12px] text-white/50">
        {label}
      </span>

      <span className="break-words whitespace-pre-wrap text-[13px] leading-7 text-white/90">
        {value}
      </span>
    </div>
  );
}
