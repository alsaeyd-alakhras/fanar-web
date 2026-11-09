import { useSyncExternalStore } from 'react';

export type InvoiceType = 'deposit' | 'withdrawal' | 'subscription';

export type InvoiceStatus = 'pending' | 'approved' | 'rejected';

export type InvoiceSubmission = {
  id: string;
  type: InvoiceType;
  customerName: string;
  phone: string;
  identityNumber: string;
  amount: number;
  currency: string;
  createdAt: string;
  status: InvoiceStatus;
  transferMethod: string;
  notes: string;
  receiptName: string;
  fields: Record<string, string>;
};

const STORAGE_KEY = 'fnar-invoice-submissions-v1';

const listeners = new Set<() => void>();

function readInvoices(): InvoiceSubmission[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);

    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item): item is InvoiceSubmission =>
        typeof item === 'object' &&
        item !== null &&
        typeof item.id === 'string' &&
        typeof item.type === 'string' &&
        typeof item.status === 'string'
    );
  } catch {
    return [];
  }
}

let snapshot: InvoiceSubmission[] = [];

if (typeof window !== 'undefined') {
  snapshot = readInvoices();
}

function emitChange() {
  listeners.forEach((listener) => listener());
}

function saveInvoices(invoices: InvoiceSubmission[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(invoices));
  snapshot = invoices;
  emitChange();
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return snapshot;
}

function getServerSnapshot(): InvoiceSubmission[] {
  return [];
}

export function useInvoiceSubmissions() {
  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
}

export const invoiceActions = {
  add(
    data: Omit<InvoiceSubmission, 'id' | 'createdAt' | 'status'>
  ) {
    const invoice: InvoiceSubmission = {
      ...data,
      id: `FNAR-${crypto.randomUUID()}`,
      createdAt: new Date().toISOString(),
      status: 'pending',
    };

    saveInvoices([invoice, ...snapshot]);

    return invoice;
  },

  updateStatus(id: string, status: InvoiceStatus) {
    saveInvoices(
      snapshot.map((invoice) =>
        invoice.id === id ? { ...invoice, status } : invoice
      )
    );
  },
};