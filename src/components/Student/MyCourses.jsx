import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PlayCircle,
  Clock,
  BookOpen,
  Award,
  Search,
  TrendingUp
} from 'lucide-react';
import LearningContent from './LearningContent';
import LessonProgress from './LessonProgress';

const MyCourses = () => {
  const navigate = useNavigate();
  const [filterStatus, setFilterStatus] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      instructor: 'Dr. Sarah Johnson',
      progress: 65,
      totalLessons: 24,
      completedLessons: 16,
      totalHours: 18,
      status: 'in-progress',
      category: 'Development',
      rating: 4.8,
      enrolled: '2025-12-15'
    },
    {
      id: 2,
      title: 'Data Science with Python',
      instructor: 'Prof. Michael Chen',
      progress: 45,
      totalLessons: 30,
      completedLessons: 14,
      totalHours: 25,
      status: 'in-progress',
      category: 'Data Science',
      rating: 4.9,
      enrolled: '2026-01-05'
    },
    {
      id: 3,
      title: 'Digital Marketing Essentials',
      instructor: 'Emma Wilson',
      progress: 80,
      totalLessons: 18,
      completedLessons: 15,
      totalHours: 12,
      status: 'in-progress',
      category: 'Marketing',
      rating: 4.7,
      enrolled: '2025-11-20'
    },
    {
      id: 4,
      title: 'Machine Learning Basics',
      instructor: 'Dr. James Anderson',
      progress: 100,
      totalLessons: 20,
      completedLessons: 20,
      totalHours: 22,
      status: 'completed',
      category: 'AI & ML',
      rating: 4.9,
      enrolled: '2025-10-10',
      completedDate: '2025-12-20'
    },
    {
      id: 5,
      title: 'UI/UX Design Principles',
      instructor: 'Lisa Martinez',
      progress: 100,
      totalLessons: 16,
      completedLessons: 16,
      totalHours: 14,
      status: 'completed',
      category: 'Design',
      rating: 4.8,
      enrolled: '2025-09-05',
      completedDate: '2025-11-15'
    }
  ];

  const filteredCourses = filterStatus === 'all' 
    ? courses 
    : courses.filter(c => c.status === filterStatus);

  return (
    <div className="p-4 lg:p-8 pb-24 lg:pb-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">My Courses</h1>
        <p className="text-base lg:text-lg text-gray-600">Track your learning progress</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 lg:p-5">
          <div className="flex items-center justify-between mb-2">
            <BookOpen className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{courses.length}</h3>
          <p className="text-sm text-gray-600">Total Courses</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 lg:p-5">
          <div className="flex items-center justify-between mb-2">
            <PlayCircle className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
            {courses.filter(c => c.status === 'in-progress').length}
          </h3>
          <p className="text-sm text-gray-600">In Progress</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 lg:p-5">
          <div className="flex items-center justify-between mb-2">
            <Award className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
            {courses.filter(c => c.status === 'completed').length}
          </h3>
          <p className="text-sm text-gray-600">Completed</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 lg:p-5">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
            {Math.round(courses.reduce((acc, c) => acc + c.progress, 0) / courses.length)}%
          </h3>
          <p className="text-sm text-gray-600">Avg Progress</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-4 py-2 rounded-xl font-medium transition-all whitespace-nowrap text-sm lg:text-base ${
                filterStatus === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Courses ({courses.length})
            </button>
            <button
              onClick={() => setFilterStatus('in-progress')}
              className={`px-4 py-2 rounded-xl font-medium transition-all whitespace-nowrap text-sm lg:text-base ${
                filterStatus === 'in-progress'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              In Progress ({courses.filter(c => c.status === 'in-progress').length})
            </button>
            <button
              onClick={() => setFilterStatus('completed')}
              className={`px-4 py-2 rounded-xl font-medium transition-all whitespace-nowrap text-sm lg:text-base ${
                filterStatus === 'completed'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Completed ({courses.filter(c => c.status === 'completed').length})
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none w-full lg:w-64 text-base"
            />
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            onClick={() => navigate(`/student/course/${course.id}`)}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 lg:p-6 hover:shadow-lg transition-all cursor-pointer"
          >
            {/* Course Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    {course.category}
                  </span>
                  {course.status === 'completed' && (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold flex items-center">
                      <Award className="w-3 h-3 mr-1" />
                      Completed
                    </span>
                  )}
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.instructor}</p>
              </div>
            </div>

            {/* Progress Section */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Course Progress</span>
                <span className="text-sm font-bold text-blue-600">{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all ${
                    course.status === 'completed'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600'
                  }`}
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Course Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500">Lessons</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {course.completedLessons}/{course.totalLessons}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500">Duration</p>
                  <p className="text-sm font-semibold text-gray-900">{course.totalHours}h</p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center text-base ${
                course.status === 'completed'
                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
              }`}
            >
              {course.status === 'completed' ? (
                <>
                  <Award className="w-5 h-5 mr-2" />
                  View Certificate
                </>
              ) : (
                <>
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Continue Learning
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <LearningContent />
      </div>

      <div className="mt-8">
        <LessonProgress />
      </div>
    </div>
  );
};

export default MyCourses;
