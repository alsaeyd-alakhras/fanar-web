import type {
  NavItem,
  MethodologyCard,
  LearningPath,
  Course,
  DashboardData,
  Lesson,
  ProgramCourse,
  ProgramStage,
  ProgramFAQ,
  Consultation,
  FollowUpSession,
  PartnershipCategory,
  Partner,
  Aboutpage,
} from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'الرئيسية', href: '/', type: 'route' },
  { label: 'البرنامج', href: '/program', type: 'route' },
  { label: 'الاستشارات', href: '/consultations', type: 'route' },
  { label: 'الشراكات', href: '/partnerships', type: 'route' },
  { label: 'الأكاديمية', href: '/academy', type: 'route' },
  { label: 'عن فنر', href: '/about', type: 'anchor' },
];

export const METHODOLOGY_CARDS: MethodologyCard[] = [
  {
    id: 'market-understanding',
    title: 'فهم السوق',
    description: 'قراءة بنية السوق، القوى المؤثرة، وطبيعة الحركة بعيداً عن الضوضاء اليومية.',
    icon: 'market',
  },
  {
    id: 'analysis-schools',
    title: 'مدارس التحليل',
    description: 'المدرسة الكلاسيكية، الموجات، والتحليل الكمي — بأدواتها وحدود كل مدرسة.',
    icon: 'schools',
  },
  {
    id: 'risk-management',
    title: 'إدارة المخاطر',
    description: 'حماية رأس المال أولاً، تحديد المخاططة، وقواعد الخروج قبل الدخول.',
    icon: 'risk',
  },
  {
    id: 'capital',
    title: 'رأس المال',
    description: 'إدارة المحفظة، توزيع الأصول، ومبادئ النمو المستدام بدون مغامرة مدمرة.',
    icon: 'capital',
  },
  {
    id: 'financial-behavior',
    title: 'السلوك المالي والنفسي',
    description: 'التحيزات المعرفية، الانضباط العاطفي، وقرارات السوق تحت الضغط.',
    icon: 'behavior',
  },
  {
    id: 'decision-making',
    title: 'صناعة القرار',
    description: 'من المعرفة إلى الفعل — منهجية واضحة لاتخاذ قرارات مستقلة ومنضبطة.',
    icon: 'decision',
  },
];

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'foundation',
    number: '01',
    title: 'الأساس',
    subtitle: 'بناء المعرفة الأولى',
    description: 'من الصفر إلى فهم حقيقي لبنية الأسواق المالية. لا افتراضات سابقة مطلوبة.',
    level: 'الأساس',
    atmosphere: 'foundation',
    courses: [],
  },
  {
    id: 'analysis',
    number: '02',
    title: 'التحليل',
    subtitle: 'التحليل النقدي المنهجي',
    description: 'أدوات التحليل المتقدمة، ربط المفاهيم، وقراءة السوق بعقلية تحليلية مستقلة.',
    level: 'التحليل',
    atmosphere: 'analysis',
    courses: [],
  },
  {
    id: 'advanced',
    number: '03',
    title: 'المتقدم',
    subtitle: 'صناعة القرار المستقل',
    description: 'إدارة المحفظة، السلوك المتقدم، واتخاذ قرارات احترافية تحت ظروف السوق الحقيقية.',
    level: 'المتقدم',
    atmosphere: 'advanced',
    courses: [],
  },
];

export const PATH_COURSES: Course[] = [
  {
    id: 'foundation-1',
    title: 'مدخل إلى الأسواق المالية',
    description: 'المفاهيم الأساسية، بنية الأسواق، والأدوات المالية الرئيسية.',
    level: 'foundation',
    lessonCount: 24,
    durationHours: 8,
    learningMode: 'مرئي + تطبيقي',
    order: 1,
  },
  {
    id: 'analysis-1',
    title: 'مدارس التحليل ومنهجيتها',
    description: 'التحليل الكلاسيكي، الموجي، والكمي — بحدود كل مدرسة ومتى تستخدمها.',
    level: 'analysis',
    lessonCount: 36,
    durationHours: 14,
    learningMode: 'مرئي + ورش تفاعلية',
    order: 1,
  },
  {
    id: 'advanced-1',
    title: 'إدارة المحفظة وصناعة القرار',
    description: 'استراتيجيات متقدمة لإدارة المخاطر، توزيع الأصول، والقرار المستقل.',
    level: 'advanced',
    lessonCount: 42,
    durationHours: 20,
    learningMode: 'مرئي + حالات عملية',
    order: 1,
  },
];

