import React from 'react'
import Navbar from '../pages/Shared/NavBar/NavBar'
import Footer from '../pages/Shared/Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'

const Main = () => {
  const location = useLocation()
  const noHeaderFooter = location.pathname.includes(('signin'))
  return (
    <div className='container mx-auto'>
      {
        noHeaderFooter ||     <Navbar></Navbar>
      }

      <Outlet></Outlet>
{    noHeaderFooter ||   <Footer></Footer>
    }
  </div>
  )
}

export default Main
