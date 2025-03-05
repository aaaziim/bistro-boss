import React from 'react'
import { Helmet  } from 'react-helmet-async';
 
import MenuList from './../Shared/MenuList/MenuList';
import img from "../../assets/menu/banner3.jpg"
import img2 from "../../assets/menu/dessert-bg.jpeg"
import img3 from "../../assets/menu/pizza-bg.jpg"
import img4 from "../../assets/menu/salad-bg.jpg"
import img5 from "../../assets/menu/soup-bg.jpg"
import CTAParalax from '../Shared/CTAParalax/CTAParalax';
import SectionHeading from '../Shared/SectionHeading/SectionHeading';



const Menu = () => {
  return (
    <div>
         <Helmet >
        <title>Bisto Boss | Menu</title>
      </Helmet>
      
     
 

    <MenuList
      category={"popular"}  title={"Our Menu"}
     subTitle={"Would you like to try a dish?"}
       img={img}></MenuList>
   

    <MenuList
     title={"Desserts"}
     subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
       img={img2}
    category={"dessert"}></MenuList>

 
    <MenuList
      title={"Pizza"}
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        img={img3}
   category={"pizza"}></MenuList>
 

    <MenuList
          title={"Salad"}
          subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            img={img4}
     category={"salad"}></MenuList>
 

    <MenuList
      title={"Soup"}
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        img={img5}
    category={"soup"}></MenuList>


 
      
    </div>
  )
}

export default Menu
