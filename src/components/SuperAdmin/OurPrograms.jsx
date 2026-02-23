import React, { useState } from 'react';
import { BookOpen, Plus, Search, Edit, Trash2, Eye, Clock, Users, Award, Filter, TrendingUp } from 'lucide-react';

const OurPrograms = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const programs = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      duration: '6 Months',
      enrolled: 245,
      completed: 180,
      status: 'Active',
      category: 'Technology',
      level: 'Intermediate',
      rating: 4.8,
      description: 'Complete web development training from basics to advanced',
      image: 'https://via.placeholder.com/400x200?text=Web+Development'
    },
    {
      id: 2,
      title: 'Data Science & Analytics',
      duration: '8 Months',
      enrolled: 189,
      completed: 145,
      status: 'Active',
      category: 'Data Science',
      level: 'Advanced',
      rating: 4.9,
      description: 'Comprehensive data science and machine learning program',
      image: 'https://via.placeholder.com/400x200?text=Data+Science'
    },
    {
      id: 3,
      title: 'Digital Marketing',
      duration: '4 Months',
      enrolled: 312,
      completed: 280,
      status: 'Active',
      category: 'Marketing',
      level: 'Beginner',
      rating: 4.7,
      description: 'Modern digital marketing strategies and tools',
      image: 'https://via.placeholder.com/400x200?text=Digital+Marketing'
    },
    {
      id: 4,
      title: 'Cloud Computing & DevOps',
      duration: '5 Months',
      enrolled: 156,
      completed: 98,
      status: 'Active',
      category: 'Technology',
      level: 'Advanced',
      rating: 4.6,
      description: 'AWS, Azure, and DevOps practices',
      image: 'https://via.placeholder.com/400x200?text=Cloud+Computing'
    },
    {
      id: 5,
      title: 'UI/UX Design Mastery',
      duration: '3 Months',
      enrolled: 198,
      completed: 165,
      status: 'Active',
      category: 'Design',
      level: 'Intermediate',
      rating: 4.8,
      description: 'Learn modern UI/UX design principles and tools',
      image: 'https://via.placeholder.com/400x200?text=UI+UX+Design'
    },
    {
      id: 6,
      title: 'Cybersecurity Fundamentals',
      duration: '6 Months',
      enrolled: 134,
      completed: 89,
      status: 'Active',
      category: 'Security',
      level: 'Intermediate',
      rating: 4.7,
      description: 'Essential cybersecurity concepts and practices',
      image: 'https://via.placeholder.com/400x200?text=Cybersecurity'
    },
  ];

  const stats = [
    { label: 'Total Programs', value: programs.length, icon: BookOpen, color: 'blue', trend: '+2 this month' },
    { label: 'Total Enrolled', value: programs.reduce((sum, p) => sum + p.enrolled, 0), icon: Users, color: 'green', trend: '+12% growth' },
    { label: 'Completed', value: programs.reduce((sum, p) => sum + p.completed, 0), icon: Award, color: 'purple', trend: '75% success rate' },
    { label: 'Avg. Rating', value: '4.75', icon: TrendingUp, color: 'orange', trend: 'Excellent' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Our Programs</h1>
        <p className="text-gray-600 mt-1">Manage training programs and course offerings</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className={`bg-${stat.color}-100 p-3 rounded-lg`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <span className={`text-xs font-medium text-${stat.color}-600 bg-${stat.color}-50 px-2 py-1 rounded-full`}>
                {stat.trend}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="mb-6 bg-white rounded-lg shadow-sm p-4">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-3 flex-1 w-full">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              />
            </div>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
            >
              <option value="all">All Categories</option>
              <option value="Technology">Technology</option>
              <option value="Data Science">Data Science</option>
              <option value="Marketing">Marketing</option>
              <option value="Design">Design</option>
              <option value="Security">Security</option>
            </select>
          </div>
          <button className="w-full md:w-auto flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition-all shadow-md hover:shadow-lg">
            <Plus className="w-5 h-5" />
            <span className="font-medium">Add Program</span>
          </button>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program) => (
          <div key={program.id} className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            {/* Program Image */}
            <div className="relative h-48 bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all"></div>
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-xs font-semibold bg-green-500 text-white rounded-full shadow-lg">
                  {program.status}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-1">{program.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-white bg-opacity-20 backdrop-blur-sm text-white px-2 py-1 rounded">
                    {program.category}
                  </span>
                  <span className="text-xs bg-white bg-opacity-20 backdrop-blur-sm text-white px-2 py-1 rounded">
                    {program.level}
                  </span>
                </div>
              </div>
            </div>

            {/* Program Content */}
            <div className="p-6">
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{program.description}</p>

              {/* Program Stats */}
              <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-gray-200">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-xs text-gray-500">Duration</p>
                  <p className="text-sm font-semibold text-gray-900">{program.duration}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Users className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-xs text-gray-500">Enrolled</p>
                  <p className="text-sm font-semibold text-gray-900">{program.enrolled}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Award className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-xs text-gray-500">Rating</p>
                  <p className="text-sm font-semibold text-gray-900">⭐ {program.rating}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Completion Rate</span>
                  <span>{Math.round((program.completed / program.enrolled) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all"
                    style={{ width: `${(program.completed / program.enrolled) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                  <Eye className="w-4 h-4" />
                  <span>View</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 text-sm bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors">
                  <Edit className="w-4 h-4" />
                  <span>Edit</span>
                </button>
                <button className="px-3 py-2 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPrograms;
