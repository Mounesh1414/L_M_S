import React, { useState } from 'react';
import { Bell, X, Check, CheckCheck, Trash2, Settings as SettingsIcon } from 'lucide-react';

const NotificationCenter = ({ roleColor = 'blue' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'assignment',
      title: 'New Assignment Posted',
      message: 'Web Development Assignment 3 has been posted',
      time: '5 min ago',
      read: false,
      priority: 'high',
    },
    {
      id: 2,
      type: 'grade',
      title: 'Grade Updated',
      message: 'Your Python Quiz score has been updated',
      time: '1 hour ago',
      read: false,
      priority: 'medium',
    },
    {
      id: 3,
      type: 'announcement',
      title: 'System Maintenance',
      message: 'Scheduled maintenance on Sunday 2 AM - 4 AM',
      time: '3 hours ago',
      read: true,
      priority: 'low',
    },
    {
      id: 4,
      type: 'message',
      title: 'New Message',
      message: 'Dr. Smith replied to your query',
      time: '1 day ago',
      read: true,
      priority: 'medium',
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const filteredNotifications = notifications.filter((n) => {
    if (filter === 'unread') return !n.read;
    if (filter === 'read') return n.read;
    return true;
  });

  const getTypeIcon = (type) => {
    const icons = {
      assignment: '📝',
      grade: '🎯',
      announcement: '📢',
      message: '💬',
    };
    return icons[type] || '🔔';
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className={`absolute top-0 right-0 w-5 h-5 bg-${roleColor}-500 text-white text-xs rounded-full flex items-center justify-center font-bold`}>
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
          <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-[600px] flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900">Notifications</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={markAllAsRead}
                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                    title="Mark all as read"
                  >
                    <CheckCheck className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Settings">
                    <SettingsIcon className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-2">
                {['all', 'unread', 'read'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                      filter === f
                        ? `bg-${roleColor}-500 text-white`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                    {f === 'unread' && unreadCount > 0 && (
                      <span className="ml-1 text-xs">({unreadCount})</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Notifications List */}
            <div className="flex-1 overflow-y-auto">
              {filteredNotifications.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <Bell className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>No notifications</p>
                </div>
              ) : (
                filteredNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      !notification.read ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{getTypeIcon(notification.type)}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-semibold text-gray-900 text-sm">{notification.title}</h4>
                          {!notification.read && (
                            <div className={`w-2 h-2 bg-${roleColor}-500 rounded-full mt-1 flex-shrink-0`}></div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-500">{notification.time}</span>
                          <div className="flex items-center gap-2">
                            {!notification.read && (
                              <button
                                onClick={() => markAsRead(notification.id)}
                                className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                              >
                                Mark as read
                              </button>
                            )}
                            <button
                              onClick={() => deleteNotification(notification.id)}
                              className="text-gray-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {filteredNotifications.length > 0 && (
              <div className="p-3 border-t border-gray-200">
                <button className={`w-full py-2 text-${roleColor}-600 hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors`}>
                  View All Notifications
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default NotificationCenter;
