import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as GoalListStories from "./GoalList.stories";

const { Default } = composeStories(GoalListStories);

it(`Default goal list has title "To Be Done"`, () => {
  render(<Default />);
  expect(screen.getByText("To Be Done")).toBeInTheDocument();
  expect(screen.getByText("To Be Done")).toBeInTheDocument();
});
