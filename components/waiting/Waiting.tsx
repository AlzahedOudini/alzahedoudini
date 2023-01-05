import React from 'react';
import { IoMdWarning } from "react-icons/io";

function Waiting() {
  return (
    <div className='flex items-center justify-center h-auto text-center mt-20'>
      <div className='p-16 flex flex-col justify-center items-center bg-gray-100 text-black dark:text-white  dark:bg-[#111010]  w-full'>
        <div className='bg-[#E94D35] p-4 rounded-full w-14 h-14 flex items-center justify-center mb-8'><IoMdWarning className='text-2xl text-white'/></div>
        <h1 className='text-4xl capitalize font-bold'>En attente !</h1>
        <p className='text-xl mt-4'>Cette page est encour de Développement. Veuillez revenir plus tard s&apos;il vous plait 🙂</p>
      </div>
    </div>
  )
}

export default Waiting;
