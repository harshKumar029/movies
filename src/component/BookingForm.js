import React, { useState } from 'react';
import Navbar from './Navbar';

function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userDetails', JSON.stringify({ name, email }));
  };

  return (
    <>
    <Navbar/>
    <div className="booking-form">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Book Ticket</button>
      </form>
    </div>
    </>
  );
}

export default BookingForm;