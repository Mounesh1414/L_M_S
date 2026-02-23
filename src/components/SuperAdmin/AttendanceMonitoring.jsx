import React, { useState } from 'react';
import { Calendar, Search, Download, Filter, UserCheck, Clock, TrendingUp } from 'lucide-react';

const AttendanceMonitoring = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const attendanceData = [
    {
      id: 1,
      college: 'MIT College',
      batch: 'Batch A',
      date: '2026-01-31',
      present: 42,
      absent: 5,
      totalStudents: 47,
      percentage: 89.4
    },
    {
      id: 2,
      college: 'COEP',
      batch: 'Batch B',
      date: '2026-01-31',
      present: 38,
      absent: 3,
      totalStudents: 41,
      percentage: 92.7
    },
    {
      id: 3,
      college: 'VIT',
      batch: 'Batch A',
      date: '2026-01-31',
      present: 50,
      absent: 2,
      totalStudents: 52,
      percentage: 96.2
    },
  ];

  const stats = [
    { label: 'Average Attendance', value: '92.8%', icon: TrendingUp, color: 'green' },
    { label: 'Total Students', value: '140', icon: UserCheck, color: 'blue' },
    { label: 'Present Today', value: '130', icon: UserCheck, color: 'indigo' },
    { label: 'Absent Today', value: '10', icon: Clock, color: 'red' },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Attendance Monitoring</h1>
        <p className="text-gray-600">Track and monitor student attendance across all colleges</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`bg-${stat.color}-100 p-3 rounded-lg`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search college or batch..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
            />
          </div>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
            />
          </div>
          <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5" />
            <span>Filter</span>
          </button>
          <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            <Download className="w-5 h-5" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">College</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Present</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Absent</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {attendanceData.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{record.college}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{record.batch}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{record.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-600 font-medium">{record.present}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-red-600 font-medium">{record.absent}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">{record.totalStudents}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className={`h-2 rounded-full ${
                            record.percentage >= 90 ? 'bg-green-500' : record.percentage >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${record.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{record.percentage}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        record.percentage >= 90
                          ? 'bg-green-100 text-green-800'
                          : record.percentage >= 75
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {record.percentage >= 90 ? 'Excellent' : record.percentage >= 75 ? 'Good' : 'Low'}
                    </span>
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

export default AttendanceMonitoring;
