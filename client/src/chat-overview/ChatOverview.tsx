import './chatOverview.css';

export function ChatOverview(name:any) {
    return (
        <div className='chat-overview'>
            <img className='chat-overview-image' src='logo192.png' alt=''/>
            <div className='chat-overview-content'>
                <div className='chat-overview-name'> {name}</div>
                <div className='chat-overview-last-message'>My last message</div>
            </div>
        </div>
    );
}
