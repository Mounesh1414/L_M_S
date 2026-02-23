import React, { useState } from 'react';
import { ClipboardCheck, Plus, Search, Edit, Trash2, Eye, BarChart } from 'lucide-react';

const AssessmentManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const assessments = [
    {
      id: 1,
      title: 'Mid-Term Exam - Web Development',
      program: 'Full Stack Web Development',
      date: '2026-02-15',
      duration: '2 hours',
      totalMarks: 100,
      participants: 45,
      status: 'Scheduled'
    },
    {
      id: 2,
      title: 'Quiz - Python Basics',
      program: 'Data Science & Analytics',
      date: '2026-02-10',
      duration: '30 mins',
      totalMarks: 50,
      participants: 38,
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Final Project Evaluation',
      program: 'Digital Marketing',
      date: '2026-03-01',
      duration: '3 hours',
      totalMarks: 150,
      participants: 52,
      status: 'Scheduled'
    },
  ];

  const stats = [
    { label: 'Total Assessments', value: '24', color: 'blue' },
    { label: 'Scheduled', value: '8', color: 'yellow' },
    { label: 'Completed', value: '12', color: 'green' },
    { label: 'In Progress', value: '4', color: 'indigo' },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Assessment Management</h1>
        <p className="text-gray-600">Create and manage assessments, exams, and evaluations</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Search and Add */}
      <div className="mb-6 flex justify-between items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search assessments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
          />
        </div>
        <button className="ml-4 flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <Plus className="w-5 h-5" />
          <span>Create Assessment</span>
        </button>
      </div>

      {/* Assessments Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assessment Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Marks</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participants</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {assessments.map((assessment) => (
                <tr key={assessment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{assessment.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{assessment.program}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{assessment.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{assessment.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">{assessment.totalMarks}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{assessment.participants}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      assessment.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                      assessment.status === 'Scheduled' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {assessment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900"><Eye className="w-4 h-4" /></button>
                      <button className="text-green-600 hover:text-green-900"><BarChart className="w-4 h-4" /></button>
                      <button className="text-indigo-600 hover:text-indigo-900"><Edit className="w-4 h-4" /></button>
                      <button className="text-red-600 hover:text-red-900"><Trash2 className="w-4 h-4" /></button>
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
