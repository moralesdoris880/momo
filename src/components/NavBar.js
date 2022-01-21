import React from "react";
import { NavLink} from "react-router-dom";

function NavBar(){
    return(
        <div>
            <NavLink
            to="/women-main" exact>WOMEN</NavLink>
            <NavLink
            to="/men-main" exact>MEN</NavLink>
            <NavLink
            to="/kids-main" exact>KIDS</NavLink>
        </div>
    )
}

export default NavBar