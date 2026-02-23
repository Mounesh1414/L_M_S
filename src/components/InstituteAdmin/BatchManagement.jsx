import React, { useState } from 'react';
import {
  BookOpen,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Users,
  Calendar,
  Clock
} from 'lucide-react';

const BatchManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const batches = [
    {
      id: 1,
      name: 'Computer Science - Batch A',
      department: 'CSE',
      course: 'Full Stack Development',
      students: 60,
      trainer: 'Dr. John Smith',
      startDate: '2026-01-15',
      endDate: '2026-06-15',
      status: 'active',
      schedule: 'Mon, Wed, Fri - 9:00 AM'
    },
    {
      id: 2,
      name: 'Mechanical Engineering - Batch B',
      department: 'MECH',
      course: 'CAD/CAM Design',
      students: 55,
      trainer: 'Prof. Sarah Johnson',
      startDate: '2026-01-20',
      endDate: '2026-06-20',
      status: 'active',
      schedule: 'Tue, Thu - 10:00 AM'
    },
    {
      id: 3,
      name: 'Data Science - Advanced',
      department: 'CSE',
      course: 'Machine Learning',
      students: 45,
      trainer: 'Dr. Michael Brown',
      startDate: '2026-01-22',
      endDate: '2026-07-22',
      status: 'active',
      schedule: 'Mon, Wed, Fri - 2:00 PM'
    },
    {
      id: 4,
      name: 'Business Analytics',
      department: 'MBA',
      course: 'Data Analytics',
      students: 50,
      trainer: 'Prof. Emily Davis',
      startDate: '2026-02-01',
      endDate: '2026-07-01',
      status: 'scheduled',
      schedule: 'Tue, Thu, Sat - 11:00 AM'
    },
  ];

  const filteredBatches = batches.filter(batch =>
    batch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    batch.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    batch.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Batch Management</h1>
          <p className="text-gray-600 mt-1">Manage training batches and schedules</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <Plus className="w-5 h-5" />
          <span className="font-semibold">Create New Batch</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Batches</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">32</h3>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active</p>
              <h3 className="text-2xl font-bold text-green-600 mt-1">28</h3>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Scheduled</p>
              <h3 className="text-2xl font-bold text-yellow-600 mt-1">4</h3>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <Calendar className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Students</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">1,850</h3>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search batches by name, department, or course..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
            <option>All Departments</option>
            <option>CSE</option>
            <option>MECH</option>
            <option>MBA</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5 text-gray-600" />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      {/* Batches Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredBatches.map((batch) => (
          <div key={batch.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{batch.name}</h3>
                  <p className="text-sm text-gray-600">{batch.course}</p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  batch.status === 'active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {batch.status.charAt(0).toUpperCase() + batch.status.slice(1)}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Department:</span>
                <span className="font-semibold text-gray-900">{batch.department}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Trainer:</span>
                <span className="font-semibold text-gray-900">{batch.trainer}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Students:</span>
                <span className="font-semibold text-gray-900">{batch.students}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Schedule:</span>
                <span className="font-semibold text-gray-900">{batch.schedule}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Duration:</span>
                <span className="font-semibold text-gray-900">{batch.startDate} - {batch.endDate}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
              <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                <Eye className="w-4 h-4" />
                <span className="text-sm font-medium">View Details</span>
              </button>
              <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                <Edit className="w-4 h-4" />
              </button>
              <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BatchManagement;
