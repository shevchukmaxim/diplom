import axios from 'axios';
import {createMessage} from "./messages";
import { tokenConfig } from "./auth";

import { GET_GROUPS, ADD_GROUP, DELETE_GROUP, GET_GROUP, UPDATE_GROUP, GET_ERRORS} from "./types";

//Get Group
export const getGroups = () => (dispatch, getState) => {
  axios.get('/api/group/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_GROUPS,
        payload: res.data
      });
    }).catch(err => console.log(err));
};

//Get Lesson
export const getGroup = (id) => (dispatch, getState) => {
  axios.get(`/api/group/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_GROUP,
        payload: res.data
      });
    }).catch(err => console.log(err));
};

//Delete Group
export const deleteGroup = (id, history) => (dispatch, getState) => {
  axios.delete(`/api/group/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteGroup: "Группа удалена" }));
      dispatch
      {
        history.push("/groups");
        return ({
          type: DELETE_GROUP,
          payload: id
        });
      }
    }).catch(err => console.log(err));
};

//Add Group
export const addGroup = (group, history) => (dispatch, getState) => {
  axios.post('/api/group/', group, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addGroup: "Группа добавлена" }));
      dispatch
      {
        history.push(`/group/${res.data.id}/`);
        return ({
          type: ADD_GROUP,
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

//Update Group
export const updateGroup = (id, group) => (dispatch, getState) => {
  axios.put(`/api/group/${id}/`, group, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ updateGroup: "Группа изменена" }));
      dispatch({
        type: UPDATE_GROUP,
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