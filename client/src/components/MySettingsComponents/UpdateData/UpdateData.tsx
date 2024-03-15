import React from 'react';
import styles from './UpdateData.module.scss'
import {useTranslation} from "react-i18next";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import UserPhoto from "./UserPhoto/UserPhoto";
import {FieldSettings} from "../../../types";
import PlaceSearch from "../../../uiComponent/PlaceSearch/PlaceSearch";
import Button from "../../../uiComponent/Button/Button";
import {useAppDispatch, useAppSelector} from "../../../hook";


interface UpdateForm {
    full_name?: string,
    email?: string,
    city: string,
    avatar_url?: null,
    telegram?: string,
    show_email?: boolean,
    show_telegram?: boolean

}


const UpdateData = () => {
    const {t} = useTranslation(['mySettings', 'login'])
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.auth.user)


    const initialValuesUpdateForm: UpdateForm = {
        full_name: user?.full_name || '',
        email: user?.email || '',
        city: '',
        avatar_url: null,
        telegram: '',
        show_email: false,
        show_telegram: false
    }

    const validationSchemaUpdate: yup.Schema<UpdateForm> = yup.object().shape({
        full_name: yup.string()
            .matches(/^(?!^\s*$)[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s]+$/, t('login:Error.registration.name.matches'))
            .min(2, t('login:Error.registration.name.min'))
            .max(25, t('login:Error.registration.name.max'))
            .required(t('login:Error.login.email.required')),
        email: yup.string()
            .email(t('login:Error.login.email.email'))
            .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z]{2,})+$/, t('login:Error.login.email.email'))
            .required(t('login:Error.login.email.required')),
        city: yup.string()
            .matches(/^[a-zA-Zа\s'-]*$/u, t('login:Error.registration.name.city'))
            .required(t('login:Error.login.email.required')),
    })


    // const inputField: FieldSettings[] = [
    //     {id: 1, label_text: t('mySettings:UpdateData.LabelUpdate.newEmail'), name: 'email'},
    //     {id: 2, label_text: t('mySettings:UpdateData.LabelUpdate.newName'), name: 'full_name', type: 'text'},
    //     {id: 3, label_text: t('mySettings:UpdateData.LabelUpdate.newCity'), name: 'city', component:<PlaceSearch field={} form={} meta={} /> },
    //     {id: 4, label_text: t('mySettings:UpdateData.LabelUpdate.telegram'), name: 'telegram', type:'text'},
    // ]

    const checkBoxUpdate: FieldSettings[] = [
        {id: 1, label_text: t('mySettings:UpdateData.LabelUpdate.checkBoxAddress'), name: 'show_email'},
        {id: 2, label_text: t('mySettings:UpdateData.LabelUpdate.checkBoxTelegram'), name: 'show_telegram'},
    ]
    const handleFormSubmit = (values: UpdateForm, {setSubmitting}: any) => {
        console.log(values);
        setSubmitting(false);
    };

    return (
        <div className={styles.Update}>
            <Formik initialValues={initialValuesUpdateForm}
                    validationSchema={validationSchemaUpdate}
                    onSubmit={handleFormSubmit}
            >
                <Form className={styles.Form}>
                    <div className={styles.FormPhoto}>
                        <Field component={UserPhoto} name="avatar_url"/>
                    </div>
                    <div className={styles.FormWrapper}>
                        <label className={styles.FormWrapperLabel}
                               htmlFor="email">{t('mySettings:UpdateData.LabelUpdate.newEmail')}</label>
                        <Field className={styles.FormWrapperImput} name="email" type='email'></Field>
                        <ErrorMessage className={styles.FormWrapperError} component="span" name='email'/>
                    </div>
                    <div className={styles.FormWrapper}>
                        <label className={styles.FormWrapperLabel}
                               htmlFor="text">{t('mySettings:UpdateData.LabelUpdate.newName')}</label>
                        <Field className={styles.FormWrapperImput} name="full_name" type='text'></Field>
                        <ErrorMessage className={styles.FormWrapperError} component="span" name='full_name'/>
                    </div>
                    <div className={styles.FormWrapper}>
                        <label className={styles.FormWrapperLabel}
                               htmlFor="text">{t('mySettings:UpdateData.LabelUpdate.newCity')}</label>
                        <Field className={styles.FormWrapperImput} component={PlaceSearch} name="city"></Field>
                        <ErrorMessage className={styles.FormWrapperError} component="span" name='city'/>
                    </div>
                    <div className={styles.FormWrapper}>
                        <label className={styles.FormWrapperLabel}
                               htmlFor="text">{t('mySettings:UpdateData.LabelUpdate.telegram')}</label>
                        <Field className={styles.FormWrapperImput} name="telegram" type='text'></Field>
                        <ErrorMessage className={styles.FormWrapperError} component="span" name='telegram'/>
                    </div>
                    <div className={styles.FormCheckBoxList}>
                        {checkBoxUpdate.map(item => (
                            <div className={styles.FormCheckBoxListCheck} key={item.id}>
                                <Field className={styles.FormCheckBoxListCheckCheckBox} name={item.name}
                                       type='checkbox'></Field>
                                <label className={styles.FormCheckBoxListCheckLabel}
                                       htmlFor={item.name}>{item.label_text}</label>
                            </div>
                        ))}
                    </div>

                    <div className={styles.FormButton}>
                        <Button name='ResetPasswordButton' type="submit">{t('mySettings:Button')}</Button>
                    </div>
                </Form>

            </Formik>

        </div>
    );
};

export default UpdateData;