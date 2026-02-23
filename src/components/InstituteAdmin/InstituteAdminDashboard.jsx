import React from 'react';
import {
  BookOpen,
  Users,
  GraduationCap,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const InstituteAdminDashboard = () => {
  // Mock data
  const stats = [
    {
      title: 'Active Batches',
      value: '32',
      change: '+4 this month',
      icon: BookOpen,
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Total Students',
      value: '1,850',
      change: '+120 this month',
      icon: GraduationCap,
      color: 'bg-green-500',
      lightColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Assigned Trainers',
      value: '125',
      change: '+8 new trainers',
      icon: Users,
      color: 'bg-purple-500',
      lightColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      title: 'Ongoing Courses',
      value: '48',
      change: '+5 this week',
      icon: BookOpen,
      color: 'bg-orange-500',
      lightColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
  ];

  const enrollmentData = [
    { month: 'Jan', students: 1420, batches: 28 },
    { month: 'Feb', students: 1520, batches: 29 },
    { month: 'Mar', students: 1630, batches: 30 },
    { month: 'Apr', students: 1720, batches: 31 },
    { month: 'May', students: 1780, batches: 31 },
    { month: 'Jun', students: 1850, batches: 32 },
  ];

  const recentBatches = [
    {
      name: 'Computer Science - Batch A',
      department: 'CSE',
      students: 60,
      trainer: 'Dr. John Smith',
      status: 'active',
      startDate: '2026-01-15'
    },
    {
      name: 'Mechanical Engineering - Batch B',
      department: 'MECH',
      students: 55,
      trainer: 'Prof. Sarah Johnson',
      status: 'active',
      startDate: '2026-01-20'
    },
    {
      name: 'Data Science - Advanced',
      department: 'CSE',
      students: 45,
      trainer: 'Dr. Michael Brown',
      status: 'active',
      startDate: '2026-01-22'
    },
    {
      name: 'Business Analytics',
      department: 'MBA',
      students: 50,
      trainer: 'Prof. Emily Davis',
      status: 'scheduled',
      startDate: '2026-02-01'
    },
  ];

  const upcomingActivities = [
    {
      title: 'Semester Exam Registration',
      date: 'Feb 5, 2026',
      type: 'exam',
      priority: 'high'
    },
    {
      title: 'Trainer Evaluation Meeting',
      date: 'Feb 2, 2026',
      type: 'meeting',
      priority: 'medium'
    },
    {
      title: 'New Batch Orientation',
      date: 'Feb 1, 2026',
      type: 'event',
      priority: 'high'
    },
    {
      title: 'Monthly Performance Review',
      date: 'Jan 31, 2026',
      type: 'review',
      priority: 'medium'
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600 mt-1">Welcome back, Institute Admin</p>
        </div>
        <div className="flex items-center space-x-3">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Semester</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-sm text-gray-500 mt-2">{stat.change}</p>
              </div>
              <div className={`${stat.lightColor} p-4 rounded-xl`}>
                <stat.icon className={`w-8 h-8 ${stat.textColor}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Enrollment Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Enrollment Trends</h3>
              <p className="text-sm text-gray-600">Students & batches growth</p>
            </div>
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={enrollmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="students"
                stroke="#3b82f6"
                strokeWidth={2}
                name="Students"
              />
              <Line
                type="monotone"
                dataKey="batches"
                stroke="#8b5cf6"
                strokeWidth={2}
                name="Batches"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Upcoming Activities */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Upcoming Activities</h3>
              <p className="text-sm text-gray-600">Important dates & events</p>
            </div>
            <Calendar className="w-6 h-6 text-blue-600" />
          </div>
          <div className="space-y-4">
            {upcomingActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    activity.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                  }`}
                />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{activity.title}</p>
                  <div className="flex items-center text-xs text-gray-600 mt-1">
                    <Clock className="w-3 h-3 mr-1" />
                    {activity.date}
                  </div>
                </div>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    activity.type === 'exam'
                      ? 'bg-red-100 text-red-700'
                      : activity.type === 'meeting'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {activity.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Batches */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">Recent Batches</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Batch Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Department
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Students
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Trainer
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Start Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentBatches.map((batch, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="font-semibold text-gray-900">{batch.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{batch.department}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-4 h-4 text-gray-400" />
                      <span className="font-semibold text-gray-900">{batch.students}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{batch.trainer}</td>
                  <td className="px-6 py-4 text-gray-600">{batch.startDate}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        batch.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {batch.status.charAt(0).toUpperCase() + batch.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
          <GraduationCap className="w-10 h-10 mb-3" />
          <h3 className="text-lg font-bold mb-1">Add Students</h3>
          <p className="text-sm text-blue-100">Bulk upload or individual entry</p>
        </button>
        <button className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
          <BookOpen className="w-10 h-10 mb-3" />
          <h3 className="text-lg font-bold mb-1">Create Batch</h3>
          <p className="text-sm text-green-100">Set up new training batch</p>
        </button>
        <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
          <Users className="w-10 h-10 mb-3" />
          <h3 className="text-lg font-bold mb-1">Assign Trainers</h3>
          <p className="text-sm text-purple-100">Allocate trainers to batches</p>
        </button>
      </div>
    </div>
  );
};

export default InstituteAdminDashboard;
