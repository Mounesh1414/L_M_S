import React, { useState } from 'react';
import { Building2, Users, BookOpen, TrendingUp, Plus, Search, Filter, Eye, Edit, Trash2 } from 'lucide-react';

const DepartmentManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const departments = [
    {
      id: 1,
      name: 'Computer Science & Engineering',
      code: 'CSE',
      hod: 'Dr. Rajesh Kumar',
      students: 685,
      trainers: 15,
      batches: 6,
      courses: 24,
      status: 'active'
    },
    {
      id: 2,
      name: 'Electronics & Communication',
      code: 'ECE',
      hod: 'Prof. Anita Sharma',
      students: 542,
      trainers: 12,
      batches: 5,
      courses: 20,
      status: 'active'
    },
    {
      id: 3,
      name: 'Information Technology',
      code: 'IT',
      hod: 'Dr. Suresh Patil',
      students: 498,
      trainers: 11,
      batches: 4,
      courses: 22,
      status: 'active'
    },
    {
      id: 4,
      name: 'Mechanical Engineering',
      code: 'MECH',
      hod: 'Prof. Vijay Singh',
      students: 425,
      trainers: 10,
      batches: 4,
      courses: 18,
      status: 'active'
    },
    {
      id: 5,
      name: 'Civil Engineering',
      code: 'CIVIL',
      hod: 'Dr. Priya Nair',
      students: 380,
      trainers: 9,
      batches: 3,
      courses: 16,
      status: 'active'
    }
  ];

  const stats = [
    { label: 'Total Departments', value: departments.length, icon: Building2, color: 'blue' },
    { label: 'Total Students', value: departments.reduce((sum, d) => sum + d.students, 0).toLocaleString(), icon: Users, color: 'green' },
    { label: 'Total Trainers', value: departments.reduce((sum, d) => sum + d.trainers, 0), icon: Users, color: 'purple' },
    { label: 'Total Courses', value: departments.reduce((sum, d) => sum + d.courses, 0), icon: BookOpen, color: 'orange' }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Department Management</h1>
          <p className="text-gray-600 mt-1">Manage all departments and their resources</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add Department
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`bg-${stat.color}-50 p-3 rounded-lg`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search departments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Departments Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Department</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">HOD</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Students</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Trainers</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Batches</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Courses</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {departments.map((dept) => (
                <tr key={dept.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-gray-900">{dept.name}</p>
                      <p className="text-sm text-gray-600">{dept.code}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{dept.hod}</td>
                  <td className="px-6 py-4 text-gray-900 font-semibold">{dept.students}</td>
                  <td className="px-6 py-4 text-gray-900 font-semibold">{dept.trainers}</td>
                  <td className="px-6 py-4 text-gray-900 font-semibold">{dept.batches}</td>
                  <td className="px-6 py-4 text-gray-900 font-semibold">{dept.courses}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      {dept.status}
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

export default DepartmentManagement;
