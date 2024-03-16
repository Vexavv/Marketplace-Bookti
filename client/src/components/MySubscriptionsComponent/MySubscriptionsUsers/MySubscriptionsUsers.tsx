import React from 'react';
import styles from './MySubscriptionsUsers.module.scss'
import {User} from "../../../types";


const mySubscriptionsUsers: User[] = [
    {id: 1, avatar_url: "", full_name: "Вася Семенов", city: "Kyiv", email: ""},
    {id: 2, avatar_url: "/test/photoUser.png", full_name: "Олена Коваль", city: "Kyiv", email: ""}
]
const MySubscriptionsUsers = () => {
    return (
        <ul className={styles.MyUsers}>
            {mySubscriptionsUsers.map(item => (
                <li className={styles.MyUsersItem} key={item.id}>
                    <div className={styles.MyUsersItemContent}>
                        <div className={styles.MyUsersItemContentAvatar}>
                            {item.avatar_url ? <img src={item.avatar_url} alt="user-avatar" style={{ width: '50px', height: '50px' }}/>
                                : <img src="/header/user.svg" alt="user" style={{ width: '40px', height: '40px' }}/>
                            }
                        </div>
                        <div className={styles.MyUsersItemContentText}>
                            <p className={styles.MyUsersItemContentTextName}>{item.full_name}</p>
                            <p className={styles.MyUsersItemContentTextCity}>{item.city}</p>
                        </div>
                        <div className={styles.MyUsersItemContentButton}>
                            <button>click</button>
                        </div>

                    </div>
                </li>
            ))}
        </ul>
    );
};

export default MySubscriptionsUsers;