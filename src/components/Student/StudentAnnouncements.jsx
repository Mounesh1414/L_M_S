import { useState } from 'react'
import { Bell, Star, AlertCircle, Info, Calendar, User, Filter, Search } from 'lucide-react'

const StudentAnnouncements = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [showUnreadOnly, setShowUnreadOnly] = useState(false)

  const stats = [
    { label: 'Total Announcements', value: '42', icon: Bell, color: 'bg-blue-500' },
    { label: 'Unread', value: '8', icon: AlertCircle, color: 'bg-orange-500' },
    { label: 'Important', value: '5', icon: Star, color: 'bg-purple-500' },
    { label: 'This Week', value: '12', icon: Calendar, color: 'bg-green-500' },
  ]

  const announcements = [
    {
      id: 1,
      title: 'Semester Examination Schedule Released',
      category: 'exam',
      priority: 'high',
      from: 'Examination Department',
      date: '2024-01-18',
      time: '10:30 AM',
      isRead: false,
      content: 'The final semester examination schedule has been released. Please check your respective timetables and prepare accordingly. All exams will start from February 1st, 2024.',
      attachments: ['exam_schedule.pdf'],
    },
    {
      id: 2,
      title: 'Holiday Notice - Republic Day',
      category: 'general',
      priority: 'medium',
      from: 'Administration',
      date: '2024-01-17',
      time: '2:15 PM',
      isRead: false,
      content: 'The institute will remain closed on January 26th, 2024 on account of Republic Day. Classes will resume on January 27th.',
      attachments: [],
    },
    {
      id: 3,
      title: 'New Course Registration Open',
      category: 'course',
      priority: 'high',
      from: 'Academic Department',
      date: '2024-01-16',
      time: '11:00 AM',
      isRead: true,
      content: 'Registration for the upcoming semester courses is now open. Students can register for elective courses through the student portal until January 25th.',
      attachments: ['course_list.pdf'],
    },
    {
      id: 4,
      title: 'Library Timing Extension',
      category: 'facility',
      priority: 'low',
      from: 'Library Department',
      date: '2024-01-15',
      time: '9:45 AM',
      isRead: true,
      content: 'The library will now remain open until 10:00 PM on weekdays during the examination period. Weekend timings remain unchanged.',
      attachments: [],
    },
    {
      id: 5,
      title: 'Assignment Deadline Extended',
      category: 'assignment',
      priority: 'medium',
      from: 'Dr. Sarah Johnson',
      date: '2024-01-14',
      time: '4:30 PM',
      isRead: false,
      content: 'The deadline for Web Development assignment has been extended to January 22nd. Please ensure timely submission to avoid penalties.',
      attachments: [],
    },
    {
      id: 6,
      title: 'Tech Fest 2024 Registration',
      category: 'event',
      priority: 'medium',
      from: 'Student Council',
      date: '2024-01-13',
      time: '1:20 PM',
      isRead: true,
      content: 'Register for the annual Tech Fest 2024! Multiple coding competitions, hackathons, and workshops. Registration closes on January 20th.',
      attachments: ['techfest_details.pdf'],
    },
    {
      id: 7,
      title: 'Placement Drive Schedule',
      category: 'placement',
      priority: 'high',
      from: 'Placement Cell',
      date: '2024-01-12',
      time: '3:00 PM',
      isRead: false,
      content: 'Campus placement drives for final year students will begin from February 5th. Please update your resumes and prepare for aptitude tests.',
      attachments: ['company_list.pdf', 'preparation_guide.pdf'],
    },
    {
      id: 8,
      title: 'Fee Payment Reminder',
      category: 'fee',
      priority: 'high',
      from: 'Accounts Department',
      date: '2024-01-11',
      time: '10:00 AM',
      isRead: true,
      content: 'This is a reminder for students who have pending semester fees. Please clear your dues by January 20th to avoid late fees.',
      attachments: [],
    },
  ]

  const filteredAnnouncements = announcements.filter(announcement => {
    const matchesCategory = selectedCategory === 'all' || announcement.category === selectedCategory
    const matchesSearch = announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         announcement.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         announcement.from.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesReadStatus = !showUnreadOnly || !announcement.isRead
    return matchesCategory && matchesSearch && matchesReadStatus
  })

  const getCategoryColor = (category) => {
    const colors = {
      exam: 'bg-red-100 text-red-800',
      course: 'bg-blue-100 text-blue-800',
      assignment: 'bg-purple-100 text-purple-800',
      event: 'bg-green-100 text-green-800',
      placement: 'bg-orange-100 text-orange-800',
      facility: 'bg-cyan-100 text-cyan-800',
      fee: 'bg-pink-100 text-pink-800',
      general: 'bg-gray-100 text-gray-800',
    }
    return colors[category] || colors.general
  }

  const getPriorityIcon = (priority) => {
    if (priority === 'high') return <AlertCircle className="w-5 h-5 text-red-600" />
    if (priority === 'medium') return <Info className="w-5 h-5 text-orange-600" />
    return <Info className="w-5 h-5 text-blue-600" />
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Announcements</h1>
        <p className="text-gray-600 mt-1">Stay updated with important announcements and notices</p>
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

      {/* Filters */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search announcements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
              >
                <option value="all">All Categories</option>
                <option value="exam">Examinations</option>
                <option value="course">Courses</option>
                <option value="assignment">Assignments</option>
                <option value="event">Events</option>
                <option value="placement">Placements</option>
                <option value="facility">Facilities</option>
                <option value="fee">Fees</option>
                <option value="general">General</option>
              </select>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="unreadOnly"
                checked={showUnreadOnly}
                onChange={(e) => setShowUnreadOnly(e.target.checked)}
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="unreadOnly" className="ml-2 text-sm text-gray-700">
                Show unread only
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Announcements List */}
      <div className="space-y-4">
        {filteredAnnouncements.map((announcement) => (
          <div
            key={announcement.id}
            className={`bg-white rounded-lg shadow hover:shadow-lg transition-shadow ${
              !announcement.isRead ? 'border-l-4 border-green-500' : ''
            }`}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {getPriorityIcon(announcement.priority)}
                    <h3 className="text-lg font-semibold text-gray-800">{announcement.title}</h3>
                    {!announcement.isRead && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                        New
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {announcement.from}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {announcement.date} at {announcement.time}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getCategoryColor(announcement.category)}`}>
                      {announcement.category.charAt(0).toUpperCase() + announcement.category.slice(1)}
                    </span>
                  </div>
                </div>
                {announcement.priority === 'high' && (
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                )}
              </div>

              <p className="text-gray-700 mb-4">{announcement.content}</p>

              {announcement.attachments.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {announcement.attachments.map((attachment, idx) => (
                    <button
                      key={idx}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-700 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {attachment}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredAnnouncements.length === 0 && (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <Bell className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">No announcements found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  )
}

export default StudentAnnouncements
