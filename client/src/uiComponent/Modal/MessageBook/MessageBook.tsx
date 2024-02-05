import React from 'react';
import styles from './MessageBook.module.scss'
import {useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from "../../../hook";
import Button from "../../Button/Button";
const MessageBook = () => {
    const {t} = useTranslation('home')
    const dispatch = useAppDispatch()
    // const { user } = useAppSelector(state => state.auth);
    return (
        <div>
            <img src="/home/categories/first-book.png" alt="book"/>
            <h4>"Маленький принц"</h4>
            <ul>
                <li><p>Автор книги <span>Антуан де Сент-Єкзюпері</span></p></li>
                <li><p>Жанр книги <span>Філософська казка</span></p> </li>
                <li><p>Рік видання <span>1942 рік</span></p> </li>
                <li><p>Мова <span>Українська</span></p></li>
            </ul>
            <form>
                <textarea name="message" rows={8} cols={40} placeholder='Текст повідомлення' ></textarea>
                <Button>Send</Button>
            </form>

        </div>
    );
};

export default MessageBook;