export const DASHBOARD_DATA: DashboardData = {
  user: {
    id: 'user-demo',
    name: 'أحمد',
    currentPathId: 'foundation',
    progressPercent: 65,
  },
  currentPath: LEARNING_PATHS[0],
  recentLessons: [
    { id: 'l1', courseId: 'foundation-1', title: 'بنية السوق وأنواع الأوامر', durationMinutes: 18, order: 5, isPreview: false },
    { id: 'l2', courseId: 'foundation-1', title: 'قراءة الرسم البياني', durationMinutes: 22, order: 6, isPreview: false },
    { id: 'l3', courseId: 'foundation-1', title: 'مفهوم السيولة', durationMinutes: 15, order: 7, isPreview: true },
    { id: 'l4', courseId: 'foundation-1', title: 'القوى المؤثرة على السعر', durationMinutes: 26, order: 8, isPreview: false },
  ] as Lesson[],
};

export const HERO_INFO_FRAGMENTS = [
  { text: 'معلومات', depth: 0.3 },
  { text: 'تحليلات', depth: 0.6 },
  { text: 'آراء', depth: 0.2 },
  { text: 'ضوضاء', depth: 0.8 },
  { text: 'أخبار', depth: 0.5 },
  { text: 'مؤشرات', depth: 0.4 },
  { text: 'تناقضات', depth: 0.7 },
  { text: 'مدارس مختلفة', depth: 0.35 },
  { text: 'توصيات', depth: 0.65 },
  { text: 'إشارات', depth: 0.25 },
  { text: 'توقعات', depth: 0.55 },
  { text: 'بيانات', depth: 0.45 },
];

export const METHODOLOGY_STAGES = [
  { id: 'chaos', title: 'تشتيت', description: 'معلومات متفرقة ومتضاربة' },
  { id: 'connect', title: 'ربط', description: 'ربط المفاهيم والأدوات' },
  { id: 'analyze', title: 'تحليل', description: 'تحليل نقدي ومنهجي' },
  { id: 'understand', title: 'فهم', description: 'فهم أعمق ورؤية واضحة' },
  { id: 'decide', title: 'قرار', description: 'صناعة قرار مستقل ومنضبط' },
];

export const PROGRAM_COURSES: ProgramCourse[] = [
  {
    id: 'pc-01',
    number: '01',
    title: 'العقل',
    description: 'طريقة التفكير، وبناء العقلية المناسبة لفهم الأسواق واتخاذ القرارات بصورة منهجية.',
    order: 1,
  },
  {
    id: 'pc-02',
    number: '02',
    title: 'التاجر',
    description: 'مفهوم التاجر، وطبيعة التعامل مع السوق، والسلوك والانضباط المطلوب للعمل فيه.',
    order: 2,
  },
  {
    id: 'pc-03',
    number: '03',
    title: 'الأسواق المالية',
    description: 'مدخل شامل لفهم الأسواق المالية، طبيعتها، آلية عملها، والأطراف الموجودة فيها.',
    order: 3,
  },
  {
    id: 'pc-04',
    number: '04',
    title: 'التحليل الفني — من المدخل إلى الاحتراف',
    description: 'يبدأ من أساسيات التحليل الفني ويتدرج إلى المستويات المتقدمة والاحترافية.',
    order: 4,
  },
  {
    id: 'pc-05',
    number: '05',
    title: 'الإدارة المالية',
    description: 'تنظيم الجانب المالي للمتداول، وفهم الأموال والالتزامات والتعامل معها بصورة منظمة.',
    order: 5,
  },
  {
    id: 'pc-06',
    number: '06',
    title: 'إدارة المخاطر',
    description: 'فهم المخاطر، قياسها، وتنظيم التعامل معها داخل السوق.',
    order: 6,
  },
  {
    id: 'pc-07',
    number: '07',
    title: 'إدارة رأس المال',
    description: 'إدارة رأس المال، توزيعه، وتنظيم استخدامه بصورة منهجية.',
    order: 7,
  },
  {
    id: 'pc-08',
    number: '08',
    title: 'الذهب والمعادن',
    description: 'فهم سوق الذهب والمعادن وطبيعته وخصائصه والعوامل المرتبطة به.',
    order: 8,
  },
  {
    id: 'pc-09',
    number: '09',
    title: 'أخطاء المتداولين',
    description: 'أبرز الأخطاء الشائعة لدى المتداولين وأسبابها وآثارها.',
    order: 9,
  },
];

