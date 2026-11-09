export interface Course {
  id: string;
  number: string;
  title: string;
  description: string;
  lessonCount?: number;
  durationHours?: number;
  learningMode?: string;
  level: 'foundation' | 'analysis' | 'advanced';
  order: number;
}

export interface LearningPath {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  level: 'الأساس' | 'التحليل' | 'المتقدم';
  courses: Course[];
  atmosphere: 'foundation' | 'analysis' | 'advanced';
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  durationMinutes: number;
  order: number;
  isPreview: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  currentPathId: string;
  progressPercent: number;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
}

export interface DashboardData {
  user: UserProfile;
  currentPath: LearningPath;
  recentLessons: Lesson[];
}

export interface MethodologyCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  type: 'route' | 'anchor';
}

export interface ProgramCourse {
  id: string;
  number: string;
  title: string;
  description: string;
  order: number;
}

export interface ProgramStage {
  id: string;
  number: string;
  title: string;
  duration: string;
  description: string;
  isOptional: boolean;
  requiresSeparateAgreement: boolean;
}

export interface ProgramFAQ {
  id: string;
  question: string;
  answer: string;
}

export type ConsultationCategory =
  | 'reorganization'
  | 'general'
  | 'analysts'
  | 'extended'
  | 'corporate';

export interface Consultation {
  id: string;
  number: string;
  category: ConsultationCategory;
  title: string;
  targetAudience: string;
  description: string;
  durationMinutes: number;
  priceKWD: number;
  supportedPriceKWD?: number;
  isSupportedEligible: boolean;
  mayLeadToPartnership: boolean;
  minimumCapitalKWD?: number;
  order: number;
}

export interface FollowUpSession {
  id: string;
  title: string;
  durationMinutes: number;
  priceKWD: number;
  eligibleAfterCategory: ConsultationCategory;
  eligibilityWindowDays: number | null;
}

export interface PartnershipCategory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  audiences: string[];
  requiresCapital: boolean;
  minimumCapitalKWD?: number;
  hasApplicationForm: boolean;
}

export interface Partner {
  id: string;
  name: string;
  category: 'strategic' | 'collaboration';
  logoUrl?: string;
  website?: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  consultationId: string;
  preferredDate: string;
  previousRelationship: string;
  experienceLevel: string;
  reason: string;
  mainTopics: string;
  capitalRange?: string;
  isSupportedRequest: boolean;
  notes?: string;
}

export interface PartnershipFormData {
  fullName: string;
  companyName?: string;
  position?: string;
  phone: string;
  email: string;
  website?: string;
  socialLinks?: string;
  applicantType: string;
  partnershipCategory: string;
  cooperationType: string;
  introduction: string;
  proposal: string;
  capitalRange?: string;
}

// ── Invoices & documents types ──

/** Supported document file formats shown on the invoices page. */
export type InvoiceDocumentFileType = 'pdf' | 'docx' | 'xlsx' | 'other';

/** Availability lifecycle of a configured document. */
export type InvoiceDocumentStatus = 'checking' | 'available' | 'unavailable';

/** Static document configuration (see src/data/invoices.ts). */
export interface InvoiceDocument {
  /** Unique stable identifier. */
  id: string;
  /** Arabic display title. */
  title: string;
  /** Public path the file is served from (e.g. /documents/…). */
  filePath: string;
  /** Declared file format, used for the badge and the download label. */
  fileType: InvoiceDocumentFileType;
  /** Display order inside the document grid. */
  order: number;
}

/** A configured document resolved against the server at runtime. */
export interface ResolvedInvoiceDocument extends InvoiceDocument {
  /** Whether the file currently exists, is still being checked, or is missing. */
  status: InvoiceDocumentStatus;
  /** Real size in bytes, derived from the served file when available. */
  fileSizeBytes: number | null;
}

// ── Academy types ──

export type AcademyCourseStatus = 'not-started' | 'in-progress' | 'completed';

/** Static course data (from the data module, never changes at runtime) */
export interface AcademyCourseBase {
  id: string;
  number: string;
  title: string;
  description: string;
  month: number;
  order: number;
}

/** Course with computed live progress from localStorage */
export interface AcademyCourse extends AcademyCourseBase {
  status: AcademyCourseStatus;
  progressPercent: number;
  completedLessons: number;
  totalLessons: number;
}

export interface AcademyLesson {
  id: string;
  title: string;
  durationMinutes: number;
  order: number;
  /** Illustrative lesson description — placeholder content */
  description?: string;
  /** Optional video URL. When absent, a placeholder is shown. */
  videoUrl?: string;
  /** Illustrative learning objectives */
  objectives?: string[];
  /** Illustrative resource labels */
  resources?: string[];
}

export interface AcademyModule {
  id: string;
  title: string;
  lessons: AcademyLesson[];
}

export interface AcademyOverview {
  totalCourses: number;
  programDurationMonths: number;
  completedCourses: number;
  inProgressCourses: number;
  overallProgressPercent: number;
  totalCompletedLessons: number;
  totalLessons: number;
}

export interface AcademyResumeInfo {
  courseId: string;
  lessonId: string;
  lessonTitle: string;
  courseTitle: string;
}

// ── Academy quiz types (Phase 3) ──

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: string;
  lessonId?: string;
}

export interface Quiz {
  id: string;
  courseId: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export interface QuizAttempt {
  id: string;
  quizId: string;
  courseId: string;
  answers: Record<string, string>;
  correctCount: number;
  totalQuestions: number;
  scorePercent: number;
  submittedAt: string;
}

export interface QuizResultSummary {
  latestScorePercent: number | null;
  bestScorePercent: number | null;
  attemptsCount: number;
  latestAttempt: QuizAttempt | null;
  bestAttempt: QuizAttempt | null;
}
