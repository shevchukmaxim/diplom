import axios from "axios";
import { returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import {
GET_USERS
} from "./types";

//Get Users
export const getUsers = () => (dispatch, getState) => {
  axios.get('/api/users/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_USERS,
        payload: res.data
      });
    }).catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
};