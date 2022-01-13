import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as GoalStories from "./Goal.stories";

const { Default } = composeStories(GoalStories);

it("Renders a goal with a point value", () => {
  const { container } = render(<Default />);
  expect(screen.getByText("Take out the garbage!")).toBeInTheDocument();
  expect(screen.getByText("10")).toBeInTheDocument();
});
