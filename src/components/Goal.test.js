import { render } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as GoalStories from "./Goal.stories";

const { CompleteGoal } = composeStories(GoalStories);

it("renders a complete goal.", () => {
  const { container } = render(<CompleteGoal />);
});
