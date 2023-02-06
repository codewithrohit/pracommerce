import React from 'react'
import { Link } from 'react-router-dom'

function ProductBox({id, imageUrl, name, price}) {
  return (
    <div className="project_box">
        <Link to={`/products/${id}`}>
          <div className="dark_white_bg">
              <img  src={imageUrl} alt={name} />
          </div>
          <h3>{name} <span>{price ? `$ ${price}` : ''}</span></h3>
        </Link>
    </div>
  )
}

export default ProductBox