import React from 'react';
import styles from './Subscription.module.scss'
import Button from "../../Button/Button";
import {useTranslation} from "react-i18next";


const Subscription = () => {
    const {t} = useTranslation('footer')
    return (
        <div className={styles.Subscription}>
            <input className={styles.SubscriptionInput} type="text" placeholder={t('Placeholder')}/>
            <Button>{t("Button")}</Button>
        </div>
    );
};

export default Subscription;