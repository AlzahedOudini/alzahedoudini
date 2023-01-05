import React from 'react';
import logo from '../public/logo.svg';
import Image from 'next/image';
import { GiPolarStar } from "react-icons/gi";
import { RiMailFill, RiSmartphoneFill } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";
import { t } from 'i18next';
import Link from 'next/link';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import ExpeCard from '../components/experience/ExpeCard';
import { useRouter } from 'next/router';

function About() {

  const router = useRouter()
  const goDesign = ()=> router.push("/design");
  const goWebdev = ()=> router.push("/webdev");
  const goWebde = ()=>{
    console.log("cliqué");
    router.push("/webdev");
  }
  console.log(`je suis là ${goDesign} `)
  return (
    <>
      <Navbar/>
      <section className='px-8 md:px-24 2xl:px-[300px] py-10 mt-[100px] '>
        <div className='flex flex-col  text-center  2xl:px-[6rem]'>
          <h1 className='font-bold text-black dark:text-white sm:text-5xl xl:text-6xl text-3xl md:leading-[3.6rem] xl:leading-[4rem] 2xl:leading-[4rem] '>
          Je réalise des sites web passant par le UI-UX et je le fais bien.
          </h1>
        </div>
        <div className='md:flex hidden gap-4 items-center justify-center uppercase mt-10'>
          <h2 className='text-xl md:text-2xl font-bold'>Design</h2>
          {/* <Image
                  src={logo}
                  alt="Picture of the author"
                  width={40}
                  height={40}
                /> */}
          <GiPolarStar className='text-[#E94D35]'/>
          <h2 className='text-xl md:text-2xl font-bold'>Development</h2>
          <GiPolarStar className='text-[#E94D35]'/>
          <h2 className='text-xl md:text-2xl font-bold'>Creativity</h2>
        </div>
        <div className=' w-full mt-10'>
            <div className='bg-gray-300 w-full h-[26rem]'>

            </div>
            <p className='text-xl mt-10 text-justify'>
            La conception graphique, l&apos;intégration web et l&apos;animation tout autour sont perçues comme un vrai art. Son perfectionnement global élevant le rendu au rang d&apos;un tableau de Picasso est une aspiration continue.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-10 '>
                <div className='flex flex-col gap-6 border border-r-1 border-b-0 md:border-b md:border-r-0 border-black dark:border-white p-6 justify-center items-center'>
                  <h1 className='text-4xl md:text-5xl font-bold'>2+</h1>
                  <h3 className='text-xl uppercase text-center'>Années d'experience</h3>
                </div>
                <div className='flex flex-col gap-6 border  border-[#E94D35] bg-[#E94D35] text-white p-6 justify-center items-center'>
                  <h1 className='text-4xl md:text-5xl font-bold'>20+</h1>
                  <h3 className='text-xl uppercase text-center'>Projets achevés</h3>
                </div>
                <div className='flex flex-col gap-6 border border-l-1 border-t-0 md:border-t md:border-l-0 border-black dark:border-white p-6 justify-center items-center'>
                  <h1 className='text-4xl md:text-5xl font-bold'>15+</h1>
                  <h3 className='text-xl uppercase text-center'>clients satisfaits</h3>
                </div>
            </div>
        </div>
      </section> 
      <section className='px-8 md:px-24 2xl:px-[300px] py-10 text-center'>
            <div className='flex flex-col items-center gap-4 mb-10'>
                <Image
                  src={logo}
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
                <h1 className='text-4xl md:text-5xl font-bold capitalize'>Experience</h1>
                <p className='text-xl md:text-2xl uppercase'>Reconnaissance et réalisations </p>
            </div>
            <div className='flex flex-col gap-6'>
                <div className='bg-gray-300 w-full h-[10rem]'></div>
                <div className='bg-gray-300 w-full h-[10rem]'></div>
                <div className='bg-gray-300 w-full h-[10rem]'></div>
            </div>
      </section>    
      <section className='px-8 md:px-24 2xl:px-[300px] py-10 text-center'>
            <div className='flex flex-col items-center gap-4 mb-10'>
                <Image
                  src={logo}
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
                <h1 className='text-4xl md:text-5xl font-bold capitalize'>Services</h1>
                <p className='text-xl md:text-2xl uppercase'>Reconnaissance et réalisations </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                <ExpeCard poste="Graphic Designer" date="2022" entreprise="GoosFinance" onClick={goDesign}/>
                <Link href={'/design'}><ExpeCard poste="Web Development" date="2021" entreprise="GoosFinance" onClick={goDesign}/></Link>
            </div>
      </section> 
      <section className='px-8 md:px-24 2xl:px-[300px] py-10'>
            <div className='flex flex-col items-center gap-4 mb-10 relative'>
                <Image
                  src={logo}
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
                <h1 className='text-4xl md:text-5xl font-bold text-center  capitalize'>Prenons rendez-vous !</h1>
                <p className='text-xl md:text-2xl text-center uppercase'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div className='grid pt-4 grid-cols-2 gap-6'>
                <div className='bg-gray-300 w-full h-[18rem]'></div>
                <div className='bg-gray-300 w-full h-[18rem]'></div>
                <div className='bg-gray-300 w-full h-[18rem]'></div>
                <div className='bg-gray-300 w-full h-[18rem]'></div>
            </div>
      </section> 
      <section className='px-8 md:px-24 2xl:px-[300px] py-16 bg-gray-100 dark:bg-[#141414] '>
          <div className='grid grid-cols-3 gap-6 text-white dark:text-black text-center '>
              <div className='bg-black  dark:bg-white py-10 flex flex-col items-center justify-center px-8'>
                  <div className='bg-[#E94D35] p-4 rounded-full w-14 h-14 flex items-center justify-center mb-8'><RiMailFill className='text-2xl text-white'/></div>
                  <h1 className='font-bold text-4xl'>Message</h1>
                  <p className='font-bold text-xl mt-2'>alzahedoudini@gmail.com</p>
              </div>
              <div className='bg-black dark:bg-white py-10 flex flex-col items-center justify-center px-8'>
                  <div className='bg-[#E94D35] p-4 rounded-full w-14 h-14 flex items-center justify-center mb-8'><RiSmartphoneFill className='text-2xl text-white'/></div>
                  <h1 className='font-bold text-4xl'>Appel</h1>
                  <p className='font-bold text-xl mt-2'>(237) 657 250 527</p>
              </div>
              <div className='bg-black dark:bg-white py-10 flex flex-col items-center justify-center px-8'>
                  <div className='bg-[#E94D35] p-4 rounded-full w-14 h-14 flex items-center justify-center mb-8'><TiLocation className='text-2xl text-white'/></div>
                  <h1 className='font-bold text-4xl'>Adresse</h1>
                  <p className='font-bold text-xl mt-2 capitalize'>6180 Akwa palace Douala</p>
              </div>
              
          </div>
      </section> 
      <section className='px-8 md:px-24 2xl:px-[300px] py-14 bg-[#E6E3DE] dark:bg-[#000000] flex flex-col justify-between lg:flex-row gap-8 items-center'>
           <h1 className='text-center text-2xl font-bold'>S'abonner à ma newsletter</h1> 
           <div className='flex flex-col md:flex-row gap-8 '>
            <input type="text" name="Newsletter" className='p-4 border-2 border-black min-w-[16rem] sm:min-w-[25rem] dark:border-white   bg-transparent dark:outline-[#E94D35] outline-[#E94D35]' placeholder='Adresse mail'/>
            <button className='px-10 font-bold py-4 border transition-colors hover:duration-600  delay-1500 ease-in-out bg-black dark:border-white border-black text-white  hover:underline  dark:text-black dark:bg-white dark:hover:text-black'>Souscrire</button>
           </div>
      </section>
      <Footer/>
    </>
    
  )
}

export default About;