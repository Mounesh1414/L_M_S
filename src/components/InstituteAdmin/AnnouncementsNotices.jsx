import React from 'react';
import { Bell, Plus, Eye, Edit, Trash2, Calendar, Users, AlertCircle } from 'lucide-react';

const AnnouncementsNotices = () => {
  const announcements = [
    {
      id: 1,
      title: 'Semester End Examination Schedule',
      message: 'Final exams will be conducted from February 15-28, 2026. Students are requested to check their exam timetables.',
      date: '2026-01-28',
      audience: 'All Students',
      priority: 'high',
      status: 'published'
    },
    {
      id: 2,
      title: 'New Batch Orientation Program',
      message: 'Orientation for CSE-2026 batch will be held on February 5th at 10:00 AM in the Main Auditorium.',
      date: '2026-01-27',
      audience: 'CSE Department',
      priority: 'medium',
      status: 'published'
    },
    {
      id: 3,
      title: 'Faculty Development Workshop',
      message: 'All trainers are invited to attend the workshop on Modern Teaching Methodologies on February 10th.',
      date: '2026-01-26',
      audience: 'All Trainers',
      priority: 'medium',
      status: 'published'
    },
    {
      id: 4,
      title: 'College Holiday Notice',
      message: 'The college will remain closed on February 15th for Republic Day celebration.',
      date: '2026-01-25',
      audience: 'All',
      priority: 'low',
      status: 'published'
    }
  ];

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'bg-red-100 text-red-700',
      medium: 'bg-orange-100 text-orange-700',
      low: 'bg-blue-100 text-blue-700'
    };
    return colors[priority] || colors.low;
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Announcements & Notices</h1>
          <p className="text-gray-600 mt-1">Communicate with students and trainers</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          New Announcement
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-1">28</h3>
          <p className="text-sm text-gray-600">Total Announcements</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-1">12</h3>
          <p className="text-sm text-gray-600">This Month</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-1">2,450</h3>
          <p className="text-sm text-gray-600">Total Reach</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-1">92%</h3>
          <p className="text-sm text-gray-600">Read Rate</p>
        </div>
      </div>

      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(announcement.priority)}`}>
                    {announcement.priority} priority
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                    {announcement.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{announcement.title}</h3>
                <p className="text-gray-700 mb-4">{announcement.message}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {announcement.date}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {announcement.audience}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsNotices;
