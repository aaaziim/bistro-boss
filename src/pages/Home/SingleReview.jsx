 
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
 

import { FaUserSecret } from "react-icons/fa";
const SingleReview = ({review}) => {

    const {name, details, rating} = review;
  
  return (
    <div className='my-10 space-y-2 flex flex-col  items-center text-center'>


<Rating
      style={{ maxWidth: 180 }}
      value={rating}
     readOnly
    />
        <h1 className="text-7xl font-bold text-center"><FaUserSecret /></h1>


     <p className='font-light'>{details}</p>
     <h3 className="text-2xl text-orange-400 uppercase font-light">
        {name}
     </h3>
    </div>
  )
}

export default SingleReview
