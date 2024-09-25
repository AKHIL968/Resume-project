import React from 'react'
import { useCart } from '../../hooks/useCart'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, total} = useCart()
  return (
    <div className='mt-4 border h-fit p-8 rounded-md'>
        <h1 className='text-xl text-blue'>Your Cart</h1>
        {cart.map((item)=>(
            <CartItem key={item.id} item={item}/>
        ))}
         <p className='text-lg font-semibold text-gray mt-2'>Total: <span className='font-light'>₹{total !== undefined ? total.toFixed(2) : '0.00'}</span> </p>
         <Link to="/checkout">
         <button className='rounded-md w-60 h-10 text-xl bg-gray text-white hover:text-gray hover:bg-white'>Proceed to Checkout</button></Link>

    </div>
  )
}

export default Cart