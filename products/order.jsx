import React, { useState } from 'react';
import './order.css';
const OrderPage = ({ onReturnToCart }) => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // You can send the name and mobileNumber to your server or perform any other action here

    // Show an alert message
    alert('Ordered successfully!,We will contact you shortly.ThankYou!');
    
    // Return to the shopping cart page
    onReturnToCart();
  };

  return (
    <div className="order-page">
      <h2>Order Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OrderPage;
