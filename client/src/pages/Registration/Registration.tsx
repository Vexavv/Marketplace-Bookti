import React from 'react';
import styles from './Registration.module.scss'
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Container from "../../components/Container/Container";
import {Link, Navigate} from "react-router-dom";
import Logo from "../../components/Header/Logo/Logo";
import LoginFormm from "../../components/RegistrationForm/LoginForm/LoginFormm";
import {useTranslation} from "react-i18next";
import {useAppSelector} from "../../hook";

const Registration = () => {
    const {t} = useTranslation('login')
    const loading = useAppSelector(state => state.auth.loading)
    return (
        <>
            {loading && <Navigate to="/account" replace/>}
            <div>
                <Container>
                    <div className={styles.Wrapper}>
                        <div className={styles.WrapperArrow}>
                            <Link className={styles.WrapperArrowLink} to='/'> <img src="/login/arrow.svg"
                                                                                   alt="arrow"/>{t('arrow')}</Link>
                        </div>
                        <div className={styles.WrapperForm}>

                            <div className={styles.WrapperFormLogo}>
                                <Logo mobile={true}/>
                            </div>
                            <p className={styles.WrapperFormGreetings}>{t('titleRegistration')}</p>
                            <LoginFormm registration/>

                        </div>
                        <div className={styles.WrapperImage}>
                            <img src="/login/books.png" alt="books"/>
                        </div>
                    </div>
                </Container>

            </div>

        </>

    );
};

export default Registration;