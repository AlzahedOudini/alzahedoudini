import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IoMdMoon } from "react-icons/io";
import {useTheme} from 'next-themes';
import { BsFillSunFill } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import logo from '../../public/logo.svg';
import { useTranslation } from 'react-i18next';
import { MdOutlineClose } from "react-icons/md";
import Menu from '../menu/Menu';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

function Navbar() {
  const router = useRouter()
  const goBack = ()=> router.push("/");
  const goDesign = () => router.push("/design");
  const goAbout = () => router.push("/about");
  const goWebdev = () => router.push("/webdev");

  const { systemTheme, theme, setTheme} = useTheme();
  const [ mounted, setMounted] = useState(false);
  
  const [ clickme, setClickme ] = useState(false);
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);

  const { t, i18n } = useTranslation();
  function handleLangChange(clickme: any){
    console.log(clickme);
    if(!clickme) {
      i18n.changeLanguage(clickme);
    }
  }

  useEffect(() =>{
    setMounted(true);
  }, [])

  const renderThemeChanger = () =>{
    if(!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if(currentTheme === 'dark'){
      return(
        <div className='p-3 rounded-full  dark:bg-white cursor-pointer' onClick={() => setTheme('light')}><IoMdMoon className='text-black text-2xl'/></div>
      )
    } else {
      return (
        <div className='p-3 rounded-full bg-[#000000] dark:bg-white cursor-pointer' onClick={() => setTheme('dark')}><BsFillSunFill className='text-white text-2xl'/></div>
      )
    }
  }

  return (
    <div>
      <div className='w-full h-[100px] z-10  fixed top-0 grid bg-white  content-center  dark:bg-black dark:text-white text-white'>
          <div className="box flex  justify-between px-8 md:px-24 2xl:px-[300px] items-center">
            <div onClick={goBack} className='flex gap-3 items-center cursor-pointer'>
              <Image
                src={logo}
                alt="Picture of the author"
                width={40}
                height={40}
              />
              <h1 className=' font-[900] text-3xl dark:text-white text-black'>Oudini<span className='text-[#E94D35]'>.</span></h1>
            </div>
            <div className='hidden lg:flex items-center gap-10 dark:text-white text-black font-bold capitalize'>
              <Link className=' cursor-pointer' href={'/webdev'}>{t('webdev')}</Link>
              <Link className=' cursor-pointer' href={'/design'}>{t('design')}</Link>
              <Link className=' cursor-pointer' href={'/about'}>{t('about')}</Link>
              {/* <div className='flex gap-3 '>
                <p className='cursor-pointer' onClick={handleLangChange}>FR</p> 
                <p className='cursor-pointer'>EN</p>
              </div> */}
              <div ><button className='px-6 py-2 py-4 border transition-colors hover:duration-600  delay-1500 ease-in-out dark:border-white border-black text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black duration-500 hover:ease-in-out'>{t('sayHello')}</button></div>
              <div>{renderThemeChanger()}</div>
            </div>
            <div className='flex lg:hidden justify-center items-center gap-4'>
              <div className='flex lg:hidden'>{renderThemeChanger()}</div>
              {!menu ?
                <IoMdMenu className='text-3xl text-black dark:text-white flex lg:hidden' onClick={handleMenu}/>  :
                <MdOutlineClose className='text-3xl text-black dark:text-white flex lg:hidden' onClick={handleMenu}/>
              }
            </div>
            
          </div>
          <div>
            {menu ?
              <Menu/>
             : 
             <div></div>
            }
          </div>
      </div>
    </div>
  )
}

export default Navbar;