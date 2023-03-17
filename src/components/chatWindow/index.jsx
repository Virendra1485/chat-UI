import React from 'react'
import { MessageList } from "react-chat-elements"
import "./chatWindow.scss"
import { Input } from 'react-chat-elements'
import { Button } from "react-chat-elements";


interface ChatWindowProps {
    showChat: object;
    setShowChat: Function;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ showChat, setShowChat }) => {
    console.log("showChat", showChat);
    return (
        <div className="chat-container">
            <header className="chat-header">{showChat.title}</header>
            <MessageList
                className='message-list'
                lockable={true}
                toBottomHeight={'100%'}
                dataSource={[
                    {
                        position: "left",
                        type: "text",
                        title: "Kursat",
                        text: "Give me a message list example !",
                    },
                    {
                        position: "right",
                        type: "text",
                        title: "Emre",
                        text: "That's all.",
                    },
                    {
                        position: "left",
                        type: "text",
                        title: "Kursat",
                        text: "Give me a message list example !",
                    },
                    {
                        position: "right",
                        type: "text",
                        title: "Emre",
                        text: "That's all.",
                    },
                    {
                        position: "left",
                        type: "text",
                        title: "Kursat",
                        text: "Give me a message list example !",
                    },
                    {
                        position: "right",
                        type: "text",
                        title: "Emre",
                        text: "That's all.",
                    },
                    {
                        position: "left",
                        type: "text",
                        title: "Kursat",
                        text: "Give me a message list example !",
                    },
                    {
                        position: "right",
                        type: "text",
                        title: "Emre",
                        text: "That's all.",
                    },
                    {
                        position: "left",
                        type: "text",
                        title: "Kursat",
                        text: "Give me a message list example !",
                    },
                    {
                        position: "right",
                        type: "text",
                        title: "Emre",
                        text: "That's all.",
                    },
                    {
                        position: "left",
                        type: "text",
                        title: "Kursat",
                        text: "Give me a message list example !",
                    },
                    {
                        position: "right",
                        type: "text",
                        title: "Emre",
                        text: "That's all.",
                    },
                    {
                        position: "left",
                        type: "text",
                        title: "Kursat",
                        text: "Give me a message list example !",
                    },
                    {
                        position: "right",
                        type: "text",
                        title: "Emre",
                        text: "That's all.",
                    },
                    {
                        position: "left",
                        type: "text",
                        title: "Kursat",
                        text: "Give me a message list example !",
                    },
                    {
                        position: "right",
                        type: "text",
                        title: "Emre",
                        text: "That's all.",
                    },
                    {
                        position: "left",
                        type: "text",
                        title: "Kursat",
                        text: "Give me a message list example !",
                    },
                    {
                        position: "right",
                        type: "text",
                        title: "Emre",
                        text: "That's all.",
                    },
                    {
                        position: "left",
                        type: "text",
                        title: "Kursat",
                        text: "Give me a message list example !",
                    },
                    {
                        position: "right",
                        type: "text",
                        title: "Emre",
                        text: "That's all.",
                    },
                    {
                        position: "left",
                        type: "text",
                        title: "Kursat",
                        text: "Give me a message list example !",
                    },
                    {
                        position: "right",
                        type: "text",
                        title: "Emre",
                        text: "That's all.",
                    },
                    {
                        position: "left",
                        type: "text",
                        title: "Kursat",
                        text: "Give me a message list example !",
                    },
                    {
                        position: "right",
                        type: "text",
                        title: "Emre",
                        text: "That's all.",
                    },
                    {
                        position: "left",
                        type: "text",
                        title: "Kursat",
                        text: "Give me a message list example !",
                    },
                    {
                        position: "right",
                        type: "text",
                        title: "Emre",
                        text: "That's all.",
                    },
                    {
                        position: "left",
                        type: "text",
                        title: "Kursat",
                        text: "Give me a message list example !",
                    },
                    {
                        position: "right",
                        type: "text",
                        title: "Emre",
                        text: "That's all.",
                    },

                ]}
            />
            <Input
                placeholder="Type here..."
                rightButtons={<Button text={"Send"} onClick={() => alert("Sending...")} title="Send" />}
            />
        </div>
    );
}

export default ChatWindow;
