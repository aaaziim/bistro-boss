import React, { useEffect, useState } from 'react'
 
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

 

// import required modules
import { Navigation } from 'swiper/modules';
import SectionHeading from '../Shared/SectionHeading/SectionHeading';
import SingleReview from './SingleReview';
 

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
         .then(response => response.json())
         .then(data => setReviews(data))
         .catch(error => console.error('Error:', error))
    },[])
  return (
   <section className='my-10'>
     <SectionHeading
      subHeading={"What Our Clients Say"} 
      heading={"Testimonials"}>

      </SectionHeading>

      <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
      
      
    {
        reviews.map(review=>  <SwiperSlide  key={review._id}><SingleReview
            review={review}
            /></SwiperSlide>)
    }
    </Swiper>
      </div>
   </section>
  )
}

export default Testimonials
