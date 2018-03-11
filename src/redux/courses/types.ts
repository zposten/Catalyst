export type ICourse = {
  id: string,
  title: string,
  watchUrl: string,
  authorId: string,
  length: number,
  category: string,
}

export type LOAD_COURSES_SUCCESS = 'App/LOAD_COURSES_SUCCESS';
export const LOAD_COURSES_SUCCESS : LOAD_COURSES_SUCCESS = 'App/LOAD_COURSES_SUCCESS';

export type CREATE_COURSE_SUCCESS = 'App/CREATE_COURSE_SUCCESS';
export const CREATE_COURSE_SUCCESS : CREATE_COURSE_SUCCESS = 'App/CREATE_COURSE_SUCCESS';

export type UPDATE_COURSE_SUCCESS = 'App/UPDATE_COURSE_SUCCESS';
export const UPDATE_COURSE_SUCCESS : UPDATE_COURSE_SUCCESS = 'App/UPDATE_COURSE_SUCCESS';