import React from 'react';

import {SlArrowRight, SlArrowLeft} from 'react-icons/sl';

import './Banner.css';

function Banner() {
  return (
    <>
    <div className='top-nav'>
      <ul>
        <li>Best Sellers</li>
        <li>Gift Ideas</li>
        <li>New Releases</li>
        <li>Today's Deals</li>
        <li>Custoumer Service</li>
      </ul>
    </div>
    <div className='brand'>Eflyer</div>
    <div className='left-arrow'><SlArrowLeft /></div>
    <div className='right-arrow'><SlArrowRight /></div>
    <div className='banner-image'>
        <img src='./banner.jpg' alt='banner' width={'100%'} height={'100%'} />
    </div>
    <div className='banner-content'>
    <h1>Get Started<br /> With Crazy Shopping</h1>
    <button> Buy Now</button>
  </div>
  </>
  )
}

export default Banner