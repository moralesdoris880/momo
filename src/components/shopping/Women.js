import React,{useState,useEffect} from "react";
import ProductCard from "../ProductCard";

function Women(){
    const[womenclothes,setWomenClothes]= useState([]);

    useEffect (()=>{
        fetch("https://fakestoreapi.com/products/category/women%27s%20clothing")
        .then(response => response.json())
        .then(data => setWomenClothes(data))
    },[]);
            
    
    return(
        <div>
            <h1>Women's Clothing</h1>
            <div>
            {womenclothes.map((product)=> <ProductCard product={product} key={product.id}/> )}
            </div>
        </div>
    )
}



export default Women