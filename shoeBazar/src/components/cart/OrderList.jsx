// src/components/orders/OrderList.js
import React, { useState, useEffect } from 'react';
import { getOrders, cancelOrder } from '../../services/orderService';
import { useAuth } from '../../hooks/useAuth';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (user) {
          const fetchedOrders = await getOrders(user.uid, false); // Fetch orders for user
          setOrders(fetchedOrders);
        }
      } catch (error) {
        setError('Failed to load orders. Please try again.');
      }a
    };

    fetchOrders();
  }, [user]);

  const handleCancelOrder = async (orderId) => {
    try {
      await cancelOrder(orderId);
      const updatedOrders = orders.map(order =>
        order.id === orderId ? { ...order, status: 'canceled' } : order
      );
      setOrders(updatedOrders);
    } catch (error) {
      setError('Failed to cancel the order. Please try again.');
    }
  };

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
      {orders.length > 0 ? (
        orders.map(order => (
          <div key={order.id} className="border rounded-lg p-2 mb-4 ">
            <h2 className="text-xl font-semibold">Order ID: {order.id}</h2>
            <p className="text-gray-600">Status: {order.status}</p>
            <p className="text-gray-600">Total: ${order.total}</p>
            <h3 className="text-lg font-semibold mt-2">Items:</h3>
            {order.items.map(item => (
              <div key={item.id} className="flex items-center mb-2">
                <img src={item.imageUrl} alt={item.name} className="w-32 h-32 mr-4" />
                <div>
                  
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-600">Price: ₹{item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
            {order.status !== 'canceled' && (
              <button
                onClick={() => handleCancelOrder(order.id)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Cancel Order
              </button>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-600">No orders found</p>
      )}
    </div>
  );
};

export default OrderList;
