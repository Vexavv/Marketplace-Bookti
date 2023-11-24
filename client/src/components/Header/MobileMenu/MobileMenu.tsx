import React from 'react';
import MobileMenuProps from './MobileMenu.props'
import styles from './MobileMenu.module.scss'
import Drawer from '@mui/material/Drawer';
import Logo from "../Logo/Logo";
import Select from "../Select/Select";
import {Navigate} from "react-router";
import Navigation from "../../Navigation/Navigation";
const MobileMenu : React.FC<MobileMenuProps> = ({ mobileMenuOpen,mobileMenuToggle }) => {

    return (
        <Drawer anchor="left"
                component="div"
                variant="temporary"
                open={mobileMenuOpen}
                onClose={mobileMenuToggle}
                ModalProps={{ keepMounted: true }}
                SlideProps={{ timeout: 400 }}
                sx={{
                    display:{md: 'none'},
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: { xs: '100%', sm: '50%', md: 'none' },
                        color: "#FFF",
                        display:{md: 'none'}
                    }
                }}>
            <div className={styles.Menu}>
                <img className={styles.MenuClose} onClick={mobileMenuToggle} src="/header/x.svg" alt="close"/>
                <div className={styles.MenuLogo}>
                    <Logo mobile={true}/>
                </div>
                <div className={styles.MenuNav}>
                    <Navigation/>
                    <Select/>
                </div>

            </div>

        </Drawer>
    );
};

export default MobileMenu;