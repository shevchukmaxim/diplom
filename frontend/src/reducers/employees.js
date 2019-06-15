import { GET_EMPLOYEES, DELETE_EMPLOYEE, ADD_EMPLOYEE, UPDATE_EMPLOYEE, GET_EMPLOYEE} from "../actions/types.js";

const initialState = {
  employees: [],
  employee: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload
      };
    case GET_EMPLOYEE:
      return {
        ...state,
        employee: action.payload
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(employee => employee.emp_no !== action.payload)
      };
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [action.payload, ...state.employees ]
      };
    case UPDATE_EMPLOYEE:
      var empindex = 0;
      state.employees.map((employee, index) => {
        if (employee.emp_no === action.payload.emp_no)
          empindex = index;
      });
      state.employees[empindex] = action.payload;
      var emps = state.employees;
      return {
        ...state,
        employees: emps
      };
    default:
      return state;
  }
};