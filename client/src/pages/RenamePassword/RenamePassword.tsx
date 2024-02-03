import React, {useEffect} from 'react';
import styles from './RenamePassword.module.scss'
import {useTranslation} from "react-i18next";
import Container from "../../uiComponent/Container/Container";
import {Link, Navigate} from "react-router-dom";
import PasswordForm from "../../components/RegistrationForm/PasswordForm/PasswordForm";
import {useAppDispatch, useAppSelector} from "../../hook";
import {closeModal, openModal} from "../../store/slices/modalSlice";



const RenamePassword = () => {
    const dispatch = useAppDispatch()
    const {t} = useTranslation('login');
    const loading = useAppSelector(state => state.auth.loading)
    const status = useAppSelector(state => state.resetPassword.status)
    // console.log(status)
    const handleOpenModal = () => {
        dispatch(openModal({type: 'resetMessage', props: {key: 'value'}}));
        // setTimeout(() => {
        //     dispatch(closeModal());
        // }, 3000);
    }

    useEffect(() => {
        // Редирект на другую страницу, когда status станет 'loading'
        if (status === 'succeeded') {
            handleOpenModal();

            // Редирект на другую страницу через 3 секунды
            // setTimeout(() => {
            //     <Navigate to="/login" replace/>;
            // }, 3000);
        }
    }, [status]);
    return (
        <>
            {!loading && <Container>
                <div className={styles.Wrapper}>
                    <div className={styles.WrapperArrow}>
                        <Link className={styles.WrapperArrowLink} to='/'> <img src="/login/arrow.svg"
                                                                               alt="arrow"/>{t('arrow')}</Link>
                    </div>
                    <div className={styles.WrapperForm}>
                        <p className={styles.WrapperFormGreetings}>{t('titleRenamePassword')}</p>
                        <p className={styles.WrapperFormText}>{t('textRenamePassword')}</p>
                        <PasswordForm/>
                    </div>
                    <div className={styles.WrapperImage}>
                        <img src="/login/books.png" alt="books"/>
                    </div>
                </div>
            </Container>
            }
            {loading && <Navigate to="/" replace/>}


        </>
    );
};

export default RenamePassword;