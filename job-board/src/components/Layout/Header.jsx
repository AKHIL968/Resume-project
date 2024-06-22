import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md px-4 py-2">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-orange-500 font-extrabold text-2xl">
          JobHub
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
        <ul className="flex flex-col md:flex-row justify-end items-center gap-4">
          <li>
            <Link to="/post-job" className="hover:text-orange-500">Post a Job</Link>
          </li>
          <li>
            <Link to="/jobs" className="hover:text-orange-500">View Jobs</Link>
          </li>
          {currentUser ? (
            <>
              <li>Welcome, {currentUser.email}</li>
              <li>
                <button onClick={handleLogout} className="hover:text-orange-500">Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="hover:text-orange-500">Login</Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-orange-500">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;