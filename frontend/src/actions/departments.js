import axios from 'axios';
import {createMessage} from "./messages";
import { tokenConfig } from "./auth";

import { GET_DEPARTMENTS, GET_DEPARTMENT, DELETE_DEPARTMENT, ADD_DEPARTMENT, UPDATE_DEPARTMENT, GET_ERRORS} from "./types";

//Get Departments
export const getDepartments = () => (dispatch, getState) => {
  axios.get('/api/department/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_DEPARTMENTS,
        payload: res.data
      });
    }).catch(err => console.log(err));
};

//Get Department
export const getDepartment = (dept_no) => (dispatch, getState) => {
  axios.get(`/api/department/${dept_no}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_DEPARTMENT,
        payload: res.data
      });
    }).catch(err => console.log(err));
};

//Delete Department
export const deleteDepartment = (dept_no) => (dispatch, getState) => {
  axios.delete(`/api/department/${dept_no}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteDepartment: "Отдел удален" }));
      dispatch({
        type: DELETE_DEPARTMENT,
        payload: dept_no
      });
    }).catch(err => console.log(err));
};

//Add Department
export const addDepartment = (department) => (dispatch, getState) => {
  axios.post('/api/department/', department, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addDepartment: "Отдел добавлен" }));
      dispatch({
        type: ADD_DEPARTMENT,
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

//Update Department
export const updateDepartment = (dept_no, department) => (dispatch, getState) => {
  axios.put(`/api/department/${dept_no}/`, department, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ updateDepartment: "Отдел изменен" }));
      dispatch({
        type: UPDATE_DEPARTMENT,
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
