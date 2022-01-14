import React from "react";

function PureInProgressGoal({ title, points }) {
  return (
    <div className="md:w-1/4 ">
      <div className="flex justify-between p-4 shadow-xs cursor-pointer ">
        <div>
          <p className=" text-sm font-medium ml-2 ">{title}</p>
        </div>
        <div
          type="button"
          className="rounded-full px-4 mr-2 bg-green-600 text-white p-2 rounded-full leading-none flex items-center"
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
      <PureInProgressGoal key={id} title={title} points={points} />
    </div>
  );
}
