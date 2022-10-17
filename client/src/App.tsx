import './App.css';
import {ChatOverview} from './components/chat-overview/ChatOverview';

const chatOverviewMocks = [
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
  }
];


function App() {
  return (
    <div>
       {chatOverviewMocks.map((item,idx) => (
        <ChatOverview
          key={idx}
          name={item.name}
          image={item.image}
          lastMessage={item.lastMessage}
        />
      ))}
    </div>
  );
}

export default App;

