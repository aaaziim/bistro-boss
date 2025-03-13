import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex gap-2 flex-col md:flex-row'>
        <div className='w-64 min-h-screen bg-orange-400  text-center text-white text-2xl'>
            <div>
            <h1 className='font-bold text-4xl py-4 bg-black w-full'>Dashboard</h1>
            <p className='font-semibold bg-blue-300 py-2'>Welcome to the Dashboard!</p>
            </div>
            <ul className='mt-4 space-y-2 flex flex-col px-2'>
            <li className='bg-gray-700 font-semibold px-4 py-2 rounded-2xl'><NavLink to="/dashboard/userhome">User Home</NavLink></li>
            <li className='bg-gray-700 font-semibold px-4 py-2 rounded-2xl'><NavLink to="/dashboard/reservation">Reservation</NavLink></li>
               <li className='bg-gray-700 font-semibold px-4 py-2 rounded-2xl'><NavLink to="/dashboard/review">Add Review</NavLink></li>
               <li className='bg-gray-700 font-semibold px-4 py-2 rounded-2xl'><NavLink to="/dashboard/cart">My Cart</NavLink></li>
               
               <li className='bg-gray-700 font-semibold px-4 py-2 rounded-2xl'><NavLink to="/dashboard/booking">My Bookings</NavLink></li>

               <div className='divider'>

               </div>

               <li className='bg-gray-700 font-semibold px-4 py-2 rounded-2xl'><NavLink to="/">Home</NavLink></li>
               <li className='bg-gray-700 font-semibold px-4 py-2 rounded-2xl'><NavLink to="/menu">Menu</NavLink></li>
               <li className='bg-gray-700 font-semibold px-4 py-2 rounded-2xl'><NavLink to="/order/salad">Order</NavLink></li>
               
            </ul>
        </div>
        <div className='flex-1'>
            <Outlet></Outlet>
        </div>
      
    </div>
  )
}

export default Dashboard
