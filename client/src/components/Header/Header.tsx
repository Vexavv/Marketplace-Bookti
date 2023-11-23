import React from 'react';
import styles from './Header.module.scss';
import {Link} from "react-router-dom";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import Select from "./Select/Select";

import {useTranslation} from "react-i18next";

//----------------------------------------
// interface Option {
//     value: string;
//     label: string;
//     flag: string;
// }
//----------------------------------------
const Header = () => {
    const {t} = useTranslation('header')

    //----------------------------------------
    // const options: Option[] = [
    //     { value: t('Select.uk'), label: t('Select.uk'), flag: '/select/flag-ukraine.svg' },
    //     { value: t('Select.en'), label: t('Select.en'), flag: '/select/flag-ukraine.svg' },
    //     // Добавьте другие опции с флагами
    // ];
//----------------------------------------

    return (

        <header className={styles.Header}>
            <Container>
                <div className={styles.HeaderWrapper}>
                    <div><Link to='/'><img className={styles.HeaderWrapperLogo} src="/header/Logo.png"
                                           alt="Logo"/></Link></div>
                       <img onClick={() => {
                        console.log('open mobile menu')
                    }} className={styles.HeaderWrapperBurger} src="/header/burger.png" alt="burger"/>
                    <div className={styles.HeaderWrapperMenu}>
                        <Navigation/>
                        <Select />
                        <div className={styles.HeaderWrapperMenuButtonGroup}>
                            <button className={styles.HeaderWrapperMenuButtonGroupButtonLogin}>{t('Button.logOut')}</button>
                            <button className={styles.HeaderWrapperMenuButtonGroupButtonLogin}>{t('Button.login')}</button>

                        </div>
                    </div>

                </div>


            </Container>
        </header>


    );
};

export default Header;