import React from 'react';
import styles from './Footer.module.scss'
import Container from "../Container/Container";
import {format} from 'date-fns'
import Navigation from "../Navigation/Navigation";
import PrivacyList from './PrivacyList/PrivacyList';
import SocialNetworks from "./SocialNetworks/SocialNetworks";
import Subscription from "./Subscription/Subscription";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation('footer')
    return (
        <footer className={styles.Footer}>
            <Container>
                <div className={styles.FooterContent}>
                    <div className={styles.FooterContentMenu}>
                        <h3 className={styles.FooterContentMenuTitle}>{t('Title.information')}</h3>
                        <Navigation footer={true} />
                    </div>
                    <div className={styles.FooterContentPrivacy}>
                        <h3 className={styles.FooterContentMenuTitle}>{t('Title.privacy policy')}</h3>
                        <PrivacyList/>
                    </div>
                    <div className={styles.FooterContentSocial}>
                        <h3 className={styles.FooterContentMenuTitle}>{t('Title.social networks')}</h3>
                        <SocialNetworks/>
                    </div>
                    <div className={styles.FooterContentSubscription}>
                        <h3 className={styles.FooterContentMenuTitle}>{t('Title.subscribe')}</h3>
                        <Subscription/>

                    </div>
                    <div className={styles.FooterContentCopyright}>
                        <p className={styles.FooterContentCopyrightText}> &#169; Copyright {format(new Date(), 'yyyy')}</p>
                    </div>
                </div>


            </Container>

        </footer>
    );
};

export default Footer;