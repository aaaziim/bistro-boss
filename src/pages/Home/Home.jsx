import React from 'react'
import Banner from './Banner'
import Category from './Category'
import CTAHero from './CTAHero'
import PopularMenu from './PopularMenu'
import Featured from './Featured'
import Testimonials from './Testimonials'
import { Helmet  } from 'react-helmet-async';
 
const Home = () => {
  return (
    <div>
         <Helmet >
              <title>Bisto Boss | Home</title>
            </Helmet>
            
      <Banner></Banner>
      <Category></Category>
      <CTAHero></CTAHero>
      <PopularMenu heading={"FROM OUR MENU"} subHeading={"Check it out"} view={"list"}></PopularMenu>
      <PopularMenu heading={"CHEF RECOMMENDS"} subHeading={"Should Try"} view={"card"}></PopularMenu>
     
      <div className='bg-black mb-10'>
          <p className="text-2xl text-white text-center px-10 py-6">Call Us: +88 0192345678910</p>
      </div>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  )
}

export default Home
