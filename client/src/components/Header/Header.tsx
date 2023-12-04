import React, {useState} from 'react';
import styles from './Header.module.scss';
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import Select from "./Select/Select";
import {useTranslation} from "react-i18next";
import Button from "../Button/Button";
import MobileMenu from "./MobileMenu/MobileMenu";
import Logo from "./Logo/Logo";
import {Link} from "react-router-dom";


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
                    <Link to='/'>
                        <Logo/>
                    </Link>

                    <img onClick={mobileMenuToggle} className={styles.HeaderWrapperBurger} src="/header/burger.png"
                         alt="burger"/>

                    <div className={styles.HeaderWrapperMenu}>
                        <Navigation/>
                        <Select/>
                        <div className={styles.HeaderWrapperMenuButtonGroup}>
                            <Link to='/login'>
                                <Button name='HeaderButton'>{t('Button.login')}</Button>
                            </Link>
                            <Link to='/registration'>
                                <Button name='HeaderButton'>{t('Button.registration')}</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
            <MobileMenu mobileMenuOpen={mobileMenuOpen} mobileMenuToggle={mobileMenuToggle}/>
        </header>
    );
};

export default Header;