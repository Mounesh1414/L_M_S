import React from 'react';
import { FileText, Clock, CheckCircle, User, Tag, Download } from 'lucide-react';

const ResolutionLogs = () => {
  const resolutionLogs = [
    {
      id: 1,
      ticketId: 'TICK-2026-0156',
      category: 'Technical Issues',
      issue: 'Cannot access course materials',
      userName: 'Rahul Kumar',
      userRole: 'Student',
      assignedTo: 'John Doe',
      openedAt: '2026-01-29 09:15 AM',
      resolvedAt: '2026-01-29 11:45 AM',
      resolutionTime: '2h 30m',
      solution: 'Cleared user cache and reset permissions. Issue was due to session timeout. Advised user to refresh browser regularly.',
      status: 'resolved',
      priority: 'high',
      satisfaction: 5
    },
    {
      id: 2,
      ticketId: 'TICK-2026-0155',
      category: 'Account & Access',
      issue: 'Password reset not working',
      userName: 'Priya Sharma',
      userRole: 'Student',
      assignedTo: 'Sarah Smith',
      openedAt: '2026-01-29 08:30 AM',
      resolvedAt: '2026-01-29 09:15 AM',
      resolutionTime: '45m',
      solution: 'Email verification link was expired. Manually reset password from admin panel and sent new credentials.',
      status: 'resolved',
      priority: 'medium',
      satisfaction: 4
    },
    {
      id: 3,
      ticketId: 'TICK-2026-0154',
      category: 'Assessment & Grading',
      issue: 'Quiz submission failed',
      userName: 'Amit Patel',
      userRole: 'Student',
      assignedTo: 'Mike Johnson',
      openedAt: '2026-01-28 02:45 PM',
      resolvedAt: '2026-01-28 05:30 PM',
      resolutionTime: '2h 45m',
      solution: 'Network timeout during submission. Retrieved draft answers from database and manually submitted quiz. Full marks awarded.',
      status: 'resolved',
      priority: 'high',
      satisfaction: 5
    },
    {
      id: 4,
      ticketId: 'TICK-2026-0153',
      category: 'Certificates',
      issue: 'Certificate not generated',
      userName: 'Sneha Reddy',
      userRole: 'Student',
      assignedTo: 'John Doe',
      openedAt: '2026-01-28 11:20 AM',
      resolvedAt: '2026-01-28 12:00 PM',
      resolutionTime: '40m',
      solution: 'Course completion status was not updated. Manually triggered certificate generation after verifying completion criteria.',
      status: 'resolved',
      priority: 'low',
      satisfaction: 5
    }
  ];

  const stats = [
    { label: 'Total Resolved', value: '1,245', color: 'blue' },
    { label: 'Avg Resolution Time', value: '2.1h', color: 'green' },
    { label: 'This Month', value: '156', color: 'purple' },
    { label: 'Satisfaction Rate', value: '94%', color: 'orange' }
  ];

  const getPriorityBadge = (priority) => {
    if (priority === 'high') return 'bg-red-100 text-red-700';
    if (priority === 'medium') return 'bg-orange-100 text-orange-700';
    return 'bg-green-100 text-green-700';
  };

  const getSatisfactionStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Resolution Logs</h1>
          <p className="text-gray-600 mt-1">Complete history of resolved tickets</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <Download className="w-4 h-4 mr-2" />
          Export Logs
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

      <div className="space-y-4">
        {resolutionLogs.map((log) => (
          <div key={log.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4 flex-1">
                <div className="bg-green-100 p-3 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{log.ticketId}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityBadge(log.priority)}`}>
                      {log.priority}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {log.category}
                    </span>
                  </div>
                  <p className="text-gray-900 font-semibold mb-1">{log.issue}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {log.userName} ({log.userRole})
                    </span>
                    <span className="flex items-center">
                      <Tag className="w-4 h-4 mr-1" />
                      Assigned to: {log.assignedTo}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1 text-green-600 font-semibold mb-1">
                  <Clock className="w-4 h-4" />
                  <span>{log.resolutionTime}</span>
                </div>
                <p className="text-xs text-gray-500">Resolution Time</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">Opened At</p>
                <p className="font-semibold text-gray-900">{log.openedAt}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">Resolved At</p>
                <p className="font-semibold text-gray-900">{log.resolvedAt}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">User Satisfaction</p>
                <p className="font-semibold text-gray-900">{getSatisfactionStars(log.satisfaction)} ({log.satisfaction}/5)</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg">
              <p className="text-xs font-semibold text-blue-900 mb-1">RESOLUTION DETAILS</p>
              <p className="text-sm text-gray-700">{log.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResolutionLogs;
