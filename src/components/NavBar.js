import React from "react";
import { NavLink} from "react-router-dom";

function NavBar(){
    return(
        <div id="navbar">
            <NavLink
            to="/" exact className="nav">HOME</NavLink>
            <NavLink
            to="/women" exact className="nav">WOMEN'S</NavLink>
            <NavLink
            to="/men" exact className="nav">MEN'S</NavLink>
            <NavLink
            to="/jewelery" exact className="nav">JEWELERY</NavLink>
        </div>
    )
}

export default NavBar