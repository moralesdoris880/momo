import React,{useState,useEffect} from "react";

function Suscribers(){
    const[suscribers,setSuscribers]=useState([])

    useEffect (()=>{
        fetch("http://localhost:3000/suscribe")
        .then(response => response.json())
        .then(data => setSuscribers(data))
    },[]);

    return(
        <div id="suscribers">
            <h1>Welcome!</h1>
            {
                suscribers.map((suscriber)=> 
                <div>
                    <p>{suscriber.name}</p>
                </div>)
            }
        </div>
    )
}

export default Suscribers