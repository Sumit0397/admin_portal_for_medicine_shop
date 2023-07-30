import React from 'react';
import Modal from './modal/Modal';

const Cart = (props) => {
  const getTotalAmount = () => {
    return props.cartItems.reduce((total, item) => total + Number(item.price), 0);
  };

  return (
    <Modal>
      <h2>Cart</h2>
      <ul>
        {props.cartItems.map((item, index) => (
          <li key={index}>
            <span>{item.medicineName} - ${item.price}</span>
          </li>
        ))}
      </ul>
      <p>Total Amount: ${getTotalAmount()}</p>
      <button onClick={props.hideCart}>Close</button>
    </Modal>
  );
};

export default Cart;
