import moment from "moment";
import React from "react";
import {
  GOAL_COMPLETE,
  GOAL_IN_PROGRESS,
  GOAL_TODO,
} from "../constants/goalStates";

import { PureGoalList } from "./GoalList";

export default {
  component: PureGoalList,
  title: "GoalList",
};

const Template = (args) => <PureGoalList {...args} />;

export const Default = Template.bind({});
Default.args = {
  goalList: [
    {
      id: "1",
      title: "Take out the garbage!",
      state: GOAL_IN_PROGRESS,
      createdAt: moment()
        .set({
          year: "2022",
          month: "1",
          day: "1",
          hour: "12",
          minute: "45",
        })
        .toDate(),
      completedAt: null,
      points: 10,
    },
    {
      id: "2",
      title: "Vacuum bedroom!!",
      state: GOAL_TODO,
      createdAt: moment()
        .set({
          year: "2021",
          month: "12",
          day: "1",
          hour: "12",
          minute: "45",
        })
        .toDate(),
      completedAt: null,
      points: 30,
    },
    {
      id: "2",
      title: "Take out the garbage!",
      state: GOAL_COMPLETE,
      createdAt: moment()
        .set({
          year: "2022",
          month: "1",
          day: "7",
          hour: "12",
          minute: "45",
        })
        .toDate(),
      completedAt: null,
      points: 5,
    },
  ],
};
