import React from 'react';
import {
  Headphones,
  CheckCircle,
  Clock,
  AlertTriangle,
  TrendingUp,
  Users,
  MessageSquare,
  Activity
} from 'lucide-react';

const SupportDashboard = () => {
  const stats = [
    { label: 'Open Tickets', value: '24', icon: Headphones, color: 'blue', change: '+3 today' },
    { label: 'Resolved Today', value: '18', icon: CheckCircle, color: 'green', change: '↑ 12%' },
    { label: 'Pending', value: '12', icon: Clock, color: 'orange', change: '6 urgent' },
    { label: 'Avg Response Time', value: '2.5h', icon: Activity, color: 'purple', change: '↓ 0.5h' },
  ];

  const recentTickets = [
    {
      id: 'TKT-1245',
      user: 'Alice Johnson',
      issue: 'Cannot access course videos',
      priority: 'high',
      status: 'open',
      time: '15 min ago'
    },
    {
      id: 'TKT-1244',
      user: 'Bob Smith',
      issue: 'Login credentials not working',
      priority: 'urgent',
      status: 'in-progress',
      time: '1 hour ago'
    },
    {
      id: 'TKT-1243',
      user: 'Charlie Brown',
      issue: 'Assignment submission error',
      priority: 'medium',
      status: 'open',
      time: '2 hours ago'
    },
    {
      id: 'TKT-1242',
      user: 'Diana Prince',
      issue: 'Certificate not generated',
      priority: 'low',
      status: 'resolved',
      time: '3 hours ago'
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Support Dashboard</h1>
        <p className="text-gray-600 mt-1">Monitor and manage support operations</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`bg-${stat.color}-50 p-3 rounded-lg`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <span className="text-sm text-gray-500">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Tickets */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900">Recent Tickets</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-semibold text-gray-900">{ticket.id}</span>
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            ticket.priority === 'urgent'
                              ? 'bg-red-100 text-red-700'
                              : ticket.priority === 'high'
                              ? 'bg-orange-100 text-orange-700'
                              : ticket.priority === 'medium'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {ticket.priority.toUpperCase()}
                        </span>
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            ticket.status === 'resolved'
                              ? 'bg-green-100 text-green-700'
                              : ticket.status === 'in-progress'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {ticket.status}
                        </span>
                      </div>
                      <p className="text-gray-900 font-medium">{ticket.issue}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {ticket.user}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {ticket.time}
                        </span>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-teal-50 text-teal-600 rounded-lg hover:bg-teal-100 transition-colors text-sm font-medium">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats Sidebar */}
        <div className="space-y-6">
          {/* Ticket Status */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Ticket Status</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Open</span>
                  <span className="font-bold text-gray-900">24</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">In Progress</span>
                  <span className="font-bold text-gray-900">12</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '30%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Resolved</span>
                  <span className="font-bold text-gray-900">18</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '45%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Common Issues */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Common Issues</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Login Issues</span>
                <span className="font-bold text-gray-900">8</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Video Access</span>
                <span className="font-bold text-gray-900">6</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Assignment Errors</span>
                <span className="font-bold text-gray-900">5</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-600">Certificate Issues</span>
                <span className="font-bold text-gray-900">3</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-6 text-white">
            <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full bg-white text-teal-600 px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors font-medium">
                Create New Ticket
              </button>
              <button className="w-full bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-400 transition-colors font-medium">
                View All Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportDashboard;
