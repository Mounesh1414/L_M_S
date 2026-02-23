import React, { useState } from 'react';
import {
  Calendar,
  Users,
  CheckCircle,
  XCircle,
  Clock,
  Download,
  Filter
} from 'lucide-react';

const Attendance = () => {
  const [selectedDate, setSelectedDate] = useState('2026-01-29');
  const [selectedBatch, setSelectedBatch] = useState('CSE Batch A');

  const batches = ['CSE Batch A', 'CSE Batch B', 'Data Science - Advanced', 'MBA Batch A'];

  const students = [
    { id: 1, name: 'Alice Johnson', rollNo: 'CSE001', attendance: 'present', time: '9:05 AM' },
    { id: 2, name: 'Bob Smith', rollNo: 'CSE002', attendance: 'present', time: '9:02 AM' },
    { id: 3, name: 'Charlie Brown', rollNo: 'CSE003', attendance: 'absent', time: '-' },
    { id: 4, name: 'Diana Prince', rollNo: 'CSE004', attendance: 'present', time: '9:10 AM' },
    { id: 5, name: 'Eve Wilson', rollNo: 'CSE005', attendance: 'late', time: '9:25 AM' },
    { id: 6, name: 'Frank Miller', rollNo: 'CSE006', attendance: 'present', time: '9:01 AM' },
  ];

  const attendanceStats = {
    total: 60,
    present: 52,
    absent: 5,
    late: 3,
  };

  const toggleAttendance = (studentId) => {
    // Toggle attendance logic here
    console.log('Toggle attendance for student:', studentId);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Attendance Tracking</h1>
          <p className="text-gray-600 mt-1">Mark and manage student attendance</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">Mark All Present</span>
          </button>
          <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <Download className="w-5 h-5" />
            <span className="font-semibold">Export Report</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Students</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{attendanceStats.total}</h3>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Present</p>
              <h3 className="text-2xl font-bold text-green-600 mt-1">{attendanceStats.present}</h3>
              <p className="text-xs text-gray-500 mt-1">
                {Math.round((attendanceStats.present / attendanceStats.total) * 100)}%
              </p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Absent</p>
              <h3 className="text-2xl font-bold text-red-600 mt-1">{attendanceStats.absent}</h3>
              <p className="text-xs text-gray-500 mt-1">
                {Math.round((attendanceStats.absent / attendanceStats.total) * 100)}%
              </p>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Late</p>
              <h3 className="text-2xl font-bold text-orange-600 mt-1">{attendanceStats.late}</h3>
              <p className="text-xs text-gray-500 mt-1">
                {Math.round((attendanceStats.late / attendanceStats.total) * 100)}%
              </p>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Session</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none">
              <option>Morning (9:00 AM - 12:00 PM)</option>
              <option>Afternoon (1:00 PM - 4:00 PM)</option>
              <option>Evening (5:00 PM - 8:00 PM)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">Student Attendance</h3>
          <p className="text-sm text-gray-600">{selectedBatch} - {selectedDate}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Roll No
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Student Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Check-in Time
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">{student.rollNo}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-semibold">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="font-medium text-gray-900">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{student.time}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        student.attendance === 'present'
                          ? 'bg-green-100 text-green-700'
                          : student.attendance === 'late'
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {student.attendance.charAt(0).toUpperCase() + student.attendance.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => toggleAttendance(student.id)}
                        className="px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors text-sm font-medium"
                      >
                        Toggle
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Weekly Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Weekly Attendance Overview</h3>
        <div className="grid grid-cols-7 gap-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={day} className="text-center">
              <p className="text-xs font-semibold text-gray-600 mb-2">{day}</p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-lg font-bold text-gray-900">{85 + index}%</p>
                <p className="text-xs text-gray-600 mt-1">52/60</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Attendance;
