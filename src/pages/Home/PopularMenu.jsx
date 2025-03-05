import React, { useEffect, useState } from 'react'
 
import MenuItem from '../Shared/MenuItem/MenuItem'
import SectionHeading from '../Shared/SectionHeading/SectionHeading'
import Foodcard from '../Shared/FoodCard/Foodcard'
import useMenu from '../../hooks/useMenu/useMenu'
 

const PopularMenu = ({heading,subHeading, view}) => {
   const [menu, loading] = useMenu();

   if(loading) return <p>Loading</p>

   const popularItems = menu.filter(item=> item.category==='popular')
   const popularSalads = menu.filter(item=> item.category==='salad')

  return (
    <section className='my-10'>
          <SectionHeading
      subHeading={subHeading} 
      heading={heading}>

      </SectionHeading>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>

      { popularItems.map(item=>view ==="list"?<MenuItem key={item._id}
      item={item}>

      </MenuItem>: "")}
    
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-4'>

      { popularSalads.slice(0,3).map(item=>view ==="card"?<Foodcard key={item._id}
      item={item}></Foodcard>: "")}

    
      </div>
    <div className='text-center'>
        {
            view ==="list" &&   <button className="btn btn-outline border-0 border-b-4 border-b-black text-center">Order Now</button>
        }
     
    </div>
        

    </section>
  )
}

export default PopularMenu
