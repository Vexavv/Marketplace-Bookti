import React from 'react';
import styles from './PrivacyList.module.scss'
import {NavigationList} from "../../../types";
import {Link} from 'react-router-dom';
import {useTranslation} from "react-i18next";



const PrivacyList = () => {
    const {t} = useTranslation('footer')
    const navList: NavigationList[] = [
        {name: t('Info.privacy'), path: '/privacy'},
        {name: t('Info.terms'), path: '/terms'},
    ]
    return (
        <nav className={styles.Privacy}>
            <ul>
                {navList.map(item => (
                    <li className={styles.PrivacyList} key={item.name}><Link className={styles.PrivacyListLink} to={item.path}>{item.name}</Link></li>
                ))}
            </ul>
        </nav>
    );
};

export default PrivacyList;