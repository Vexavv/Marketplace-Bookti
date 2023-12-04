import React from 'react';
import styles from './LogIn.module.scss'
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Container from "../../components/Container/Container";

const LogIn = () => {
    return (
        <div className={styles.Login}>
            <Container>
                <RegistrationForm/>
            </Container>

        </div>
    );
};

export default LogIn;