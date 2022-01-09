import React from "react";
import { GOAL_COMPLETE, GOAL_IN_PROGRESS } from "../constants/goal";

function PureInProgressGoal({ title, points }) {
  return (
    <div class="p-2 md:w-1/4 ">
      <div class="flex justify-between p-4 bg-green-200 rounded-lg shadow-xs cursor-pointer hover:bg-green-500 hover:text-gray-100">
        <div>
          <p class=" text-sm font-medium ml-2 ">{title}</p>
        </div>
        <div
          type="button"
          class="rounded-full px-4 mr-2 bg-green-600 text-white p-2 rounded-full leading-none flex items-center"
        >
          {points}
        </div>
      </div>
    </div>
  );
}

function PureCompleteGoal({ title, points }) {
  return (
    <div class="p-2 md:w-1/4 ">
      <div class="flex justify-between p-4 bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-gray-500 hover:text-gray-100">
        <div>
          <p class=" text-sm font-medium ml-2 ">{title}</p>
        </div>
        <div
          type="button"
          class="rounded-full px-4 mr-2 bg-green-600 text-white p-2 rounded-full  leading-none flex items-center"
        >
          {points}
        </div>
      </div>
    </div>
  );
}

export default function Goal({
  goal: { id, title, details, createdAt, points, state },
  onComplete,
}) {
  return (
    <div>
      {state === GOAL_IN_PROGRESS && (
        <PureInProgressGoal key={id} title={title} points={points} />
      )}
      {state === GOAL_COMPLETE && (
        <PureCompleteGoal key={id} title={title} points={points} />
      )}
    </div>
  );
}
