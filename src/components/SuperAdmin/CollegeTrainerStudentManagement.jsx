import React, { useState } from 'react';
import { Building2, Users, GraduationCap, Search, Plus, Edit, Trash2, Eye, Mail, Phone, MapPin, Calendar, TrendingUp } from 'lucide-react';

const CollegeTrainerStudentManagement = () => {
  const [activeTab, setActiveTab] = useState('colleges');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data
  const colleges = [
    { id: 1, name: 'MIT College', location: 'Pune', students: 450, trainers: 12, status: 'Active', established: '2010', programs: 8 },
    { id: 2, name: 'COEP', location: 'Pune', students: 380, trainers: 10, status: 'Active', established: '2008', programs: 6 },
    { id: 3, name: 'VIT', location: 'Mumbai', students: 520, trainers: 15, status: 'Active', established: '2012', programs: 10 },
    { id: 4, name: 'PICT', location: 'Pune', students: 295, trainers: 8, status: 'Active', established: '2015', programs: 5 },
  ];

  const trainers = [
    { id: 1, name: 'Dr. Amit Shah', email: 'amit@example.com', phone: '+91 98765 43210', subject: 'Data Science', college: 'MIT College', status: 'Active', experience: '8 years' },
    { id: 2, name: 'Prof. Priya Desai', email: 'priya@example.com', phone: '+91 98765 43211', subject: 'Web Development', college: 'COEP', status: 'Active', experience: '6 years' },
    { id: 3, name: 'Mr. Rahul Kumar', email: 'rahul@example.com', phone: '+91 98765 43212', subject: 'Machine Learning', college: 'VIT', status: 'Active', experience: '10 years' },
    { id: 4, name: 'Dr. Kavita Sharma', email: 'kavita@example.com', phone: '+91 98765 43213', subject: 'Cloud Computing', college: 'PICT', status: 'Active', experience: '7 years' },
  ];

  const students = [
    { id: 1, name: 'Sneha Patel', email: 'sneha@example.com', phone: '+91 99999 11111', rollNo: 'CS2024001', college: 'MIT College', batch: 'Batch A', status: 'Active', attendance: '92%' },
    { id: 2, name: 'Rohan Mehta', email: 'rohan@example.com', phone: '+91 99999 22222', rollNo: 'CS2024002', college: 'COEP', batch: 'Batch B', status: 'Active', attendance: '88%' },
    { id: 3, name: 'Ananya Singh', email: 'ananya@example.com', phone: '+91 99999 33333', rollNo: 'CS2024003', college: 'VIT', batch: 'Batch A', status: 'Active', attendance: '95%' },
    { id: 4, name: 'Vikram Sharma', email: 'vikram@example.com', phone: '+91 99999 44444', rollNo: 'CS2024004', college: 'PICT', batch: 'Batch C', status: 'Active', attendance: '90%' },
  ];

  const tabs = [
    { id: 'colleges', label: 'Colleges', icon: Building2 },
    { id: 'trainers', label: 'Trainers', icon: Users },
    { id: 'students', label: 'Students', icon: GraduationCap },
  ];

  const renderColleges = () => (
    <div className="space-y-4">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Colleges</p>
              <p className="text-3xl font-bold mt-1">{colleges.length}</p>
            </div>
            <Building2 className="w-12 h-12 text-blue-200" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Total Students</p>
              <p className="text-3xl font-bold mt-1">{colleges.reduce((sum, c) => sum + c.students, 0)}</p>
            </div>
            <GraduationCap className="w-12 h-12 text-green-200" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Total Trainers</p>
              <p className="text-3xl font-bold mt-1">{colleges.reduce((sum, c) => sum + c.trainers, 0)}</p>
            </div>
            <Users className="w-12 h-12 text-purple-200" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Active Programs</p>
              <p className="text-3xl font-bold mt-1">{colleges.reduce((sum, c) => sum + c.programs, 0)}</p>
            </div>
            <TrendingUp className="w-12 h-12 text-orange-200" />
          </div>
        </div>
      </div>

      {/* College Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges.map((college) => (
          <div key={college.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Building2 className="w-6 h-6 text-indigo-600" />
                </div>
                <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                  {college.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{college.name}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{college.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Est. {college.established}</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 py-3 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{college.students}</p>
                  <p className="text-xs text-gray-500">Students</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{college.trainers}</p>
                  <p className="text-xs text-gray-500">Trainers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{college.programs}</p>
                  <p className="text-xs text-gray-500">Programs</p>
                </div>
              </div>
              <div className="flex space-x-2 mt-4 pt-4 border-t border-gray-200">
                <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                  <Eye className="w-4 h-4" />
                  <span>View</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 text-sm bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors">
                  <Edit className="w-4 h-4" />
                  <span>Edit</span>
                </button>
                <button className="px-3 py-2 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTrainers = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Name</th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Contact</th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Subject</th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">College</th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Experience</th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Status</th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {trainers.map((trainer) => (
            <tr key={trainer.id} className="hover:bg-indigo-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="bg-indigo-100 rounded-full p-2 mr-3">
                    <Users className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{trainer.name}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm">
                  <div className="flex items-center text-gray-600 mb-1">
                    <Mail className="w-4 h-4 mr-1" />
                    <span>{trainer.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-1" />
                    <span>{trainer.phone}</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                  {trainer.subject}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700">{trainer.college}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700">{trainer.experience}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                  {trainer.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex space-x-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Eye className="w-4 h-4" /></button>
                  <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"><Edit className="w-4 h-4" /></button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderStudents = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Student Info</th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Roll Number</th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Contact</th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">College</th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Batch</th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Attendance</th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Status</th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-green-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full p-2 mr-3">
                    <GraduationCap className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{student.name}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="font-mono text-sm font-medium text-gray-700">{student.rollNo}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm">
                  <div className="flex items-center text-gray-600 mb-1">
                    <Mail className="w-4 h-4 mr-1" />
                    <span>{student.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-1" />
                    <span>{student.phone}</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700">{student.college}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  {student.batch}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: student.attendance }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{student.attendance}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                  {student.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex space-x-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Eye className="w-4 h-4" /></button>
                  <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"><Edit className="w-4 h-4" /></button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Management Hub</h1>
        <p className="text-gray-600 mt-1">Comprehensive management for colleges, trainers, and students</p>
      </div>

      {/* Tabs */}
      <div className="mb-6 bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          <div className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 pb-4 pt-4 px-2 border-b-2 transition-all ${
                  activeTab === tab.id
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-semibold">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search and Actions */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative flex-1 max-w-md w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none shadow-sm"
          />
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition-all shadow-md hover:shadow-lg">
          <Plus className="w-5 h-5" />
          <span className="font-medium">Add {activeTab.slice(0, -1).charAt(0).toUpperCase() + activeTab.slice(1, -1)}</span>
        </button>
      </div>

      {/* Content */}
      <div className={activeTab === 'colleges' ? '' : 'bg-white rounded-lg shadow-md overflow-hidden'}>
        {activeTab === 'colleges' && renderColleges()}
        {activeTab === 'trainers' && renderTrainers()}
        {activeTab === 'students' && renderStudents()}
      </div>
    </div>
  );
};

export default CollegeTrainerStudentManagement;
