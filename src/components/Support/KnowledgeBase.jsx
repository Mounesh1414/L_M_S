import React, { useState } from 'react';
import { BookOpen, Search, Plus, Edit, Trash2, Eye, ThumbsUp } from 'lucide-react';

const KnowledgeBase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles', count: 48 },
    { id: 'getting-started', name: 'Getting Started', count: 8 },
    { id: 'account', name: 'Account & Login', count: 12 },
    { id: 'courses', name: 'Courses & Learning', count: 15 },
    { id: 'assessments', name: 'Assessments & Grades', count: 10 },
    { id: 'technical', name: 'Technical Issues', count: 3 }
  ];

  const articles = [
    {
      id: 1,
      title: 'How to reset your password',
      category: 'account',
      categoryName: 'Account & Login',
      views: 1245,
      helpful: 987,
      lastUpdated: '2026-01-25',
      excerpt: 'Step-by-step guide to reset your password if you forgot or want to change it.',
      tags: ['password', 'login', 'security']
    },
    {
      id: 2,
      title: 'Accessing course materials',
      category: 'courses',
      categoryName: 'Courses & Learning',
      views: 2156,
      helpful: 1876,
      lastUpdated: '2026-01-28',
      excerpt: 'Learn how to access your enrolled course videos, PDFs, and other learning materials.',
      tags: ['courses', 'materials', 'access']
    },
    {
      id: 3,
      title: 'Submitting assignments on time',
      category: 'courses',
      categoryName: 'Courses & Learning',
      views: 1834,
      helpful: 1523,
      lastUpdated: '2026-01-26',
      excerpt: 'Guidelines for submitting assignments before deadlines and handling submission errors.',
      tags: ['assignments', 'deadlines', 'submission']
    },
    {
      id: 4,
      title: 'Understanding your grade report',
      category: 'assessments',
      categoryName: 'Assessments & Grades',
      views: 987,
      helpful: 756,
      lastUpdated: '2026-01-24',
      excerpt: 'How to read and interpret your grade reports, GPA calculation, and performance metrics.',
      tags: ['grades', 'GPA', 'performance']
    },
    {
      id: 5,
      title: 'Fixing video playback issues',
      category: 'technical',
      categoryName: 'Technical Issues',
      views: 654,
      helpful: 512,
      lastUpdated: '2026-01-22',
      excerpt: 'Troubleshooting common video playback problems including buffering and quality issues.',
      tags: ['video', 'playback', 'technical']
    },
    {
      id: 6,
      title: 'Taking online quizzes',
      category: 'assessments',
      categoryName: 'Assessments & Grades',
      views: 1456,
      helpful: 1234,
      lastUpdated: '2026-01-27',
      excerpt: 'Tips for taking online quizzes, time management, and handling technical interruptions.',
      tags: ['quiz', 'assessment', 'exam']
    }
  ];

  const stats = [
    { label: 'Total Articles', value: '48', color: 'blue' },
    { label: 'Total Views', value: '12.5K', color: 'green' },
    { label: 'Avg Helpfulness', value: '86%', color: 'purple' },
    { label: 'Categories', value: '5', color: 'orange' }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">FAQ / Knowledge Base</h1>
          <p className="text-gray-600 mt-1">Self-service help articles and guides</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add Article
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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="font-medium">{category.name}</span>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-blue-200 text-blue-800'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Articles List */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {filteredArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{article.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {article.categoryName}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-3">{article.excerpt}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {article.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {article.views} views
                  </span>
                  <span className="flex items-center">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {article.helpful} helpful
                  </span>
                  <span className="text-xs">Updated: {article.lastUpdated}</span>
                </div>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
