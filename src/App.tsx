import React from "react";
import { CommandPalette } from "./CommandPalette";
import BasicExample from "./examples/BasicExample";
import Navbar from "./examples/common/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import KeyboardShortcutExample from "./examples/KeyboardShortcut";
import ALotOfActionsExample from "./examples/ALotOfActionsExample";
import { AnimateSharedLayout } from "framer-motion";

function App() {
  return (
    <AnimateSharedLayout type="crossfade">
      <CommandPalette
        InputProps={{ placeholder: "What are you searching for?" }}
      >
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/basic" element={<BasicExample />} />
              <Route
                path="/keyboard-shortcut"
                element={<KeyboardShortcutExample />}
              />
              <Route
                path="/a-lot-of-actions"
                element={<ALotOfActionsExample />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </CommandPalette>
    </AnimateSharedLayout>
  );
}

export default App;