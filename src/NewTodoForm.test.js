import React from "react";
import { render } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", function() {
  render(<NewTodoForm />);
});

it("should match default snapshot", function() {
  const { asFragment } = render(
    <NewTodoForm addTodo={jest.fn()} />
  );
  expect(asFragment()).toMatchSnapshot();
})