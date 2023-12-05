import React, {useState} from 'react';
import styles from './LoginForm.module.scss'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password'
import {LoginForm} from "../../../types";
import Button from "../../Button/Button";

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Link } from 'react-router-dom';


// initialValues
const initialValuesLogin: LoginForm = {
    email: '',
    password: ''
}

// validations
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
const LoginFormm = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)

    const handleToggle = (setData: React.Dispatch<React.SetStateAction<boolean>>) => {
        setData((prev: boolean) => !prev);
    };



    return (
        <>
            <Formik initialValues={initialValuesLogin} onSubmit={(values,{resetForm }) => {
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
                        <span className={styles.FormVisibilityWrapperVisibility}
                              onClick={() => { handleToggle(setIsShowPassword) }}>
                                        {isShowPassword ? <Visibility /> : <VisibilityOff />}
                                    </span>

                    </div>
                    <ErrorMessage className={styles.FormInputError} component="span" name="password"/>
                    <p className={styles.FormText}>ЧИ</p>
                    <div className={styles.FormIcon}>
                        <Link to='/'>
                            <img src="/login/facebook.svg" alt="facebook"/>
                        </Link>
                        <Link to='/'>
                            <img src="/login/google.svg" alt="google"/>
                        </Link>

                    </div>
                    <Button name='MobileMenu' type="submit">Увійти</Button>

                </Form>
            </Formik>
        </>
    );
};

export default LoginFormm;