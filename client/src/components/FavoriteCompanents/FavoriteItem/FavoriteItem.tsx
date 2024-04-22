import React from 'react';
import styles from './FavoriteItem.module.scss';
import {FavoriteItemProps} from "./FavoriteItem.props";

const FavoriteItem = ({id, image_url, language, title,author}: FavoriteItemProps) => {
    return (
        <div className={styles.Card}>

            <img className={styles.CardImage} src={image_url} alt="img"/>
            <div className={styles.CardContent}>
                <p className={styles.CardContentTitle}>"{title}"</p>
                <p className={styles.CardContentText}>{author}</p>
                <p className={styles.CardContentText}>Мова:{language}</p>


            </div>


        </div>
    );
};

export default FavoriteItem;