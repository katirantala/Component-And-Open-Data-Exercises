import { useState } from 'react';
import './ComponentUI.css';
import image from '../assets/images/shop.png';
import OrderForm from './OrderForm.jsx';
import OrderInfo from './OrderInfo.jsx';

const Header = ({ image, title }) => {
  return (
    <div className='Header'>
      <img src={image} alt={title} className="circle-image" />
      <h1>{title}</h1>
    </div>
  );
};

function ComponentUI() {
    const [selectedProduct, setSelectedProduct] = useState(null); // Huomaa 's' pienellä
    const [count, setCount] = useState(0);

    return (
        <div>
            <Header image={image} title="Welcome to product page!" />
            <OrderForm 
                setSelectedProduct={setSelectedProduct} 
                setCount={setCount} 
                count={count} 
                selectedProduct={selectedProduct} // Lisää tämä rivi
            />
            {selectedProduct && (
                <OrderInfo 
                    productName={selectedProduct.name} 
                    price={selectedProduct.price} 
                    quantity={count} 
                />
            )}
        </div>
    );
}

export default ComponentUI;
