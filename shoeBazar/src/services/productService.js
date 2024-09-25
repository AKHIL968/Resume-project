import { db, storage } from '../services/firebase';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const PRODUCTS_COLLECTION = 'products';

export const uploadProductImage = async (file) => {
  try {
    const storageRef = ref(storage, `product-images/${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export const addProduct = async (productData, imageFile) => {
  try {
    let imageUrl = null;
    if (imageFile) {
      imageUrl = await uploadProductImage(imageFile);
    }
    const docRef = await addDoc(collection(db, PRODUCTS_COLLECTION), {
      ...productData,
      imageUrl
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, PRODUCTS_COLLECTION));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error getting products:", error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  console.log("Fetching product with ID:", productId); // Logging productId
  try {
    const docRef = doc(db, PRODUCTS_COLLECTION, productId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Fetched product:", docSnap.data()); // Logging fetched data
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.error("Product not found");
      throw new Error("Product not found");
    }
  } catch (error) {
    console.error("Error getting product by ID:", error);
    throw error;
  }
};


export const updateProduct = async (productId, productData) => {
  try {
    const productRef = doc(db, PRODUCTS_COLLECTION, productId);
    await updateDoc(productRef, productData);
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

export const deleteProduct = async (productId) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) {
    throw new Error("User not authenticated");
  }

  try {
    await deleteDoc(doc(db, 'products', productId));
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};


export const searchProducts = async (searchTerm) => {
  try {
    const q = query(collection(db, PRODUCTS_COLLECTION),
      where("name", ">=", searchTerm),
      where("name", "<=", searchTerm + '\uf8ff')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error searching products:", error);
    throw error;
  }
};
