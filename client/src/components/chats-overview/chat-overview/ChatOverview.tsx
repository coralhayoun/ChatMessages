import './chatOverview.css';
import { ChatOverview as chatOverview } from '../../../models/chat/chat-overview/ChatOverview';
import { ChatMessageOverview } from './chat-message-overview/ChatMessageOverview';

export function ChatOverview({ id, name, image, lastMessage }: chatOverview) {
  return (
    <div className='chat-overview'>
      <img className='chat-overview-image' src={image} alt='' />
      <div className='chat-overview-content'>
        <div className='chat-overview-name'> {name}</div>
        <ChatMessageOverview
          sender={lastMessage.sender}
          message={lastMessage.message}
          date={lastMessage.date}
          readBy={lastMessage.readBy}
        />
      </div>
    </div>
  );
}
