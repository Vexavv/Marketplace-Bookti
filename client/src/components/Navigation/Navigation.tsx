import React from 'react';
import styles from './Navigation.module.scss'
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";


interface NavigationMenu {
    name: string,
    path: string
}


const Navigation = () => {

    const { t } = useTranslation('header');
    const nav: NavigationMenu[] = [
        {name: t('Nav.about'), path: '/about'},
        {name: t('Nav.library'), path: '/library'},
        {name: t('Nav.blog'), path: '/blog'},
    ]

    return (
        <nav className={styles.Nav}>
            <ul className={styles.NavList}>
                {nav.map(item =>(
                    <li key={item.name} className={styles.NavListItem}> <NavLink className={styles.NavListItemLink} to={item.path}>{item.name}</NavLink></li>
                ))}
            </ul>

        </nav>
    );
};

export default Navigation;