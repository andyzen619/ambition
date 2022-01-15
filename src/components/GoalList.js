import React, { useEffect, useState } from "react";
import {
  GOAL_COMPLETE,
  GOAL_IN_PROGRESS,
  GOAL_TODO,
} from "../constants/goalStates";
import Goal from "./Goal";

export function PureGoalList({ goalList }) {
  return (
    <div>
      <div>
        <div>To Be Done</div>
        <div>
          {goalList
            .filter(({ state }) => state !== GOAL_COMPLETE)
            .map((goal) => (
              <Goal key={goal.id} goal={goal} />
            ))}
        </div>
      </div>
      <div>
        <div>Completed</div>
        <div>
          {goalList
            .filter(
              ({ state }) => ![GOAL_TODO, GOAL_IN_PROGRESS].includes(state)
            )
            .map((goal) => (
              <Goal key={goal.id} goal={goal} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default function GoalList() {
  const [goalList, setGoalList] = useState([]);

  useEffect(() => {
    //TODO: Retrieve goal list from DB
    setGoalList([]);
  }, []);
  return <PureGoalList goalList={goalList} />;
}
