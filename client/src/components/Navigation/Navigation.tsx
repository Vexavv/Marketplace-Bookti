import React from 'react';
import styles from './Navigation.module.scss'
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import NavigationProps from './Navigation.props'
import {NavigationList} from "../../types";
import {useAppSelector} from "../../hook";


const Navigation: React.FC<NavigationProps> = ({mobile, footer, onClick}) => {
    const {t} = useTranslation('header');
    //------------------Selectors----------------------------------------
    const loading = useAppSelector(state => state.auth.loading)
    //--------------------------googleLoading-----------------------------
    const additionalNav: NavigationList[] = loading
        ? [
            {name: t('Nav.books'), path: '/myBooks', icon: '/header/book.svg'},
            {name: t('Nav.favorite'), path: '/favorite', icon: '/header/heart.svg'}
        ]
        : [];

    const nav: NavigationList[] = [
        ...(mobile ? additionalNav : []),

        {name: t('Nav.about'), path: '/about', icon: '/header/clipboard.svg'},
        {name: t('Nav.library'), path: '/library', icon: '/header/book.svg'},
        {name: t('Nav.blog'), path: '/blog', icon: '/header/bookmark.svg'},
    ];


    return (
        <>
            {footer ? (
                <nav className={styles.FooterNav}>
                    <ul className={styles.FooterNavList}>
                        {nav.map(item => (
                            <li key={item.name} className={styles.FooterNavListItem}><NavLink
                                className={styles.FooterNavListItemLink}
                                to={item.path}>{item.name}</NavLink></li>
                        ))}
                    </ul>
                </nav>) : (<nav className={mobile ? styles.MobileNav : styles.Nav}>
                <ul className={mobile ? styles.MobileNavList : styles.NavList}>
                    {nav.map(item => (
                        <li key={item.name} className={mobile ? styles.MobileNavListItem : styles.NavListItem}
                            onClick={onClick}><NavLink
                            className={mobile ? styles.MobileNavListItemLink : styles.NavListItemLink}
                            to={item.path}>
                            {mobile && <img className={styles.MobileNavListItemLinkIcon} src={item.icon}
                                            alt="icon"/>} {item.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>)
            }
        </>
    );
};

export default Navigation;