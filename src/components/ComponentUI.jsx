import { useState } from 'react';
import './ComponentUI.css';
import image from '../assets/images/shop.png';
import OrderForm from './OrderForm.jsx';
import OrderInfo from './OrderInfo.jsx';

const Header = ({ image, title} ) => {
  return (
    <div className='Header'>
      <img src={image} alt={title} className="circle-image"/>
      <h1>{title}</h1>
    </div>
  );
};

function ComponentUI() {
return (
      <div>
        <Header image={image} title="Welcome to product page!" />
        <OrderForm />
        <OrderInfo />
      </div>
    )
}

export default ComponentUI;