import { useState } from 'react'
import ChatLists from '../chatLists'

import ChatWindow from "../chatWindow"
import "./chatScreen.scss"

const ChatScreen = () => {
    const [showChat, setShowChat] = useState({});
    return (
        <div className='container'>
            <ChatLists showChat={showChat} setShowChat={setShowChat} />
            <ChatWindow showChat={showChat} setShowChat={setShowChat} />
        </div>
    );
}

export default ChatScreen;
