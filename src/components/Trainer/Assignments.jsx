import React, { useState } from 'react';
import {
  FileText,
  Plus,
  Calendar,
  Clock,
  Users,
  CheckCircle,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';

const Assignments = () => {
  const [activeTab, setActiveTab] = useState('all');

  const assignments = [
    {
      id: 1,
      title: 'React Components Assignment',
      type: 'MCQ',
      batch: 'CSE Batch A',
      dueDate: '2026-02-05',
      submissions: 48,
      totalStudents: 60,
      status: 'active',
      questions: 20
    },
    {
      id: 2,
      title: 'JavaScript ES6 Features',
      type: 'Coding',
      batch: 'CSE Batch B',
      dueDate: '2026-02-08',
      submissions: 32,
      totalStudents: 55,
      status: 'active',
      questions: 5
    },
    {
      id: 3,
      title: 'Database Design Project',
      type: 'Project',
      batch: 'CSE Batch A',
      dueDate: '2026-02-15',
      submissions: 15,
      totalStudents: 60,
      status: 'active',
      questions: 1
    },
    {
      id: 4,
      title: 'HTML & CSS Basics',
      type: 'MCQ',
      batch: 'CSE Batch B',
      dueDate: '2026-01-25',
      submissions: 55,
      totalStudents: 55,
      status: 'completed',
      questions: 25
    },
  ];

  const filteredAssignments = activeTab === 'all' 
    ? assignments 
    : assignments.filter(a => a.status === activeTab);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Assignments & MCQs</h1>
          <p className="text-gray-600 mt-1">Create and manage assessments</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <Plus className="w-5 h-5" />
            <span className="font-semibold">Create Assignment</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Assignments</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">32</h3>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active</p>
              <h3 className="text-2xl font-bold text-green-600 mt-1">12</h3>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Review</p>
              <h3 className="text-2xl font-bold text-orange-600 mt-1">24</h3>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Submissions</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">856</h3>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200 px-6">
          <div className="flex space-x-8">
            {['all', 'active', 'completed'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Assignments List */}
        <div className="p-6 space-y-4">
          {filteredAssignments.map((assignment) => (
            <div
              key={assignment.id}
              className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{assignment.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {assignment.type}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        assignment.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {assignment.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{assignment.batch}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Due: {assignment.dueDate}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FileText className="w-4 h-4 mr-2" />
                      <span>{assignment.questions} Questions</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>
                        {assignment.submissions}/{assignment.totalStudents} Submitted
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Submission Progress</span>
                      <span className="font-semibold text-gray-900">
                        {Math.round((assignment.submissions / assignment.totalStudents) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{
                          width: `${(assignment.submissions / assignment.totalStudents) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-medium">View Submissions</span>
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Create */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="bg-white border-2 border-purple-200 hover:border-purple-400 p-6 rounded-xl transition-all text-left">
          <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <FileText className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Create MCQ Test</h3>
          <p className="text-sm text-gray-600">Multiple choice questions with auto-grading</p>
        </button>
        <button className="bg-white border-2 border-blue-200 hover:border-blue-400 p-6 rounded-xl transition-all text-left">
          <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <FileText className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Create Assignment</h3>
          <p className="text-sm text-gray-600">Project or coding assignment</p>
        </button>
        <button className="bg-white border-2 border-green-200 hover:border-green-400 p-6 rounded-xl transition-all text-left">
          <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Quick Quiz</h3>
          <p className="text-sm text-gray-600">Short quiz for quick assessment</p>
        </button>
      </div>
    </div>
  );
};

export default Assignments;
