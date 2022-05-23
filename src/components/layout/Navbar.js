import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav>
                <Link to={`/`}  className="link-no-styles">
                    <span className="Logo">
                        Barkidex
                    </span>
                </Link>
            </nav>
        </>
    )
}

export default Navbar;