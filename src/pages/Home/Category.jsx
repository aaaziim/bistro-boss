import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import img1 from "../../assets/home/slide1.jpg"
import img2 from "../../assets/home/slide2.jpg"
import img3 from "../../assets/home/slide3.jpg"
import img4 from "../../assets/home/slide4.jpg"
import img5 from "../../assets/home/slide5.jpg"
import SectionHeading from '../Shared/SectionHeading/SectionHeading';
 

const Category = () => {
  return (
   <section className='my-10'>
      <SectionHeading
      subHeading={"From 11:00am to 10:00pm"} 
      heading={"Order Online"}>

      </SectionHeading>
     <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='relative'>
                <img className='rounded-lg' src={img1} alt="slide1" />
                <p className='text-3xl uppercase  text-white absolute bottom-2 left-4'>Salad</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className='rounded-lg' src={img2} alt="slide2" />
                <p className='text-3xl uppercase  text-white absolute bottom-2 left-4'>Soup</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className='rounded-lg' src={img3} alt="slide3" />
                <p className='text-3xl uppercase  text-white absolute bottom-2 left-4'>Desert</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className='rounded-lg' src={img4} alt="slide4" />
                <p className='text-3xl uppercase  text-white absolute bottom-2 left-4'>Pizza</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className='rounded-lg' src={img5} alt="slide5" />
                <p className='text-3xl uppercase  text-white absolute bottom-2 left-4'>Salad</p>
            </div>
        </SwiperSlide>
      </Swiper>
   </section>
  )
}

export default Category
