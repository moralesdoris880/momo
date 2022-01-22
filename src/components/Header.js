import React,{useState} from "react";
import NavBar from "./NavBar";

function Header(){
    const[icon,setIcon]=useState("menu");
    const[click,setClick]= useState(true);

    function handleMenu(){
        setClick(!click)
        if(click===false){
            setIcon("close");
            document.getElementById("navbar").style.display = "flex";
        }
        else if(click===true){
            setIcon("menu")
            
            document.getElementById("navbar").style.display = "none"
        }
    }

    return(
        <div id="header">
            <div id="rightnavbar">
            <h1 id="logo">Momo</h1>
            <span className="material-icons md-48" onClick={handleMenu}>{icon}</span>
            </div>
            <hr />
            <NavBar /> 
            
        </div>
    )
}

export default Header