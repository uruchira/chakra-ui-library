import React from "react";

import LoginForm from "./SampleForms/LoginForm";
import RegisterForm from "./SampleForms/RegisterForm";
import ResetPasswordForm from "./SampleForms/ResetPasswordForm";

export const leaveData = [
  { id: 1, name: "Casual Leaves", value: "casual" },
  { id: 2, name: "Annual Leaves", value: "annual" },
  { id: 3, name: "Medical Leaves", value: "medical" }
];

export const tabListData = [
  {
    id: 1,
    title: "First Title",
    component: () => <LoginForm />
  },
  {
    id: 2,
    title: "Second Title",
    component: () => <RegisterForm />
  },
  {
    id: 3,
    title: "Third Title",
    component: () => <ResetPasswordForm />
  }
];

export const productData = [
  {
    id: 1,
    title: "Product 1 title",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo.`
  },
  {
    id: 2,
    title: "Product 2 title",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo.`
  },
  {
    id: 3,
    title: "Product 3 title",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo.`
  }
];

export const rowData = [
  {
    id: 1,
    firstName: "Tanner",
    lastName: "Linsley",
    organization: "labore et dolore magna",
    status: "Active"
  },
  {
    id: 2,
    firstName: "Shawn",
    lastName: "Wang",
    organization: "quis nostrud exercitation",
    status: "Active"
  },
  {
    id: 3,
    firstName: "Kent C.",
    lastName: "Dodds",
    organization: "consectetur adipiscing elit",
    status: "Inactive"
  },
  {
    id: 4,
    firstName: "Ryan",
    lastName: "Florence",
    organization: "eiusmod tempor incididunt",
    status: "Active"
  },
  {
    id: 5,
    firstName: "Mike",
    lastName: "Taylor",
    organization: "aliquip ex ea commodo",
    status: "Active"
  }
];
