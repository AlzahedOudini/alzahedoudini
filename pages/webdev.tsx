import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar';
import Waiting from '../components/waiting/Waiting';


function Webdev() {
  const [affich, setAffich] = useState(false);
  const swichPage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
    e.preventDefault();
    setAffich(true);
    console.log("Cliqué")
    setTimeout(() =>{
      setAffich(false);
    }, 2000);
  }

  if (affich) {
    return (
      <div className='w-screen absolute h-screen bg-red-400 z-20 text-center text-2xl '>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <Navbar/>
      <h1 className='text-4xl capitalize text-center font-bold pt-[10rem] mb-8'>Développement Web</h1>
      <div onClick={swichPage} className="flex justify-center"><button className='text-center px-6 py-2 bg-slate-700 self-center'>Click</button></div>
      <div className='px-8 md:px-24 2xl:px-[300px]'>
        <Waiting/>
      </div>
      <div className='z-30 '>
        { affich && (
            <div className='w-screen absolute h-screen bg-red-400 z-20 text-center text-2xl text-white'>
              <h1>Loading...</h1>
            </div>
          ) 
        }
      </div>
    </div>
  )
}

export default Webdev;
