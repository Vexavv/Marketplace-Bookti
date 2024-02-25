import React, {useEffect} from 'react';
import styles from './RenamePassword.module.scss'
import {useTranslation} from "react-i18next";
import Container from "../../uiComponent/Container/Container";
import {Link, Navigate} from "react-router-dom";
import PasswordForm from "../../components/RegistrationForm/PasswordForm/PasswordForm";
import {useAppDispatch, useAppSelector} from "../../hook";
import {closeModal, openModal} from "../../store/slices/modalSlice";
import { useLocation } from 'react-router-dom';
import {changeStatus, setResetToken} from "../../store/slices/passwordSlice";
import {useNavigate} from "react-router-dom";


const RenamePassword = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const {t} = useTranslation(['login', 'modal']);
    const status = useAppSelector(state => state.resetPassword.status)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const resetToken = searchParams.get('resetToken');

    useEffect(() => {
        if (resetToken) {
            dispatch(setResetToken(resetToken));
        }
    }, [resetToken]);

    useEffect(() => {
        if (status === 'succeeded') {
            handleOpenModal();
            setTimeout(() => {
                dispatch(changeStatus())
                navigate('/login',{replace:true})
            }, 3000);
        }
    }, [status]);

    const handleOpenModal = () => {
        dispatch(openModal({type: 'informMessage', props: {key: 'value'},text: t('modal:InformMessage.textReset')}));
        setTimeout(() => {
            dispatch(closeModal());
        }, 3000);
    }

    return (
        <>
            {resetToken && <Container>
                <div className={styles.Wrapper}>
                    <div className={styles.WrapperArrow}>
                        <Link className={styles.WrapperArrowLink} to='/'> <img src="/login/arrow.svg" alt="arrow"/>{t('login:arrow')}</Link>
                    </div>
                    <div className={styles.WrapperForm}>
                        <p className={styles.WrapperFormGreetings}>{t('login:titleRenamePassword')}</p>
                        <p className={styles.WrapperFormText}>{t('login:textRenamePassword')}</p>
                        <PasswordForm/>
                    </div>
                    <div className={styles.WrapperImage}>
                        <img src="/login/books.png" alt="books"/>
                    </div>
                </div>
            </Container>
            }
            {!resetToken && <Navigate to="/" replace/>}
        </>
    );
};

export default RenamePassword;