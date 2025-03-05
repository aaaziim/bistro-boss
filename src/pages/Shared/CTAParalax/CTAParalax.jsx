 
import { Parallax, Background } from 'react-parallax';
const CTAParalax = ({title, subTitle, img1}) => {
  return (
    
    <Parallax
    blur={{ min: -50,max: 50}}
    bgImage={img1}
    bgImageAlt="the dog"
    strength={-200}
>
<div
  className="hero "
   >
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md uppercase text-white  px-20 py-4">
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      <p className="mb-5">
      {subTitle}
      </p>
       
    </div>
  </div>
</div>
</Parallax>


        

  )
}

export default CTAParalax
