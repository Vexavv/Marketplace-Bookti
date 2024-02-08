import React from 'react';
import styles from './MessageBook.module.scss'
import {useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from "../../../hook";
import Button from "../../Button/Button";
import {Formik, Form, Field, ErrorMessage, FormikHelpers,} from 'formik';
import * as yup from 'yup';
import { useMediaQuery } from 'react-responsive';
interface Message {
    text: string
}
const initialValuesLMessage: Message = {
    text:''
}
const MessageBook = () => {
    const {t} = useTranslation('modal')
    const dispatch = useAppDispatch()
    // const { user } = useAppSelector(state => state.auth);
    const isMobile = useMediaQuery({ maxWidth: 500 });
    const isTab = useMediaQuery({ maxWidth: 900 });

    const validationSchemaMessage: yup.Schema<Message > = yup.object().shape({
        text: yup.string()
            .required(t('MessageBook.error')),
    })




    return (
        <div className={styles.Message}>
                <img className={styles.MessageImg} src="/home/categories/first-book.png" alt="book"/>
            <div className={styles.MessageText}>
                <h4 className={styles.MessageTextTitle}>"Маленький принц"</h4>
                <ul className={styles.MessageTextList}>
                    <li className={styles.MessageTextListItem}><p>Автор книги <span>Антуан де Сент-Єкзюпері</span></p></li>
                    <li className={styles.MessageTextListItem}><p>Жанр книги <span>Філософська казка</span></p></li>
                    <li className={styles.MessageTextListItem}><p>Рік видання <span>1942 рік</span></p></li>
                    <li className={styles.MessageTextListItem}><p>Мова<span>Українська</span></p></li>
                </ul>
            </div>
            <Formik initialValues={initialValuesLMessage}
                    validationSchema={validationSchemaMessage}
                    onSubmit={async (values: Message, {resetForm}: FormikHelpers<Message>) => {
                        console.log(values)
                        resetForm();
                    }}>
                <Form className={styles.MessageForm}>
                    <Field className={styles.MessageFormInput}  as="textarea" name="text" rows={isMobile ? "6" : isTab ? '8' :"11"}  cols={isMobile ? "35" :isTab ? '50' : "80"}
                           placeholder={t('MessageBook.placeholder')}/>
                    <ErrorMessage className={styles.MessageFormError}  component="span" name="text"/>
                    <div className={styles.MessageFormButton}>
                        <Button type="submit">{t('MessageBook.button')}</Button>
                    </div>

                </Form>
            </Formik>
        </div>
    );
};

export default MessageBook;