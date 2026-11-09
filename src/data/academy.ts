import type {
  AcademyCourseBase,
  AcademyModule,
} from '@/types';

/**
 * ACADEMY DATA — PHASE 2
 *
 * Course titles and descriptions are reused from the existing
 * PROGRAM_COURSES data in content.ts (real client content).
 *
 * Module titles, lesson titles, lesson descriptions, objectives,
 * and resource labels are ILLUSTRATIVE placeholders.
 *
 * Progress is no longer stored here — it is computed at runtime
 * from localStorage via the useAcademyProgress hook.
 */

export const ACADEMY_DEMO_LABEL =
  'عرض تجريبي — بيانات طالب افتراضي لأغراض العرض فقط';

// ── Courses (titles/descriptions reused from PROGRAM_COURSES) ──

export const ACADEMY_COURSES: AcademyCourseBase[] = [
  {
    id: 'ac-01',
    number: '01',
    title: 'العقل',
    description:
      'طريقة التفكير، وبناء العقلية المناسبة لفهم الأسواق واتخاذ القرارات بصورة منهجية.',
    month: 1,
    order: 1,
  },
  {
    id: 'ac-02',
    number: '02',
    title: 'التاجر',
    description:
      'مفهوم التاجر، وطبيعة التعامل مع السوق، والسلوك والانضباط المطلوب للعمل فيه.',
    month: 1,
    order: 2,
  },
  {
    id: 'ac-03',
    number: '03',
    title: 'الأسواق المالية',
    description:
      'مدخل شامل لفهم الأسواق المالية، طبيعتها، آلية عملها، والأطراف الموجودة فيها.',
    month: 1,
    order: 3,
  },
  {
    id: 'ac-04',
    number: '04',
    title: 'التحليل الفني — من المدخل إلى الاحتراف',
    description:
      'يبدأ من أساسيات التحليل الفني ويتدرج إلى المستويات المتقدمة والاحترافية.',
    month: 2,
    order: 4,
  },
  {
    id: 'ac-05',
    number: '05',
    title: 'الإدارة المالية',
    description:
      'تنظيم الجانب المالي للمتداول، وفهم الأموال والالتزامات والتعامل معها بصورة منظمة.',
    month: 2,
    order: 5,
  },
  {
    id: 'ac-06',
    number: '06',
    title: 'إدارة المخاطر',
    description: 'فهم المخاطر، قياسها، وتنظيم التعامل معها داخل السوق.',
    month: 2,
    order: 6,
  },
  {
    id: 'ac-07',
    number: '07',
    title: 'إدارة رأس المال',
    description:
      'إدارة رأس المال، توزيعه، وتنظيم استخدامه بصورة منهجية.',
    month: 3,
    order: 7,
  },
  {
    id: 'ac-08',
    number: '08',
    title: 'الذهب والمعادن',
    description:
      'فهم سوق الذهب والمعادن وطبيعته وخصائصه والعوامل المرتبطة به.',
    month: 3,
    order: 8,
  },
  {
    id: 'ac-09',
    number: '09',
    title: 'أخطاء المتداولين',
    description: 'أبرز الأخطاء الشائعة لدى المتداولين وأسبابها وآثارها.',
    month: 3,
    order: 9,
  },
];

// ── Illustrative modules with lesson content ──

