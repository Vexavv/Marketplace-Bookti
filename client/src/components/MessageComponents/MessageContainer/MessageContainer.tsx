import MessageCard from '../MessageCard/MessageCard';
import styles from './MessageContainer.module.scss';

interface IMessageContainerPops {
    messages: any;
    onSelect: (id: number) => void;
    selectMessageId: number | undefined
}

const MessageContainer: React.FC<IMessageContainerPops> = ({
    messages,
    onSelect,
    selectMessageId
}) => {
    return (
        <>
            {messages.map((message: any) => {
                return (
                    <MessageCard
                        key={message.id}
                        message={message}
                        onSelect={onSelect}
                        selectMessageId={selectMessageId}
                    />
                );
            })}
        </>
    );
};

export default MessageContainer;
