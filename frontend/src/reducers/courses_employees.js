import { GET_COURSES_EMPLOYEES, DELETE_COURS_EMPLOYEE, ADD_COURS_EMPLOYEE, UPDATE_COURS_EMPLOYEE, GET_COURS_EMPLOYEE} from "../actions/types.js";

const initialState = {
  coursesEmployees: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COURSES_EMPLOYEES:
      return {
        ...state,
        coursesEmployees: action.payload
      };
    case GET_COURS_EMPLOYEE:
      return {
        ...state,
        coursEmployee: action.payload
      };
    case DELETE_COURS_EMPLOYEE:
      return {
        ...state,
        coursesEmployees: state.coursesEmployees.filter(coursEmployee => coursEmployee.id !== action.payload)
      };
    case ADD_COURS_EMPLOYEE:
      return {
        ...state,
        coursesEmployees: [...state.coursesEmployees, action.payload]
      };
    case UPDATE_COURS_EMPLOYEE:
      var lesindex = 0;
      state.coursesEmployees.map((cours, index) => {
        if (cours.id === action.payload.id)
          lesindex = index;
      });
      state.coursesEmployees[lesindex] = action.payload;
      var lesns = state.coursesEmployees;
      return {
        ...state,
        coursesEmployees: lesns
      };
    default:
      return state;
  }
};