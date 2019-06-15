import { GET_LESSONS_EMPLOYEES, DELETE_LESSON_EMPLOYEE, ADD_LESSON_EMPLOYEE, UPDATE_LESSON_EMPLOYEE, GET_LESSON_EMPLOYEE} from "../actions/types.js";

const initialState = {
  lessonsEmployees: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LESSONS_EMPLOYEES:
      return {
        ...state,
        lessonsEmployees: action.payload
      };
    case GET_LESSON_EMPLOYEE:
      return {
        ...state,
        lessonEmployee: action.payload
      };
    case DELETE_LESSON_EMPLOYEE:
      return {
        ...state,
        lessonsEmployees: state.lessonsEmployees.filter(lessonEmployee => lessonEmployee.id !== action.payload)
      };
    case ADD_LESSON_EMPLOYEE:
      return {
        ...state,
        lessonsEmployees: [...state.lessonsEmployees, action.payload]
      };
    case UPDATE_LESSON_EMPLOYEE:
      var lesindex = 0;
      state.lessonsEmployees.map((lesson, index) => {
        if (lesson.id === action.payload.id)
          lesindex = index;
      });
      state.lessonsEmployees[lesindex] = action.payload;
      var lesns = state.lessonsEmployees;
      return {
        ...state,
        lessonsEmployees: lesns
      };
    default:
      return state;
  }
};