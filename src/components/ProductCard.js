import React from "react";

function ProductCard({product}){
    return(
        <div className="productcard" key={product.id}>
            <img src={product.image} alt={product.title}/>
            <p>{product.title}</p>
        </div>
    )
}

export default ProductCard