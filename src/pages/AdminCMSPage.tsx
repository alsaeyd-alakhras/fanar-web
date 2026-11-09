
import { useEffect, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Download,
  FilePlus2,
  Pencil,
  Plus,
  ReceiptText,
  RotateCcw,
  Save,
  Trash2,
  Upload,
  X,
} from 'lucide-react';

import {
  cmsActions,
  useCMSContent,
} from '@/hooks/useCMSContent';

import type {
  CMSContent,
} from '@/hooks/useCMSContent';

type CMSSection =
  | 'consultations'
  | 'followUpSessions'
  | 'partnershipCategories'
  | 'partners';

type EditableRecord = Record<string, unknown>;

const sections: {
  key: CMSSection;
  label: string;
  description: string;
  route: string;
}[] = [
  {
    key: 'consultations',
    label: 'الاستشارات',
    description: 'الخدمات والأسعار والمدد',
    route: '/admin/consultations',
  },
  {
    key: 'followUpSessions',
    label: 'جلسات المتابعة',
    description: 'المتابعات والأسعار والأهلية',
    route: '/admin/consultations',
  },
  {
    key: 'partnershipCategories',
    label: 'مسارات الشراكة',
    description: 'المسارات والجمهور والمتطلبات',
    route: '/admin/partnerships',
  },
  {
    key: 'partners',
    label: 'الشركاء',
    description: 'الشركات والشعارات والروابط',
    route: '/admin/partnerships',
  },
];

const fieldLabels: Record<string, string> = {
  id: 'المعرّف',
  number: 'الرقم',
  title: 'العنوان',
  name: 'الاسم',
  category: 'التصنيف',
  subtitle: 'العنوان الفرعي',
  description: 'الوصف',
  targetAudience: 'الجمهور المستهدف',
  durationMinutes: 'المدة بالدقائق',
  priceKWD: 'السعر بالدينار الكويتي',
  supportedPriceKWD: 'السعر المدعوم',
  isSupportedEligible: 'مؤهل للسعر المدعوم',
  mayLeadToPartnership: 'قد يؤدي إلى شراكة',
  minimumCapitalKWD: 'الحد الأدنى لرأس المال',
  order: 'ترتيب العرض',
  eligibleAfterCategory: 'التصنيف المؤهل للمتابعة',
  eligibilityWindowDays: 'مدة الأهلية بالأيام',
  audiences: 'الفئات المستهدفة',
  requiresCapital: 'يتطلب رأس مال',
  hasApplicationForm: 'يحتوي على نموذج تقديم',
  logoUrl: 'رابط الشعار',
  website: 'الموقع الإلكتروني',
};

const inputClass =
  'w-full rounded-xl border border-[#1D2C4F]/15 ' +
  'bg-white px-4 py-3 text-[13px] text-[#1D2C4F] ' +
  'outline-none focus:border-[#84A4B1]';

const templates: Record<CMSSection, EditableRecord> = {
  consultations: {
    id: '',
    number: '',
    category: 'general',
    title: '',
    targetAudience: '',
    description: '',
    durationMinutes: 60,
    priceKWD: 0,
    isSupportedEligible: false,
    mayLeadToPartnership: false,
    order: 1,
  },
  followUpSessions: {
    id: '',
    title: '',
    durationMinutes: 30,
    priceKWD: 0,
    eligibleAfterCategory: 'general',
    eligibilityWindowDays: null,
  },
  partnershipCategories: {
    id: '',
    number: '',
    title: '',
    subtitle: '',
    description: '',
    audiences: [],
    requiresCapital: false,
    hasApplicationForm: true,
  },
  partners: {
    id: '',
    name: '',
    category: 'strategic',
    logoUrl: '',
    website: '',
  },
};

function newId(section: CMSSection) {
  return `${section}-${crypto.randomUUID()}`;
}

function getLabel(key: string) {
  return fieldLabels[key] ?? key;
}

function downloadBackup(content: string) {
  const blob = new Blob([content], {
    type: 'application/json',
  });

  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');

  anchor.href = url;
  anchor.download = 'fnar-cms-backup.json';
  anchor.click();

  URL.revokeObjectURL(url);
}

