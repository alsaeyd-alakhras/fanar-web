import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';

/**
 * AuthProvider — frontend-only mock authentication.
 *
 * This is a DEMO session, not real authentication. No passwords are stored,
 * no tokens are generated, and no server is contacted. The session persists
 * in localStorage so a page refresh keeps the user "logged in" within the
 * same browser. Data is browser-local — not synced across devices.
 *
 * FUTURE INTEGRATION: Replace the internals of login/signup/logout with
 * real API calls (Supabase, custom backend, etc.) while keeping the same
 * context surface ({ isAuthenticated, user, login, signup, logout }).
 * The redirect mechanism via ProtectedRoute is already production-ready.
 */

const STORAGE_KEY = 'fnar-demo-auth-session';
const EVENT_NAME = 'fnar-demo-auth-change';
const ACADEMY_PROFILE_KEY = 'fnar-academy-profile';
const ACADEMY_PROFILE_EVENT = 'fnar-academy-profile-change';

export interface DemoUser {
  id: string;
  displayName: string;
  email: string;
  createdAt: string;
}

interface DemoSession {
  user: DemoUser;
}

interface AuthContextValue {
  isAuthenticated: boolean;
  user: DemoUser | null;
  login: (email: string) => DemoUser;
  signup: (displayName: string, email: string) => DemoUser;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function isValidSession(value: unknown): value is DemoSession {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return false;
  const s = value as Record<string, unknown>;
  const u = s.user;
  if (typeof u !== 'object' || u === null || Array.isArray(u)) return false;
  const user = u as Record<string, unknown>;
  return (
    typeof user.id === 'string' &&
    typeof user.displayName === 'string' &&
    typeof user.email === 'string' &&
    typeof user.createdAt === 'string'
  );
}

function readSession(): DemoSession | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!isValidSession(parsed)) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function writeSession(session: DemoSession): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  } catch {
    // ignore
  }
  window.dispatchEvent(new CustomEvent(EVENT_NAME));
}

function clearSession(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
  window.dispatchEvent(new CustomEvent(EVENT_NAME));
}

function generateId(): string {
  return `demo-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function getDisplayNameFromEmail(email: string): string {
  const local = email.split('@')[0] || '';
  return local.slice(0, 30) || 'مستخدم تجريبي';
}

function readAcademyProfile(): { displayName: string } | null {
  try {
    const raw = localStorage.getItem(ACADEMY_PROFILE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed === 'object' && parsed !== null && typeof parsed.displayName === 'string') {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

function prefillAcademyProfile(displayName: string): void {
  const existing = readAcademyProfile();
  if (existing && existing.displayName.trim().length > 0) return;
  try {
    const raw = localStorage.getItem(ACADEMY_PROFILE_KEY);
    const current = raw ? JSON.parse(raw) : {};
    const updated = {
      ...current,
      displayName: displayName.trim().slice(0, 60),
    };
    localStorage.setItem(ACADEMY_PROFILE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent(ACADEMY_PROFILE_EVENT));
  } catch {
    // ignore
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<DemoSession | null>(() => readSession());

  useEffect(() => {
    const handler = () => setSession(readSession());
    window.addEventListener(EVENT_NAME, handler);
    window.addEventListener('storage', handler);
    return () => {
      window.removeEventListener(EVENT_NAME, handler);
      window.removeEventListener('storage', handler);
    };
  }, []);

  const login = useCallback((email: string): DemoUser => {
    const existing = readAcademyProfile();
    const displayName =
      existing && existing.displayName.trim().length > 0
        ? existing.displayName
        : getDisplayNameFromEmail(email);
    const user: DemoUser = {
      id: generateId(),
      displayName,
      email: email.trim().slice(0, 120),
      createdAt: new Date().toISOString(),
    };
    const newSession: DemoSession = { user };
    writeSession(newSession);
    setSession(newSession);
    return user;
  }, []);

  const signup = useCallback((displayName: string, email: string): DemoUser => {
    const user: DemoUser = {
      id: generateId(),
      displayName: displayName.trim().slice(0, 60),
      email: email.trim().slice(0, 120),
      createdAt: new Date().toISOString(),
    };
    const newSession: DemoSession = { user };
    writeSession(newSession);
    setSession(newSession);
    prefillAcademyProfile(user.displayName);
    return user;
  }, []);

  const logout = useCallback(() => {
    clearSession();
    setSession(null);
  }, []);

  const value: AuthContextValue = {
    isAuthenticated: session !== null,
    user: session?.user ?? null,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
}
