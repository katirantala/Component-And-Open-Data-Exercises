import { useState } from 'react';
import './OrderForm.css';

const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Television', price: 1200 },
    { id: 3, name: 'Phone', price: 600 },
];

function OrderForm() {
    const [selectedProduct, setSelectedProduct] = useState(''); 

    const handleChange = (e) => {
        const productId = parseInt(e.target.value);
        const product = products.find(p => p.id === productId);
        setSelectedProduct(product);
    };

    return (
        <div>
            <h2>Select Product</h2>
            Product: 
            <select onChange={handleChange} value={selectedProduct ? selectedProduct.id : ''}>
                <option value="" disabled>Select...</option>
                {products.map(product => (
                    <option key={product.id} value={product.id}>
                        {product.name} ({product.price}€)
                    </option>
                ))}
            </select>
        </div>
    );
}

export default OrderForm;
