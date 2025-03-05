import React from 'react'
 
import img from "../../assets/home/featured.jpg"

import "./featured.css"
import SectionHeading from '../Shared/SectionHeading/SectionHeading'
const Featured = () => {
  return (
    <section className='my-10 featured text-white py-10 px-12'>
              <SectionHeading
      subHeading={"Check it out"} 
      heading={"FROM OUR MENU"}>

      </SectionHeading>

      <div className='md:flex justify-center items-center py-8 px-16 gap-4'>
        <div className='w-1/2'>
            <img className='rounded-2xl' src={img} alt="" />
        </div>
        <div className='w-1/2 space-y-2'>
            <h2>Aug 20, 2029</h2>
            <p className='uppercase'>Where can I get some?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat velit, harum iste repudiandae quas ad architecto laudantium repellendus ducimus, praesentium dolorem recusandae adipisci ab saepe consectetur tempore, sapiente sequi?  </p>
            <button className="btn btn-outline border-0 border-b-4 border-b-white">Order Now</button>
        </div>
      </div>

    </section>
  )
}

export default Featured
