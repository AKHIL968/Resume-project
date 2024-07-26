// import React from 'react'
// import { useExpenses } from '../../contexts/ExpenseContext'
// import { Link } from 'react-router-dom'

// const ExpenseItem = ({expense}) => {
//   const {deleteExpense} = useExpenses()
//   return (
//     <div>
//       <h1 className='text-blue-700 text-2xl'>Expense Item-</h1>
//       <div>
//           <div>
//             <h1>{expense.category}</h1>
//             <h1>{expense.description}</h1>
//           </div>
//           <div>
//             <p>{expense.amount}</p>
//             <p><Link to={`/expense/${expense.id}`}>View Details</Link></p>
//           </div>
//       </div>
//       <div>
//         <button onClick={()=>deleteExpense(expense.id)}>Delete</button>
//       </div>
//     </div>
//   )
// }

// export default ExpenseItem

import React from 'react';
import { useExpenses } from '../../contexts/ExpenseContext';
import { Link } from 'react-router-dom';

const ExpenseItem = ({ expense }) => {
  const { deleteExpense } = useExpenses();

  return (
    <div className="border p-4 rounded-lg shadow-md bg-lightest-gray mb-2">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-xl font-semibold text-deep-blue">{expense.category}</h3>
          <p className="text-lg text-gray-700">{expense.description}</p>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-deep-blue">Rs {expense.amount}</p>
          <p className="text-blue-700"><Link to={`/expense/${expense.id}`}>View Details</Link></p>
        </div>
      </div>
      <div className="text-right">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          onClick={() => deleteExpense(expense.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
