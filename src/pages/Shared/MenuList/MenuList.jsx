import React, { useEffect, useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading';
import MenuItem from '../MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu/useMenu';
import CTAParalax from '../CTAParalax/CTAParalax';
import { Link } from 'react-router-dom';
 
 

const MenuList = ({title, subTitle,  category, img}) => {

  const [menu, loading] = useMenu();

  if(loading) return <p>Loading</p>

  const items = menu.filter(item=> item.category===category)

  return (
    <section className='my-10'>
          
      <CTAParalax
      title={title}
      subTitle={subTitle}
        img1={img}
      ></CTAParalax>
     
     {
      category ==="popular" &&  <SectionHeading
            heading={"TODAY'S OFFER"}
            subHeading={"Don't miss"}>
      
            </SectionHeading>
     }

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>

      { items.map(item=> <MenuItem key={item._id}
      item={item}>

      </MenuItem> )}
    
      </div>
 
    <div className='text-center'>
       
         <Link to={`/order/${category}`}>
             <button className="btn btn-outline border-0 border-b-4 border-b-black text-center">Order Now</button>
         </Link>
         
     
    </div>
        

    </section>
  )
}

export default MenuList
