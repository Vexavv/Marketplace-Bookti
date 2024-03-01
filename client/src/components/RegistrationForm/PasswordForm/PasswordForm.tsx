import React, {useState} from 'react';
import styles from './PasswordForm.module.scss'
import {useTranslation} from "react-i18next";
import {Formik, Form, Field, ErrorMessage, FormikHelpers,} from 'formik';
import * as yup from "yup";
import YupPassword from 'yup-password'
import {LoginForm} from "../../../types";
import {IoEyeOffOutline, IoEyeOutline} from "react-icons/io5";
import Button from "../../../uiComponent/Button/Button";
import {handleTogglePassword} from "../../../helpers/handler";
import {useAppDispatch} from "../../../hook";
import {renamePasswordAsync} from "../../../store/slices/passwordSlice";



// interface PasswordValues {
//     password: string,
//     confirm_password: string,
//
//
// } // initialValues
const initialValuesPassword: LoginForm = {
    password: '',
    confirm_password: '',

}
const PasswordForm = () => {
    const {t} = useTranslation('login')
    const dispatch = useAppDispatch()
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowConfirm, setIsShowConfirm] = useState(false)
    //----------------------------Validation-----------------------------------------------------------
    YupPassword(yup)
    const validationSchemaPassword: yup.Schema<LoginForm> = yup.object().shape({
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

    })


    return (
        <div>
            <Formik initialValues={initialValuesPassword}
                    validationSchema={validationSchemaPassword}
                    onSubmit={(values: LoginForm, {resetForm}) => {
                        dispatch(renamePasswordAsync(values))
                        resetForm();
                    }}>
                <Form className={styles.Form}>
                    <div className={styles.FormVisibilityWrapper}>
                        <Field
                            className={styles.FormInput}
                            name="password"
                            type={isShowPassword ? 'text' : 'password'}
                            placeholder={t('LoginPlaceholder.newPassword')}
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
                    <div className={styles.FormButton}>
                        <Button name='MobileMenu' type="submit">{t('RenameButton')}</Button>
                    </div>

                </Form>

            </Formik>
        </div>
    );
};

export default PasswordForm;