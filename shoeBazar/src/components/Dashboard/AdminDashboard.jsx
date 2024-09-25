import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const AdminDashboard = () => {
  const { isAdmin } = useAuth();
  return (
    <div className="mt-10">
      {isAdmin ? (
        <>
          {/* <h2>Admin DashBoard 2</h2> */}
          <nav>
            <ul>
              <li className=" w-48 px-4 py-2 bg-blue text-cream hover:bg-white hover:text-blue rounded-md">
                <Link to="/admin/order">OrderManagement</Link>
              </li>
              <li className="w-48 px-4 py-2 bg-blue text-cream hover:bg-white hover:text-blue rounded-md mt-4">
                <Link to="/admin/product">ProductManagement</Link>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <>
          <h2>You are not a admin</h2>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
