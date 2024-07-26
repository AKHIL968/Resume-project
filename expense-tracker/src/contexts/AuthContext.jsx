import React, { createContext, useContext } from 'react';
import { useFirebaseAuth } from '../hooks/useFirebaseAuth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useFirebaseAuth();
  
  return (
    <AuthContext.Provider value={auth}>
      {!auth.loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};