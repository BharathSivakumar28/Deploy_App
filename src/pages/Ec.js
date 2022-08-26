import React from 'react'
import NavEc from '../components/ECcomponents/NavEc'
import Card from '../components/studentcomponent/Card'

const Ec = () => {
  return (
    <div className='justify-center' ><NavEc/>
    <div className=' flex flex-wrap items-center justify-center '>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/></div>

    </div>
  )
}

export default Ec