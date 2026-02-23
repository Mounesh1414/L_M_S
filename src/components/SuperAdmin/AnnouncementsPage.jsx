import React, { useState } from 'react';
import { Bell, Plus, Search, Edit, Trash2, Eye, Send } from 'lucide-react';

const AnnouncementsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const announcements = [
    {
      id: 1,
      title: 'New Course Launch - AI & ML',
      message: 'We are excited to announce the launch of our new AI & Machine Learning course starting next month.',
      date: '2026-01-30',
      status: 'Published',
      audience: 'All Colleges',
      priority: 'High'
    },
    {
      id: 2,
      title: 'System Maintenance Notice',
      message: 'The LMS will undergo scheduled maintenance on February 5th from 2 AM to 4 AM IST.',
      date: '2026-01-28',
      status: 'Published',
      audience: 'All Users',
      priority: 'Medium'
    },
    {
      id: 3,
      title: 'Exam Schedule Released',
      message: 'Mid-term examination schedule has been released. Please check your respective portals.',
      date: '2026-01-25',
      status: 'Published',
      audience: 'Students',
      priority: 'High'
    },
    {
      id: 4,
      title: 'Welcome New Trainers',
      message: 'Please welcome our new trainers joining this semester.',
      date: '2026-01-20',
      status: 'Draft',
      audience: 'Trainers',
      priority: 'Low'
    },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Announcements</h1>
        <p className="text-gray-600">Create and manage system-wide announcements</p>
      </div>

      {/* Search and Add */}
      <div className="mb-6 flex justify-between items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search announcements..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
          />
        </div>
        <button className="ml-4 flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <Plus className="w-5 h-5" />
          <span>Create Announcement</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-sm text-gray-600">Total Announcements</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-sm text-gray-600">Published</p>
          <p className="text-3xl font-bold text-green-600 mt-2">18</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-sm text-gray-600">Drafts</p>
          <p className="text-3xl font-bold text-yellow-600 mt-2">6</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-sm text-gray-600">This Month</p>
          <p className="text-3xl font-bold text-indigo-600 mt-2">8</p>
        </div>
      </div>

      {/* Announcements List */}
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{announcement.title}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    announcement.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {announcement.status}
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    announcement.priority === 'High' ? 'bg-red-100 text-red-800' : 
                    announcement.priority === 'Medium' ? 'bg-orange-100 text-orange-800' : 
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {announcement.priority}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{announcement.message}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Bell className="w-4 h-4" />
                    <span>{announcement.audience}</span>
                  </div>
                  <span>•</span>
                  <span>{announcement.date}</span>
                </div>
              </div>
              <div className="flex space-x-2 ml-4">
                {announcement.status === 'Draft' && (
                  <button className="text-green-600 hover:text-green-900 p-2">
                    <Send className="w-5 h-5" />
                  </button>
                )}
                <button className="text-blue-600 hover:text-blue-900 p-2">
                  <Eye className="w-5 h-5" />
                </button>
                <button className="text-indigo-600 hover:text-indigo-900 p-2">
                  <Edit className="w-5 h-5" />
                </button>
                <button className="text-red-600 hover:text-red-900 p-2">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsPage;
