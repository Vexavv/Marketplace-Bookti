import React from 'react';
import styles from './RegistrationForm.module.scss'
import Logo from "../Header/Logo/Logo";
import LoginFormm from "./LoginForm/LoginFormm";
import {Link} from "react-router-dom";
import {RegistrationFormProps} from "./RegistrationForm.props";

const RegistrationForm = ({registration}:RegistrationFormProps) => {
    return (
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
    );
};

export default RegistrationForm;