import React from "react";

function ProductCard({product}){
    return(
        <div key={product.id}>
            <img src={product.image} alt={product.title}/>
            <p>{product.title}</p>
        </div>
    )
}

export default ProductCard