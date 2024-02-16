import React from 'react';
import styles from './BookInfo.module.scss'
import {useTranslation} from "react-i18next";
import Button from "../../../uiComponent/Button/Button";
const BookInfo = () => {
    const {t} = useTranslation('separatePage');
    return (
        <div className={styles.Info}>
            <img className={styles.InfoImg} src="/home/categories/first-book.png" alt="book"/>
            <div className={styles.InfoDescription}>
                <h4 className={styles.InfoDescriptionTitle}>"Маленький принц"</h4>
                <div className={styles.InfoDescriptionActions}>
                    <Button name='SeparateExchange'>{t('Book.button')}</Button>
                    <img src="/separatePage/plus-square.svg" alt="plus"/>
                </div>

                <ul className={styles.InfoDescriptionList}>
                    <li className={styles.InfoDescriptionListItem}><p>{t('Book.author')} <span> Антуан де Сент-Єкзюпері</span></p>
                    </li>
                    <li className={styles.InfoDescriptionListItem}><p>{t('Book.genre')} <span>Філософська казка</span></p></li>
                    <li className={styles.InfoDescriptionListItem}><p>{t('Book.year')} <span>1942 рік</span></p></li>
                    <li className={styles.InfoDescriptionListItem}><p>{t('Book.language')}<span>Українська</span></p></li>
                </ul>


            </div>
        </div>
    );
};

export default BookInfo;