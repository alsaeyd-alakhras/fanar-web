
import { useSyncExternalStore } from 'react';

import {
  CONSULTATIONS,
  FOLLOW_UP_SESSIONS,
  PARTNERSHIP_CATEGORIES,
  PARTNERS,
} from '@/data/content';

import {
  ACADEMY_COURSES,
  ACADEMY_MODULES,
} from '@/data/academy';

import { ACADEMY_QUIZZES } from '@/data/academyQuizzes';

import type {
  Consultation,
  FollowUpSession,
  PartnershipCategory,
  Partner,
  AcademyCourseBase,
  AcademyModule,
  Quiz,
} from '@/types';

export type CMSContent = {
  consultations: Consultation[];
  followUpSessions: FollowUpSession[];
  partnershipCategories: PartnershipCategory[];
  partners: Partner[];
  academyCourses: AcademyCourseBase[];
  academyModules: Record<string, AcademyModule[]>;
  academyQuizzes: Quiz[];
};

export type CMSSection = Exclude<
  keyof CMSContent,
  'academyModules'
>;

export type CMSArraySection = CMSSection;

const STORAGE_KEY = 'fnar-cms-content-v1';

const defaults: CMSContent = {
  consultations: CONSULTATIONS,
  followUpSessions: FOLLOW_UP_SESSIONS,
  partnershipCategories: PARTNERSHIP_CATEGORIES,
  partners: PARTNERS,
  academyCourses: ACADEMY_COURSES,
  academyModules: ACADEMY_MODULES,
  academyQuizzes: ACADEMY_QUIZZES,
};

    const CMS_KEYS = [
    'consultations',
    'followUpSessions',
    'partnershipCategories',
    'partners',
    'academyCourses',
    'academyQuizzes',
    ] as const;

    function isRecord(
    value: unknown
    ): value is Record<string, unknown> {
    return (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value)
    );
    }

    function hasValidIds(items: unknown[]): boolean {
    return items.every(
        (item) =>
        isRecord(item) &&
        typeof item.id === 'string' &&
        item.id.trim().length > 0
    );
    }

    function validateBackup(value: unknown): CMSContent {
    if (!isRecord(value)) {
        throw new Error('ملف النسخة الاحتياطية غير صالح.');
    }

    for (const key of CMS_KEYS) {
        const items = value[key];

        if (
        !Array.isArray(items) ||
        !hasValidIds(items) ||
        new Set(items.map((item) => item.id)).size !== items.length
        ) {
        throw new Error(`بيانات القسم ${key} غير صالحة.`);
        }
    }

    if (!isRecord(value.academyModules)) {
        throw new Error('بيانات وحدات الأكاديمية غير صالحة.');
    }

    for (const modules of Object.values(value.academyModules)) {
        if (!Array.isArray(modules) || !hasValidIds(modules)) {
        throw new Error('توجد وحدات أكاديمية غير صالحة.');
        }

        for (const module of modules) {
        if (
            !Array.isArray(module.lessons) ||
            !hasValidIds(module.lessons)
        ) {
            throw new Error('توجد دروس غير صالحة في النسخة الاحتياطية.');
        }
        }
    }

    for (const quiz of value.academyQuizzes) {
        if (
        typeof quiz.courseId !== 'string' ||
        !Array.isArray(quiz.questions) ||
        !hasValidIds(quiz.questions)
        ) {
        throw new Error('توجد اختبارات غير صالحة في النسخة الاحتياطية.');
        }

        for (const question of quiz.questions) {
        if (
            typeof question.prompt !== 'string' ||
            !Array.isArray(question.options) ||
            !hasValidIds(question.options) ||
            typeof question.correctOptionId !== 'string' ||
            !question.options.some(
            (option) => option.id === question.correctOptionId
            )
        ) {
            throw new Error('توجد أسئلة غير صالحة في النسخة الاحتياطية.');
        }
        }
    }

    return value as CMSContent;
    }

const listeners = new Set<() => void>();

