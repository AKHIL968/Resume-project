import React from 'react';
import { useCart } from '../../hooks/useCart';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  return (
    <div>
      <h3 className='text-xl text-gray font-semibold'>Item: <span className='text-gray font-light'>{item.name}</span></h3>
      <p className='text-lg font-semibold text-gray'>Price: <span className='font-light'>₹{item.price}</span></p>
      <p className='text-lg font-semibold text-gray'>Quantity: <span className='font-light'>{item.quantity}</span></p>
      <div>
        <div className='flex gap-2'>
        <button className=' rounded-md w-12 my-2 text-xl bg-gray text-white hover:text-gray hover:bg-white' onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
        <button className='rounded-md w-12 my-2 text-xl bg-gray text-white hover:text-gray hover:bg-white' onClick={handleDecrease}>-</button>
        </div>
        <div>
      <button className='rounded-md w-32 h-10 text-xl bg-gray text-white hover:text-gray hover:bg-white' onClick={() => removeFromCart(item.id)}>Remove</button>

        </div>
      </div>
      
    </div>
  );
};

export default CartItem;