import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  PlayCircle,
  CheckCircle,
  Lock,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  FileText,
  Download,
  Clock,
  Award
} from 'lucide-react';

const CourseLearning = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [currentLesson, setCurrentLesson] = useState(0);
  const [showSidebar, setShowSidebar] = useState(true);

  const course = {
    id: courseId,
    title: 'Web Development Fundamentals',
    instructor: 'Dr. Sarah Johnson',
    progress: 65,
    modules: [
      {
        id: 1,
        title: 'Introduction to Web Development',
        lessons: [
          { id: 1, title: 'Welcome & Course Overview', duration: '10:30', type: 'video', completed: true, unlocked: true },
          { id: 2, title: 'Setting Up Your Environment', duration: '15:45', type: 'video', completed: true, unlocked: true },
          { id: 3, title: 'Introduction to HTML', duration: '20:15', type: 'video', completed: true, unlocked: true }
        ]
      },
      {
        id: 2,
        title: 'HTML Fundamentals',
        lessons: [
          { id: 4, title: 'HTML Elements & Tags', duration: '25:30', type: 'video', completed: true, unlocked: true },
          { id: 5, title: 'Forms & Input Elements', duration: '30:20', type: 'video', completed: true, unlocked: true },
          { id: 6, title: 'HTML Best Practices', duration: '18:40', type: 'reading', completed: false, unlocked: true },
          { id: 7, title: 'HTML Quiz', duration: '15:00', type: 'quiz', completed: false, unlocked: true }
        ]
      },
      {
        id: 3,
        title: 'CSS Styling',
        lessons: [
          { id: 8, title: 'CSS Basics', duration: '22:15', type: 'video', completed: false, unlocked: true },
          { id: 9, title: 'CSS Flexbox', duration: '28:30', type: 'video', completed: false, unlocked: true },
          { id: 10, title: 'CSS Grid Layout', duration: '32:45', type: 'video', completed: false, unlocked: true },
          { id: 11, title: 'Responsive Design', duration: '35:20', type: 'video', completed: false, unlocked: false },
          { id: 12, title: 'CSS Assignment', duration: '45:00', type: 'assignment', completed: false, unlocked: false }
        ]
      }
    ]
  };

  const allLessons = course.modules.flatMap(m => m.lessons);
  const currentLessonData = allLessons[currentLesson];

  const handleNextLesson = () => {
    if (currentLesson < allLessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  const handlePrevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return <PlayCircle className="w-4 h-4" />;
      case 'reading': return <FileText className="w-4 h-4" />;
      case 'quiz': return <BookOpen className="w-4 h-4" />;
      case 'assignment': return <Download className="w-4 h-4" />;
      default: return <PlayCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50 pt-16 lg:pt-0">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 px-4 lg:px-6 py-3 lg:py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/student/courses')}
            className="flex items-center text-gray-600 hover:text-gray-900 font-medium text-sm lg:text-base"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Courses
          </button>
          <div className="hidden lg:block flex-1 mx-8">
            <h2 className="text-lg font-bold text-gray-900 truncate">{course.title}</h2>
            <p className="text-sm text-gray-600">{course.instructor}</p>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-4">
            <div className="hidden lg:flex items-center space-x-2">
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <span className="text-sm font-semibold text-gray-900">{course.progress}%</span>
            </div>
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="lg:hidden px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium"
            >
              Lessons
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden pb-20 lg:pb-0">
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto p-4 lg:p-8">
            {/* Video Player */}
            <div className="bg-black rounded-2xl overflow-hidden mb-6 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                <PlayCircle className="w-20 h-20 lg:w-24 lg:h-24 text-white opacity-80" />
              </div>
            </div>

            {/* Lesson Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 lg:p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold uppercase">
                      {currentLessonData.type}
                    </span>
                    <span className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {currentLessonData.duration}
                    </span>
                  </div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {currentLessonData.title}
                  </h1>
                  <p className="text-base lg:text-lg text-gray-600">
                    Lesson {currentLesson + 1} of {allLessons.length}
                  </p>
                </div>
                {currentLessonData.completed && (
                  <div className="bg-green-100 text-green-700 p-3 rounded-full">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <button
                  onClick={handlePrevLesson}
                  disabled={currentLesson === 0}
                  className={`flex items-center px-4 lg:px-6 py-3 rounded-xl font-semibold transition-all text-sm lg:text-base ${
                    currentLesson === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Previous
                </button>
                <button
                  onClick={handleNextLesson}
                  disabled={currentLesson === allLessons.length - 1}
                  className={`flex items-center px-4 lg:px-6 py-3 rounded-xl font-semibold transition-all text-sm lg:text-base ${
                    currentLesson === allLessons.length - 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                  }`}
                >
                  Next Lesson
                  <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>

            {/* Lesson Description */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 lg:p-6">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">About this lesson</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                In this lesson, you'll learn the fundamentals of {currentLessonData.title.toLowerCase()}. 
                We'll cover the key concepts, practical examples, and best practices to help you master this topic.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="text-sm font-semibold text-gray-900">{currentLessonData.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    {getTypeIcon(currentLessonData.type)}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Type</p>
                    <p className="text-sm font-semibold text-gray-900 capitalize">{currentLessonData.type}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Award className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Status</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {currentLessonData.completed ? 'Completed' : 'In Progress'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Course Content */}
        <div className={`${
          showSidebar ? 'translate-x-0' : 'translate-x-full'
        } lg:translate-x-0 fixed lg:relative inset-y-0 right-0 w-80 lg:w-96 bg-white border-l border-gray-200 overflow-y-auto transition-transform duration-300 z-40 pt-16 lg:pt-0`}>
          <div className="sticky top-0 bg-white border-b border-gray-200 px-4 lg:px-6 py-4 flex items-center justify-between lg:justify-start">
            <h3 className="text-lg font-bold text-gray-900">Course Content</h3>
            <button
              onClick={() => setShowSidebar(false)}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="p-4 space-y-4 pb-24 lg:pb-4">
            {course.modules.map((module) => (
              <div key={module.id} className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-bold text-gray-900 mb-3 text-sm lg:text-base">
                  Module {module.id}: {module.title}
                </h4>
                <div className="space-y-2">
                  {module.lessons.map((lesson) => {
                    const globalIndex = allLessons.findIndex(l => l.id === lesson.id);
                    return (
                      <button
                        key={lesson.id}
                        onClick={() => lesson.unlocked && setCurrentLesson(globalIndex)}
                        disabled={!lesson.unlocked}
                        className={`w-full flex items-start space-x-3 p-3 rounded-lg transition-all text-left ${
                          globalIndex === currentLesson
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                            : lesson.unlocked
                            ? 'bg-white hover:bg-gray-100 text-gray-900'
                            : 'bg-white opacity-50 cursor-not-allowed text-gray-500'
                        }`}
                      >
                        <div className={`mt-1 ${globalIndex === currentLesson ? 'text-white' : lesson.completed ? 'text-green-600' : lesson.unlocked ? 'text-gray-400' : 'text-gray-300'}`}>
                          {lesson.completed ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : lesson.unlocked ? (
                            getTypeIcon(lesson.type)
                          ) : (
                            <Lock className="w-5 h-5" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium truncate ${
                            globalIndex === currentLesson ? 'text-white' : ''
                          }`}>
                            {lesson.title}
                          </p>
                          <p className={`text-xs mt-1 ${
                            globalIndex === currentLesson ? 'text-white text-opacity-90' : 'text-gray-500'
                          }`}>
                            {lesson.duration}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {showSidebar && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setShowSidebar(false)}
        ></div>
      )}
    </div>
  );
};

export default CourseLearning;
