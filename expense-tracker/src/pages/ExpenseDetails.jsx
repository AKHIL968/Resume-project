import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useExpenses } from '../contexts/ExpenseContext';
import { useAuth } from '../contexts/AuthContext';
import ExpenseForm from '../components/dashboard/ExpenseForm';

const ExpenseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { expenses, updateExpense, deleteExpense } = useExpenses();
  const [expense, setExpense] = useState(null);

  useEffect(() => {
    const currentExpense = expenses.find(e => e.id === id);
    if (currentExpense) {
      setExpense(currentExpense);
    } else {
      // Expense not found, redirect to dashboard
      navigate('/');
    }
  }, [id, expenses, navigate]);

  const handleUpdate = async (updatedExpense) => {
    await updateExpense(id, updatedExpense);
    navigate('/');
  };

  const handleDelete = async () => {
    await deleteExpense(id);
    navigate('/');
  };

  if (!expense) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Expense Details</h1>
      <ExpenseForm expense={expense} onSubmit={handleUpdate} />
      <button
        onClick={handleDelete}
        className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Delete Expense
      </button>
    </div>
  );
};

export default ExpenseDetails;