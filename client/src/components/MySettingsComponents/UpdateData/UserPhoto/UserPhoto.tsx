import React from 'react';
import styles from './UserPhoto.module.scss'


interface UserPhoto {
    url: string;
}

const UserPhoto: React.FC<UserPhoto> = ({url}) => {
    return (

            <div className={styles.Photo}>
                {url ? <img className={styles.PhotoAvatar} src={url} alt="photo"/> :
                    <img className={styles.PhotoIcon} src="/header/user.svg" alt="user"/>
                }

        </div>
    );
};

export default UserPhoto;