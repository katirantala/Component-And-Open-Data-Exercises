import { useState } from 'react';
import './ComponentUI.css';
import OrderForm from './OrderForm.jsx';
import OrderInfo from './OrderInfo.jsx';

function ComponentUI() {

return (
    <>
      <div>
        <h1>Otsikko</h1>
        <OrderForm />
        <OrderInfo />
      </div>
    </>
  )
}



export default ComponentUI;