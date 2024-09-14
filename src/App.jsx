import React from 'react'
import './App.css'


// import Skilinf from './Components/SkilsInf'


import Nav from './Components/Nav' 
import ResentWork from './Components/ResentWork'
import HeroSectionTwo from './Components/HeroSectionTow'
import SkillsInfo from './Components/SkillsInfo'
import Services from './Components/Services'
import Education from './Components/Education'
import Skils from './Components/Skils'
import Blog from './Components/Blog'
import Footer from './Components/Footer'
import Contect from './Components/Contect'

function App() {
 

  return (
    <>
    {/* <Skilinf/> */}
 
     <Nav/>
   <HeroSectionTwo/> 
    <SkillsInfo/>
     <Services/>  
    <ResentWork/>
     <Education/>
    <Skils/>
    <Blog/>
    <Contect/>
    <Footer/>  
    </> 
  )
}

export default App
