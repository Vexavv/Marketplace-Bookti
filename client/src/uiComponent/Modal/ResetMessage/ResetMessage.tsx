import React from 'react';
import Button from "../../Button/Button";
import styles from './ResetMessage.module.scss'
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../../hook";
import {closeModal} from "../../../store/slices/modalSlice";
import {changeStatus} from "../../../store/slices/passwordSlice";
import {useTranslation} from "react-i18next";
const ResetMessage = () => {
    const dispatch = useAppDispatch()
    const {t} = useTranslation(['login', 'modal']);
    // const closeHandler = ()=>{
    //     dispatch(closeModal());
    //     dispatch(changeStatus())
    // }
    return (
        <div className={styles.Message}>
            <img src="/login/check-circle.svg" alt="check-circle"/>
            <p className={styles.MessageText}>{t('modal:ResetMessage.text')}</p>
            {/*<Link to='/'>*/}
            {/*    <Button onClick={() => {closeHandler()}} name='ResetPasswordButton' type="submit">{t('modal:ResetMessage.button')}</Button>*/}
            {/*</Link>*/}

        </div>
    );
};

export default ResetMessage;