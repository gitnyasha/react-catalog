import React from 'react'

export const Product = ({ product }) => (
    <article className="post-excerpt">
        <h2>{product.title}</h2>
        <p>{product.description.substring(0, 100)}</p>
        <p>{product.image["url"]}</p>
    </article>
)