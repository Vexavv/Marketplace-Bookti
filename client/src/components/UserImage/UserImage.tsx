import React from 'react';
import styles from './UserImage.module.scss'
import {UserImageProps} from "./UserImage.props";
const UserImage = ({picture, name, text, nav}: UserImageProps) => {

    return (
        <div className={styles.Wrapper}>
            <div className={styles.WrapperPicture}>
                {picture === null ? <img className={styles.WrapperPictureImg} src="/header/user.svg" alt="user"/> :
                    <img className={styles.WrapperPictureAvatar} src={picture} alt="user-avatar"/>}
            </div>
            <p className={styles.WrapperText}>{text} {name} !</p>
        </div>
    );
};

export default UserImage;