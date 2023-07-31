import React from 'react';

const MedicineList = (props) => {
  return (
    <div className="medicine-list">
      <h2>Medicine List</h2>
      <ul>
        {props.medicines.map((medicine,index) => (
          <li key={medicine.medicineName}>
            <span>{medicine.medicineName} - ${medicine.price} - {medicine.medicineDescription} - {medicine.quantity}</span>
            {' '}<button onClick={() => props.addToCart(medicine,index)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;
