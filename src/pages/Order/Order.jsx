import React, { useState, useEffect } from 'react';
import orderCover from "../../assets/shop/banner2.jpg";
import CTAParalax from '../Shared/CTAParalax/CTAParalax';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu/useMenu';
import TabItem from './TabItem';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']; // Fix 'desserts' to 'dessert' for consistency
    const { category } = useParams();
    
    // Set initial tab index
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    // ✅ Update tab index when route changes
    useEffect(() => {
        setTabIndex(categories.indexOf(category));
    }, [category]);

    const [menu, loading] = useMenu();
    if (loading) return <p>Loading</p>;

    const salads = menu.filter(item => item.category === "salad");
    const pizzas = menu.filter(item => item.category === "pizza");
    const soups = menu.filter(item => item.category === "soup");
    const desserts = menu.filter(item => item.category === "dessert");
    const drinks = menu.filter(item => item.category === "drinks");

    return (
        <div className='mb-4'>
                <Helmet> 
                          <title>Bisto Boss | Home</title>
              </Helmet>
                        
            <CTAParalax
                title={"OUR SHOP"}
                subTitle={"Would you like to try a dish?"}
                img1={orderCover}
            />

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="flex justify-center space-x-4 my-4">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel><TabItem items={salads} /></TabPanel>
                <TabPanel><TabItem items={pizzas} /></TabPanel>
                <TabPanel><TabItem items={soups} /></TabPanel>
                <TabPanel><TabItem items={desserts} /></TabPanel>
                <TabPanel><TabItem items={drinks} /></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
