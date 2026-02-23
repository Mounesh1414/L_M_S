import React, { useState } from 'react';
import { HelpCircle, MessageSquare, Plus, Clock, CheckCircle, Eye, Reply } from 'lucide-react';

const DoubtQueryHandling = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const queries = [
    {
      id: 1,
      studentName: 'Rahul Kumar',
      batch: 'CSE-2026',
      course: 'Data Structures & Algorithms',
      subject: 'Doubts about Linked List Implementation',
      message: 'I am confused about the reverse() method in doubly linked lists. Can you please explain the logic?',
      category: 'concept',
      priority: 'high',
      createdAt: '2 hours ago',
      status: 'pending'
    },
    {
      id: 2,
      studentName: 'Priya Sharma',
      batch: 'CSE-2026',
      course: 'Data Structures & Algorithms',
      subject: 'Assignment Submission Issue',
      message: 'I am getting an error while uploading my assignment code. The file size is under 10MB but still showing error.',
      category: 'technical',
      priority: 'medium',
      createdAt: '5 hours ago',
      status: 'pending'
    },
    {
      id: 3,
      studentName: 'Amit Patel',
      batch: 'IT-2025',
      course: 'Web Development',
      subject: 'React useEffect Hook Clarification',
      message: 'When should I use cleanup function in useEffect? The documentation is a bit confusing.',
      category: 'concept',
      priority: 'low',
      createdAt: '1 day ago',
      reply: 'The cleanup function is used to prevent memory leaks. Check the video lecture at 25:30 for detailed explanation.',
      status: 'resolved'
    },
    {
      id: 4,
      studentName: 'Sneha Reddy',
      batch: 'IT-2025',
      course: 'Web Development',
      subject: 'Quiz Question Clarification',
      message: 'In Question 5 of React quiz, option B and C both seem correct. Can you clarify?',
      category: 'assessment',
      priority: 'medium',
      createdAt: '2 days ago',
      reply: 'Good observation! Option C is more accurate because it mentions the virtual DOM comparison. I will update the question.',
      status: 'resolved'
    }
  ];

  const stats = [
    { label: 'Total Queries', value: '124', color: 'blue' },
    { label: 'Pending', value: '18', color: 'orange' },
    { label: 'Resolved', value: '106', color: 'green' },
    { label: 'Avg Response', value: '3.2h', color: 'purple' }
  ];

  const filteredQueries = queries.filter(query => {
    if (activeTab === 'pending') return query.status === 'pending';
    if (activeTab === 'resolved') return query.status === 'resolved';
    return true;
  });

  const getCategoryColor = (category) => {
    if (category === 'concept') return 'bg-blue-100 text-blue-700';
    if (category === 'technical') return 'bg-red-100 text-red-700';
    if (category === 'assessment') return 'bg-purple-100 text-purple-700';
    return 'bg-gray-100 text-gray-700';
  };

  const getPriorityColor = (priority) => {
    if (priority === 'high') return 'bg-red-100 text-red-700';
    if (priority === 'medium') return 'bg-orange-100 text-orange-700';
    return 'bg-green-100 text-green-700';
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Doubt & Query Handling</h1>
          <p className="text-gray-600 mt-1">Resolve student questions and doubts</p>
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
              Pending ({queries.filter(q => q.status === 'pending').length})
            </button>
            <button
              onClick={() => setActiveTab('resolved')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'resolved'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Resolved
            </button>
          </nav>
        </div>

        <div className="divide-y divide-gray-200">
          {filteredQueries.map((query) => (
            <div key={query.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-semibold">
                      {query.studentName.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="font-semibold text-gray-900">{query.studentName}</p>
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                        {query.batch}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{query.course}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(query.priority)}`}>
                    {query.priority}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(query.category)}`}>
                    {query.category}
                  </span>
                </div>
              </div>

              <div className="ml-13 mb-3">
                <h3 className="font-semibold text-gray-900 mb-2">{query.subject}</h3>
                <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{query.message}</p>
              </div>

              {query.reply && (
                <div className="ml-13 mb-3 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-600">
                  <p className="text-sm font-semibold text-purple-900 mb-1">Your Reply:</p>
                  <p className="text-gray-700">{query.reply}</p>
                </div>
              )}

              <div className="ml-13 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {query.createdAt}
                  </span>
                  {query.status === 'resolved' && (
                    <span className="text-sm text-green-600 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Resolved
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  {query.status === 'pending' ? (
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm flex items-center">
                      <Reply className="w-4 h-4 mr-2" />
                      Reply Now
                    </button>
                  ) : (
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm flex items-center">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoubtQueryHandling;
