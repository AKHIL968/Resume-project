import React, { useState, useEffect } from 'react';
import { getOrders, updateOrderStatus } from '../../services/orderService';
import { useAuth } from '../../hooks/useAuth';

const OrderManagement = () => {
  const [orders, setOrders] = useState({
    pending: [],
    processing: [],
    shipped: [],
    delivered: [],
    canceled: []
  });
  const { user, isAdmin } = useAuth();

  useEffect(() => {
    fetchOrders();
  }, [user, isAdmin]);

  const fetchOrders = async () => {
    if (user && isAdmin) {
      try {
        const fetchedOrders = await getOrders(user.uid, isAdmin);
        const groupedOrders = fetchedOrders.reduce((acc, order) => {
          if (!acc[order.status]) {
            acc[order.status] = [];
          }
          acc[order.status].push(order);
          return acc;
        }, {
          pending: [],
          processing: [],
          shipped: [],
          delivered: [],
          canceled: []
        });
        setOrders(groupedOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }
  };

  const handleStatusUpdate = async (orderId, newStatus) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      fetchOrders(); // Refresh the orders list
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const renderOrder = (order) => (
    <div key={order.id} className="border p-4 mb-4 bg-white rounded shadow-sm">
      <div className="mb-2">
        <p className="font-bold">Order ID: {order.id}</p>
        <p className="">User ID: {order.userId}</p>
        
      </div>
      <p>Total: ${order.total.toFixed(2)}</p>
      <h4 className="font-semibold">Items:</h4>
      <ul className="list-disc list-inside">
        {order.items.map((item, index) => (
          <li className='list-none' key={index}>
            Item: {item.name} | Quantity: {item.quantity} <br /> Price: ₹{item.price} | Product ID: {item.serialNo}
          </li>
        ))}
      </ul>
      <p>Shipping Address: {order.shippingAddress}</p>
      <select
        value={order.status}
        onChange={(e) => handleStatusUpdate(order.id, e.target.value)}
        className="mt-2 p-2 border rounded w-full"
      >
        <option value="pending">Pending</option>
        <option value="processing">Processing</option>
        <option value="shipped">Shipped</option>
        <option value="delivered">Delivered</option>
        <option value="canceled">Canceled</option>
      </select> 
    </div>
  );

  return (
    <div className="p-2 m-auto w-80 lg:w-svw">
      <div className='flex gap-16 lg:gap-36'>
      <h2 className="text-2xl font-bold mb-4 text-blue">Order Management</h2>
      <button onClick={fetchOrders} className='w-32 h-12 border mb-2 rounded-md bg-blue text-cream hover:bg-white hover:text-blue'>Refresh</button>
      </div>
      
      <div className="flex flex-col lg:flex-col gap-2  justify-center">
        {Object.entries(orders).map(([status, orderList]) => (
          <div key={status} className="w-full lg:w-2/4 bg-gray-100 p-4 rounded shadow-sm border-2 border-red-500">
            <h3  className="text-xl font-semibold mb-2">{status.charAt(0).toUpperCase() + status.slice(1)}</h3>
            {orderList.length > 0 ? orderList.map(renderOrder) : <p>No orders</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderManagement;