import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from '../../services/authService';
import { Home, ShoppingCart, ClipboardList, User, LogOut, LogIn, UserPlus, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { isAdmin, user, setUser, setIsAdmin } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = async () => {
    try {
      await logOut();
      setUser(null); // Clear user state
      setIsAdmin(false); // Clear admin state
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error logging out', error);
    }
  };

  const NavLink = ({ to, icon: Icon, text }) => (
    <Link to={to} className="flex items-center gap-2 px-4 py-2 text-blue hover:text-black" onClick={() => setIsMenuOpen(false)}>
      <Icon size={20} />
      <span>{text}</span>
    </Link>
  );

  return (
    <header className='bg-cream fixed shadow top-0 w-full h-16 px-4 z-50'>
      <div className='flex justify-between items-center h-full'>
        <Link to="/" className="text-xl font-bold text-blue">ShoeBazar</Link>
        
        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-4'>
          {user ? (
            <>
              <NavLink to="/" icon={Home} text="Home" />
              {isAdmin && <NavLink to="/admin" icon={ClipboardList} text="Admin" />}
              <NavLink to="/cart" icon={ShoppingCart} text="Cart" />
              <NavLink to='/order' icon={ClipboardList} text="Order" />
              <NavLink to="/profile" icon={User} text="Profile" />
              <button onClick={handleLogout} className="flex text-blue items-center gap-2 px-4 py-2  hover:bg-gray-100">
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" icon={LogIn} text="Login" />
              <NavLink to="/register" icon={UserPlus} text="SignUp" />
            </>
          )}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className='md:hidden absolute top-16 left-0 w-full bg-white shadow-md'>
          {user ? (
            <>
              <NavLink to="/" icon={Home} text="Home" />
              {isAdmin && <NavLink to="/admin" icon={ClipboardList} text="Admin" />}
              <NavLink to="/cart" icon={ShoppingCart} text="Cart" />
              <NavLink to='/order' icon={ClipboardList} text="Order" />
              <NavLink to="/profile" icon={User} text="Profile" />
              <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="w-full flex items-center gap-2 px-4 py-2 text-blue hover:text-black">
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" icon={LogIn} text="Login" />
              <NavLink to="/register" icon={UserPlus} text="SignUp" />
            </>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
