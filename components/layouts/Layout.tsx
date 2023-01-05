import React, { ReactNode } from 'react';
import Navbar from '../navbar/Navbar';

interface LayoutProps{
  children: ReactNode
}
function Layout({children}: LayoutProps) {
  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout;