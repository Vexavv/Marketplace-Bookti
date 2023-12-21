import React from 'react';
import styles from './UserImage.module.scss'
import {UserImageProps} from "./UserImage.props";
import {Link} from "react-router-dom";
import Button from "../Button/Button";
const UserImage = ({picture, name, text, button, onClick,onClick2, nav}:UserImageProps) => {
    let imageUrl: string | undefined;

    // Проверка типа переменной picture
    if (typeof picture === 'string') {
        // Теперь TypeScript знает, что picture - строка
        imageUrl = picture;
    } else if (picture && 'data' in picture) {
        // Теперь TypeScript знает, что picture - объект с полем data и url
        imageUrl = picture.data.url;
    } else {
        // picture может быть undefined
        // Обработка случая, когда picture не определено
        imageUrl = undefined;
    }
    return (
        <div className={styles.Wrapper}>
            <Link onClick={onClick2} to='/account'> <img className={styles.WrapperImg} src={imageUrl} alt="img"/></Link>
            <p className={styles.WrapperText}>{text} {name} !</p>
            <div className={styles.WrapperButton}>
                <Link to={nav ? '/addBook' : "#"}>
                    <Button onClick={onClick || onClick2} >
                        <div className={styles.WrapperButtonContent} >
                            <p>{button}</p>
                            <img src="/header/plus.svg" alt="plas"/>
                        </div>
                    </Button>
                </Link>

            </div>
        </div>
    );
};

export default UserImage;