import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
      <div className='product__info'></div>
      <p>The lean starup</p>
      <p className='product__price'>
        <small>$</small>
        <strong>19.99</strong>
      </p>
      <div className='product__rating'></div>

      <img
        src='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
        alt
      />

      <button>Add to Basket</button>
    </div>
  )
}

export default Product
