import React from 'react';
import styles from './FavoriteItem.module.scss';
import {FavoriteItemProps} from "./FavoriteItem.props";

const FavoriteItem = ({id, image_url, language, title,author}: FavoriteItemProps) => {
    return (
        <div>

            <p>{id}</p>
            <img style={{width:'100px'}} src={image_url} alt="img"/>
            <p>{language}</p>
            <p>{title}</p>
            <p>{author}</p>


        </div>
    );
};

export default FavoriteItem;