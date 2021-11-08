/* import external modules */
import React from 'react'

/* import internal modules */
import Header from '../Header/index'
import Footer from '../Footer/index'
import Main from "../Main/index";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        {children} 
      </Main>
      <Footer />
    </>
  )
}

export default Layout
