import React from 'react';
import styles from './Header.module.scss'
import {useTranslation} from "react-i18next";

const Header = () => {
    const {t} = useTranslation('header')
    console.log(t('Button.logOut'))
    return (
        <header>
            Header
            <button>{t('Button.logOut')}</button>

        </header>
    );
};

export default Header;