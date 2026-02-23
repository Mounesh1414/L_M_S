import React from 'react';
import { HelpCircle, MessageSquare, Clock, CheckCircle, AlertCircle, Eye, Reply } from 'lucide-react';

const SupportRequests = () => {
  const requests = [
    {
      id: 1,
      student: 'Rahul Sharma',
      batch: 'CSE-2026',
      subject: 'Unable to access course materials',
      message: 'I am unable to view the uploaded PDF files for Data Structures course.',
      date: '2026-01-29 10:30 AM',
      priority: 'high',
      status: 'open',
      category: 'Technical'
    },
    {
      id: 2,
      student: 'Priya Patel',
      batch: 'ECE-2025',
      subject: 'Attendance discrepancy',
      message: 'My attendance is showing 85% but I have attended all classes.',
      date: '2026-01-29 09:15 AM',
      priority: 'medium',
      status: 'in-progress',
      category: 'Attendance'
    },
    {
      id: 3,
      student: 'Amit Kumar',
      batch: 'IT-2025',
      subject: 'Certificate not generated',
      message: 'I completed the Web Development course but certificate is not available.',
      date: '2026-01-28 04:20 PM',
      priority: 'low',
      status: 'resolved',
      category: 'Certificate'
    },
    {
      id: 4,
      student: 'Sneha Reddy',
      batch: 'MECH-2026',
      subject: 'Test submission failed',
      message: 'My test submission got failed due to network issue. Please help.',
      date: '2026-01-28 02:45 PM',
      priority: 'high',
      status: 'open',
      category: 'Assessment'
    }
  ];

  const stats = [
    { label: 'Total Requests', value: '156', color: 'blue' },
    { label: 'Open', value: '24', color: 'orange' },
    { label: 'In Progress', value: '18', color: 'purple' },
    { label: 'Resolved', value: '114', color: 'green' }
  ];

  const getStatusColor = (status) => {
    const colors = {
      open: 'bg-orange-100 text-orange-700',
      'in-progress': 'bg-blue-100 text-blue-700',
      resolved: 'bg-green-100 text-green-700'
    };
    return colors[status] || colors.open;
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'bg-red-100 text-red-700',
      medium: 'bg-yellow-100 text-yellow-700',
      low: 'bg-blue-100 text-blue-700'
    };
    return colors[priority] || colors.low;
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Support / Help Requests</h1>
          <p className="text-gray-600 mt-1">Manage student and trainer support requests</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {requests.map((request) => (
          <div key={request.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(request.status)}`}>
                    {request.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(request.priority)}`}>
                    {request.priority}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                    {request.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{request.subject}</h3>
                <p className="text-gray-700 mb-3">{request.message}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold">From:</span>
                    <span>{request.student}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-semibold">
                      {request.batch}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {request.date}
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2 ml-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center text-sm">
                  <Reply className="w-4 h-4 mr-1" />
                  Reply
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center text-sm">
                  <Eye className="w-4 h-4 mr-1" />
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportRequests;
