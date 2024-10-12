
import { useState } from 'react';
import './OrderInfo.css';

const OrderInfo = ({ productName, price, quantity}) => {
    const totalPrice = price * quantity;

    return (
        <div>
    <h2>Order info</h2>
    <ul className="orderInfo">
                <li>
                    <strong>Product:</strong> {productName}
                </li>
                <li>
                    <strong>Quantity: </strong> {quantity}
                </li>
                <li>
                    <strong>Total: </strong> {totalPrice} €
                </li>
            </ul>
        </div>
);
};
export default OrderInfo;