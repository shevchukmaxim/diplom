import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import MainDashboard from "./views/MainDashboard";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Employees from "./views/Employees";
import Departments from "./views/Departments";
import Classes from "./views/Classes";
import SingleClass from "./views/SingleClass";

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
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
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
    path: "/classes",
    exact: true,
    layout: DefaultLayout,
    component: Classes,
  },
  {
    path: "/classes/:id",
    layout: DefaultLayout,
    component: SingleClass
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
  }
];
