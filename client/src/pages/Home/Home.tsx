import React from 'react';
import styles from './Home.module.scss'
import Banner from "../../components/Banner/Banner";
import Search from "../../components/Search/Search";
const Home = () => {
    return (
        <div>
            <Banner/>
            <Search/>
        </div>
    );
};

export default Home;