export const PROGRAM_STAGES: ProgramStage[] = [
  {
    id: 'stage-education',
    number: '01',
    title: 'المرحلة الأولى — التعليم',
    duration: '3 أشهر',
    description: 'تغطي منهجية فنر في التفكير، التحليل، التنظيم المالي، وإدارة المخاطر ورأس المال. مرحلة تعليمية مكثفة ومدروسة.',
    isOptional: false,
    requiresSeparateAgreement: false,
  },
  {
    id: 'stage-practical',
    number: '02',
    title: 'المرحلة الثانية — الجانب التطبيقي',
    duration: 'علاقة طويلة الأمد',
    description: 'بعد إكمال المرحلة التعليمية، قد يختار المشارك استكشاف علاقة تطبيقية طويلة الأمد مع فنر. هذه المرحلة غير مشمولة تلقائياً، وتتطلب اتفاقاً أو عقداً منفصلاً. استيفاء الحد الأدنى لرأس المال لا يضمن القبول.',
    isOptional: true,
    requiresSeparateAgreement: true,
  },
];

export const PROGRAM_FAQ: ProgramFAQ[] = [
  {
    id: 'faq-01',
    question: 'هل الدورات تُباع بشكل منفصل؟',
    answer: 'لا. البرنامج التعليمي هو حزمة متكاملة من تسعة دورات مصممة لتعمل معاً كمنهج واحد. الالتحاق يكون بالحزمة الكاملة.',
  },
  {
    id: 'faq-02',
    question: 'كم مدة البرنامج؟',
    answer: 'مدة المرحلة التعليمية الأساسية ثلاثة أشهر تغطي جميع دورات البرنامج التسع.',
  },
  {
    id: 'faq-03',
    question: 'هل المرحلة التطبيقية مشمولة في البرنامج؟',
    answer: 'لا. المرحلة التطبيقية علاقة منفصلة لمن يرغب بعد إكمال التعليم. تتطلب اتفاقاً أو عقداً خاصاً، ولا يتم قبولها تلقائياً.',
  },
  {
    id: 'faq-04',
    question: 'هل هناك إعفاء من الرسوم؟',
    answer: 'بعض المشاركين قد يستوفون شروط إعفاء كامل من الرسوم التعليمية بناءً على اتفاقيات سابقة. لا يُقدَّم الإعفاء تلقائياً لجميع المتقدمين.',
  },
  {
    id: 'faq-05',
    question: 'هل يحتاج المبتدئ إلى معرفة مسبقة؟',
    answer: 'لا. البرنامج مصمم ليبدأ من بناء طريقة التفكير ويمتد إلى المستويات المتقدمة، وهو مناسب لمختلف المستويات.',
  },
  {
    id: 'faq-06',
    question: 'هل يقدم فنر توصيات أو وعوداً بالربح؟',
    answer: 'لا. فنر يعلّم كيف تفهم الأسواق وتتخذ قراراتك بنفسك. لا توصيات، لا وعود بالربح، لا اختصارات.',
  },
];

