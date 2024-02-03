import React from 'react';
import Button from "../../Button/Button";
import styles from './ResetMessage.module.scss'
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../../hook";
import {closeModal} from "../../../store/slices/modalSlice";
const ResetMessage = () => {
    const dispatch = useAppDispatch()
    return (
        <div className={styles.Message}>
            <img src="/login/check-circle.svg" alt="check-circle"/>
            <p className={styles.MessageText}>Ваш пароль успішно змінено</p>
            <Link to='/' >
                <Button onClick={()=>{dispatch(closeModal())} } name='ResetPasswordButton' type="submit" >На головну</Button>
            </Link>

        </div>
    );
};

export default ResetMessage;