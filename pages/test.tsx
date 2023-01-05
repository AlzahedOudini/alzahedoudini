import Link from 'next/link'
import React from 'react'

function Test() {
  return (
    <div>
      <div className='flex flex-col justify-center text-center   w-full'>
          <p className='text-4xl '>👋, Je m'appelle Oudini et je suis</p>
          <h1 className='font-bold  capitalize  text-black dark:text-white text-[5rem] xl:text-[7rem] 2xl:text-[9rem] mb-[-4rem]'>Front-end Dev</h1>
          <h1 className='font-bold capitalize text-[5rem] xl:text-[7rem] 2xl:text-[9rem] underline-offset-2 dark:stroke-white mystroke'><span className=''>&</span> graphic Designer</h1>

          <div className='flex justify-between items-center px-32 '>
            <p className='text-2xl '>En Freelance, au Cameroun.</p>
            <div className='flex gap-3 items-center text-2xl'>
              <p>CIDT</p>
              <p>UEmpire</p>
              <p>Koree App</p>
              <p>LTech</p>
            </div>
          </div>
          
          <div className='mt-14 flex gap-3 justify-center z-10'>
            <Link href={'/design'}><button className='px-8 bg-black  dark:bg-white text-white dark:text-black py-4 text-xl '>Vous avez besoin d'un designer</button></Link>
            <Link href={'/website'}><button className='px-8 py-4 text-xl border '>Vous avez besoin d'un Site Web</button></Link>
          </div>
          
        </div>

        <div className="absolute hidden md:flex right-[calc(50vw-300px)] bottom-[0rem]  ">
          {/* <Image
                  src={mypick}
                  alt="Picture of the author"
                  width={600}
                  height={600}
                  
            /> */}
        </div>
    </div>
  )
}

export default Test