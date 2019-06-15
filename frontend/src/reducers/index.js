import {combineReducers} from "redux";

import employees from "./employees";
import departments from "./departments";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import lessons from "./lessons";
import lessons_employees from "./lessons_employees";
import users from "./users";
import group from "./group";
import group_employee from "./group_employee";
import courses from "./courses";
import courses_employees from "./courses_employees";
import courses_lessons from "./courses_lessons";

export default combineReducers({
  employees,
  errors,
  messages,
  departments,
  auth,
  lessons_employees,
  lessons,
  users,
  group,
  group_employee,
  courses,
  courses_lessons,
  courses_employees
});