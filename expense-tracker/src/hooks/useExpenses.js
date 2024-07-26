import { useState, useEffect } from 'react';
import { useAuth } from "./useFirebaseAuth";
import { getExpenses, addExpense, updateExpense, deleteExpense } from '../services/expenseService';

export const useExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchExpenses();
    } else {
      setExpenses([]);
      setLoading(false);
    }
  }, [user]);

  const fetchExpenses = async () => {
    setLoading(true);
    const userExpenses = await getExpenses(user.uid);
    setExpenses(userExpenses);
    setLoading(false);
  };

  const addNewExpense = async (expenseData) => {
    const newExpense = await addExpense(user.uid, expenseData);
    setExpenses([...expenses, newExpense]);
  };

  const updateExistingExpense = async (id, expenseData) => {
    await updateExpense(user.uid, id, expenseData);
    setExpenses(expenses.map(expense => expense.id === id ? { ...expense, ...expenseData } : expense));
  };

  const removeExpense = async (id) => {
    await deleteExpense(user.uid, id);
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return {
    expenses,
    loading,
    addExpense: addNewExpense,
    updateExpense: updateExistingExpense,
    deleteExpense: removeExpense
  };
};