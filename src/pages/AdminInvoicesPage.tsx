
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Eye,
  FileText,
  Filter,
  ReceiptText,
  Search,
  Wallet,
  X,
} from 'lucide-react';
import {
  useInvoiceSubmissions,
  invoiceActions,
  type InvoiceStatus,
} from '@/hooks/useInvoiceSubmissions';

const typeLabels: Record<InvoiceType, string> = {
  deposit: 'إيداع',
  withdrawal: 'سحب',
  subscription: 'اشتراك',
};

const statusLabels: Record<InvoiceStatus, string> = {
  pending: 'قيد المراجعة',
  approved: 'مقبولة',
  rejected: 'مرفوضة',
};

const statusStyles: Record<InvoiceStatus, string> = {
  pending: 'bg-amber-50 text-amber-700 border-amber-200',
  approved: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  rejected: 'bg-red-50 text-red-700 border-red-200',
};

const inputClass =
  'w-full rounded-xl border border-[#1D2C4F]/15 bg-white ' +
  'px-4 py-3 text-[13px] text-[#1D2C4F] outline-none ' +
  'focus:border-[#84A4B1]';

function StatusBadge({ status }: { status: InvoiceStatus }) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1.5 text-[11px] font-semibold ${statusStyles[status]}`}
    >
      {statusLabels[status]}
    </span>
  );
}

export default function AdminInvoicesPage() {
  const invoices = useInvoiceSubmissions();
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedInvoice =
    invoices.find((invoice) => invoice.id === selectedId) ?? null;

  const filteredInvoices = useMemo(() => {
    const query = search.trim().toLowerCase();

    return invoices.filter((invoice) => {
      const matchesSearch =
        !query ||
        [
          invoice.id,
          invoice.customerName,
          invoice.phone,
          invoice.identityNumber,
        ].some((value) => value.toLowerCase().includes(query));

      const matchesType =
        typeFilter === 'all' || invoice.type === typeFilter;

      const matchesStatus =
        statusFilter === 'all' || invoice.status === statusFilter;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [invoices, search, typeFilter, statusFilter]);

  const stats = {
    total: invoices.length,
    pending: invoices.filter((item) => item.status === 'pending').length,
    approved: invoices.filter((item) => item.status === 'approved').length,
    rejected: invoices.filter((item) => item.status === 'rejected').length,
  };

  function updateStatus(id: string, status: InvoiceStatus) {
    try {
        invoiceActions.updateStatus(id, status);
      } catch (error) {
        console.error('Failed to update invoice status:', error);
        window.alert('تعذر حفظ حالة الفاتورة. يرجى المحاولة مرة أخرى.');
      }
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#F3F3F1] px-5 pb-20 pt-32 font-arabic text-[#1D2C4F] sm:px-8"
    >
      <div className="mx-auto max-w-[1380px]">
        <div className="mb-9 flex flex-wrap items-start justify-between gap-5">
          <div>
            <p className="mb-3 text-[11px] font-semibold tracking-widest text-[#54707D]">
              FNAR / INVOICE MANAGEMENT
            </p>

            <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold">
              إدارة الفواتير
            </h1>

            <p className="mt-3 text-[13px] leading-7 text-[#1D2C4F]/60">
              مراجعة طلبات الإيداع والسحب والاشتراك وإدارة حالاتها.
            </p>
          </div>

          <Link
            to="/admin"
            className="inline-flex items-center gap-2 rounded-full bg-[#1D2C4F] px-5 py-3 text-[12px] text-white"
          >
            <ArrowRight size={16} />
            العودة إلى لوحة الإدارة
          </Link>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'إجمالي الفواتير',
              value: stats.total,
              icon: FileText,
            },
            {
              title: 'قيد المراجعة',
              value: stats.pending,
              icon: Clock3,
            },
            {
              title: 'الفواتير المقبولة',
              value: stats.approved,
              icon: CheckCircle2,
            },
            {
              title: 'الفواتير المرفوضة',
              value: stats.rejected,
              icon: Wallet,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[20px] border border-[#1D2C4F]/10 bg-white p-6"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#84A4B1]/15 text-[#54707D]">
                  <Icon size={21} />
                </div>
                <p className="text-[12px] text-[#1D2C4F]/55">
                  {item.title}
                </p>
                <p className="mt-2 font-sans text-3xl font-bold">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>

        <section className="overflow-hidden rounded-[22px] border border-[#1D2C4F]/10 bg-white">
          <div className="border-b border-[#1D2C4F]/10 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <ReceiptText size={23} className="text-[#54707D]" />
              <h2 className="text-xl font-bold">سجل الفواتير</h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1fr_200px_200px]">
              <label className="relative block">
                <Search
                  size={17}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#54707D]"
                />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="ابحث بالرقم أو الاسم أو الهاتف..."
                  aria-label="بحث الفواتير"
                  className={`${inputClass} pr-11`}
                />
              </label>

              <label className="relative">
                <Filter
                  size={16}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#54707D]"
                />
                <select
                  value={typeFilter}
                  onChange={(event) => setTypeFilter(event.target.value)}
                  aria-label="تصفية حسب نوع الفاتورة"
                  className={`${inputClass} pr-10`}
                >
                  <option value="all">جميع الأنواع</option>
                  <option value="deposit">إيداع</option>
                  <option value="withdrawal">سحب</option>
                  <option value="subscription">اشتراك</option>
                </select>
              </label>

              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                aria-label="تصفية حسب الحالة"
                className={inputClass}
              >
                <option value="all">جميع الحالات</option>
                <option value="pending">قيد المراجعة</option>
                <option value="approved">مقبولة</option>
                <option value="rejected">مرفوضة</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-right">
              <thead className="bg-[#F3F3F1] text-[11px] text-[#54707D]">
                <tr>
                  {[
                    'رقم الفاتورة',
                    'العميل',
                    'النوع',
                    'المبلغ',
                    'التاريخ',
                    'الحالة',
                    'التفاصيل',
                  ].map((heading) => (
                    <th key={heading} className="px-6 py-4 font-semibold">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-[#1D2C4F]/10">
                {filteredInvoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-[#F3F3F1]/60">
                    <td className="px-6 py-5 font-sans text-xs font-semibold">
                      {invoice.id}
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-[13px] font-semibold">
                        {invoice.customerName}
                      </p>
                      <p className="mt-1 text-[11px] text-[#54707D]">
                        {invoice.phone}
                      </p>
                    </td>
                    <td className="px-6 py-5 text-xs">
                      {typeLabels[invoice.type]}
                    </td>
                    <td className="px-6 py-5 font-sans text-xs">
                      {invoice.amount.toLocaleString('en-US')}{' '}
                      {invoice.currency}
                    </td>
                    <td className="px-6 py-5 text-xs">
                      {invoice.createdAt}
                    </td>
                    <td className="px-6 py-5">
                      <StatusBadge status={invoice.status} />
                    </td>
                    <td className="px-6 py-5">
                      <button
                        type="button"
                        onClick={() => setSelectedId(invoice.id)}
                        className="inline-flex items-center gap-2 rounded-full border border-[#1D2C4F]/15 px-4 py-2 text-xs hover:bg-[#F3F3F1]"
                      >
                        <Eye size={15} />
                        عرض
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredInvoices.length === 0 && (
              <div className="px-6 py-16 text-center text-sm text-[#54707D]">
                لا توجد فواتير مطابقة للبحث.
              </div>
            )}
          </div>

          <div className="border-t border-[#1D2C4F]/10 px-6 py-4 text-xs text-[#54707D]">
            عرض {filteredInvoices.length} من أصل {invoices.length} فاتورة
          </div>
        </section>
      </div>

      {selectedInvoice && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0B1729]/75 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedId(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="invoice-details-title"
            className="flex max-h-[calc(100dvh-2rem)] w-full max-w-[700px] flex-col overflow-hidden rounded-[22px] bg-[#F3F3F1] shadow-2xl"
          >
            <div className="flex shrink-0 items-center justify-between border-b border-[#1D2C4F]/10 p-6">
              <div>
                <p className="text-[11px] text-[#54707D]">
                  INVOICE DETAILS
                </p>
                <h2
                  id="invoice-details-title"
                  className="mt-2 text-xl font-bold"
                >
                  تفاصيل الفاتورة {selectedInvoice.id}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedId(null)}
                aria-label="إغلاق التفاصيل"
                className="rounded-full border border-[#1D2C4F]/10 p-3"
              >
                <X size={18} />
              </button>
            </div>

            <div className="min-h-0 flex-1 space-y-6 overflow-y-auto p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ['العميل', selectedInvoice.customerName],
                  ['رقم الهاتف', selectedInvoice.phone],
                  ['الرقم المدني / الجواز', selectedInvoice.identityNumber],
                  ['نوع الفاتورة', typeLabels[selectedInvoice.type]],
                  [
                    'المبلغ',
                    `${selectedInvoice.amount} ${selectedInvoice.currency}`,
                  ],
                  ['وسيلة التحويل', selectedInvoice.transferMethod],
                  ['تاريخ الطلب', selectedInvoice.createdAt],
                  ['اسم ملف الإيصال', selectedInvoice.receiptName],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[#1D2C4F]/10 bg-white p-4"
                  >
                    <p className="mb-2 text-[11px] text-[#54707D]">
                      {label}
                    </p>
                    <p className="break-words text-[13px] font-semibold">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-[#1D2C4F]/10 bg-white p-5">
                <p className="mb-2 text-xs font-semibold">الملاحظات</p>
                <p className="text-xs leading-7 text-[#54707D]">
                  {selectedInvoice.notes || 'لا توجد ملاحظات'}
                </p>
              </div>

              <div className="rounded-xl border border-[#1D2C4F]/10 bg-white p-5">
                <div className="mb-3 flex items-center gap-2">
                  <CalendarDays size={17} />
                  <p className="text-xs font-semibold">إثبات الدفع</p>
                </div>
                <p className="text-xs leading-7 text-[#54707D]">
                  {selectedInvoice.receiptName}
                </p>
                <p className="mt-2 text-xs text-[#54707D]">
                  معاينة الإيصال ستكون متاحة بعد ربط الخادم.
                </p>
              </div>

              <div className="rounded-xl border border-[#1D2C4F]/10 bg-white p-5">
                <p className="mb-4 text-sm font-bold">حالة الفاتورة</p>
                <StatusBadge status={selectedInvoice.status} />

                <div className="mt-5 flex flex-wrap gap-3">
                  {(
                    [
                      ['pending', 'قيد المراجعة'],
                      ['approved', 'قبول'],
                      ['rejected', 'رفض'],
                    ] as const
                  ).map(([status, label]) => (
                    <button
                      key={status}
                      type="button"
                      disabled={selectedInvoice.status === status}
                      onClick={() =>
                        updateStatus(selectedInvoice.id, status)
                      }
                      className="rounded-full border border-[#1D2C4F]/15 px-5 py-2.5 text-xs font-semibold hover:bg-[#F3F3F1] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <p className="mt-4 text-xs text-[#54707D]">
                  يتم حفظ حالة الفاتورة محليًا في هذا المتصفح.
                </p>
                <div className="mb-8 rounded-2xl border border-[#84A4B1]/30 bg-[#84A4B1]/10 p-5">
                  <p className="text-sm font-semibold text-[#1D2C4F]">
                    إدارة الفواتير المحلية
                  </p>
                  <p className="mt-2 text-xs leading-7 text-[#54707D]">
                    تعرض هذه الصفحة الفواتير المحفوظة في هذا المتصفح فقط.
                    لن تظهر طلبات المستخدمين من أجهزة أو متصفحات أخرى
                    حتى يتم ربط النظام بالخادم.
                  </p>
                </div>
              </div>
            </div>

            <div className="shrink-0 border-t border-[#1D2C4F]/10 p-5">
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="rounded-full bg-[#1D2C4F] px-7 py-3 text-xs font-semibold text-white"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
