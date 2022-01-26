import React,{useState} from "react";

function ModalBox(){
    const[fullname,setFullname]=useState("");
    const[email,setEmail]=useState("");

    function handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:3000/suscribe",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                "id": "",
                "name": `${fullname}`,
                "email": `${email}` ,
                "rating": 0 })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        document.getElementById("submitted").style.display = "block"
        document.getElementById("modalcontent").style.display = "none"

    }

    function handleName(e){
        setFullname(e.target.value)
    }

    function handleEmail(e){
        setEmail(e.target.value)
    }

    return(
        <div id="modal">
            <div id="modalcontent">
                <h1>Suscribe</h1>
                <p>Join our exclusive members list! Get 10% off Coupon</p>
                <form onSubmit={handleSubmit}>
                    <label>Full Name:</label><br/>
                    <input type="text" id="fullname" name="fullname"required onChange={handleName}></input><br/>
                    <label>Email:</label><br/>
                    <input type="text" id="email" name="email" required onChange={handleEmail}></input><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
            <h1 id="submitted">Thank you for Suscribing!</h1>
        </div>
    )
}

/* 
*/

export default ModalBox