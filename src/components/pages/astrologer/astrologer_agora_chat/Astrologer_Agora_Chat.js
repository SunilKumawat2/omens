import React, { useState, useEffect, useRef } from 'react';
import AC from 'agora-chat';
import { AGORA_APP_CHAT_APP_KEY, IMG_BASE_URL } from '../../../../config/Config';
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport';

const AgoraChatReceiver = () => {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [conn, setConn] = useState(null);
    const messagesEndRef = useRef(null);
    //   const accessToken = String(localStorage.getItem("chat_token") || "").trim();
    //   const user = String(localStorage.getItem("chat_uiid") || "").trim();
    const accessToken = "007eJxTYGjzsD3Z3GD1vned1t+UU8nsfa0Wtb1LDl27oRtkILCSfa4CQ6JBimmaRYqZWaqBoYmZkUliimmKmaVpSmqSRVqSmWWyxb9F6Q2BjAxnmzmZGRlYGRiBEMRXYTCxtDSzsEw10E01tjDTNTRMTdO1NEwy1zWxNEgyM0tJMUk2tAAAhmEnRw==";
    const user = "sunil_receiver_26";
    const chatPartner = "sunil_omens_5";

    // <------- Connect with the user ------------>
    useEffect(() => {
        if (accessToken && user) {
            const client = new AC.connection({ appKey: AGORA_APP_CHAT_APP_KEY });
            const options = { user: user, accessToken: accessToken };

            client.open(options)
                .then(() => {
                    setConn(client);
                    console.log("Successfully connected as receiver");
                })
                .catch((error) => console.error("Failed to connect:", error));
        }
    }, [accessToken, user]);

    useEffect(() => {
        if (conn) {
            conn.addEventHandler("messageReceived", {
                onTextMessage: (msg) => {
                    setMessages((prevMessages) => [...prevMessages, { sender: msg.from, text: msg.msg,time: msg.time  }]);
                },
            });
        }
    }, [conn]);

    // <--------- fetch the list of the msg history ----------->
    useEffect(() => {
        const fetchChatHistory = async () => {
            if (conn && user && chatPartner) {
                try {
                    const options = {
                        queue: chatPartner,
                        // count: 100, 
                        chatType: "singleChat",
                    };

                    const result = await conn.fetchHistoryMessages(options);

                    if (result && result) {
                        const formattedMessages = result.map(msg => ({
                            sender: msg.from,
                            text: msg.data, 
                            time: msg.time,
                        }));

                        setMessages(formattedMessages);
                    }
                } catch (error) {
                    console.error("Error fetching chat history:", error);
                }
            }
        };

        if (conn) {
            fetchChatHistory();
        }
    }, [conn, user, chatPartner]);


    const sendMessage = async (e) => {
        e.preventDefault()
        if (!conn || !messageInput.trim()) return;

        try {
            const msg = AC.message.create({
                chatType: 'singleChat',
                type: 'txt',
                to: chatPartner,
                msg: messageInput,
            });

            await conn.send(msg);
            setMessages(prevMessages => [...prevMessages, { sender: user, text: messageInput,time: Date.now() }]);
            setMessageInput('');
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

      // Auto-scroll to latest message
      useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, [messages]);

    return (
        <div className="h-screen flex items-center justify-center bg-gray-50 px-2">
            <div className="flex flex-col w-[90%] max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-4 border border-gray-200 h-[85vh]">
                {/* Header Section */}
                <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg">
                    <img
                        src={Common_Images_Transport?.user_logo}
                        className="h-14 w-14 rounded-full border-2 border-gray-300 object-cover shadow-sm"
                    />
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">{chatPartner}</h3>
                        <p className="text-sm text-gray-500">Online</p>
                    </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-3 bg-gray-100 rounded-md flex flex-col gap-2 h-[70vh]">
                    {messages?.map((msg, index) => (
                        <div
                            key={index}
                            className={`max-w-[75%] p-2 rounded-lg text-sm shadow-md ${
                                msg?.sender === user
                                    ? 'bg-[#9F2225] text-white self-end'
                                    : 'bg-gray-200 text-gray-800 self-start'
                            }`}
                        >
                            <strong className="block text-xs mb-1">{msg?.sender === user ? 'You' : msg?.sender}</strong>
                            <span className="break-words">{msg?.text}</span>
                            <p className="text-[10px] text-white-500 mt-1 self-end">
                                {new Date(parseInt(msg?.time)).toLocaleTimeString()}
                            </p>
                        </div>
                    ))}
                    <div ref={messagesEndRef}></div>
                </div>

                {/* Message Input Section */}
                <div className="flex mt-3 border-t border-gray-300 pt-3">
                    <form onSubmit={sendMessage} className="flex w-full gap-3 items-end">
                        <input
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-grow px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden"
                            rows="1"
                            style={{ minHeight: '40px' }} // Ensure it doesn't get too small
                        />
                        <button
                            type="submit"
                            className="px-5 py-3 bg-[#9F2225] text-white rounded-lg hover:bg-[#9F2225] transition-all"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AgoraChatReceiver;
