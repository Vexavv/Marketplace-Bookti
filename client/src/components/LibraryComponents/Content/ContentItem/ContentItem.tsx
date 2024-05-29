import React, {useEffect, useState} from 'react';
import styles from './ContentItem.module.scss';
import {Link} from "react-router-dom";
import {IContentItemPops} from "./ContentItem.pops";
import {useAppSelector} from "../../../../hook";

const ContentItem: React.FC<IContentItemPops> = ({id, title, author, imageUrl}) => {

    const user = useAppSelector(state => state.auth.user);
    const haveBook = user?.wishlist?.items;
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    useEffect(() => {
        const checkFavorite = haveBook?.some(item => item.id === id);
        setIsFavorite(!!checkFavorite);
    }, [haveBook, id]);

    return (
        <li className={styles.Item} key={id}>
            <Link to={`/separatePage/${id}`}>
                <div className={styles.ItemImage}>
                    {imageUrl ? <img className={styles.ItemImageAvatar} src={imageUrl} alt="Avatar"/> :
                        <img className={styles.ItemImageBook} src="/header/book.svg/" alt="book"/>}
                    {isFavorite ?
                        <img className={styles.ItemImageBookmark} src="/library/favoriteBookmark.svg" alt="favorite"/> :
                        <img className={styles.ItemImageBookmark} src="/library/bookmark.svg/" alt="bookmark"/>
                    }


                </div>
            </Link>
            <p className={styles.ItemText}>{title}</p>
            <p className={styles.ItemText}>{author}</p>

        </li>
    );
};

export default ContentItem;