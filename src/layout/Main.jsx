import React from 'react'
import Navbar from '../pages/Shared/NavBar/NavBar'
import Footer from '../pages/Shared/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='container mx-auto'>
    <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    
  </div>
  )
}

export default Main
