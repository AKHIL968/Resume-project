import React from 'react'
import AdminDashboard from '../components/Dashboard/AdminDashboard'
import { useAuth } from '../hooks/useAuth'

const AdminPage = () => {
  const {user} = useAuth()
  return (
    <div>
      <h1 className='text-2xl text-gray'>Welcome, <span className='text-blue text-3xl'>{user.displayName}</span>  To Admin Page </h1>
      <AdminDashboard />
    </div>
  )
}

export default AdminPage