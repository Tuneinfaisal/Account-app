import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

export default () => {
    return (
        <>
            <div class="topnav" id="myTopnav">
                <nav>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                </nav>
            </div>
        </>
    )
}