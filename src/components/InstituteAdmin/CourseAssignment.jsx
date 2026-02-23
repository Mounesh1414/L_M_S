import React from 'react';
import { BookOpen, Users, Plus, Eye, Edit, Trash2, Link as LinkIcon } from 'lucide-react';

const CourseAssignment = () => {
  const assignments = [
    {
      id: 1,
      course: 'Data Structures & Algorithms',
      batch: 'CSE-2026',
      trainer: 'Dr. Sarah Johnson',
      students: 65,
      startDate: '2026-01-15',
      endDate: '2026-05-30',
      progress: 45,
      status: 'active'
    },
    {
      id: 2,
      course: 'Web Development Fundamentals',
      batch: 'IT-2025',
      trainer: 'Prof. Michael Chen',
      students: 52,
      startDate: '2026-01-10',
      endDate: '2026-06-15',
      progress: 62,
      status: 'active'
    },
    {
      id: 3,
      course: 'Digital Signal Processing',
      batch: 'ECE-2025',
      trainer: 'Dr. Priya Sharma',
      students: 58,
      startDate: '2026-01-12',
      endDate: '2026-05-25',
      progress: 78,
      status: 'active'
    },
    {
      id: 4,
      course: 'CAD/CAM Engineering',
      batch: 'MECH-2026',
      trainer: 'Prof. Rajesh Kumar',
      students: 48,
      startDate: '2026-01-18',
      endDate: '2026-06-10',
      progress: 38,
      status: 'active'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Course Assignment</h1>
          <p className="text-gray-600 mt-1">Assign courses to trainers and batches</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          New Assignment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-1">24</h3>
          <p className="text-sm text-gray-600">Active Assignments</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-1">18</h3>
          <p className="text-sm text-gray-600">Batches Covered</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-1">42</h3>
          <p className="text-sm text-gray-600">Trainers Assigned</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-1">58%</h3>
          <p className="text-sm text-gray-600">Avg Progress</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Course</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Batch</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Trainer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Students</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Duration</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Progress</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {assignments.map((assignment) => (
                <tr key={assignment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-gray-900">{assignment.course}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                      {assignment.batch}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{assignment.trainer}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="font-semibold text-gray-900">{assignment.students}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <p className="text-gray-900">{assignment.startDate}</p>
                      <p className="text-gray-600">to {assignment.endDate}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${assignment.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{assignment.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      {assignment.status}
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

export default CourseAssignment;
