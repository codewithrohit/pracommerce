import React from 'react'

function ProductCategories(props) {
  return (
    <div className="col-md-2 col-sm-4 pa_left">
        <div className={`six_probpx ${props.color ? props.color : ''}`}>
            <i><img src={props.image ? props.image : ''} alt="#"/></i>
            <span>{props.name ? props.name : ''}</span>
        </div>
    </div>
  )
}

export default ProductCategories