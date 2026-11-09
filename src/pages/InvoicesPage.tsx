
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useInvoiceDocuments } from '@/hooks/useInvoiceDocuments';
import type {
  InvoiceDocumentStatus,
  ResolvedInvoiceDocument,
} from '@/types';

gsap.registerPlugin(ScrollTrigger);

const DOCUMENT_ROUTES: Record<string, string> = {
  'deposit-invoice': '/invoices/deposit',
  'withdrawal-invoice': '/invoices/withdrawal',
  'channel-subscription-invoice': '/invoices/subscription',
  'beneficiary-data-form': '/invoices/bank-beneficiary',
};

const STATUS_LABELS: Record<InvoiceDocumentStatus, string> = {
  checking: 'جارٍ التحقق',
  available: 'متاح للتحميل',
  unavailable: 'غير متوفر',
};

const STATUS_CLASSES: Record<InvoiceDocumentStatus, string> = {
  checking: 'text-[#84A4B1]/70',
  available: 'text-[#84A4B1]',
  unavailable: 'text-[#F3F3F1]/35',
};

/** Formats a real byte count (derived from the served file) in Arabic. */
function formatFileSize(bytes: number): string {
  if (bytes >= 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(1)} ميجابايت`;
  }

  if (bytes >= 1024) {
    return `${Math.round(bytes / 1024)} كيلوبايت`;
  }

  return `${bytes} بايت`;
}

export default function InvoicesPage() {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();
  const documents = useInvoiceDocuments();

  // RESTRAINED ENTRANCE — HEADER FADES IN, CARDS REVEAL ON SCROLL.
  useEffect(() => {
    const page = pageRef.current;
    if (!page || reduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-inv-header]',
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.09,
          clearProps: 'transform',
        }
      );

      gsap.utils
        .toArray<HTMLElement>('[data-inv-card]')
        .forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power3.out',
              clearProps: 'transform',
              scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                once: true,
              },
            }
          );
        });
    }, page);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <div
      ref={pageRef}
      dir="rtl"
      className="font-arabic relative isolate min-h-screen overflow-hidden bg-[#0F1E36]"
    >
      {/* SUBTLE ARCHITECTURAL GRID — SAME LANGUAGE AS PAGE HERO */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(rgba(132,164,177,.05) 1px, transparent 1px), ' +
            'linear-gradient(90deg, rgba(132,164,177,.05) 1px, transparent 1px)',
          backgroundSize: '84px 84px',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[110px] top-[90px] z-0 h-[340px] w-[340px] rounded-full border border-white/[0.06] sm:-left-[70px] sm:h-[460px] sm:w-[460px]"
      />

      {/* FNAR WATERMARK — DECORATIVE */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          z-0
          w-[220px]
          -translate-x-1/2
          overflow-hidden
          sm:w-[320px]
          lg:w-[440px]
        "
      >
        <img
          src="/brand/fnar-wordmark-logo-light.svg"
          alt=""
          draggable={false}
          className="
            block
            h-auto
            w-full
            select-none
            object-contain
            object-bottom
            opacity-[0.08]
          "
        />
      </div>

      {/* PAGE HEADER */}

      <header className="relative z-10 mx-auto max-w-[1240px] px-5 pt-[124px] text-center sm:px-6 sm:pt-[140px] lg:px-10 lg:pt-[152px]">
        <div data-inv-header className="flex justify-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[#84A4B1]/30 bg-[#84A4B1]/10 px-5 py-2.5 text-[11px] font-medium tracking-[0.04em] text-[#84A4B1]">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#84A4B1]"
            />
            الفواتير والمستندات
          </span>
        </div>

        <h1
          data-inv-header
          className="mt-7 text-[clamp(3rem,9vw,5rem)] font-bold leading-[1.25] tracking-[-0.03em] text-[#F3F3F1]"
        >
          الفواتير
        </h1>

        <p
          data-inv-header
          className="mx-auto mt-5 max-w-[540px] text-[14px] leading-8 text-[#F3F3F1]/60 sm:text-[15px]"
        >
          تصفح الفواتير والمستندات واطلع على تفاصيل كل مستند قبل تحميله
        </p>

        <div
          data-inv-header
          className="mx-auto mt-9 flex items-center justify-center gap-4"
        >
          <span
            aria-hidden="true"
            className="h-px w-12 bg-[#84A4B1]/40 sm:w-16"
          />

          <span
            dir="ltr"
            className="font-sans text-[9px] tracking-[0.3em] text-[#84A4B1]/70"
          >
            FNAR / DOCUMENTS
          </span>

          <span
            aria-hidden="true"
            className="h-px w-12 bg-[#84A4B1]/40 sm:w-16"
          />
        </div>
      </header>

      {/* DOCUMENT GRID */}

      <main className="relative z-10 mx-auto max-w-[1240px] px-5 pb-28 pt-16 sm:px-6 sm:pt-20 lg:px-10 lg:pt-24 lg:pb-36">
        <section aria-labelledby="invoices-grid-heading">
          <h2
            id="invoices-grid-heading"
            className="sr-only"
          >
            قائمة الفواتير والمستندات
          </h2>

          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc) => (
              <DocumentCard key={doc.id} doc={doc} />
            ))}
          </ul>

          <p className="mx-auto mt-12 max-w-[620px] text-center text-[12px] leading-7 text-[#F3F3F1]/45 sm:text-[13px]">
            تُضاف الفواتير والمستندات الجديدة إلى هذه الصفحة فور توفرها.
            وإن واجهت أي مشكلة في عرض مستند، فيرجى{' '}
            <Link
              to="/contact"
              className="font-medium text-[#84A4B1] underline-offset-4 transition-colors hover:text-[#F3F3F1] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#84A4B1]"
            >
              التواصل معنا
            </Link>
            .
          </p>
        </section>
      </main>
    </div>
  );
}

/* ================= DOCUMENT CARD ================= */

function DocumentCard({ doc }: { doc: ResolvedInvoiceDocument }) {
  const isChecking = doc.status === 'checking';

  const sizeLabel =
    doc.fileSizeBytes !== null
      ? formatFileSize(doc.fileSizeBytes)
      : isChecking
        ? 'جارٍ تحديد الحجم…'
        : '—';

  const fileBadge =
    doc.fileType === 'other'
      ? 'FILE'
      : doc.fileType.toUpperCase();

  const documentRoute = DOCUMENT_ROUTES[doc.id];

  return (
    <li data-inv-card className="flex h-full">
      <article
        className="
          group
          flex
          h-full
          w-full
          flex-col
          rounded-[20px]
          border
          border-white/10
          bg-[#152742]
          p-6
          sm:p-7
          transition-[border-color,box-shadow,transform]
          duration-500
          ease-out
          hover:-translate-y-1.5
          hover:border-[#84A4B1]/40
          hover:shadow-[0_28px_60px_-24px_rgba(4,10,22,0.95)]
          focus-within:border-[#84A4B1]/40
        "
      >
        {/* ICON + FILE TYPE */}

        <div className="mb-6 flex items-start justify-between gap-4">
          <span
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-[14px]
              border
              border-white/10
              bg-[#0F1E36]/70
              text-[#84A4B1]
              transition-colors
              duration-500
              group-hover:border-[#84A4B1]/30
              group-hover:text-[#9FBAC5]
            "
          >
            <FileText
              aria-hidden="true"
              strokeWidth={1.5}
              className="h-5 w-5"
            />
          </span>

          <span
            dir="ltr"
            className="
              rounded-full
              border
              border-[#84A4B1]/25
              bg-[#84A4B1]/10
              px-3
              py-1.5
              font-sans
              text-[9px]
              font-medium
              tracking-[0.18em]
              text-[#84A4B1]/85
            "
          >
            {fileBadge}
          </span>
        </div>

        {/* TITLE + META */}

        <h3 className="text-[17px] font-bold leading-[1.7] text-[#F3F3F1] sm:text-[18px]">
          {doc.title}
        </h3>

        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-[#F3F3F1]/45">
          <span>{sizeLabel}</span>

          <span
            aria-hidden="true"
            className="h-1 w-1 rounded-full bg-white/20"
          />

          <span
            className={`inline-flex items-center gap-2 ${STATUS_CLASSES[doc.status]}`}
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-current"
            />
            {STATUS_LABELS[doc.status]}
          </span>
        </div>

        {/* DOCUMENT DETAILS — PRESSED TO THE BOTTOM OF THE CARD */}

        <div className="mt-auto pt-7">
          {documentRoute ? (
            <Link
              to={documentRoute}
              data-cursor="hover"
              aria-label={`عرض ${doc.title}`}
              className="
                flex
                min-h-[48px]
                w-full
                items-center
                justify-center
                gap-2.5
                rounded-full
                bg-[#84A4B1]
                px-6
                text-[13px]
                font-bold
                text-[#0F1E36]
                transition-colors
                duration-300
                hover:bg-[#9FBAC5]
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#84A4B1]
              "
            >
              <FileText
                aria-hidden="true"
                strokeWidth={2}
                className="h-4 w-4"
              />
              عرض المستند
              <ArrowLeft
                aria-hidden="true"
                strokeWidth={2}
                className="h-4 w-4"
              />
            </Link>
          ) : (
            <p className="text-center text-[12px] leading-6 text-[#F3F3F1]/45">
              صفحة المستند قيد الإعداد
            </p>
          )}
        </div>
      </article>
    </li>
  );
}
