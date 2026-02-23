import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Smile, Search, Phone, Video, MoreVertical, ArrowLeft, Image as ImageIcon, File } from 'lucide-react';

const MessagingChat = ({ roleColor = 'blue' }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const messagesEndRef = useRef(null);

  const [chats] = useState([
    {
      id: 1,
      name: 'Dr. John Smith',
      role: 'Instructor',
      avatar: '👨‍🏫',
      lastMessage: 'The assignment deadline has been extended',
      time: '2m ago',
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: 'Study Group',
      role: 'Group Chat',
      avatar: '👥',
      lastMessage: 'Anyone available for study session?',
      time: '15m ago',
      unread: 5,
      online: false,
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      role: 'Student',
      avatar: '👩‍🎓',
      lastMessage: 'Thanks for your help!',
      time: '1h ago',
      unread: 0,
      online: true,
    },
    {
      id: 4,
      name: 'Tech Support',
      role: 'Support Team',
      avatar: '🛠️',
      lastMessage: 'Your issue has been resolved',
      time: '2h ago',
      unread: 0,
      online: true,
    },
  ]);

  const [messages, setMessages] = useState({
    1: [
      {
        id: 1,
        sender: 'other',
        text: 'Hello! I wanted to discuss the upcoming assignment.',
        time: '10:30 AM',
      },
      {
        id: 2,
        sender: 'me',
        text: 'Sure! What would you like to know?',
        time: '10:32 AM',
      },
      {
        id: 3,
        sender: 'other',
        text: 'The assignment deadline has been extended to next Friday.',
        time: '10:35 AM',
      },
      {
        id: 4,
        sender: 'me',
        text: 'That\'s great! Thank you for letting me know.',
        time: '10:36 AM',
      },
    ],
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, selectedChat]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !selectedChat) return;

    const newMessage = {
      id: Date.now(),
      sender: 'me',
      text: message,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages({
      ...messages,
      [selectedChat.id]: [...(messages[selectedChat.id] || []), newMessage],
    });
    setMessage('');
  };

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex h-[600px]">
      {/* Sidebar - Chat List */}
      <div className={`w-80 border-r border-gray-200 flex flex-col ${selectedChat ? 'hidden lg:flex' : 'flex'}`}>
        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`p-4 cursor-pointer transition-colors border-b border-gray-100 ${
                selectedChat?.id === chat.id
                  ? `bg-${roleColor}-50`
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="text-3xl">{chat.avatar}</div>
                  {chat.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900 truncate">{chat.name}</h4>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                    {chat.unread > 0 && (
                      <span className={`ml-2 px-2 py-0.5 bg-${roleColor}-500 text-white text-xs rounded-full`}>
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      {selectedChat ? (
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedChat(null)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="relative">
                <div className="text-3xl">{selectedChat.avatar}</div>
                {selectedChat.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{selectedChat.name}</h3>
                <p className="text-sm text-gray-600">{selectedChat.online ? 'Online' : 'Offline'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Phone className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Video className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            <div className="space-y-4">
              {(messages[selectedChat.id] || []).map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] ${
                      msg.sender === 'me'
                        ? `bg-${roleColor}-600 text-white`
                        : 'bg-white text-gray-900'
                    } rounded-lg px-4 py-2 shadow`}
                  >
                    <p>{msg.text}</p>
                    <span
                      className={`text-xs mt-1 block ${
                        msg.sender === 'me' ? 'text-white/80' : 'text-gray-500'
                      }`}
                    >
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <button
                type="button"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Paperclip className="w-5 h-5 text-gray-600" />
              </button>
              <button
                type="button"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ImageIcon className="w-5 h-5 text-gray-600" />
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Smile className="w-5 h-5 text-gray-600" />
              </button>
              <button
                type="submit"
                className={`p-2 bg-${roleColor}-600 text-white rounded-lg hover:bg-${roleColor}-700 transition-colors`}
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex-1 hidden lg:flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="text-6xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a conversation</h3>
            <p className="text-gray-600">Choose from your existing conversations or start a new one</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagingChat;
