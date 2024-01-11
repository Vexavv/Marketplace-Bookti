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
import PopperUser from "../MyAccountComponent/PopperUser/PopperUser";
import Communication from "./Сommunication/Сommunication";

const Header = () => {
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
                        {/*<div className={styles.HeaderWrapperMenuNav}>*/}
                        <Navigation/>
                        {/*</div>*/}
                        <div className={styles.HeaderWrapperMenuCommunication}>
                            <Communication/>
                        </div>

                        <div className={styles.HeaderWrapperMenuSelect}>
                            <Select/>
                        </div>

                        <div>
                            <PopperUser/>
                        </div>

                    </div>
                </div>
            </Container>
            <MobileMenu mobileMenuOpen={mobileMenuOpen} mobileMenuToggle={mobileMenuToggle}/>
        </header>
    );
};

export default Header;