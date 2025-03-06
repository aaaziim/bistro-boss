import React from 'react'
import {   TabPanel } from 'react-tabs';
import Foodcard from '../Shared/FoodCard/Foodcard';
const TabItem = ({items}) => {
  return (
    
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    items.map(item => (
                        <Foodcard key={item._id} item={item}></Foodcard>
                    ))
                }
      </div>
     
  )
}

export default TabItem
