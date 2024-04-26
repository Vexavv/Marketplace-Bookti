import React, {useState} from 'react';
import styles from './BookInfo.module.scss'
import {useTranslation} from "react-i18next";
import Button from "../../../uiComponent/Button/Button";
import {BookInfoProps} from "./BookInfo.props";
import {closeModal, openModal} from "../../../store/slices/modalSlice";
import {useAppDispatch, useAppSelector} from "../../../hook";
import {favoriteDataAsync} from "../../../store/slices/favoriteSlice/favoriteSlice";

const BookInfo = ({
                      id, title, image_url, author, genre, publication_date, language
                  }: BookInfoProps) => {
    const {t} = useTranslation(['separatePage','favorite']);
    const dispatch = useAppDispatch()
    const loading = useAppSelector(state => state.auth.loading);
    const user = useAppSelector(state => state.auth.user);
    const haveBook = user?.wishlist?.items
    console.log(haveBook)
    //------------------------------------------open modal--------------------------------
    const handleOpenModal = () => {
        dispatch(openModal({
            type: 'bookMessage',
            props: {key: 'value'},
            title: title,
            author: author,
            language: language,
            image_url: image_url,
            publication_date: publication_date,
            genre: genre
        }));
    }
    const handleOpenMessageModal = () => {
        dispatch(openModal({type: 'informMessage', props: {key: 'value'},text: t('favorite:Modal.alreadyAdded')}));
        setTimeout(() => {
            dispatch(closeModal());
        }, 3000);
    }
    //-----------------------------------------------------------------------------------------

    //---------------------add to favorite ---------------------
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const addToFavorites = async () => {
        try {
            if (typeof id === 'string') {
                const check = haveBook && haveBook.find(item => item.id === id);

                if (check) {
                    handleOpenMessageModal()
                } else {
                    await dispatch(favoriteDataAsync(id));
                    console.log('Книга успешно добавлена в избранное');
                }
            } else {
                console.error('ID is undefined or not a string');
            }

            setIsFavorite(!isFavorite)
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className={styles.Info}>
            {image_url ? <img className={styles.InfoImg} src={image_url} alt="book"/> :
                <img className={styles.InfoImg} src="/home/categories/first-book.png" alt="book"/>}
            <div className={styles.InfoDescription}>
                <h4 className={styles.InfoDescriptionTitle}>"{title}"</h4>
                {loading && <div className={styles.InfoDescriptionActions}>
                    <Button name='SeparateExchange' onClick={handleOpenModal}>{t('Book.button')}</Button>
                    <div onClick={addToFavorites}>
                        {isFavorite ? <img src="/profile/to-favorites.png" alt="check"/> :
                            <img src="/separatePage/plus-square.svg" alt="plus"/>}
                    </div>
                </div>}

                <ul className={styles.InfoDescriptionList}>
                    <li className={styles.InfoDescriptionListItem}><p>{t('Book.author')} <span> {author}</span></p>
                    </li>
                    <li className={styles.InfoDescriptionListItem}><p>{t('Book.genre')} <span>{genre}</span></p></li>
                    <li className={styles.InfoDescriptionListItem}><p>{t('Book.year')}
                        <span>{publication_date} рік</span></p></li>
                    <li className={styles.InfoDescriptionListItem}>
                        <p>{t('Book.language')}<span>{language ? language.charAt(0).toUpperCase() + language.slice(1).toLowerCase() : ''}</span>
                        </p></li>
                </ul>


            </div>
        </div>
    );
};

export default BookInfo;