import React from "react";
import ExpenseList from "../components/dashboard/ExpenseList";
import ExpenseForm from "../components/dashboard/ExpenseForm";
import PieChart from "../components/charts/PieChart";
import { useExpenses } from "../contexts/ExpenseContext";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const { expenses, loading, totalExpenses, expensesByCategory } = useExpenses();
  const { user } = useAuth();

  if (loading) {
    return <div className="text-deep-blue">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-off-white">
      {user ? (
        <>
          {/* <h1 className="text-3xl font-bold mb-8 text-deep-blue">
            Welcome {user.displayName}
          </h1> */}
          <br />
          <br />
          <h1 className="text-2xl font-medium mb-8 text-slate-blue">
            Welcome <span className="text-3xl font-sans font-bold text-deep-blue">
            {user.displayName}
              </span> 
          </h1>
          {/* <h1 className="text-3xl font-bold mb-8 text-deep-blue">
            Welcome {user.displayName}
          </h1> */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-soft-peach p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-deep-blue">
                Add New Expense
              </h2>
              <ExpenseForm />
            </div>
            <div className="bg-soft-peach p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-deep-blue">
                Expense Summary
              </h2>
              <p className="text-xl mb-4 text-slate-blue">
                Total Expenses: Rs{" "}
                {typeof totalExpenses === "number" ? totalExpenses.toFixed(2) : "0.00"}
              </p>
              {expensesByCategory && expensesByCategory.length > 0 ? (
                <PieChart data={expensesByCategory} />
              ) : (
                <p className="text-slate-blue">
                  No expenses to display in the chart.
                </p>
              )}
            </div>
          </div>
          <div className="mt-12 bg-soft-peach p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-deep-blue">
              Recent Expenses
            </h2>
            {expenses && expenses.length > 0 ? (
              <ExpenseList expenses={expenses.slice(0, 5)} />
            ) : (
              <p className="text-slate-blue">No recent expenses to display.</p>
            )}
          </div>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-semibold text-deep-blue mt-16 text-center">You Have to login first</h1>
          
        </>
      )}
    </div>
  );
};

export default Dashboard;
