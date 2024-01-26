import React from 'react';
import styles from './UserNavigation.module.scss'
import {Link} from "react-router-dom";
import {NavigationList} from "../../types";
import {useTranslation} from "react-i18next";
import {useAppDispatch} from "../../hook";
import {logout} from "../../store/slices/authSlice";

import UserNavigationProps from "./UserNavigation.props";
const UserNavigation: React.FC<UserNavigationProps>  = ({mobileUserToggle,mobile}) => {
    const {t} = useTranslation('header')
    const dispatch = useAppDispatch()
    const handleLogout = () => {
        dispatch(logout())
    };
    const popperList: NavigationList[] = [
        { name: t('Nav.account'), path: "/account", icon: "/header/user.svg" },
        { name: t('Nav.favorite'), path: "/favorite", icon: "/header/paperclip.svg" },
        { name: t('Nav.books'), path: "/bookshelf", icon: "/header/book.svg" },
        { name: t('Nav.read'), path: "/wantRead", icon: "/header/heart.svg" },
        { name: t('Nav.reviews'), path: "/reviews", icon: "/header/star.svg" },
        { name: t('Nav.settings'), path: "/settings", icon: "/header/settings.svg" },
        ...(mobile
            ? [
                        { name: t('Communication.chat'), path: "/chat", icon: "/header/communication/message-circle.svg" },
                        { name: t('Communication.message'), path: "/message", icon: "/header/communication/mail.svg" }
            ]
            : [])
    ];

    return (
        <ul className={styles.Nav}>
            {
                popperList.map(item => (
                    <li key={item.name} className={styles.NavItem} onClick={mobileUserToggle}>
                        <Link className={styles.NavItemLink}
                              to={item.path}><img src={item.icon} alt="icon"/>{item.name}
                        </Link>
                    </li>
                ))
            }
            <li className={styles.NavClosed} onClick={handleLogout}>
                <img src="/header/log-out.svg" alt="log out"/>
                <p className={styles.NavClosedText}>{t('Popper.exit')}</p>
            </li>
        </ul>
    );
};

export default UserNavigation;