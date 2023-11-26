import React from 'react';
import styles from './Banner.module.scss'
import Container from "../Container/Container";
import Button from "../Button/Button";
const Banner = () => {
    return (
        <div className={styles.Banner}>
            <Container>
                <h1 className={styles.BannerText}>
                    Спілкуйся за допомогою сторінок, поділися своєю історією
                </h1>
                <img className={styles.BannerImg} src="/home/OBJECTS.png" alt="book"/>
                <div>
                    <Button name='BannerButton'>Додати книгу</Button>
                </div>

            </Container>
        </div>
    );
};

export default Banner;