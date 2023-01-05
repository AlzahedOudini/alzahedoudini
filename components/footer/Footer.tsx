import { t } from 'i18next';
import Link from 'next/link';
import React from 'react';


function Footer() {
  return (
    <div className='px-8 md:px-24 2xl:px-[300px] py-20 bg-[#E94D35] flex justify-center md:justify-between text-xl text-white items-center '>
      <h1 className='text-center'>&#169; 2022 Oudini - Site fait à la 👋 avec Nextjs</h1>
      <div className='md:flex gap-14 hidden '>
          <Link className=' cursor-pointer' href={'/webdev'}>{t('webdev')}</Link>
          <Link className=' cursor-pointer' href={'/design'}>{t('design')}</Link>
          <Link className=' cursor-pointer' href={'/about'}>{t('Mensions légales')}</Link>
      </div>
      
    </div>
  )
}

export default Footer;
