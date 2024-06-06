import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Message.module.scss';

import Container from '../../uiComponent/Container/Container';
import Back from '../../uiComponent/Back/Back';
import NoMessage from '../../components/MessageComponents/NoMessage/NoMessage';

const messages = [];

const Message = () => {
    const { t } = useTranslation('message');

    return (
        <Container>
            <Back text={t('arrow')} />
            <div className={styles.Message}>
                {!messages.length && <NoMessage/>}
            </div>
        </Container>
    );
};

export default Message;
