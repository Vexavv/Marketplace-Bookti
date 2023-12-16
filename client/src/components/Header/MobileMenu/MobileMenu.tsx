import React from 'react';
import MobileMenuProps from './MobileMenu.props'
import styles from './MobileMenu.module.scss'
import Drawer from '@mui/material/Drawer';
import Logo from "../Logo/Logo";
import Select from "../Select/Select";
import Navigation from "../../Navigation/Navigation";
import Button from "../../Button/Button";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hook";
import UserImage from "../../UserImage/UserImage";
import {logout} from "../../../store/slices/authSlice";

const MobileMenu: React.FC<MobileMenuProps> = ({mobileMenuOpen, mobileMenuToggle}) => {
    const {t} = useTranslation(['header', 'mobileMenu'])
    const dispatch = useAppDispatch()
    //---------------------Selectors------------------------
    const tokenResponse = useAppSelector(state => state.auth.data)
    const googleLoading = useAppSelector(state => state.auth.loadingGoogle)

    const handleLogout = () => {
        dispatch(logout())
    };
const renderContent = ()=> {
    if (!googleLoading) {
       return <div className={styles.MenuLogo} onClick={mobileMenuToggle}>
            <Link to='/'>
                <Logo mobile={true}/>
            </Link>
        </div>
    }
    if (tokenResponse) {
        return <UserImage picture={tokenResponse.picture} name={tokenResponse.name} text={t('Popper.text')} button={t('Popper.button')} nav={true} onClick={mobileMenuToggle}/>
    }
}
    return (
        <Drawer anchor="left"
                component="div"
                variant="temporary"
                open={mobileMenuOpen}
                onClose={mobileMenuToggle}
                ModalProps={{keepMounted: true}}
                SlideProps={{timeout: 400}}
                sx={{
                    display: {md: 'none'},
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: {xs: '100%', sm: '50%', md: 'none'},
                        overflow: 'hidden',
                        color: "#FFF",
                        display: {md: 'none'},
                        '&:active': { color: '#BA933E' }
                    }
                }}>
            <div className={styles.Menu}>
                <img className={styles.MenuClose} onClick={mobileMenuToggle} src="/header/x.svg" alt="close"/>
                <>{renderContent()}</>
                <div className={styles.MenuWrapper}>
                    <div className={styles.MenuWrapperNav}>
                        <Navigation mobile={true} onClick={mobileMenuToggle}/>
                    </div>
                    <div className={styles.MenuWrapperSelect}>
                        <Select/>
                    </div>
                </div>
                {googleLoading ? <>
                    <div className={styles.Closed} onClick={handleLogout}>
                        <img src="/header/log-out.svg" alt="log out"/>
                        <p className={styles.ClosedText}>{t('Popper.exit')}</p>
                    </div>
                </> : <>
                    <div className={styles.MenuButton}>
                        <Link to='/registration'>
                            <Button onClick={mobileMenuToggle} name='MobileMenu'>{t('Button.registration')}</Button>
                        </Link>

                    </div>
                    <div className={styles.MenuContent}>
                        <p className={styles.MenuContentText}>{t('mobileMenu:account')}</p>
                        <Link onClick={mobileMenuToggle} className={styles.MenuContentLink}
                              to='/login'>{t('mobileMenu:enter')}</Link>
                    </div>
                </>}
            </div>
        </Drawer>
    );
};

export default MobileMenu;