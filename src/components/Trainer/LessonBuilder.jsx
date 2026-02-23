import React, { useState } from 'react';
import { BookOpen, Plus, Play, FileText, Video, CheckCircle, Eye, Edit, Trash2 } from 'lucide-react';

const LessonBuilder = () => {
  const [activeTab, setActiveTab] = useState('all');

  const lessons = [
    {
      id: 1,
      title: 'Introduction to Data Structures',
      course: 'Data Structures & Algorithms',
      module: 'Module 1: Fundamentals',
      type: 'video',
      duration: '45 min',
      order: 1,
      content: 3,
      completed: 128,
      total: 185,
      status: 'published'
    },
    {
      id: 2,
      title: 'Arrays - Theory and Practice',
      course: 'Data Structures & Algorithms',
      module: 'Module 2: Linear Structures',
      type: 'mixed',
      duration: '60 min',
      order: 2,
      content: 5,
      completed: 95,
      total: 185,
      status: 'published'
    },
    {
      id: 3,
      title: 'React Component Lifecycle',
      course: 'Web Development',
      module: 'Module 3: Advanced React',
      type: 'video',
      duration: '38 min',
      order: 1,
      content: 2,
      completed: 86,
      total: 120,
      status: 'published'
    },
    {
      id: 4,
      title: 'Linked Lists Implementation',
      course: 'Data Structures & Algorithms',
      module: 'Module 2: Linear Structures',
      type: 'mixed',
      duration: '50 min',
      order: 3,
      content: 4,
      completed: 0,
      total: 185,
      status: 'draft'
    }
  ];

  const stats = [
    { label: 'Total Lessons', value: '42', color: 'blue' },
    { label: 'Published', value: '38', color: 'green' },
    { label: 'Draft', value: '4', color: 'orange' },
    { label: 'Avg Completion', value: '76%', color: 'purple' }
  ];

  const filteredLessons = activeTab === 'all' 
    ? lessons 
    : lessons.filter(lesson => lesson.status === activeTab);

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Lesson Builder</h1>
          <p className="text-gray-600 mt-1">Create and organize course lessons</p>
        </div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Create Lesson
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
              All Lessons
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
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Lesson</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Course & Module</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Duration</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Content Items</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Completion</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredLessons.map((lesson) => (
                <tr key={lesson.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <BookOpen className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{lesson.title}</p>
                        <p className="text-sm text-gray-600">Order: #{lesson.order}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{lesson.course}</p>
                    <p className="text-sm text-gray-600">{lesson.module}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      lesson.type === 'video' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {lesson.type === 'video' ? 'Video' : 'Mixed'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{lesson.duration}</td>
                  <td className="px-6 py-4 text-gray-900">{lesson.content} items</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">
                          {lesson.completed}/{lesson.total}
                        </p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${(lesson.completed / lesson.total) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      lesson.status === 'published' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {lesson.status}
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

export default LessonBuilder;
