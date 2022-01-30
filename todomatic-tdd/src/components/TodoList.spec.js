import React from "react";
import { shallow, configure } from "enzyme";
import {
  fireEvent,
  getAllByRole,
  getAllByTestId,
  render,
} from "@testing-library/react";
import Adapter from "enzyme-adapter-react-16";
import TodoList from "./TodoList";
configure({ adapter: new Adapter() });

describe("Basic rendering of todo-list", () => {
  it("should load title", () => {
    const { getByTestId } = render(<TodoList />);
    expect(getByTestId("Heading")).toHaveTextContent("Todo-List");
  });

  it("should enable user to type items", () => {
    const { getByTestId } = render(<TodoList />);
    expect(getByTestId("Input")).toBeTruthy();
  });

  it("should be able to add item", () => {
    const { getByTestId } = render(<TodoList />);
    expect(getByTestId("add-button")).not.toHaveAttribute("disabled");
  });
});

describe("Basic functionality of todo-list", () => {
  it("The input variable state should change", () => {
    const { getByTestId } = render(<TodoList />);
    const inputText = getByTestId("Input");
    fireEvent.change(inputText, { target: { value: "test" } });
    expect(inputText.value).toBe("test");
  });
  it("the addItem function should be called on button click", () => {
    const { getByTestId, getAllByTestId } = render(<TodoList />);
    const inputText = getByTestId("Input");
    fireEvent.change(inputText, { target: { value: "todoItem" } });
    fireEvent.click(getByTestId("add-button"));
    const items = getAllByTestId("Item");
    const textContents = items.map((item) => item.textContent);
    expect(textContents.includes("todoItem")).toBeTruthy();
  });
});
