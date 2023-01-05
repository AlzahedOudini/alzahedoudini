import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import { useRouter } from 'next/router';
import { GrClose } from "react-icons/gr";
import { MdOutlineClose } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { t } from 'i18next';
import Link from 'next/link';

function Menu() {
  const router = useRouter()
 
  const goAbout = ()=> router.push("/about");
  const goDev = ()=> router.push("/webdev");
  const goDesign = ()=> router.push("/design");

  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);

  return (
    <div className=' w-full  h-full bg-[#ffffff] dark:bg-black  overflow-y-hiddens fixed flex flex-col items-center  px-8 md:px-24 2xl:px-[300px]'>
      <div className=' w-full mt-20'>
        <div className=' flex flex-col gap-4'>
          <div className='flex justify-between items-center py-5 dark:text-white text-black  border-b-2 border-[#111010] '>
            <div onClick={goDev} className="flex justify-between items-center w-full " >
              <>
                <p className='text-3xl'>{t('webdev')}</p>
                <FiArrowUpRight className='text-3xl'/>
              </>
            </div>
          </div>
          <div className='flex justify-between items-center py-5 dark:text-white text-black  border-b-2 border-[#111010] '>
            <div onClick={goDesign} className="flex justify-between items-center w-full " >
              <>
                <p className='text-3xl'>{t('design')}</p>
                <FiArrowUpRight className='text-3xl'/>
              </>
            </div>
          </div>
          <div className='flex justify-between items-center py-5 dark:text-white text-black  border-b-2 border-[#111010] '>
            <div onClick={goAbout} className="flex justify-between items-center w-full " >
              <>
                <p className='text-3xl'>{t('about')}</p>
                <FiArrowUpRight className='text-3xl '/>
              </>
            </div>
          </div>
          
        </div>

        <div className='flex flex-col justify-center items-center mt-6 gap-4 '>
          
          <div ><button className=' mt-12 px-8 py-4 border transition-colors hover:duration-600  delay-1500 ease-in-out dark:border-white border-black text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black text-xl'>{t('sayHello')}</button></div>
          <div className='flex justify-center items-center dark:text-white text-black mt-6 gap-10'>
            <Link href={''} ><span><AiFillGithub className='text-3xl cursor-pointer'/></span></Link>
            <Link href={''} ><span><FaLinkedinIn className='text-3xl cursor-pointer'/></span></Link>
            <Link href={''} ><span><FaInstagram className='text-3xl cursor-pointer'/></span></Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Menu;