export const ACADEMY_MODULES: Record<string, AcademyModule[]> = {
  'ac-01': [
    {
      id: 'ac-01-m1',
      title: 'الوحدة الأولى — مدخل',
      lessons: [
        {
          id: 'ac-01-l1',
          title: 'ما هي طريقة التفكير الصحيحة',
          durationMinutes: 18,
          order: 1,
          description: 'مدخل إلى طريقة التفكير المنهجية في الأسواق المالية، والفرق بين المعرفة العشوائية والمعرفة المنظمة.',
          objectives: ['التمييز بين المعلومة والمعرفة', 'فهم أهمية المنهجية في التفكير', 'تحديد مصادر المعرفة الموثوقة'],
        },
        {
          id: 'ac-01-l2',
          title: 'الفرق بين المعرفة والمعلومة',
          durationMinutes: 22,
          order: 2,
          description: 'تحليل الفرق الجوهري بين امتلاك المعلومات وفهمها وتحويلها إلى معرفة قابلة للتطبيق.',
          objectives: ['تعريف المعلومة مقابل المعرفة', 'كيفية تحويل المعلومة إلى معرفة', 'تطبيقات عملية في السوق'],
        },
        {
          id: 'ac-01-l3',
          title: 'التحيزات المعرفية الأساسية',
          durationMinutes: 20,
          order: 3,
          description: 'استعراض أبرز التحيزات المعرفية التي تؤثر على قرارات المتداول وكيفية التعامل معها.',
          objectives: ['التعرف على التحيزات الشائعة', 'فهم تأثيرها على القرار', 'استراتيجيات تقليل أثرها'],
        },
        {
          id: 'ac-01-l4',
          title: 'بناء العقلية المنهجية',
          durationMinutes: 15,
          order: 4,
          description: 'خطوات عملية لبناء عقلية منهجية تتعامل مع السوق بطريقة منظمة ومنضبطة.',
          objectives: ['مكونات العقلية المنهجية', 'تمارين بناء العادة', 'تطبيق على حالات واقعية'],
        },
      ],
    },
    {
      id: 'ac-01-m2',
      title: 'الوحدة الثانية — التطبيق',
      lessons: [
        {
          id: 'ac-01-l5',
          title: 'التفكير تحت الضغط',
          durationMinutes: 19,
          order: 5,
          description: 'كيفية الحفاظ على التفكير المنهجي في ظروف السوق الصعبة وتحت الضغط النفسي.',
          objectives: ['فهم تأثير الضغط على القرار', 'تقنيات الحفاظ على الهدوء', 'تطبيقات سوقية'],
        },
        {
          id: 'ac-01-l6',
          title: 'فصل العاطفة عن القرار',
          durationMinutes: 21,
          order: 6,
          description: 'منهجية فصل المشاعر والعواطف عن عملية اتخاذ القرار في السوق.',
          objectives: ['مصادر العاطفة في التداول', 'أدوات الفصل بين العاطفة والقرار', 'حالات عملية'],
        },
        {
          id: 'ac-01-l7',
          title: 'تمارين عملية',
          durationMinutes: 25,
          order: 7,
          description: 'مجموعة تمارين تطبيقية لتعزيز طريقة التفكير المنهجية في مواقف سوقية متنوعة.',
          objectives: ['تطبيق المفاهيم النظرية', 'تحليل حالات حقيقية', 'تقييم الأداء الذاتي'],
        },
        {
          id: 'ac-01-l8',
          title: 'خلاصة ومراجعة',
          durationMinutes: 14,
          order: 8,
          description: 'مراجعة شاملة لمفاهيم الوحدة وتلخيص النقاط الرئيسية.',
          objectives: ['مراجعة المفاهيم', 'تلخيص الأفكار الأساسية', 'تقييم الاستيعاب'],
        },
      ],
    },
  ],
  'ac-02': [
    {
      id: 'ac-02-m1',
      title: 'الوحدة الأولى — مفهوم التاجر',
      lessons: [
        {
          id: 'ac-02-l1',
          title: 'من هو التاجر',
          durationMinutes: 16,
          order: 1,
          description: 'تعريف مفهوم التاجر في الأسواق المالية وخصائصه الأساسية.',
          objectives: ['تعريف التاجر', 'خصائص التاجر الناجح', 'الفرق بين التاجر وغيره'],
        },
        {
          id: 'ac-02-l2',
          title: 'الفرق بين التاجر والمضارب',
          durationMinutes: 18,
          order: 2,
          description: 'تحليل الفرق بين التاجر والمضارب وأهداف كل منهما في السوق.',
          objectives: ['تعريف المضارب', 'مقارنة الأهداف والأساليب', 'أيهما يناسبك'],
        },
        {
          id: 'ac-02-l3',
          title: 'الانضباط كأساس',
          durationMinutes: 20,
          order: 3,
          description: 'أهمية الانضباط في عمل التاجر وكيفية بنائه كعادة يومية.',
          objectives: ['مفهوم الانضباط', 'بناء عادات الانضباط', 'الحفاظ على الانضباط'],
        },
      ],
    },
    {
      id: 'ac-02-m2',
      title: 'الوحدة الثانية — السلوك',
      lessons: [
        {
          id: 'ac-02-l4',
          title: 'التعامل مع السوق',
          durationMinutes: 17,
          order: 4,
          description: 'طبيعة العلاقة بين التاجر والسوق وكيفية التعامل معه بفاعلية.',
          objectives: ['فهم طبيعة السوق', 'بناء علاقة صحية مع السوق', 'تجنب الأخطاء الشائعة'],
        },
        {
          id: 'ac-02-l5',
          title: 'إدارة الذات',
          durationMinutes: 22,
          order: 5,
          description: 'مهارات إدارة الذات كتاجر والتحكم في السلوك والتصرفات.',
          objectives: ['مفاهيم إدارة الذات', 'تطبيقات في التداول', 'أدوات القياس'],
        },
        {
          id: 'ac-02-l6',
          title: 'خلاصة ومراجعة',
          durationMinutes: 14,
          order: 6,
          description: 'مراجعة شاملة لمفاهيم دورة التاجر وتلخيص النقاط الرئيسية.',
          objectives: ['مراجعة المفاهيم', 'تلخيص الأفكار', 'تقييم الاستيعاب'],
        },
      ],
    },
  ],
  'ac-03': [
    {
      id: 'ac-03-m1',
      title: 'الوحدة الأولى — بنية الأسواق',
      lessons: [
        {
          id: 'ac-03-l1',
          title: 'ما هي الأسواق المالية',
          durationMinutes: 20,
          order: 1,
          description: 'تعريف شامل للأسواق المالية ووظائفها وأهميتها في الاقتصاد.',
          objectives: ['تعريف السوق المالي', 'وظائف السوق', 'أنواع الأسواق'],
        },
        {
          id: 'ac-03-l2',
          title: 'أنواع الأسواق',
          durationMinutes: 18,
          order: 2,
          description: 'تصنيف الأسواق المالية حسب الأدوات والمدى الزمني وطبيعة التداول.',
          objectives: ['تصنيف الأسواق', 'خصائص كل نوع', 'متى تستخدم كل نوع'],
        },
        {
          id: 'ac-03-l3',
          title: 'الأطراف المشاركة',
          durationMinutes: 22,
          order: 3,
          description: 'استعراض الأطراف المشاركة في الأسواق المالية وأدوار كل منها.',
          objectives: ['تحديد الأطراف', 'أدوار كل طرف', 'تأثير كل طرف على السوق'],
        },
        {
          id: 'ac-03-l4',
          title: 'آلية العمل',
          durationMinutes: 19,
          order: 4,
          description: 'شرح آلية عمل الأسواق المالية وكيفية تنفيذ الصفقات.',
          objectives: ['فهم آلية التنفيذ', 'أنواع الأوامر', 'دورة حياة الصفقة'],
        },
      ],
    },
    {
      id: 'ac-03-m2',
      title: 'الوحدة الثانية — الأدوات',
      lessons: [
        {
          id: 'ac-03-l5',
          title: 'الأدوات المالية الرئيسية',
          durationMinutes: 21,
          order: 5,
          description: 'استعراض الأدوات المالية الرئيسية المتاحة في الأسواق.',
          objectives: ['تصنيف الأدوات', 'خصائص كل أداة', 'متى تستخدم كل أداة'],
        },
        {
          id: 'ac-03-l6',
          title: 'منصات التداول',
          durationMinutes: 16,
          order: 6,
          description: 'مقدمة عن منصات التداول وكيفية اختيار المناسبة منها.',
          objectives: ['أنواع المنصات', 'معايير الاختيار', 'تجربة المنصات'],
        },
        {
          id: 'ac-03-l7',
          title: 'السيولة والعمق',
          durationMinutes: 18,
          order: 7,
          description: 'فهم مفهوم السيولة وعمق السوق وأثرهما على التداول.',
          objectives: ['تعريف السيولة', 'تعريف عمق السوق', 'أثرهما على التنفيذ'],
        },
        {
          id: 'ac-03-l8',
          title: 'العوامل المؤثرة على الأسعار',
          durationMinutes: 24,
          order: 8,
          description: 'تحليل العوامل الأساسية والمؤثرات التي تحرك الأسعار في السوق.',
          objectives: ['العوامل الاقتصادية', 'العوامل السياسية', 'العوامل النفسية'],
        },
        {
          id: 'ac-03-l9',
          title: 'الأخبار وتأثيرها',
          durationMinutes: 20,
          order: 9,
          description: 'كيفية قراءة الأخبار الاقتصادية وفهم تأثيرها على حركة الأسعار.',
          objectives: ['مصادر الأخبار', 'تحليل تأثير الخبر', 'التداول حول الأخبار'],
        },
        {
          id: 'ac-03-l10',
          title: 'قراءة البيانات',
          durationMinutes: 17,
          order: 10,
          description: 'مهارات قراءة البيانات الاقتصادية والمالية وتفسيرها.',
          objectives: ['أنواع البيانات', 'كيفية القراءة', 'التفسير والاستنتاج'],
        },
        {
          id: 'ac-03-l11',
          title: 'خلاصة ومراجعة',
          durationMinutes: 14,
          order: 11,
          description: 'مراجعة شاملة لمفاهيم دورة الأسواق المالية.',
          objectives: ['مراجعة المفاهيم', 'تلخيص الأفكار', 'تقييم الاستيعاب'],
        },
      ],
    },
  ],
  'ac-04': [
    {
      id: 'ac-04-m1',
      title: 'الوحدة الأولى — الأساسيات',
      lessons: [
        {
          id: 'ac-04-l1',
          title: 'مدخل إلى التحليل الفني',
          durationMinutes: 18,
          order: 1,
          description: 'مقدمة شاملة للتحليل الفني وأساسياته ومبادئه.',
          objectives: ['تعريف التحليل الفني', 'مبادئه الأساسية', 'حدود استخدامه'],
        },
        {
          id: 'ac-04-l2',
          title: 'أنواع الرسوم البيانية',
          durationMinutes: 16,
          order: 2,
          description: 'استعراض أنواع الرسوم البيانية المستخدمة في التحليل الفني.',
          objectives: ['أنواع الرسوم', 'خصائص كل نوع', 'متى تستخدم كل نوع'],
        },
        {
          id: 'ac-04-l3',
          title: 'الخطوط والمناطق',
          durationMinutes: 20,
          order: 3,
          description: 'كيفية رسم الخطوط وتحديد المناطق الرئيسية على الرسم البياني.',
          objectives: ['رسم خطوط الاتجاه', 'تحديد المناطق', 'تطبيقات عملية'],
        },
        {
          id: 'ac-04-l4',
          title: 'الاتجاهات',
          durationMinutes: 22,
          order: 4,
          description: 'فهم أنواع الاتجاهات وكيفية تحديدها والتعامل معها.',
          objectives: ['أنواع الاتجاهات', 'تحديد الاتجاه', 'التداول مع الاتجاه'],
        },
        {
          id: 'ac-04-l5',
          title: 'مستويات الدعم والمقاومة',
          durationMinutes: 21,
          order: 5,
          description: 'مفهوم الدعم والمقاومة وكيفية استخدامهما في التحليل والتداول.',
          objectives: ['تعريف الدعم والمقاومة', 'كيفية التحديد', 'استخدامهما في القرار'],
        },
        {
          id: 'ac-04-l6',
          title: 'الأنماط السعرية',
          durationMinutes: 19,
          order: 6,
          description: 'استعراض الأنماط السعرية الرئيسية وكيفية التعرف عليها.',
          objectives: ['أنماط الاستمرار', 'أنماط الانعكاس', 'تطبيقات عملية'],
        },
      ],
    },
    {
      id: 'ac-04-m2',
      title: 'الوحدة الثانية — المستويات المتقدمة',
      lessons: [
        {
          id: 'ac-04-l7',
          title: 'المؤشرات الفنية',
          durationMinutes: 24,
          order: 7,
          description: 'مقدمة للمؤشرات الفنية الشائعة وكيفية استخدامها.',
          objectives: ['أنواع المؤشرات', 'كيفية القراءة', 'حدود المؤشرات'],
        },
        {
          id: 'ac-04-l8',
          title: 'التداول بأحجام',
          durationMinutes: 18,
          order: 8,
          description: 'فهم حجم التداول وأثره على تحليل السوق.',
          objectives: ['مفهوم الحجم', 'تأثيره على السعر', 'تطبيقات عملية'],
        },
        {
          id: 'ac-04-l9',
          title: 'المؤشرات المتقدمة',
          durationMinutes: 22,
          order: 9,
          description: 'استعراض مؤشرات فنية متقدمة وتطبيقاتها.',
          objectives: ['مؤشرات الزخم', 'مؤشرات التذبذب', 'استراتيجيات استخدام'],
        },
        {
          id: 'ac-04-l10',
          title: 'بناء نظام تحليلي',
          durationMinutes: 20,
          order: 10,
          description: 'خطوات بناء نظام تحليلي شخصي متكامل ومناسب لأسلوبك.',
          objectives: ['مكونات النظام', 'خطوات البناء', 'اختبار النظام'],
        },
      ],
    },
    {
      id: 'ac-04-m3',
      title: 'الوحدة الثالثة — الاحتراف',
      lessons: [
        {
          id: 'ac-04-l11',
          title: 'تحليل الأطر الزمنية المتعددة',
          durationMinutes: 21,
          order: 11,
          description: 'منهجية تحليل السوق عبر أطر زمنية متعددة لفهم أعمق.',
          objectives: ['فهم الأطر الزمنية', 'منهجية التحليل المتعدد', 'تطبيقات عملية'],
        },
        {
          id: 'ac-04-l12',
          title: 'إدارة الصفقات',
          durationMinutes: 19,
          order: 12,
          description: 'استراتيجيات إدارة الصفقات بعد الدخول في السوق.',
          objectives: ['إدارة الدخول', 'إدارة الخروج', 'تعديل وقف الخسارة'],
        },
        {
          id: 'ac-04-l13',
          title: 'حالات عملية متقدمة',
          durationMinutes: 25,
          order: 13,
          description: 'تحليل حالات سوقية متقدمة وتطبيق المفاهيم عليها.',
          objectives: ['تحليل حالات حقيقية', 'تطبيق الأدوات', 'تقييم النتائج'],
        },
        {
          id: 'ac-04-l14',
          title: 'خلاصة ومراجعة',
          durationMinutes: 14,
          order: 14,
          description: 'مراجعة شاملة لمفاهيم دورة التحليل الفني.',
          objectives: ['مراجعة المفاهيم', 'تلخيص الأفكار', 'تقييم الاستيعاب'],
        },
      ],
    },
  ],
};

