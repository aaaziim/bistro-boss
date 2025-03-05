import React from 'react'
import bgImg from "../../assets/home/banner.jpg";


const CTAHero = () => {
  return (
    <div
    className="hero mb-10"
    style={{
      backgroundImage: `url(${bgImg})`,
    }}>
    <div className="hero-overlay "></div>
    <div className="hero-content bg-white  my-20 text-black text-center">
      <div className="max-w-md p-6 md:px-10">
        <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
        <p className="mb-5">
        Experience the finest flavors at Bistro Boss – where great taste meets great ambiance. Indulge in expertly crafted dishes made with fresh ingredients. Your perfect dining experience starts here!
        </p>
       
      </div>
    </div>
  </div>
  )
}

export default CTAHero
