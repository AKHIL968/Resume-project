import React from 'react'
import { useExpenses } from '../../contexts/ExpenseContext'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
  const {expenses, loading, error} = useExpenses()

  if(loading) return <p className="text-slate-blue">Loading......</p>
  if(error) return <p className="text-red-500">Error: {error}</p>

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-deep-blue">Expense List</h2>
      <div>
        {expenses.length === 0 ? (
          <p className="text-slate-blue">No Expenses yet</p>
        ) : (
          <ul className="space-y-2">
            {expenses.map((expense) => (
              <ExpenseItem key={expense.id} expense={expense}/>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default ExpenseList