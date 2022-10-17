
import './chatViewHeader.css';

interface ChatViewHeader {
    image: string;
    name: string;
};

export function ChatViewHeader({image, name}: ChatViewHeader) {
    return (
        <div className='chat-view'>
            <div className='chat-view-content'>
                <img src={image} />
                <div>{name}</div>
            </div>
        </div>
    )
}