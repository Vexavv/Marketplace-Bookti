import React from 'react';
import styles from './Home.module.scss'
import Banner from "../../components/HomeComponent/Banner/Banner";
import Search from "../../components/HomeComponent/Search/Search";
import Description from "../../components/HomeComponent/Description/Description";
import HowWork from "../../components/HomeComponent/HowWork/HowWork";
import WhatCategories from "../../components/HomeComponent/WhatCategories/WhatCategories";
import CallToLogin from "../../components/HomeComponent/CallToLogin/CallToLogin";
import BlogCarousel from "../../components/HomeComponent/BlogCarousel/BlogCarousel";

const Home = () => {

    return (
        <div>
            <Banner/>
            <Search/>
            <Description/>
            <HowWork/>
            <WhatCategories/>
            <BlogCarousel/>
            <CallToLogin/>
        </div>
    );
};

export default Home;