import React, { useState } from 'react';
import { Calendar, Download, Users, TrendingUp, CheckCircle, XCircle } from 'lucide-react';

const AttendanceTracking = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedDate, setSelectedDate] = useState('2026-01-26');

  const attendanceData = [
    {
      id: 1,
      batch: 'CSE-2026',
      department: 'CSE',
      totalStudents: 65,
      present: 60,
      absent: 5,
      attendanceRate: 92,
      date: '2026-01-26'
    },
    {
      id: 2,
      batch: 'ECE-2025',
      department: 'ECE',
      totalStudents: 68,
      present: 61,
      absent: 7,
      attendanceRate: 90,
      date: '2026-01-26'
    },
    {
      id: 3,
      batch: 'IT-2025',
      department: 'IT',
      totalStudents: 52,
      present: 46,
      absent: 6,
      attendanceRate: 88,
      date: '2026-01-26'
    },
    {
      id: 4,
      batch: 'MECH-2025',
      department: 'MECH',
      totalStudents: 55,
      present: 43,
      absent: 12,
      attendanceRate: 78,
      date: '2026-01-26'
    }
  ];

  const stats = [
    { label: 'Total Students', value: '2,450', color: 'blue' },
    { label: 'Present Today', value: '2,135', color: 'green' },
    { label: 'Absent Today', value: '315', color: 'red' },
    { label: 'Avg Attendance', value: '87%', color: 'purple' }
  ];

  const filteredData = selectedDepartment === 'all' 
    ? attendanceData 
    : attendanceData.filter(a => a.department === selectedDepartment);

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Attendance Tracking</h1>
          <p className="text-gray-600 mt-1">Monitor student attendance across departments</p>
        </div>
        <div className="flex items-center space-x-3">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="all">All Departments</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="IT">IT</option>
            <option value="MECH">MECH</option>
            <option value="CIVIL">CIVIL</option>
          </select>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredData.map((record) => (
          <div key={record.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{record.batch}</h3>
                <p className="text-sm text-gray-600">{record.department} Department</p>
              </div>
              <span className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                record.attendanceRate >= 90 
                  ? 'bg-green-100 text-green-700' 
                  : record.attendanceRate >= 80 
                  ? 'bg-orange-100 text-orange-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {record.attendanceRate}%
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-xs text-gray-600">Total</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{record.totalStudents}</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-xs text-green-700">Present</span>
                </div>
                <p className="text-2xl font-bold text-green-700">{record.present}</p>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <XCircle className="w-4 h-4 text-red-600" />
                  <span className="text-xs text-red-700">Absent</span>
                </div>
                <p className="text-2xl font-bold text-red-700">{record.absent}</p>
              </div>
            </div>

            <div className="mb-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-600">Attendance Rate</span>
                <span className="text-xs font-semibold text-purple-600">{record.attendanceRate}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full ${
                    record.attendanceRate >= 90 
                      ? 'bg-green-600' 
                      : record.attendanceRate >= 80 
                      ? 'bg-orange-600' 
                      : 'bg-red-600'
                  }`}
                  style={{ width: `${record.attendanceRate}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-200">
              <div className="flex items-center space-x-1 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{record.date}</span>
              </div>
              <button className="text-purple-600 hover:text-purple-700 text-sm font-semibold">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceTracking;
