import React from 'react';
import styles from './SocialNetworks.module.scss'
import {NavigationList} from "../../../types";

const networksList: NavigationList[] = [
    {name: 'Instagram', path: 'https://www.instagram.com/', icon: '/footer/instagram.svg'},
    {name: 'Twitter', path: 'https://twitter.com/', icon: '/footer/twitter.svg'},
    {name: 'Facebook', path: 'https://uk-ua.facebook.com/', icon: '/footer/facebook.svg'},
]

const SocialNetworks = () => {
    return (
        <nav className={styles.Social}>
            <ul className={styles.SocialList}>
                {networksList.map(item => (
                    <li className={styles.SocialListItem} key={item.name}><a className={styles.SocialListItemLink} href={item.path}><img className={styles.SocialListItemLinkIcon} src={item.icon} alt={item.name}/>{item.name}</a></li>
                ))}
            </ul>
        </nav>
    );
};

export default SocialNetworks;