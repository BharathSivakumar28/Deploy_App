import React from 'react'
import Card from './components/studentcomponent/Card'
import Footer from './components/studentcomponent/Footer'
import Navbarx from './components/studentcomponent/Navbarx'
import Navbar from './components/studentcomponent/Navbar'
const Hero = () => {
  return (
    <div>
      <Navbarx/>
      <Navbar/>
      <h1 className='text-3xl m-5 mx-10 text-left tracking-normal font-bold'>Things you want to know!!!</h1>
      <div className='mx-5 flex  justify-items-stretch'>
      <Card/>
      <Card/>
      <Card/>
      </div>
      <div className='mx-5 flex  justify-items-stretch'>
      <Card/>
      <Card/>
      <Card/>
      </div>
      <Footer/>
    </div>
  )
}

export default Hero