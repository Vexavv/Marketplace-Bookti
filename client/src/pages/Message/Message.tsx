import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Message.module.scss';

import noMessageImage from '/message/noNotifications.png';

import Container from '../../uiComponent/Container/Container';
import Back from '../../uiComponent/Back/Back';
import EmptyPage from '../../components/NoContent/EmptyPage/EmptyPage';
import MessageContainer from '../../components/MessageComponents/MessageContainer/MessageContainer';
import MessageContent from '../../components/MessageComponents/MessageContent/MessageContent';

const messages = [
    {
        id: 1,
        title: 'Нові книжки додані до BookBridgeHub',
        desc: 'Перегляньте декілька нових книжок, доданих до BookBrigeHub за останній тиждень',
        data: '01.03.2024',
    },
    {
        id: 2,
        title: 'Додані книжки з розділу «Мене цікавить»',
        desc: 'Перегляньте додані книжки, які вас цікавлять',
        data: '04.03.2024',
    },
    {
        id: 3,
        title: 'Нові книжки додані до BookBridgeHub',
        desc: 'Перегляньте декілька нових книжок, доданих до BookBrigeHub за останній тиждень',
        data: '01.03.2024',
    },
    {
        id: 4,
        title: 'Додані книжки з розділу «Мене цікавить»',
        desc: 'Перегляньте додані книжки, які вас цікавлять',
        data: '04.03.2024',
    },
];

const Message = () => {
    const { t } = useTranslation('message');
    const [selectedMessage, setSelectedMessage] = useState<number | undefined>(
        undefined
    );

    function handleSelected(id: number) {
        setSelectedMessage(id);
    }

    return (
        <Container>
            <Back text={t('arrow')} />
            <div className={styles.MessagePage}>
                {messages.length ? (
                    <>
                        <div className={styles.MessageList}>
                            <MessageContainer
                                onSelect={handleSelected}
                                messages={messages}
                                selectMessageId={selectedMessage}
                            />
                        </div>
                        <div className={styles.SelectedMessage}>
                            {selectedMessage ? (
                                <MessageContent
                                    message={messages[selectedMessage - 1]}
                                />
                            ) : (
                                <p>
                                    Виберіть сповіщення, щоб його прочитати
                                </p>
                            )}
                        </div>
                    </>
                ) : (
                    <EmptyPage
                        label={t('noNotifications')}
                        img={noMessageImage}
                    />
                )}
            </div>
        </Container>
    );
};

export default Message;
