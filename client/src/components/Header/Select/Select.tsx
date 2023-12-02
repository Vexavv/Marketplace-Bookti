import React, {useEffect, useState} from 'react';
import styles from './Select.module.scss'
import i18next from "i18next";
import {LOCALS} from "../../../i18n/constants";
import {useTranslation} from "react-i18next";

const Select = () => {

    const [selectValue, setSelectValue] = useState(() => {
        const storageValue = localStorage.getItem('language') || 'uk';
        return storageValue;
    });

    const { t } = useTranslation('header');

    useEffect(() => {
        const handleLanguageChange = (newLanguage:string) => {
            setSelectValue(newLanguage);
        };

        i18next.on('languageChanged', handleLanguageChange);

        return () => {
            i18next.off('languageChanged', handleLanguageChange);
        };
    }, []);

    const onClickLanguageChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        const language = e.target.value;
        i18next.changeLanguage(language);
        localStorage.setItem('language', language);
        e.target.blur();
    };



    return (
<div className={styles.Wrapper}>
    {i18next.language === LOCALS.UK ? <img src="/select/flag-ukraine.svg" alt="Flag-uk"/> : <img src="/select/flag-en.svg" alt="Flag-en"/> }
    <select className={styles.WrapperSelect} name="select" value={selectValue} onChange={onClickLanguageChange}>
        <option value="uk" disabled={i18next.language === LOCALS.UK}>{t('Select.uk')}</option>
        <option value="en" disabled={i18next.language === LOCALS.EN}>{t('Select.en')}</option>
    </select>
    <div>Come</div>
</div>

    );
};

export default Select;


