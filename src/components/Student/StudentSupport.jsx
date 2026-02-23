import { useState } from 'react'
import { HelpCircle, MessageSquare, Send, Search, BookOpen, FileText, Video, Clock, CheckCircle } from 'lucide-react'

const StudentSupport = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [showNewTicket, setShowNewTicket] = useState(false)

  const stats = [
    { label: 'Open Tickets', value: '3', icon: MessageSquare, color: 'bg-orange-500' },
    { label: 'Resolved', value: '12', icon: CheckCircle, color: 'bg-green-500' },
    { label: 'Avg Response Time', value: '2h', icon: Clock, color: 'bg-blue-500' },
    { label: 'FAQ Articles', value: '45', icon: BookOpen, color: 'bg-purple-500' },
  ]

  const faqCategories = [
    { id: 'account', name: 'Account & Login', icon: '👤', count: 8 },
    { id: 'courses', name: 'Courses & Content', icon: '📚', count: 12 },
    { id: 'assignments', name: 'Assignments & Tests', icon: '📝', count: 10 },
    { id: 'technical', name: 'Technical Issues', icon: '⚙️', count: 9 },
    { id: 'payments', name: 'Fees & Payments', icon: '💳', count: 6 },
  ]

  const faqs = [
    {
      id: 1,
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'Go to Profile & Settings > Change Password. Enter your current password and set a new one that meets the security requirements.',
      helpful: 45,
    },
    {
      id: 2,
      category: 'courses',
      question: 'How can I access course materials?',
      answer: 'Navigate to Learning Content from the main menu. All videos, notes, and resources are organized by course.',
      helpful: 38,
    },
    {
      id: 3,
      category: 'assignments',
      question: 'What is the deadline for assignment submission?',
      answer: 'Each assignment displays its deadline clearly. You can view all pending assignments with their due dates in the Assignments section.',
      helpful: 52,
    },
    {
      id: 4,
      category: 'technical',
      question: 'Video playback is not working, what should I do?',
      answer: 'Try refreshing the page or clearing your browser cache. Ensure you have a stable internet connection. If the issue persists, contact technical support.',
      helpful: 29,
    },
    {
      id: 5,
      category: 'courses',
      question: 'How do I track my course progress?',
      answer: 'Visit the Lesson Progress section to see detailed progress for each course, including completed lessons and overall completion percentage.',
      helpful: 41,
    },
    {
      id: 6,
      category: 'account',
      question: 'Can I update my personal information?',
      answer: 'Yes, go to Profile & Settings and click Edit Profile. You can update contact details, address, and other information.',
      helpful: 33,
    },
  ]

  const myTickets = [
    {
      id: 'TKT-2024-001',
      subject: 'Unable to download course material',
      category: 'technical',
      status: 'open',
      priority: 'medium',
      createdDate: '2024-01-18',
      lastUpdate: '2024-01-18 10:30 AM',
      response: 'Our technical team is looking into this issue. We will update you within 24 hours.',
    },
    {
      id: 'TKT-2024-002',
      subject: 'Assignment submission error',
      category: 'assignments',
      status: 'resolved',
      priority: 'high',
      createdDate: '2024-01-15',
      lastUpdate: '2024-01-16 3:45 PM',
      response: 'The issue has been resolved. You can now submit your assignment without errors.',
    },
    {
      id: 'TKT-2024-003',
      subject: 'Fee payment receipt not received',
      category: 'payments',
      status: 'open',
      priority: 'medium',
      createdDate: '2024-01-17',
      lastUpdate: '2024-01-17 2:15 PM',
      response: 'We are processing your request. The receipt will be emailed to you shortly.',
    },
  ]

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = !selectedCategory || faq.category === selectedCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getStatusColor = (status) => {
    switch(status) {
      case 'open': return 'bg-orange-100 text-orange-800'
      case 'in-progress': return 'bg-blue-100 text-blue-800'
      case 'resolved': return 'bg-green-100 text-green-800'
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

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Support & Help</h1>
        <p className="text-gray-600 mt-1">Get help with your questions and issues</p>
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

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => setShowNewTicket(true)}
              className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors"
            >
              <MessageSquare className="w-6 h-6 text-green-600" />
              <div className="text-left">
                <p className="font-medium text-gray-800">Submit a Ticket</p>
                <p className="text-sm text-gray-600">Get personalized support</p>
              </div>
            </button>
            <a
              href="#faqs"
              className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <HelpCircle className="w-6 h-6 text-blue-600" />
              <div className="text-left">
                <p className="font-medium text-gray-800">Browse FAQs</p>
                <p className="text-sm text-gray-600">Find instant answers</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors"
            >
              <Video className="w-6 h-6 text-purple-600" />
              <div className="text-left">
                <p className="font-medium text-gray-800">Video Tutorials</p>
                <p className="text-sm text-gray-600">Watch how-to guides</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* My Support Tickets */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">My Support Tickets</h2>
          <div className="space-y-4">
            {myTickets.map((ticket) => (
              <div key={ticket.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-800">{ticket.subject}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(ticket.status)}`}>
                        {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                      </span>
                      <span className={`text-xs font-semibold ${getPriorityColor(ticket.priority)}`}>
                        {ticket.priority.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Ticket ID: {ticket.id}</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 mb-3">
                  <p className="text-sm text-gray-700">{ticket.response}</p>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Created: {ticket.createdDate}</span>
                  <span>Last Update: {ticket.lastUpdate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faqs" className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
          
          {/* FAQ Categories */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
            <button
              onClick={() => setSelectedCategory('')}
              className={`p-3 rounded-lg border-2 transition-colors ${
                !selectedCategory ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-2xl mb-1">📋</div>
              <p className="text-sm font-medium">All</p>
            </button>
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-3 rounded-lg border-2 transition-colors ${
                  selectedCategory === cat.id ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl mb-1">{cat.icon}</div>
                <p className="text-xs font-medium">{cat.name}</p>
                <p className="text-xs text-gray-500">{cat.count} articles</p>
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <details key={faq.id} className="border border-gray-200 rounded-lg">
                <summary className="p-4 cursor-pointer hover:bg-gray-50 font-medium text-gray-800 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </summary>
                <div className="px-4 pb-4 pt-2 border-t border-gray-100">
                  <p className="text-gray-700 mb-3">{faq.answer}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-600">Was this helpful?</span>
                    <button className="text-green-600 hover:text-green-700">👍 Yes ({faq.helpful})</button>
                    <button className="text-gray-600 hover:text-gray-700">👎 No</button>
                  </div>
                </div>
              </details>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">No FAQs found</h3>
              <p className="text-gray-600">Try adjusting your search or category</p>
            </div>
          )}
        </div>
      </div>

      {/* New Ticket Modal */}
      {showNewTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Submit Support Ticket</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="">Select a category</option>
                  <option value="account">Account & Login</option>
                  <option value="courses">Courses & Content</option>
                  <option value="assignments">Assignments & Tests</option>
                  <option value="technical">Technical Issues</option>
                  <option value="payments">Fees & Payments</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="Brief description of your issue"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  rows="6"
                  placeholder="Provide detailed information about your issue..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Attachment (Optional)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-green-500">
                  <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Click to upload files or drag and drop</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG, PDF (Max 5MB)</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowNewTicket(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Submit Ticket
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StudentSupport
