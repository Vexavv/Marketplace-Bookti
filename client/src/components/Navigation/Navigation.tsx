import React, {useState} from 'react';
import styles from './Navigation.module.scss'
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import NavigationProps from './Navigation.props'
import {NavigationList} from "../../types";



const Navigation: React.FC<NavigationProps> = ({mobile, footer,onClick}) => {
    const {t} = useTranslation('header');

    //--------------------------isLogged-----------------------------
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const additionalNav: NavigationList[] = isLoggedIn
        ? [
            { name: 'Books', path: '/about',icon: '/header/clipboard.svg'  },
            { name: 'Favorite', path: '/about', icon: '/header/book.svg' }
        ]
        : [];

    const nav: NavigationList[] = [
        ...(mobile ? additionalNav : []),
        // Остальные элементы
        { name: t('Nav.about'), path: '/about', icon: '/header/clipboard.svg' },
        { name: t('Nav.library'), path: '/library', icon: '/header/book.svg' },
        { name: t('Nav.blog'), path: '/blog', icon: '/header/bookmark.svg' },
        // Добавьте дополнительные NavLink только для mobileMenu
    ];
    //--------------------------isLogged-----------------------------


    // const nav: NavigationList[] = [
    //     {name: t('Nav.about'), path: '/about', icon: '/header/clipboard.svg'},
    //     {name: t('Nav.library'), path: '/library', icon: '/header/book.svg'},
    //     {name: t('Nav.blog'), path: '/blog', icon: '/header/bookmark.svg'}
    // ]

    return (
        <>
            {footer ? (<nav className={styles.FooterNav}>
                <ul className={ styles.FooterNavList}>
                    {nav.map(item => (

                        <li key={item.name} className={styles.FooterNavListItem} ><NavLink
                            className={styles.FooterNavListItemLink}
                            to={item.path}>{item.name}</NavLink></li>
                    ))}
                </ul>

            </nav> ): (<nav className={mobile ? styles.MobileNav : styles.Nav}>
                <ul className={mobile ? styles.MobileNavList : styles.NavList}>
                    {nav.map(item => (

                        <li key={item.name} className={mobile ? styles.MobileNavListItem : styles.NavListItem} onClick={onClick}><NavLink
                            className={mobile ? styles.MobileNavListItemLink : styles.NavListItemLink}
                            to={item.path}>
                            {mobile && <img className={styles.MobileNavListItemLinkIcon} src={item.icon}
                                            alt="icon"/>} {item.name}</NavLink></li>
                    ))}
                </ul>

            </nav>)

            }

        </>

    );

};

export default Navigation;