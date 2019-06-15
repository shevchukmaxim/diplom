import axios from 'axios';
import {createMessage} from "./messages";
import { tokenConfig } from "./auth";

import {
  GET_COURSES_LESSONS,
  GET_COURS_LESSON,
  ADD_COURS_LESSON,
  DELETE_COURS_LESSON,
  GET_ERRORS,
  UPDATE_COURS_LESSON,
  ADD_LESSON
} from "./types";

//Get CoursesLessons
export const getCoursesLessons = () => (dispatch, getState) => {
  axios.get('/api/courslesson/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_COURSES_LESSONS,
        payload: res.data
      });
    }).catch(err => console.log(err));
};

//Get CoursesLessons
export const getCoursLesson = (id) => (dispatch, getState) => {
  axios.get(`/api/courslesson/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_COURS_LESSON,
        payload: res.data
      });
    }).catch(err => console.log(err));
};

//Delete CoursesLessons
export const deleteCoursLesson = (id) => (dispatch, getState) => {
  axios.delete(`/api/courslesson/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteCoursLesson: "Курс удален" }));
      dispatch({
        type: DELETE_COURS_LESSON,
        payload: id
      });
    }).catch(err => console.log(err));
};

//Add CoursesLessons
export const addCoursLesson = (lesson, history) => (dispatch, getState) => {
  axios.post('/api/courslesson/', lesson, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addCoursLesson: "Курс добавлен" }));
      dispatch
      {
        history.push(`/lesson/${res.data.lesson}/`);
        return ({
          type: ADD_COURS_LESSON,
          payload: res.data
        });
      }
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

//Update CoursLesson
export const updateCoursLesson = (id, lesson) => (dispatch, getState) => {
  axios.put(`/api/courslesson/${id}/`, lesson, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ updateCoursLesson: "Курс изменен" }));
      dispatch({
        type: UPDATE_COURS_LESSON,
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
