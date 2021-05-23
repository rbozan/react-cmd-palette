import React, { useContext } from "react"
import { Link } from "react-router-dom"
import CommandPaletteContext from "../../CommandPalette/CommandPaletteContext"
import './Navbar.css'

const Navbar = () => {
    const { show } = useContext(CommandPaletteContext);
    return <header>
        <div className="container">
            <div className="logo"><code>React CMD Palette</code></div>
            <input type="search" placeholder="Search something" onFocus={show} />
            <nav>
                <Link to="/basic">Basic example</Link>
                <Link to="/keyboard-shortcut">Keyboard shortcut</Link>
                <Link to="/a-lot-of-actions">A lot of actions</Link>
            </nav>
        </div>
    </header>
}

export default Navbar;