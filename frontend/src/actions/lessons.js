import axios from 'axios';
import {createMessage} from "./messages";
import { tokenConfig } from "./auth";

import { GET_LESSONS, ADD_LESSON, DELETE_LESSON, GET_LESSON, UPDATE_LESSON, GET_ERRORS} from "./types";

//Get Lessons
export const getLessons = () => (dispatch, getState) => {
  axios.get('/api/lesson/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_LESSONS,
        payload: res.data
      });
    }).catch(err => console.log(err));
};

//Get Lesson
export const getLesson = (id) => (dispatch, getState) => {
  axios.get(`/api/lesson/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_LESSON,
        payload: res.data
      });
    }).catch(err => console.log(err));
};

//Delete Lesson
export const deleteLesson = (id, history) => (dispatch, getState) => {
  axios.delete(`/api/lesson/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteLesson: "Занятие удалено" }));
      dispatch
      {
        history.push("/lessons");
        return ({
          type: DELETE_LESSON,
          payload: id
        });
      }
    }).catch(err => console.log(err));
};

//Add Lesson
export const addLesson = (lesson, history) => (dispatch, getState) => {
  axios.post('/api/lesson/', lesson, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addLesson: "Занятие добавлено" }));
      dispatch
      {
        // history.push(`/lesson/${res.data.id}/`);
        return ({
          type: ADD_LESSON,
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

//Update Lesson
export const updateLesson = (id, lesson) => (dispatch, getState) => {
  axios.put(`/api/lesson/${id}/`, lesson, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ updateLesson: "Занятие изменено" }));
      dispatch({
        type: UPDATE_LESSON,
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