import React, {useEffect, useState} from 'react';
import styles from './LoginForm.module.scss'
import {Formik, Form, Field, ErrorMessage, FormikHelpers, FormikProps,} from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password'
import {LoginForm} from "../../../types";
import Button from "../../../uiComponent/Button/Button";
import {IoEyeOffOutline, IoEyeOutline} from "react-icons/io5";
import {Link} from 'react-router-dom';
import {LoginFormProps} from "./LoginForm.props";
import {useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from "../../../hook";
import {openModal} from "../../../store/slices/modalSlice";
import {createAccountAsync, loginAsync, getUserAsync} from "../../../store/slices/authSlice";
import {handleTogglePassword} from "../../../helpers/handler";
import PlaceSearch from "../../../uiComponent/PlaceSearch/PlaceSearch";



// initialValues
const initialValuesLogin: LoginFormValues = {
    email: '',
    password: ''
}
const initialValuesSignIn: CreateAccountValues = {
    full_name: '',
    email: '',
    city:'',
    password: '',
    confirm_password: '',
    checkboxField: false,
}

interface LoginFormValues {
    email: string;
    password: string;
}

interface CreateAccountValues {
    full_name: string;
    email: string;
    city:string;
    password: string;
    confirm_password: string;
    checkboxField: boolean

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
        full_name: yup.string()
            .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s]*$/, t('Error.registration.name.matches'))
            .min(2, t('Error.registration.name.min'))
            .max(25, t('Error.registration.name.max'))
            .required(t('Error.login.email.required')),
        email: yup.string()
            .email(t('Error.login.email.email'))
            .required(t('Error.login.email.required')),
        city: yup.string()
            .matches(/^[a-zA-Zа\s'-]*$/u, t('Error.registration.name.city'))
            .required(t('Error.login.email.required')),
        password: yup.string()
            .minSymbols(0)
            .min(8, t('Error.login.password.min'))
            .max(20, t('Error.login.password.max'))
            .minLowercase(1, t('Error.login.password.minLowercase'))
            .minUppercase(1, t('Error.login.password.minUppercase'))
            .minNumbers(1, t('Error.login.password.minNumbers'))
            .required(t('Error.login.email.required')),
        confirm_password: yup.string()
            .oneOf([yup.ref('password')], t('Error.registration.confirmPassword.oneOf'))
            .required(t('Error.login.email.required')),
        checkboxField: yup.boolean().oneOf([true], t('Error.registration.checkboxField')),

    })

    //---------------------------Modal---------------------------------------
    const handleOpenModal = () => {
        dispatch(openModal({type: 'resetPassword', props: {key: 'value'}}));
    }

    return (
        <>
            {registration ? (<div><Formik initialValues={initialValuesSignIn}
                                          validationSchema={validationSchemaRegister}
                                          onSubmit={async (values: CreateAccountValues, {resetForm}: FormikHelpers<CreateAccountValues>) => {
                                              console.log(values)
                                              await dispatch(createAccountAsync(values));
                                              await dispatch(getUserAsync())
                                              resetForm();
                                          }}

            >
                <Form className={styles.Form}>
                    <Field className={styles.FormInput} type="text" name="full_name"
                           placeholder={t('RegistrationPlaceholder.name')}/>
                    <ErrorMessage className={styles.FormInputError} component="span" name="full_name"/>

                    <Field className={styles.FormInput} type="email" name="email"
                           placeholder={t('LoginPlaceholder.email')}/>
                    <ErrorMessage className={styles.FormInputError} component="span" name="email"/>


                    <Field className={styles.FormInput} component={PlaceSearch} name="city" placeholder={t('LoginPlaceholder.city')}/>
                    <ErrorMessage className={styles.FormInputError} component="span" name="city"/>

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
                                  handleTogglePassword(setIsShowPassword)
                              }}>
                                        {isShowPassword ?
                                            <IoEyeOutline className={styles.FormVisibilityWrapperVisibilityIcon}/> :
                                            <IoEyeOffOutline className={styles.FormVisibilityWrapperVisibilityIcon}/>}
                                    </span>
                    </div>
                    <div className={styles.FormVisibilityWrapper}>
                        <Field
                            className={styles.FormInput}
                            name="confirm_password"
                            type={isShowConfirm ? 'text' : 'password'}
                            placeholder={t('RegistrationPlaceholder.confirmPassword')}
                        />
                        <ErrorMessage className={styles.FormInputError} component="span" name="confirm_password"/>
                        <span className={styles.FormVisibilityWrapperVisibility}
                              onClick={() => {
                                  handleTogglePassword(setIsShowConfirm)
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
                        <img src="/login/facebook.svg" alt="facebook"/>
                        <img src="/login/google.svg" alt="google"/>
                    </div>
                </Form>
            </Formik>
                <div className={styles.Wrapper}>
                    <p className={styles.WrapperText}>{t('RegistrationText')}</p>
                    <Link className={styles.WrapperLink} to='/login'>{t('RegistrationLink')}</Link>
                </div>
            </div>) : (<div>

                <Formik initialValues={initialValuesLogin}
                        onSubmit={async (values: LoginFormValues, {resetForm}: FormikHelpers<LoginFormValues>) => {
                            await dispatch(loginAsync(values));
                            await dispatch(getUserAsync())
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
                                      handleTogglePassword(setIsShowPassword)
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
                            <img src="/login/facebook.svg" alt="facebook"/>
                            <img src="/login/google.svg" alt="google"/>

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