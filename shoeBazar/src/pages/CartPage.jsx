import React from 'react'
import Cart from '../components/cart/Cart'
import { useAuth } from '../hooks/useAuth'

const CartPage = () => {
  const {user} = useAuth()
  return (
    <div>
        {user ? (
          <div>
            <h1 className='text-2xl text-gray'>Your shopping cart, <span className='text-blue font-bold text-3xl'>{user.displayName}</span></h1>
          </div>
        ): (
          <div>
           
          </div>
        )}
        <Cart />
    </div>
  )
}

export default CartPage