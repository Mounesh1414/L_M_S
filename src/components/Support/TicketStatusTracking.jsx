import React from 'react';
import { Activity, Clock, CheckCircle, XCircle, AlertCircle, TrendingUp } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const TicketStatusTracking = () => {
  const statusData = [
    { status: 'Open', count: 156, percentage: 27, color: '#f59e0b' },
    { status: 'In Progress', count: 124, percentage: 22, color: '#3b82f6' },
    { status: 'Resolved', count: 245, percentage: 43, color: '#10b981' },
    { status: 'Closed', count: 48, percentage: 8, color: '#6b7280' }
  ];

  const weeklyTrend = [
    { day: 'Mon', open: 45, resolved: 38, closed: 12 },
    { day: 'Tue', open: 52, resolved: 42, closed: 15 },
    { day: 'Wed', open: 38, resolved: 48, closed: 18 },
    { day: 'Thu', open: 48, resolved: 52, closed: 14 },
    { day: 'Fri', open: 42, resolved: 45, closed: 16 },
    { day: 'Sat', open: 28, resolved: 32, closed: 8 },
    { day: 'Sun', open: 22, resolved: 28, closed: 6 }
  ];

  const resolutionTime = [
    { category: 'Technical', avgTime: 2.5 },
    { category: 'Account', avgTime: 1.8 },
    { category: 'Content', avgTime: 3.2 },
    { category: 'Assessment', avgTime: 2.1 },
    { category: 'Attendance', avgTime: 1.5 },
    { category: 'Certificate', avgTime: 1.2 }
  ];

  const stats = [
    { label: 'Total Tickets', value: '573', icon: Activity, color: 'blue' },
    { label: 'Open Tickets', value: '156', icon: AlertCircle, color: 'orange' },
    { label: 'Avg Resolution Time', value: '2.1h', icon: Clock, color: 'purple' },
    { label: 'Satisfaction Rate', value: '94%', icon: CheckCircle, color: 'green' }
  ];

  const recentActivity = [
    { id: 1, ticketId: 'TICK-2026-0156', action: 'Opened', user: 'Rahul Kumar', time: '5 min ago', status: 'open' },
    { id: 2, ticketId: 'TICK-2026-0155', action: 'Resolved', user: 'Priya Sharma', time: '12 min ago', status: 'resolved' },
    { id: 3, ticketId: 'TICK-2026-0154', action: 'Closed', user: 'Amit Patel', time: '25 min ago', status: 'closed' },
    { id: 4, ticketId: 'TICK-2026-0153', action: 'In Progress', user: 'Sneha Reddy', time: '38 min ago', status: 'in-progress' }
  ];

  const getStatusIcon = (status) => {
    if (status === 'open') return <AlertCircle className="w-4 h-4 text-orange-600" />;
    if (status === 'in-progress') return <Clock className="w-4 h-4 text-blue-600" />;
    if (status === 'resolved') return <CheckCircle className="w-4 h-4 text-green-600" />;
    return <XCircle className="w-4 h-4 text-gray-600" />;
  };

  const getStatusBadge = (status) => {
    if (status === 'open') return 'bg-orange-100 text-orange-700';
    if (status === 'in-progress') return 'bg-blue-100 text-blue-700';
    if (status === 'resolved') return 'bg-green-100 text-green-700';
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Ticket Status Tracking</h1>
        <p className="text-gray-600 mt-1">Monitor ticket lifecycle and performance metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <Icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Status Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Status Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percentage }) => `${percentage}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {statusData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-gray-700">{item.status}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(activity.status)}
                  <div>
                    <p className="font-semibold text-gray-900">{activity.ticketId}</p>
                    <p className="text-sm text-gray-600">{activity.user} - {activity.action}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(activity.status)}`}>
                    {activity.status}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Trend */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Weekly Ticket Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="open" stroke="#f59e0b" strokeWidth={2} name="Opened" />
              <Line type="monotone" dataKey="resolved" stroke="#10b981" strokeWidth={2} name="Resolved" />
              <Line type="monotone" dataKey="closed" stroke="#6b7280" strokeWidth={2} name="Closed" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Resolution Time by Category */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Avg Resolution Time by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={resolutionTime}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="avgTime" fill="#3b82f6" name="Hours" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TicketStatusTracking;
