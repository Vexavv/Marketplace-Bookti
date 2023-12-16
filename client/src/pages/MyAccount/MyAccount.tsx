import React from 'react';
import styles from './MyAccount.module.scss'
import {useAppSelector} from "../../hook";
import { Navigate } from "react-router-dom";
const MyAccount = () => {
    const googleLoading = useAppSelector(state => state.auth.loadingGoogle)
    return (
        <>
            {googleLoading && <div>
                <button> Create new book</button>
                My Account
            </div>}
            {!googleLoading && <Navigate to="/" replace />}
        </>

    );
};

export default MyAccount;