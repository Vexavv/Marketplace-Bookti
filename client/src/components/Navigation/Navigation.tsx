import React from 'react';
import styles from './Navigation.module.scss'
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import NavigationProps from './Navigation.props'
import MobileMenuProps from "../Header/MobileMenu/MobileMenu.props";

interface NavigationMenu {
    name: string,
    path: string,
    icon: string
}


const Navigation: React.FC<NavigationProps> = ({mobile}) => {

    const {t} = useTranslation('header');
    const nav: NavigationMenu[] = [
        {name: t('Nav.about'), path: '/about', icon: '/header/clipboard.svg'},
        {name: t('Nav.library'), path: '/library', icon: '/header/book.svg'},
        {name: t('Nav.blog'), path: '/blog', icon: '/header/bookmark.svg'}
    ]

    return (
        <nav className={mobile ? styles.MobileNav : styles.Nav}>
            <ul className={mobile ? styles.MobileNavList : styles.NavList}>
                {nav.map(item => (

                    <li key={item.name} className={mobile ? styles.MobileNavListItem : styles.NavListItem}><NavLink
                        className={mobile ? styles.MobileNavListItemLink : styles.NavListItemLink}
                        to={item.path}>
                        {mobile && <img className={styles.MobileNavListItemLinkIcon} src={item.icon}
                                        alt="icon"/>} {item.name}</NavLink></li>
                ))}
            </ul>

        </nav>
    );
};

export default Navigation;