import axios from 'axios';
import {createMessage} from "./messages";
import { tokenConfig } from "./auth";

import { GET_LESSONS_EMPLOYEES, GET_LESSON_EMPLOYEE, ADD_LESSON_EMPLOYEE, DELETE_LESSON_EMPLOYEE, GET_ERRORS, UPDATE_LESSON_EMPLOYEE} from "./types";

//Get LessonsEmployees
export const getLessonsEmployees = () => (dispatch, getState) => {
  axios.get('/api/lessonemployee/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_LESSONS_EMPLOYEES,
        payload: res.data
      });
    }).catch(err => console.log(err));
};

//Get LessonsEmployees
export const getLessonEmployee = (id) => (dispatch, getState) => {
  axios.get(`/api/lessonemployee/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_LESSON_EMPLOYEE,
        payload: res.data
      });
    }).catch(err => console.log(err));
};

//Delete LessonsEmployees
export const deleteLessonEmployee = (id) => (dispatch, getState) => {
  axios.delete(`/api/lessonemployee/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteLessonEmployee: "Занятие удалено" }));
      dispatch({
        type: DELETE_LESSON_EMPLOYEE,
        payload: id
      });
    }).catch(err => console.log(err));
};

//Add LessonsEmployees
export const addLessonEmployee = (lesson) => (dispatch, getState) => {
  axios.post('/api/lessonemployee/', lesson, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addLessonEmployee: "Занятие добавлено" }));
      dispatch({
        type: ADD_LESSON_EMPLOYEE,
        payload: res.data
      });
    }).catch(err => {
    const errors = {
      msg: err.response.data,
      status: err.response.status
    };
    dispatch({
      type: GET_ERRORS,
      payload: errors
    });
  });
};

//Update LessonEmployee
export const updateLessonEmployee = (id, lesson) => (dispatch, getState) => {
  axios.put(`/api/lessonemployee/${id}/`, lesson, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ updateLessonEmployee: "Сотрудник изменен" }));
      dispatch({
        type: UPDATE_LESSON_EMPLOYEE,
        payload: res.data
      });
    }).catch(err => {
    const errors = {
      msg: err.response.data,
      status: err.response.status
    };
    dispatch({
      type: GET_ERRORS,
      payload: errors
    });
  });
};
