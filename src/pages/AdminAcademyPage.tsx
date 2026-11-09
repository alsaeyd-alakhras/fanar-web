
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  Layers,
  Plus,
  RotateCcw,
  Save,
  Trash2,
} from 'lucide-react';

import {
  cmsActions,
  useCMSContent,
} from '@/hooks/useCMSContent';

import type {
  AcademyCourseBase,
  AcademyModule,
  Quiz,
} from '@/types';
import { useAcademyContent } from '@/hooks/useAcademyContent';

type Tab = 'courses' | 'curriculum' | 'quizzes';

const inputClass =
  'w-full rounded-xl border border-[#1D2C4F]/15 bg-white ' +
  'px-4 py-3 text-[13px] text-[#1D2C4F] outline-none ' +
  'focus:border-[#84A4B1]';

const labelClass =
  'mb-2 block text-[12px] font-semibold text-[#1D2C4F]/70';

function makeId(prefix: string) {
  return `${prefix}-${crypto.randomUUID()}`;
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  multiline = false,
  disabled = false,
}: {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  type?: string;
  multiline?: boolean;
  disabled?: boolean;
}) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      {multiline ? (
        <textarea
          rows={3}
          className={inputClass}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          disabled={disabled}
        />
      ) : (
        <input
          className={inputClass}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          disabled={disabled}
        />
      )}
    </label>
  );
}

