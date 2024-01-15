import React from 'react';
import styles from './MyAccount.module.scss'
import {useAppSelector} from "../../hook";
import { Navigate } from "react-router-dom";
const MyAccount = () => {
    const loading = useAppSelector(state => state.auth.loading)
    return (
        <>
            {loading && <div>
                My Account
            </div>}
            {!loading && <Navigate to="/" replace />}
        </>

    );
};

export default MyAccount;