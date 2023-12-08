import React from 'react';
import styles from './Registration.module.scss'
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Container from "../../components/Container/Container";
import {Link} from "react-router-dom";
import Logo from "../../components/Header/Logo/Logo";
import LoginFormm from "../../components/RegistrationForm/LoginForm/LoginFormm";
const Registration = () => {
    return (
        <div>
            <Container>
                <div className={styles.Wrapper}>
                    <div className={styles.WrapperArrow}>
                        <img src="/login/arrow.svg" alt="arrow"/>
                        <Link className={styles.WrapperArrowLink} to='/'>Назад</Link>
                    </div>
                    <div className={styles.WrapperForm}>

                        <div className={styles.WrapperFormLogo}>
                            <Logo mobile={true}/>
                        </div>
                        <p className={styles.WrapperFormGreetings}>Ласкаво просимо</p>
                        <LoginFormm registration/>

                    </div>
                    <div className={styles.WrapperImage}>
                        <img src="/login/books.png" alt="books"/>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Registration;