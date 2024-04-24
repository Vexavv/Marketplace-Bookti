import React, {useEffect, useState} from 'react';
import styles from './UpdateData.module.scss'
import {useTranslation} from "react-i18next";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import UserPhotoField from "./UserPhotoField/UserPhotoField";
import {FieldSettings} from "../../../types";
import PlaceSearch from "../../../uiComponent/PlaceSearch/PlaceSearch";
import Button from "../../../uiComponent/Button/Button";
import {useAppDispatch, useAppSelector} from "../../../hook";
import {backUpdateData, updateDataAsync} from "../../../store/slices/userSlices/updateSlice";
import {ImageType} from "../../Bookshelf/AddBookForm/AddBook.types";
import UserPhoto from "./UserPhoto/UserPhoto";
import {getUserAsync} from "../../../store/slices/userSlices/authSlice";
import {closeModal, openModal} from "../../../store/slices/modalSlice";


export interface UpdateForm {
    full_name?: string,
    email?: string,
    location: string,
    avatar_url?: ImageType,
    telegram_id?: string,
    display_email?:boolean,
    display_telegram?:boolean
}
const UpdateData = () => {
    const {t} = useTranslation(['mySettings', 'login'])
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.auth.user)
    const updateDataUser = useAppSelector(state => state.updateDataUser.updateData)
    const statusUpdate = useAppSelector(state => state.updateDataUser.status)
    const [imageUrl, setImageUrl] = useState<ImageType>(null);


    const initialValuesUpdateForm: UpdateForm = {
        full_name: user?.full_name || '',
        email: user?.email || '',
        location: user?.location || '',
        avatar_url: null,
        telegram_id: user?.telegram_id || '',
        display_email: user?.display_email || false,
        display_telegram:user?.display_telegram || false

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
        location: yup.string()
            .matches(/^[a-zA-Zа\s'-]*$/u, t('login:Error.registration.name.city'))
            .required(t('login:Error.login.email.required')),
        telegram_id: yup.string(),
        display_email:yup.boolean(),
        display_telegram:yup.boolean()

    })

    const checkBoxUpdate: FieldSettings[] = [
        {id: 1, label_text: t('mySettings:UpdateData.LabelUpdate.checkBoxAddress'), name: 'display_email'},
        {id: 2, label_text: t('mySettings:UpdateData.LabelUpdate.checkBoxTelegram'), name: 'display_telegram'},
    ]
    const handleFormSubmit = (values: UpdateForm, {setSubmitting}: any) => {
        dispatch(updateDataAsync(values))
        setSubmitting(false);
    };
    const handleOpenModal = () => {
        dispatch(openModal({type: 'informMessage', props: {key: 'value'},text: t('mySettings:Message')}));
        setTimeout(() => {
            dispatch(closeModal());
        }, 3000);
    }
    useEffect(() => {
        if(statusUpdate === 'loaded'){
            handleOpenModal();
            dispatch(backUpdateData())

        }
    }, [statusUpdate]);

    useEffect(() => {
        dispatch(getUserAsync())
    }, [updateDataUser]);

    return (
        <div className={styles.Update}>
            <Formik initialValues={initialValuesUpdateForm}
                    validationSchema={validationSchemaUpdate}
                    onSubmit={handleFormSubmit}
            >
                {({errors, setTouched}) => {
                    return (
                        <Form className={styles.Form}>
                            <div className={styles.FormPhoto}>
                                <UserPhoto
                                    url={
                                        imageUrl && !errors.avatar_url
                                            ? URL.createObjectURL(imageUrl)
                                            : ''
                                    }
                                />
                                <UserPhotoField type="file" setTouched={setTouched} setImageUrl={setImageUrl}
                                                name="avatar_url"/>
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
                                <Field className={styles.FormWrapperImput} component={PlaceSearch}
                                       name="location"></Field>
                                <ErrorMessage className={styles.FormWrapperError} component="span" name='location'/>
                            </div>
                            <div className={styles.FormWrapper}>
                                <label className={styles.FormWrapperLabel}
                                       htmlFor="text">{t('mySettings:UpdateData.LabelUpdate.telegram')}</label>
                                <Field className={styles.FormWrapperImput} name="telegram_id" type='text'></Field>
                                <ErrorMessage className={styles.FormWrapperError} component="span" name='telegram_id'/>
                            </div>
                            <div className={styles.FormCheckBoxList}>
                                {checkBoxUpdate.map(item => (
                                    <div className={styles.FormCheckBoxListCheck} key={item.id}>
                                        <Field className={styles.FormCheckBoxListCheckCheckBox}
                                               name={item.name}
                                               type='checkbox'
                                        />
                                        <label className={styles.FormCheckBoxListCheckLabel}
                                               htmlFor={item.name}>{item.label_text}</label>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.FormButton}>
                                <Button name='ResetPasswordButton' type="submit">{statusUpdate ==='loading'? t('mySettings:ButtonLoad'): t('mySettings:Button')}</Button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>

        </div>
    );
};

export default UpdateData;

