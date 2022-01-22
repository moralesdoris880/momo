import React from "react";
import { NavLink} from "react-router-dom";

function NavBar(){
    return(
        <div id="navbar">
            <NavLink
            to="/" exact className="nav">HOME</NavLink>
            <NavLink
            to="/women-main" exact className="nav">WOMEN'S</NavLink>
            <NavLink
            to="/men-main" exact className="nav">MEN'S</NavLink>
            <NavLink
            to="/jewelery-main" exact className="nav">JEWLERY</NavLink>
        </div>
    )
}

export default NavBar