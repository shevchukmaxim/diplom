import axios from 'axios';
import {createMessage} from "./messages";
import { tokenConfig } from "./auth";

import { GET_COURSES_EMPLOYEES, GET_COURS_EMPLOYEE, ADD_COURS_EMPLOYEE, DELETE_COURS_EMPLOYEE, GET_ERRORS, UPDATE_COURS_EMPLOYEE} from "./types";

//Get CoursesEmployees
export const getCoursesEmployees = () => (dispatch, getState) => {
  axios.get('/api/coursemployee/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_COURSES_EMPLOYEES,
        payload: res.data
      });
    }).catch(err => console.log(err));
};

//Get CoursEmployee
export const getCoursEmployee = (id) => (dispatch, getState) => {
  axios.get(`/api/coursemployee/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_COURS_EMPLOYEE,
        payload: res.data
      });
    }).catch(err => console.log(err));
};

//Delete CoursEmployee
export const deleteCoursEmployee= (id) => (dispatch, getState) => {
  axios.delete(`/api/coursemployee/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteCoursEmployee: "Курс удален" }));
      dispatch({
        type: DELETE_COURS_EMPLOYEE,
        payload: id
      });
    }).catch(err => console.log(err));
};

//Add CoursEmployee
export const addCoursEmployee = (group) => (dispatch, getState) => {
  axios.post('/api/coursemployee/', group, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addCoursEmployee: "Курс добавлен" }));
      dispatch({
        type: ADD_COURS_EMPLOYEE,
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

//Update CoursEmployee
export const updateCoursEmployee = (id, group) => (dispatch, getState) => {
  axios.put(`/api/coursemployee/${id}/`, group, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ updateCoursEmployee: "Курс изменен" }));
      dispatch({
        type: UPDATE_COURS_EMPLOYEE,
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
