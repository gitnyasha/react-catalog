import React from 'react'

export const Product = ({ product }) => (
    <div className="card">
        <img src={product.image["url"]} />
        <div className="container">
            <h4>{product.title}</h4>
            <p>{product.description.substring(0, 100)}</p>
        </div>
    </div>
);