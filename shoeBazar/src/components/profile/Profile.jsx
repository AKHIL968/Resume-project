import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { getUserProfile, updateUserProfile } from '../../services/userService';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const { user, setUser } = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    if (user) fetchProfile();
  }, [user]);

  const fetchProfile = async () => {
    console.log("Fetching profile for user ID:", user.uid);
    const userProfile = await getUserProfile(user.uid);
    if (userProfile) {
      console.log("User profile found:", userProfile);
      setProfile(userProfile);
    } else {
      console.log("No profile found, creating default profile");
      const defaultProfile = { displayName: user.displayName || '', email: user.email };
      await updateUserProfile(user.uid, defaultProfile);
      setProfile(defaultProfile);
    }
  };

  const handleUpdateProfile = async (updatedData) => {
    console.log("Updating profile with data:", updatedData);
    await updateUserProfile(user.uid, updatedData);
    await updateProfile(auth.currentUser, { displayName: updatedData.displayName });
    setUser(prevUser => ({
      ...prevUser,
      displayName: updatedData.displayName
    }));
    fetchProfile();
    navigate("/")
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h2 className='text-xl text-blue text-center'>Your Profile</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleUpdateProfile({
          displayName: e.target.displayName.value,
          email: e.target.email.value,
        });
      }}>
        <div className='mt-2'>
          <label className='text-gray text-lg'>Name:</label> <br />
          <input className='w-64 h-10 p-2 rounded-lg' name="displayName" defaultValue={profile.displayName} required />
        </div>
        <div className='mt-2'>
          <label className=' text-lg text-gray'>Email:</label> <br />
          <input className='w-64 h-10 p-2 rounded-lg' name="email" defaultValue={profile.email} required />
        </div>
        <button className='w-32 mt-4 h-10 bg-blue text-white rounded-md hover:bg-white hover:text-blue  block' type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;