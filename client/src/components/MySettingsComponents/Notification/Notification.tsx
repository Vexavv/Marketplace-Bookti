import React from 'react';
import styles from './Notification.module.scss'
import Button from "../../../uiComponent/Button/Button";
import {useTranslation} from "react-i18next";
import {Formik, Form, Field} from 'formik';
import {FieldSettings} from "../../../types";


interface CheckBoxNotification {
    newMessage: boolean
    booksInterestMe: boolean
    reviewAboutMe: boolean
    lastAddedBooks: boolean
}

const initialValuesCheckBox: CheckBoxNotification = {
    newMessage: false,
    booksInterestMe: false,
    reviewAboutMe: false,
    lastAddedBooks: false,
}

const Notification = () => {
    const {t} = useTranslation(['mySettings', 'login'])

    const checkBoxField: FieldSettings[] = [
        {id: 1, label_text: t('mySettings:Notification.LabelCheckBox.newMessage'), name: 'newMessage'},
        {id: 2, label_text: t('mySettings:Notification.LabelCheckBox.booksInterestMe'), name: 'booksInterestMe'},
        {id: 3, label_text: t('mySettings:Notification.LabelCheckBox.reviewAboutMe'), name: 'reviewAboutMe'},
        {id: 4, label_text: t('mySettings:Notification.LabelCheckBox.lastAddedBooks'), name: 'lastAddedBooks'}
    ]

    return (
        <div className={styles.Notification}>
            <h3 className={styles.NotificationTitle}>{t('mySettings:Notification.title')}</h3>

            <Formik initialValues={initialValuesCheckBox} onSubmit={(values: CheckBoxNotification) => {
                console.log(values)
            }}>
                <Form className={styles.NotificationForm}>
                    {checkBoxField.map(item => (
                        <ul className={styles.NotificationFormWrapper} key={item.id}>
                            <Field className={styles.NotificationFormWrapperCheckBox} name={item.name} type='checkbox'></Field>
                            <label className={styles.NotificationFormWrapperLabel} htmlFor={item.name}>{item.label_text}</label>
                        </ul>
                    ))}
                    <Button name='ResetPasswordButton' type="submit">{t('mySettings:Button')}</Button>
                </Form>
            </Formik>

        </div>
    );
};

export default Notification;