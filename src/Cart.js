import React from 'react';

const Cart = ({ cartItems }) => {
  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + Number(item.price), 0);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <span>{item.medicineName} - ${item.price}</span>
          </li>
        ))}
      </ul>
      <p>Total Amount: ${getTotalAmount()}</p>
    </div>
  );
};

export default Cart;
