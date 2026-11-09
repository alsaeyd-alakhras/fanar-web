
import { useMemo } from 'react';
import {
  ACADEMY_COURSES,
  getCourseModules as getDefaultCourseModules,
} from '@/data/academy';
import { useCMSContent } from '@/hooks/useCMSContent';


export function useAcademyContent() {
  const {
    academyCourses,
    academyModules,
    academyQuizzes,
  } = useCMSContent();

  return useMemo(() => {
    const courses = [...academyCourses].sort(
      (a, b) => a.order - b.order
    );

    const getCourse = (courseId: string) =>
      courses.find((course) => course.id === courseId);

    const getModules = (courseId: string) => {
        // Never return lessons for a course that no longer exists.
        if (!courses.some((course) => course.id === courseId)) {
            return [];
        }

        // Use modules explicitly saved in the CMS.
        if (
            Object.prototype.hasOwnProperty.call(
            academyModules,
            courseId
            )
        ) {
            return academyModules[courseId] ?? [];
        }

        // Preserve the original generated curriculum
        // for existing courses without saved modules.
        const isOriginalCourse = ACADEMY_COURSES.some(
        (course) => course.id === courseId
        );

        return isOriginalCourse
        ? getDefaultCourseModules(courseId, 6)
        : [];
        };

    const getLessons = (courseId: string) =>
    [...getModules(courseId)]
        .sort((a, b) => a.order - b.order)
        .flatMap((module) =>
        [...module.lessons].sort((a, b) => a.order - b.order)
        );

    const getQuiz = (courseId: string) =>
      academyQuizzes.find(
        (quiz) => quiz.courseId === courseId
      );

    const getQuizById = (quizId: string) =>
      academyQuizzes.find((quiz) => quiz.id === quizId);

    return {
      courses,
      modules: academyModules,
      quizzes: academyQuizzes,
      getCourse,
      getModules,
      getLessons,
      getQuiz,
      getQuizById,
    };
  }, [academyCourses, academyModules, academyQuizzes]);
}
