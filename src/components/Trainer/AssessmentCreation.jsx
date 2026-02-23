import React, { useState } from 'react';
import { FileEdit, Plus, Clock, CheckCircle, Eye, Edit, Trash2, Users } from 'lucide-react';

const AssessmentCreation = () => {
  const [activeTab, setActiveTab] = useState('all');

  const assessments = [
    {
      id: 1,
      title: 'Arrays & Linked Lists - Quiz',
      course: 'Data Structures & Algorithms',
      type: 'quiz',
      questions: 15,
      duration: 30,
      totalMarks: 30,
      attempts: 128,
      avgScore: 24.5,
      createdDate: '2026-01-20',
      status: 'published'
    },
    {
      id: 2,
      title: 'Data Structures - Mid Term',
      course: 'Data Structures & Algorithms',
      type: 'exam',
      questions: 40,
      duration: 90,
      totalMarks: 100,
      attempts: 185,
      avgScore: 76.8,
      createdDate: '2026-01-18',
      status: 'published'
    },
    {
      id: 3,
      title: 'React Hooks - Practice Test',
      course: 'Web Development',
      type: 'quiz',
      questions: 20,
      duration: 40,
      totalMarks: 40,
      attempts: 86,
      avgScore: 31.2,
      createdDate: '2026-01-22',
      status: 'published'
    },
    {
      id: 4,
      title: 'JavaScript ES6 - Assignment',
      course: 'Web Development',
      type: 'assignment',
      questions: 5,
      duration: 120,
      totalMarks: 50,
      attempts: 0,
      avgScore: 0,
      createdDate: '2026-01-25',
      status: 'draft'
    }
  ];

  const stats = [
    { label: 'Total Assessments', value: '28', color: 'blue' },
    { label: 'Published', value: '24', color: 'green' },
    { label: 'Draft', value: '4', color: 'orange' },
    { label: 'Total Attempts', value: '1.2K', color: 'purple' }
  ];

  const filteredAssessments = activeTab === 'all' 
    ? assessments 
    : assessments.filter(assessment => assessment.status === activeTab);

  const getTypeColor = (type) => {
    if (type === 'quiz') return 'bg-blue-100 text-blue-700';
    if (type === 'exam') return 'bg-purple-100 text-purple-700';
    return 'bg-green-100 text-green-700';
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Assessment Creation</h1>
          <p className="text-gray-600 mt-1">Create quizzes, exams, and assignments</p>
        </div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Create Assessment
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
              All Assessments
            </button>
            <button
              onClick={() => setActiveTab('published')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'published'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Published
            </button>
            <button
              onClick={() => setActiveTab('draft')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'draft'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Draft
            </button>
          </nav>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Assessment</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Course</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Questions</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Duration</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Performance</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredAssessments.map((assessment) => (
                <tr key={assessment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <FileEdit className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{assessment.title}</p>
                        <p className="text-sm text-gray-600">{assessment.totalMarks} marks</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{assessment.course}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(assessment.type)}`}>
                      {assessment.type.charAt(0).toUpperCase() + assessment.type.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{assessment.questions}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1 text-gray-900">
                      <Clock className="w-4 h-4" />
                      <span>{assessment.duration} min</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="flex items-center space-x-1 text-sm">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-900">{assessment.attempts} attempts</span>
                      </div>
                      {assessment.attempts > 0 && (
                        <p className="text-sm text-gray-600 mt-1">
                          Avg: {assessment.avgScore.toFixed(1)}/{assessment.totalMarks}
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      assessment.status === 'published' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {assessment.status}
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

export default AssessmentCreation;
