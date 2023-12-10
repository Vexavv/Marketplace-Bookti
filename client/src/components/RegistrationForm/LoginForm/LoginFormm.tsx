import React, {useState} from 'react';
import styles from './LoginForm.module.scss'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password'
import {LoginForm} from "../../../types";
import Button from "../../Button/Button";

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import {Link} from 'react-router-dom';
import {LoginFormProps} from "./LoginForm.props";
import {useTranslation} from "react-i18next";

// initialValues
const initialValuesLogin: LoginForm = {
    email: '',
    password: ''
}
const initialValuesSignIn: LoginForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const LoginFormm = ({registration}: LoginFormProps) => {
    const {t} = useTranslation('login')

    YupPassword(yup)
    const validationSchemaLogin: yup.Schema<LoginForm> = yup.object().shape({
        email: yup.string()
            .email(t('Error.login.email.email'))
            .required(t('Error.login.email.required')),
        password: yup.string()
            .minSymbols(0)
            .min(6, t('Error.login.password.min'))
            .max(30, t('Error.login.password.max'))
            .required(t('Error.login.email.required')),
    })

    const validationSchemaRegister: yup.Schema<LoginForm> = yup.object().shape({
        name: yup.string()
            .matches(/^[a-zA-Zа-яА-Я]+$/, t('Error.registration.name.matches'))
            .min(2, t('Error.registration.name.min'))
            .max(25, t('Error.registration.name.max'))
            .required(t('Error.login.email.required')),
        email: yup.string()
            .email(t('Error.login.email.email'))
            .required(t('Error.login.email.required')),
        password: yup.string()
            .minSymbols(0)
            .min(6, t('Error.login.password.min'))
            .max(30, t('Error.login.password.max'))
            .required(t('Error.login.email.required')),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password')], t('Error.registration.confirmPassword.oneOf'))
            .required(t('Error.login.email.required')),

    })


    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowConfirm, setIsShowConfirm] = useState(false)

    const handleToggle = (setData: React.Dispatch<React.SetStateAction<boolean>>) => {
        setData((prev: boolean) => !prev);
    };

    return (
        <>
            {registration ? (<div><Formik initialValues={initialValuesSignIn}
                                          validationSchema={validationSchemaRegister}
                                          onSubmit={(values, {resetForm}) => {
                                              console.log('Checkout >>>', values)
                                              resetForm()
                                          }}>
                <Form className={styles.Form}>
                    <Field className={styles.FormInput} type="text" name="name"
                           placeholder={t('RegistrationPlaceholder.name')}/>
                    <ErrorMessage className={styles.FormInputError} component="span" name="name"/>

                    <Field className={styles.FormInput} type="email" name="email"
                           placeholder={t('LoginPlaceholder.email')}/>
                    <ErrorMessage className={styles.FormInputError} component="span" name="email"/>

                    <div className={styles.FormVisibilityWrapper}>
                        <Field
                            className={styles.FormInput}
                            name="password"
                            type={isShowPassword ? 'text' : 'password'}
                            placeholder={t('LoginPlaceholder.password')}
                        />
                        <ErrorMessage className={styles.FormInputError} component="span" name="password"/>
                        <span className={styles.FormVisibilityWrapperVisibility}
                              onClick={() => {
                                  handleToggle(setIsShowPassword)
                              }}>
                                        {isShowPassword ? <Visibility/> : <VisibilityOff/>}
                                    </span>
                    </div>
                    <div className={styles.FormVisibilityWrapper}>
                        <Field
                            className={styles.FormInput}
                            name="confirmPassword"
                            type={isShowConfirm ? 'text' : 'password'}
                            placeholder={t('RegistrationPlaceholder.confirmPassword')}
                        />
                        <ErrorMessage className={styles.FormInputError} component="span" name="confirmPassword"/>
                        <span className={styles.FormVisibilityWrapperVisibility}
                              onClick={() => {
                                  handleToggle(setIsShowConfirm)
                              }}>
                                        {isShowConfirm ? <Visibility/> : <VisibilityOff/>}
                                    </span>
                    </div>
                    <div className={styles.FormButton}>
                        <Button name='MobileMenu' type="submit">{t('RegistrationButton')}</Button>
                    </div>

                    <p className={styles.FormText}>{t('Or')}</p>
                    <div className={styles.FormIcon}>

                        <img onClick={() => {
                            console.log('Facebook')
                        }} src="/login/facebook.svg" alt="facebook"/>

                        <img onClick={() => {
                            console.log('Google')
                        }} src="/login/google.svg" alt="google"/>

                    </div>
                </Form>
            </Formik>
                <div className={styles.Wrapper}>
                    <p className={styles.WrapperText}>{t('RegistrationText')}</p>
                    <Link className={styles.WrapperLink} to='/login'>{t('RegistrationLink')}</Link>
                </div>
            </div>) : (<div>
                <Formik initialValues={initialValuesLogin} onSubmit={(values, {resetForm}) => {
                    console.log('Checkout >>>', values)
                    resetForm()
                }} validationSchema={validationSchemaLogin}>
                    <Form className={styles.Form}>
                        <Field className={styles.FormInput} type="email" name="email"
                               placeholder={t('LoginPlaceholder.email')}/>
                        <ErrorMessage className={styles.FormInputError} component="span" name="email"/>
                        <div className={styles.FormVisibilityWrapper}>
                            <Field
                                className={styles.FormInput}
                                name="password"
                                type={isShowPassword ? 'text' : 'password'}
                                placeholder={t('LoginPlaceholder.password')}
                            />
                            <ErrorMessage className={styles.FormInputError} component="span" name="password"/>
                            <span className={styles.FormVisibilityWrapperVisibility}
                                  onClick={() => {
                                      handleToggle(setIsShowPassword)
                                  }}>
                                        {isShowPassword ? <Visibility/> : <VisibilityOff/>}
                                    </span>

                        </div>
                        <div className={styles.FormButton}>
                            <Button name='MobileMenu' type="submit">{t('LoginButton')}</Button>
                        </div>

                        <p className={styles.FormText}>{t('Or')}</p>
                        <div className={styles.FormIcon}>

                            <img onClick={() => {
                                console.log('Facebook')
                            }} src="/login/facebook.svg" alt="facebook"/>


                            <img onClick={() => {
                                console.log('Google')
                            }} src="/login/google.svg" alt="google"/>

                        </div>
                    </Form>
                </Formik>
                <div className={styles.Wrapper}>
                    <p className={styles.WrapperText}>{t('LoginText')}</p>
                    <Link className={styles.WrapperLink} to='/registration'>{t('LoginLink')}</Link>
                </div>
            </div>)}
        </>
    );
};

export default LoginFormm;