import React, {useState} from 'react';
import styles from './Subscription.module.scss'
import Button from "../../Button/Button";
import {useTranslation} from "react-i18next";


const Subscription = () => {
    const [email, setEmail] = useState("");

    const handleEmailChange = (event:any) => {
        setEmail(event.target.value);
    };
    const handleSubmit = async (event:any) => {
        event.preventDefault();

    };
    const {t} = useTranslation('footer')
    return (
        <form className={styles.Subscription} onSubmit={handleSubmit}>
            <input className={styles.SubscriptionInput}  onChange={handleEmailChange} required={true} type='email'
                   value={email} placeholder={t('Placeholder')}/>
            <Button  type='submit'>{t("Button")}</Button>
        </form>
    );
};

export default Subscription;