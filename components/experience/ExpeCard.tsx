import React from 'react';
import logo from '../../public/logo.svg';
import Image from 'next/image';

interface Experience {
  poste: String
  entreprise: String
  date: String
  
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
function ExpeCard({poste, entreprise, date, onClick}: Experience)  {
  
  
  return (
    <div  className='text-black dark:text-white border-2 border-black dark:border-white cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black p-8 flex justify-between items-center transition duration-500 hover:ease-in-out'>
      <div className='flex gap-4 justify-center items-center'>
        <div className='flex justify-center items-center w-[3rem] h-[3rem] p-1  bg-[#141414] dark:border-white '>
          <Image
          src={logo}
          alt="Picture of the author"
          width={30}
          height={30}
          />
        </div>
        <div className='text-start'>
          <h1 className='text-2xl font-bold'>{poste}</h1>
          <p className='text-xl'> {entreprise} </p>
        </div>
      </div>
      <h3>{date}</h3>
    </div>
  )
}

export default ExpeCard;
