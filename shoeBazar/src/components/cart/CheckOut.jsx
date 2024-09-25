import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { createOrder } from '../../services/orderService';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import axios from 'axios'


const Checkout = () => {
  const { cart, total, clearCart } = useCart();
  const [address, setAddress] = useState({
    houseNumber: '',
    street: '',
    area: '',
    city: '',
    state: '',
    pinCode: '',
    number:""
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      if (!user) {
        throw new Error("User not authenticated");
        
      }
      console.log("Current user:", user);
      const orderData = {
        items: cart.map(item => ({
          ...item,
          serialNo: item.serialNo
        })),
        total: total,
        shippingAddress: `${address.houseNumber}, ${address.street}, ${address.area}, ${address.city}, ${address.state}, ${address.pinCode}, ${address.number}`,
        status: 'pending'
      };
      await createOrder(user.uid, orderData);
      clearCart();
      navigate('/order-confirmation');
    } catch (error) {
      console.error('Error processing order:', error);
      setError(error.message || "An error occurred while processing your order. Please try again.");
    }
  };
  
  
  
  

 

  if (!user) {
    return <div>Please log in to checkout.</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-3xl text-blue">Checkout</h2>
      <p className="text-gray font-semibold mt-2">
        Total: <span className="font-light">₹{total.toFixed(2)}</span>
      </p>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">
          House Number <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="houseNumber"
          value={address.houseNumber}
          onChange={handleChange}
          placeholder="House Number"
          required
          className="w-full p-2 border rounded mb-2"
        />
        <label className="block text-sm font-bold mb-2">
          Street <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="street"
          value={address.street}
          onChange={handleChange}
          placeholder="Street"
          required
          className="w-full p-2 border rounded mb-2"
        />
        <label className="block text-sm font-bold mb-2">
          Area <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="area"
          value={address.area}
          onChange={handleChange}
          placeholder="Area"
          required
          className="w-full p-2 border rounded mb-2"
        />
        <label className="block text-sm font-bold mb-2">
          City <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="city"
          value={address.city}
          onChange={handleChange}
          placeholder="City"
          required
          className="w-full p-2 border rounded mb-2"
        />
        <label className="block text-sm font-bold mb-2">
          State <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="state"
          value={address.state}
          onChange={handleChange}
          placeholder="State"
          required
          className="w-full p-2 border rounded mb-2"
        />
        <label className="block text-sm font-bold mb-2">
          Pin Code <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="pinCode"
          value={address.pinCode}
          onChange={handleChange}
          placeholder="Pin Code"
          required
          className="w-full p-2 border rounded mb-2"
        />
        <label className="block text-sm font-bold mb-2">
          Delivery Number <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="number"
          value={address.number}
          onChange={handleChange}
          placeholder="Delivery Number"
          required
          className="w-full p-2 border rounded mb-2"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="bg-blue hover:bg-white hover:text-blue text-cream border px-4 py-2 rounded hover:bg-blue-600">
        Place Order
      </button>
      
    </form>
  );
};

export default Checkout;

