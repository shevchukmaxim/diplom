import axios from 'axios';
import {createMessage, returnErrors} from "./messages";
import { tokenConfig } from "./auth";

import { GET_EMPLOYEES, GET_EMPLOYEE, DELETE_EMPLOYEE, ADD_EMPLOYEE, UPDATE_EMPLOYEE, GET_ERRORS } from "./types";

//Get Employees
export const getEmployees = () => (dispatch, getState) => {
  axios.get('/api/employee/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_EMPLOYEES,
        payload: res.data
      });
    }).catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
};

//Get Employee
export const getEmployee = (emp_no) => (dispatch, getState) => {
  axios.get(`/api/employee/${emp_no}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_EMPLOYEE,
        payload: res.data
      });
    }).catch(err => console.log(err));
};

//Delete Employee
export const deleteEmployee = (emp_no) => (dispatch, getState) => {
  axios.delete(`/api/employee/${emp_no}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteEmployee: "Сотрудник удален" }));
      dispatch({
        type: DELETE_EMPLOYEE,
        payload: emp_no
      });
    }).catch(err => console.log(err));
};

//Add Employee
export const addEmployee = (employee) => (dispatch, getState) => {
  axios.post('/api/employee/', employee, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addEmployee: "Сотрудник добавлен" }));
      dispatch({
        type: ADD_EMPLOYEE,
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

//Update Employee
export const updateEmployee = (emp_no, employee) => (dispatch, getState) => {
  axios.put(`/api/employee/${emp_no}/`, employee, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ updateEmployee: "Сотрудник изменен" }));
      dispatch({
        type: UPDATE_EMPLOYEE,
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
