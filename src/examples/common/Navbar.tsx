import { motion } from "framer-motion";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CommandPaletteContext from "../../CommandPalette/CommandPaletteContext";
import "./Navbar.css";

const Navbar = () => {
  const { show } = useContext(CommandPaletteContext);
  return (
    <header>
      <div className="container">
        <div className="logo">
          <code>react-cmd-palette</code>
        </div>
        <div className="input">
          <motion.input
            layoutId="command-palette-input"
            type="search"
            placeholder="What are you searching for?"
            onFocus={show}
          />

          <h6>⬆️ ⬆️ ⬆️ ⬆️ Click here to toggle the command palette</h6>
        </div>
        <nav>
          <Link to="/basic">Basic example</Link>
          <Link to="/keyboard-shortcut">Keyboard shortcut</Link>
          <Link to="/a-lot-of-actions">A lot of actions</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
