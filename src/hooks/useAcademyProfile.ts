import { useState, useCallback, useEffect } from 'react';

/**
 * useAcademyProfile — lightweight student profile via localStorage.
 *
 * Stores a display name, optional learning goal, and preferred session
 * duration under a namespaced key. No authentication, no accounts.
 */

const STORAGE_KEY = 'fnar-academy-profile';
const EVENT_NAME = 'fnar-academy-profile-change';

export interface AcademyProfile {
  displayName: string;
  learningGoal: string;
  preferredSessionMinutes: number;
}

const DEFAULT_PROFILE: AcademyProfile = {
  displayName: '',
  learningGoal: '',
  preferredSessionMinutes: 30,
};

function readProfile(): AcademyProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PROFILE };
    const parsed = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
      return { ...DEFAULT_PROFILE };
    }
    return {
      displayName: typeof parsed.displayName === 'string' ? parsed.displayName.trim().slice(0, 60) : '',
      learningGoal: typeof parsed.learningGoal === 'string' ? parsed.learningGoal.trim().slice(0, 200) : '',
      preferredSessionMinutes:
        typeof parsed.preferredSessionMinutes === 'number' &&
        parsed.preferredSessionMinutes > 0 &&
        parsed.preferredSessionMinutes <= 180
          ? parsed.preferredSessionMinutes
          : DEFAULT_PROFILE.preferredSessionMinutes,
    };
  } catch {
    return { ...DEFAULT_PROFILE };
  }
}

function writeProfile(profile: AcademyProfile): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch {
    // ignore
  }
  window.dispatchEvent(new CustomEvent(EVENT_NAME));
}

export function useAcademyProfile() {
  const [profile, setProfile] = useState<AcademyProfile>(() => readProfile());

  useEffect(() => {
    const handler = () => setProfile(readProfile());
    window.addEventListener(EVENT_NAME, handler);
    window.addEventListener('storage', handler);
    return () => {
      window.removeEventListener(EVENT_NAME, handler);
      window.removeEventListener('storage', handler);
    };
  }, []);

  const saveProfile = useCallback(
    (updates: Partial<AcademyProfile>) => {
      const current = readProfile();
      const next: AcademyProfile = {
        displayName:
          typeof updates.displayName === 'string'
            ? updates.displayName.trim().slice(0, 60)
            : current.displayName,
        learningGoal:
          typeof updates.learningGoal === 'string'
            ? updates.learningGoal.trim().slice(0, 200)
            : current.learningGoal,
        preferredSessionMinutes:
          typeof updates.preferredSessionMinutes === 'number' &&
          updates.preferredSessionMinutes > 0 &&
          updates.preferredSessionMinutes <= 180
            ? updates.preferredSessionMinutes
            : current.preferredSessionMinutes,
      };
      writeProfile(next);
      setProfile(next);
    },
    [],
  );

  const hasName = profile.displayName.length > 0;

  const initials = profile.displayName
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return { profile, saveProfile, hasName, initials };
}
