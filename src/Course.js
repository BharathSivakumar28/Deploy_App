import React from 'react'
import Filter from './components/studentcomponent/Filter'
import Coursecard from './components/studentcomponent/Coursecard'

import Footer from './components/studentcomponent/Footer'
import Navbarx from './components/studentcomponent/Navbarx'


const Course = () => {
  return (
    <div>
        <Navbarx/>
        <p className="m-10 text-3xl tracking-tight font-bold text-gray-900 sm:text-2xl sm:tracking-tight md:text-3xl md:tracking-tight">  Courses you might like!!</p>
    <div className='flex justify-around flex-wrap'>

        <Coursecard 
        title="Computer course" 
        topic="maths"
        selling="hot"
        level="level 9"/>

        <Coursecard 
        title="Social course" 
        topic="maths"
        selling="Cold"
        level="level 16"/>

        <Coursecard 
        title="General course" 
        topic="maths"
        selling="hot"
        level="level 5"/>

        <Coursecard 
        title="Social course" 
        topic="maths"
        selling="Cold"
        level="level 16"/>

        <Coursecard 
        title="Computer course" 
        topic="maths"
        selling="hot"
        level="level 9"/>

        <Coursecard 
        title="General course" 
        topic="maths"
        selling="hot"
        level="level 5"/>

        <Coursecard 
        title="Computer course" 
        topic="maths"
        selling="hot"
        level="level 9"/>

        <Coursecard 
        title="Social course" 
        topic="maths"
        selling="Cold"
        level="level 16"/>

        <Coursecard 
        title="General course" 
        topic="maths"
        selling="hot"
        level="level 5"/>

        
    </div>
    <Footer/>
    </div>
  )
}

export default Course