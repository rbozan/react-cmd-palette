import React from "react";
import logo from "./logo.svg";
import { CommandPalette } from "./CommandPalette";
import BasicExample from "./examples/BasicExample";
import Navbar from "./examples/common/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import KeyboardShortcutExample from "./examples/KeyboardShortcut";

function App() {
  return (
    <CommandPalette>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/basic" element={<BasicExample />} />
          <Route path="/keyboard-shortcut" element={<KeyboardShortcutExample />} />
        </Routes>
      </BrowserRouter>
    </CommandPalette>
  );
}

export default App;
