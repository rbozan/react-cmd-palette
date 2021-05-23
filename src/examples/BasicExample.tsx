import { useContext, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Action } from "../CommandPalette";
import CommandPaletteContext from "../CommandPalette/CommandPaletteContext";

const BasicExample = () => {
  const navigate = useNavigate();
  const {
    addAction,
    removeAction,
    show: open,
  } = useContext(CommandPaletteContext);

  const testAction: Action = useMemo(
    () => ({
      id: 1,
      title: "Visit keyboard shortcut demo",
      onSelect: () => navigate("/keyboard-shortcut"),
    }),
    [navigate]
  );

  useEffect(() => {
    addAction(testAction);

    return () => {
      removeAction(testAction);
    };
  }, [addAction, removeAction, testAction]);

  return (
    <>
      <p>This is a basic example of the Command Palette</p>
      <button onClick={open}>Open command palette</button>
    </>
  );
};

export default BasicExample;
