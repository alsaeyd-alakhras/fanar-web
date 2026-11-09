import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import SmoothScroll from '@/components/motion/SmoothScroll';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Navigation from '@/components/navigation/Navigation';
import Hero from '@/components/hero/Hero';
import Methodology from '@/components/methodology/Methodology';
import NotJustACourse from '@/components/methodology/NotJustACourse';
import LearningPaths from '@/components/paths/LearningPaths';
import Philosophy from '@/components/philosophy/Philosophy';
import Founder from '@/components/founder/Founder';
import Dashboard from '@/components/dashboard/Dashboard';
import Community from '@/components/community/Community';
import ConsultationsPreview from '@/components/consultations/ConsultationsPreview';
import PartnershipsEntry from '@/components/partnerships/PartnershipsEntry';
import AboutPage from '@/pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FinalCTA from '@/components/final-cta/FinalCTA';
import Footer from '@/components/footer/Footer';
import AdminCMSPage from '@/pages/AdminCMSPage';
import AdminAcademyPage from '@/pages/AdminAcademyPage';

const ProgramPage = lazy(() => import('@/pages/ProgramPage'));
const ConsultationsPage = lazy(() => import('@/pages/ConsultationsPage'));
const PartnershipsPage = lazy(() => import('@/pages/PartnershipsPage'));
const InvoicesPage = lazy(() => import('@/pages/InvoicesPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const SignupPage = lazy(() => import('@/pages/SignupPage'));
const ForgotPasswordPage = lazy(() => import('@/pages/ForgotPasswordPage'));
const AcademyDashboard = lazy(() => import('@/pages/AcademyDashboard'));
const AcademyCourses = lazy(() => import('@/pages/AcademyCourses'));
const AcademyCourseDetail = lazy(() => import('@/pages/AcademyCourseDetail'));
const AcademyLessonPage = lazy(() => import('@/pages/AcademyLessonPage'));
const AcademyQuizPage = lazy(() => import('@/pages/AcademyQuizPage'));
const AcademyQuizResultsPage = lazy(() => import('@/pages/AcademyQuizResultsPage'));
const AcademyProfilePage = lazy(() => import('@/pages/AcademyProfilePage'));
const AcademyProgressPage = lazy(() => import('@/pages/AcademyProgressPage'));
const ResearchPathPage = lazy(() => import('@/pages/ResearchPathPage'));
const InvoiceDocumentPage = lazy(() => import('@/pages/InvoiceDocumentPage'));
const AdminInvoicesPage = lazy(() => import('@/pages/AdminInvoicesPage'));

function HomePage() {
  return (
    <main>
      <Hero />
      <Methodology />
      <NotJustACourse />
      <LearningPaths />
      <Philosophy />
      <Founder />
      <Dashboard />
      <Community />
      <ConsultationsPreview />
      <PartnershipsEntry />
      <FinalCTA />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SmoothScroll>
          <ScrollToTop />
          <CustomCursor />
          <Navigation />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            <Route
              path="/program"
              element={
                <Suspense fallback={null}>
                  <ProgramPage />
                </Suspense>
              }
            />
            <Route
              path="/consultations"
              element={
                <Suspense fallback={null}>
                  <ConsultationsPage />
                </Suspense>
              }
            />
            <Route
              path="/partnerships"
              element={
                <Suspense fallback={null}>
                  <PartnershipsPage />
                </Suspense>
              }
            />
            <Route
              path="/invoices"
              element={
                <Suspense fallback={null}>
                  <InvoicesPage />
                </Suspense>
              }
            />
            <Route
              path="/invoices/:documentId"
              element={
                <Suspense fallback={null}>
                  <InvoiceDocumentPage />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={null}>
                  <AboutPage />
                </Suspense>
              }
            />

            {/* Auth routes */}
            <Route
              path="/login"
              element={
                <Suspense fallback={null}>
                  <LoginPage />
                </Suspense>
              }
            />
            <Route
              path="/signup"
              element={
                <Suspense fallback={null}>
                  <SignupPage />
                </Suspense>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <Suspense fallback={null}>
                  <ForgotPasswordPage />
                </Suspense>
              }
            />

            {/* Protected Academy routes */}
            <Route
              path="/academy"
              element={
                <ProtectedRoute>
                  <Suspense fallback={null}>
                    <AcademyDashboard />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="/academy/courses"
              element={
                <ProtectedRoute>
                  <Suspense fallback={null}>
                    <AcademyCourses />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="/academy/courses/:courseId"
              element={
                <ProtectedRoute>
                  <Suspense fallback={null}>
                    <AcademyCourseDetail />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="/academy/learn/:courseId/:lessonId"
              element={
                <ProtectedRoute>
                  <Suspense fallback={null}>
                    <AcademyLessonPage />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="/academy/courses/:courseId/quiz"
              element={
                <ProtectedRoute>
                  <Suspense fallback={null}>
                    <AcademyQuizPage />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="/academy/courses/:courseId/quiz/results"
              element={
                <ProtectedRoute>
                  <Suspense fallback={null}>
                    <AcademyQuizResultsPage />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="/academy/profile"
              element={
                <ProtectedRoute>
                  <Suspense fallback={null}>
                    <AcademyProfilePage />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="/academy/progress"
              element={
                <ProtectedRoute>
                  <Suspense fallback={null}>
                    <AcademyProgressPage />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route 
              path="/contact" 
              element={
                <Suspense fallback={null}>
                  <ContactPage />
                </Suspense>
              } 
            />
            <Route
              path="/research-path"
              element={
                <Suspense fallback={null}>
                  <ResearchPathPage />
                </Suspense>
              }
            />
            <Route path="/admin" element={<AdminCMSPage />} />

            <Route
              path="/admin/consultations"
              element={<AdminCMSPage />}
            />

            <Route
              path="/admin/partnerships"
              element={<AdminCMSPage />}
            />
            <Route
              path="/admin/academy"
              element={<AdminAcademyPage />}
            />
            
          <Route
            path="/admin/invoices"
            element={
              <Suspense fallback={null}>
                <AdminInvoicesPage />
              </Suspense>
            }
          />
          </Routes>
          <Footer />
        </SmoothScroll>
      </AuthProvider>
    </BrowserRouter>
  );
}
