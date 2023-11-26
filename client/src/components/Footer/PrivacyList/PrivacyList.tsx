import React from 'react';
import styles from './PrivacyList.module.scss'
import {NavigationList} from "../../../types";
import {Link} from 'react-router-dom';


const navList: NavigationList[] = [
    {name: 'Privacy Policy', path: '/privacy'},
    {name: 'Terms And Conditions', path: '/terms'},
    {name: 'Cookies', path: '/cookies'},
]
const PrivacyList = () => {

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