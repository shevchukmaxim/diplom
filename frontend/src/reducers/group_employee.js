import { GET_GROUPS_EMPLOYEES, DELETE_GROUP_EMPLOYEE, ADD_GROUP_EMPLOYEE, UPDATE_GROUP_EMPLOYEE, GET_GROUP_EMPLOYEE} from "../actions/types.js";

const initialState = {
  groupsEmployees: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_GROUPS_EMPLOYEES:
      return {
        ...state,
        groupsEmployees: action.payload
      };
    case GET_GROUP_EMPLOYEE:
      return {
        ...state,
        groupEmployee: action.payload
      };
    case DELETE_GROUP_EMPLOYEE:
      return {
        ...state,
        groupsEmployees: state.lessonsEmployees.filter(groupEmployee => groupEmployee.id !== action.payload)
      };
    case ADD_GROUP_EMPLOYEE:
      return {
        ...state,
        groupsEmployees: [...state.groupsEmployees, action.payload]
      };
    case UPDATE_GROUP_EMPLOYEE:
      var lesindex = 0;
      state.groupsEmployees.map((lesson, index) => {
        if (lesson.id === action.payload.id)
          lesindex = index;
      });
      state.groupsEmployees[lesindex] = action.payload;
      var lesns = state.groupsEmployees;
      return {
        ...state,
        groupsEmployees: lesns
      };
    default:
      return state;
  }
};