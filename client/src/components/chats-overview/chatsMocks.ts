import { ChatOverview } from "../../models/chat/chat-overview/ChatOverview";

export const chatMocks :ChatOverview[] = [
    {
      name: 'corals chat',
      image: 'logo192.png',
      lastMessage: {
        sender: 'coral',
        message: 'i was in shachars house hgfgfgfgfgfgfgfgfgfggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg',
        date: new Date(),
        readBy: [],
      } 
    },
    {
      name: 'shachars chat',
      image: 'logo192.png',
      lastMessage: {
        sender: 'shachar',
        message: 'i was in corals house',
        date: new Date(),
        readBy: [],
      },
    },
    {
        name: 'omris chat',
        image: 'logo192.png',
        lastMessage: {
          sender: 'omri',
          message: 'i was in liads house hgfgfgfgfgfgfgfgfgfggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg',
          date: new Date(),
          readBy: ['coral'],
        } 
      },
      {
        name: 'ilays chat',
        image: 'logo192.png',
        lastMessage: {
          sender: 'ilay',
          message: 'i was in friends house',
          date: new Date(),
          readBy: ['coral'],
        },
      }
];