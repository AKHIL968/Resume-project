import React, { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { signUp } from '../../services/authService'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {setUser} = useAuth()
    const navigate = useNavigate()

    const handleSubmit =(e) => {
        e.preventDefault()
        try {
            const user = signUp(email,password)
            setUser(user)
            navigate("/")
        } catch (error) {
            throw new error
        }
    }

  return (
    <div className=" w-72 border h-96 m-auto mt-20 rounded-lg">
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-4 justify-center items-center py-4 m-8'>
            <div>
            <label className='text-gray text-lg'>Email:</label> <br />
            <input type="text"
             className='w-64 h-10 p-2 rounded-lg'
            required
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            />
            </div>
            <div>
            <label className='text-gray text-lg'>Password:</label> <br />
            <input type="password"
             className='w-64 h-10 p-2 rounded-lg'
            required
            placeholder='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)} />
            </div>
            </div>
            <button className='w-32 mt-4 h-10 bg-blue text-white rounded-md hover:bg-white hover:text-blue mx-auto block' type="submit">SignUp</button>
          <p className='text-md text-center text-gray mt-2 italic'>Already have an account, <Link to="/login"><span className='text-blue font-bold not-italic'>Login</span></Link></p>
        </form>
    </div>
  )
}

export default SignUp