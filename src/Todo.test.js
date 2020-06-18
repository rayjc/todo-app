import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

it("renders without crashing", function() {
  render(<Todo />);
});

it("should match default snapshot", function() {
  const { asFragment } = render(
    <Todo id="0" name="test" isDone={false} removeTodo={jest.fn()} />
  );
  expect(asFragment()).toMatchSnapshot();
})