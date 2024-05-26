import React, { useEffect, useState } from 'react';
import styles from './BookInfo.module.scss';
import { useTranslation } from "react-i18next";
import Button from "../../../uiComponent/Button/Button";
import { BookInfoProps } from "./BookInfo.props";
import { closeModal, openModal } from "../../../store/slices/modalSlice";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { favoriteDataAsync } from "../../../store/slices/favoriteSlice/favoriteSlice";

const BookInfo = ({
                      id, title, imageUrl, author, genre, publicationYear, language
                  }: BookInfoProps) => {
    const { t } = useTranslation(['separatePage', 'favorite']);
    const dispatch = useAppDispatch();
    const loading = useAppSelector(state => state.auth.loading);
    const user = useAppSelector(state => state.auth.user);
    const haveBook = user?.wishlist?.items;

    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    useEffect(() => {
        const checkFavorite = haveBook?.some(item => item.id === id);
        setIsFavorite(!!checkFavorite);
    }, [haveBook, id]);

    const handleOpenModal = () => {
        dispatch(openModal({
            type: 'bookMessage',
            props: {key: 'value'},
            title: title,
            author: author,
            language: language,
            imageUrl: imageUrl,
            publicationYear: publicationYear,
            genre: genre
        }));
    }

    const handleOpenMessageModal = () => {
        dispatch(openModal({type: 'informMessage', props: {key: 'value'},text: t('favorite:Modal.alreadyAdded')}));
        setTimeout(() => {
            dispatch(closeModal());
        }, 3000);
    }

    const addToFavorites = async () => {
        if (typeof id !== 'number') {
            console.error('ID is undefined or not a number');
            return;
        }

        if (haveBook?.some(item => item.id === id)) {
            handleOpenMessageModal();
            return;
        }

        try {
            await dispatch(favoriteDataAsync(id));
            setIsFavorite(true);
        } catch (error) {
            console.error(error);
            // Дополнительно: показать пользователю сообщение об ошибке
        }
    };

    return (
        <div className={styles.Info}>
            <img className={styles.InfoImg} src={imageUrl || "/home/categories/first-book.png"} alt="book" />
            <div className={styles.InfoDescription}>
                <h4 className={styles.InfoDescriptionTitle}>"{title}"</h4>
                {loading && (
                    <div className={styles.InfoDescriptionActions}>
                        <Button name='SeparateExchange' onClick={handleOpenModal}>
                            {t('Book.button')}
                        </Button>
                        <div onClick={addToFavorites}>
                            {isFavorite ? <img src="/profile/to-favorites.png" alt="check" /> :
                                <img src="/separatePage/plus-square.svg" alt="plus" />}
                        </div>
                    </div>
                )}

                <ul className={styles.InfoDescriptionList}>
                    <li className={styles.InfoDescriptionListItem}><p>{t('Book.author')} <span> {author}</span></p></li>
                    <li className={styles.InfoDescriptionListItem}><p>{t('Book.genre')} <span>{genre}</span></p></li>
                    <li className={styles.InfoDescriptionListItem}><p>{t('Book.year')} <span>{publicationYear} рік</span></p></li>
                    <li className={styles.InfoDescriptionListItem}><p>{t('Book.language')}<span>{language ? language.charAt(0).toUpperCase() + language.slice(1).toLowerCase() : ''}</span></p></li>
                </ul>
            </div>
        </div>
    );
};

export default BookInfo;




