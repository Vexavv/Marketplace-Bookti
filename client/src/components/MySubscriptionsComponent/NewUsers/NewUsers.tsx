import React from 'react';
import styles from './NewUsers.module.scss'
import {useTranslation} from "react-i18next";
import {useWindowSize} from "../../../hooks/useWindowSize";
import {User} from "../../../types";
import {Link} from "react-router-dom";


const newUsers: User[] = [
    {id: 1, avatarUrl: "/test/img_1.png", fullName: "Наталія Чернєва", location: "Kyiv", email: ""},
    {id: 2, avatarUrl: "/test/photoUser.png", fullName: "Ксенія Бабенко", location: "Kyiv", email: ""},
    {id: 3, avatarUrl: "", fullName: "Богдан Снігур", location: "Kyiv", email: ""},
    {id: 4, avatarUrl: "", fullName: "Єлизавета Гончар", location: "Kyiv", email: ""},
    {id: 5, avatarUrl: "/test/img.png", fullName: "Михайло Слобош", location: "Kyiv", email: ""},
    {id: 6, avatarUrl: "", fullName: "Катерина Бобр", location: "Kyiv", email: ""},
]
const NewUsers = () => {

    const {t} = useTranslation('mySubscriptions')
    const {width} = useWindowSize();
    return (
        <div className={styles.New}>
            {width && width >= 900 ? <div className={styles.NewTitle}>
                <h3>Нові користувачі</h3>
                <Link to='#'>Більше</Link>
            </div> : null}
            <ul className={styles.NewList}>
                {newUsers.map(item => (
                    <li className={styles.NewListItem} key={item.id}>
                            <div className={styles.NewListItemAvatar}>
                                {item.avatarUrl ?
                                    <img src={item.avatarUrl} alt="user-avatar"
                                         style={width && width <= 400 ?{ width: '40px', height: '40px' }:{ width: '50px', height: '50px' }}/>
                                    : <img src="/header/user.svg" alt="user" style={width && width <= 400 ?{ width: '30px', height: '30px' }:{ width: '40px', height: '40px' }}/>
                                }
                            </div>
                            <div className={styles.NewListItemText}>
                                <p className={styles.NewListItemTextName}>{item.fullName}</p>
                                <p className={styles.NewListItemTextCity}>{item.location}</p>
                            </div>
                            <div className={styles.NewListItemArrow}><img src="/subscriptions/img.png" alt="arrow"/></div>




                    </li>
                ))}
            </ul>

        </div>
    );
};

export default NewUsers;