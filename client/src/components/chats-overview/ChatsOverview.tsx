import { ChatOverview } from './chat-overview/ChatOverview';
import { ChatOverview as chatOverview } from '../../models/chat/chat-overview/ChatOverview';

export function ChatsOverview(props: { chats: chatOverview[] }) {
  return (
    <div className='chats-overview'>
      {props.chats.map((chat: chatOverview, idx: number) => (
        <ChatOverview
          key={idx}
          id={chat.id}
          name={chat.name}
          image={chat.image}
          lastMessage={chat.lastMessage}
        />
      ))}
    </div>
  );
}
