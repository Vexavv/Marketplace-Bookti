import React, {useState} from 'react';
import styles from './UpdateData.module.scss'
import {useTranslation} from "react-i18next";
import {Formik, Form, Field, ErrorMessage, FormikHelpers, FormikProps,} from 'formik';
import * as yup from 'yup';
import UserPhoto from "./UserPhoto/UserPhoto";
import {FieldSettings, LoginForm} from "../../../../types";
import PlaceSearch from "../../../../uiComponent/PlaceSearch/PlaceSearch";
import Button from "../../../../uiComponent/Button/Button";
import * as Yup from "yup";
import {useAppDispatch, useAppSelector} from "../../../../hook";


interface UpdateForm {
    full_name?: string,
    email?: string,
    city?: string,
    avatar_url?: null,
    telegram?: string,
    show_email?: boolean,
    show_telegram?: boolean

}

// initialValues
const initialValuesUpdateForm: UpdateForm = {
    full_name: '',
    email: '',
    city: '',
    avatar_url: null,
    telegram: '',
    show_email: false,
    show_telegram: false
}


const UpdateData = () => {
    const {t} = useTranslation(['mySettings', 'login'])
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.auth.user)


    // value={name} onChange={(e: any) => setName(e.target.value)}
    const [userEmail, setUserEmail] = useState(user && user.email || '')
    const [name, setName] = useState(user && user.full_name || '')


    const validationSchemaUpdate: yup.Schema<UpdateForm> = yup.object().shape({
        full_name: yup.string()
            .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s]*$/, t('login:Error.registration.name.matches'))
            .min(2, t('login:Error.registration.name.min'))
            .max(25, t('login:Error.registration.name.max')),
        email: yup.string()
            .email(t('login:Error.login.email.email')),
        city: yup.string()
            .matches(/^[a-zA-Zа\s]*$/, t('login:Error.registration.name.city')),
        // avatar_url:Yup.mixed()
        //     .test(
        //         'fileFormat',
        //         t('login:Error.registration.name.max'),
        //         (value: any) => {
        //             if (value) {
        //                 const supportedFormats = ['jpg', 'png', 'webp', 'jpeg'];
        //                 return supportedFormats.includes(
        //                     value.name.split('.').pop()
        //                 );
        //             }
        //             return true;
        //         }
        //     )
        //     .test(
        //         'fileSize',
        //         t('login:Error.registration.name.max'),
        //         (value: any) => {
        //             if (value) return value.size <= 3145728;
        //             return true;
        //         }
        //     ),

        // telegram: yup.string()
        //     .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s]*$/, t('login:Error.registration.name.matches'))
    })


    // const inputField: FieldSettings[] = [
    //     {id: 1, label_text: t('mySettings:UpdateData.LabelUpdate.newEmail'), name: 'email'},
    //     {id: 2, label_text: t('mySettings:UpdateData.LabelUpdate.newName'), name: 'full_name', type: 'text'},
    //     {id: 3, label_text: t('mySettings:UpdateData.LabelUpdate.newCity'), name: 'city', component:PlaceSearch },
    //     {id: 4, label_text: t('mySettings:UpdateData.LabelUpdate.telegram'), name: 'telegram', type:'text'},
    // ]

    const checkBoxUpdate: FieldSettings[] = [
        {id: 1, label_text: t('mySettings:UpdateData.LabelUpdate.checkBoxAddress'), name: 'show_email'},
        {id: 2, label_text: t('mySettings:UpdateData.LabelUpdate.checkBoxTelegram'), name: 'show_telegram'},
    ]
    return (
        <div className={styles.Update}>
            <Formik initialValues={initialValuesUpdateForm} validationSchema={validationSchemaUpdate} onSubmit={(values: UpdateForm) => {
                console.log(values)
            }}>
                <Form className={styles.Form}>
                    <div className={styles.FormPhoto}>
                        <Field component={UserPhoto} name="avatar_url"/>
                    </div>
                    <div className={styles.FormWrapper}>
                        <label className={styles.FormWrapperLabel}
                               htmlFor="email">{t('mySettings:UpdateData.LabelUpdate.newEmail')}</label>
                        <Field className={styles.FormWrapperImput} name="email" type='email'  ></Field>
                        <ErrorMessage component="span" name='email'/>
                    </div>
                    <div className={styles.FormWrapper}>
                        <label className={styles.FormWrapperLabel}
                               htmlFor="text">{t('mySettings:UpdateData.LabelUpdate.newName')}</label>
                        <Field className={styles.FormWrapperImput} name="full_name" type='text' ></Field>
                        <ErrorMessage component="span" name='full_name'/>
                    </div>
                    <div className={styles.FormWrapper}>
                        <label className={styles.FormWrapperLabel}
                               htmlFor="text">{t('mySettings:UpdateData.LabelUpdate.newCity')}</label>
                        <Field className={styles.FormWrapperImput} component={PlaceSearch} name="city"></Field>
                        <ErrorMessage component="span" name='city'/>
                    </div>
                    <div className={styles.FormWrapper}>
                        <label className={styles.FormWrapperLabel}
                               htmlFor="text">{t('mySettings:UpdateData.LabelUpdate.telegram')}</label>
                        <Field className={styles.FormWrapperImput} name="telegram" type='text'></Field>
                        <ErrorMessage component="span" name='telegram'/>
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