// For courses without explicit modules, generate placeholder lessons
function generatePlaceholderModules(courseId: string, totalLessons: number): AcademyModule[] {
  return [
    {
      id: `${courseId}-m1`,
      title: 'محتوى تعليمي — تجريبي',
      lessons: Array.from({ length: Math.min(totalLessons, 6) }, (_, i) => ({
        id: `${courseId}-l${i + 1}`,
        title: `الدرس ${String(i + 1).padStart(2, '0')}`,
        durationMinutes: 18 + (i % 3) * 4,
        order: i + 1,
        description: 'محتوى تعليمي توضيحي — سيتم استبداله بالمحتوى الفعلي عند توفّره.',
        objectives: ['هدف تعليمي توضيحي'],
      })),
    },
  ];
}

export function getCourseModules(courseId: string, totalLessons: number): AcademyModule[] {
  return ACADEMY_MODULES[courseId] || generatePlaceholderModules(courseId, totalLessons);
}

/** Get all lessons for a course as a flat list */
export function getFlatLessons(courseId: string): AcademyModule['lessons'] {
  const course = ACADEMY_COURSES.find((c) => c.id === courseId);
  if (!course) return [];
  const modules = getCourseModules(courseId, 6);
  return modules.flatMap((m) => m.lessons);
}

/** Total lesson count across all courses */
export function getTotalLessonsAllCourses(): number {
  return ACADEMY_COURSES.reduce((sum, course) => {
    const lessons = getFlatLessons(course.id);
    return sum + lessons.length;
  }, 0);
}

// ── Three-month program structure (illustrative grouping) ──

export const ACADEMY_MONTHS = [
  {
    month: 1,
    title: 'الشهر الأول — الأساس',
    description: 'بناء طريقة التفكير، مفهوم التاجر، وفهم بنية الأسواق المالية.',
    courseIds: ['ac-01', 'ac-02', 'ac-03'],
  },
  {
    month: 2,
    title: 'الشهر الثاني — التحليل والإدارة',
    description: 'التحليل الفني من المدخل إلى الاحتراف، الإدارة المالية، وإدارة المخاطر.',
    courseIds: ['ac-04', 'ac-05', 'ac-06'],
  },
  {
    month: 3,
    title: 'الشهر الثالث — التطبيق المتقدم',
    description: 'إدارة رأس المال، الذهب والمعادن، وأخطاء المتداولين.',
    courseIds: ['ac-07', 'ac-08', 'ac-09'],
  },
];
