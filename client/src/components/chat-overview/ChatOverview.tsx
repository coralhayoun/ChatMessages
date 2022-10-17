import './chatOverview.css';
import { ChatOverview as chatOverview} from '../../models/chat/chat-overview/ChatOverview';
import { ChatMessageOverview } from './message-overview/MessageOverview';

export function ChatOverview({name, image, lastMessage}:chatOverview) {
    return (
        <div className='chat-overview'>
            <img className='chat-overview-image' src={image} alt=''/>
            <div className='chat-overview-content'>
                <div className='chat-overview-name'> {name}</div>
                <ChatMessageOverview 
                    sender = {lastMessage.sender}
                    message={lastMessage.message}
                    date={lastMessage.date}
                    readBy={lastMessage.readBy}
                />
            </div>
        </div>
    );
}
