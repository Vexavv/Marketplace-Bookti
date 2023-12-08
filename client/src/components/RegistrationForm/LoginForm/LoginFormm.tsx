import React, {useState} from 'react';
import styles from './LoginForm.module.scss'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password'
import {LoginForm} from "../../../types";
import Button from "../../Button/Button";
import LogMan from '../../../assets/react.svg'

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import {Link} from 'react-router-dom';
import {LoginFormProps} from "./LoginForm.props";

// initialValues
const initialValuesLogin: LoginForm = {
    email: '',
    password: ''
}
const initialValuesSignIn: LoginForm = {
    name: '',
    password: '',
    confirmPassword: ''
}

const LoginFormm = ({registration}: LoginFormProps) => {
    YupPassword(yup)
    const validationSchemaLogin: yup.Schema<LoginForm> = yup.object().shape({
        email: yup.string()
            .email('Invalid email address')
            .required('This field is required'),
        password: yup.string()
            .minSymbols(0)
            .min(6, 'Password must be between 6 and 30 characters')
            .max(30, 'Password must be between 6 and 30 characters')
            .minLowercase(5)
            .required('Password is required field'),
    })

    const validationSchemaRegister: yup.Schema<LoginForm> = yup.object().shape({
        name: yup.string()
            .matches(/^[a-zA-Zа-яА-Я]+$/, 'Allowed characters for First Name is a-z, A-Z, а-я, А-Я.')
            .min(2, 'First Name must be between 2 and 25 characters.')
            .max(25, 'First Name must be between 2 and 25 characters.')
            .required('First Name is required'),
        password: yup.string()
            .minSymbols(0)
            .min(6, 'Password must be between 6 and 30 characters')
            .max(30, 'Password must be between 6 and 30 characters')
            .minLowercase(5)
            .required('Password is required field'),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password')], 'You password  do not match')
            .required('Password is required field'),

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
                <Form>
                    <Field type="text" name="name" placeholder="Name"/>
                    <ErrorMessage component="span" name="name"/>
                    <div className={styles.FormVisibilityWrapper}>
                        <Field
                            name="password"
                            type={isShowPassword ? 'text' : 'password'}
                            placeholder="Password"
                        />
                        <ErrorMessage component="span" name="password"/>
                        <span className={styles.FormVisibilityWrapperVisibility}
                              onClick={() => {
                                  handleToggle(setIsShowPassword)
                              }}>
                                        {isShowPassword ? <Visibility/> : <VisibilityOff/>}
                                    </span>
                    </div>
                    <div className={styles.FormVisibilityWrapper}>
                        <Field
                            name="confirmPassword"
                            type={isShowConfirm ? 'text' : 'password'}
                            placeholder="ConfirmPassword"
                        />
                        <ErrorMessage component="span" name="confirmPassword"/>
                        <span className={styles.FormVisibilityWrapperVisibility}
                              onClick={() => {
                                  handleToggle(setIsShowConfirm)
                              }}>
                                        {isShowConfirm ? <Visibility/> : <VisibilityOff/>}
                                    </span>
                    </div>
                    <Button name='MobileMenu' type="submit">Зареєструватися</Button>
                </Form>

            </Formik>
            {/*<LogMan/>*/}
            </div>) : (<div>
                <Formik initialValues={initialValuesLogin} onSubmit={(values, {resetForm}) => {
                    console.log('Checkout >>>', values)
                    resetForm()
                }} validationSchema={validationSchemaLogin}>
                    <Form className={styles.Form}>
                        <Field className={styles.FormInput} type="text" name="email"
                               placeholder="Електрона пошта"/>
                        <ErrorMessage className={styles.FormInputError} component="span" name="email"/>
                        <div className={styles.FormVisibilityWrapper}>
                            <Field
                                className={styles.FormInput}
                                name="password"
                                type={isShowPassword ? 'text' : 'password'}
                                placeholder="Password"
                            />
                            <ErrorMessage className={styles.FormInputError} component="span" name="password"/>
                            <span className={styles.FormVisibilityWrapperVisibility}
                                  onClick={() => {
                                      handleToggle(setIsShowPassword)
                                  }}>
                                        {isShowPassword ? <Visibility/> : <VisibilityOff/>}
                                    </span>

                        </div>

                        <Button name='MobileMenu' type="submit">Увійти</Button>
                        <p className={styles.FormText}>ЧИ</p>
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
                    <p className={styles.WrapperText}> Немає аккаунту?</p>
                    <Link className={styles.WrapperLink} to='/registration'>Зареєструватись</Link>
                </div>
            </div>)}
            </>
            );
            };

            export default LoginFormm;