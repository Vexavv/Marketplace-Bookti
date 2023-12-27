import React from 'react';
import styles from './Description.module.scss'
import Container from "../../Container/Container";
import {Link} from "react-router-dom";
import HTag from '../../HTag/HTag'
import {useTranslation} from "react-i18next";

const Description = () => {
    const {t} = useTranslation('home')
    return (
        <Container>
            <div className={styles.Description}>
                <div className={styles.DescriptionImage}>
                    <img src="/home/Description-IMG.png" alt="Description"/>
                </div>
                <div className={styles.DescriptionContent}>
                    <div className={styles.DescriptionContentTitle}><HTag tag='h2Black'>BookBridgeHub</HTag></div>
                    <p className={styles.DescriptionContentText}>{t('Description.text')}</p>
                    <Link className={styles.DescriptionContentLink} to='/about'>{t('Description.link')}</Link>
                </div>
            </div>
        </Container>

    );
};

export default Description;