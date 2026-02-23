import { useState } from 'react'
import { TrendingUp, CheckCircle, Clock, Target, BookOpen, Video, FileText, Award } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const LessonProgress = () => {
  const [selectedCourse, setSelectedCourse] = useState('all')

  const stats = [
    { label: 'Overall Progress', value: '68%', icon: TrendingUp, color: 'bg-green-500' },
    { label: 'Completed Lessons', value: '42/62', icon: CheckCircle, color: 'bg-blue-500' },
    { label: 'Study Hours', value: '127', icon: Clock, color: 'bg-purple-500' },
    { label: 'Achievements', value: '18', icon: Award, color: 'bg-orange-500' },
  ]

  const weeklyProgress = [
    { day: 'Mon', hours: 3.5, lessons: 4 },
    { day: 'Tue', hours: 2.8, lessons: 3 },
    { day: 'Wed', hours: 4.2, lessons: 5 },
    { day: 'Thu', hours: 3.0, lessons: 3 },
    { day: 'Fri', hours: 2.5, lessons: 2 },
    { day: 'Sat', hours: 5.5, lessons: 6 },
    { day: 'Sun', hours: 4.0, lessons: 4 },
  ]

  const courseProgress = [
    { course: 'Web Development', progress: 85, completed: 34, total: 40, color: '#10b981' },
    { course: 'Database Management', progress: 72, completed: 18, total: 25, color: '#3b82f6' },
    { course: 'Programming Fundamentals', progress: 60, completed: 12, total: 20, color: '#8b5cf6' },
    { course: 'UI/UX Design', progress: 45, completed: 9, total: 20, color: '#f59e0b' },
  ]

  const contentTypeProgress = [
    { name: 'Videos', value: 45, color: '#10b981' },
    { name: 'Notes', value: 30, color: '#3b82f6' },
    { name: 'Quizzes', value: 15, color: '#8b5cf6' },
    { name: 'Assignments', value: 10, color: '#f59e0b' },
  ]

  const recentLessons = [
    { id: 1, title: 'React Components & Props', course: 'Web Development', progress: 100, status: 'completed', date: '2024-01-18', duration: '45 min' },
    { id: 2, title: 'Database Normalization', course: 'Database Management', progress: 75, status: 'in-progress', date: '2024-01-17', duration: '30 min' },
    { id: 3, title: 'State Management', course: 'Web Development', progress: 100, status: 'completed', date: '2024-01-16', duration: '50 min' },
    { id: 4, title: 'SQL Joins', course: 'Database Management', progress: 50, status: 'in-progress', date: '2024-01-15', duration: '20 min' },
    { id: 5, title: 'User Research Methods', course: 'UI/UX Design', progress: 100, status: 'completed', date: '2024-01-14', duration: '40 min' },
  ]

  const milestones = [
    { id: 1, title: 'First Course Completed', achieved: true, date: '2024-01-10', icon: '🎓' },
    { id: 2, title: '50 Lessons Completed', achieved: false, current: 42, target: 50, icon: '📚' },
    { id: 3, title: '100 Study Hours', achieved: true, date: '2024-01-15', icon: '⏰' },
    { id: 4, title: 'Perfect Week Streak', achieved: false, current: 5, target: 7, icon: '🔥' },
  ]

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'in-progress': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Lesson Progress Tracking</h1>
        <p className="text-gray-600 mt-1">Monitor your learning journey and achievements</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Weekly Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Weekly Study Activity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyProgress}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="hours" fill="#10b981" name="Study Hours" />
              <Bar dataKey="lessons" fill="#3b82f6" name="Lessons Completed" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Content Type Distribution */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Learning Content Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={contentTypeProgress}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {contentTypeProgress.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Course Progress */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Course Progress</h2>
          <div className="space-y-4">
            {courseProgress.map((course, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-800">{course.course}</span>
                  <span className="text-sm text-gray-600">{course.completed}/{course.total} lessons ({course.progress}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full transition-all duration-500"
                    style={{ width: `${course.progress}%`, backgroundColor: course.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Lessons and Milestones */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Lessons */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Lessons</h2>
            <div className="space-y-4">
              {recentLessons.map((lesson) => (
                <div key={lesson.id} className="border-l-4 border-green-500 pl-4 py-2">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-medium text-gray-800">{lesson.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(lesson.status)}`}>
                      {lesson.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{lesson.course}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{lesson.date}</span>
                    <span>{lesson.duration}</span>
                  </div>
                  {lesson.status === 'in-progress' && (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${lesson.progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Milestones & Achievements</h2>
            <div className="space-y-4">
              {milestones.map((milestone) => (
                <div key={milestone.id} className={`border rounded-lg p-4 ${milestone.achieved ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{milestone.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800 mb-1">{milestone.title}</h3>
                      {milestone.achieved ? (
                        <p className="text-sm text-green-600">Achieved on {milestone.date}</p>
                      ) : (
                        <div>
                          <p className="text-sm text-gray-600 mb-2">Progress: {milestone.current}/{milestone.target}</p>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-orange-500 h-2 rounded-full"
                              style={{ width: `${(milestone.current / milestone.target) * 100}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    {milestone.achieved && <CheckCircle className="w-6 h-6 text-green-600" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LessonProgress
