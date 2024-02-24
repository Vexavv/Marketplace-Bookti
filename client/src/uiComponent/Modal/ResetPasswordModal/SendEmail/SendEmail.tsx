import React from 'react';
import styles from './SendEmail.module.scss'
import {useTranslation} from "react-i18next";

const SendEmail = () => {
    const {t} = useTranslation(['login', 'modal']);

    return (
        <div className={styles.Send}>
            <img src="/login/check-circle.svg" alt="check-circle"/>
            <p className={styles.SendText}>На вашу електронну пошту надіслано листа для зміни пароля</p>
        </div>
    );
};

export default SendEmail;