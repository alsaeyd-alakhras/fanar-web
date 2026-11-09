import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

/**
 * ProtectedRoute — redirects to /login if not authenticated.
 *
 * Preserves the originally requested path in router state so the login
 * page can navigate back after a successful mock login. Rejects external
 * or unsafe destinations by only preserving pathname + search (no hash,
 * no protocol-relative URLs).
 *
 * This redirect mechanism is designed to be reused by a future checkout
 * route — any protected destination will automatically benefit from
 * return-navigation.
 */
export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    const redirectPath = location.pathname + location.search;
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: redirectPath }}
      />
    );
  }

  return <>{children}</>;
}
