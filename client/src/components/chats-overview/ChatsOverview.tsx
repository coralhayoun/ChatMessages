import { ChatOverview } from './chat-overview/ChatOverview';
import {chatMocks} from './chatsMocks';

export function ChatsOverview() {
    return (
        <>
          {chatMocks.map((item,idx) => (
                <ChatOverview
                  key={idx}
                  name={item.name}
                  image={item.image}
                  lastMessage={item.lastMessage}
                />
          ))}
      </>
    );
}
