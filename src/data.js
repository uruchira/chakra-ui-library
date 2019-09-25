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

const now = new Date();

export const events = [
  {
    id: 0,
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2019, 3, 0),
    end: new Date(2019, 3, 1)
  },
  {
    id: 1,
    title: "Long Event",
    start: new Date(2019, 3, 7),
    end: new Date(2019, 3, 10)
  },

  {
    id: 2,
    title: "DTS STARTS",
    start: new Date(2019, 2, 13, 0, 0, 0),
    end: new Date(2019, 2, 20, 0, 0, 0)
  },

  {
    id: 3,
    title: "DTS ENDS",
    start: new Date(2018, 10, 6, 0, 0, 0),
    end: new Date(2018, 10, 13, 0, 0, 0)
  },

  {
    id: 4,
    title: "Some Event",
    start: new Date(2018, 3, 9, 0, 0, 0),
    end: new Date(2018, 3, 10, 0, 0, 0)
  },
  {
    id: 5,
    title: "Conference",
    start: new Date(2017, 3, 11),
    end: new Date(2017, 3, 13),
    desc: "Big conference for important people"
  },
  {
    id: 6,
    title: "Meeting",
    start: new Date(2017, 3, 12, 10, 30, 0, 0),
    end: new Date(2017, 3, 12, 12, 30, 0, 0),
    desc: "Pre-meeting meeting, to prepare for the meeting"
  },
  {
    id: 7,
    title: "Lunch",
    start: new Date(2017, 3, 12, 12, 0, 0, 0),
    end: new Date(2017, 3, 12, 13, 0, 0, 0),
    desc: "Power lunch"
  },
  {
    id: 8,
    title: "Meeting",
    start: new Date(2017, 3, 12, 14, 0, 0, 0),
    end: new Date(2017, 3, 12, 15, 0, 0, 0)
  },
  {
    id: 9,
    title: "Happy Hour",
    start: new Date(2017, 3, 12, 17, 0, 0, 0),
    end: new Date(2017, 3, 12, 17, 30, 0, 0),
    desc: "Most important meal of the day"
  },
  {
    id: 10,
    title: "Dinner",
    start: new Date(2017, 3, 12, 20, 0, 0, 0),
    end: new Date(2017, 3, 12, 21, 0, 0, 0)
  },
  {
    id: 11,
    title: "Birthday Party",
    start: new Date(2017, 3, 13, 7, 0, 0),
    end: new Date(2017, 3, 13, 10, 30, 0)
  },
  {
    id: 12,
    title: "Late Night Event",
    start: new Date(2017, 3, 17, 19, 30, 0),
    end: new Date(2017, 3, 18, 2, 0, 0)
  },
  {
    id: 12.5,
    title: "Late Same Night Event",
    start: new Date(2017, 3, 17, 19, 30, 0),
    end: new Date(2017, 3, 17, 23, 30, 0)
  },
  {
    id: 13,
    title: "Multi-day Event",
    start: new Date(2017, 3, 20, 19, 30, 0),
    end: new Date(2017, 3, 22, 2, 0, 0)
  },
  {
    id: 14,
    title: "Today",
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3))
  },
  {
    id: 15,
    title: "Point in Time Event",
    start: now,
    end: now
  }
];
