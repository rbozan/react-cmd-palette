import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return <nav>
        <Link to="/basic">Basic example</Link>
        <Link to="/keyboard-shortcut">Keyboard shortcut</Link>
    </nav>
}

export default Navbar;