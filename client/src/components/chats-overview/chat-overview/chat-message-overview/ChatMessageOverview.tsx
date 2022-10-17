import './chatMessageOverview.css';
import { ChatMessageOverview as chatMessageOverview} from '../../../../models/chat/chat-overview/ChatMessageOverview';

const MAX_MESSAGE_LENGTH = 40;

export function ChatMessageOverview({sender, message, date, readBy}:chatMessageOverview) {
    const cropLongMessage = (message:string) => {
        const isLongMessage = message.length > MAX_MESSAGE_LENGTH;
        return isLongMessage ? message.substring(0, MAX_MESSAGE_LENGTH) + '...' : message;
    };

    return (
        <div className='chat-message-overview'>
            <div className='chat-message-overview-content'>
                <div className='chat-message-overview-sender'>{sender+': '}</div>
                <div className='chat-message-overview-message'>{cropLongMessage(message)}</div>
                {readBy.length === 0 && <div className='chat-message-overview-not-read' />}
            </div> 
            <div className='chat-message-overview-date'>{date.toLocaleTimeString()}</div>
        </div>
    );
}
