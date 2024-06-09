import React from 'react';
import styles from './MessageCard.module.scss';

const MessageCard: React.FC<any> = ({ message, onSelect, selectMessageId }) => {
    let cssClasses = `${styles.MessageCard} ${message.id === selectMessageId ? styles.Selected : ''}`;

    return (
        <div className={cssClasses} onClick={() => onSelect(message.id)}>
            <div>
                <h2>{message.title}</h2>
                <h5>{message.desc}</h5>
            </div>
            <div>
                <p>{message.data}</p>
                <button>
                    <img src="/message/garbage.svg" alt="" />
                </button>
            </div>
        </div>
    );
};

export default MessageCard;
