import React from 'react';
import { AlertTriangle, ArrowUp, Clock, User, Tag, MessageSquare } from 'lucide-react';

const EscalationManagement = () => {
  const escalations = [
    {
      id: 1,
      ticketId: 'TICK-2026-0156',
      originalCategory: 'Technical Issues',
      issue: 'Critical system access failure affecting multiple users',
      reportedBy: 'Rahul Kumar',
      reportedByRole: 'Student',
      firstAgent: 'John Doe',
      escalatedTo: 'Senior Support Manager',
      escalationLevel: 'L2',
      priority: 'critical',
      reason: 'Complex technical issue requiring backend access',
      openedAt: '2026-01-29 09:00 AM',
      escalatedAt: '2026-01-29 10:30 AM',
      sla: '4 hours',
      timeRemaining: '2h 30m',
      status: 'in-progress',
      affectedUsers: 45
    },
    {
      id: 2,
      ticketId: 'TICK-2026-0155',
      originalCategory: 'Assessment & Grading',
      issue: 'Grade discrepancy in final exam results',
      reportedBy: 'Dr. Rajesh Kumar',
      reportedByRole: 'Trainer',
      firstAgent: 'Sarah Smith',
      escalatedTo: 'Academic Head',
      escalationLevel: 'L3',
      priority: 'high',
      reason: 'Requires administrative approval for grade changes',
      openedAt: '2026-01-28 02:15 PM',
      escalatedAt: '2026-01-28 04:45 PM',
      sla: '8 hours',
      timeRemaining: '1h 15m',
      status: 'pending-approval',
      affectedUsers: 1
    },
    {
      id: 3,
      ticketId: 'TICK-2026-0154',
      originalCategory: 'Account & Access',
      issue: 'Unauthorized access attempt detected',
      reportedBy: 'Security System',
      reportedByRole: 'System',
      firstAgent: 'Mike Johnson',
      escalatedTo: 'Security Team',
      escalationLevel: 'L3',
      priority: 'critical',
      reason: 'Potential security breach requiring immediate investigation',
      openedAt: '2026-01-28 11:00 AM',
      escalatedAt: '2026-01-28 11:15 AM',
      sla: '2 hours',
      timeRemaining: 'Overdue by 30m',
      status: 'investigating',
      affectedUsers: 0
    },
    {
      id: 4,
      ticketId: 'TICK-2026-0153',
      originalCategory: 'Course Content',
      issue: 'Copyright claim on uploaded course material',
      reportedBy: 'Legal Notice',
      reportedByRole: 'System',
      firstAgent: 'John Doe',
      escalatedTo: 'Legal & Compliance',
      escalationLevel: 'L3',
      priority: 'high',
      reason: 'Legal matter requiring compliance team review',
      openedAt: '2026-01-27 10:30 AM',
      escalatedAt: '2026-01-27 11:00 AM',
      sla: '24 hours',
      timeRemaining: '18h 45m',
      status: 'pending-review',
      affectedUsers: 0
    }
  ];

  const stats = [
    { label: 'Active Escalations', value: '12', color: 'red' },
    { label: 'Resolved Today', value: '8', color: 'green' },
    { label: 'Avg Resolution Time', value: '4.2h', color: 'blue' },
    { label: 'SLA Compliance', value: '92%', color: 'purple' }
  ];

  const getLevelBadge = (level) => {
    if (level === 'L3') return 'bg-red-100 text-red-700';
    if (level === 'L2') return 'bg-orange-100 text-orange-700';
    return 'bg-blue-100 text-blue-700';
  };

  const getPriorityBadge = (priority) => {
    if (priority === 'critical') return 'bg-red-100 text-red-700';
    if (priority === 'high') return 'bg-orange-100 text-orange-700';
    return 'bg-yellow-100 text-yellow-700';
  };

  const getStatusBadge = (status) => {
    if (status === 'in-progress') return 'bg-blue-100 text-blue-700';
    if (status === 'investigating') return 'bg-purple-100 text-purple-700';
    if (status === 'pending-approval') return 'bg-orange-100 text-orange-700';
    return 'bg-yellow-100 text-yellow-700';
  };

  const getTimeColor = (timeRemaining) => {
    if (timeRemaining.includes('Overdue')) return 'text-red-600 font-bold';
    if (timeRemaining.includes('30m') || timeRemaining.includes('1h')) return 'text-orange-600 font-semibold';
    return 'text-green-600';
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Escalation Management</h1>
        <p className="text-gray-600 mt-1">Track high-priority and escalated tickets</p>
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
        {escalations.map((escalation) => (
          <div key={escalation.id} className="bg-white rounded-xl shadow-sm border-2 border-red-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-3 flex-1">
                <div className="bg-red-100 p-3 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{escalation.ticketId}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelBadge(escalation.escalationLevel)}`}>
                      {escalation.escalationLevel} Escalation
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityBadge(escalation.priority)}`}>
                      {escalation.priority}
                    </span>
                  </div>
                  <p className="text-gray-900 font-semibold mb-2">{escalation.issue}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {escalation.reportedBy} ({escalation.reportedByRole})
                    </span>
                    <span className="flex items-center">
                      <Tag className="w-4 h-4 mr-1" />
                      {escalation.originalCategory}
                    </span>
                    {escalation.affectedUsers > 0 && (
                      <span className="text-red-600 font-semibold">
                        {escalation.affectedUsers} users affected
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(escalation.status)}`}>
                {escalation.status.replace('-', ' ').toUpperCase()}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 text-sm">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">First Assigned To</p>
                <p className="font-semibold text-gray-900">{escalation.firstAgent}</p>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg">
                <p className="text-xs text-orange-700 mb-1 flex items-center">
                  <ArrowUp className="w-3 h-3 mr-1" />
                  Escalated To
                </p>
                <p className="font-semibold text-orange-900">{escalation.escalatedTo}</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-xs text-blue-700 mb-1">SLA Deadline</p>
                <p className="font-semibold text-blue-900">{escalation.sla}</p>
              </div>
              <div className={`bg-gray-50 p-3 rounded-lg ${escalation.timeRemaining.includes('Overdue') ? 'border-2 border-red-300' : ''}`}>
                <p className="text-xs text-gray-600 mb-1 flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  Time Remaining
                </p>
                <p className={`font-semibold ${getTimeColor(escalation.timeRemaining)}`}>
                  {escalation.timeRemaining}
                </p>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded-lg mb-3">
              <p className="text-xs font-semibold text-orange-900 mb-1 flex items-center">
                <MessageSquare className="w-4 h-4 mr-1" />
                ESCALATION REASON
              </p>
              <p className="text-sm text-gray-700">{escalation.reason}</p>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <span>Opened: {escalation.openedAt}</span>
                <span>Escalated: {escalation.escalatedAt}</span>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs font-medium">
                  View Details
                </button>
                <button className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-xs font-medium">
                  Update Status
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EscalationManagement;
