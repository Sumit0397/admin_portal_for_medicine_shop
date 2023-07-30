import React, { useState } from 'react';
import Form from './Form';
import MedicineList from './MedicineList';
import Cart from './Cart';
import './App.css';

const App = () => {
  const [medicines, setMedicines] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addMedicine = (medicine) => {
    setMedicines([...medicines, medicine]);
  };

  const addToCart = (medicine) => {
    setCartItems([...cartItems, medicine]);
  };

  return (
    <div className="app">
      <div className="container">
        <Form addMedicine={addMedicine} />
        <MedicineList medicines={medicines} addToCart={addToCart} />
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
};

export default App;
