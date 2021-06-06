//__tests__/hidden-message.js
//these imports are something you'd normally configure Jest to import for you
//automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from "react";
import {
  render,
  fireEvent,
  screen,
  cleanup,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Action, CommandPalette } from "../CommandPalette";
import CommandPaletteContext from "../CommandPalette/CommandPaletteContext";

describe("CommandPalette", () => {
  beforeEach(() => {
    global.alert = jest.fn();
    return render(
      <CommandPalette>
        <Child />
      </CommandPalette>
    );
  });

  afterEach(cleanup);

  const Child = () => {
    const { show, addAction, removeAction, shown } = React.useContext(
      CommandPaletteContext
    );

    const testActions: Action[] = [
      {
        id: 1,
        title: "Test action",
        onSelect: () => global.alert(),
      },
      {
        id: 2,
        title: "An useless test action",
        onSelect: () => {},
      },
      {
        id: 3,
        title: "An action with custom trailing",
        trailing: <p>A custom trailing component</p>,
        onSelect: () => {},
      },
    ];

    React.useEffect(() => {
      testActions.map((testAction) => addAction(testAction));

      return () => {
        testActions.map((testAction) => removeAction(testAction));
      };
    }, [addAction, removeAction]);
    return (
      <>
        <button onClick={show}>Open command palette</button>
        <p>shown: {JSON.stringify(shown)}</p>
        <p>child</p>
      </>
    );
  };

  const getCommandPaletteInput = () =>
    screen.queryByPlaceholderText("What are you searching for?");

  test("shows the children", () => {
    expect(screen.getByText("child")).toBeInTheDocument();
  });

  test("shows the command palette when calling `open` on context", () => {
    expect(getCommandPaletteInput()).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("Open command palette"));
    expect(getCommandPaletteInput()).toBeInTheDocument();
  });

  test("renders the test action", () => {
    fireEvent.click(screen.getByText("Open command palette"));
    expect(screen.getByText("Test action")).toBeInTheDocument();
  });

  test("calls `onSelect` when a task has been selected and closes command palette", async () => {
    fireEvent.click(screen.getByText("Open command palette"));
    expect(global.alert).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByText("Test action"));
    expect(global.alert).toHaveBeenCalledTimes(1);
    await waitForElementToBeRemoved(getCommandPaletteInput());
  });

  test("closes command palette when pressing escape", async () => {
    fireEvent.click(screen.getByText("Open command palette"));
    fireEvent.click(screen.getByText("Test action"));
    expect(getCommandPaletteInput()).toBeInTheDocument();
    fireEvent.keyDown(getCommandPaletteInput()!, {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
    });

    await waitForElementToBeRemoved(getCommandPaletteInput());
  });

  test("shows an empty results component when there are no results", async () => {
    fireEvent.click(screen.getByText("Open command palette"));
    expect(screen.getByText("Test action")).toBeInTheDocument();

    fireEvent.input(getCommandPaletteInput()!, {
      target: { value: "some text which leads to no results" },
    });

    expect(screen.queryByText("Test action")).not.toBeInTheDocument();
    expect(
      screen.getByText("There are no actions to see here.")
    ).toBeInTheDocument();
  });

  test("shows filtered actions when searching", async () => {
    fireEvent.click(screen.getByText("Open command palette"));
    expect(screen.getAllByText(" action", { exact: false }).length).toEqual(3);

    fireEvent.input(getCommandPaletteInput()!, {
      target: { value: "useless" },
    });

    expect(screen.queryByText("Test action")).not.toBeInTheDocument();
    expect(screen.getByText("useless", { exact: false })).toBeInTheDocument();
  });

  test("can have a custom trailing component", async () => {
    fireEvent.click(screen.getByText("Open command palette"));
    expect(
      screen.getByText("An action with custom trailing")
    ).toBeInTheDocument();

    expect(screen.getByText("A custom trailing component")).toBeInTheDocument();
  });
});
