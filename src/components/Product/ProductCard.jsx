import React from 'react'

function ProductCard({details}) {

  const {title, image, price, description} = details;

  return (
    <div className='product-card'>
      <div className='product-details'><div className="product-title"><h3>{title}</h3></div>
      <p className='product-price'><span>Price</span>{' '}${price}</p></div>
      
    <div className='image-container'>
    <img src={image} alt={description} width={'100%'} height={'100%'}/>
    </div>
    
    </div>
  )
}

export default ProductCard;