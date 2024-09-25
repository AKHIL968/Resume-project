// src/services/reviewService.js
import { db } from './firebase';
import { collection, addDoc, getDocs, query, where, doc, deleteDoc } from 'firebase/firestore';

const REVIEWS_COLLECTION = 'reviews';

export const addReview = async (productId, reviewData) => {
  try {
    await addDoc(collection(db, REVIEWS_COLLECTION), {
      productId,
      ...reviewData,
      createdAt: new Date()
    });
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
};

export const getReviews = async (productId) => {
  try {
    const q = query(collection(db, REVIEWS_COLLECTION), where("productId", "==", productId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error getting reviews:", error);
    throw error;
  }
};

export const deleteReview = async (reviewId) => {
  try {
    const reviewRef = doc(db, REVIEWS_COLLECTION, reviewId);
    await deleteDoc(reviewRef);
  } catch (error) {
    console.error("Error deleting review:", error);
    throw error;
  }
};