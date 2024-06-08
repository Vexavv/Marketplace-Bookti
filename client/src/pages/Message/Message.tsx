import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Message.module.scss';

import noMessageImage from '../../assets/noNotifications.png'

import Container from '../../uiComponent/Container/Container';
import Back from '../../uiComponent/Back/Back';
import EmptyPage from '../../components/NoContent/EmptyPage/EmptyPage';

const messages = [];

const Message = () => {
    const { t } = useTranslation('message');

    return (
        <Container>
            <Back text={t('arrow')} />
            <div className={styles.Message}>
                {!messages.length && <EmptyPage label={t('noNotifications')} img={noMessageImage}/>}
            </div>
        </Container>
    );
};

export default Message;
