import React from 'react';
import styles from './Header.module.scss';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Header = () => {
    const {t} = useTranslation('header')
    console.log(t('Button.logOut'))
    return (
        <header>
            <div><Link to='/'>Logo</Link></div>
            Header


        </header>
    );
};

export default Header;