import React from 'react';
import styles from './LogIn.module.scss'
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Container from "../../components/Container/Container";
import {Link} from "react-router-dom";
import Logo from "../../components/Header/Logo/Logo";
import LoginFormm from "../../components/RegistrationForm/LoginForm/LoginFormm";
import {useTranslation} from "react-i18next";
const LogIn = () => {
    const {t} = useTranslation('login')
    return (
        <div>
            <Container>
                <div className={styles.Wrapper}>
                    <div className={styles.WrapperArrow}>
                        <img src="/login/arrow.svg" alt="arrow"/>
                        <Link className={styles.WrapperArrowLink} to='/'>{t('arrow')}</Link>
                    </div>
                    <div className={styles.WrapperForm}>

                        <div className={styles.WrapperFormLogo}>
                            <Logo mobile={true}/>
                        </div>
                        <p className={styles.WrapperFormGreetings}>{t('title')}</p>
                        <LoginFormm />

                    </div>
                    <div className={styles.WrapperImage}>
                        <img src="/login/books.png" alt="books"/>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default LogIn;