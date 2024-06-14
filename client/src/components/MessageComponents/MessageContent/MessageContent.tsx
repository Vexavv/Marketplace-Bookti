import React from 'react';
import styles from './MessageContent.module.scss'
import { useTranslation } from 'react-i18next';

import Button from '../../../uiComponent/Button/Button';

const MessageContent: React.FC<any> = ({ message }) => {
    const { t } = useTranslation('message')

    return (
        <div className={styles.MessageContent}>
            <h2>{message.title}</h2>
            <p>{message.desc}</p>
            <Button name='OpenMessage' onClick={()=>{}}>{t('openMessage')}</Button>
        </div>
    );
};

export default MessageContent;
