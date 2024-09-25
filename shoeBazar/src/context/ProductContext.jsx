import React, { createContext, useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const ProductContext = createContext();

const PRODUCTS_COLLECTION = 'products';

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    const unsubscribe = onSnapshot(collection(db, PRODUCTS_COLLECTION), 
      (snapshot) => {
        const fetchedProducts = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(fetchedProducts);
        setLoading(false);
      }, 
      (error) => {
        console.error("Firestore listening error:", error);
        // setError("Failed to load products. Please try again.");
        setLoading(false);
      }
    );
  
    return () => {
      unsubscribe();
      unsubscribeAuth();
    };
  }, []);

  const value = {
    products,
    loading,
    error,
    user,
    setProducts,
  };

  return (
    <ProductContext.Provider value={value}>
      {loading ? <p>Loading...</p> : children}
      {error && <p>{error}</p>}
    </ProductContext.Provider>
  );
};
