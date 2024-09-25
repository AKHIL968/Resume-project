import React, { useState, useEffect } from 'react';
import { signIn } from '../../services/authService';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser, setIsAdmin } = useAuth();
  // const [error, setError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  useEffect(() => {
    if (loginSuccess) {
      // if (setIsAdmin) {
      //   navigate('/admin');
      // } else {
      //   navigate('/');
      // }
      navigate("/")
    }
  }, [loginSuccess, setIsAdmin, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setError("");
    console.log("Attempting login...");
    try {
      const { user, isAdmin } = await signIn(email, password);
      console.log("Login successful:", user, isAdmin);
      setUser(user);
      setIsAdmin(isAdmin);
      setLoginSuccess(true);
      toast.success("Login successfully")
      // console.log("States updated, should redirect soon...");
    } catch (error) {
      // console.error("Login failed:", error);
      // setError('Invalid email or password');
    }
  };

  return (
    <div className=" w-72 border h-96 m-auto mt-20 rounded-lg">
      <form onSubmit={handleSubmit} className="login-form">
        <div className='flex flex-col gap-4 justify-center items-center py-4 m-8'>

        <div>
        <label className='text-gray text-lg'>Email:</label> <br />
        <input
        className='w-64 h-10 p-2 rounded-lg'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
          />
          </div>
          <div>
        <label className='text-gray text-lg' >Password:</label> <br />
        <input
        className='w-64 h-10 p-2 rounded-lg'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
          />
          </div>
          </div>
          <button className='w-32 mt-4 h-10 bg-blue text-white rounded-md hover:bg-white hover:text-blue mx-auto block' type="submit">Login</button>
          <p className='text-md text-center text-gray mt-2 italic'>Don't have an account, <Link to="/register"><span className='text-blue font-bold not-italic'>SignUp</span></Link></p>
        {/* {error && <p className="error-message">{error}</p>} */}
        <ToastContainer/>
      </form>
    </div>
  );
};

export default Login;