import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Clock,
  Trophy,
  TrendingUp,
  PlayCircle,
  FileText,
  Calendar,
  AlertCircle,
  CheckCircle,
  ChevronRight
} from 'lucide-react';

const StudentDashboard = () => {
  const navigate = useNavigate();

  const enrolledCourses = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      instructor: 'Dr. Sarah Johnson',
      progress: 65,
      totalLessons: 24,
      completedLessons: 16,
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
      nextLesson: 'CSS Grid Layout',
      duration: '45 min'
    },
    {
      id: 2,
      title: 'Data Science with Python',
      instructor: 'Prof. Michael Chen',
      progress: 45,
      totalLessons: 30,
      completedLessons: 14,
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      nextLesson: 'Pandas DataFrames',
      duration: '60 min'
    },
    {
      id: 3,
      title: 'Digital Marketing Essentials',
      instructor: 'Emma Wilson',
      progress: 80,
      totalLessons: 18,
      completedLessons: 15,
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      nextLesson: 'SEO Best Practices',
      duration: '30 min'
    }
  ];

  const upcomingTests = [
    { id: 1, course: 'Web Development Fundamentals', title: 'HTML & CSS Quiz', date: '2026-02-02', time: '10:00 AM', duration: '45 min', type: 'quiz' },
    { id: 2, course: 'Data Science with Python', title: 'Mid-term Examination', date: '2026-02-05', time: '2:00 PM', duration: '90 min', type: 'exam' },
    { id: 3, course: 'Digital Marketing Essentials', title: 'Marketing Strategy Assignment', date: '2026-02-08', time: '11:30 AM', duration: '60 min', type: 'assignment' }
  ];

  const announcements = [
    { id: 1, title: 'New Course Material Added', message: 'Web Development course has new video lectures', time: '2 hours ago', priority: 'info' },
    { id: 2, title: 'Upcoming Holiday Notice', message: 'College will be closed on Feb 15th for Republic Day', time: '1 day ago', priority: 'warning' },
    { id: 3, title: 'Certificate Available', message: 'Your Digital Marketing certificate is ready for download', time: '2 days ago', priority: 'success' }
  ];

  const stats = [
    { label: 'Courses Enrolled', value: '3', icon: BookOpen, color: 'blue', trend: '+1 this month' },
    { label: 'Hours Learned', value: '127', icon: Clock, color: 'purple', trend: '+15 this week' },
    { label: 'Certificates Earned', value: '2', icon: Trophy, color: 'yellow', trend: '+1 new' },
    { label: 'Average Score', value: '87%', icon: TrendingUp, color: 'green', trend: '+5% improved' }
  ];

  const getColorClass = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600',
      purple: 'bg-purple-50 text-purple-600',
      yellow: 'bg-yellow-50 text-yellow-600',
      green: 'bg-green-50 text-green-600'
    };
    return colors[color] || colors.blue;
  };

  const getPriorityColor = (priority) => {
    const colors = {
      info: 'bg-blue-100 text-blue-700 border-blue-200',
      warning: 'bg-orange-100 text-orange-700 border-orange-200',
      success: 'bg-green-100 text-green-700 border-green-200'
    };
    return colors[priority] || colors.info;
  };

  return (
    <div className="p-4 lg:p-8 pb-24 lg:pb-8 max-w-7xl mx-auto space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 lg:p-6 hover:-translate-y-0.5 transition-all duration-200">
            <div className={`w-12 h-12 ${getColorClass(stat.color)} rounded-xl flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <p className="text-xs lg:text-sm text-gray-600 mb-1.5">{stat.label}</p>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
            <p className="text-xs text-gray-500 font-medium">{stat.trend}</p>
          </div>
        ))}
      </div>

      {/* Enrolled Courses */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900">My Courses</h2>
          <button
            onClick={() => navigate('/student/courses')}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm lg:text-base flex items-center px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
          >
            View All <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {enrolledCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => navigate(`/student/course/${course.id}`)}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer group"
            >
              <div className="relative h-40 bg-gradient-to-br from-blue-500 to-indigo-600 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="p-4 lg:p-5">
                <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{course.instructor}</p>
                
                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs lg:text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-xs lg:text-sm font-bold text-blue-600">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    {course.completedLessons} of {course.totalLessons} lessons completed
                  </p>
                </div>

                {/* Next Lesson */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex-1">
                    <p className="text-xs text-gray-500">Next Lesson</p>
                    <p className="text-sm font-medium text-gray-900">{course.nextLesson}</p>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg hover:shadow-lg transition-all">
                    <PlayCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Upcoming Tests */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 lg:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg lg:text-xl font-bold text-gray-900 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-600" />
              Upcoming Tests
            </h2>
            <button
              onClick={() => navigate('/student/tests')}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
            >
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="space-y-3">
            {upcomingTests.map((test) => (
              <div key={test.id} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer border border-transparent hover:border-blue-100">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm lg:text-base">{test.title}</h3>
                    <p className="text-xs lg:text-sm text-gray-600">{test.course}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    test.type === 'exam' ? 'bg-red-100 text-red-700' :
                    test.type === 'quiz' ? 'bg-blue-100 text-blue-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {test.type}
                  </span>
                </div>
                <div className="flex items-center text-xs lg:text-sm text-gray-600 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {test.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {test.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Announcements */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 lg:p-6">
          <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2 text-blue-600" />
            Announcements
          </h2>
          <div className="space-y-3">
            {announcements.map((announcement) => (
              <div key={announcement.id} className={`p-4 rounded-xl border ${getPriorityColor(announcement.priority)}`}>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-sm lg:text-base flex-1">{announcement.title}</h3>
                  {announcement.priority === 'success' && <CheckCircle className="w-5 h-5 ml-2" />}
                </div>
                <p className="text-xs lg:text-sm mb-2">{announcement.message}</p>
                <p className="text-xs opacity-75">{announcement.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
