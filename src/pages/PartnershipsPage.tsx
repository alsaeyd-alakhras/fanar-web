
import { useEffect, useRef, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import PageHero from '@/components/ui/PageHero';
// import {
//   PARTNERSHIP_CATEGORIES,
//   PARTNERS,
//   PARTNERSHIP_MINIMUM_CAPITAL_KWD,
// } from '@/data/content';
import {
  PARTNERSHIP_MINIMUM_CAPITAL_KWD,
} from '@/data/content';

import { useCMSContent } from '@/hooks/useCMSContent';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

type ApplicationStep = 'form' | 'review' | 'completed';

type ApplicationData = {
  fullName: string;
  companyName: string;
  position: string;
  phone: string;
  email: string;
  website: string;
  socialLinks: string;
  applicantType: string;
  cooperationType: string;
  introduction: string;
  proposal: string;
  capitalRange: string;
  experience: string;
  audienceSize: string;
  privacyAccepted: boolean;
};

const INITIAL_FORM: ApplicationData = {
  fullName: '',
  companyName: '',
  position: '',
  phone: '',
  email: '',
  website: '',
  socialLinks: '',
  applicantType: '',
  cooperationType: '',
  introduction: '',
  proposal: '',
  capitalRange: '',
  experience: '',
  audienceSize: '',
  privacyAccepted: false,
};

const inputClass =
  'w-full min-h-[48px] rounded-[10px] ' +
  'border border-[#1D2C4F]/15 bg-white px-4 py-3 ' +
  'font-arabic text-[13px] text-[#1D2C4F] ' +
  'outline-none transition-colors focus:border-[#84A4B1] ' +
  'focus:ring-2 focus:ring-[#84A4B1]/15 ' +
  'placeholder:text-[#1D2C4F]/35';

const APPLICANT_TYPES = [
  { value: 'company', label: 'شركة / مؤسسة' },
  { value: 'investor', label: 'مستثمر' },
  { value: 'influencer', label: 'مؤثر / صانع محتوى' },
  { value: 'expert', label: 'خبير / متخصص' },
  { value: 'individual', label: 'فرد' },
  { value: 'other', label: 'أخرى' },
];

const STRATEGIC_COOPERATION_TYPES = [
  { value: 'capital', label: 'تعاون مرتبط برأس المال' },
  { value: 'business', label: 'شراكة أعمال استراتيجية' },
  { value: 'institutional', label: 'تعاون مؤسسي' },
  { value: 'other', label: 'أخرى' },
];

const COLLABORATION_TYPES = [
  { value: 'content', label: 'محتوى وتعاون إعلامي' },
  { value: 'marketing', label: 'تسويق وشراكة تجارية' },
  { value: 'educational', label: 'تعاون تعليمي' },
  { value: 'expertise', label: 'تعاون مهني أو تخصصي' },
  { value: 'other', label: 'أخرى' },
];

function getOptionLabel(
  options: { value: string; label: string }[],
  value: string
) {
  return (
    options.find((option) => option.value === value)?.label || value
  );
}

export default function PartnershipsPage() {
  const {
    partnershipCategories: PARTNERSHIP_CATEGORIES,
    partners: PARTNERS,
  } = useCMSContent();

  const pageRef = useRef<HTMLDivElement | null>(null);
  const formSectionRef = useRef<HTMLElement | null>(null);

  const reduced = useReducedMotion();

  const [selectedCategory, setSelectedCategory] = useState<string>(
    PARTNERSHIP_CATEGORIES[0]?.id || 'strategic'
  );

  useEffect(() => {
  if (
    PARTNERSHIP_CATEGORIES.length > 0 &&
    !PARTNERSHIP_CATEGORIES.some(
      (category) => category.id === selectedCategory
    )
  ) {
    setSelectedCategory(PARTNERSHIP_CATEGORIES[0].id);
    setStep('form');
  }
}, [PARTNERSHIP_CATEGORIES, selectedCategory]);

  const [step, setStep] = useState<ApplicationStep>('form');
  const [formData, setFormData] = useState<ApplicationData>(INITIAL_FORM);
  const [formError, setFormError] = useState('');

  const selectedCat =
    PARTNERSHIP_CATEGORIES.find(
      (category) => category.id === selectedCategory
    ) || PARTNERSHIP_CATEGORIES[0];

  const isStrategic = Boolean(selectedCat?.requiresCapital);

  const cooperationOptions = isStrategic
    ? STRATEGIC_COOPERATION_TYPES
    : COLLABORATION_TYPES;

  const strategicPartners = PARTNERS.filter(
    (partner) => partner.category === 'strategic'
  );

  const collaborationPartners = PARTNERS.filter(
    (partner) => partner.category === 'collaboration'
  );

  // REVEAL ANIMATIONS

  useEffect(() => {
    if (reduced || !pageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>('[data-part-reveal]')
        .forEach((element) => {
          gsap.fromTo(
            element,
            { y: 28, opacity: 0 },
            {
              y: 0,
              opacity: 1,
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
    }, pageRef);

    return () => ctx.revert();
  }, [reduced]);

  // SCROLL TO APPLICATION WHEN STEP CHANGES

  useEffect(() => {
    if (step === 'form') return;

    const frame = requestAnimationFrame(() => {
      formSectionRef.current?.scrollIntoView({
        behavior: reduced ? 'auto' : 'smooth',
        block: 'start',
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [step, reduced]);

  const scrollToForm = () => {
    requestAnimationFrame(() => {
      formSectionRef.current?.scrollIntoView({
        behavior: reduced ? 'auto' : 'smooth',
        block: 'start',
      });
    });
  };

  const updateField = <K extends keyof ApplicationData>(
    field: K,
    value: ApplicationData[K]
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setFormError('');
  };

  const handleCategorySelect = (categoryId: string) => {
    const category = PARTNERSHIP_CATEGORIES.find(
      (item) => item.id === categoryId
    );

    if (!category) return;

    setSelectedCategory(categoryId);
    setStep('form');
    setFormError('');

    setFormData((previous) => ({
      ...INITIAL_FORM,
      fullName: previous.fullName,
      phone: previous.phone,
      email: previous.email,
      companyName: previous.companyName,
      position: previous.position,
      website: previous.website,
      socialLinks: previous.socialLinks,
    }));

    scrollToForm();
  };

  const validateForm = () => {
    if (
      !formData.fullName.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.applicantType ||
      !formData.cooperationType ||
      !formData.introduction.trim() ||
      !formData.proposal.trim()
    ) {
      return 'يرجى تعبئة جميع الحقول المطلوبة.';
    }

    if (formData.fullName.trim().length < 2) {
      return 'يرجى إدخال الاسم الكامل بشكل صحيح.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      return 'يرجى إدخال بريد إلكتروني صحيح.';
    }

    if (!/^\+?[\d\s()-]{7,20}$/.test(formData.phone.trim())) {
      return 'يرجى إدخال رقم هاتف صحيح.';
    }

    if (formData.introduction.trim().length < 20) {
      return 'يرجى كتابة تعريف موجز لا يقل عن 20 حرفاً.';
    }

    if (formData.proposal.trim().length < 30) {
      return 'يرجى توضيح عرض الشراكة في 30 حرفاً على الأقل.';
    }

    if (
      formData.website.trim() &&
      !/^https?:\/\/\S+\.\S+/i.test(formData.website.trim())
    ) {
      return 'يرجى إدخال رابط الموقع الإلكتروني كاملاً، يبدأ بـ https://';
    }

    if (!isStrategic && !formData.experience.trim()) {
      return 'يرجى توضيح خبرتك أو تخصصك.';
    }

    if (!formData.privacyAccepted) {
      return 'يرجى الموافقة على استخدام البيانات لغرض معالجة طلب الشراكة.';
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

    setStep('review');
  };

  const handleDemoCompletion = () => {
    // Frontend-only demonstration.
    // No data is transmitted, stored, or submitted.
    setStep('completed');
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setFormError('');
    setStep('form');
    scrollToForm();
  };

  return (
    <div ref={pageRef} dir="rtl" className="font-arabic">
      {/* PAGE HERO */}

      <PageHero
        eyebrow="الشراكات"
        title="فرص للتعاون الاستراتيجي والمهني."
        subtitle="مساران: شراكات استراتيجية للشركات وأصحاب رؤوس الأموال، وشراكات تعاون للمؤثرين والخبراء والمتخصصين وأصحاب العروض المناسبة."
        variant="navy"
      />

      {/* PARTNERSHIP PATHWAYS */}

      <section className="relative overflow-hidden bg-[#0F1E36] px-5 pb-20 pt-10 sm:px-6 lg:px-10 lg:pb-24 lg:pt-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(132,164,177,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(132,164,177,.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <div data-part-reveal className="mb-10">
            <Eyebrow label="المسارات" />

            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.5] text-[#F3F3F1]">
            {PARTNERSHIP_CATEGORIES.length} مسارات للشراكة.
            </h2>

            <p className="mt-3 max-w-[580px] text-[13px] leading-8 text-white/60">
              اختر المسار الأنسب لطبيعة التعاون الذي ترغب في تقديمه.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {PARTNERSHIP_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  data-part-reveal
                  onClick={() => handleCategorySelect(category.id)}
                  aria-pressed={isSelected}
                  className={`group relative flex w-full flex-col overflow-hidden rounded-[20px] border p-7 text-right transition-[background-color,border-color] duration-300 sm:p-9 ${
                    isSelected
                      ? 'border-[#84A4B1]/50 bg-[#152742]'
                      : 'border-white/10 bg-[#152742]/50 hover:border-[#84A4B1]/30'
                  }`}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="font-sans text-[36px] font-bold leading-none text-[#84A4B1]/50">
                      {category.number}
                    </span>

                    <span className="text-[11px] font-medium text-[#84A4B1]">
                      {category.subtitle}
                    </span>
                  </div>

                  <h3 className="mb-4 text-[22px] font-bold leading-[1.5] text-white">
                    {category.title}
                  </h3>

                  <p className="mb-6 text-[13px] leading-8 text-white/65">
                    {category.description}
                  </p>

                  {category.requiresCapital &&
                    category.minimumCapitalKWD != null && (
                      <div className="mb-6 border-r-2 border-[#84A4B1]/50 py-1 pr-4">
                        <p className="mb-2 text-[11px] text-white/60">
                          الحد الأدنى لرأس المال المخصص للعمل
                        </p>

                        <p className="text-[21px] font-bold text-white">
                          {category.minimumCapitalKWD.toLocaleString(
                            'en-US'
                          )}{' '}
                          د.ك
                        </p>

                        <p className="mt-2 text-[11px] leading-6 text-white/55">
                          رأس المال يبقى في محفظة العميل.
                          استيفاء الحد الأدنى لا يضمن القبول.
                        </p>
                      </div>
                    )}

                  <div className="mb-8 flex flex-wrap gap-2">
                    {category.audiences.map((audience) => (
                      <span
                        key={audience}
                        className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] text-white/65"
                      >
                        {audience}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-[12px] font-semibold text-[#84A4B1]">
                      {isSelected
                        ? 'المسار المحدد'
                        : 'اختر هذا المسار'}
                    </span>

                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#84A4B1]/30 text-[#84A4B1] transition-transform group-hover:-translate-x-1"
                    >
                      ←
                    </span>
                  </div>

                  {isSelected && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#84A4B1]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPLICATION SECTION — NO BACKGROUND LOGO HERE */}

      <section
        ref={formSectionRef}
        className="relative scroll-mt-[120px] bg-[#F3F3F1] px-5 py-16 sm:px-6 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[820px]">
          <div className="mb-8">
            <Eyebrow label="طلب شراكة" dark />

            <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-bold leading-[1.5] text-[#1D2C4F]">
              {step === 'form'
                ? 'قدم طلبك للشراكة.'
                : step === 'review'
                  ? 'راجع تفاصيل طلبك.'
                  : 'اكتملت تجربة تقديم الطلب.'}
            </h2>

            <p className="mt-3 text-[13px] leading-7 text-[#1D2C4F]/65">
              المسار المحدد:{' '}
              <strong className="text-[#1D2C4F]">
                {selectedCat.title}
              </strong>
            </p>
          </div>

          {/* PROGRESS */}

          <div className="mb-9 grid grid-cols-3 gap-3">
            {['البيانات', 'المراجعة', 'الانتهاء'].map(
              (label, index) => {
                const currentIndex =
                  step === 'form'
                    ? 0
                    : step === 'review'
                      ? 1
                      : 2;

                return (
                  <div key={label}>
                    <div
                      className={`mb-2 h-[3px] rounded-full ${
                        index <= currentIndex
                          ? 'bg-[#54707D]'
                          : 'bg-[#1D2C4F]/10'
                      }`}
                    />

                    <span className="text-[11px] text-[#1D2C4F]/55">
                      {label}
                    </span>
                  </div>
                );
              }
            )}
          </div>

          {/* APPLICATION FORM */}

          {step === 'form' && (
            <form
              onSubmit={handleReview}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField label="الاسم الكامل" required>
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
                </FormField>

                <FormField label="رقم الهاتف" required>
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
                </FormField>
              </div>

              <FormField label="البريد الإلكتروني" required>
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
              </FormField>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField
                  label={
                    isStrategic
                      ? 'اسم الشركة أو المؤسسة'
                      : 'اسم الشركة أو الجهة (اختياري)'
                  }
                >
                  <input
                    className={inputClass}
                    value={formData.companyName}
                    onChange={(event) =>
                      updateField(
                        'companyName',
                        event.target.value
                      )
                    }
                  />
                </FormField>

                <FormField label="المسمى الوظيفي أو الدور">
                  <input
                    className={inputClass}
                    value={formData.position}
                    onChange={(event) =>
                      updateField(
                        'position',
                        event.target.value
                      )
                    }
                  />
                </FormField>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField label="الموقع الإلكتروني (اختياري)">
                  <input
                    className={inputClass}
                    type="url"
                    dir="ltr"
                    placeholder="https://example.com"
                    value={formData.website}
                    onChange={(event) =>
                      updateField(
                        'website',
                        event.target.value
                      )
                    }
                  />
                </FormField>

                <FormField label="روابط التواصل الاجتماعي (اختياري)">
                  <input
                    className={inputClass}
                    dir="ltr"
                    placeholder="Instagram / LinkedIn / X"
                    value={formData.socialLinks}
                    onChange={(event) =>
                      updateField(
                        'socialLinks',
                        event.target.value
                      )
                    }
                  />
                </FormField>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField label="نوع المتقدم" required>
                  <select
                    className={inputClass}
                    required
                    value={formData.applicantType}
                    onChange={(event) =>
                      updateField(
                        'applicantType',
                        event.target.value
                      )
                    }
                  >
                    <option value="">
                      اختر نوع المتقدم
                    </option>

                    {APPLICANT_TYPES.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField label="نوع التعاون المقترح" required>
                  <select
                    className={inputClass}
                    required
                    value={formData.cooperationType}
                    onChange={(event) =>
                      updateField(
                        'cooperationType',
                        event.target.value
                      )
                    }
                  >
                    <option value="">
                      اختر نوع التعاون
                    </option>

                    {cooperationOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </FormField>
              </div>

              {/* STRATEGIC-SPECIFIC FIELDS */}

              {isStrategic && (
                <div className="rounded-[14px] border border-[#1D2C4F]/10 bg-white p-5 sm:p-6">
                  <h3 className="mb-3 text-[16px] font-bold text-[#1D2C4F]">
                    تفاصيل الشراكة الاستراتيجية
                  </h3>

                  <p className="mb-6 text-[12px] leading-7 text-[#1D2C4F]/60">
                    يساعدنا هذا الجزء على فهم طبيعة التعاون
                    المقترح، ولا يمثل موافقة مبدئية أو
                    التزاماً مالياً.
                  </p>

                  <FormField label="نطاق رأس المال المقترح (اختياري)">
                    <input
                      className={inputClass}
                      value={formData.capitalRange}
                      onChange={(event) =>
                        updateField(
                          'capitalRange',
                          event.target.value
                        )
                      }
                      placeholder="مثال: 15,000–30,000 د.ك"
                    />
                  </FormField>

                  <p className="mt-4 text-[11px] leading-7 text-[#1D2C4F]/55">
                    الحد الأدنى للتعاون المرتبط برأس المال هو{' '}
                    {(
                      selectedCat?.minimumCapitalKWD ??
                      PARTNERSHIP_MINIMUM_CAPITAL_KWD
                    ).toLocaleString('en-US')}{' '}
                    د.ك. رأس المال يبقى في محفظة العميل
                    أو الشركة، واستيفاء الحد الأدنى
                    لا يضمن القبول.
                  </p>
                </div>
              )}

              {/* COLLABORATION-SPECIFIC FIELDS */}

              {!isStrategic && (
                <div className="space-y-5 rounded-[14px] border border-[#1D2C4F]/10 bg-white p-5 sm:p-6">
                  <div>
                    <h3 className="mb-2 text-[16px] font-bold text-[#1D2C4F]">
                      تفاصيل التعاون المهني
                    </h3>

                    <p className="text-[12px] leading-7 text-[#1D2C4F]/60">
                      عرفنا بخبرتك أو مجالك والجمهور
                      الذي تخاطبه، إن كان ذلك مناسباً
                      لطبيعة التعاون.
                    </p>
                  </div>

                  <FormField label="الخبرة أو التخصص" required>
                    <textarea
                      className={inputClass}
                      rows={3}
                      required
                      value={formData.experience}
                      onChange={(event) =>
                        updateField(
                          'experience',
                          event.target.value
                        )
                      }
                      placeholder="اذكر مجال خبرتك وأبرز أعمالك..."
                    />
                  </FormField>

                  <FormField label="حجم الجمهور أو نطاق الوصول (اختياري)">
                    <input
                      className={inputClass}
                      value={formData.audienceSize}
                      onChange={(event) =>
                        updateField(
                          'audienceSize',
                          event.target.value
                        )
                      }
                      placeholder="إن كان التعاون متعلقاً بالمحتوى أو التسويق"
                    />
                  </FormField>
                </div>
              )}

              <FormField label="تعريف موجز عنك أو عن الجهة" required>
                <textarea
                  className={inputClass}
                  rows={4}
                  required
                  minLength={20}
                  value={formData.introduction}
                  onChange={(event) =>
                    updateField(
                      'introduction',
                      event.target.value
                    )
                  }
                  placeholder="من أنت، وما طبيعة عملك أو نشاطك؟"
                />
              </FormField>

              <FormField label="عرض الشراكة المقترح" required>
                <textarea
                  className={inputClass}
                  rows={5}
                  required
                  minLength={30}
                  value={formData.proposal}
                  onChange={(event) =>
                    updateField(
                      'proposal',
                      event.target.value
                    )
                  }
                  placeholder="ما فكرة التعاون، وما القيمة التي يمكن أن يقدمها للطرفين؟"
                />
              </FormField>

              <div className="border-t border-[#1D2C4F]/10 pt-6">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 accent-[#1D2C4F]"
                    checked={formData.privacyAccepted}
                    onChange={(event) =>
                      updateField(
                        'privacyAccepted',
                        event.target.checked
                      )
                    }
                    required
                  />

                  <span className="text-[12px] leading-7 text-[#1D2C4F]/70">
                    أوافق على استخدام المعلومات المقدمة
                    لغرض معالجة طلب الشراكة عند تفعيل
                    استقبال الطلبات، وأفهم أن تقديم
                    الطلب لا يضمن قبول الشراكة.
                  </span>
                </label>
              </div>

              {formError && (
                <p
                  role="alert"
                  className="rounded-[10px] border border-red-200 bg-red-50 p-4 text-[12px] text-red-700"
                >
                  {formError}
                </p>
              )}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="min-h-[52px] rounded-full bg-[#1D2C4F] px-8 text-[14px] font-bold text-white transition-colors hover:bg-[#54707D]"
                >
                  مراجعة طلب الشراكة ←
                </button>

                <span className="text-[11px] leading-6 text-[#1D2C4F]/55">
                  لن يتم إرسال أي بيانات في الوضع التجريبي.
                </span>
              </div>
            </form>
          )}

          {/* =====================================================
              REVIEW STEP — WATERMARK ONLY INSIDE THIS CARD
              ===================================================== */}

          {step === 'review' && (
            <div className="relative isolate overflow-hidden rounded-[16px] border border-[#1D2C4F]/10 bg-white p-6 sm:p-9">
              {/* FNAR WATERMARK BEHIND REVIEW DETAILS ONLY */}

<div
  aria-hidden="true"
  className="pointer-events-none absolute bottom-0 right-0 z-0 h-[65%] w-[85%] overflow-hidden"
>
  <img
    src="/images/fnar-background-dark.png"
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
    "
  />
</div>

              {/* REVIEW CONTENT ABOVE WATERMARK */}

              <div className="relative z-10">
                <h3 className="mb-3 text-[21px] font-bold text-[#1D2C4F]">
                  مراجعة طلب الشراكة
                </h3>

                <p className="mb-7 text-[13px] leading-7 text-[#1D2C4F]/60">
                  تحقق من البيانات التالية قبل إنهاء النموذج التجريبي.
                </p>

                <div className="divide-y divide-[#1D2C4F]/10">
                  <ReviewRow
                    label="مسار الشراكة"
                    value={selectedCat.title}
                  />

                  <ReviewRow
                    label="نوع المتقدم"
                    value={getOptionLabel(
                      APPLICANT_TYPES,
                      formData.applicantType
                    )}
                  />

                  <ReviewRow
                    label="نوع التعاون"
                    value={getOptionLabel(
                      cooperationOptions,
                      formData.cooperationType
                    )}
                  />

                  <ReviewRow
                    label="الاسم الكامل"
                    value={formData.fullName}
                  />

                  <ReviewRow
                    label="رقم الهاتف"
                    value={formData.phone}
                  />

                  <ReviewRow
                    label="البريد الإلكتروني"
                    value={formData.email}
                  />

                  {formData.companyName && (
                    <ReviewRow
                      label="الشركة أو المؤسسة"
                      value={formData.companyName}
                    />
                  )}

                  {formData.position && (
                    <ReviewRow
                      label="المسمى الوظيفي"
                      value={formData.position}
                    />
                  )}

                  {formData.website && (
                    <ReviewRow
                      label="الموقع الإلكتروني"
                      value={formData.website}
                    />
                  )}

                  {formData.socialLinks && (
                    <ReviewRow
                      label="روابط التواصل"
                      value={formData.socialLinks}
                    />
                  )}

                  {isStrategic && formData.capitalRange && (
                    <ReviewRow
                      label="نطاق رأس المال"
                      value={formData.capitalRange}
                    />
                  )}

                  {!isStrategic && (
                    <>
                      <ReviewRow
                        label="الخبرة أو التخصص"
                        value={formData.experience}
                      />

                      {formData.audienceSize && (
                        <ReviewRow
                          label="حجم الجمهور"
                          value={formData.audienceSize}
                        />
                      )}
                    </>
                  )}

                  <ReviewRow
                    label="التعريف"
                    value={formData.introduction}
                  />

                  <ReviewRow
                    label="عرض الشراكة"
                    value={formData.proposal}
                  />
                </div>

                <div className="mt-8 rounded-[10px] border border-[#84A4B1]/30 bg-[#84A4B1]/10 p-5">
                  <p className="text-[12px] leading-7 text-[#1D2C4F]/75">
                    <strong>تنبيه:</strong> هذه تجربة لواجهة
                    طلب الشراكة فقط. إنهاء النموذج
                    لن يرسل البيانات إلى فنر،
                    ولن ينشئ طلباً فعلياً.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleDemoCompletion}
                    className="min-h-[50px] rounded-full bg-[#1D2C4F] px-7 text-[13px] font-bold text-white transition-colors hover:bg-[#54707D]"
                  >
                    إنهاء النموذج التجريبي
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep('form')}
                    className="min-h-[50px] rounded-full border border-[#1D2C4F]/20 px-7 text-[13px] font-medium text-[#1D2C4F] transition-colors hover:bg-[#1D2C4F]/5"
                  >
                    تعديل البيانات
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* DEMO COMPLETION */}

          {step === 'completed' && (
            <div
              role="status"
              className="rounded-[16px] border border-[#84A4B1]/30 bg-white p-8 text-center sm:p-12"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#84A4B1]/30 bg-[#84A4B1]/10">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12L10 17L19 7"
                    stroke="#54707D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="mb-4 text-[23px] font-bold text-[#1D2C4F]">
                اكتمل النموذج التجريبي
              </h3>

              <p className="mx-auto mb-8 max-w-[490px] text-[14px] leading-8 text-[#1D2C4F]/70">
                انتهيت من تجربة خطوات تقديم طلب الشراكة.
                لم تُرسل بياناتك إلى فنر، ولم يتم تسجيل
                طلب فعلي أو الموافقة على أي شراكة.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="min-h-[48px] rounded-full border border-[#1D2C4F]/20 px-7 text-[13px] font-semibold text-[#1D2C4F] transition-colors hover:bg-[#F3F3F1]"
              >
                تجربة طلب جديد
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CAPITAL DISCLAIMER */}

      {selectedCat.requiresCapital && (
        <section className="bg-[#F3F3F1] px-5 pb-20 sm:px-6 lg:px-10 lg:pb-24">
          <div
            data-part-reveal
            className="mx-auto max-w-[820px] rounded-[14px] border border-[#1D2C4F]/10 bg-white/60 p-6 sm:p-8"
          >
            <h3 className="mb-5 text-[15px] font-bold text-[#1D2C4F]">
              ملاحظات حول التعاون المرتبط برأس المال
            </h3>

            <ul className="space-y-4">
              <DisclaimerItem>
                الحد الأدنى لرأس المال المخصص للعمل هو{' '}
                {PARTNERSHIP_MINIMUM_CAPITAL_KWD.toLocaleString(
                  'en-US'
                )}{' '}
                د.ك.
              </DisclaimerItem>

              <DisclaimerItem>
                رأس المال يبقى في محفظة العميل أو الشركة الخاصة.
              </DisclaimerItem>

              <DisclaimerItem>
                استيفاء الحد الأدنى لا يضمن القبول.
              </DisclaimerItem>

              <DisclaimerItem>
                لا تضمن فنر أرباحاً، ولا تتولى حيازة أصول العملاء.
              </DisclaimerItem>

              <DisclaimerItem>
                تنطبق شروط وإجراءات واتفاقيات إضافية.
              </DisclaimerItem>
            </ul>
          </div>
        </section>
      )}

      {/* PARTNER SHOWCASE */}

      {(strategicPartners.length > 0 ||
        collaborationPartners.length > 0) && (
        <section className="bg-[#0F1E36] px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1200px]">
            <div data-part-reveal className="mb-12">
              <Eyebrow label="شركاؤنا" />

              <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-bold leading-[1.5] text-white">
                شبكة الشراكة.
              </h2>
            </div>

            {strategicPartners.length > 0 && (
              <div data-part-reveal className="mb-12">
                <h3 className="mb-6 text-[15px] font-bold text-[#84A4B1]">
                  شركاؤنا الاستراتيجيون
                </h3>

                <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
                  {strategicPartners.map((partner) => (
                    <PartnerCard
                      key={partner.id}
                      partner={partner}
                    />
                  ))}
                </div>
              </div>
            )}

            {collaborationPartners.length > 0 && (
              <div data-part-reveal>
                <h3 className="mb-6 text-[15px] font-bold text-[#84A4B1]">
                  شركاء التعاون
                </h3>

                <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
                  {collaborationPartners.map((partner) => (
                    <PartnerCard
                      key={partner.id}
                      partner={partner}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* EMPTY PARTNERS STATE */}

      {strategicPartners.length === 0 &&
        collaborationPartners.length === 0 && (
          <section className="bg-[#0F1E36] px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
            <div
              data-part-reveal
              className="mx-auto max-w-[600px] text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#84A4B1]/20 bg-[#84A4B1]/5">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M14 4L23 9V19L14 24L5 19V9L14 4Z"
                    stroke="#84A4B1"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    opacity="0.6"
                  />

                  <circle
                    cx="14"
                    cy="14"
                    r="3"
                    stroke="#84A4B1"
                    opacity="0.4"
                  />
                </svg>
              </div>

              <h3 className="mb-3 text-[20px] font-bold text-white">
                شبكة الشراكة قيد التشكيل.
              </h3>

              <p className="text-[13px] leading-8 text-white/60">
                سيتم عرض الشركاء المعتمدين هنا فور التوفر.
              </p>
            </div>
          </section>
        )}
    </div>
  );
}

/* ================= SHARED UI ================= */

function Eyebrow({
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

function FormField({
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
      <label className="mb-2 block text-[12px] font-medium text-[#1D2C4F]/75">
        {label}

        {required && (
          <span className="mr-1 text-[#54707D]">
            *
          </span>
        )}
      </label>

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
    <div className="grid gap-2 py-4 sm:grid-cols-[170px_1fr]">
      <span className="text-[12px] text-[#1D2C4F]/55">
        {label}
      </span>

      <span className="break-words whitespace-pre-wrap text-[13px] leading-7 text-[#1D2C4F]">
        {value}
      </span>
    </div>
  );
}

function DisclaimerItem({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-[11px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#84A4B1]" />

      <span className="text-[12px] leading-7 text-[#1D2C4F]/70">
        {children}
      </span>
    </li>
  );
}

function PartnerCard({
  partner,
}: {
  partner: {
    name: string;
    logoUrl?: string;
    website?: string;
  };
}) {
  const content = (
    <>
      {partner.logoUrl ? (
        <img
          src={partner.logoUrl}
          alt={partner.name}
          loading="lazy"
          className="max-h-full max-w-full object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-100"
        />
      ) : (
        <span className="text-center text-[14px] font-bold text-white/60">
          {partner.name}
        </span>
      )}
    </>
  );

  const className =
    'group flex h-32 items-center justify-center bg-[#152742] p-6 ' +
    'transition-colors duration-300 hover:bg-[#1A2D4A]';

  if (partner.website) {
    return (
      <a
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`زيارة موقع ${partner.name}`}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={className}>
      {content}
    </div>
  );
}