function loadContent(): CMSContent {
  if (typeof window === 'undefined') return defaults;

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaults;

    const parsed = JSON.parse(saved) as Partial<CMSContent>;

    return {
      consultations: Array.isArray(parsed.consultations)
        ? parsed.consultations
        : defaults.consultations,

      followUpSessions: Array.isArray(parsed.followUpSessions)
        ? parsed.followUpSessions
        : defaults.followUpSessions,

      partnershipCategories: Array.isArray(
        parsed.partnershipCategories
      )
        ? parsed.partnershipCategories
        : defaults.partnershipCategories,

      partners: Array.isArray(parsed.partners)
        ? parsed.partners
        : defaults.partners,

      academyCourses: Array.isArray(parsed.academyCourses)
        ? parsed.academyCourses
        : defaults.academyCourses,

      academyModules:
        parsed.academyModules &&
        typeof parsed.academyModules === 'object' &&
        !Array.isArray(parsed.academyModules)
          ? parsed.academyModules
          : defaults.academyModules,

      academyQuizzes: Array.isArray(parsed.academyQuizzes)
        ? parsed.academyQuizzes
        : defaults.academyQuizzes,
    };
  } catch {
    return defaults;
  }
}

let currentContent = loadContent();

function emitChange() {
  listeners.forEach((listener) => listener());
}

function persist(next: CMSContent) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  currentContent = next;
  emitChange();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return currentContent;
}

function getServerSnapshot() {
  return defaults;
}

if (typeof window !== 'undefined') {
  window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEY) {
      currentContent = loadContent();
      emitChange();
    }
  });
}

export function useCMSContent() {
  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
}

export function getCMSContent() {
  return currentContent;
}

export const cmsActions = {
  add<K extends CMSArraySection>(
    section: K,
    item: CMSContent[K][number]
  ) {
    const items = currentContent[section] as Array<
      CMSContent[K][number]
    >;

    if (items.some((existing) => existing.id === item.id)) {
      throw new Error('هذا المعرّف مستخدم بالفعل.');
    }

    persist({
      ...currentContent,
      [section]: [...items, item],
    });
  },

  update<K extends CMSArraySection>(
    section: K,
    id: string,
    changes: Partial<CMSContent[K][number]>
  ) {
    const items = currentContent[section] as Array<
      CMSContent[K][number]
    >;

    persist({
      ...currentContent,
      [section]: items.map((item) =>
        item.id === id
          ? { ...item, ...changes, id }
          : item
      ),
    });
  },

  remove(section: CMSArraySection, id: string) {
    const next: CMSContent = {
        ...currentContent,
        [section]: currentContent[section].filter(
        (item) => item.id !== id
        ),
    };

    if (section === 'academyCourses') {
        const nextModules = { ...currentContent.academyModules };
        delete nextModules[id];

        next.academyModules = nextModules;

        next.academyQuizzes = currentContent.academyQuizzes.filter(
        (quiz) => quiz.courseId !== id
        );
    }

    persist(next);
    },

  replace<K extends CMSArraySection>(
    section: K,
    items: CMSContent[K]
  ) {
    persist({
      ...currentContent,
      [section]: items,
    });
  },

  setAcademyModules(
    courseId: string,
    modules: AcademyModule[]
  ) {
    persist({
      ...currentContent,
      academyModules: {
        ...currentContent.academyModules,
        [courseId]: modules,
      },
    });
  },

  reset(section?: keyof CMSContent) {
    if (!section) {
      persist(structuredClone(defaults));
      return;
    }

    persist({
      ...currentContent,
      [section]: structuredClone(defaults[section]),
    });
  },

  exportJSON() {
    return JSON.stringify(currentContent, null, 2);
    },

    importJSON(json: string) {
    let parsed: unknown;

    try {
        parsed = JSON.parse(json);
    } catch {
        throw new Error('تعذر قراءة ملف JSON. تحقق من صيغة الملف.');
    }

    const validated = validateBackup(parsed);

    // Save only after validation has completed successfully.
    persist(structuredClone(validated));
    },
};
