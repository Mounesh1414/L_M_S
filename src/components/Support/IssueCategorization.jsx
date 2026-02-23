import React, { useState } from 'react';
import { Tags, Plus, Edit, Trash2, TrendingUp } from 'lucide-react';

const IssueCategorization = () => {
  const categories = [
    {
      id: 1,
      name: 'Technical Issues',
      description: 'Login problems, system errors, bugs',
      color: 'red',
      ticketCount: 156,
      avgResolutionTime: '2.5 hours',
      priority: 'high',
      subcategories: ['Login Issues', 'System Errors', 'Page Not Loading', 'Video Player Issues']
    },
    {
      id: 2,
      name: 'Account & Access',
      description: 'Password reset, permissions, account lockouts',
      color: 'orange',
      ticketCount: 98,
      avgResolutionTime: '1.8 hours',
      priority: 'medium',
      subcategories: ['Password Reset', 'Access Denied', 'Role Permissions', 'Account Locked']
    },
    {
      id: 3,
      name: 'Course Content',
      description: 'Missing materials, broken links, content errors',
      color: 'blue',
      ticketCount: 124,
      avgResolutionTime: '3.2 hours',
      priority: 'medium',
      subcategories: ['Missing Content', 'Broken Links', 'Incorrect Information', 'Upload Issues']
    },
    {
      id: 4,
      name: 'Assessment & Grading',
      description: 'Quiz errors, grading issues, submission problems',
      color: 'purple',
      ticketCount: 87,
      avgResolutionTime: '2.1 hours',
      priority: 'high',
      subcategories: ['Quiz Errors', 'Grade Disputes', 'Submission Failed', 'Timer Issues']
    },
    {
      id: 5,
      name: 'Attendance',
      description: 'Attendance discrepancies, marking issues',
      color: 'green',
      ticketCount: 64,
      avgResolutionTime: '1.5 hours',
      priority: 'low',
      subcategories: ['Wrong Attendance', 'Missing Records', 'Bulk Updates']
    },
    {
      id: 6,
      name: 'Certificates',
      description: 'Certificate generation, download issues',
      color: 'yellow',
      ticketCount: 42,
      avgResolutionTime: '1.2 hours',
      priority: 'low',
      subcategories: ['Not Generated', 'Download Failed', 'Wrong Details', 'Verification']
    }
  ];

  const stats = [
    { label: 'Total Categories', value: '6', color: 'blue' },
    { label: 'Total Tickets', value: '571', color: 'purple' },
    { label: 'Avg Resolution', value: '2.1h', color: 'green' },
    { label: 'High Priority', value: '2', color: 'red' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      red: 'bg-red-100 text-red-700 border-red-200',
      orange: 'bg-orange-100 text-orange-700 border-orange-200',
      blue: 'bg-blue-100 text-blue-700 border-blue-200',
      purple: 'bg-purple-100 text-purple-700 border-purple-200',
      green: 'bg-green-100 text-green-700 border-green-200',
      yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200'
    };
    return colors[color] || colors.blue;
  };

  const getPriorityBadge = (priority) => {
    if (priority === 'high') return 'bg-red-100 text-red-700';
    if (priority === 'medium') return 'bg-orange-100 text-orange-700';
    return 'bg-green-100 text-green-700';
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Issue Categorization</h1>
          <p className="text-gray-600 mt-1">Manage ticket categories and subcategories</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add Category
        </button>
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
        {categories.map((category) => (
          <div key={category.id} className={`bg-white rounded-xl shadow-sm border-2 p-6 hover:shadow-lg transition-all ${getColorClasses(category.color)}`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-3 flex-1">
                <div className={`p-3 rounded-lg ${getColorClasses(category.color)}`}>
                  <Tags className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityBadge(category.priority)}`}>
                {category.priority}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white bg-opacity-50 p-3 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">Total Tickets</p>
                <p className="text-2xl font-bold text-gray-900">{category.ticketCount}</p>
              </div>
              <div className="bg-white bg-opacity-50 p-3 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">Avg Resolution</p>
                <p className="text-2xl font-bold text-gray-900">{category.avgResolutionTime}</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-700 mb-2">Subcategories ({category.subcategories.length})</p>
              <div className="flex flex-wrap gap-2">
                {category.subcategories.map((sub, idx) => (
                  <span key={idx} className="px-2 py-1 bg-white bg-opacity-70 text-gray-700 rounded text-xs">
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-2 pt-3 border-t border-gray-200">
              <button className="flex-1 px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center text-sm font-medium">
                <Edit className="w-4 h-4 mr-1" />
                Edit
              </button>
              <button className="flex-1 px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center text-sm font-medium">
                <TrendingUp className="w-4 h-4 mr-1" />
                Analytics
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IssueCategorization;
