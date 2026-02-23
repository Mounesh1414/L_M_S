import React from 'react';
import { Bell, Plus, Eye, Edit, Trash2, Calendar, Users } from 'lucide-react';

const AnnouncementsToStudents = () => {
  const announcements = [
    {
      id: 1,
      title: 'Module 2 Quiz Scheduled',
      message: 'Arrays and Linked Lists quiz will be conducted on Feb 8th at 2:00 PM. Please prepare accordingly.',
      audience: 'CSE-2026',
      priority: 'high',
      date: '2026-01-26',
      readBy: 52,
      totalStudents: 65,
      status: 'published'
    },
    {
      id: 2,
      title: 'New Learning Materials Uploaded',
      message: 'Video lectures on React Hooks and practice exercises are now available in the course section.',
      audience: 'IT-2025',
      priority: 'medium',
      date: '2026-01-25',
      readBy: 48,
      totalStudents: 52,
      status: 'published'
    },
    {
      id: 3,
      title: 'Assignment Deadline Extended',
      message: 'Data Structures assignment deadline has been extended to Jan 30th due to technical issues.',
      audience: 'CSE-2026',
      priority: 'medium',
      date: '2026-01-24',
      readBy: 65,
      totalStudents: 65,
      status: 'published'
    },
    {
      id: 4,
      title: 'Extra Class - JavaScript ES6',
      message: 'An additional doubt-clearing session will be held tomorrow at 4:00 PM in Lab 205.',
      audience: 'IT-2025',
      priority: 'low',
      date: '2026-01-23',
      readBy: 38,
      totalStudents: 52,
      status: 'published'
    }
  ];

  const stats = [
    { label: 'Total Announcements', value: '32', color: 'blue' },
    { label: 'This Month', value: '8', color: 'green' },
    { label: 'Avg Read Rate', value: '88%', color: 'purple' },
    { label: 'Total Reach', value: '185', color: 'orange' }
  ];

  const getPriorityColor = (priority) => {
    if (priority === 'high') return 'bg-red-100 text-red-700';
    if (priority === 'medium') return 'bg-orange-100 text-orange-700';
    return 'bg-blue-100 text-blue-700';
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Announcements to Students</h1>
          <p className="text-gray-600 mt-1">Communicate with your batches</p>
        </div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          New Announcement
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-3 flex-1">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Bell className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{announcement.title}</h3>
                  <p className="text-sm text-gray-600">{announcement.message}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(announcement.priority)}`}>
                {announcement.priority}
              </span>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{announcement.date}</span>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                  {announcement.audience}
                </span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-1 text-gray-600">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">
                    {announcement.readBy}/{announcement.totalStudents} students read
                  </span>
                </div>
                <span className="text-sm font-semibold text-green-600">
                  {((announcement.readBy / announcement.totalStudents) * 100).toFixed(0)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: `${(announcement.readBy / announcement.totalStudents) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center text-sm">
                <Eye className="w-4 h-4 mr-1" />
                View Details
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Edit className="w-4 h-4" />
              </button>
              <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsToStudents;
