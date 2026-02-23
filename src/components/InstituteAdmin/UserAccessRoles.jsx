import React, { useState } from 'react';
import { Users, Shield, Plus, Eye, Edit, Trash2, Key } from 'lucide-react';

const UserAccessRoles = () => {
  const [activeTab, setActiveTab] = useState('all');

  const users = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      email: 'rajesh.kumar@college.edu',
      role: 'admin',
      department: 'CSE',
      status: 'active',
      lastLogin: '2026-01-26 09:30 AM',
      permissions: ['all']
    },
    {
      id: 2,
      name: 'Prof. Meena Singh',
      email: 'meena.singh@college.edu',
      role: 'trainer',
      department: 'ECE',
      status: 'active',
      lastLogin: '2026-01-26 08:15 AM',
      permissions: ['courses', 'assessments', 'attendance']
    },
    {
      id: 3,
      name: 'Mr. Arun Verma',
      email: 'arun.verma@college.edu',
      role: 'trainer',
      department: 'IT',
      status: 'active',
      lastLogin: '2026-01-25 04:20 PM',
      permissions: ['courses', 'assessments', 'attendance']
    },
    {
      id: 4,
      name: 'Rahul Kumar',
      email: 'rahul.kumar@student.college.edu',
      role: 'student',
      department: 'CSE',
      status: 'active',
      lastLogin: '2026-01-26 10:45 AM',
      permissions: ['view_courses', 'submit_assignments']
    },
    {
      id: 5,
      name: 'Ms. Priya Sharma',
      email: 'priya.sharma@college.edu',
      role: 'staff',
      department: 'Administration',
      status: 'active',
      lastLogin: '2026-01-26 09:00 AM',
      permissions: ['view_records', 'generate_reports']
    }
  ];

  const stats = [
    { label: 'Total Users', value: '2,598', color: 'blue' },
    { label: 'Admins', value: '8', color: 'purple' },
    { label: 'Trainers', value: '45', color: 'green' },
    { label: 'Students', value: '2,450', color: 'orange' },
    { label: 'Staff', value: '95', color: 'cyan' }
  ];

  const filteredUsers = activeTab === 'all' 
    ? users 
    : users.filter(u => u.role === activeTab);

  const getRoleBadge = (role) => {
    const badges = {
      admin: 'bg-purple-100 text-purple-700',
      trainer: 'bg-green-100 text-green-700',
      student: 'bg-blue-100 text-blue-700',
      staff: 'bg-orange-100 text-orange-700'
    };
    return badges[role] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">User Access & Roles</h1>
          <p className="text-gray-600 mt-1">Manage user permissions and access control</p>
        </div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add User
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('all')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'all'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              All Users
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'admin'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Admins
            </button>
            <button
              onClick={() => setActiveTab('trainer')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'trainer'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Trainers
            </button>
            <button
              onClick={() => setActiveTab('student')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'student'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Students
            </button>
            <button
              onClick={() => setActiveTab('staff')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'staff'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Staff
            </button>
          </nav>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">User</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Role</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Department</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Last Login</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-semibold">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getRoleBadge(user.role)}`}>
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{user.department}</td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{user.lastLogin}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      user.status === 'active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {user.status}
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
                      <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                        <Key className="w-4 h-4" />
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

export default UserAccessRoles;
