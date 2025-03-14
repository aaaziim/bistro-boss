import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../provider/AuthProvider'

import useCart from '../../../hooks/useMenu/useCart';

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);


 const [cart] = useCart()

  const handleLogOut =() =>{
    logOut()
    .then(()=>{})
    .catch((err)=>{console.log(err)})
  }
    const navOptions = <>
  <li>
    <Link to="/">Home</Link>
  </li>
      
      <li>
      <Link to="/menu">Our Menu</Link>
      </li>
      <li>
      <Link to="/order/salad">Order</Link>
      </li>
     {
      user? (
        <>
       
        <li>
          <Link to="/dashboard/cart"> 
  Cart <div className="badge badge-sm badge-secondary">{cart.length}</div>
 </Link>
        </li>
        <li>
          <Link onClick={handleLogOut}  >Logout</Link>
        </li>
        </>
      ) : (
        <>
    <li>
      <Link to="/signin">Sign In</Link>
      </li>
      <li>
      <Link to="/signup">Sign Up</Link>
      </li>
        </>
      )
     }
    </>
  return (
    <div>
      <div className="navbar text-white fixed z-20 opacity-60 bg-black   shadow-sm container mx-auto">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow text-white">
       {navOptions}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl">Bistro Boss</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
    {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 text-black shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar
