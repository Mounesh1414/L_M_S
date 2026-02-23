import { useState } from 'react'
import { FileText, Upload, Clock, CheckCircle, AlertCircle, Calendar, Download, Send } from 'lucide-react'

const Assignments = () => {
  const [selectedTab, setSelectedTab] = useState('pending')
  const [showSubmitModal, setShowSubmitModal] = useState(false)
  const [selectedAssignment, setSelectedAssignment] = useState(null)

  const stats = [
    { label: 'Pending', value: '5', icon: Clock, color: 'bg-orange-500' },
    { label: 'Submitted', value: '12', icon: CheckCircle, color: 'bg-green-500' },
    { label: 'Overdue', value: '2', icon: AlertCircle, color: 'bg-red-500' },
    { label: 'Graded', value: '8', icon: FileText, color: 'bg-blue-500' },
  ]

  const assignments = [
    { id: 1, title: 'React Hooks Implementation', course: 'Web Development', dueDate: '2024-01-25', status: 'pending', marks: 20, priority: 'high' },
    { id: 2, title: 'Database Design Project', course: 'Database Management', dueDate: '2024-01-22', status: 'overdue', marks: 25, priority: 'high' },
    { id: 3, title: 'Python Algorithm Challenge', course: 'Programming Fundamentals', dueDate: '2024-01-28', status: 'pending', marks: 15, priority: 'medium' },
    { id: 4, title: 'CSS Flexbox Layout', course: 'Web Development', submittedDate: '2024-01-15', status: 'submitted', marks: 10, grade: null },
    { id: 5, title: 'SQL Query Optimization', course: 'Database Management', submittedDate: '2024-01-12', status: 'graded', marks: 20, grade: 18 },
    { id: 6, title: 'User Flow Diagram', course: 'UI/UX Design', dueDate: '2024-01-30', status: 'pending', marks: 15, priority: 'low' },
    { id: 7, title: 'REST API Development', course: 'Web Development', submittedDate: '2024-01-10', status: 'graded', marks: 25, grade: 23 },
    { id: 8, title: 'Data Structures Analysis', course: 'Programming Fundamentals', submittedDate: '2024-01-14', status: 'submitted', marks: 20, grade: null },
  ]

  const filteredAssignments = assignments.filter(assignment => {
    if (selectedTab === 'all') return true
    return assignment.status === selectedTab
  })

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'bg-orange-100 text-orange-800'
      case 'submitted': return 'bg-blue-100 text-blue-800'
      case 'overdue': return 'bg-red-100 text-red-800'
      case 'graded': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'text-red-600'
      case 'medium': return 'text-orange-600'
      case 'low': return 'text-green-600'
      default: return 'text-gray-600'
    }
  }

  const getDaysRemaining = (dueDate) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = due - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Assignments</h1>
        <p className="text-gray-600 mt-1">Submit assignments and track your submissions</p>
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

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {[
              { id: 'all', label: 'All Assignments' },
              { id: 'pending', label: 'Pending' },
              { id: 'submitted', label: 'Submitted' },
              { id: 'overdue', label: 'Overdue' },
              { id: 'graded', label: 'Graded' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-6 py-3 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                  selectedTab === tab.id
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Assignments List */}
        <div className="p-6">
          <div className="space-y-4">
            {filteredAssignments.map((assignment) => (
              <div key={assignment.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{assignment.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(assignment.status)}`}>
                        {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                      </span>
                      {assignment.priority && (
                        <span className={`text-xs font-semibold ${getPriorityColor(assignment.priority)}`}>
                          {assignment.priority.toUpperCase()}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{assignment.course}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-800">Max Marks: {assignment.marks}</p>
                    {assignment.grade !== undefined && assignment.grade !== null && (
                      <p className="text-sm text-green-600 font-semibold mt-1">Grade: {assignment.grade}/{assignment.marks}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {assignment.dueDate && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>Due: {assignment.dueDate}</span>
                      {assignment.status === 'pending' && (
                        <span className={`ml-2 ${getDaysRemaining(assignment.dueDate) < 3 ? 'text-red-600' : 'text-gray-500'}`}>
                          ({getDaysRemaining(assignment.dueDate)} days left)
                        </span>
                      )}
                    </div>
                  )}
                  {assignment.submittedDate && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4" />
                      <span>Submitted: {assignment.submittedDate}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Instructions
                  </button>
                  {(assignment.status === 'pending' || assignment.status === 'overdue') && (
                    <button
                      onClick={() => {
                        setSelectedAssignment(assignment)
                        setShowSubmitModal(true)
                      }}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                    >
                      <Upload className="w-4 h-4" />
                      Submit Assignment
                    </button>
                  )}
                  {assignment.status === 'submitted' && (
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      View Submission
                    </button>
                  )}
                  {assignment.status === 'graded' && (
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      View Feedback
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredAssignments.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">No assignments found</h3>
              <p className="text-gray-600">No assignments in this category</p>
            </div>
          )}
        </div>
      </div>

      {/* Submit Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Submit Assignment</h2>
            <p className="text-gray-600 mb-4">{selectedAssignment?.title}</p>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload File</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 cursor-pointer">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 10MB)</p>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Comments (Optional)</label>
              <textarea
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Add any comments about your submission..."
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Assignments
