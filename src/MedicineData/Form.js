import React, { useState } from 'react';

const Form = (props) => {
  const [medicineData, setMedicineData] = useState({
    medicineName: '',
    medicineDescription: '',
    price: '',
    quantity: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMedicineData({ ...medicineData, [name]: value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addMedicine(medicineData);
    setMedicineData({
      medicineName: '',
      medicineDescription: '',
      price: '',
      quantity: '',
    });
  };

  return (
    <div className="form">
      <h2>Add New Medicine</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="medicineName"
          placeholder="Medicine Name"
          value={medicineData.medicineName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="medicineDescription"
          placeholder="Medicine Description"
          value={medicineData.medicineDescription}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={medicineData.price}
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={medicineData.quantity}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Form;
