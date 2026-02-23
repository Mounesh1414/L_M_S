import React from 'react';
import { GraduationCap, Users, TrendingUp, Calendar, Eye, MessageSquare, BarChart } from 'lucide-react';

const AssignedBatches = () => {
  const batches = [
    {
      id: 1,
      name: 'CSE-2026',
      department: 'Computer Science',
      students: 65,
      courses: 2,
      startDate: '2026-01-15',
      progress: 45,
      attendance: 92,
      performance: 'excellent',
      status: 'active'
    },
    {
      id: 2,
      name: 'IT-2025',
      department: 'Information Technology',
      students: 52,
      courses: 1,
      startDate: '2025-08-20',
      progress: 62,
      attendance: 88,
      performance: 'good',
      status: 'active'
    },
    {
      id: 3,
      name: 'ECE-2025',
      department: 'Electronics & Communication',
      students: 68,
      courses: 1,
      startDate: '2025-08-22',
      progress: 78,
      attendance: 90,
      performance: 'excellent',
      status: 'active'
    }
  ];

  const stats = [
    { label: 'Total Batches', value: '3', color: 'blue' },
    { label: 'Total Students', value: '185', color: 'green' },
    { label: 'Avg Attendance', value: '90%', color: 'orange' },
    { label: 'Avg Performance', value: '86%', color: 'purple' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Assigned Batches</h1>
        <p className="text-gray-600 mt-1">Manage your assigned student batches</p>
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
        {batches.map((batch) => (
          <div key={batch.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{batch.name}</h3>
                  <p className="text-sm text-gray-600">{batch.department}</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                {batch.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500">Students</p>
                  <p className="text-lg font-semibold text-gray-900">{batch.students}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500">Start Date</p>
                  <p className="text-sm font-semibold text-gray-900">{batch.startDate}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">Course Progress</span>
                  <span className="text-xs font-semibold text-purple-600">{batch.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: `${batch.progress}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">Attendance Rate</span>
                  <span className="text-xs font-semibold text-green-600">{batch.attendance}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${batch.attendance}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center text-sm">
                <Eye className="w-4 h-4 mr-1" />
                View Details
              </button>
              <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center text-sm">
                <BarChart className="w-4 h-4 mr-1" />
                Analytics
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignedBatches;
