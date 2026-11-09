import { useEffect, useState } from 'react';

import { INVOICE_DOCUMENTS } from '@/data/invoices';
import type { InvoiceDocument, ResolvedInvoiceDocument } from '@/types';

/**
 * Resolves every configured invoice/document against the server:
 *
 * - `available`   → the real file exists; `fileSizeBytes` is derived from it.
 * - `unavailable` → the file is missing (404 / SPA fallback HTML / offline).
 * - `checking`    → the probe has not finished yet.
 *
 * Placeholder paths therefore stay visible but clearly disabled, and start
 * working automatically once the real file is uploaded to `public/documents/`.
 */

function markUnavailable(doc: InvoiceDocument): ResolvedInvoiceDocument {
  return { ...doc, status: 'unavailable', fileSizeBytes: null };
}

/** Guards against hosts that answer missing paths with the SPA's index.html. */
function isHtmlResponse(response: Response): boolean {
  const contentType = response.headers.get('content-type') ?? '';
  return contentType.toLowerCase().includes('text/html');
}

function readContentLength(response: Response): number | null {
  const raw = response.headers.get('content-length');

  if (!raw) return null;

  const bytes = Number(raw);

  return Number.isFinite(bytes) && bytes > 0 ? bytes : null;
}

async function resolveDocument(
  doc: InvoiceDocument
): Promise<ResolvedInvoiceDocument> {
  try {
    const head = await fetch(doc.filePath, { method: 'HEAD' });

    if (head.ok) {
      if (isHtmlResponse(head)) return markUnavailable(doc);

      const bytes = readContentLength(head);

      if (bytes !== null) {
        return { ...doc, status: 'available', fileSizeBytes: bytes };
      }
    } else if (head.status !== 405 && head.status !== 501) {
      // The file genuinely does not exist.
      return markUnavailable(doc);
    }

    // HEAD unsupported or no size header → verify with a real GET.
    const get = await fetch(doc.filePath);

    if (!get.ok || isHtmlResponse(get)) return markUnavailable(doc);

    const bytes = (await get.blob()).size;

    if (bytes <= 0) return markUnavailable(doc);

    return { ...doc, status: 'available', fileSizeBytes: bytes };
  } catch {
    // Network failure — never claim a download works when it may not.
    return markUnavailable(doc);
  }
}

export function useInvoiceDocuments(): ResolvedInvoiceDocument[] {
  const [documents, setDocuments] = useState<ResolvedInvoiceDocument[]>(() =>
    INVOICE_DOCUMENTS.map((doc) => ({
      ...doc,
      status: 'checking' as const,
      fileSizeBytes: null,
    }))
  );

  useEffect(() => {
    let cancelled = false;

    Promise.all(INVOICE_DOCUMENTS.map(resolveDocument)).then((resolved) => {
      if (!cancelled) setDocuments(resolved);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return documents;
}
