import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Chat.module.scss'

import emptyChatImage from '/chat/EmptyChat.png'

import Container from '../../uiComponent/Container/Container';
import Back from '../../uiComponent/Back/Back';
import EmptyPage from '../../components/NoContent/EmptyPage/EmptyPage';

const chat = []

const Chat = () => {
    const { t } = useTranslation('chat');

    return (
        <Container>
            <Back text={t('arrow')} />
            <div className={styles.Message}>
                {!chat.length && <EmptyPage label={t('emptyChat')} img={emptyChatImage}/>}
            </div>
        </Container>
    );
};

export default Chat;