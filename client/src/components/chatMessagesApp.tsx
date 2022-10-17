import { useState, useEffect } from 'react';
import './chatMessagesApp.css';
import { ChatsOverview } from './chats-overview/ChatsOverview';
import { ChatView } from './chat-view/ChatView';

import { chatMocks } from './chatsMocks';
import { ChatOverview as chatOverview } from '../models/chat/chat-overview/ChatOverview';

export function ChatMessagesApp() {
  const [chosenChat, setChosenChat] = useState<string>('');
  const [chats, setChats] = useState<chatOverview[]>([]);

  const onChatClick = (chatId: string) => setChosenChat(chatId);

  useEffect(() => {
    const getUserChats = () => chatMocks;
    setChats(getUserChats());
  }, []);

  return (
    <div className='chat-messages-app'>
      <ChatsOverview chats={chats} />
      <ChatView name={chats[0].name} image={chats[0].image} />
    </div>
  );
}
