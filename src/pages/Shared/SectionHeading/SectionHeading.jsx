import React from 'react'

const SectionHeading = ({heading, subHeading}) => {
  return (
    <div className='text-center space-y-2  md:w-4/12 mx-auto my-4'>
        <p className='text-yellow-600'>--- {subHeading} ---</p>
        <h2 className='text-3xl font-bold uppercase border-y-2 py-2'>{heading}</h2>
    </div>
  )
}

export default SectionHeading
