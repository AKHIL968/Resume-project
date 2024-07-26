import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-soft-peach p-6 rounded-lg shadow-md">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-deep-blue">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-blue focus:ring focus:ring-slate-blue focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-deep-blue">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-blue focus:ring focus:ring-slate-blue focus:ring-opacity-50"
          required
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-deep-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-blue">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
