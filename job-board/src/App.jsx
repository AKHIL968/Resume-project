

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import Login from "./components/Auth/Login"
import Register from './components/Auth/Register'
import Header from './components/Layout/Header'
import PostJobPage from './pages/PostJobPage'
import JobListing from "./components/Jobs/JobListing"
import JobDetailPage from './pages/JobDetailPage'
import JobApply from './pages/JobApply'
import Footer from './components/Layout/Footer'


function App() {


  return (
    
      <>
      
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact Component={HomePage}/>
          <Route path='/login' Component={Login}/>
          <Route path='/register' Component={Register}/>
          <Route path='post-job' Component={PostJobPage}/>
          <Route path='jobs' Component={JobListing}/>
          <Route path='job/:id' Component={JobDetailPage}/>
          <Route path='/apply/:id' Component={JobApply}/>
        </Routes>
        <Footer/>
      </Router>
      </>
    
  )
}

export default App
