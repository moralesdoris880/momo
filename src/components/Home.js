import React,{useState,useEffect} from "react";
import ProductCard from "./ProductCard";

function Home(){
    const[allProducts,setAllProducts]= useState([]);

    useEffect (()=>{
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => setAllProducts(data))
    },[]);
    return(
        <div>
            <p>Home</p>
            <div className="products">
                {allProducts.map((product)=> <ProductCard product={product} key={product.id}/> )}
            </div>
        </div>
    )
}

export default Home