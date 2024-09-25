import React from 'react'
import ProductList from './ProductList'
import { useAuth } from '../../hooks/useAuth'

const Home = () => {
  const { user } = useAuth()

  return (
    <div>


          {
            user ? (
              <h1 className='text-xl text-center text-blue'>
                Welcome, {user.displayName}
              </h1>
            ) : (
              <h1 className='text-xl text-center text-blue'>
                You Have to login first.....
              </h1>
            )
          }
    
      <ProductList />
    </div>
  )
}

export default Home