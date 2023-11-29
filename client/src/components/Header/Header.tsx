import React, {useState} from 'react';
import styles from './Header.module.scss';
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import Select from "./Select/Select";
import {useTranslation} from "react-i18next";
import Button from "../Button/Button";
import MobileMenu from "./MobileMenu/MobileMenu";
import Logo from "./Logo/Logo";

const Header = () => {
    const {t} = useTranslation('header')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const mobileMenuToggle = () => {
        setMobileMenuOpen(current => !current)
    }

    return (

        <header className={styles.Header}>
            <Container>
                <div className={styles.HeaderWrapper}>
                    <Logo/>
                    <img onClick={mobileMenuToggle} className={styles.HeaderWrapperBurger} src="/header/burger.png"
                         alt="burger"/>

                    <div className={styles.HeaderWrapperMenu}>
                        <Navigation/>
                        <Select/>
                        <div className={styles.HeaderWrapperMenuButtonGroup}>
                            <Button name='HeaderButton' onClick={() => {
                                console.log('Enter')
                            }}>{t('Button.login')}</Button>
                            <Button name='HeaderButton' onClick={() => {
                                console.log('Login')
                            }}>{t('Button.registration')}</Button>
                        </div>
                    </div>
                </div>
            </Container>
            <MobileMenu mobileMenuOpen={mobileMenuOpen} mobileMenuToggle={mobileMenuToggle}/>
        </header>
    );
};

export default Header;