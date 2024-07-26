import { db } from './firebase';
import { collection, addDoc, updateDoc, deleteDoc, getDocs, doc } from 'firebase/firestore';

export const getExpenses = async (userId) => {
  const expensesCol = collection(db, 'users', userId, 'expenses');
  const expenseSnapshot = await getDocs(expensesCol);
  return expenseSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addExpense = async (userId, expenseData) => {
  const expensesCol = collection(db, 'users', userId, 'expenses');
  const docRef = await addDoc(expensesCol, expenseData);
  return { id: docRef.id, ...expenseData };
};

export const updateExpense = async (userId, expenseId, expenseData) => {
  try {
    console.log('Updating expense with:', { userId, expenseId, expenseData });
    
    if (!userId || typeof userId !== 'string') {
      throw new Error(`Invalid userId: ${userId}`);
    }
    
    if (!expenseId || typeof expenseId !== 'string') {
      throw new Error(`Invalid expenseId: ${expenseId}`);
    }

    const expenseRef = doc(db, 'users', userId, 'expenses', expenseId);
    console.log('Expense reference:', expenseRef);

    await updateDoc(expenseRef, expenseData);
    console.log('Update successful');
    return true;
  } catch (error) {
    console.error("Error updating expense:", error);
    throw error;
  }
};

export const deleteExpense = async (userId, expenseId) => {
  const expenseRef = doc(db, 'users', userId, 'expenses', expenseId);
  await deleteDoc(expenseRef);
};