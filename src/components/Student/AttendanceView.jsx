import { useState } from 'react'
import { Calendar, CheckCircle, XCircle, Clock, TrendingDown, Filter } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const AttendanceView = () => {
  const [selectedMonth, setSelectedMonth] = useState('january')

  const stats = [
    { label: 'Overall Attendance', value: '87%', icon: CheckCircle, color: 'bg-green-500' },
    { label: 'Present Days', value: '78', icon: CheckCircle, color: 'bg-blue-500' },
    { label: 'Absent Days', value: '12', icon: XCircle, color: 'bg-red-500' },
    { label: 'Days Below 75%', value: '2', icon: TrendingDown, color: 'bg-orange-500' },
  ]

  const monthlyAttendance = [
    { month: 'Aug', percentage: 82 },
    { month: 'Sep', percentage: 85 },
    { month: 'Oct', percentage: 88 },
    { month: 'Nov', percentage: 90 },
    { month: 'Dec', percentage: 84 },
    { month: 'Jan', percentage: 87 },
  ]

  const courseAttendance = [
    { course: 'Web Development', present: 34, absent: 3, total: 37, percentage: 91.9, status: 'good' },
    { course: 'Database Management', present: 28, absent: 4, total: 32, percentage: 87.5, status: 'good' },
    { course: 'Programming Fundamentals', present: 22, absent: 3, total: 25, percentage: 88.0, status: 'good' },
    { course: 'UI/UX Design', present: 16, absent: 2, total: 18, percentage: 88.9, status: 'good' },
  ]

  const attendanceStatus = [
    { name: 'Present', value: 78, color: '#10b981' },
    { name: 'Absent', value: 12, color: '#ef4444' },
  ]

  const recentAttendance = [
    { date: '2024-01-18', day: 'Thursday', classes: [
      { subject: 'Web Development', status: 'present', time: '9:00 AM' },
      { subject: 'Database Management', status: 'present', time: '11:00 AM' },
      { subject: 'Programming Fundamentals', status: 'present', time: '2:00 PM' },
    ]},
    { date: '2024-01-17', day: 'Wednesday', classes: [
      { subject: 'UI/UX Design', status: 'present', time: '10:00 AM' },
      { subject: 'Web Development', status: 'absent', time: '1:00 PM' },
      { subject: 'Database Management', status: 'present', time: '3:00 PM' },
    ]},
    { date: '2024-01-16', day: 'Tuesday', classes: [
      { subject: 'Programming Fundamentals', status: 'present', time: '9:00 AM' },
      { subject: 'UI/UX Design', status: 'present', time: '11:00 AM' },
      { subject: 'Web Development', status: 'present', time: '2:00 PM' },
    ]},
    { date: '2024-01-15', day: 'Monday', classes: [
      { subject: 'Database Management', status: 'present', time: '10:00 AM' },
      { subject: 'Programming Fundamentals', status: 'present', time: '12:00 PM' },
      { subject: 'UI/UX Design', status: 'absent', time: '3:00 PM' },
    ]},
  ]

  const getStatusColor = (status) => {
    return status === 'present' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
  }

  const getPercentageColor = (percentage) => {
    if (percentage >= 85) return 'text-green-600'
    if (percentage >= 75) return 'text-blue-600'
    if (percentage >= 60) return 'text-orange-600'
    return 'text-red-600'
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Attendance View</h1>
        <p className="text-gray-600 mt-1">Track your class attendance and maintain minimum requirements</p>
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
        {/* Monthly Trend */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Monthly Attendance Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyAttendance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="percentage" fill="#10b981" name="Attendance %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Overall Status */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Overall Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={attendanceStatus}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value} days`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {attendanceStatus.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Course-wise Attendance */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Course-wise Attendance</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Course</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Present</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Absent</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Total</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Percentage</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {courseAttendance.map((course, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-800">{course.course}</td>
                    <td className="text-center py-3 px-4">
                      <span className="inline-flex items-center gap-1 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        {course.present}
                      </span>
                    </td>
                    <td className="text-center py-3 px-4">
                      <span className="inline-flex items-center gap-1 text-red-600">
                        <XCircle className="w-4 h-4" />
                        {course.absent}
                      </span>
                    </td>
                    <td className="text-center py-3 px-4 text-gray-600">{course.total}</td>
                    <td className="text-center py-3 px-4">
                      <span className={`font-bold ${getPercentageColor(course.percentage)}`}>
                        {course.percentage.toFixed(1)}%
                      </span>
                    </td>
                    <td className="text-center py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        course.percentage >= 75 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {course.percentage >= 75 ? 'Good' : 'Below Minimum'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Attendance Requirement Notice */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-blue-900 mb-1">Minimum Attendance Requirement</p>
                <p className="text-sm text-blue-800">
                  Students must maintain at least 75% attendance in each course to be eligible for semester examinations. 
                  Classes with attendance below this threshold are highlighted above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Attendance Records */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Attendance Records</h2>
          <div className="space-y-4">
            {recentAttendance.map((day, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-semibold text-gray-800">{day.day}</p>
                      <p className="text-sm text-gray-600">{day.date}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {day.classes.filter(c => c.status === 'present').length}/{day.classes.length} classes attended
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {day.classes.map((cls, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-gray-800">{cls.subject}</p>
                        <p className="text-xs text-gray-600">{cls.time}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(cls.status)}`}>
                        {cls.status === 'present' ? 'P' : 'A'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttendanceView
