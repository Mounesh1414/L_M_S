import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  AlertCircle,
  PlayCircle,
  CheckCircle,
  TrendingUp,
  Award
} from 'lucide-react';

const TestsQuizzes = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingTests = [
    {
      id: 1,
      course: 'Web Development Fundamentals',
      title: 'HTML & CSS Quiz',
      type: 'quiz',
      date: '2026-02-02',
      time: '10:00 AM',
      duration: '45 min',
      totalMarks: 50,
      passingMarks: 25,
      questions: 25,
      status: 'scheduled'
    },
    {
      id: 2,
      course: 'Data Science with Python',
      title: 'Mid-term Examination',
      type: 'exam',
      date: '2026-02-05',
      time: '2:00 PM',
      duration: '90 min',
      totalMarks: 100,
      passingMarks: 40,
      questions: 50,
      status: 'scheduled'
    },
    {
      id: 3,
      course: 'Digital Marketing Essentials',
      title: 'Marketing Strategy Assignment',
      type: 'assignment',
      date: '2026-02-08',
      time: '11:30 AM',
      duration: '60 min',
      totalMarks: 75,
      passingMarks: 30,
      questions: 10,
      status: 'scheduled'
    }
  ];

  const completedTests = [
    {
      id: 4,
      course: 'Machine Learning Basics',
      title: 'Final Examination',
      type: 'exam',
      completedDate: '2025-12-18',
      duration: '120 min',
      totalMarks: 100,
      scoredMarks: 92,
      percentage: 92,
      grade: 'A+',
      status: 'passed'
    },
    {
      id: 5,
      course: 'UI/UX Design Principles',
      title: 'Design Fundamentals Quiz',
      type: 'quiz',
      completedDate: '2025-11-10',
      duration: '30 min',
      totalMarks: 50,
      scoredMarks: 45,
      percentage: 90,
      grade: 'A+',
      status: 'passed'
    },
    {
      id: 6,
      course: 'Web Development Fundamentals',
      title: 'JavaScript Basics Quiz',
      type: 'quiz',
      completedDate: '2026-01-15',
      duration: '45 min',
      totalMarks: 50,
      scoredMarks: 38,
      percentage: 76,
      grade: 'B+',
      status: 'passed'
    }
  ];

  const stats = [
    { label: 'Total Tests', value: upcomingTests.length, icon: Calendar, color: 'blue' },
    { label: 'Completed', value: completedTests.length, icon: CheckCircle, color: 'green' },
    { label: 'Average Score', value: '86%', icon: TrendingUp, color: 'purple' },
    { label: 'Certificates', value: '2', icon: Award, color: 'yellow' }
  ];

  const getTypeColor = (type) => {
    const colors = {
      quiz: 'bg-blue-100 text-blue-700',
      exam: 'bg-red-100 text-red-700',
      assignment: 'bg-purple-100 text-purple-700'
    };
    return colors[type] || colors.quiz;
  };

  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return 'bg-green-100 text-green-700';
    if (grade.startsWith('B')) return 'bg-blue-100 text-blue-700';
    if (grade.startsWith('C')) return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-red-700';
  };

  return (
    <div className="p-4 lg:p-8 pb-24 lg:pb-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Tests & Quizzes</h1>
        <p className="text-base lg:text-lg text-gray-600">Track your assessments and performance</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 lg:p-5">
            <div className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center mb-3`}>
              <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-6">
        <div className="flex border-b border-gray-200 overflow-x-auto">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`flex-1 px-6 py-4 font-semibold transition-all text-base whitespace-nowrap ${
              activeTab === 'upcoming'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Upcoming Tests ({upcomingTests.length})
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`flex-1 px-6 py-4 font-semibold transition-all text-base whitespace-nowrap ${
              activeTab === 'completed'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Completed ({completedTests.length})
          </button>
        </div>
      </div>

      {/* Upcoming Tests */}
      {activeTab === 'upcoming' && (
        <div className="space-y-4">
          {upcomingTests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 lg:p-6 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${getTypeColor(test.type)}`}>
                      {test.type}
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                      Scheduled
                    </span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{test.title}</h3>
                  <p className="text-sm lg:text-base text-gray-600 mb-4">{test.course}</p>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Date</p>
                        <p className="text-sm font-semibold text-gray-900">{test.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Time</p>
                        <p className="text-sm font-semibold text-gray-900">{test.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="text-sm font-semibold text-gray-900">{test.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Marks</p>
                        <p className="text-sm font-semibold text-gray-900">{test.totalMarks}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center text-base">
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Start Test
                  </button>
                  <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all text-base">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Completed Tests */}
      {activeTab === 'completed' && (
        <div className="space-y-4">
          {completedTests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 lg:p-6 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${getTypeColor(test.type)}`}>
                      {test.type}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getGradeColor(test.grade)}`}>
                      Grade: {test.grade}
                    </span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{test.title}</h3>
                  <p className="text-sm lg:text-base text-gray-600 mb-4">{test.course}</p>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Completed On</p>
                      <p className="text-sm font-semibold text-gray-900">{test.completedDate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Score</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {test.scoredMarks}/{test.totalMarks}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Percentage</p>
                      <p className="text-sm font-semibold text-green-600">{test.percentage}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Duration</p>
                      <p className="text-sm font-semibold text-gray-900">{test.duration}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all"
                        style={{ width: `${test.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all flex items-center justify-center text-base">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    View Results
                  </button>
                  <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all text-base">
                    Download Report
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestsQuizzes;
