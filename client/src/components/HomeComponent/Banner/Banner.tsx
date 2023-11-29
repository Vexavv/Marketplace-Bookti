import React from 'react';
import styles from './Banner.module.scss'
import Container from "../../Container/Container";
import Button from "../../Button/Button";
import {useTranslation} from "react-i18next";

const Banner = () => {
    const {t} = useTranslation('home')
    return (
        <div className={styles.Banner}>
            <Container>
                <div className={styles.BannerWrapper}>
                    <h1 className={styles.BannerWrapperText}>
                        {t('Banner.slogan')}
                    </h1>
                    <div className={styles.BannerWrapperImage}>
                        <img className={styles.BannerWrapperImageImg} src="/home/OBJECTS.png" alt="book"/>
                    </div>
                    <div className={styles.BannerWrapperButton}>
                        <Button name='BannerButton'>{t('Banner.button')}</Button>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Banner;