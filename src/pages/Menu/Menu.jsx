import React from 'react'
import { Helmet  } from 'react-helmet-async';
 
import MenuList from './../Shared/MenuList/MenuList';
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

    <MenuList
     heading={"TODAY'S OFFER"}
     subHeading={"Don't miss"} category={"popular"}></MenuList>
      <CTAParalax
      title={"Desserts"}
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        img1={img2}
      ></CTAParalax>

    <MenuList
     heading={"Desserts"}
     subHeading={"Don't miss"} category={"dessert"}></MenuList>


<CTAParalax
      title={"Pizza"}
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        img1={img3}
      ></CTAParalax>

    <MenuList
     heading={"Pizza"}
     subHeading={"Don't miss"} category={"pizza"}></MenuList>

<CTAParalax
      title={"Salad"}
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        img1={img4}
      ></CTAParalax>

    <MenuList
     heading={"Salad"}
     subHeading={"Don't miss"} category={"salad"}></MenuList>

<CTAParalax
      title={"Soup"}
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        img1={img5}
      ></CTAParalax>

    <MenuList
     heading={"Soup"}
     subHeading={"Don't miss"} category={"soup"}></MenuList>


 
      
    </div>
  )
}

export default Menu
