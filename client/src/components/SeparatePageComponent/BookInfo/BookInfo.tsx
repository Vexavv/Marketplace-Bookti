import React from 'react';
import styles from './BookInfo.module.scss'
import Button from "../../../uiComponent/Button/Button";
const BookInfo = () => {
    return (
        <div className={styles.Info}>
            <img className={styles.InfoImg} src="/home/categories/first-book.png" alt="book"/>
            <div className={styles.InfoDescription}>
                <h4 className={styles.InfoDescriptionTitle}>"Маленький принц"</h4>
                <div className={styles.InfoDescriptionActions}>
                    <Button name='SeparateExchange'>Обмен</Button>
                    <img src="/separatePage/plus-square.svg" alt="plus"/>
                </div>

                <ul className={styles.InfoDescriptionList}>
                    <li className={styles.InfoDescriptionListItem}><p>Автор книги <span> Антуан де Сент-Єкзюпері</span></p>
                    </li>
                    <li className={styles.InfoDescriptionListItem}><p>Жанр книги <span>Філософська казка</span></p></li>
                    <li className={styles.InfoDescriptionListItem}><p>Рік видання <span>1942 рік</span></p></li>
                    <li className={styles.InfoDescriptionListItem}><p>Мова<span>Українська</span></p></li>
                </ul>


            </div>
        </div>
    );
};

export default BookInfo;