import React from 'react';
import styles from './ContentItem.module.scss';
import {Link} from "react-router-dom";
import {IContentItemPops} from "./ContentItem.pops";

const ContentItem: React.FC<IContentItemPops> = ({id, title, author, imageUrl}) => {
    return (
        <li className={styles.Item} key={id}>
            <Link to={`/separatePage/${id}`}>
                <div className={styles.ItemImage}>
                    {imageUrl ? <img className={styles.ItemImageAvatar} src={imageUrl} alt="Avatar"/> :
                        <img className={styles.ItemImageBook} src="/header/book.svg/" alt="book"/>}
                    <img className={styles.ItemImageBookmark} src="/library/bookmark.svg/" alt="bookmark"/>

                </div>
            </Link>
            <p className={styles.ItemText}>{title}</p>
            <p className={styles.ItemText}>{author}</p>

        </li>
    );
};

export default ContentItem;