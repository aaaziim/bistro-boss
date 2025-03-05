import React from 'react'

const Foodcard = ({item}) => {
    const { name, recipe, category, image, price  } = item;
  return (
    <div className='bg-gray-200'>
      <img className='w-full' src={image} alt="" />
      <div className='text-center p-4'>
        <h3 className="text2xl font-semibold">{name}</h3>
        <p>{recipe}</p>
        <button className="btn btn-outline border-0 border-b-4 border-b-black bg-lime-200 hover:bg-green-400 text-center my-2">Add to cart</button>
      </div>
    </div>
  )
}

export default Foodcard
