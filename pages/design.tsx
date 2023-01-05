import React from 'react'
import Menu from '../components/menu/Menu';
import Navbar from '../components/navbar/Navbar';
import Waiting from '../components/waiting/Waiting';


function Design() {
  return (
    <>
      <Navbar/>
      
      <h1 className='text-4xl capitalize text-center font-bold pt-[10rem] mb-8'>Design</h1>
      <div className='px-8 md:px-24 2xl:px-[300px]'>
        <Waiting/>
      </div>
    </>
  )
}

export default Design;