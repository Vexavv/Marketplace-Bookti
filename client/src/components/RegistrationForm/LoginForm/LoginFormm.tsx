import React, {useState} from 'react';
import styled from './LoginForm.module.scss'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password'
import {LoginForm} from "../../../types";
import Button from "../../Button/Button";


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
        console.log('fack')
    };



    return (
        <div>
            <Formik initialValues={initialValuesLogin} onSubmit={(values,{resetForm }) => {
                console.log('Checkout >>>', values)
                resetForm()
            }} validationSchema={validationSchemaLogin}>
                <Form>
                    <Field type="text" name="email"
                           placeholder="імя або пошта"/>
                    <ErrorMessage component="span" name="email"/>
                    <div>
                        <Field
                            name="password"
                            type={isShowPassword ? 'text' : 'password'}
                            placeholder="Password"
                        />
                        <span
                              onClick={() => { handleToggle(setIsShowPassword) }}>
                            affffff
                                        {/*{isShowPassword ? <Visibility /> : <VisibilityOff />}*/}
                                    </span>
                    </div>
                    <ErrorMessage component="span" name="password"/>
                    <Button type="submit">Sig in</Button>

                </Form>
            </Formik>
        </div>
    );
};

export default LoginFormm;