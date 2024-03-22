import React, {useEffect} from 'react';
import styles from './LogIn.module.scss'
import Container from "../../uiComponent/Container/Container";
import {Link, Navigate} from "react-router-dom";
import LoginFormm from "../../components/RegistrationForm/LoginForm/LoginFormm";
import {useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from "../../hook";
import {LoginProps} from "./Login.props";
import {changeStatus} from "../../store/slices/userSlices/passwordSlice";
import {closeModal, openModal} from "../../store/slices/modalSlice";


const LogIn = ({title}:LoginProps) => {
    const {t} = useTranslation(['login', 'modal'])
    const dispatch = useAppDispatch();
    const loading = useAppSelector(state => state.auth.loading)
    const status = useAppSelector(state => state.resetPassword.status)
    useEffect(() => {
        if (status === 'succeeded') {
            handleOpenModal();
            setTimeout(() => {
                dispatch(changeStatus())
            }, 4000);
        }
    }, [status]);

    const handleOpenModal = () => {
        dispatch(openModal({type: 'informMessage', props: {key: 'value'},text: t('modal:InformMessage.textSendEmail')}));
        setTimeout(() => {
            dispatch(closeModal());
        }, 3000);
    }



    return (
        <>
            {loading && <Navigate to="/account" replace/>}
            <div>
                <Container>
                    <div className={styles.Wrapper}>
                        <div className={styles.WrapperArrow}>
                            <Link className={styles.WrapperArrowLink} to='/'> <img src="/login/arrow.svg"
                                                                                   alt="arrow"/> {t('login:arrow')}</Link>
                        </div>
                        <div className={styles.WrapperForm}>
                            <p className={styles.WrapperFormGreetings}>{t('login:titleLogin')}</p>
                            <LoginFormm/>
                        </div>
                        <div className={styles.WrapperImage}>
                        <img src="/login/books.png" alt="books"/>
                        </div>
                    </div>
                </Container>

            </div>

        </>

    );
};

export default LogIn;