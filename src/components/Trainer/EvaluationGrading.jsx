import React, { useState } from 'react';
import { Award, FileCheck, Plus, Eye, Edit, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const EvaluationGrading = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const submissions = [
    {
      id: 1,
      studentName: 'Rahul Kumar',
      batch: 'CSE-2026',
      assessment: 'Arrays & Linked Lists Quiz',
      type: 'quiz',
      submittedDate: '2026-01-25 02:45 PM',
      totalMarks: 30,
      obtainedMarks: null,
      status: 'pending'
    },
    {
      id: 2,
      studentName: 'Priya Sharma',
      batch: 'CSE-2026',
      assessment: 'Data Structures Assignment',
      type: 'assignment',
      submittedDate: '2026-01-24 11:30 AM',
      totalMarks: 50,
      obtainedMarks: null,
      status: 'pending'
    },
    {
      id: 3,
      studentName: 'Amit Patel',
      batch: 'IT-2025',
      assessment: 'React Hooks Quiz',
      type: 'quiz',
      submittedDate: '2026-01-23 03:15 PM',
      totalMarks: 40,
      obtainedMarks: 35,
      feedback: 'Good understanding of concepts',
      status: 'graded'
    },
    {
      id: 4,
      studentName: 'Sneha Reddy',
      batch: 'IT-2025',
      assessment: 'JavaScript Assignment',
      type: 'assignment',
      submittedDate: '2026-01-22 04:20 PM',
      totalMarks: 50,
      obtainedMarks: 38,
      feedback: 'Code quality needs improvement',
      status: 'graded'
    }
  ];

  const stats = [
    { label: 'Total Submissions', value: '248', color: 'blue' },
    { label: 'Pending Review', value: '42', color: 'orange' },
    { label: 'Graded', value: '206', color: 'green' },
    { label: 'Avg Score', value: '78%', color: 'purple' }
  ];

  const filteredSubmissions = submissions.filter(sub => {
    if (activeTab === 'pending') return sub.status === 'pending';
    if (activeTab === 'graded') return sub.status === 'graded';
    return true;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Evaluation & Grading</h1>
          <p className="text-gray-600 mt-1">Review and grade student submissions</p>
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
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('pending')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'pending'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Pending Review ({submissions.filter(s => s.status === 'pending').length})
            </button>
            <button
              onClick={() => setActiveTab('graded')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'graded'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Graded
            </button>
          </nav>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Student</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Assessment</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Submitted</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Marks</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredSubmissions.map((submission) => (
                <tr key={submission.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-semibold">
                          {submission.studentName.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{submission.studentName}</p>
                        <p className="text-sm text-gray-600">{submission.batch}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{submission.assessment}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      submission.type === 'quiz' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {submission.type.charAt(0).toUpperCase() + submission.type.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{submission.submittedDate}</td>
                  <td className="px-6 py-4">
                    {submission.obtainedMarks !== null ? (
                      <div>
                        <p className="font-semibold text-gray-900">
                          {submission.obtainedMarks}/{submission.totalMarks}
                        </p>
                        <p className="text-xs text-gray-600">
                          {((submission.obtainedMarks / submission.totalMarks) * 100).toFixed(0)}%
                        </p>
                      </div>
                    ) : (
                      <span className="text-gray-400">Not graded</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {submission.status === 'pending' ? (
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold flex items-center w-fit">
                        <Clock className="w-3 h-3 mr-1" />
                        Pending
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold flex items-center w-fit">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Graded
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      {submission.status === 'pending' ? (
                        <button className="px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm flex items-center">
                          <Award className="w-3 h-3 mr-1" />
                          Grade Now
                        </button>
                      ) : (
                        <>
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                        </>
                      )}
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

export default EvaluationGrading;
