
import { db } from './firebase';
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, query, where } from 'firebase/firestore';

const ORDERS_COLLECTION = 'orders';

export const createOrder = async (userId, orderData) => {
  console.log("Creating order for user:", userId);
  try {
    const docRef = await addDoc(collection(db, ORDERS_COLLECTION), {
      userId,
      ...orderData,
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export const getOrders = async (userId, isAdmin) => {
  try {
    console.log("Querying orders for user:", userId, "Admin:", isAdmin);
    let q;
    if (isAdmin) {
      q = query(collection(db, ORDERS_COLLECTION));
    } else {
      q = query(collection(db, ORDERS_COLLECTION), where("userId", "==", userId));
    }
    const querySnapshot = await getDocs(q);
    const orders = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    console.log("Orders fetched:", orders);
    return orders;
  } catch (error) {
    console.error("Error getting orders:", error);
    throw error;
  }
};

export const getOrderById = async (orderId) => {
  try {
    const docRef = doc(db, ORDERS_COLLECTION, orderId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error("Order not found");
    }
  } catch (error) {
    console.error("Error getting order by ID:", error);
    throw error;
  }
};

export const updateOrderStatus = async (orderId, status) => {
  try {
    const orderRef = doc(db, ORDERS_COLLECTION, orderId);
    await updateDoc(orderRef, { status });
  } catch (error) {
    console.error("Error updating order status:", error);
    throw error;
  }
};



export const cancelOrder = async (orderId) => {
  try {
    const orderRef = doc(db, ORDERS_COLLECTION, orderId);
    await updateDoc(orderRef, { status: 'canceled' });
  } catch (error) {
    console.error("Error canceling order:", error);
    throw error;
  }
};

