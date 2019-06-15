import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import MainDashboard from "./views/MainDashboard";
import EmployeeProfile from "./views/EmployeeProfile";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Employees from "./views/Employees";
import Departments from "./views/Departments";
import Lessons from "./views/Lessons";
import SingleLesson from "./views/SingleLesson";
import SingleDepartment from "./views/SingleDepartment";
import Users from "./views/Users";
import Groups from "./views/Groups";
import AddLesson from "./components/lessons/AddLesson";
import AddCours from "./components/courses/AddCours";
import SingleGroup from "./views/SingleGroup";
import SingleCourse from "./views/SingleCourse";
import Courses from "./views/Courses";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/dashboard" />
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: MainDashboard
  },
  {
    path: "/employee/:id",
    layout: DefaultLayout,
    component: EmployeeProfile
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/lessons",
    exact: true,
    layout: DefaultLayout,
    component: Lessons,
  },
  {
    path: "/lesson/:id",
    layout: DefaultLayout,
    component: SingleLesson
  },
  {
    path: "/employees",
    layout: DefaultLayout,
    component: Employees
  },
  {
    path: "/departments",
    layout: DefaultLayout,
    component: Departments
  },
  {
    path: "/department/:id",
    layout: DefaultLayout,
    component: SingleDepartment
  },
  {
    path: "/addlesson",
    layout: DefaultLayout,
    component: AddLesson
  },
  {
    path: "/users",
    layout: DefaultLayout,
    component: Users
  },
  {
    path: "/groups",
    layout: DefaultLayout,
    component: Groups
  },
  {
    path: "/group/:id",
    layout: DefaultLayout,
    component: SingleGroup
  },
  {
    path: "/courses",
    layout: DefaultLayout,
    component: Courses
  },
  {
    path: "/cours/:id",
    layout: DefaultLayout,
    component: SingleCourse
  },
  {
    path: "/addcours",
    layout: DefaultLayout,
    component: AddCours
  }
];
