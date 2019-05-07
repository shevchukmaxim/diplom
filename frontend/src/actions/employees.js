import axios from 'axios';

import { GET_EMPLOYEES, DELETE_EMPLOYEE, ADD_EMPLOYEE} from "./types";

//Get Employees
export const getEmployees = () => dispatch => {
  axios.get('/api/employee/')
    .then(res => {
      dispatch({
        type: GET_EMPLOYEES,
        payload: res.data
      });
    }).catch(err => console.log(err));
};

//Delete Employee
export const deleteEmployee = (emp_no) => dispatch => {
  axios.delete(`/api/employee/${emp_no}/`)
    .then(res => {
      dispatch({
        type: DELETE_EMPLOYEE,
        payload: emp_no
      });
    }).catch(err => console.log(err));
};

//Add Employee
export const addEmployee = (employee) => dispatch => {
  axios.post('/api/employee/', employee)
    .then(res => {
      dispatch({
        type: ADD_EMPLOYEE,
        payload: res.data
      });
    }).catch(err => console.log(err));
};
