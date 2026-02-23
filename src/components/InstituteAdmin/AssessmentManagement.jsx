import React, { useState } from 'react';
import { FileEdit, Plus, Clock, Users, Eye, Edit, Trash2, Calendar } from 'lucide-react';

const AssessmentManagement = () => {
  const [activeTab, setActiveTab] = useState('all');

  const assessments = [
    {
      id: 1,
      title: 'Data Structures - Mid Term Exam',
      course: 'Data Structures & Algorithms',
      department: 'CSE',
      trainer: 'Dr. Rajesh Kumar',
      type: 'exam',
      date: '2026-02-15',
      duration: 90,
      totalMarks: 100,
      students: 685,
      completed: 0,
      status: 'scheduled'
    },
    {
      id: 2,
      title: 'VLSI Design - Quiz 1',
      course: 'VLSI & Chip Design',
      department: 'ECE',
      trainer: 'Prof. Meena Singh',
      type: 'quiz',
      date: '2026-02-08',
      duration: 30,
      totalMarks: 30,
      students: 542,
      completed: 542,
      avgScore: 24.5,
      status: 'completed'
    },
    {
      id: 3,
      title: 'Web Development - Assignment 2',
      course: 'Full Stack Development',
      department: 'IT',
      trainer: 'Mr. Arun Verma',
      type: 'assignment',
      date: '2026-02-10',
      duration: 120,
      totalMarks: 50,
      students: 498,
      completed: 385,
      avgScore: 38.2,
      status: 'ongoing'
    },
    {
      id: 4,
      title: 'Engineering Mechanics - Final Exam',
      course: 'Engineering Mechanics',
      department: 'MECH',
      trainer: 'Dr. Suresh Patel',
      type: 'exam',
      date: '2026-02-20',
      duration: 180,
      totalMarks: 100,
      students: 425,
      completed: 0,
      status: 'scheduled'
    }
  ];

  const stats = [
    { label: 'Total Assessments', value: '156', color: 'blue' },
    { label: 'Scheduled', value: '24', color: 'orange' },
    { label: 'Ongoing', value: '12', color: 'purple' },
    { label: 'Completed', value: '120', color: 'green' }
  ];

  const filteredAssessments = activeTab === 'all' 
    ? assessments 
    : assessments.filter(a => a.status === activeTab);

  const getStatusColor = (status) => {
    if (status === 'scheduled') return 'bg-orange-100 text-orange-700';
    if (status === 'ongoing') return 'bg-blue-100 text-blue-700';
    if (status === 'completed') return 'bg-green-100 text-green-700';
    return 'bg-gray-100 text-gray-700';
  };

  const getTypeColor = (type) => {
    if (type === 'quiz') return 'bg-blue-100 text-blue-700';
    if (type === 'exam') return 'bg-purple-100 text-purple-700';
    return 'bg-green-100 text-green-700';
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Assessment Management</h1>
          <p className="text-gray-600 mt-1">Manage all institute assessments</p>
        </div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Schedule Assessment
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
              onClick={() => setActiveTab('scheduled')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'scheduled'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Scheduled
            </button>
            <button
              onClick={() => setActiveTab('ongoing')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'ongoing'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Ongoing
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'completed'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Completed
            </button>
          </nav>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Assessment</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Department</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Trainer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Schedule</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Completion</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredAssessments.map((assessment) => (
                <tr key={assessment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-gray-900">{assessment.title}</p>
                      <p className="text-sm text-gray-600">{assessment.course}</p>
                      <p className="text-xs text-gray-500 mt-1">{assessment.totalMarks} marks</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {assessment.department}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{assessment.trainer}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(assessment.type)}`}>
                      {assessment.type.charAt(0).toUpperCase() + assessment.type.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-900">{assessment.date}</p>
                        <p className="text-xs text-gray-600">{assessment.duration} min</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-900">
                          {assessment.completed}/{assessment.students}
                        </p>
                        {assessment.avgScore && (
                          <p className="text-xs text-gray-600">Avg: {assessment.avgScore.toFixed(1)}</p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(assessment.status)}`}>
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

export default AssessmentManagement;
