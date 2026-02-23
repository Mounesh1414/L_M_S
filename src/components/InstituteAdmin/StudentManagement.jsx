import React, { useState } from 'react';
import { Users, Search, Filter, Plus, Eye, Edit, Trash2, Mail, Phone, Calendar, Award } from 'lucide-react';

const StudentManagement = () => {
  const [activeTab, setActiveTab] = useState('all');

  const students = [
    {
      id: 1,
      name: 'Rahul Sharma',
      email: 'rahul.sharma@college.com',
      phone: '+91 98765 43210',
      department: 'CSE',
      batch: 'CSE-2026',
      enrollmentDate: '2026-01-15',
      status: 'active',
      courses: 5,
      attendance: 92,
      performance: 'excellent'
    },
    {
      id: 2,
      name: 'Priya Patel',
      email: 'priya.patel@college.com',
      phone: '+91 98765 43211',
      department: 'ECE',
      batch: 'ECE-2025',
      enrollmentDate: '2025-08-20',
      status: 'active',
      courses: 6,
      attendance: 88,
      performance: 'good'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      email: 'amit.kumar@college.com',
      phone: '+91 98765 43212',
      department: 'IT',
      batch: 'IT-2025',
      enrollmentDate: '2025-08-22',
      status: 'active',
      courses: 5,
      attendance: 95,
      performance: 'excellent'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      email: 'sneha.reddy@college.com',
      phone: '+91 98765 43213',
      department: 'MECH',
      batch: 'MECH-2026',
      enrollmentDate: '2026-01-18',
      status: 'active',
      courses: 4,
      attendance: 78,
      performance: 'average'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      email: 'vikram.singh@college.com',
      phone: '+91 98765 43214',
      department: 'CIVIL',
      batch: 'CIVIL-2025',
      enrollmentDate: '2025-08-25',
      status: 'inactive',
      courses: 5,
      attendance: 45,
      performance: 'poor'
    }
  ];

  const stats = [
    { label: 'Total Students', value: '2,450', color: 'blue' },
    { label: 'Active Students', value: '2,380', color: 'green' },
    { label: 'New This Month', value: '125', color: 'purple' },
    { label: 'Avg Attendance', value: '87%', color: 'orange' }
  ];

  const getPerformanceBadge = (performance) => {
    const badges = {
      excellent: 'bg-green-100 text-green-700',
      good: 'bg-blue-100 text-blue-700',
      average: 'bg-yellow-100 text-yellow-700',
      poor: 'bg-red-100 text-red-700'
    };
    return badges[performance] || badges.average;
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Student Management</h1>
          <p className="text-gray-600 mt-1">Manage student records and enrollment</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add Student
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Tabs and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Students
            </button>
            <button
              onClick={() => setActiveTab('active')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === 'active'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setActiveTab('inactive')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === 'inactive'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Inactive
            </button>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search students..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Student</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Contact</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Batch</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Enrollment</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Attendance</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Performance</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{student.name}</p>
                        <p className="text-sm text-gray-600">{student.department}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="w-4 h-4 mr-1" />
                        {student.email}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="w-4 h-4 mr-1" />
                        {student.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                      {student.batch}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{student.enrollmentDate}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            student.attendance >= 90 ? 'bg-green-500' :
                            student.attendance >= 75 ? 'bg-blue-500' :
                            student.attendance >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${student.attendance}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{student.attendance}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPerformanceBadge(student.performance)}`}>
                      {student.performance}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      student.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
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

export default StudentManagement;
