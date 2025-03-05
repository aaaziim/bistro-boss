import React, { useEffect, useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading';
import MenuItem from '../MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu/useMenu';
 
 

const MenuList = ({heading,subHeading, category}) => {

  const [menu, loading] = useMenu();

  if(loading) return <p>Loading</p>

  const items = menu.filter(item=> item.category===category)

   
  return (
    <section className='my-10'>
          <SectionHeading
      subHeading={subHeading} 
      heading={heading}>

      </SectionHeading>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>

      { items.map(item=> <MenuItem key={item._id}
      item={item}>

      </MenuItem> )}
    
      </div>
 
    <div className='text-center'>
       
             <button className="btn btn-outline border-0 border-b-4 border-b-black text-center">Order Now</button>
         
     
    </div>
        

    </section>
  )
}

export default MenuList
