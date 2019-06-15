import { GET_LESSONS, DELETE_LESSON, ADD_LESSON, GET_LESSON, UPDATE_LESSON} from "../actions/types.js";

const initialState = {
  lessons: [],
  lesson: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LESSONS:
      return {
        ...state,
        lessons: action.payload
      };
    case GET_LESSON:
      return {
        ...state,
        lesson: action.payload
      };
    case DELETE_LESSON:
      return {
        ...state,
        lessons: state.lessons.filter(lesson => lesson.id !== action.payload)
      };
    case ADD_LESSON:
      return {
        ...state,
        lessons: [...state.lessons, action.payload]
      };
    case UPDATE_LESSON:
      return {
        ...state,
        lessons: [...state.lessons, action.payload]
      };
    default:
      return state;
  }
};