import {
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from 'react';

import {
  AlertCircle,
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  Copy,
  CreditCard,
  Download,
  FileCheck2,
  FileText,
  Landmark,
  Phone,
  ReceiptText,
  RotateCcw,
  ShieldCheck,
  Upload,
  UserRound,
  Wallet,
  FileDown,
  Loader2,
  Send,
} from 'lucide-react';

import { Link, useParams } from 'react-router-dom';
import { useInvoiceDocuments } from '@/hooks/useInvoiceDocuments';
import { invoiceActions } from '@/hooks/useInvoiceSubmissions';

type DocumentKey =
  | 'deposit'
  | 'withdrawal'
  | 'subscription'
  | 'bank-beneficiary';

type InvoiceKey = Exclude<DocumentKey, 'bank-beneficiary'>;
type FieldType =
  | 'text'
  | 'tel'
  | 'number'
  | 'date'
  | 'datetime-local'
  | 'textarea'
  | 'select';

type Field = {
  id: string;
  label: string;
  type?: FieldType;
  placeholder?: string;
  required?: boolean;
  wide?: boolean;
  options?: string[];
  readOnlyValue?: string;
};

type InvoiceValues = Record<string, string>;
type Bank = {
  name: string;
  englishName: string;
  account: string;
  holder: string;
  phone: string;
};

type InvoiceFormProps = {
  kind: InvoiceKey;
};

const DOCUMENT_IDS: Record<DocumentKey, string> = {

  deposit: 'deposit-invoice',

  withdrawal: 'withdrawal-invoice',

  subscription: 'channel-subscription-invoice',

  'bank-beneficiary': 'beneficiary-data-form',

};

const TITLES: Record<DocumentKey, string> = {

  deposit: 'فاتورة الإيداع',

  withdrawal: 'فاتورة السحب',

  subscription: 'فاتورة الاشتراك في القناة التعليمية',

  'bank-beneficiary': 'إضافتي كمستفيد في البنوك الكويتية',

};

const DESCRIPTIONS: Record<DocumentKey, string> = {

  deposit:

    'أكمل بيانات الإيداع وأرفق إثبات التحويل وراجع طلبك.',

  withdrawal:

    'أكمل بيانات السحب وأرفق إثبات العملية وراجع طلبك.',

  subscription:

    'أدخل بيانات الاشتراك في القناة التعليمية وأرفق إثبات الدفع.',

  'bank-beneficiary':

    'بيانات الحسابات البنكية الكويتية وتعليمات الدفع وتفعيل المستفيد.',

};

const FINANCIAL_TERMS = [

  'أقر أنا الموقع أدناه بأنني طلبت تنفيذ هذه العملية المالية بشكل فردي بناءً على طلبي ورغبتي الخاصة.',

  'المبلغ المحول ناتج من مصادر مشروعة، وليس له صلة بأي نشاط غير قانوني أو يشتبه بكونه متعلقًا بغسيل أموال.',

  'الطرف المنفذ (عبدالعزيز الشريف) لا يعمل كمؤسسة مالية أو مرخصة من بنك الكويت المركزي، بل يقدم الخدمة بشكل تعاقدي بناءً على اتفاق مباشر مع العميل.',

  'أتحمل كامل المسؤولية القانونية عن مصدر الأموال ومآل استخدامها، ولا أحمل الطرف المنفذ أي تبعات قانونية أو مالية.',

  'في حال حدوث أي اشتباه أو بلاغ، أوافق على التعاون الكامل مع الجهات المعنية وتقديم أي وثائق مطلوبة.',

  'يمنع استخدام هذه الخدمة لأي غرض مخالف للقانون الكويتي أو القوانين الدولية المتعلقة بالأصول الرقمية.',

  'إقرار مصدر الأموال: أقر أنا الموقع أدناه بأن جميع المبالغ المحولة إلى/من عبدالعزيز الشريف هي من مصادر قانونية ومعلنة، ولا تتعلق بأي نشاط غير مشروع أو محظور، وأتحمل كافة المسؤوليات الناتجة عن العملية.',

];

const SUBSCRIPTION_TERMS = [

  'هذا الاشتراك يمنح المشترك حق الاطلاع على محتوى القناة التعليمية فقط، ولا يتضمن أي التزام بتحقيق أرباح أو نتائج مالية.',

  'أقر أنا الموقع أدناه أنني اطلعت على اتفاقية الشروط والأحكام الخاصة بالقناة ووافقت عليها بكامل إرادتي.',

  'الاشتراك شخصي وغير قابل للتحويل أو التنازل لطرف آخر.',

  'لا يسترد الاشتراك بعد مرور 7 أيام من الدفع أو في حال تم الدخول لأي محتوى حصري داخل القناة.',

  'يمنع مشاركة أي جزء من المحتوى أو نشره أو تصويره، ويعرض ذلك المشترك للملاحقة القانونية.',

  'جميع المراسلات والمطالبات تكون فقط من الرقم الرسمي المذكور أعلاه ولا يعتد بأي وسيلة أخرى.',

];

const PAYMENT_NOTICES = [

  'تقبل الحوالات البنكية فقط من داخل دولة الكويت، ولا تعتمد أي تحويلات واردة من خارج البلاد.',

  'لا يقبل الدفع النقدي (كاش) تحت أي ظرف من الظروف.',

  'يشترط أن يكون التحويل من الحساب البنكي الخاص بالمشترك شخصيًا، ويمنع إشراك أي طرف ثالث في عملية الدفع أو في أي إجراء مالي لاحق.',

  'لا أستخدم الروابط الإلكترونية (Links) في عمليات الدفع أو التحويل.',

  'كما أنني لا أتعامل مع خدمة «ومض» في أي عملية مالية، سواء كانت تحويلًا أو إيداعًا أو سحبًا.',

  'بعد إتمام أي حوالة، يرجى الاحتفاظ بلقطة شاشة (Screenshot) كإثبات للحوالة وضمانًا لحقك.',

];

const BANKS: Bank[] = [

  {

    name: 'بنك الكويت الوطني',

    englishName: 'NBK',

    account: '2017457226',

    holder: 'ABDULAZIZ T H ALSHAREEF',

    phone: '1801801',

  },

  {

    name: 'بنك بوبيان',

    englishName: 'Boubyan Bank',

    account: '0714418001',

    holder: 'ABDULAZIZ ALSHAREEF',

    phone: '1820082',

  },

  {

    name: 'بيت التمويل الكويتي',

    englishName: 'KFH',

    account: '78105000779603',

    holder: 'ABDULAZIZ ALSHAREEF',

    phone: '1803333',

  },

  {

    name: 'البنك التجاري الكويتي',

    englishName: 'CBK',

    account: '9862226010',

    holder: 'ABDULAZIZ ALSHAREEF',

    phone: '1888225',

  },

  {

    name: 'بنك الخليج',

    englishName: 'Gulf Bank',

    account: '96244197',

    holder: 'ABDULAZIZ ALSHAREEF',

    phone: '1805805',

  },

  {

    name: 'بنك وربة',

    englishName: 'Warba Bank',

    account: '1288134013',

    holder: 'ABDULAZIZ T ALSHAREEF',

    phone: '1825555',

  },

  {

    name: 'بنك برقان',

    englishName: 'Burgan Bank',

    account: '7080358002',

    holder: 'ABDULAZIZ ALSHAREEF',

    phone: '1804080',

  },

  {

    name: 'البنك الأهلي الكويتي',

    englishName: 'ABK',

    account: '0635000831001',

    holder: 'ABDULAZIZ ALSHAREEF',

    phone: '1899899',

  },

  {

    name: 'بنك الكويت الدولي',

    englishName: 'KIB',

    account: '112020007435',

    holder: 'ABDULAZIZ ALSHAREEF',

    phone: '1866866',

  },

  {

    name: 'بنك وياي',

    englishName: 'Weyay Bank',

    account: '2041307590',

    holder: 'ABDULAZIZ ALSHAREEF',

    phone: '1880011',

  },

  {

    name: 'بنك تم',

    englishName: 'Tam Bank',

    account: '79142136147001',

    holder: 'ABDULAZIZ ALSHAREEF',

    phone: '1803000',

  },

];

const FINANCIAL_FIELDS: Field[] = [

  {

    id: 'customerName',

    label: 'اسم العميل الكامل',

    required: true,

    placeholder: 'الاسم كما يظهر في الهوية',

  },

  {

    id: 'identityNumber',

    label: 'الرقم المدني / الجواز',

    required: true,

  },

  {

    id: 'phone',

    label: 'رقم الهاتف (الواتساب)',

    type: 'tel',

    required: true,

    placeholder: '+965',

  },

  {

    id: 'currency',

    label: 'عملة العملية',

    type: 'select',

    required: true,

    options: ['KWD', 'USDT'],

  },

  {

    id: 'amount',

    label: 'المبلغ بالأرقام',

    type: 'number',

    required: true,

    placeholder: '0.000',

  },

  {

    id: 'amountWords',

    label: 'المبلغ بالحروف',

    required: true,

  },

  {

    id: 'transactionDate',

    label: 'تاريخ ووقت العملية',

    type: 'datetime-local',

    required: true,

  },

  {

    id: 'transferMethod',

    label: 'وسيلة التحويل',

    type: 'select',

    required: true,

    options: ['تحويل بنكي', 'USDT'],

  },

  {

    id: 'notes',

    label: 'الملاحظات',

    type: 'textarea',

    wide: true,

  },

];

const SUBSCRIPTION_FIELDS: Field[] = [

  {

    id: 'customerName',

    label: 'اسم المشترك الكامل',

    required: true,

  },

  {

    id: 'identityNumber',

    label: 'الرقم المدني / الجواز',

    required: true,

  },

  {

    id: 'phone',

    label: 'رقم الهاتف (الواتساب)',

    type: 'tel',

    required: true,

    placeholder: '+965',

  },

  {

    id: 'subscriptionDate',

    label: 'تاريخ الاشتراك',

    type: 'date',

    required: true,

  },

  {

    id: 'expiryDate',

    label: 'تاريخ الانتهاء',

    type: 'date',

    required: true,

  },

  {

    id: 'channelName',

    label: 'اسم القناة',

    required: true,

  },

  {

    id: 'subscriptionTier',

    label: 'نظام الشرائح',

    required: true,

  },

  {

    id: 'subscriptionMonths',

    label: 'عدد أشهر الاشتراك',

    type: 'number',

    required: true,

  },

  {

    id: 'amount',

    label: 'قيمة الاشتراك بالدينار الكويتي',

    type: 'number',

    required: true,

  },

  {

    id: 'amountWords',

    label: 'المبلغ بالحروف',

    required: true,

  },

  {

    id: 'transferMethod',

    label: 'وسيلة الدفع',

    type: 'select',

    required: true,

    options: ['تحويل بنكي', 'USDT'],

  },

  {

    id: 'notes',

    label: 'الملاحظات',

    type: 'textarea',

    wide: true,

  },

];

const INPUT_CLASS =

  'w-full min-h-[48px] rounded-xl border border-white/10 ' +

  'bg-[#152742] px-4 py-3 text-sm text-white outline-none ' +

  'transition-colors placeholder:text-white/30 ' +

  'focus:border-[#84A4B1] focus:ring-2 focus:ring-[#84A4B1]/10';

function isDocumentKey(

  value: string | undefined

): value is DocumentKey {

  return (

    value === 'deposit' ||

    value === 'withdrawal' ||

    value === 'subscription' ||

    value === 'bank-beneficiary'

  );

}

function Section({

  number,

  title,

  description,

  icon: Icon,

  children,

}: {

  number: string;

  title: string;

  description?: string;

  icon: typeof FileText;

  children: ReactNode;

}) {

  return (

    <section className="overflow-hidden rounded-[24px] border border-white/10 bg-[#152742]/90 shadow-[0_18px_55px_rgba(0,0,0,0.12)]">

      <div className="flex flex-wrap items-start gap-4 border-b border-white/10 px-5 py-6 sm:px-8 sm:py-7">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#84A4B1]/20 bg-[#84A4B1]/10 text-[#A9C3CD]">

          <Icon className="h-5 w-5" />

        </div>

        <div className="min-w-0 flex-1">

          <p className="mb-1 text-[11px] font-semibold text-[#84A4B1]">

            القسم {number}

          </p>

          <h2 className="text-lg font-bold leading-relaxed text-[#F3F3F1] sm:text-xl">

            {title}

          </h2>

          {description && (

            <p className="mt-1 text-xs leading-7 text-[#F3F3F1]/50 sm:text-sm">

              {description}

            </p>

          )}

        </div>

      </div>

      <div className="p-5 sm:p-8">{children}</div>

    </section>

  );

}

function Fields({

  fields,

  values,

  onChange,

}: {

  fields: Field[];

  values: InvoiceValues;

  onChange: (id: string, value: string) => void;

}) {

  return (

    <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">

      {fields.map((field) => {

        const inputId = `invoice-field-${field.id}`;

        const value = values[field.id] ?? '';

        return (

          <div

            key={field.id}

            className={[

              'rounded-2xl border border-white/[0.07]',

              'bg-[#0F1E36]/65 px-5 py-5',

              'transition-colors hover:border-[#84A4B1]/25',

              field.wide ? 'sm:col-span-2' : '',

            ].join(' ')}

          >

            <label

              htmlFor={inputId}

              className="mb-3 block text-xs font-medium leading-6 text-[#A1BBC5]"

            >

              {field.label}

              {field.required && (

                <span className="mr-1 text-red-300">*</span>

              )}

            </label>

            {field.type === 'textarea' ? (

              <textarea

                id={inputId}

                name={field.id}

                rows={3}

                value={value}

                onChange={(event) =>

                  onChange(field.id, event.target.value)

                }

                placeholder={field.placeholder ?? 'اكتب هنا...'}

                required={field.required}

                className={`${INPUT_CLASS} resize-y leading-7`}

              />

            ) : field.type === 'select' ? (

              <select

                id={inputId}

                name={field.id}

                value={value}

                onChange={(event) =>

                  onChange(field.id, event.target.value)

                }

                required={field.required}

                className={INPUT_CLASS}

              >

                <option value="" disabled>

                  اختر من القائمة

                </option>

                {field.options?.map((option) => (

                  <option key={option} value={option}>

                    {option}

                  </option>

                ))}

              </select>

            ) : (

              <input

                id={inputId}

                name={field.id}

                type={field.type ?? 'text'}

                value={value}

                onChange={(event) =>

                  onChange(field.id, event.target.value)

                }

                placeholder={field.placeholder ?? 'أدخل البيانات'}

                required={field.required}

                min={

                  field.type === 'number'

                    ? field.id === 'subscriptionMonths'

                      ? '1'

                      : '0.001'

                    : undefined

                }

                step={

                  field.type === 'number'

                    ? field.id === 'subscriptionMonths'

                      ? '1'

                      : 'any'

                    : undefined

                }

                dir={

                  field.type === 'number' ||

                  field.type === 'date' ||

                  field.type === 'datetime-local'

                    ? 'ltr'

                    : 'auto'

                }

                className={INPUT_CLASS}

              />

            )}

          </div>

        );

      })}

    </div>

  );

}

function Terms({ items }: { items: string[] }) {

  return (

    <ol className="space-y-3">

      {items.map((item, index) => (

        <li

          key={index}

          className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-[#0F1E36]/45 p-4 sm:p-5"

        >

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#84A4B1]/10 text-xs font-bold tabular-nums text-[#A9C3CD]">

            {String(index + 1).padStart(2, '0')}

          </span>

          <p className="flex-1 text-sm leading-8 text-[#F3F3F1]/80">

            {item}

          </p>

        </li>

      ))}

    </ol>

  );

}

function ReceiptAndAcknowledgment({

  receipt,

  acceptedTerms,

  onReceiptChange,

  onTermsChange,

}: {

  receipt: File | null;

  acceptedTerms: boolean;

  onReceiptChange: (file: File | null) => void;

  onTermsChange: (accepted: boolean) => void;

}) {

  const [fileError, setFileError] = useState('');

  function handleFileChange(

    event: ChangeEvent<HTMLInputElement>

  ) {

    const file = event.target.files?.[0] ?? null;

    setFileError('');

    if (!file) {

      onReceiptChange(null);

      return;

    }

    const allowedTypes = [

      'image/jpeg',

      'image/png',

      'image/webp',

      'application/pdf',

    ];

    const allowedExtensions = /\.(jpe?g|png|webp|pdf)$/i;

    if (

      !allowedTypes.includes(file.type) ||

      !allowedExtensions.test(file.name)

    ) {

      setFileError(

        'يرجى اختيار صورة JPG أو PNG أو WEBP أو ملف PDF.'

      );

      onReceiptChange(null);

      event.target.value = '';

      return;

    }

    if (file.size > 5 * 1024 * 1024) {

      setFileError('الحد الأقصى لحجم الملف هو 5 ميجابايت.');

      onReceiptChange(null);

      event.target.value = '';

      return;

    }

    if (file.size === 0) {

      setFileError('الملف المحدد فارغ.');

      onReceiptChange(null);

      event.target.value = '';

      return;

    }

    onReceiptChange(file);

  }

  return (

    <div className="grid gap-4 md:grid-cols-2">

      <div className="rounded-2xl border border-[#84A4B1]/20 bg-[#0F1E36]/45 p-6">

        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#84A4B1]/10 text-[#A9C3CD]">

          <FileCheck2 className="h-5 w-5" />

        </div>

        <h3 className="mb-3 text-sm font-bold text-white">

          الإقرار الإلكتروني

        </h3>

        <p className="mb-5 text-xs leading-7 text-white/60">

          يرجى قراءة الشروط والأحكام والإقرار بصحة

          المعلومات المدخلة.

        </p>

        <label className="flex cursor-pointer items-start gap-3">

          <input

            type="checkbox"

            checked={acceptedTerms}

            onChange={(event) =>

              onTermsChange(event.target.checked)

            }

            required

            className="mt-1 h-5 w-5 shrink-0 accent-[#84A4B1]"

          />

          <span className="text-sm leading-8 text-white/85">

            أقر بصحة البيانات المدخلة وأوافق على الشروط

            والأحكام المذكورة في هذا النموذج.

          </span>

        </label>

      </div>

      <div className="rounded-2xl border border-[#84A4B1]/20 bg-[#0F1E36]/45 p-6">

        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#84A4B1]/10 text-[#A9C3CD]">

          <Upload className="h-5 w-5" />

        </div>

        <h3 className="mb-3 text-sm font-bold text-white">

          إرفاق إثبات الدفع أو التحويل

        </h3>

        <p className="mb-4 text-xs leading-7 text-white/60">

          ارفع صورة الإيصال أو ملف PDF.

          الحد الأقصى 5 ميجابايت.

        </p>

        <input

          type="file"

          accept=".jpg,.jpeg,.png,.webp,.pdf"

          required={!receipt}

          onChange={handleFileChange}

          className="block w-full cursor-pointer text-xs text-white/70 file:ml-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-[#84A4B1] file:px-4 file:py-3 file:font-bold file:text-[#0F1E36]"

        />

        {receipt && (

          <div className="mt-4 flex items-start gap-2 rounded-xl border border-[#84A4B1]/20 bg-[#84A4B1]/10 p-3">

            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#A9C3CD]" />

            <p className="min-w-0 break-all text-xs leading-6 text-[#C0D3DA]">

              {receipt.name}

            </p>

          </div>

        )}

        {fileError && (

          <p

            role="alert"

            className="mt-3 text-xs leading-6 text-red-300"

          >

            {fileError}

          </p>

        )}

      </div>

    </div>

  );

}

function DocumentIntro({

  eyebrow,

  title,

  description,

  icon: Icon,

}: {

  eyebrow: string;

  title: string;

  description: string;

  icon: typeof FileText;

}) {

  return (

    <div className="relative overflow-hidden rounded-[24px] border border-[#84A4B1]/20 bg-gradient-to-l from-[#1D3853] via-[#172B46] to-[#12243C] p-6 sm:p-8">

      <div className="pointer-events-none absolute -left-12 -top-16 h-52 w-52 rounded-full bg-[#84A4B1]/10 blur-3xl" />

      <div className="relative flex flex-wrap items-center justify-between gap-5">

        <div>

          <p className="mb-3 text-xs font-semibold text-[#A9C3CD]">

            {eyebrow}

          </p>

          <h2 className="text-2xl font-bold text-white sm:text-3xl">

            {title}

          </h2>

          <p className="mt-3 text-sm leading-7 text-white/55">

            {description}

          </p>

        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-[#84A4B1]/25 bg-[#84A4B1]/10 text-[#C0D3DA]">

          <Icon className="h-8 w-8" />

        </div>

      </div>

    </div>

  );

}

async function generateInvoicePdf(

  element: HTMLElement,

  filename: string

) {

  const [{ default: html2canvas }, { jsPDF }] =

    await Promise.all([

      import('html2canvas'),

      import('jspdf'),

    ]);

  const pdf = new jsPDF({

    orientation: 'portrait',

    unit: 'mm',

    format: 'a4',

    compress: true,

  });

  const pageWidth = pdf.internal.pageSize.getWidth();

  const pageHeight = pdf.internal.pageSize.getHeight();

  const margin = 14;

  const contentWidth = pageWidth - margin * 2;

  const contentHeight = pageHeight - margin * 2;

  const sectionGap = 5;

  const sections = Array.from(

    element.querySelectorAll<HTMLElement>('[data-pdf-section]')

  );

  if (sections.length === 0) {

    throw new Error('No PDF sections found.');

  }

  let y = margin;

  let pageHasContent = false;

  for (const section of sections) {

    const canvas = await html2canvas(section, {

      scale: 2,

      useCORS: true,

      backgroundColor: '#FFFFFF',

      logging: false,

      windowWidth: 794,

    });

    const imageWidth = contentWidth;

    const imageHeight =

      (canvas.height * imageWidth) / canvas.width;

    if (imageHeight > contentHeight) {

      throw new Error(

        'A PDF section is too tall to fit on one A4 page.'

      );

    }

    if (

      pageHasContent &&

      y + imageHeight > pageHeight - margin

    ) {

      pdf.addPage();

      y = margin;

      pageHasContent = false;

    }

    pdf.addImage(

      canvas.toDataURL('image/png'),

      'PNG',

      margin,

      y,

      imageWidth,

      imageHeight

    );

    y += imageHeight + sectionGap;

    pageHasContent = true;

  }

  pdf.save(filename);

}

function InvoiceForm({ kind }: InvoiceFormProps) {

  const [values, setValues] = useState<InvoiceValues>({});

  const [receipt, setReceipt] = useState<File | null>(null);

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [reviewMode, setReviewMode] = useState(false);

  const [message, setMessage] = useState('');

  const [generatingPdf, setGeneratingPdf] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const pdfRef = useRef<HTMLDivElement>(null);

  const isSubscription = kind === 'subscription';

  const isDeposit = kind === 'deposit';

  const fields = isSubscription

    ? SUBSCRIPTION_FIELDS

    : FINANCIAL_FIELDS;

  const terms = isSubscription

    ? SUBSCRIPTION_TERMS

    : FINANCIAL_TERMS;

  const operation = isDeposit ? 'الإيداع' : 'السحب';

  function updateField(id: string, value: string) {

    setValues((previous) => ({

      ...previous,

      [id]: value,

    }));

    setReviewMode(false);
    setMessage('');
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {

    event.preventDefault();

    setMessage('');

    if (!acceptedTerms) {

      setMessage('يرجى الموافقة على الشروط والأحكام.');

      return;

    }

    if (!receipt) {

      setMessage('يرجى إرفاق إثبات الدفع أو التحويل.');

      return;

    }

    if (

      isSubscription &&

      values.subscriptionDate &&

      values.expiryDate &&

      values.expiryDate < values.subscriptionDate

    ) {

      setMessage(

        'تاريخ انتهاء الاشتراك يجب أن يكون بعد تاريخ بدايته.'

      );

      return;

    }

    setReviewMode(true);

    setMessage(

      'تم التحقق من البيانات. يمكنك الآن تحميل الفاتورة المكتملة بصيغة PDF.'

    );

  }

  function resetForm() {
    setValues({});
    setReceipt(null);
    setAcceptedTerms(false);
    setReviewMode(false);
    setMessage('');
    setSubmitted(false);
  }

  async function handleDownloadPdf() {

    if (!pdfRef.current || !reviewMode || generatingPdf) {

      return;

    }

    setGeneratingPdf(true);

    setMessage('');

    try {

      const date = new Date().toISOString().slice(0, 10);

      await generateInvoicePdf(

        pdfRef.current,

        `FNAR-${kind}-${date}.pdf`

      );

      setMessage('تم إنشاء ملف PDF وتنزيله بنجاح.');

    } catch (error) {

      console.error('PDF generation failed:', error);

      setMessage(

        'تعذر إنشاء ملف PDF. يرجى التحقق من طول البيانات والمحاولة مرة أخرى.'

      );

    } finally {

      setGeneratingPdf(false);

    }

  }

  function handleSubmitInvoice() {
  if (!reviewMode || !receipt || !acceptedTerms || submitted) {
    return;
  }

  try {
    const invoice = invoiceActions.add({
      type: kind,
      customerName: values.customerName?.trim() ?? '',
      phone: values.phone?.trim() ?? '',
      identityNumber: values.identityNumber?.trim() ?? '',
      amount: Number(values.amount ?? 0),
      currency: kind === 'subscription' ? 'KWD' : (values.currency ?? ''),
      transferMethod: values.transferMethod ?? '',
      notes: values.notes ?? '',
      receiptName: receipt.name,
      fields: { ...values },
    });

    setSubmitted(true);

    setMessage(
      `تم إرسال الفاتورة بنجاح. رقم الطلب: ${invoice.id}`
    );
  } catch (error) {
    console.error('Invoice submission failed:', error);

    setMessage(
      'تعذر حفظ الفاتورة. يرجى التأكد من توفر مساحة التخزين والمحاولة مرة أخرى.'
    );
  }
}

  const pdfSectionStyle = {

    padding: 32,

    backgroundColor: '#FFFFFF',

    color: '#0F1E36',

    boxSizing: 'border-box' as const,

  };

  const pdfHeadingStyle = {

    margin: '0 0 20px',

    paddingBottom: 12,

    borderBottom: '2px solid #84A4B1',

    color: '#0F1E36',

    fontSize: 19,

    fontWeight: 700,

  };

  return (

    <div className="space-y-6">

      <form onSubmit={handleSubmit} className="space-y-6">

        {isSubscription ? (

          <DocumentIntro

            eyebrow="القناة التعليمية"

            title="نموذج الاشتراك"

            description="أدخل بياناتك وتفاصيل الاشتراك قبل مراجعة الطلب."

            icon={CalendarDays}

          />

        ) : (

          <DocumentIntro

            eyebrow="نوع المعاملة المالية"

            title={`نموذج ${operation}`}

            description="أدخل بيانات العميل وتفاصيل العملية المالية."

            icon={Wallet}

          />

        )}

        <Section

          number="01"

          title={

            isSubscription ? 'بيانات المشترك' : 'بيانات العميل'

          }

          description="يرجى إدخال البيانات الصحيحة كما تظهر في المستندات الرسمية."

          icon={UserRound}

        >

          <Fields

            fields={fields.slice(0, 3)}

            values={values}

            onChange={updateField}

          />

        </Section>

        <Section

          number="02"

          title={

            isSubscription

              ? 'تفاصيل الاشتراك'

              : `تفاصيل عملية ${operation}`

          }

          description="الحقول المشار إليها بعلامة النجمة مطلوبة."

          icon={isSubscription ? ReceiptText : CreditCard}

        >

          {!isSubscription && (

            <div className="mb-5 rounded-2xl border border-[#84A4B1]/15 bg-[#84A4B1]/[0.06] p-5">

              <p className="mb-2 text-xs text-[#A1BBC5]">

                نوع العملية

              </p>

              <p className="font-semibold text-[#F3F3F1]">

                {isDeposit ? 'إيداع' : 'سحب'}

              </p>

            </div>

          )}

          <Fields

            fields={fields.slice(3)}

            values={values}

            onChange={updateField}

          />

        </Section>

        <Section

          number="03"

          title={

            isSubscription

              ? 'شروط الاشتراك والتعليمات'

              : 'شروط وأحكام المعاملة'

          }

          description="يرجى قراءة جميع البنود قبل الموافقة."

          icon={ShieldCheck}

        >

          <Terms items={terms} />

          {isSubscription && (

            <a

              href="https://wa.me/message/ITJ5L2OVN7J6M1"

              target="_blank"

              rel="noopener noreferrer"

              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#A9C3CD] underline underline-offset-4 transition-colors hover:text-white"

            >

              الاطلاع على اتفاقية الشروط والأحكام

              <ArrowRight className="h-4 w-4" />

            </a>

          )}

        </Section>

        <Section

          number="04"

          title="الإقرار وإثبات الدفع"

          description="الموافقة على الشروط وإرفاق المستند الداعم."

          icon={FileCheck2}

        >

          <ReceiptAndAcknowledgment

            receipt={receipt}

            acceptedTerms={acceptedTerms}

            onReceiptChange={(file) => {

              setReceipt(file);

              setReviewMode(false);

              setMessage('');

            }}

            onTermsChange={(accepted) => {

              setAcceptedTerms(accepted);

              setReviewMode(false);

              setMessage('');

            }}

          />

        </Section>

        <section className="rounded-[24px] border border-[#84A4B1]/20 bg-[#152742] p-6 sm:p-8">

          <div className="mb-6 flex flex-wrap items-start gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#84A4B1]/10 text-[#A9C3CD]">

              <FileCheck2 className="h-5 w-5" />

            </div>

            <div>

              <h2 className="text-xl font-bold text-white">

                مراجعة الطلب

              </h2>

              <p className="mt-2 text-sm leading-8 text-white/55">

                تحقق من اكتمال بياناتك قبل تنزيل الفاتورة.

              </p>

            </div>

          </div>

          <div className="flex flex-wrap gap-3">

            <button

              type="submit"

              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#84A4B1] px-8 text-sm font-bold text-[#0F1E36] transition-colors hover:bg-[#A9C3CD]"

            >

              <CheckCircle2 className="h-4 w-4" />

              مراجعة البيانات

            </button>

            <button

              type="button"

              onClick={resetForm}

              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/15 px-6 text-sm font-medium text-white/75 transition-colors hover:border-[#84A4B1]/40 hover:text-white"

            >

              <RotateCcw className="h-4 w-4" />

              مسح النموذج

            </button>

          </div>

          {message && (

            <p

              role="status"

              className="mt-5 rounded-xl border border-[#84A4B1]/20 bg-[#0F1E36]/70 p-4 text-sm leading-8 text-[#C0D3DA]"

            >

              {message}

            </p>

          )}

          {reviewMode && (

            <div className="mt-8 border-t border-white/10 pt-7">

              <div className="mb-5 flex items-center gap-3">

                <CheckCircle2 className="h-5 w-5 text-[#A9C3CD]" />

                <h3 className="text-lg font-bold text-white">

                  ملخص البيانات المدخلة

                </h3>

              </div>

              <dl className="grid gap-3 sm:grid-cols-2">

                <div className="rounded-xl border border-white/10 bg-[#0F1E36]/60 p-4">

                  <dt className="mb-2 text-xs text-[#A1BBC5]">

                    نوع المستند

                  </dt>

                  <dd className="text-sm font-medium text-white">

                    {TITLES[kind]}

                  </dd>

                </div>

                {fields.map((field) => (

                  <div

                    key={field.id}

                    className={[

                      'rounded-xl border border-white/10 bg-[#0F1E36]/60 p-4',

                      field.wide ? 'sm:col-span-2' : '',

                    ].join(' ')}

                  >

                    <dt className="mb-2 text-xs text-[#A1BBC5]">

                      {field.label}

                    </dt>

                    <dd className="break-words text-sm leading-7 text-white">

                      {values[field.id] || '—'}

                    </dd>

                  </div>

                ))}

                <div className="rounded-xl border border-white/10 bg-[#0F1E36]/60 p-4">

                  <dt className="mb-2 text-xs text-[#A1BBC5]">

                    إثبات الدفع

                  </dt>

                  <dd className="break-all text-sm text-white">

                    {receipt?.name ?? '—'}

                  </dd>

                </div>

              </dl>

              <button

                type="button"

                onClick={handleDownloadPdf}

                disabled={generatingPdf}

                className="mt-6 inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#84A4B1] px-8 text-sm font-bold text-[#0F1E36] transition-colors hover:bg-[#A9C3CD] disabled:cursor-wait disabled:opacity-60"

              >

                {generatingPdf ? (

                  <Loader2 className="h-5 w-5 animate-spin" />

                ) : (

                  <FileDown className="h-5 w-5" />

                )}

                {generatingPdf

                  ? 'جارٍ إنشاء الفاتورة...'

                  : 'تحميل الفاتورة PDF'}

              </button>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleSubmitInvoice}
                  disabled={submitted}
                  title={submitted ? 'تم إرسال الفاتورة' : 'إرسال الفاتورة'}
                  className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-[#84A4B1]/40 bg-[#84A4B1]/10 px-8 text-sm font-bold text-[#C0D3DA] transition-colors hover:bg-[#84A4B1]/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send className="h-5 w-5" />
                  {submitted ? 'تم إرسال الفاتورة' : 'إرسال الفاتورة'}
                </button>
              </div>
              <p className="mt-4 text-xs leading-7 text-white/45">
                تنزيل الفاتورة لا يعني إرسالها.
                يرجى الضغط على «إرسال الفاتورة» لحفظ طلبك.
              </p>
            </div>

          )}

        </section>

      </form>

      {reviewMode && (

        <div className="overflow-x-auto rounded-[24px] border border-white/10 bg-white/5 p-4 sm:p-6">

          <p className="mb-4 text-sm font-semibold text-white">

            معاينة الفاتورة القابلة للتنزيل

          </p>

          <div

            ref={pdfRef}

            dir="rtl"

            style={{

              width: 794,

              backgroundColor: '#FFFFFF',

              color: '#0F1E36',

              fontFamily: 'Arial, sans-serif',

            }}

          >

            {/* PAGE SECTION 1: HEADER + CUSTOMER INFORMATION */}

            <div

              data-pdf-section

              style={pdfSectionStyle}

            >

              <div

                style={{

                  display: 'flex',

                  alignItems: 'center',

                  justifyContent: 'space-between',

                  borderBottom: '3px solid #84A4B1',

                  paddingBottom: 24,

                  marginBottom: 28,

                }}

              >

                <div>

                  <h2

                    style={{

                      margin: 0,

                      fontSize: 34,

                      fontWeight: 800,

                      color: '#0F1E36',

                    }}

                  >

                    FNAR

                  </h2>

                  <p

                    style={{

                      margin: '8px 0 0',

                      fontSize: 14,

                      color: '#557080',

                    }}

                  >

                    الفواتير والمستندات

                  </p>

                </div>

                <div style={{ textAlign: 'left' }}>

                  <h3

                    style={{

                      margin: 0,

                      fontSize: 20,

                      color: '#0F1E36',

                    }}

                  >

                    {TITLES[kind]}

                  </h3>

                  <p

                    style={{

                      margin: '10px 0 0',

                      fontSize: 12,

                      color: '#64748B',

                    }}

                  >

                    تاريخ الإنشاء:{' '}

                    {new Date().toLocaleDateString('ar-KW')}

                  </p>

                </div>

              </div>

              <h3 style={pdfHeadingStyle}>

                بيانات {isSubscription ? 'المشترك' : 'العميل'}

              </h3>

              <div

                style={{

                  display: 'grid',

                  gridTemplateColumns: '1fr 1fr',

                  gap: 12,

                }}

              >

                {fields.slice(0, 3).map((field) => (

                  <div

                    key={field.id}

                    style={{

                      padding: 16,

                      backgroundColor: '#F1F5F9',

                      borderRadius: 8,

                      overflowWrap: 'anywhere',

                    }}

                  >

                    <p

                      style={{

                        margin: '0 0 8px',

                        fontSize: 12,

                        color: '#64748B',

                      }}

                    >

                      {field.label}

                    </p>

                    <p

                      style={{

                        margin: 0,

                        fontSize: 15,

                        fontWeight: 600,

                        whiteSpace: 'pre-wrap',

                      }}

                    >

                      {values[field.id] || '—'}

                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* PAGE SECTION 2: TRANSACTION / SUBSCRIPTION DETAILS */}

            <div

              data-pdf-section

              style={pdfSectionStyle}

            >

              <h3 style={pdfHeadingStyle}>

                {isSubscription

                  ? 'تفاصيل الاشتراك'

                  : `تفاصيل عملية ${operation}`}

              </h3>

              {!isSubscription && (

                <div

                  style={{

                    marginBottom: 12,

                    padding: 16,

                    backgroundColor: '#EAF1F4',

                    borderRadius: 8,

                  }}

                >

                  <p

                    style={{

                      margin: '0 0 8px',

                      fontSize: 12,

                      color: '#64748B',

                    }}

                  >

                    نوع العملية

                  </p>

                  <p

                    style={{

                      margin: 0,

                      fontSize: 15,

                      fontWeight: 700,

                    }}

                  >

                    {isDeposit ? 'إيداع' : 'سحب'}

                  </p>

                </div>

              )}

              <div

                style={{

                  display: 'grid',

                  gridTemplateColumns: '1fr 1fr',

                  gap: 12,

                }}

              >

                {fields

                  .slice(3)

                  .filter((field) => !field.wide)

                  .map((field) => (

                    <div

                      key={field.id}

                      style={{

                        padding: 16,

                        backgroundColor: '#F1F5F9',

                        borderRadius: 8,

                        overflowWrap: 'anywhere',

                      }}

                    >

                      <p

                        style={{

                          margin: '0 0 8px',

                          fontSize: 12,

                          color: '#64748B',

                        }}

                      >

                        {field.label}

                      </p>

                      <p

                        style={{

                          margin: 0,

                          fontSize: 15,

                          fontWeight: 600,

                          whiteSpace: 'pre-wrap',

                        }}

                      >

                        {values[field.id] || '—'}

                      </p>

                    </div>

                  ))}

              </div>

            </div>

            {/* INDIVIDUAL NOTE SECTION */}

            {fields

              .filter((field) => field.wide)

              .map((field) => (

                <div

                  data-pdf-section

                  key={field.id}

                  style={pdfSectionStyle}

                >

                  <h3 style={pdfHeadingStyle}>

                    {field.label}

                  </h3>

                  <div

                    style={{

                      padding: 18,

                      backgroundColor: '#F1F5F9',

                      borderRadius: 8,

                      fontSize: 14,

                      lineHeight: 2,

                      whiteSpace: 'pre-wrap',

                      overflowWrap: 'anywhere',

                    }}

                  >

                    {values[field.id] || 'لا توجد ملاحظات'}

                  </div>

                </div>

              ))}

            {/* TERMS: EACH TERM IS AN INDEPENDENT PDF SECTION */}

            <div

              data-pdf-section

              style={pdfSectionStyle}

            >

              <h3 style={pdfHeadingStyle}>

                الشروط والأحكام

              </h3>

              <p

                style={{

                  margin: 0,

                  fontSize: 13,

                  lineHeight: 2,

                  color: '#475569',

                }}

              >

                يرجى الاطلاع على جميع البنود التالية.

              </p>

            </div>

            {terms.map((term, index) => (

              <div

                data-pdf-section

                key={`term-${index}`}

                style={{

                  ...pdfSectionStyle,

                  paddingTop: 12,

                  paddingBottom: 12,

                }}

              >

                <div

                  style={{

                    display: 'flex',

                    alignItems: 'flex-start',

                    gap: 14,

                    padding: 16,

                    border: '1px solid #E2E8F0',

                    borderRadius: 8,

                    backgroundColor: '#F8FAFC',

                  }}

                >

                  <span

                    style={{

                      flexShrink: 0,

                      display: 'inline-flex',

                      alignItems: 'center',

                      justifyContent: 'center',

                      width: 32,

                      height: 32,

                      borderRadius: 8,

                      backgroundColor: '#EAF1F4',

                      color: '#0F1E36',

                      fontSize: 12,

                      fontWeight: 700,

                    }}

                  >

                    {index + 1}

                  </span>

                  <p

                    style={{

                      flex: 1,

                      margin: 0,

                      fontSize: 14,

                      lineHeight: 2,

                      color: '#334155',

                      overflowWrap: 'anywhere',

                    }}

                  >

                    {term}

                  </p>

                </div>

              </div>

            ))}

            {/* ACKNOWLEDGMENT + FOOTER */}

            <div

              data-pdf-section

              style={pdfSectionStyle}

            >

              <div

                style={{

                  padding: 22,

                  borderRadius: 10,

                  backgroundColor: '#EAF1F4',

                  border: '1px solid #C8D9E0',

                }}

              >

                <h3

                  style={{

                    margin: '0 0 16px',

                    fontSize: 18,

                    fontWeight: 700,

                    color: '#0F1E36',

                  }}

                >

                  الإقرار وإثبات الدفع

                </h3>

                <p

                  style={{

                    margin: '0 0 14px',

                    fontSize: 14,

                    lineHeight: 2,

                    color: '#334155',

                  }}

                >

                  أقر بصحة البيانات المدخلة وأوافق على

                  الشروط والأحكام المذكورة في هذا النموذج.

                </p>

                <p

                  style={{

                    margin: '0 0 12px',

                    fontSize: 14,

                    fontWeight: 600,

                  }}

                >

                  حالة الإقرار: تمت الموافقة إلكترونيًا

                </p>

                <p

                  style={{

                    margin: 0,

                    fontSize: 13,

                    lineHeight: 2,

                    overflowWrap: 'anywhere',

                  }}

                >

                  ملف إثبات الدفع: {receipt?.name ?? '—'}

                </p>

              </div>

              <div

                style={{

                  marginTop: 28,

                  paddingTop: 18,

                  borderTop: '1px solid #CBD5E1',

                  textAlign: 'center',

                  fontSize: 12,

                  color: '#64748B',

                }}

              >

                FNAR — نسخة مكتملة بواسطة صاحب الطلب

              </div>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}

function BankCard({

  bank,

  index,

}: {

  bank: Bank;

  index: number;

}) {

  const [copied, setCopied] = useState(false);

  async function copyAccount() {

    try {

      await navigator.clipboard.writeText(bank.account);

      setCopied(true);

    } catch {

      setCopied(false);

    }

  }

  return (

    <article className="overflow-hidden rounded-[22px] border border-white/10 bg-[#0F1E36]/70 transition-all duration-300 hover:border-[#84A4B1]/35 hover:bg-[#11243D]">

      <div className="flex items-start gap-4 border-b border-white/[0.07] p-5 sm:p-6">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#84A4B1]/20 bg-[#84A4B1]/10 text-[#A9C3CD]">

          <Landmark className="h-5 w-5" />

        </div>

        <div className="min-w-0 flex-1">

          <h3 className="text-base font-bold leading-7 text-white">

            {bank.name}

          </h3>

          <p

            dir="ltr"

            className="mt-1 text-right text-xs text-[#84A4B1]"

          >

            {bank.englishName}

          </p>

        </div>

        <span className="rounded-lg border border-white/10 px-2.5 py-1 text-xs font-semibold tabular-nums text-white/45">

          {String(index + 1).padStart(2, '0')}

        </span>

      </div>

      <div className="space-y-5 p-5 sm:p-6">

        <div>

          <p className="mb-2 text-xs text-[#A1BBC5]">

            رقم الحساب

          </p>

          <div className="flex flex-wrap items-center gap-2 rounded-xl border border-[#84A4B1]/15 bg-[#84A4B1]/[0.07] p-3">

            <p

              dir="ltr"

              className="min-w-0 flex-1 break-all text-left font-mono text-sm font-semibold tracking-wide text-[#E4F0F4]"

            >

              {bank.account}

            </p>

            <button

              type="button"

              onClick={copyAccount}

              aria-label={`نسخ رقم حساب ${bank.name}`}

              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#84A4B1]/25 bg-[#84A4B1]/10 px-3 py-2 text-xs font-medium text-[#C0D3DA] transition-colors hover:bg-[#84A4B1]/20"

            >

              {copied ? (

                <CheckCircle2 className="h-4 w-4" />

              ) : (

                <Copy className="h-4 w-4" />

              )}

              {copied ? 'تم النسخ' : 'نسخ'}

            </button>

          </div>

        </div>

        <div>

          <p className="mb-2 text-xs text-[#A1BBC5]">

            اسم صاحب الحساب

          </p>

          <p

            dir="ltr"

            className="break-words text-left text-sm font-medium leading-7 text-white/85"

          >

            {bank.holder}

          </p>

        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] pt-4">

          <span className="inline-flex items-center gap-2 text-xs text-[#A1BBC5]">

            <Phone className="h-3.5 w-3.5" />

            خدمة العملاء

          </span>

          <span

            dir="ltr"

            className="font-mono text-sm font-semibold tabular-nums text-[#E4F0F4]"

          >

            {bank.phone}

          </span>

        </div>

      </div>

    </article>

  );

}

function BankBeneficiaryDocument() {

  return (

    <div className="space-y-6">

      <DocumentIntro

        eyebrow="التحويلات البنكية"

        title="بيانات المستفيد"

        description="اختر البنك وانسخ رقم الحساب بسهولة."

        icon={Building2}

      />

      <Section

        number="01"

        title="بيانات الحسابات البنكية"

        description="الحسابات المتاحة لإضافة المستفيد في البنوك الكويتية."

        icon={Landmark}

      >

        <div className="grid gap-4 lg:grid-cols-2">

          {BANKS.map((bank, index) => (

            <BankCard

              key={bank.englishName}

              bank={bank}

              index={index}

            />

          ))}

        </div>

      </Section>

      <Section

        number="02"

        title="تنبيهات مهمة تتعلق بآلية الدفع"

        description="تعليمات التحويل والإجراءات الواجب مراعاتها."

        icon={ShieldCheck}

      >

        <Terms items={PAYMENT_NOTICES} />

      </Section>

      <Section

        number="03"

        title="إتمام عملية إضافتي كمستفيد"

        description="خطوات تفعيل المستفيد بعد إضافته."

        icon={BadgeCheck}

      >

        <div className="rounded-2xl border border-[#84A4B1]/15 bg-[#84A4B1]/[0.06] p-5 sm:p-6">

          <p className="text-sm leading-9 text-[#F3F3F1]/85">

            لتفعيل المستفيد بسرعة وسلاسة، يرجى التواصل المباشر

            مع مركز خدمة عملاء المصرف الذي تتعامل معه،

            حيث يمكنهم إجراء التفعيل فورًا أثناء المكالمة.

          </p>

          <p className="mt-4 text-sm leading-8 text-[#F3F3F1]/60">

            أرقام خدمة العملاء الخاصة بكل بنك موضحة أعلاه.

          </p>

        </div>

      </Section>

      <Section

        number="04"

        title="معلومات التواصل"

        description="قنوات التواصل المتعلقة بالاشتراك والمتابعة."

        icon={Phone}

      >

        <p className="mb-6 text-sm leading-8 text-[#F3F3F1]/70">

          لأي استفسارات تتعلق بالاشتراك أو المحتوى التعليمي

          أو المتابعة الفنية، يرجى التواصل عبر:

        </p>

        <div className="grid gap-4 sm:grid-cols-2">

          <a

            href="https://wa.me/96596928555"

            target="_blank"

            rel="noopener noreferrer"

            className="rounded-2xl border border-white/10 bg-[#0F1E36]/60 p-5 transition-colors hover:border-[#84A4B1]/35"

          >

            <p className="mb-3 text-xs text-[#A1BBC5]">

              واتساب

            </p>

            <p

              dir="ltr"

              className="text-left text-base font-semibold text-[#F3F3F1]"

            >

              +965 9692 8555

            </p>

          </a>

          <div className="rounded-2xl border border-white/10 bg-[#0F1E36]/60 p-5">

            <p className="mb-3 text-xs text-[#A1BBC5]">

              إنستغرام

            </p>

            <p

              dir="ltr"

              className="text-left text-base font-semibold text-[#F3F3F1]"

            >

              K_W

            </p>

          </div>

        </div>

      </Section>

    </div>

  );

}

export default function InvoiceDocumentPage() {

  const { documentId } = useParams<{ documentId: string }>();

  const documents = useInvoiceDocuments();

  const key = isDocumentKey(documentId)

    ? documentId

    : null;

  const document = useMemo(

    () =>

      key

        ? documents.find(

            (item) => item.id === DOCUMENT_IDS[key]

          )

        : undefined,

    [documents, key]

  );

  if (!key) {

    return (

      <main

        dir="rtl"

        className="font-arabic flex min-h-screen flex-col items-center justify-center gap-6 bg-[#0F1E36] px-5 text-center text-[#F3F3F1]"

      >

        <AlertCircle className="h-10 w-10 text-[#84A4B1]" />

        <h1 className="text-2xl font-bold">

          المستند غير موجود

        </h1>

        <p className="max-w-md text-sm leading-8 text-white/55">

          لم نتمكن من العثور على المستند المطلوب.

        </p>

        <Link

          to="/invoices"

          className="inline-flex items-center gap-2 text-sm text-[#84A4B1] underline underline-offset-4"

        >

          <ArrowRight className="h-4 w-4" />

          العودة إلى الفواتير

        </Link>

      </main>

    );

  }

  const canDownload = document?.status === 'available';

  return (

    <div

      dir="rtl"

      className="font-arabic relative min-h-screen overflow-hidden bg-[#0F1E36] text-[#F3F3F1]"

    >

      <div

        aria-hidden="true"

        className="pointer-events-none absolute inset-0 opacity-40"

        style={{

          backgroundImage:

            'linear-gradient(rgba(132,164,177,.05) 1px, transparent 1px), ' +

            'linear-gradient(90deg, rgba(132,164,177,.05) 1px, transparent 1px)',

          backgroundSize: '84px 84px',

        }}

      />

      <div

        aria-hidden="true"

        className="pointer-events-none absolute -right-40 top-16 h-[450px] w-[450px] rounded-full bg-[#84A4B1]/[0.05] blur-[100px]"

      />

      <main className="relative z-10 mx-auto max-w-[1100px] px-5 pb-28 pt-32 sm:px-6 sm:pt-40 lg:px-10">

        <nav aria-label="مسار الصفحة">

          <Link

            to="/invoices"

            className="inline-flex items-center gap-2 text-sm text-[#84A4B1] transition-colors hover:text-white"

          >

            <ArrowRight className="h-4 w-4" />

            العودة إلى الفواتير

          </Link>

        </nav>

        <header className="relative mb-10 mt-10 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-bl from-[#1B3450] via-[#152A44] to-[#112139] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.16)] sm:mb-12 sm:p-10 lg:p-12">

          <div

            aria-hidden="true"

            className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[#84A4B1]/10 blur-3xl"

          />

          <div className="relative">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#84A4B1]/25 bg-[#84A4B1]/10 px-4 py-2 text-xs font-medium text-[#BDD2DA]">

              <FileText className="h-4 w-4" />

              الفواتير والمستندات

            </div>

            <h1 className="max-w-[850px] text-3xl font-bold leading-[1.5] text-white sm:text-4xl lg:text-5xl">

              {TITLES[key]}

            </h1>

            <p className="mt-5 max-w-[720px] text-sm leading-8 text-white/60 sm:text-base">

              {DESCRIPTIONS[key]}

            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/10 pt-7">

              {canDownload && document ? (

                <a

                  href={document.filePath}

                  download

                  className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-[#84A4B1] px-7 text-sm font-bold text-[#0F1E36] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#A9C3CD]"

                >

                  <Download className="h-4 w-4" />

                  تحميل المستند الأصلي

                  <span className="rounded-md bg-[#0F1E36]/10 px-2 py-1 text-[10px] font-bold uppercase">

                    {document.fileType}

                  </span>

                </a>

              ) : (

                <div className="inline-flex min-h-[50px] items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs text-white/65">

                  <AlertCircle className="h-4 w-4" />

                  {document?.status === 'checking'

                    ? 'جارٍ التحقق من توفر الملف الأصلي…'

                    : 'الملف الأصلي غير متوفر للتحميل حاليًا'}

                </div>

              )}

              <span className="text-xs text-white/45">

                {key === 'bank-beneficiary'

                  ? 'عرض بيانات الحسابات البنكية'

                  : 'نموذج تفاعلي لتعبئة بيانات المستند'}

              </span>

            </div>

          </div>

        </header>

        {key === 'deposit' && (

          <InvoiceForm key="deposit" kind="deposit" />

        )}

        {key === 'withdrawal' && (

          <InvoiceForm key="withdrawal" kind="withdrawal" />

        )}

        {key === 'subscription' && (

          <InvoiceForm key="subscription" kind="subscription" />

        )}

        {key === 'bank-beneficiary' && (

          <BankBeneficiaryDocument />

        )}

        <footer className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-8">

          <p className="text-xs leading-7 text-white/40">

            FNAR — الفواتير والمستندات

          </p>

          <Link

            to="/invoices"

            className="inline-flex items-center gap-2 text-sm font-medium text-[#A9C3CD] transition-colors hover:text-white"

          >

            <ArrowRight className="h-4 w-4" />

            العودة إلى جميع المستندات

          </Link>

        </footer>

      </main>

    </div>

  );

}
