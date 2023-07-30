import React from 'react';

const MedicineList = ({ medicines, addToCart }) => {
  return (
    <div className="medicine-list">
      <h2>Medicine List</h2>
      <ul>
        {medicines.map((medicine, index) => (
          <li key={index}>
            <span>{medicine.medicineName} - ${medicine.price}</span>
            <button onClick={() => addToCart(medicine)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;
