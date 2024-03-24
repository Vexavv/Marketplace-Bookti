
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
import {updateDataAsync} from "../../../store/slices/userSlices/updateSlice";
import {ImageType} from "../../Bookshelf/AddBookForm/AddBook.types";
import UserPhoto from "./UserPhoto/UserPhoto";
import {getUserAsync} from "../../../store/slices/userSlices/authSlice";


export interface UpdateForm {
    full_name?: string,
    email?: string,
    location: string,
    avatar_url?: ImageType,
    telegram_id?: string,


}


const UpdateData = () => {
    const {t} = useTranslation(['mySettings', 'login'])
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.auth.user)
    console.log(user)
    const updateDataUser = useAppSelector(state =>state.updateDataUser.updateData )
    const [imageUrl, setImageUrl] = useState<ImageType>(null);



    const initialValuesUpdateForm: UpdateForm = {
        full_name: user?.full_name || '',
        email: user?.email || '',
        location:user?.location || '',
        avatar_url: null,
        telegram_id:user?.telegram_id || '',
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
        telegram_id: yup.string()
    })


    const checkBoxUpdate: FieldSettings[] = [
        {id: 1, label_text: t('mySettings:UpdateData.LabelUpdate.checkBoxAddress'), name: 'show_email'},
        {id: 2, label_text: t('mySettings:UpdateData.LabelUpdate.checkBoxTelegram'), name: 'show_telegram'},
    ]
    const handleFormSubmit = (values: UpdateForm, {setSubmitting}: any) => {
        console.log(values);
        dispatch(updateDataAsync(values))
        setSubmitting(false);
    };


    useEffect(() => {
        dispatch(getUserAsync())
    }, [updateDataUser]);

    return (
        <div className={styles.Update}>
            <Formik initialValues={initialValuesUpdateForm}
                    validationSchema={validationSchemaUpdate}
                    onSubmit={handleFormSubmit}
            >
                {({ errors, touched, values, setTouched, setFieldValue }) => {
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
                            <UserPhotoField  type="file" setTouched={setTouched} setImageUrl={setImageUrl} name="avatar_url"/>
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
                            <Field className={styles.FormWrapperImput} component={PlaceSearch} name="location"></Field>
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
                                    <input className={styles.FormCheckBoxListCheckCheckBox} name={item.name}
                                           type='checkbox'></input>
                                    <label className={styles.FormCheckBoxListCheckLabel}
                                           htmlFor={item.name}>{item.label_text}</label>
                                </div>
                            ))}
                        </div>

                        <div className={styles.FormButton}>
                            <Button name='ResetPasswordButton' type="submit">{t('mySettings:Button')}</Button>
                        </div>
                    </Form>
                    )
                }}
            </Formik>

        </div>
    );
};

export default UpdateData;




