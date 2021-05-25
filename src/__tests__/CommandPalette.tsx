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
    const testAction: Action = {
      id: 123,
      title: "Test action",
      onSelect: () => global.alert(),
    };

    React.useEffect(() => {
      addAction(testAction);

      return () => {
        removeAction(testAction);
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

  test("calls `onSelect` when a task has been selected", () => {
    fireEvent.click(screen.getByText("Open command palette"));
    expect(global.alert).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByText("Test action"));
    expect(global.alert).toHaveBeenCalledTimes(1);
  });

  //test("closes command palette after selecting a task", () => {
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
});
