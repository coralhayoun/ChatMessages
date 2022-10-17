import { ChatViewHeader } from './chat-view-header/ChatViewHeader';
import { DefaultChatView } from './DefaultChatView';

export function ChatView(props: { name: string | null; image: string | null }) {
  return (
    <div>
      {props.name && props.image ? (
        <ChatViewHeader name={props.name} image={props.image} />
      ) : (
        <DefaultChatView />
      )}
    </div>
  );
}