//
// import React from 'react';
// import styles from './UpdateData.module.scss'
// import {useTranslation} from "react-i18next";
// import {Formik, Form, Field, ErrorMessage} from 'formik';
// import * as yup from 'yup';
// import UserPhoto from "./UserPhoto/UserPhoto";
// import {FieldSettings} from "../../../types";
// import PlaceSearch from "../../../uiComponent/PlaceSearch/PlaceSearch";
// import Button from "../../../uiComponent/Button/Button";
// import {useAppDispatch, useAppSelector} from "../../../hook";
// import {updateDataAsync} from "../../../store/slices/userSlices/updateSlice";
// import {ImageType} from "../../Bookshelf/AddBookForm/AddBook.types";
//
//
// export interface UpdateForm {
//     full_name?: string,
//     email?: string,
//     location: string,
//     avatar_url?: ImageType,
//     telegram_id?: string,
//
//
// }
//
//
// const UpdateData = () => {
//     const {t} = useTranslation(['mySettings', 'login'])
//     const dispatch = useAppDispatch()
//     const user = useAppSelector(state => state.auth.user)
//
//     const initialValuesUpdateForm: UpdateForm = {
//         full_name: user?.full_name || '',
//         email: user?.email || '',
//         location:user?.location || '',
//         avatar_url: null,
//         telegram_id: '',
//     }
//
//     const validationSchemaUpdate: yup.Schema<UpdateForm> = yup.object().shape({
//         full_name: yup.string()
//             .matches(/^(?!^\s*$)[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s]+$/, t('login:Error.registration.name.matches'))
//             .min(2, t('login:Error.registration.name.min'))
//             .max(25, t('login:Error.registration.name.max'))
//             .required(t('login:Error.login.email.required')),
//         email: yup.string()
//             .email(t('login:Error.login.email.email'))
//             .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z]{2,})+$/, t('login:Error.login.email.email'))
//             .required(t('login:Error.login.email.required')),
//         location: yup.string()
//             .matches(/^[a-zA-Zа\s'-]*$/u, t('login:Error.registration.name.city'))
//             .required(t('login:Error.login.email.required')),
//     })
//
//
//     const checkBoxUpdate: FieldSettings[] = [
//         {id: 1, label_text: t('mySettings:UpdateData.LabelUpdate.checkBoxAddress'), name: 'show_email'},
//         {id: 2, label_text: t('mySettings:UpdateData.LabelUpdate.checkBoxTelegram'), name: 'show_telegram'},
//     ]
//     const handleFormSubmit = (values: UpdateForm, {setSubmitting}: any) => {
//
//         console.log(values);
//         dispatch(updateDataAsync(values))
//         setSubmitting(false);
//     };
//
//     return (
//         <div className={styles.Update}>
//             <Formik initialValues={initialValuesUpdateForm}
//                     validationSchema={validationSchemaUpdate}
//                     onSubmit={handleFormSubmit}
//             >
//                 <Form className={styles.Form}>
//                     <div className={styles.FormPhoto}>
//                         <Field component={UserPhoto}  name="avatar_url"/>
//                     </div>
//                     <div className={styles.FormWrapper}>
//                         <label className={styles.FormWrapperLabel}
//                                htmlFor="email">{t('mySettings:UpdateData.LabelUpdate.newEmail')}</label>
//                         <Field className={styles.FormWrapperImput} name="email" type='email'></Field>
//                         <ErrorMessage className={styles.FormWrapperError} component="span" name='email'/>
//                     </div>
//                     <div className={styles.FormWrapper}>
//                         <label className={styles.FormWrapperLabel}
//                                htmlFor="text">{t('mySettings:UpdateData.LabelUpdate.newName')}</label>
//                         <Field className={styles.FormWrapperImput} name="full_name" type='text'></Field>
//                         <ErrorMessage className={styles.FormWrapperError} component="span" name='full_name'/>
//                     </div>
//                     <div className={styles.FormWrapper}>
//                         <label className={styles.FormWrapperLabel}
//                                htmlFor="text">{t('mySettings:UpdateData.LabelUpdate.newCity')}</label>
//                         <Field className={styles.FormWrapperImput} component={PlaceSearch} name="location"></Field>
//                         <ErrorMessage className={styles.FormWrapperError} component="span" name='location'/>
//                     </div>
//                     <div className={styles.FormWrapper}>
//                         <label className={styles.FormWrapperLabel}
//                                htmlFor="text">{t('mySettings:UpdateData.LabelUpdate.telegram')}</label>
//                         <Field className={styles.FormWrapperImput} name="telegram" type='text'></Field>
//                         <ErrorMessage className={styles.FormWrapperError} component="span" name='telegram'/>
//                     </div>
//                     <div className={styles.FormCheckBoxList}>
//                         {checkBoxUpdate.map(item => (
//                             <div className={styles.FormCheckBoxListCheck} key={item.id}>
//                                 <input className={styles.FormCheckBoxListCheckCheckBox} name={item.name}
//                                        type='checkbox'></input>
//                                 <label className={styles.FormCheckBoxListCheckLabel}
//                                        htmlFor={item.name}>{item.label_text}</label>
//                             </div>
//                         ))}
//                     </div>
//
//                     <div className={styles.FormButton}>
//                         <Button name='ResetPasswordButton' type="submit">{t('mySettings:Button')}</Button>
//                     </div>
//                 </Form>
//
//             </Formik>
//
//         </div>
//     );
// };
//
// export default UpdateData;