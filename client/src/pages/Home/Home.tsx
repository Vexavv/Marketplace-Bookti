import React from 'react';
import styles from './Home.module.scss'
import Banner from "../../components/Banner/Banner";
import Search from "../../components/Search/Search";
import Description from "../../components/Description/Description";
import HowWork from "../../components/HowWork/HowWork";
const Home = () => {
    return (
        <div>
            <Banner/>
            <Search/>
            <Description/>
            <HowWork/>
        </div>
    );
};

export default Home;