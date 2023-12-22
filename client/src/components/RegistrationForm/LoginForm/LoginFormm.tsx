import React, {useEffect, useState} from 'react';
import styles from './LoginForm.module.scss'
import {Formik, Form, Field, ErrorMessage, FormikHelpers,} from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password'
import {LoginForm} from "../../../types";
import Button from "../../Button/Button";
import {IoEyeOffOutline, IoEyeOutline} from "react-icons/io5";
import {Link} from 'react-router-dom';
import {LoginFormProps} from "./LoginForm.props";
import {useTranslation} from "react-i18next";
import {useAppDispatch} from "../../../hook";
import {openModal} from "../../../store/slices/modalSlice";


import {TokenResponse, useGoogleLogin} from '@react-oauth/google';
import {fetchUserData, loginAsync} from "../../../store/slices/authSlice";

// initialValues
const initialValuesLogin: LoginForm = {
    email: '',
    password: ''
}
const initialValuesSignIn: LoginForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    checkboxField: false,
}

interface LoginFormValues {
    email: string;
    password: string;
}
const LoginFormm = ({registration}: LoginFormProps) => {
    const {t} = useTranslation('login')
    const dispatch = useAppDispatch();
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowConfirm, setIsShowConfirm] = useState(false)

//----------------------------Validation-----------------------------------------------------------
    YupPassword(yup)
    const validationSchemaLogin: yup.Schema<LoginForm> = yup.object().shape({
        email: yup.string()
            .email(t('Error.login.email.email'))
            .required(t('Error.login.email.required')),
        password: yup.string()
            .minSymbols(0)
            .min(8, t('Error.login.password.min'))
            .max(20, t('Error.login.password.max'))
            .minLowercase(1, t('Error.login.password.minLowercase'))
            .minUppercase(1, t('Error.login.password.minUppercase'))
            .minNumbers(1, t('Error.login.password.minNumbers'))
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
            .min(8, t('Error.login.password.min'))
            .max(20, t('Error.login.password.max'))
            .minLowercase(1, t('Error.login.password.minLowercase'))
            .minUppercase(1, t('Error.login.password.minUppercase'))
            .minNumbers(1, t('Error.login.password.minNumbers'))
            .required(t('Error.login.email.required')),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password')], t('Error.registration.confirmPassword.oneOf'))
            .required(t('Error.login.email.required')),
        checkboxField: yup.boolean().oneOf([true], t('Error.registration.checkboxField')),

    })


    //-------------------------------Handler----------------------------------
    const handleToggle = (setData: React.Dispatch<React.SetStateAction<boolean>>) => {
        setData((prev: boolean) => !prev);
    };
    //---------------------------Modal---------------------------------------
    const handleOpenModal = () => {
        dispatch(openModal({type: 'resetPassword', props: {key: 'value'}}));
    }

//------------------------------Google login ---------------------------------------
    const googleLogin = useGoogleLogin({
        onSuccess:  (response: TokenResponse) => {
            dispatch(fetchUserData(response.access_token));

        },
    });
    // console.log('Data User',tokenResponse)
    // console.log('Loading',googleLoading )

//---------------------------FormLogin-------------------------------------
//     const handleLogin = async () => {
//         // Используйте formData для отправки данных
//         await dispatch(loginAsync(formData));
//
//         // Теперь вы можете использовать authStatus, чтобы понять успешен ли вход или произошла ошибка
//     };



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
                                        {isShowPassword ?
                                            <IoEyeOutline className={styles.FormVisibilityWrapperVisibilityIcon}/> :
                                            <IoEyeOffOutline className={styles.FormVisibilityWrapperVisibilityIcon}/>}
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
                                        {isShowConfirm ?
                                            <IoEyeOutline className={styles.FormVisibilityWrapperVisibilityIcon}/> :
                                            <IoEyeOffOutline className={styles.FormVisibilityWrapperVisibilityIcon}/>}
                                    </span>
                    </div>
                    <label className={styles.FormLabel}>
                        <Field className={styles.FormLabelCheckBox} type="checkbox" name="checkboxField"/>
                        <p className={styles.FormLabelText}>{t('RegistrationAgree')}</p>
                        <Link className={styles.FormLabelLink} to='/terms'>{t('RegistrationTerms')}</Link>
                    </label>
                    <ErrorMessage className={styles.FormInputError} name="checkboxField" component="span"/>
                    <div className={styles.FormButton}>
                        <Button name='MobileMenu' type="submit">{t('RegistrationButton')}</Button>
                    </div>

                    <p className={styles.FormText}>{t('Or')}</p>
                    <div className={styles.FormIcon}>

                        <img onClick={() => {
                            console.log('Facebook')
                        }} src="/login/facebook.svg" alt="facebook"/>

                        <img onClick={() => googleLogin()} src="/login/google.svg" alt="google"/>
                    </div>
                </Form>
            </Formik>
                <div className={styles.Wrapper}>
                    <p className={styles.WrapperText}>{t('RegistrationText')}</p>
                    <Link className={styles.WrapperLink} to='/login'>{t('RegistrationLink')}</Link>
                </div>
            </div>) : (<div>

                <Formik initialValues={initialValuesLogin} onSubmit={ async (values: LoginForm, { resetForm }: FormikHelpers<LoginForm>) => {
                     await dispatch(loginAsync(values));
                    resetForm();
                }}



                        validationSchema={validationSchemaLogin}>
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
                                        {isShowPassword ?
                                            <IoEyeOutline className={styles.FormVisibilityWrapperVisibilityIcon}/> :
                                            <IoEyeOffOutline className={styles.FormVisibilityWrapperVisibilityIcon}/>}
                                    </span>

                        </div>
                        <span className={styles.FormForgot} onClick={handleOpenModal}>{t('LoginForgotPassword')}</span>
                        <div className={styles.FormButton}>
                            <Button name='MobileMenu' type="submit">{t('LoginButton')}</Button>
                        </div>

                        <p className={styles.FormText}>{t('Or')}</p>
                        <div className={styles.FormIcon}>

                            <img onClick={() => {
                                console.log('Facebook')
                            }} src="/login/facebook.svg" alt="facebook"/>


                            <img onClick={() => googleLogin()} src="/login/google.svg" alt="google"/>

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