export default function AdminAcademyPage() {
  const {
    academyCourses,
    academyModules,
    academyQuizzes,
  } = useCMSContent();
  const academy = useAcademyContent();

  const [tab, setTab] = useState<Tab>('courses');
  const [courseId, setCourseId] = useState(
    academyCourses[0]?.id ?? ''
  );

  const [courseDraft, setCourseDraft] =
    useState<AcademyCourseBase | null>(null);

  const [modulesDraft, setModulesDraft] =
    useState<AcademyModule[]>([]);

  const [quizDraft, setQuizDraft] =
    useState<Quiz | null>(null);

    const [notice, setNotice] = useState('');
    const [error, setError] = useState('');

    const [saveFeedback, setSaveFeedback] = useState<
    'idle' | 'success' | 'error'
    >('idle');

    useEffect(() => {
        if (saveFeedback === 'idle') return;

        const timer = window.setTimeout(() => {
            setSaveFeedback('idle');
        }, 4000);

        return () => window.clearTimeout(timer);
        }, [saveFeedback]);

  const selectedCourse = academyCourses.find(
    (course) => course.id === courseId
  );

  const selectedQuiz = academyQuizzes.find(
    (quiz) => quiz.courseId === courseId
  );

  const hasUnsavedChanges =
    (courseDraft !== null &&
        JSON.stringify(courseDraft) !==
        JSON.stringify(selectedCourse ?? null)) ||
    JSON.stringify(modulesDraft) !==
        JSON.stringify(academyModules[courseId] ?? []) ||
    JSON.stringify(quizDraft) !==
        JSON.stringify(selectedQuiz ?? null);

    const confirmDiscardChanges = () =>
    !hasUnsavedChanges ||
    window.confirm(
        'لديك تغييرات غير محفوظة. هل تريد تجاهلها والمتابعة؟'
    );

    useEffect(() => {
        if (!hasUnsavedChanges) return;

        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            event.preventDefault();
            event.returnValue = '';
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
}, [hasUnsavedChanges]);

  useEffect(() => {
    if (
      courseId &&
      academyCourses.some((course) => course.id === courseId)
    ) {
      return;
    }
    setCourseId(academyCourses[0]?.id ?? '');
  }, [academyCourses, courseId]);

  useEffect(() => {
    setCourseDraft(
      selectedCourse ? structuredClone(selectedCourse) : null
    );

    setModulesDraft(
      structuredClone(academyModules[courseId] ?? [])
    );

    setQuizDraft(
      selectedQuiz ? structuredClone(selectedQuiz) : null
    );

    setError('');
    setNotice('');
  }, [
    courseId,
    selectedCourse,
    selectedQuiz,
    academyModules,
  ]);

  const sortedCourses = useMemo(
    () => [...academyCourses].sort((a, b) => a.order - b.order),
    [academyCourses]
  );

  const totalLessons = academy.courses.reduce(
    (sum, course) =>
        sum + academy.getLessons(course.id).length,
    0
    );

  const updateCourse = (
    changes: Partial<AcademyCourseBase>
  ) => {
    setCourseDraft((previous) =>
      previous ? { ...previous, ...changes } : previous
    );
  };

  const saveCourse = () => {
    if (!courseDraft) return;

    if (!courseDraft.title.trim()) {
      setError('عنوان الدورة مطلوب.');
      return;
    }

    try {
      cmsActions.update(
        'academyCourses',
        courseDraft.id,
        courseDraft
      );
      setError('');
      setNotice('تم حفظ بيانات الدورة.');
      setSaveFeedback('success');
    } catch (cause) {
        setSaveFeedback('error');
      setError( 
        cause instanceof Error
          ? cause.message
          : 'تعذر حفظ الدورة.'
      );
    }
  };

  const addCourse = () => {
    if (!confirmDiscardChanges()) return;
    const id = makeId('ac');

    const course: AcademyCourseBase = {
      id,
      number: String(academyCourses.length + 1).padStart(2, '0'),
      title: 'دورة جديدة',
      description: '',
      month: 1,
      order:
        Math.max(0, ...academyCourses.map((item) => item.order)) + 1,
    };

    try {
      cmsActions.add('academyCourses', course);
      setCourseId(id);
      setTab('courses');
    } catch {
      setError('تعذر إضافة الدورة.');
    }
  };

  const deleteCourse = () => {
    if (!selectedCourse) return;

    if (
      !window.confirm(
        'حذف الدورة قد يؤثر على روابط الدروس وسجلات التقدم. هل تريد المتابعة؟'
      )
    ) {
      return;
    }

    try {
      cmsActions.remove('academyCourses', selectedCourse.id);
      setNotice('تم حذف الدورة من قائمة الدورات.');
    } catch {
      setError('تعذر حذف الدورة.');
    }
  };

  const updateModule = (
    moduleIndex: number,
    changes: Partial<AcademyModule>
  ) => {
    setModulesDraft((previous) =>
      previous.map((module, index) =>
        index === moduleIndex
          ? { ...module, ...changes }
          : module
      )
    );
  };

  const addModule = () => {
    if (!courseId) return;

    setModulesDraft((previous) => [
      ...previous,
      {
        id: makeId(`${courseId}-m`),
        title: 'وحدة جديدة',
        lessons: [],
      },
    ]);
  };

  const deleteModule = (moduleIndex: number) => {
    if (!window.confirm('هل تريد حذف هذه الوحدة ودروسها؟')) {
      return;
    }

    setModulesDraft((previous) =>
      previous.filter((_, index) => index !== moduleIndex)
    );
  };

  const addLesson = (moduleIndex: number) => {
    setModulesDraft((previous) =>
      previous.map((module, index) => {
        if (index !== moduleIndex) return module;

        const nextOrder =
          Math.max(
            0,
            ...previous.flatMap((item) =>
              item.lessons.map((lesson) => lesson.order)
            )
          ) + 1;

        return {
          ...module,
          lessons: [
            ...module.lessons,
            {
              id: makeId(`${courseId}-l`),
              title: 'درس جديد',
              description: '',
              durationMinutes: 15,
              order: nextOrder,
              objectives: [],
            },
          ],
        };
      })
    );
  };

  const updateLesson = (
    moduleIndex: number,
    lessonIndex: number,
    changes: Partial<AcademyModule['lessons'][number]>
  ) => {
    setModulesDraft((previous) =>
      previous.map((module, index) => {
        if (index !== moduleIndex) return module;

        return {
          ...module,
          lessons: module.lessons.map((lesson, index) =>
            index === lessonIndex
              ? { ...lesson, ...changes }
              : lesson
          ),
        };
      })
    );
  };

  const deleteLesson = (
    moduleIndex: number,
    lessonIndex: number
  ) => {
    if (!window.confirm('هل تريد حذف هذا الدرس؟')) return;

    setModulesDraft((previous) =>
      previous.map((module, index) =>
        index === moduleIndex
          ? {
              ...module,
              lessons: module.lessons.filter(
                (_, index) => index !== lessonIndex
              ),
            }
          : module
      )
    );
  };

  const saveCurriculum = () => {
    if (!courseId) return;

    const ids = modulesDraft.flatMap((module) => [
      module.id,
      ...module.lessons.map((lesson) => lesson.id),
    ]);

    if (new Set(ids).size !== ids.length) {
      setError('توجد معرّفات مكررة في المنهج.');
      return;
    }

    try {
      cmsActions.setAcademyModules(courseId, modulesDraft);
      setError('');
      setNotice('تم حفظ الوحدات والدروس.');
      setSaveFeedback('success');
    } catch {
        setSaveFeedback('error');
      setError('تعذر حفظ المنهج.');
    }
  };

  const createQuiz = () => {
    if (!courseId) return;

    setQuizDraft({
      id: makeId('quiz'),
      courseId,
      title: `اختبار ${selectedCourse?.title ?? ''}`,
      description: '',
      questions: [],
    });
  };

  const updateQuestion = (
    questionIndex: number,
    changes: Partial<Quiz['questions'][number]>
  ) => {
    setQuizDraft((previous) => {
      if (!previous) return previous;

      return {
        ...previous,
        questions: previous.questions.map((question, index) =>
          index === questionIndex
            ? { ...question, ...changes }
            : question
        ),
      };
    });
  };

  const addQuestion = () => {
    setQuizDraft((previous) => {
      if (!previous) return previous;

      const questionId = makeId('q');

      return {
        ...previous,
        questions: [
          ...previous.questions,
          {
            id: questionId,
            prompt: 'سؤال جديد',
            options: [
              { id: 'a', text: '' },
              { id: 'b', text: '' },
              { id: 'c', text: '' },
              { id: 'd', text: '' },
            ],
            correctOptionId: 'a',
            explanation: '',
          },
        ],
      };
    });
  };

  const deleteQuestion = (questionIndex: number) => {
    setQuizDraft((previous) =>
      previous
        ? {
            ...previous,
            questions: previous.questions.filter(
              (_, index) => index !== questionIndex
            ),
          }
        : previous
    );
  };

  const saveQuiz = () => {
        if (!quizDraft) return;

        if (!quizDraft.title.trim()) {
        setError('عنوان الاختبار مطلوب.');
        setSaveFeedback('error');
        return;
        }

        if (quizDraft.questions.length === 0) {
        setError('يجب إضافة سؤال واحد على الأقل قبل حفظ الاختبار.');
        setSaveFeedback('error');
        return;
        }
    

    for (const question of quizDraft.questions) {
      if (
        !question.prompt.trim() ||
        question.options.length < 2 ||
        question.options.some((option) => !option.text.trim()) ||
        !question.options.some(
          (option) => option.id === question.correctOptionId
        )
      ) {
        setError('يرجى إكمال الأسئلة والخيارات والإجابات الصحيحة.');
        return;
      }
    }

    try {
      if (selectedQuiz) {
        cmsActions.update(
          'academyQuizzes',
          selectedQuiz.id,
          quizDraft
        );
      } else {
        cmsActions.add('academyQuizzes', quizDraft);
      }

      setError('');
      setNotice('تم حفظ الاختبار.');
      setSaveFeedback('success');
    } catch (cause) {
        setSaveFeedback('error');
      setError(
        cause instanceof Error
          ? cause.message
          : 'تعذر حفظ الاختبار.'
      );
    }
  };

  const resetCurrent = () => {
    if (
      !window.confirm(
        'سيتم استعادة البيانات الأصلية لهذا القسم. هل تريد المتابعة؟'
      )
    ) {
      return;
    }

    try {
      if (tab === 'courses') {
        cmsActions.reset('academyCourses');
      } else if (tab === 'curriculum') {
        cmsActions.reset('academyModules');
      } else {
        cmsActions.reset('academyQuizzes');
      }
      setNotice('تمت استعادة البيانات الأصلية.');
      setError('');
    } catch {
      setError('تعذرت استعادة البيانات.');
    }
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#F3F3F1] px-5 pb-24 pt-32 font-arabic text-[#1D2C4F] sm:px-8"
    >
      <div className="mx-auto max-w-[1250px]">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-3 text-[11px] tracking-widest text-[#54707D]">
              FNAR / ACADEMY CMS
            </p>
            <h1 className="text-[clamp(2rem,4vw,3.3rem)] font-bold">
              إدارة الأكاديمية
            </h1>
            <p className="mt-3 text-[13px] text-[#1D2C4F]/55">
              إدارة الدورات والوحدات والدروس والاختبارات.
            </p>
          </div>

          <Link
            to="/admin"
            onClick={(event) => {
                if (!confirmDiscardChanges()) {
                event.preventDefault();
                }
            }}
            className="flex items-center gap-2 rounded-full border border-[#1D2C4F]/15 px-5 py-3 text-[12px]"
            >
            <ArrowRight size={16} />
            العودة للوحة الإدارة
          </Link>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              label: 'الدورات',
              count: academyCourses.length,
              icon: BookOpen,
            },
            {
              label: 'الدروس',
              count: totalLessons,
              icon: Layers,
            },
            {
              label: 'الاختبارات',
              count: academyQuizzes.length,
              icon: ClipboardList,
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-[18px] border border-[#1D2C4F]/10 bg-white p-6"
            >
              <stat.icon
                size={19}
                className="mb-4 text-[#84A4B1]"
              />
              <div className="font-sans text-[30px] font-bold">
                {stat.count}
              </div>
              <p className="mt-1 text-[12px] text-[#1D2C4F]/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {([
            ['courses', 'الدورات'],
            ['curriculum', 'الوحدات والدروس'],
            ['quizzes', 'الاختبارات'],
          ] as const).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => {
                if (value === tab) return;
                if (!confirmDiscardChanges()) return;

                setTab(value);
                setNotice('');
                setError('');
                }}
              className={`rounded-full px-6 py-3 text-[12px] font-semibold ${
                tab === value
                  ? 'bg-[#152742] text-white'
                  : 'border border-[#1D2C4F]/10 bg-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div className="w-full max-w-[430px]">
            <label className={labelClass}>
              اختر الدورة
            </label>
            <select
              value={courseId}
              onChange={(event) => {
                const nextId = event.target.value;

                if (nextId === courseId) return;
                if (!confirmDiscardChanges()) return;

                setCourseId(nextId);
                }}
              className={inputClass}
            >
              {sortedCourses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.number} — {course.title}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap gap-2">
            {tab === 'courses' && (
              <button
                type="button"
                onClick={addCourse}
                className="flex items-center gap-2 rounded-full bg-[#152742] px-5 py-3 text-[12px] text-white"
              >
                <Plus size={16} />
                إضافة دورة
              </button>
            )}
            <button
              type="button"
              onClick={resetCurrent}
              className="flex items-center gap-2 rounded-full border border-[#1D2C4F]/15 px-5 py-3 text-[12px]"
            >
              <RotateCcw size={15} />
              استعادة الأصل
            </button>
          </div>
        </div>

        {notice && (
          <p
            role="status"
            className="mb-5 rounded-xl bg-[#84A4B1]/15 p-4 text-[12px]"
          >
            {notice}
          </p>
        )}

        {error && (
          <p
            role="alert"
            className="mb-5 rounded-xl bg-red-50 p-4 text-[12px] text-red-700"
          >
            {error}
          </p>
        )}

        {tab === 'courses' && courseDraft && (
          <section className="rounded-[22px] border border-[#1D2C4F]/10 bg-white p-6 sm:p-9">
            <h2 className="mb-7 text-[22px] font-bold">
              بيانات الدورة
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="معرّف الدورة — ثابت"
                value={courseDraft.id}
                onChange={() => {}}
                disabled
              />
              <Field
                label="رقم الدورة"
                value={courseDraft.number}
                onChange={(number) => updateCourse({ number })}
              />
              <div className="sm:col-span-2">
                <Field
                  label="عنوان الدورة"
                  value={courseDraft.title}
                  onChange={(title) => updateCourse({ title })}
                />
              </div>
              <div className="sm:col-span-2">
                <Field
                  label="وصف الدورة"
                  value={courseDraft.description}
                  onChange={(description) =>
                    updateCourse({ description })
                  }
                  multiline
                />
              </div>
              <Field
                label="الشهر"
                type="number"
                value={courseDraft.month}
                onChange={(value) =>
                  updateCourse({ month: Number(value) })
                }
              />
              <Field
                label="ترتيب العرض"
                type="number"
                value={courseDraft.order}
                onChange={(value) =>
                  updateCourse({ order: Number(value) })
                }
              />
            </div>

            <div className="mt-8 flex flex-wrap justify-between gap-3">
              <button
                type="button"
                onClick={deleteCourse}
                className="flex items-center gap-2 rounded-full border border-red-200 px-5 py-3 text-[12px] text-red-600"
              >
                <Trash2 size={15} />
                حذف الدورة
              </button>
              <button
                type="button"
                onClick={saveCourse}
                className="flex items-center gap-2 rounded-full bg-[#152742] px-7 py-3 text-[12px] text-white"
              >
                <Save size={16} />
                حفظ الدورة
              </button>
            </div>
          </section>
        )}

        {tab === 'curriculum' && selectedCourse && (
          <section className="space-y-5">
            {modulesDraft.map((module, moduleIndex) => (
              <div
                key={module.id}
                className="rounded-[22px] border border-[#1D2C4F]/10 bg-white p-6 sm:p-8"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <h2 className="text-[19px] font-bold">
                    الوحدة {moduleIndex + 1}
                  </h2>
                  <button
                    type="button"
                    onClick={() => deleteModule(moduleIndex)}
                    className="text-red-600"
                    aria-label="حذف الوحدة"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <Field
                  label="عنوان الوحدة"
                  value={module.title}
                  onChange={(title) =>
                    updateModule(moduleIndex, { title })
                  }
                />

                <div className="mt-6 space-y-4">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <div
                      key={lesson.id}
                      className="rounded-[16px] border border-[#1D2C4F]/10 bg-[#F3F3F1] p-5"
                    >
                      <div className="mb-5 flex items-center justify-between">
                        <h3 className="text-[15px] font-bold">
                          الدرس {lessonIndex + 1}
                        </h3>
                        <button
                          type="button"
                          onClick={() =>
                            deleteLesson(moduleIndex, lessonIndex)
                          }
                          className="text-red-600"
                          aria-label="حذف الدرس"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <Field
                            label="عنوان الدرس"
                            value={lesson.title}
                            onChange={(title) =>
                              updateLesson(
                                moduleIndex,
                                lessonIndex,
                                { title }
                              )
                            }
                          />
                        </div>

                        <Field
                          label="المدة بالدقائق"
                          type="number"
                          value={lesson.durationMinutes}
                          onChange={(value) =>
                            updateLesson(
                              moduleIndex,
                              lessonIndex,
                              { durationMinutes: Number(value) }
                            )
                          }
                        />

                        <Field
                          label="ترتيب الدرس"
                          type="number"
                          value={lesson.order}
                          onChange={(value) =>
                            updateLesson(
                              moduleIndex,
                              lessonIndex,
                              { order: Number(value) }
                            )
                          }
                        />

                        <div className="sm:col-span-2">
                          <Field
                            label="وصف الدرس"
                            value={lesson.description}
                            onChange={(description) =>
                              updateLesson(
                                moduleIndex,
                                lessonIndex,
                                { description }
                              )
                            }
                            multiline
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <Field
                            label="الأهداف التعليمية — هدف في كل سطر"
                            value={lesson.objectives.join('\n')}
                            onChange={(value) =>
                              updateLesson(
                                moduleIndex,
                                lessonIndex,
                                {
                                  objectives: value
                                    .split('\n')
                                    .map((line) => line.trim())
                                    .filter(Boolean),
                                }
                              )
                            }
                            multiline
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => addLesson(moduleIndex)}
                  className="mt-5 flex items-center gap-2 rounded-full border border-[#1D2C4F]/15 px-5 py-3 text-[12px]"
                >
                  <Plus size={15} />
                  إضافة درس
                </button>
              </div>
            ))}

            <div className="flex flex-wrap justify-between gap-3">
              <button
                type="button"
                onClick={addModule}
                className="flex items-center gap-2 rounded-full border border-[#1D2C4F]/15 px-6 py-3 text-[12px]"
              >
                <Plus size={16} />
                إضافة وحدة
              </button>

              <button
                type="button"
                onClick={saveCurriculum}
                className="flex items-center gap-2 rounded-full bg-[#152742] px-7 py-3 text-[12px] text-white"
              >
                <Save size={16} />
                حفظ المنهج
              </button>
            </div>
          </section>
        )}

        {tab === 'quizzes' && selectedCourse && (
          <section className="rounded-[22px] border border-[#1D2C4F]/10 bg-white p-6 sm:p-9">
            {!quizDraft ? (
              <div className="py-12 text-center">
                <p className="mb-5 text-[14px]">
                  لا يوجد اختبار لهذه الدورة.
                </p>
                <button
                  type="button"
                  onClick={createQuiz}
                  className="rounded-full bg-[#152742] px-6 py-3 text-[12px] text-white"
                >
                  إنشاء اختبار
                </button>
              </div>
            ) : (
              <>
                <h2 className="mb-7 text-[22px] font-bold">
                  إدارة الاختبار
                </h2>

                <div className="space-y-5">
                  <Field
                    label="عنوان الاختبار"
                    value={quizDraft.title}
                    onChange={(title) =>
                      setQuizDraft((previous) =>
                        previous ? { ...previous, title } : previous
                      )
                    }
                  />
                  <Field
                    label="وصف الاختبار"
                    value={quizDraft.description}
                    onChange={(description) =>
                      setQuizDraft((previous) =>
                        previous
                          ? { ...previous, description }
                          : previous
                      )
                    }
                    multiline
                  />
                </div>

                <div className="mt-8 space-y-5">
                  {quizDraft.questions.map((question, questionIndex) => (
                    <div
                      key={question.id}
                      className="rounded-[16px] border border-[#1D2C4F]/10 bg-[#F3F3F1] p-5"
                    >
                      <div className="mb-5 flex items-center justify-between">
                        <h3 className="text-[15px] font-bold">
                          السؤال {questionIndex + 1}
                        </h3>
                        <button
                          type="button"
                          onClick={() => deleteQuestion(questionIndex)}
                          className="text-red-600"
                          aria-label="حذف السؤال"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <Field
                        label="نص السؤال"
                        value={question.prompt}
                        onChange={(prompt) =>
                          updateQuestion(questionIndex, { prompt })
                        }
                        multiline
                      />

                      <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        {question.options.map((option, optionIndex) => (
                          <Field
                            key={option.id}
                            label={`الخيار ${option.id}`}
                            value={option.text}
                            onChange={(text) =>
                              updateQuestion(questionIndex, {
                                options: question.options.map(
                                  (item, index) =>
                                    index === optionIndex
                                      ? { ...item, text }
                                      : item
                                ),
                              })
                            }
                          />
                        ))}
                      </div>

                      <div className="mt-5">
                        <label className={labelClass}>
                          الإجابة الصحيحة
                        </label>
                        <select
                          className={inputClass}
                          value={question.correctOptionId}
                          onChange={(event) =>
                            updateQuestion(questionIndex, {
                              correctOptionId: event.target.value,
                            })
                          }
                        >
                          {question.options.map((option) => (
                            <option key={option.id} value={option.id}>
                              {option.id} — {option.text}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="mt-5">
                        <Field
                          label="شرح الإجابة"
                          value={question.explanation}
                          onChange={(explanation) =>
                            updateQuestion(questionIndex, {
                              explanation,
                            })
                          }
                          multiline
                        />
                      </div>

                      <div className="mt-5">
                        <label className={labelClass}>
                          الدرس المرتبط بالسؤال
                        </label>
                        <select
                          className={inputClass}
                          value={question.lessonId ?? ''}
                          onChange={(event) =>
                            updateQuestion(questionIndex, {
                              lessonId: event.target.value || undefined,
                            })
                          }
                        >
                          <option value="">بدون درس محدد</option>
                          {modulesDraft.flatMap((module) =>
                            module.lessons.map((lesson) => (
                              <option
                                key={lesson.id}
                                value={lesson.id}
                              >
                                {lesson.title}
                              </option>
                            ))
                          )}
                        </select>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap justify-between gap-3">
                  <button
                    type="button"
                    onClick={addQuestion}
                    className="flex items-center gap-2 rounded-full border border-[#1D2C4F]/15 px-6 py-3 text-[12px]"
                  >
                    <Plus size={16} />
                    إضافة سؤال
                  </button>

                  <button
                    type="button"
                    onClick={saveQuiz}
                    className="flex items-center gap-2 rounded-full bg-[#152742] px-7 py-3 text-[12px] text-white"
                  >
                    <Save size={16} />
                    حفظ الاختبار
                  </button>
                </div>
              </>
            )}
          </section>
        )}
      
      </div>

      {/* Save feedback notification */}
      {saveFeedback !== 'idle' && (
        <div
          role={saveFeedback === 'error' ? 'alert' : 'status'}
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-[300] w-[calc(100%-2rem)] max-w-[420px] -translate-x-1/2 rounded-[18px] border border-[#84A4B1]/30 bg-[#152742] p-5 text-white shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <div className="flex items-center gap-4">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                saveFeedback === 'success'
                  ? 'bg-[#84A4B1]/20 text-[#84A4B1]'
                  : 'bg-red-500/20 text-red-300'
              }`}
            >
              {saveFeedback === 'success' ? (
                <span className="text-[22px]">✓</span>
              ) : (
                <span className="text-[22px]">!</span>
              )}
            </div>

            <div className="flex-1">
              <p className="text-[14px] font-bold">
                {saveFeedback === 'success'
                  ? 'تم حفظ التغييرات بنجاح'
                  : 'لم يتم حفظ التغييرات'}
              </p>

              <p className="mt-1 text-[11px] text-white/60">
                {saveFeedback === 'success'
                  ? 'تم حفظ البيانات في المتصفح.'
                  : error || 'يرجى مراجعة البيانات والمحاولة مجدداً.'}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSaveFeedback('idle')}
              aria-label="إغلاق الإشعار"
              className="rounded-full border border-white/15 px-3 py-2 text-[12px] text-white/70 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

