import React from 'react'
import Filter from './components/studentcomponent/Filter'
import Coursecard from './components/studentcomponent/Coursecard'

import Footer from './components/studentcomponent/Footer'
import Navbarx from './components/studentcomponent/Navbarx'
import Doubtscard from './components/studentcomponent/Doubtscard'


const Doubt = () => {
  return (
    <div className='bg-gray-600'>
        <Navbarx/>
        <h1 className='text-4xl m-10'>
          Doubts you previously asked 
        </h1>
    <div>
    <Doubtscard subject="maths" description="cannot solve this problem"/>
    <Doubtscard subject="physics" description="cannot understand this concept hard to solve this problem"/>
    <Doubtscard subject="chemistry" description="cannot solve this problem"/>
    <Doubtscard subject="physics" description="cannot solve this problem"/>
    <Doubtscard subject="biology" description="cannot understand this concept hard to solve this problem"/>
    <Doubtscard subject="zoology" description="cannot solve this problem"/>
    <Doubtscard subject="chemistry" description="cannot understand this concept hard to solve this problem"/>
    <Doubtscard subject="maths" description="cannot solve this problem"/>
    <Doubtscard subject="science" description="cannot understand this concept hard to solve this problem"/>


    </div>
    <Footer/>
    </div>
  )
}

export default Doubt