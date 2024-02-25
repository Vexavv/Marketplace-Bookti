import React from 'react';
import styles from './InformMessage.module.scss'
import {InformMessageProps} from "./InformMessage.props";

const InformMessage = ({text}:InformMessageProps) => {


    return (
        <div className={styles.Message}>
            <img src="/login/check-circle.svg" alt="check-circle"/>
            <p className={styles.MessageText}>{text}</p>
        </div>
    );
};

export default InformMessage;