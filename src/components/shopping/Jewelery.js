import React,{useState,useEffect} from "react";
import ProductCard from "../ProductCard";

function Jewelery(){
    const[jewelery,setJewelery]= useState([]);

    useEffect (()=>{
        fetch("https://fakestoreapi.com/products/category/jewelery")
        .then(response => response.json())
        .then(data => setJewelery(data))
    },[]);

    return(
        <div>
            <h1>Jewelery</h1>
            <div className="products">
            {jewelery.map((jewel)=> <ProductCard product={jewel}/>)}
            </div>
        </div>
    )
}

export default Jewelery