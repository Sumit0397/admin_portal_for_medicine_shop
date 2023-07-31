import React, { useState } from 'react';
import Form from './MedicineData/Form';
import MedicineList from './MedicineData/MedicineList';
import Cart from './Cart/Cart';
import './App.css';

const App = () => {
  const [medicines, setMedicines] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showcart , setShowCart] = useState(false);

  const addMedicine = (medicine) => {
    setMedicines([...medicines, medicine]);
  };


  const addToCart = (medicine,index) => {
    setCartItems([...cartItems, medicine]);
    setMedicines(medicines.filter((_,i) => i !== index));
  };

  const cartHandler = () => {
    setShowCart(true);
  }

  const cartHideHandler = () => {
    setShowCart(false);
  }

  return (
    <div className="app">
      <div className="container">
        <Form addMedicine={addMedicine} />
        <MedicineList medicines={medicines} addToCart={addToCart} />
        <button onClick={cartHandler}>cart{" "}<span>{cartItems.length}</span></button>
        {showcart && <Cart cartItems={cartItems} hideCart={cartHideHandler}/>}
      </div>
    </div>
  );
};

export default App;
