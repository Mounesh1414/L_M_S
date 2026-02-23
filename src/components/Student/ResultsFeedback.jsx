import { useState } from 'react'
import { CheckCircle, TrendingUp, Award, FileText, ChevronDown, Star, MessageSquare } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'

const ResultsFeedback = () => {
  const [selectedCourse, setSelectedCourse] = useState('all')

  const stats = [
    { label: 'Average Score', value: '82%', icon: TrendingUp, color: 'bg-green-500' },
    { label: 'Tests Taken', value: '24', icon: CheckCircle, color: 'bg-blue-500' },
    { label: 'Highest Score', value: '98%', icon: Award, color: 'bg-purple-500' },
    { label: 'Pending Results', value: '3', icon: FileText, color: 'bg-orange-500' },
  ]

  const performanceTrend = [
    { month: 'Aug', score: 72 },
    { month: 'Sep', score: 75 },
    { month: 'Oct', score: 78 },
    { month: 'Nov', score: 81 },
    { month: 'Dec', score: 84 },
    { month: 'Jan', score: 82 },
  ]

  const subjectPerformance = [
    { subject: 'Web Development', score: 88 },
    { subject: 'Database Management', score: 85 },
    { subject: 'Programming', score: 79 },
    { subject: 'UI/UX Design', score: 76 },
  ]

  const skillsRadar = [
    { skill: 'Theory', value: 85 },
    { skill: 'Practical', value: 90 },
    { skill: 'Problem Solving', value: 78 },
    { skill: 'Code Quality', value: 82 },
    { skill: 'Time Management', value: 75 },
  ]

  const testResults = [
    {
      id: 1,
      title: 'React Advanced Concepts',
      course: 'Web Development',
      date: '2024-01-18',
      score: 88,
      maxScore: 100,
      grade: 'A',
      feedback: 'Excellent understanding of hooks and state management. Could improve on optimization techniques.',
      strengths: ['Component Design', 'State Management', 'Props Handling'],
      improvements: ['Performance Optimization', 'Error Boundaries'],
    },
    {
      id: 2,
      title: 'Database Design Quiz',
      course: 'Database Management',
      date: '2024-01-15',
      score: 92,
      maxScore: 100,
      grade: 'A+',
      feedback: 'Outstanding work on normalization and ER diagrams. Perfect score on practical questions.',
      strengths: ['Normalization', 'ER Diagrams', 'SQL Queries'],
      improvements: ['Advanced Indexing'],
    },
    {
      id: 3,
      title: 'Python Algorithms Test',
      course: 'Programming Fundamentals',
      date: '2024-01-12',
      score: 75,
      maxScore: 100,
      grade: 'B',
      feedback: 'Good grasp of basic algorithms. Need more practice with time complexity analysis.',
      strengths: ['Basic Algorithms', 'Code Structure'],
      improvements: ['Time Complexity', 'Space Optimization', 'Advanced Data Structures'],
    },
    {
      id: 4,
      title: 'UI Principles Quiz',
      course: 'UI/UX Design',
      date: '2024-01-10',
      score: 82,
      maxScore: 100,
      grade: 'A-',
      feedback: 'Strong understanding of design principles. Great work on accessibility concepts.',
      strengths: ['Design Principles', 'Accessibility', 'Color Theory'],
      improvements: ['User Testing Methods'],
    },
  ]

  const getGradeColor = (grade) => {
    if (grade.includes('A')) return 'bg-green-100 text-green-800'
    if (grade.includes('B')) return 'bg-blue-100 text-blue-800'
    if (grade.includes('C')) return 'bg-yellow-100 text-yellow-800'
    return 'bg-red-100 text-red-800'
  }

  const getScoreColor = (percentage) => {
    if (percentage >= 90) return 'text-green-600'
    if (percentage >= 75) return 'text-blue-600'
    if (percentage >= 60) return 'text-orange-600'
    return 'text-red-600'
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Test Results</h1>
        <p className="text-gray-600 mt-1">Track your performance</p>
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Performance Trend */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Performance Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="score" stroke="#10b981" strokeWidth={2} name="Average Score %" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Skills Radar */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Skills Assessment</h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={skillsRadar}>
              <PolarGrid />
              <PolarAngleAxis dataKey="skill" />
              <PolarRadiusAxis domain={[0, 100]} />
              <Radar name="Score" dataKey="value" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Subject Performance */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Subject-wise Performance</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={subjectPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="score" fill="#10b981" name="Average Score %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Results */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Detailed Test Results</h2>
          <div className="space-y-6">
            {testResults.map((result) => {
              const percentage = (result.score / result.maxScore) * 100
              return (
                <div key={result.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{result.title}</h3>
                      <p className="text-sm text-gray-600">{result.course} • {result.date}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getGradeColor(result.grade)}`}>
                        Grade: {result.grade}
                      </span>
                      <p className={`text-2xl font-bold mt-2 ${getScoreColor(percentage)}`}>
                        {result.score}/{result.maxScore}
                      </p>
                      <p className="text-sm text-gray-600">{percentage.toFixed(1)}%</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${percentage >= 90 ? 'bg-green-500' : percentage >= 75 ? 'bg-blue-500' : percentage >= 60 ? 'bg-orange-500' : 'bg-red-500'}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Feedback */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <div className="flex items-start gap-2">
                      <MessageSquare className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-blue-900 mb-1">Instructor Feedback</p>
                        <p className="text-sm text-blue-800">{result.feedback}</p>
                      </div>
                    </div>
                  </div>

                  {/* Strengths and Improvements */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <h4 className="font-medium text-green-900">Strengths</h4>
                      </div>
                      <ul className="space-y-1">
                        {result.strengths.map((strength, idx) => (
                          <li key={idx} className="text-sm text-green-800 flex items-center gap-2">
                            <Star className="w-3 h-3 fill-green-600 text-green-600" />
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-orange-600" />
                        <h4 className="font-medium text-orange-900">Areas for Improvement</h4>
                      </div>
                      <ul className="space-y-1">
                        {result.improvements.map((improvement, idx) => (
                          <li key={idx} className="text-sm text-orange-800 flex items-center gap-2">
                            <ChevronDown className="w-3 h-3 text-orange-600" />
                            {improvement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultsFeedback
