import './App.css'
import Home from "./components/Home"
import About from "./components/About"
import Project from "./components/Project"
import Review from "./components/Review"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Skill from './components/Skill'

function App() {
  return (
    <div className='min-h-screen bg-dark_blue'>
      <Header />
      <main className='pt-12'> {/* Add padding-top to account for fixed header */}
        <Home />
        <About />
        <Skill/>
        <Project />
        {/* <Review /> */}
        <Contact />
      </main>
    </div>
  )
}

export default App