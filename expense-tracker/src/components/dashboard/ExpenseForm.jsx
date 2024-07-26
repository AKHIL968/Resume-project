// import React, { useState, useEffect } from "react";
// import { useExpenses } from "../../contexts/ExpenseContext";
// import CategorySelect from "./CategorySelect";

// const ExpenseForm = ({ expense }) => {
//   const [amount, setAmount] = useState(expense ? expense.amount.toString() : "");
//   const [description, setDescription] = useState(expense ? expense.description || "" : "");
//   const [category, setCategory] = useState(expense ? expense.category || "" : "");
//   const { addExpense, updateExpense } = useExpenses();

//   useEffect(() => {
//     if (expense) {
//       setAmount(expense.amount.toString());
//       setDescription(expense.description || "");
//       setCategory(expense.category || "");
//     }
//   }, [expense]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const expenseData = { amount: parseFloat(amount), description, category };
    
//     console.log('Submitting expense:', { expense, expenseData });

//     if (expense && expense.id) {
//       console.log('Updating expense with ID:', expense.id);
//       await updateExpense(expense.id, expenseData);
//     } else {
//       console.log('Adding new expense');
//       await addExpense(expenseData);
//     }
//     clearForm();
//   };

//   const clearForm = () => {
//     setAmount("");
//     setDescription("");
//     setCategory("");
//   };

//   return (
//     <div>
//       <h1>Expense Form</h1>
//       <div>
//         <h1>{expense ? "Update Expense" : "Add New Expense"}</h1>
//         <form onSubmit={handleSubmit}>
//           <label>Amount:</label>
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             required
//           />
//           <label>Description:</label>
//           <input
//             type="text"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//           <CategorySelect value={category} onChange={setCategory} />
//           <button
//             type="submit"
//             className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             {expense ? "Update Expense" : "Add Expense"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ExpenseForm;

import React, { useState, useEffect } from "react";
import { useExpenses } from "../../contexts/ExpenseContext";
import CategorySelect from "./CategorySelect";
import { useNavigate } from "react-router-dom";

const ExpenseForm = ({ expense }) => {
  const [amount, setAmount] = useState(expense ? expense.amount.toString() : "");
  const [description, setDescription] = useState(expense ? expense.description || "" : "");
  const [category, setCategory] = useState(expense ? expense.category || "" : "");
  const { addExpense, updateExpense } = useExpenses();
  const navigate = useNavigate()


  useEffect(() => {
    if (expense) {
      setAmount(expense.amount.toString());
      setDescription(expense.description || "");
      setCategory(expense.category || "");
    }
  }, [expense]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const expenseData = { amount: parseFloat(amount), description, category };
    
    if (expense && expense.id) {
      await updateExpense(expense.id, expenseData);
      navigate("/")
    } else {
      await addExpense(expenseData);
    }
    clearForm();
  };

  const clearForm = () => {
    setAmount("");
    setDescription("");
    setCategory("");
  };

  return (
    <div className="bg-off-white p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-deep-blue">
        {expense ? "Update Expense" : "Add New Expense"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-blue">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-blue">Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <CategorySelect value={category} onChange={setCategory} />
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-deep-blue hover:bg-slate-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-blue"
        >
          {expense ? "Update Expense" : "Add Expense"}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;