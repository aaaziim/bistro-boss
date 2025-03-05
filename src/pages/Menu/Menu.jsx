import React from 'react'
import { Helmet  } from 'react-helmet-async';
 
import PopularMenu from '../Home/PopularMenu';
import img1 from "../../assets/menu/banner3.jpg"
import img2 from "../../assets/menu/dessert-bg.jpeg"
import img3 from "../../assets/menu/pizza-bg.jpg"
import img4 from "../../assets/menu/salad-bg.jpg"
import img5 from "../../assets/menu/soup-bg.jpg"
import CTAParalax from '../Shared/CTAParalax/CTAParalax';



const Menu = () => {
  return (
    <div>
         <Helmet >
        <title>Bisto Boss | Menu</title>
      </Helmet>
      

      <CTAParalax
      title={"Our Menu"}
      subTitle={"Would you like to try a dish?"}
        img1={img1}
      ></CTAParalax>

    <PopularMenu
     heading={"TODAY'S OFFER"}
     subHeading={"Don't miss"}view={"list"}></PopularMenu>
      <CTAParalax
      title={"Desserts"}
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        img1={img2}
      ></CTAParalax>

    <PopularMenu
     heading={"Desserts"}
     subHeading={"Don't miss"}view={"list"}></PopularMenu>


<CTAParalax
      title={"Pizza"}
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        img1={img3}
      ></CTAParalax>

    <PopularMenu
     heading={"Pizza"}
     subHeading={"Don't miss"}view={"list"}></PopularMenu>

<CTAParalax
      title={"Salad"}
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        img1={img4}
      ></CTAParalax>

    <PopularMenu
     heading={"Salad"}
     subHeading={"Don't miss"}view={"list"}></PopularMenu>

<CTAParalax
      title={"Soup"}
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        img1={img5}
      ></CTAParalax>

    <PopularMenu
     heading={"Soup"}
     subHeading={"Don't miss"}view={"list"}></PopularMenu>


 
      
    </div>
  )
}

export default Menu
