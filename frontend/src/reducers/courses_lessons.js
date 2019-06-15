import { GET_COURSES_LESSONS, DELETE_COURS_LESSON, ADD_COURS_LESSON, UPDATE_COURS_LESSON, GET_COURS_LESSON} from "../actions/types.js";

const initialState = {
  coursesLessons: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COURSES_LESSONS:
      return {
        ...state,
        coursesLessons: action.payload
      };
    case GET_COURS_LESSON:
      return {
        ...state,
        coursLesson: action.payload
      };
    case DELETE_COURS_LESSON:
      return {
        ...state,
        coursesLessons: state.coursesLessons.filter(coursLesson => coursLesson.id !== action.payload)
      };
    case ADD_COURS_LESSON:
      return {
        ...state,
        coursesLessons: [...state.coursesLessons, action.payload]
      };
    case UPDATE_COURS_LESSON:
      var lesindex = 0;
      state.coursesLessons.map((cours, index) => {
        if (cours.id === action.payload.id)
          lesindex = index;
      });
      state.coursesLessons[lesindex] = action.payload;
      var lesns = state.coursesLessons;
      return {
        ...state,
        coursesLessons: lesns
      };
    default:
      return state;
  }
};