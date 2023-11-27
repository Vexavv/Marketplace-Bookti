import React from 'react';
import styles from './Home.module.scss'
import Banner from "../../components/Banner/Banner";
import Search from "../../components/Search/Search";
import Description from "../../components/Description/Description";
const Home = () => {
    return (
        <div>
            <Banner/>
            <Search/>
            <Description/>
        </div>
    );
};

export default Home;