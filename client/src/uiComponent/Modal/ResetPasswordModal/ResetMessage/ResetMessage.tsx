import React from 'react';
import styles from './ResetMessage.module.scss'
import {useTranslation} from "react-i18next";
const ResetMessage = () => {
    const {t} = useTranslation(['login', 'modal']);

    return (
        <div className={styles.Message}>
            <img src="/login/check-circle.svg" alt="check-circle"/>
            <p className={styles.MessageText}>{t('modal:ResetMessage.text')}</p>
        </div>
    );
};

export default ResetMessage;