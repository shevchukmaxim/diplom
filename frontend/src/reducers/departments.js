import { GET_DEPARTMENTS, DELETE_DEPARTMENT, ADD_DEPARTMENT, UPDATE_DEPARTMENT, GET_DEPARTMENT} from "../actions/types.js";
import {GET_LESSON} from "../actions/types";

const initialState = {
  departments: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DEPARTMENTS:
      return {
        ...state,
        departments: action.payload
      };
    case GET_DEPARTMENT:
      return {
        ...state,
        department: action.payload
      };
    case DELETE_DEPARTMENT:
      return {
        ...state,
        departments: state.departments.filter(department => department.dept_no !== action.payload)
      };
    case ADD_DEPARTMENT:
      return {
        ...state,
        departments: [...state.departments, action.payload]
      };
    case UPDATE_DEPARTMENT:
      return {
        ...state,
        departments: [...state.departments, action.payload]
      };
    default:
      return state;
  }
};