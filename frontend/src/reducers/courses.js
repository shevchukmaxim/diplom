import { GET_COURSES, DELETE_COURS, ADD_COURS, UPDATE_COURS, GET_COURS} from "../actions/types.js";

const initialState = {
  courses: [],
  cours: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload
      };
    case GET_COURS:
      return {
        ...state,
        cours: action.payload
      };
    case DELETE_COURS:
      return {
        ...state,
        courses: state.courses.filter(cours => cours.id !== action.payload)
      };
    case ADD_COURS:
      return {
        ...state,
        courses: [...state.courses, action.payload]
      };
    case UPDATE_COURS:
      var lesindex = 0;
      state.courses.map((cours, index) => {
        if (cours.id === action.payload.id)
          lesindex = index;
      });
      state.courses[lesindex] = action.payload;
      var lesns = state.courses;
      return {
        ...state,
        courses: lesns
      };
    default:
      return state;
  }
};