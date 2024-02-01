import React from 'react';
import styles from './RenamePassword.module.scss'
import {useTranslation} from "react-i18next";
import Container from "../../uiComponent/Container/Container";
import {Link} from "react-router-dom";
import PasswordForm from "../../components/RegistrationForm/PasswordForm/PasswordForm";


const RenamePassword = () => {

    const {t} = useTranslation('login')
    return (
        <>
            <Container>
                <div className={styles.Wrapper}>
                    <div className={styles.WrapperArrow}>
                        <Link className={styles.WrapperArrowLink} to='/'> <img src="/login/arrow.svg"
                                                                               alt="arrow"/>{t('arrow')}</Link>
                    </div>
                    <div className={styles.WrapperForm}>
                        <p className={styles.WrapperFormGreetings}>{t('titleRenamePassword')}</p>
                        <p className={styles.WrapperFormText}>{t('textRenamePassword')}</p>
                        <PasswordForm/>
                    </div>
                    <div className={styles.WrapperImage}>
                        <img src="/login/books.png" alt="books"/>
                    </div>
                </div>
            </Container>

        </>
    );
};

export default RenamePassword;