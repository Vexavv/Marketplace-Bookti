import React from 'react';
import styles from './CallToLogin.module.scss'
import {useTranslation} from "react-i18next";
import Container from "../../../uiComponent/Container/Container";
import HTag from "../../../uiComponent/HTag/HTag";
import Button from "../../../uiComponent/Button/Button";
import {Link} from "react-router-dom";
const CallToLogin = () => {
    const {t} = useTranslation('home')
    return (
        <div className={styles.Banner}>
            <Container>
                <div className={styles.BannerWrapper}>
                    <div className={styles.BannerWrapperTitle}>
                        <HTag tag='h2Grey'>{t('CallToLogin.title')}</HTag>
                    </div>

                    <p className={styles.BannerWrapperText}>{t('CallToLogin.text')}</p>
                   <Link to='/registration'><Button>{t('CallToLogin.button')}</Button></Link>
                </div>
            </Container>
        </div>
    );
};

export default CallToLogin;