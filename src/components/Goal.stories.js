import React from "react";
import moment from "moment";

import { GOAL_COMPLETE, GOAL_IN_PROGRESS } from "../constants/goal";

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

export const Complete = Template.bind({});
Complete.args = {
  goal: {
    ...Default.args.goal,
    state: GOAL_COMPLETE,
    completedAt: moment("2022-1-3 13:30").toDate(),
  },
};
