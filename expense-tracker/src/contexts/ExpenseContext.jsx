import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { getExpenses, addExpense, updateExpense, deleteExpense } from '../services/expenseService';

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
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
    try {
      const userExpenses = await getExpenses(user.uid);
      setExpenses(userExpenses);
    } catch (error) {
      console.error("Error fetching expenses:", error);
      setExpenses([]);
    } finally {
      setLoading(false);
    }
  };

  const addNewExpense = async (expenseData) => {
    try {
      const newExpense = await addExpense(user.uid, expenseData);
      setExpenses(prevExpenses => [...prevExpenses, newExpense]);
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  const updateExistingExpense = async (id, expenseData) => {
    try {
      console.log('Updating existing expense:', { id, expenseData, user });
      if (!user || !user.uid) {
        throw new Error('User not authenticated');
      }
      if (typeof id !== 'string') {
        console.error('Invalid expense ID:', id);
        throw new Error(`Invalid expense ID: ${JSON.stringify(id)}`);
      }
      await updateExpense(user.uid, id, expenseData);
      setExpenses(prevExpenses => 
        prevExpenses.map(expense => 
          expense.id === id ? { ...expense, ...expenseData } : expense
        )
      );
    } catch (error) {
      console.error("Error updating expense:", error);
    }
  };

  const removeExpense = async (id) => {
    try {
      await deleteExpense(user.uid, id);
      setExpenses(prevExpenses => prevExpenses.filter(expense => expense.id !== id));
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  const getExpense = (id) => {
    return expenses.find(expense => expense.id === id);
  };

  const totalExpenses = expenses.reduce((total, expense) => total + (expense.amount || 0), 0);

  const expensesByCategory = Object.entries(
    expenses.reduce((acc, expense) => {
      if (expense.category && expense.amount) {
        acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      }
      return acc;
    }, {})
  ).map(([category, amount]) => ({ category, amount }));

  const value = {
    expenses,
    loading,
    totalExpenses,
    expensesByCategory,
    addExpense: addNewExpense,
    updateExpense: updateExistingExpense,
    deleteExpense: removeExpense,
    getExpense
  };

  return (
    <ExpenseContext.Provider value={value}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => {
  return useContext(ExpenseContext);
};