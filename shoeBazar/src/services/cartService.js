import { db } from './firebase';
import { collection, doc, setDoc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const CART_COLLECTION = 'carts';

export const getCart = async (userId) => {
  const cartDoc = await getDoc(doc(db, CART_COLLECTION, userId));
  return cartDoc.exists() ? cartDoc.data().items : [];
};

export const updateCart = async (userId, cartItems) => {
  await setDoc(doc(db, CART_COLLECTION, userId), { items: cartItems });
};

export const addToCart = async (userId, product, quantity) => {
  const cartDoc = doc(db, CART_COLLECTION, userId);
  const cartSnapshot = await getDoc(cartDoc);
  
  if (cartSnapshot.exists()) {
    const cartData = cartSnapshot.data();
    const existingItemIndex = cartData.items.findIndex(item => item.id === product.id);
    
    if (existingItemIndex > -1) {
      cartData.items[existingItemIndex].quantity += quantity;
    } else {
      cartData.items.push({ ...product, quantity });
    }
    
    await updateDoc(cartDoc, cartData);
  } else {
    await setDoc(cartDoc, { items: [{ ...product, quantity }] });
  }
};

export const removeFromCart = async (userId, productId) => {
  const cartDoc = doc(db, CART_COLLECTION, userId);
  const cartSnapshot = await getDoc(cartDoc);
  
  if (cartSnapshot.exists()) {
    const cartData = cartSnapshot.data();
    cartData.items = cartData.items.filter(item => item.id !== productId);
    await updateDoc(cartDoc, cartData);
  }
};

export const clearCart = async (userId) => {
  await deleteDoc(doc(db, CART_COLLECTION, userId));
};
