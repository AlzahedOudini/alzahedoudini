import type { NextPage } from 'next';
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import moi from '../public/moi.png';
import moidark from '../public/moidark.png';
import Navbar from '../components/navbar/Navbar';
import { GiPolarStar } from 'react-icons/gi';
import { useTheme } from 'next-themes';
import { useState, useMemo, useEffect } from 'react';


const Home: NextPage = () => {

  const { systemTheme, theme} = useTheme();

  useEffect(() =>{
    //setMounted(true);
  }, [])

  const meImage = useMemo(() => {
    //if(!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    return(
      <div className='relative'>
        <Image
          src={currentTheme === 'dark' ? moidark : moi}
          alt="Picture of the author"
          
          objectFit='contain'
          width={500}
          height={500}
        />
      </div>
    );
  }, [systemTheme, theme]);

  return (
    <div className='min-h-[calc(100vh-100px)] overflow-y-hiddens relative  '>
      <Navbar/>
      <Head>
        <title>Alzahed Oudini</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/oudini.ico" />
      </Head>
      <main className='px-8 md:px-24 2xl:px-[300px] sm:px-16 py-8 flex items-center  justify-center  min-h-[calc(100vh-100px)]   mt-[100px] overflow-y-hidden '>
        <div className='w-full  items-center justify-between flex xl:flex-row flex-col-reverse gap-6 md:gap-4'>
          <div className=' font-[900] flex flex-col gap-4 '>
            <h1 className=' text-center xl:text-left sm:text-5xl xl:text-6xl text-3xl capitalize md:leading-[3.6rem] xl:leading-[4rem] 2xl:leading-[4rem] '>Salut 👋, Je suis Oudini, Front-end Dev & UI-UX Designer Basé au cameroun</h1>
            
            <div className='hidden sm:flex gap-4 items-center justify-center xl:justify-start  uppercase my-4'>
              <h2 className='text-2xl md:text-2xl font-bold'>Design</h2>
              <GiPolarStar className='text-[#E94D35]'/>
              <h2 className='text-2xl md:text-2xl font-bold'>Development</h2>
              <GiPolarStar className='text-[#E94D35]'/>
              <h2 className='text-2xl md:text-2xl font-bold'>Creativity</h2>
            </div>
            <div className='flex flex-col sm:flex-row relative text-xl gap-4 capitalize justify-center  xl:justify-start mt-4 sm:mt-0'>
              <Link href={'/design'}>
                <button className='px-10 relatice font-bold py-4 border transition  hover:ease-in-out bg-black dark:border-white border-black text-white  hover:underline  dark:text-black dark:bg-white dark:hover:text-black  '>Besoin d'un Designer</button>
              </Link>
              <Link href={'/devweb'}>
                <button className='px-10 font-bold py-4 border transition-colors duration-500 hover:ease-in-out   dark:border-white border-black text-black hover:bg-black hover:text-white  dark:text-white dark:hover:bg-white dark:hover:text-black  '>Besoin d'un Site Web</button>
              </Link>

            </div>
          </div>

          <div>
            <div className="relative  md:flex 2xl:w-[500px] 2xl:h-[500px] lg:h-[480px] lg:w-[480px] justify-center items-center rounded-full ">
              {meImage}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;


