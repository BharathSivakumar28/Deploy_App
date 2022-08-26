import './Teacher.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../Teacherscomponents/NavBar";
import { Banner } from "../Teacherscomponents/Banner";
import { Skills } from "../Teacherscomponents/Skills";
import { Projects } from '../Teacherscomponents/Projects';
import { Contactteacher } from '../Teacherscomponents/ContactTeacher';
import { Footerteacher } from '../Teacherscomponents/FooterTeacher';

import React from 'react'

const Teacher = () => {
  return (
    <div className="App">
       

       <NavBar />
      <Banner />
      <Skills />
      {/* <Projects /> */}
     <Contactteacher />
      <Footerteacher /> 
      
    </div>
  )
}

export default Teacher