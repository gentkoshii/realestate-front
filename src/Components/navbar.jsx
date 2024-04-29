import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const fetchSmth = async () => {
        try {
            const response = await axios.get("https://api-lazbjamuma-ez.a.run.app/api/amenities");
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

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
                {isLoggedIn ? (
                    <div >
                        <button className="navAuthorization" onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div className="navAuthorization">
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                )}
                <div className="navbarIcon">
                    <img src="/Icons/menu2.png" alt="Hamburger-Menu" onClick={() => setOpen((prev) => !prev)} />
                </div>
                <div className={open ? "navbarMenu active" : "navbarMenu"}>
                    <Link to="/prop">Properties</Link>
                    {isLoggedIn ? (
                        <button onClick={handleLogout}>Logout</button>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
