import axios from 'axios';
import {createMessage} from "./messages";
import { tokenConfig } from "./auth";

import { GET_COURSES, ADD_COURS, DELETE_COURS, GET_COURS, UPDATE_COURS, GET_ERRORS} from "./types";

//Get Courses
export const getCourses = () => (dispatch, getState) => {
  axios.get('/api/cours/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_COURSES,
        payload: res.data
      });
    }).catch(err => console.log(err));
};

//Get Cours
export const getCours = (id) => (dispatch, getState) => {
  axios.get(`/api/cours/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_COURS,
        payload: res.data
      });
    }).catch(err => console.log(err));
};

//Delete Cours
export const deleteCours = (id, history) => (dispatch, getState) => {
  axios.delete(`/api/cours/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteCours: "Курс удален" }));
      dispatch
      {
        history.push("/courses");
        return ({
          type: DELETE_COURS,
          payload: id
        });
      }
    }).catch(err => console.log(err));
};

//Add Cours
export const addCours = (cours, history) => (dispatch, getState) => {
  axios.post('/api/cours/', cours, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addCours: "Курс добавлен" }));
      dispatch
      {
        history.push(`/cours/${res.data.id}/`);
        return ({
          type: ADD_COURS,
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

//Update Cours
export const updateCours = (id, cours) => (dispatch, getState) => {
  axios.put(`/api/cours/${id}/`, cours, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ updateGroup: "Курс изменен" }));
      dispatch({
        type: UPDATE_COURS,
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