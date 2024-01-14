import React from 'react';
import styles from './UserImage.module.scss'
import {UserImageProps} from "./UserImage.props";
import {Link} from "react-router-dom";
import Button from "../Button/Button";
import {useAppSelector} from "../../hook";

const UserImage = ({picture, name, text, button, onClick, onClick2, nav}: UserImageProps) => {
    const loading = useAppSelector(state => state.auth.loading)


    // let imageUrl: string | undefined;
    //
    // // Проверка типа переменной picture
    // if (typeof picture === 'string') {
    //     // Теперь TypeScript знает, что picture - строка
    //     imageUrl = picture;
    // } else if (picture && 'data' in picture) {
    //     // Теперь TypeScript знает, что picture - объект с полем data и url
    //     imageUrl = picture.data.url;
    // } else {
    //     // picture может быть undefined
    //     // Обработка случая, когда picture не определено
    //     imageUrl = undefined;
    // }
    return (
        <div className={styles.Wrapper}>
            <div className={styles.WrapperPicture}>
                {picture === null ? <img className={styles.WrapperPictureImg} src="/header/user.svg" alt="user"/> :
                    <img className={styles.WrapperPictureAvatar} src={picture} alt="img"/>}
            </div>
            <p className={styles.WrapperText}>{text} {name} !</p>
        </div>
    );
};

export default UserImage;