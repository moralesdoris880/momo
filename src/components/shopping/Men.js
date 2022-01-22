import React,{useState,useEffect} from "react";
import ProductCard from "../ProductCard";

function Men(){
    const[menclothes,setMenClothes]= useState([]);

    useEffect (()=>{
        fetch("https://fakestoreapi.com/products/category/men%27s%20clothing")
        .then(response => response.json())
        .then(data => setMenClothes(data))
    },[]);
            
    
    return(
        <div>
            <h1>Men's Clothing</h1>
            <div>
            {menclothes.map((menproduct)=> <ProductCard product={menproduct}/>)}
            </div>
        </div>
    )
}



export default Men