export default function AdminCMSPage() {
  const content = useCMSContent();
  const location = useLocation();

  const [section, setSection] =
    useState<CMSSection>('consultations');

  const [editingId, setEditingId] =
    useState<string | null>(null);

  const [draft, setDraft] =
    useState<EditableRecord | null>(null);

  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  const isEditorOpen = draft !== null;

  useEffect(() => {
    if (!isEditorOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isEditorOpen]);

  useEffect(() => {
    if (location.pathname.includes('partnerships')) {
      setSection('partnershipCategories');
    } else if (location.pathname.includes('consultations')) {
      setSection('consultations');
    }
  }, [location.pathname]);

  const items = content[section] as EditableRecord[];

  const selectedConfig = sections.find(
    (item) => item.key === section
  )!;

  const importBackup = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    event.target.value = '';

    if (
      !window.confirm(
        'سيتم استبدال جميع بيانات نظام إدارة المحتوى بالنسخة الاحتياطية. هل تريد المتابعة؟'
      )
    ) {
      return;
    }

    try {
      const json = await file.text();

      cmsActions.importJSON(json);

      setDraft(null);
      setEditingId(null);
      setError('');
      setNotice('تم استيراد النسخة الاحتياطية بنجاح.');
    } catch (cause) {
      setNotice('');
      setError(
        cause instanceof Error
          ? cause.message
          : 'تعذر استيراد النسخة الاحتياطية.'
      );
    }
  };

  const openCreate = () => {
    setEditingId(null);
    setDraft({
      ...structuredClone(templates[section]),
      id: newId(section),
    });
    setError('');
    setNotice('');
  };

  const openEdit = (item: EditableRecord) => {
    setEditingId(String(item.id));
    setDraft(structuredClone(item));
    setError('');
    setNotice('');
  };

  const updateField = (key: string, value: unknown) => {
    setDraft((previous) =>
      previous
        ? { ...previous, [key]: value }
        : previous
    );
  };

  const saveRecord = (event: FormEvent) => {
    event.preventDefault();

    if (!draft) return;

    if (!String(draft.id ?? '').trim()) {
      setError('المعرّف مطلوب.');
      return;
    }

    if (
      'title' in draft &&
      !String(draft.title ?? '').trim()
    ) {
      setError('العنوان مطلوب.');
      return;
    }

    if (
      'name' in draft &&
      !String(draft.name ?? '').trim()
    ) {
      setError('الاسم مطلوب.');
      return;
    }

    try {
      if (editingId) {
        cmsActions.update(
          section,
          editingId,
          draft as CMSContent[typeof section][number]
        );
      } else {
        cmsActions.add(
          section,
          draft as CMSContent[typeof section][number]
        );
      }

      setDraft(null);
      setEditingId(null);
      setError('');
      setNotice('تم حفظ التغييرات بنجاح.');
    } catch (cause) {
      setError(
        cause instanceof Error
          ? cause.message
          : 'تعذر حفظ التغييرات.'
      );
    }
  };

  const removeRecord = (id: string) => {
    if (
      !window.confirm('هل أنت متأكد من حذف هذا العنصر؟')
    ) {
      return;
    }

    try {
      cmsActions.remove(section, id);
      setNotice('تم حذف العنصر.');
      setError('');
    } catch {
      setError('تعذر حذف العنصر.');
    }
  };

  const resetSection = () => {
    if (
      !window.confirm(
        'سيتم استعادة المحتوى الأصلي لهذا القسم. هل تريد المتابعة؟'
      )
    ) {
      return;
    }

    try {
      cmsActions.reset(section);
      setNotice('تمت استعادة المحتوى الأصلي.');
      setError('');
    } catch {
      setError('تعذرت استعادة المحتوى.');
    }
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#F3F3F1] px-5 pb-20 pt-32 font-arabic text-[#1D2C4F] sm:px-8"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Dashboard header */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className="mb-3 text-[11px] font-semibold tracking-widest text-[#54707D]">
              FNAR / CONTENT MANAGEMENT
            </p>

            <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold">
              لوحة إدارة فنر
            </h1>

            <p className="mt-3 text-[13px] text-[#1D2C4F]/60">
              إدارة الاستشارات والشراكات والأكاديمية والفواتير من مكان واحد.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {/* Academy management */}
            <Link
              to="/admin/academy"
              className="flex items-center gap-2 rounded-full bg-[#84A4B1] px-5 py-3 text-[12px] font-semibold text-[#0F1E36] transition-colors hover:bg-[#152742] hover:text-white"
            >
              <BookOpen size={16} />
              إدارة الأكاديمية
            </Link>

            {/* NEW: Invoice management */}
            <Link
              to="/admin/invoices"
              className="flex items-center gap-2 rounded-full bg-[#1D2C4F] px-5 py-3 text-[12px] font-semibold text-white transition-colors hover:bg-[#84A4B1] hover:text-[#0F1E36]"
            >
              <ReceiptText size={16} />
              إدارة الفواتير
            </Link>

            {/* Export CMS backup */}
            <button
              type="button"
              onClick={() =>
                downloadBackup(cmsActions.exportJSON())
              }
              className="flex items-center gap-2 rounded-full border border-[#1D2C4F]/15 px-5 py-3 text-[12px] transition-colors hover:bg-white"
            >
              <Download size={16} />
              تصدير نسخة احتياطية
            </button>

            {/* Import CMS backup */}
            <label className="flex cursor-pointer items-center gap-2 rounded-full border border-[#1D2C4F]/15 px-5 py-3 text-[12px] transition-colors hover:bg-white">
              <Upload size={16} />
              استيراد نسخة احتياطية

              <input
                type="file"
                accept=".json,application/json"
                className="sr-only"
                onChange={importBackup}
              />
            </label>

            {/* View website */}
            <Link
              to="/"
              className="flex items-center gap-2 rounded-full bg-[#1D2C4F] px-5 py-3 text-[12px] text-white transition-colors hover:bg-[#152742]"
            >
              <ArrowRight size={16} />
              عرض الموقع
            </Link>
          </div>
        </div>

        {/* CMS sections */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => {
                setSection(item.key);
                setDraft(null);
                setError('');
                setNotice('');
              }}
              className={`rounded-[18px] border p-5 text-right transition-all ${
                section === item.key
                  ? 'border-[#84A4B1] bg-[#152742] text-white'
                  : 'border-[#1D2C4F]/10 bg-white hover:border-[#84A4B1]'
              }`}
            >
              <span className="block text-[12px] opacity-65">
                {item.description}
              </span>

              <span className="mt-3 block text-[19px] font-bold">
                {item.label}
              </span>

              <span className="mt-4 block font-sans text-[26px] font-bold text-[#84A4B1]">
                {content[item.key].length}
              </span>
            </button>
          ))}
        </div>

        {/* Selected CMS section */}
        <section className="overflow-hidden rounded-[22px] border border-[#1D2C4F]/10 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1D2C4F]/10 p-6 sm:p-8">
            <div>
              <h2 className="text-[22px] font-bold">
                {selectedConfig.label}
              </h2>

              <p className="mt-2 text-[12px] text-[#1D2C4F]/50">
                {items.length} عنصر
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={resetSection}
                className="flex items-center gap-2 rounded-full border border-[#1D2C4F]/15 px-4 py-3 text-[12px]"
              >
                <RotateCcw size={15} />
                استعادة الأصل
              </button>

              <button
                type="button"
                onClick={openCreate}
                className="flex items-center gap-2 rounded-full bg-[#1D2C4F] px-5 py-3 text-[12px] text-white"
              >
                <Plus size={16} />
                إضافة عنصر
              </button>
            </div>
          </div>

          {notice && (
            <p
              role="status"
              className="mx-6 mt-5 rounded-lg bg-[#84A4B1]/15 px-4 py-3 text-[12px] text-[#1D2C4F]"
            >
              {notice}
            </p>
          )}

          {error && (
            <p
              role="alert"
              className="mx-6 mt-5 rounded-lg bg-red-50 px-4 py-3 text-[12px] text-red-700"
            >
              {error}
            </p>
          )}

          {items.length === 0 ? (
            <div className="px-8 py-20 text-center">
              <FilePlus2
                size={32}
                className="mx-auto mb-4 text-[#84A4B1]"
              />

              <p className="text-[15px] font-semibold">
                لا توجد عناصر حالياً
              </p>

              <p className="mt-2 text-[12px] text-[#1D2C4F]/50">
                أضف أول عنصر لعرضه في الموقع.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-[#1D2C4F]/10">
              {items.map((item) => (
                <div
                  key={String(item.id)}
                  className="flex flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-8"
                >
                  <div className="min-w-0">
                    <p className="text-[15px] font-semibold">
                      {String(
                        item.title ??
                        item.name ??
                        item.id
                      )}
                    </p>

                    <p className="mt-2 text-[11px] text-[#1D2C4F]/45">
                      {String(item.id)}
                      {typeof item.priceKWD === 'number'
                        ? ` — ${item.priceKWD} د.ك`
                        : ''}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => openEdit(item)}
                      aria-label="تعديل"
                      className="rounded-full border border-[#1D2C4F]/10 p-3 hover:bg-[#F3F3F1]"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        removeRecord(String(item.id))
                      }
                      aria-label="حذف"
                      className="rounded-full border border-red-200 p-3 text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* CMS editor modal */}
        {draft && (
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[#0B1729]/75 p-3 backdrop-blur-sm sm:p-6"
            dir="rtl"
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="cms-editor-title"
              className="flex h-[min(850px,calc(100dvh-2rem))] w-full max-w-[760px] flex-col overflow-hidden rounded-[22px] bg-[#F3F3F1] shadow-2xl"
            >
              {/* Fixed modal header */}
              <div className="flex shrink-0 items-center justify-between gap-4 border-b border-[#1D2C4F]/10 px-6 py-5 sm:px-9">
                <div>
                  <p className="mb-2 text-[11px] text-[#54707D]">
                    CONTENT EDITOR
                  </p>

                  <h2
                    id="cms-editor-title"
                    className="text-[24px] font-bold"
                  >
                    {editingId
                      ? 'تعديل العنصر'
                      : 'إضافة عنصر جديد'}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setDraft(null)}
                  aria-label="إغلاق"
                  className="rounded-full border border-[#1D2C4F]/10 p-3"
                >
                  <X size={18} />
                </button>
              </div>

              <form
                id="cms-editor-form"
                onSubmit={saveRecord}
                className="flex min-h-0 flex-1 flex-col"
              >
                {/* Scrollable form content */}
                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-6 sm:px-9">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {Object.entries(draft).map(([key, value]) => {
                      const isLongText =
                        key === 'description' ||
                        key === 'targetAudience';

                      const isComplex =
                        Array.isArray(value) ||
                        (value !== null &&
                          typeof value === 'object');

                      return (
                        <label
                          key={key}
                          className={`block ${
                            isLongText || isComplex
                              ? 'sm:col-span-2'
                              : ''
                          }`}
                        >
                          <span className="mb-2 block text-[12px] font-medium">
                            {getLabel(key)}
                          </span>

                          {typeof value === 'boolean' ? (
                            <select
                              className={inputClass}
                              value={String(value)}
                              onChange={(event) =>
                                updateField(
                                  key,
                                  event.target.value === 'true'
                                )
                              }
                            >
                              <option value="true">نعم</option>
                              <option value="false">لا</option>
                            </select>
                          ) : isComplex ? (
                            <textarea
                              dir="auto"
                              rows={4}
                              className={`${inputClass} font-mono`}
                              value={JSON.stringify(value, null, 2)}
                              onChange={(event) => {
                                try {
                                  updateField(
                                    key,
                                    JSON.parse(event.target.value)
                                  );
                                  setError('');
                                } catch {
                                  setError(
                                    'تحقق من صيغة JSON في الحقول المركبة.'
                                  );
                                }
                              }}
                            />
                          ) : isLongText ? (
                            <textarea
                              rows={4}
                              className={inputClass}
                              value={String(value ?? '')}
                              onChange={(event) =>
                                updateField(
                                  key,
                                  event.target.value
                                )
                              }
                            />
                          ) : (
                            <input
                              className={inputClass}
                              disabled={key === 'id'}
                              type={
                                typeof value === 'number'
                                  ? 'number'
                                  : 'text'
                              }
                              min={
                                typeof value === 'number'
                                  ? 0
                                  : undefined
                              }
                              value={
                                value === null
                                  ? ''
                                  : String(value ?? '')
                              }
                              onChange={(event) => {
                                const raw = event.target.value;

                                updateField(
                                  key,
                                  typeof value === 'number'
                                    ? Number(raw)
                                    : value === null
                                      ? raw === ''
                                        ? null
                                        : Number(raw)
                                      : raw
                                );
                              }}
                            />
                          )}
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Fixed modal footer */}
                <div className="shrink-0 border-t border-[#1D2C4F]/10 bg-[#F3F3F1] px-6 py-4 sm:px-9">
                  {error && (
                    <p
                      role="alert"
                      className="mb-3 text-[12px] text-red-600"
                    >
                      {error}
                    </p>
                  )}

                  <div className="flex flex-wrap justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setDraft(null)}
                      className="rounded-full border border-[#1D2C4F]/15 px-6 py-3 text-[12px]"
                    >
                      إلغاء
                    </button>

                    <button
                      type="submit"
                      className="flex items-center gap-2 rounded-full bg-[#1D2C4F] px-7 py-3 text-[12px] font-semibold text-white"
                    >
                      <Save size={16} />
                      حفظ التغييرات
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
