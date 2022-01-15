import React from "react";
import moment from "moment";

import { GOAL_IN_PROGRESS } from "../constants/goalStates";

import Goal from "./Goal";

export default {
  component: Goal,
  title: "Goal",
};

const Template = (args) => <Goal {...args} />;

export const Default = Template.bind({});
Default.args = {
  goal: {
    id: "1",
    title: "Take out the garbage!",
    state: GOAL_IN_PROGRESS,
    createdAt: moment("2021-12-31 13:45").toDate(),
    completedAt: null,
    points: 10,
  },
};
