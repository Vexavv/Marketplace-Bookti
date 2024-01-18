import React, {useState} from 'react';
import styles from './Header.module.scss';
import Container from "../../uiComponent/Container/Container";
import Navigation from "../Navigation/Navigation";
import Select from "./Select/Select";
import MobileMenu from "./MobileMenu/MobileMenu";
import Logo from "./Logo/Logo";
import {Link} from "react-router-dom";
import PopperUser from "../MyAccountComponent/PopperUser/PopperUser";
import Communication from "./Сommunication/Сommunication";
import MobileUser from "./MobileUser/MobileUser";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const mobileMenuToggle = () => {
        setMobileMenuOpen(current => !current)
    }

    return (

        <header className={styles.Header}>
            <Container>
                <div className={styles.HeaderWrapper}>
                    <img onClick={mobileMenuToggle} className={styles.HeaderWrapperBurger} src="/header/burger.png"
                         alt="burger"/>
                    <Link to='/'>
                        <Logo/>
                    </Link>
                    <MobileUser/>
                    <div className={styles.HeaderWrapperMenu}>
                        <Navigation/>
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