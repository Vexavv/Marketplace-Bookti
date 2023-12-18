import React from 'react';
import styles from './Banner.module.scss'
import Container from "../../Container/Container";
import Button from "../../Button/Button";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hook";
import {openModal} from "../../../store/slices/modalSlice";

const Banner = () => {
    const {t} = useTranslation('home')
    const dispatch = useAppDispatch()
    const googleLoading = useAppSelector(state => state.auth.loadingGoogle)
//----------------Modal------------------------------------
    const handleOpenModal = () => {
        dispatch(openModal({type: 'addBook', props: {key: 'value'}}));
    }
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
                        {googleLoading ?
                            <Button name='BannerButton' onClick={handleOpenModal}>{t('Banner.button')}</Button> :
                            <Link to="/registration">
                                <Button name='BannerButton'>{t('Banner.button')}</Button>
                            </Link>
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;