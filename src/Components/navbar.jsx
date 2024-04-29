import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import axios from "axios";

function Navbar() {
    const [open, setOpen] = useState(false);

    const fetchSmth = async () => {
        try {
            const response = await axios.get("https://api-lazbjamuma-ez.a.run.app/api/amenities");
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchSmth();
    }, []);

    return (
        <nav>
            <div className="navLeft">
                <img src="/Icons/logo.png" alt="Logo" />
                <Link to="/" id="logoLink">Real Estate</Link>
            </div>
            <div className="navRight">
                <div className="navPages">
                    <Link to="/prop">Properties</Link>
                </div>
                <div className="navAuthorization">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
                <div className="navbarIcon">
                    <img src="/Icons/menu2.png" alt="Hamburger-Menu" onClick={() => setOpen((prev) => !prev)} />
                </div>
                <div className={open ? "navbarMenu active" : "navbarMenu"}>
                    <Link to="/prop">Properties</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
