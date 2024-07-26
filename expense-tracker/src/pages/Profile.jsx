import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfile({ displayName });
    navigate("/")
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-deep-blue">User Profile</h1>
      <form onSubmit={handleSubmit} className="max-w-md bg-lightest-gray p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={user?.email}
            disabled
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="displayName" className="block text-gray-700 text-sm font-bold mb-2">
            Display Name
          </label>
          <input
            type="text"
            id="displayName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-deep-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
