import axios from 'axios';
import {createMessage} from "./messages";
import { tokenConfig } from "./auth";

import { GET_GROUPS_EMPLOYEES, GET_GROUP_EMPLOYEE, ADD_GROUP_EMPLOYEE, DELETE_GROUP_EMPLOYEE, GET_ERRORS, UPDATE_GROUP_EMPLOYEE} from "./types";

//Get GroupsEmployees
export const getGroupsEmployees = () => (dispatch, getState) => {
  axios.get('/api/groupemployee/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_GROUPS_EMPLOYEES,
        payload: res.data
      });
    }).catch(err => console.log(err));
};

//Get GroupEmployee
export const getGroupEmployee = (id) => (dispatch, getState) => {
  axios.get(`/api/groupemployee/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_GROUP_EMPLOYEE,
        payload: res.data
      });
    }).catch(err => console.log(err));
};

//Delete GroupEmployee
export const deleteGroupEmployee= (id) => (dispatch, getState) => {
  axios.delete(`/api/groupemployee/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteGroupEmployee: "Занятие удалено" }));
      dispatch({
        type: DELETE_GROUP_EMPLOYEE,
        payload: id
      });
    }).catch(err => console.log(err));
};

//Add GroupEmployee
export const addGroupEmployee = (group) => (dispatch, getState) => {
  axios.post('/api/groupemployee/', group, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addGroupEmployee: "Занятие добавлено" }));
      dispatch({
        type: ADD_GROUP_EMPLOYEE,
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

//Update GroupEmployee
export const updateGroupEmployee = (id, group) => (dispatch, getState) => {
  axios.put(`/api/groupemployee/${id}/`, group, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ updateGroupEmployee: "Сотрудник изменен" }));
      dispatch({
        type: UPDATE_GROUP_EMPLOYEE,
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
