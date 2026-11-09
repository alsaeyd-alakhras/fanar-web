
import type { InvoiceDocument } from '@/types';

/**
 * ============================================================
 * FNAR — INVOICES & DOCUMENTS CONFIGURATION
 * ============================================================
 *
 * Actual documents folder:
 *
 * public/documents/invoices/
 *
 * Supported formats:
 * - PDF
 * - DOCX
 * - DOC
 *
 * The existing useInvoiceDocuments hook checks:
 * - Whether each document exists
 * - Its actual file size
 * - Whether its download button should be enabled
 *
 * IMPORTANT:
 * All paths must match the actual filenames exactly.
 */

const CONFIGURED_DOCUMENTS: InvoiceDocument[] = [
  /**
   * 1. DEPOSIT INVOICE
   *
   * Actual filename:
   * فاتورة الايداع.docx
   */
  {
    id: 'deposit-invoice',
    title: 'فاتورة الإيداع',
    filePath: encodeURI(
      '/documents/invoices/فاتورة الايداع.docx'
    ),
    fileType: 'docx',
    order: 1,
  },

  /**
   * 2. WITHDRAWAL INVOICE
   *
   * Actual filename:
   * فاتورة السحب.docx
   */
  {
    id: 'withdrawal-invoice',
    title: 'فاتورة السحب',
    filePath: encodeURI(
      '/documents/invoices/فاتورة السحب.docx'
    ),
    fileType: 'docx',
    order: 2,
  },

  /**
   * 3. EDUCATIONAL CHANNEL SUBSCRIPTION INVOICE
   *
   * Actual filename:
   * فاتورة_الاشتراك_في_القناة_التعليمية (1).docx
   */
  {
    id: 'channel-subscription-invoice',
    title: 'فاتورة الاشتراك في القناة التعليمية',
    filePath: encodeURI(
      '/documents/invoices/فاتورة_الاشتراك_في_القناة_التعليمية (1).docx'
    ),
    fileType: 'docx',
    order: 3,
  },

  /**
   * 4. KUWAITI BANK BENEFICIARY DOCUMENT
   *
   * The filename shown in PowerShell starts with
   * a replacement character (�), which may indicate
   * an encoding or filename issue.
   *
   * Rename the file using the PowerShell command below
   * before using this path.
   */
  {
    id: 'beneficiary-data-form',
    title: 'إضافتي كمستفيد في البنوك الكويتية',
    filePath: encodeURI(
      '/documents/invoices/اضافتي-كمستفيد-في-البنوك-الكويتية.pdf'
    ),
    fileType: 'pdf',
    order: 4,
  },

  
];

/**
 * Documents ready for rendering, sorted by order.
 */
export const INVOICE_DOCUMENTS: InvoiceDocument[] =
  CONFIGURED_DOCUMENTS.slice().sort(
    (a, b) => a.order - b.order
  );
