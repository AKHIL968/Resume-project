import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error("Error logging in", error);
    }
  };

  return (
    <div className="flex lg:w-2/4 w-full flex-col lg:border-2 min-h-full  items-center m-auto gap-8 p-8 mt-20 mb-10 lg:rounded-2xl">
      <div>
        <h1 className="text-text-dark text-3xl font-extrabold">Login Here</h1>
      </div>
      <div>
        <form onSubmit={handleLogin}>
          <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">Email:</p>
          <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            </div>
            <div>
            <p className="block text-gray-700 text-sm font-bold mb-2">Password:</p>
          <input
          className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <p className="text-red-500 text-xs italic">Enter your password.</p>
            </div>
            <div className="flex items-center justify-center flex-col">

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4" type="submit">Login</button>
            <p className="mt-4 text-xs italic">Don't have account,<Link to="/register">Register</Link></p>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
