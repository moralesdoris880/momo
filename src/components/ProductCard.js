import React from "react";

function ProductCard({product}){
    return(
        <div className="productcard" key={product.id}>
            <img className="productimage" src={product.image} alt={product.title}/>
            <div className="productinfo">
                <p>{product.title}</p>
                <p>{`$${product.price}`}</p>
            </div>
        </div>
    )
}

export default ProductCard