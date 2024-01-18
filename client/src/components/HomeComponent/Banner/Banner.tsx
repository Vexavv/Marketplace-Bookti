import React from 'react';
import styles from './Banner.module.scss'
import Container from "../../../uiComponent/Container/Container";
import Button from "../../../uiComponent/Button/Button";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hook";
import {openModal} from "../../../store/slices/modalSlice";

const Banner = () => {
    const {t} = useTranslation('home')
    const dispatch = useAppDispatch()
    const loading = useAppSelector(state => state.auth.loading)
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

                            <Link to="/forum">
                                <Button name='BannerButton'>{t('Banner.button')}</Button>
                            </Link>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;