export const CONSULTATIONS: Consultation[] = [
  {
    id: 'con-01',
    number: '01',
    category: 'reorganization',
    title: 'جلسة إعادة التنظيم بعد الخسائر',
    targetAudience: 'المتداولون الذين تعرضوا لخسائر ويرغبون في إعادة تقييم وضعهم',
    description: 'للمتداولين الذين تعرضوا لخسائر ويرغبون في تقييم وضعهم، فهم الأخطاء السابقة، وتنظيم خطواتهم القادمة. هذه استشارة تعليمية وتحليلية، وليست خدمة توصيات مباشرة.',
    durationMinutes: 45,
    priceKWD: 150,
    supportedPriceKWD: 45,
    isSupportedEligible: true,
    mayLeadToPartnership: false,
    order: 1,
  },
  {
    id: 'con-02',
    number: '02',
    category: 'general',
    title: 'الاستشارة العامة',
    targetAudience: 'الأفراد الذين يرغبون في نقاش مركز حول الأسواق المالية',
    description: 'للأفراد الذين يرغبون في نقاش مركز للأسواق المالية أو التداول أو المواضيع ذات الصلة.',
    durationMinutes: 60,
    priceKWD: 200,
    supportedPriceKWD: 60,
    isSupportedEligible: true,
    mayLeadToPartnership: false,
    order: 2,
  },
  {
    id: 'con-03',
    number: '03',
    category: 'analysts',
    title: 'استشارة المحللين والمتداولين',
    targetAudience: 'المحللون والمتداولون ذوو المعرفة أو الخبرة المسبقة',
    description: 'للمحللين والمتداولين ذوي المعرفة أو الخبرة المسبقة. قد تشمل المواضيع المنهجية، المقاربة التحليلية، سير العمل، المشكلات المتكررة، ومجالات التحسين.',
    durationMinutes: 60,
    priceKWD: 300,
    isSupportedEligible: false,
    mayLeadToPartnership: false,
    order: 3,
  },
  {
    id: 'con-04',
    number: '04',
    category: 'extended',
    title: 'الجلسة الخاصة الموسعة',
    targetAudience: 'الحالات التي تتطلب نقاشاً أعمق لعدة مواضيع مترابطة',
    description: 'للحالات التي تتطلب نقاشاً أعمق لعدة مواضيع مترابطة أو مراجعة شاملة.',
    durationMinutes: 90,
    priceKWD: 450,
    isSupportedEligible: false,
    mayLeadToPartnership: false,
    order: 4,
  },
  {
    id: 'con-05',
    number: '05',
    category: 'corporate',
    title: 'استشارة الشركات وأصحاب رؤوس الأموال',
    targetAudience: 'الشركات، المستثمرون، أصحاب الأعمال، وأصحاب المحافظ الكبيرة',
    description: 'للشركات والمستثمرين وأصحاب الأعمال وأصحاب المحافظ الكبيرة. قد تكون هذه الاستشارة نقاشاً أولياً قبل شراكة محتملة. إذا كان الهدف يتعلق بخدمات رأس المال العملية لدى فنر، الحد الأدنى لرأس المال المخصص هو 15,000 د.ك، في محفظة العميل أو الشركة الخاصة. استيفاء الحد الأدنى لا يضمن القبول.',
    durationMinutes: 120,
    priceKWD: 750,
    isSupportedEligible: false,
    mayLeadToPartnership: true,
    minimumCapitalKWD: 15000,
    order: 5,
  },
];

export const FOLLOW_UP_SESSIONS: FollowUpSession[] = [
  {
    id: 'fu-01',
    title: 'متابعة الاستشارة العامة أو إعادة التنظيم',
    durationMinutes: 30,
    priceKWD: 75,
    eligibleAfterCategory: 'general',
    eligibilityWindowDays: null,
  },
  {
    id: 'fu-02',
    title: 'متابعة المحللين والمتداولين',
    durationMinutes: 30,
    priceKWD: 125,
    eligibleAfterCategory: 'analysts',
    eligibilityWindowDays: null,
  },
  {
    id: 'fu-03',
    title: 'متابعة الشركات وأصحاب رؤوس الأموال',
    durationMinutes: 45,
    priceKWD: 250,
    eligibleAfterCategory: 'corporate',
    eligibilityWindowDays: null,
  },
];

export const FOLLOW_UP_ELIGIBILITY_WINDOW_DAYS: number | null = null;

export const SUPPORTED_PRICING_INCOME_THRESHOLD_KWD = 250;

export const PARTNERSHIP_CATEGORIES: PartnershipCategory[] = [
  {
    id: 'strategic',
    number: 'A',
    title: 'الشراكات الاستراتيجية',
    subtitle: 'فرص طويلة الأمد ومؤسسية',
    description: 'للشركات والمؤسسات وأصحاب الأعمال والمستثمرين وأصحاب رؤوس الأموال والمحافظ الكبيرة والمنظمات الاستراتيجية. تتيح هذه الشراكات إمكانية التعاون في خدمات رأس المال العملية لدى فنر.',
    audiences: [
      'الشركات والمؤسسات',
      'أصحاب الأعمال',
      'المستثمرون',
      'أصحاب رؤوس الأموال',
      'أصحاب المحافظ الكبيرة',
      'المنظمات الاستراتيجية',
    ],
    requiresCapital: true,
    minimumCapitalKWD: 15000,
    hasApplicationForm: true,
  },
  {
    id: 'collaboration',
    number: 'B',
    title: 'الشراكات والتعاون',
    subtitle: 'تعاون مهني وتجاري',
    description: 'للمؤثرين وصناع المحتوى والمنظمات الإعلامية وشركات التسويق والخبراء والمتخصصين والأعمال والأفراد أصحاب العروض المناسبة.',
    audiences: [
      'المؤثرون',
      'صناع المحتوى',
      'المنظمات الإعلامية',
      'شركات التسويق',
      'الخبراء',
      'المتخصصون',
      'الأعمال',
      'أصحاب العروض المناسبة',
    ],
    requiresCapital: false,
    hasApplicationForm: true,
  },
];

export const PARTNERS: Partner[] = [];

export const PARTNERSHIP_MINIMUM_CAPITAL_KWD = 15000;
