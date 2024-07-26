import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ExpenseProvider } from './contexts/ExpenseContext';

import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
// import ExpenseDetails from './pages/ExpenseDetails';
import Header from './components/layout/Header';
import ExpenseDetails from "./pages/ExpenseDetails"
import Profile from "./pages/Profile"
import Footer from './components/layout/Footer';


function App() {
  return (
    <Router>
      <AuthProvider>
        <ExpenseProvider>
          <Header/>
          
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Dashboard />} />
            <Route path="/expense/:id" element={<ExpenseDetails />} />
            <Route path='/profile' element={<Profile />}/>
          </Routes>
          <Footer />
        </ExpenseProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
