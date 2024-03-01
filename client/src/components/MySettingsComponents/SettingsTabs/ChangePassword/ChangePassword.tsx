import React from 'react';
import styles from './ChangePassword.module.scss'
import {useTranslation} from "react-i18next";
import {Formik, Form, Field, ErrorMessage, FormikHelpers,} from 'formik';
import * as yup from "yup";
import YupPassword from 'yup-password'
import {FieldSettings, LoginForm} from "../../../../types";
import Button from "../../../../uiComponent/Button/Button";



const initialValuesNewPassword: LoginForm = {
    password: '',
    new_password: '',
    confirm_password: '',
}
const ChangePassword = () => {
    const {t} = useTranslation(['mySettings', 'login'])

    //----------------------------Validation-----------------------------------------------------------
    YupPassword(yup)
    const validationSchemaNewPassword: yup.Schema<LoginForm> = yup.object().shape({
        password: yup.string()
            .minSymbols(0)
            .min(8, t('login:Error.login.password.min'))
            .max(20, t('login:Error.login.password.max'))
            .minLowercase(1, t('login:Error.login.password.minLowercase'))
            .minUppercase(1, t('login:Error.login.password.minUppercase'))
            .minNumbers(1, t('login:Error.login.password.minNumbers'))
            .required(t('login:Error.login.email.required')),
        new_password: yup.string()
            .min(8, t('login:Error.login.password.min'))
            .max(20, t('login:Error.login.password.max'))
            .minLowercase(1, t('login:Error.login.password.minLowercase'))
            .minUppercase(1, t('login:Error.login.password.minUppercase'))
            .minNumbers(1, t('login:Error.login.password.minNumbers'))
            .required(t('login:Error.login.email.required')),
        confirm_password: yup.string()
            .oneOf([yup.ref('new_password')], t('login:Error.registration.confirmPassword.oneOf'))
            .required(t('login:Error.login.email.required')),

    })

    const field: FieldSettings[] = [
        {id: 1, label_text: t('mySettings:LabelNewPassword.currentPassword'), name: 'password'},
        {id: 2, label_text: t('mySettings:LabelNewPassword.newPassword'), name: 'new_password'},
        {id: 3, label_text: t('mySettings:LabelNewPassword.repeatPassword'), name: 'confirm_password'}
    ]

    return (
        <>
            <Formik initialValues={initialValuesNewPassword}
                    validationSchema={validationSchemaNewPassword}
                    onSubmit={(values: LoginForm, {resetForm}) => {
                        console.log(values)
                        resetForm();
                    }}>

                <Form className={styles.Form}>
                    {field.map(item => (
                        <div className={styles.FormWrapper} key={item.id}>
                            <label className={styles.FormWrapperLabel} htmlFor={item.name}>{item.label_text}</label>
                            <Field className={styles.FormWrapperImput} name={item.name} type='text'></Field>
                            <ErrorMessage className={styles.FormWrapperError} component="span" name={item.name}/>
                        </div>
                    ))}
                        <Button name='ResetPasswordButton' type="submit">{t('mySettings:Button')}</Button>
                </Form>
            </Formik>
        </>
    );
};

export default ChangePassword;