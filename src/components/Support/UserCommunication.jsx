import React, { useState } from 'react';
import { MessageSquare, Send, User, Clock, Paperclip, Search } from 'lucide-react';

const UserCommunication = () => {
  const [selectedTicket, setSelectedTicket] = useState(1);
  const [message, setMessage] = useState('');

  const tickets = [
    {
      id: 1,
      ticketId: 'TICK-2026-0156',
      userName: 'Rahul Kumar',
      userRole: 'Student',
      subject: 'Cannot access course materials',
      lastMessage: 'I have tried clearing cache but still facing the issue',
      lastMessageTime: '5 min ago',
      unread: 2,
      status: 'open'
    },
    {
      id: 2,
      ticketId: 'TICK-2026-0155',
      userName: 'Dr. Rajesh Kumar',
      userRole: 'Trainer',
      subject: 'Grade sync issue',
      lastMessage: 'The grades are not reflecting in the dashboard',
      lastMessageTime: '15 min ago',
      unread: 1,
      status: 'open'
    },
    {
      id: 3,
      ticketId: 'TICK-2026-0154',
      userName: 'Priya Sharma',
      userRole: 'Student',
      subject: 'Certificate download failed',
      lastMessage: 'Thank you for the help!',
      lastMessageTime: '1 hour ago',
      unread: 0,
      status: 'resolved'
    }
  ];

  const conversations = {
    1: [
      {
        id: 1,
        sender: 'user',
        name: 'Rahul Kumar',
        message: 'Hi, I am unable to access the Data Structures course materials. It shows "Access Denied" error.',
        timestamp: '10:30 AM',
        avatar: 'RK'
      },
      {
        id: 2,
        sender: 'support',
        name: 'Support Team',
        message: 'Hello Rahul, I understand the issue. Can you please try clearing your browser cache and cookies, then log in again?',
        timestamp: '10:32 AM',
        avatar: 'ST'
      },
      {
        id: 3,
        sender: 'user',
        name: 'Rahul Kumar',
        message: 'I have tried clearing cache but still facing the issue. Screenshot attached.',
        timestamp: '10:35 AM',
        avatar: 'RK'
      }
    ]
  };

  const stats = [
    { label: 'Active Chats', value: '24', color: 'blue' },
    { label: 'Avg Response Time', value: '3.2m', color: 'green' },
    { label: 'Messages Today', value: '156', color: 'purple' },
    { label: 'Satisfaction Rate', value: '94%', color: 'orange' }
  ];

  const currentTicket = tickets.find(t => t.id === selectedTicket);
  const currentConversation = conversations[selectedTicket] || [];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">User Communication</h1>
        <p className="text-gray-600 mt-1">Real-time chat with users</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Ticket List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
            {tickets.map((ticket) => (
              <button
                key={ticket.id}
                onClick={() => setSelectedTicket(ticket.id)}
                className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                  selectedTicket === ticket.id ? 'bg-blue-50 border-l-4 border-blue-600' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">
                        {ticket.userName.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{ticket.userName}</p>
                      <p className="text-xs text-gray-500">{ticket.userRole}</p>
                    </div>
                  </div>
                  {ticket.unread > 0 && (
                    <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      {ticket.unread}
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-gray-900 mb-1">{ticket.subject}</p>
                <p className="text-xs text-gray-600 truncate">{ticket.lastMessage}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {ticket.lastMessageTime}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    ticket.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {ticket.status}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col">
          {currentTicket ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">
                        {currentTicket.userName.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{currentTicket.userName}</p>
                      <p className="text-sm text-gray-600">{currentTicket.ticketId} - {currentTicket.subject}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    currentTicket.status === 'open' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {currentTicket.status}
                  </span>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-[400px]">
                {currentConversation.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'support' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[70%] ${
                      msg.sender === 'support' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        msg.sender === 'support' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                      }`}>
                        <span className="text-xs font-semibold">{msg.avatar}</span>
                      </div>
                      <div>
                        <div className={`px-4 py-3 rounded-lg ${
                          msg.sender === 'support' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                          <p className="text-sm">{msg.message}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 px-2">{msg.timestamp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                    <Send className="w-4 h-4 mr-2" />
                    Send
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              <p>Select a conversation to start chatting</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCommunication;
