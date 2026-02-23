import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  TrendingUp,
  Users,
  Award,
  Calendar,
  Download,
  Filter
} from 'lucide-react';

const Performance = () => {
  const [selectedBatch, setSelectedBatch] = useState('CSE Batch A');
  const [timeRange, setTimeRange] = useState('monthly');

  const batches = ['CSE Batch A', 'CSE Batch B', 'Data Science - Advanced', 'MBA Batch A'];

  // Performance Trends Data
  const performanceTrends = [
    { month: 'Aug', average: 72, passed: 85, excellent: 45 },
    { month: 'Sep', average: 75, passed: 88, excellent: 52 },
    { month: 'Oct', average: 78, passed: 90, excellent: 58 },
    { month: 'Nov', average: 82, passed: 92, excellent: 65 },
    { month: 'Dec', average: 85, passed: 94, excellent: 70 },
    { month: 'Jan', average: 88, passed: 96, excellent: 75 },
  ];

  // Grade Distribution
  const gradeDistribution = [
    { name: 'A+ (90-100)', value: 18, color: '#10b981' },
    { name: 'A (80-89)', value: 22, color: '#3b82f6' },
    { name: 'B (70-79)', value: 15, color: '#f59e0b' },
    { name: 'C (60-69)', value: 8, color: '#ef4444' },
    { name: 'F (<60)', value: 2, color: '#6b7280' },
  ];

  // Top Performers
  const topPerformers = [
    { rank: 1, name: 'Alice Johnson', score: 95.5, improvement: '+5%' },
    { rank: 2, name: 'Bob Smith', score: 93.2, improvement: '+3%' },
    { rank: 3, name: 'Diana Prince', score: 91.8, improvement: '+7%' },
    { rank: 4, name: 'Frank Miller', score: 90.5, improvement: '+2%' },
    { rank: 5, name: 'Grace Lee', score: 89.7, improvement: '+4%' },
  ];

  // Students Needing Attention
  const needsAttention = [
    { name: 'Charlie Brown', score: 58, assignments: 3, attendance: '65%' },
    { name: 'Eve Wilson', score: 62, assignments: 5, attendance: '72%' },
    { name: 'Henry Davis', score: 64, assignments: 4, attendance: '68%' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Performance Analytics</h1>
          <p className="text-gray-600 mt-1">Track student progress and insights</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <Download className="w-5 h-5" />
            <span className="font-semibold">Export Report</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Batch</label>
            <select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            >
              {batches.map((batch) => (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Range</label>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            >
              <option value="weekly">Last 7 Days</option>
              <option value="monthly">Last 6 Months</option>
              <option value="yearly">Last Year</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none">
              <option>All Courses</option>
              <option>React Fundamentals</option>
              <option>JavaScript Advanced</option>
              <option>Database Design</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Average Score</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">88%</h3>
              <p className="text-xs text-green-600 mt-1">↑ 3% from last month</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pass Rate</p>
              <h3 className="text-2xl font-bold text-green-600 mt-1">96%</h3>
              <p className="text-xs text-green-600 mt-1">↑ 2% from last month</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <Award className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Excellence Rate</p>
              <h3 className="text-2xl font-bold text-blue-600 mt-1">75%</h3>
              <p className="text-xs text-green-600 mt-1">↑ 5% from last month</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Need Support</p>
              <h3 className="text-2xl font-bold text-orange-600 mt-1">3</h3>
              <p className="text-xs text-gray-600 mt-1">Students below 65%</p>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Performance Trends Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Performance Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="average" stroke="#9333ea" strokeWidth={2} name="Average Score" />
            <Line type="monotone" dataKey="passed" stroke="#10b981" strokeWidth={2} name="Pass Rate" />
            <Line type="monotone" dataKey="excellent" stroke="#3b82f6" strokeWidth={2} name="Excellence Rate" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Grade Distribution & Top Performers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Grade Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Grade Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={gradeDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {gradeDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Top Performers */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Top Performers</h3>
          <div className="space-y-3">
            {topPerformers.map((student) => (
              <div
                key={student.rank}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                    student.rank === 1 ? 'bg-yellow-500' :
                    student.rank === 2 ? 'bg-gray-400' :
                    student.rank === 3 ? 'bg-orange-600' : 'bg-purple-600'
                  }`}>
                    {student.rank}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{student.name}</p>
                    <p className="text-sm text-gray-600">Score: {student.score}%</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-green-600">{student.improvement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Students Needing Attention */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Students Needing Attention</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Student Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Current Score
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Pending Assignments
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Attendance
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {needsAttention.map((student, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-100 w-10 h-10 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-semibold">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="font-medium text-gray-900">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-red-600 font-bold">{student.score}%</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                      {student.assignments} pending
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{student.attendance}</td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors text-sm font-medium">
                      Send Reminder
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Performance;
