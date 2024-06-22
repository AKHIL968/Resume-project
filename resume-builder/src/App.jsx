
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preview from './pages/Preview';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';

import Experience from './components/Experience';
import Certificate from './components/Certificate';
import Summary from './components/Summary';




function App() {


  return (
    <>
    
     <Router>
      <Routes>
      <Route path='/' element={<PersonalInfo />} />
      <Route path='/preview' element={<Preview/>}/>
      <Route path='/education' element={<Education/>}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/skills' element={<Skills />}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/certificate' element={<Certificate/>}/>
      <Route path='/summary' element={<Summary/>}/>
     
      </Routes>
     </Router>
    </>
  )
}

export default App