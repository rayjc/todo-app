import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function() {
  render(<TodoList />);
});

it("should match default snapshot", function() {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
})

it("can add a new todo", function() {
  const { getByLabelText, getByText, queryByText } = render(<TodoList />);

  // no todos yet
  expect(queryByText("test todo")).not.toBeInTheDocument();

  const todoInput = getByLabelText("Task:");
  const submitBtn = getByText("Add");

  // fill out the form
  fireEvent.change(todoInput, { target: { value: "test todo" } });
  fireEvent.click(submitBtn);

  // todo exists!
  expect(queryByText("test todo")).toBeInTheDocument();
});

it("can cross out a todo", function() {
  const { getByRole, getByLabelText, getByText, queryByText } = render(<TodoList />);
  const todoInput = getByLabelText("Task:");
  const submitBtn = getByText("Add");

  // fill out the form
  fireEvent.change(todoInput, { target: { value: "test todo" } });
  fireEvent.click(submitBtn);

  const checkBox = getByRole("checkbox");

  // crossout todo
  fireEvent.click(checkBox);
  expect(queryByText("test todo")).toHaveClass("completed")
});

it("can remove a todo", function() {
  const { getByRole, getByLabelText, getByText, queryByText } = render(<TodoList />);
  const todoInput = getByLabelText("Task:");
  const submitBtn = getByText("Add");

  // fill out the form
  fireEvent.change(todoInput, { target: { value: "test todo" } });
  fireEvent.click(submitBtn);

  const checkBox = getByRole("checkbox");

  // crossout todo to show remove button
  fireEvent.click(checkBox);

  const removeBtn = getByText("x");
  fireEvent.click(removeBtn);

  expect(queryByText("test todo")).not.toBeInTheDocument();
});
