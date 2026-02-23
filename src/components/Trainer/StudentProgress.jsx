import React, { useState } from 'react';
import { Users, TrendingUp, Award, AlertCircle, Eye, MessageSquare, Download } from 'lucide-react';

const StudentProgress = () => {
  const [selectedBatch, setSelectedBatch] = useState('all');

  const students = [
    {
      id: 1,
      name: 'Rahul Kumar',
      batch: 'CSE-2026',
      courseProgress: 78,
      attendance: 92,
      assignmentsCompleted: 12,
      assignmentsTotal: 15,
      avgScore: 85,
      lastActive: '2 hours ago',
      performance: 'excellent',
      status: 'active'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      batch: 'CSE-2026',
      courseProgress: 85,
      attendance: 95,
      assignmentsCompleted: 14,
      assignmentsTotal: 15,
      avgScore: 92,
      lastActive: '1 hour ago',
      performance: 'excellent',
      status: 'active'
    },
    {
      id: 3,
      name: 'Amit Patel',
      batch: 'IT-2025',
      courseProgress: 65,
      attendance: 88,
      assignmentsCompleted: 10,
      assignmentsTotal: 12,
      avgScore: 78,
      lastActive: '5 hours ago',
      performance: 'good',
      status: 'active'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      batch: 'IT-2025',
      courseProgress: 42,
      attendance: 78,
      assignmentsCompleted: 7,
      assignmentsTotal: 12,
      avgScore: 65,
      lastActive: '2 days ago',
      performance: 'average',
      status: 'at-risk'
    }
  ];

  const stats = [
    { label: 'Total Students', value: '185', color: 'blue' },
    { label: 'Avg Progress', value: '72%', color: 'green' },
    { label: 'At Risk', value: '12', color: 'red' },
    { label: 'Avg Score', value: '82%', color: 'purple' }
  ];

  const filteredStudents = selectedBatch === 'all' 
    ? students 
    : students.filter(s => s.batch === selectedBatch);

  const getPerformanceBadge = (performance) => {
    const badges = {
      excellent: 'bg-green-100 text-green-700',
      good: 'bg-blue-100 text-blue-700',
      average: 'bg-orange-100 text-orange-700',
      poor: 'bg-red-100 text-red-700'
    };
    return badges[performance] || badges.average;
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Student Progress Tracking</h1>
          <p className="text-gray-600 mt-1">Monitor student performance and engagement</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="all">All Batches</option>
            <option value="CSE-2026">CSE-2026</option>
            <option value="IT-2025">IT-2025</option>
            <option value="ECE-2025">ECE-2025</option>
          </select>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export Report
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

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Student</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Batch</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Course Progress</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Attendance</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Assignments</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Avg Score</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Performance</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-semibold">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{student.name}</p>
                        <p className="text-sm text-gray-600">Active {student.lastActive}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {student.batch}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-purple-600">{student.courseProgress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-purple-600 h-2 rounded-full"
                            style={{ width: `${student.courseProgress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-green-600">{student.attendance}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${student.attendance}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900">
                    {student.assignmentsCompleted}/{student.assignmentsTotal}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span className="font-semibold text-gray-900">{student.avgScore}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPerformanceBadge(student.performance)}`}>
                      {student.performance}
                    </span>
                    {student.status === 'at-risk' && (
                      <div className="flex items-center space-x-1 mt-1 text-red-600">
                        <AlertCircle className="w-3 h-3" />
                        <span className="text-xs">At Risk</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                        <MessageSquare className="w-4 h-4" />
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

export default StudentProgress;
