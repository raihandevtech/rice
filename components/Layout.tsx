import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

type  ILayoutProps  = {
    children: ReactNode;
  }


function Layout ( {children} : ILayoutProps ) : JSX.Element {
  return (
    <>
    <Header />
        { children }
    <Footer />
    </>
    
  )
}

export default Layout