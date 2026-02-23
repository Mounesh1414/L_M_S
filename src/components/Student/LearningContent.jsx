import { useState } from 'react'
import { Video, FileText, Download, Search, Filter, BookOpen, PlayCircle, File } from 'lucide-react'

const LearningContent = () => {
  const [selectedType, setSelectedType] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const stats = [
    { label: 'Total Videos', value: '124', icon: Video, color: 'bg-green-500' },
    { label: 'Study Notes', value: '89', icon: FileText, color: 'bg-blue-500' },
    { label: 'Resources', value: '156', icon: BookOpen, color: 'bg-purple-500' },
    { label: 'Downloads', value: '342', icon: Download, color: 'bg-orange-500' },
  ]

  const learningMaterials = [
    { id: 1, type: 'video', title: 'Introduction to React Hooks', course: 'Web Development', duration: '45:30', uploadDate: '2024-01-15', thumbnail: '🎥', downloads: 234 },
    { id: 2, type: 'note', title: 'JavaScript ES6 Features', course: 'Web Development', pages: 24, uploadDate: '2024-01-14', thumbnail: '📄', downloads: 189 },
    { id: 3, type: 'video', title: 'Database Normalization', course: 'Database Management', duration: '32:15', uploadDate: '2024-01-13', thumbnail: '🎥', downloads: 167 },
    { id: 4, type: 'resource', title: 'Python Cheat Sheet', course: 'Programming Fundamentals', size: '2.4 MB', uploadDate: '2024-01-12', thumbnail: '📋', downloads: 298 },
    { id: 5, type: 'note', title: 'Data Structures Overview', course: 'Programming Fundamentals', pages: 32, uploadDate: '2024-01-11', thumbnail: '📄', downloads: 213 },
    { id: 6, type: 'video', title: 'API Integration Tutorial', course: 'Web Development', duration: '28:45', uploadDate: '2024-01-10', thumbnail: '🎥', downloads: 145 },
    { id: 7, type: 'resource', title: 'CSS Grid Layout Guide', course: 'Web Development', size: '1.8 MB', uploadDate: '2024-01-09', thumbnail: '📋', downloads: 176 },
    { id: 8, type: 'note', title: 'SQL Query Examples', course: 'Database Management', pages: 18, uploadDate: '2024-01-08', thumbnail: '📄', downloads: 203 },
  ]

  const filteredMaterials = learningMaterials.filter(material => {
    const matchesType = selectedType === 'all' || material.type === selectedType
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          material.course.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesType && matchesSearch
  })

  const getTypeIcon = (type) => {
    switch(type) {
      case 'video': return <PlayCircle className="w-5 h-5 text-green-600" />
      case 'note': return <FileText className="w-5 h-5 text-blue-600" />
      case 'resource': return <File className="w-5 h-5 text-purple-600" />
      default: return null
    }
  }

  const getTypeColor = (type) => {
    switch(type) {
      case 'video': return 'bg-green-100 text-green-800'
      case 'note': return 'bg-blue-100 text-blue-800'
      case 'resource': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Learning Content</h1>
        <p className="text-gray-600 mt-1">Access course videos, study notes, and resources</p>
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

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search learning materials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
              >
                <option value="all">All Types</option>
                <option value="video">Videos</option>
                <option value="note">Study Notes</option>
                <option value="resource">Resources</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map((material) => (
          <div key={material.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{material.thumbnail}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(material.type)}`}>
                  {material.type.charAt(0).toUpperCase() + material.type.slice(1)}
                </span>
              </div>
              
              <h3 className="font-semibold text-gray-800 mb-2">{material.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{material.course}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-4">
                  {material.type === 'video' && (
                    <span className="flex items-center gap-1">
                      <PlayCircle className="w-4 h-4" />
                      {material.duration}
                    </span>
                  )}
                  {material.type === 'note' && (
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {material.pages} pages
                    </span>
                  )}
                  {material.type === 'resource' && (
                    <span className="flex items-center gap-1">
                      <File className="w-4 h-4" />
                      {material.size}
                    </span>
                  )}
                </div>
                <span className="flex items-center gap-1">
                  <Download className="w-4 h-4" />
                  {material.downloads}
                </span>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                  {material.type === 'video' ? (
                    <>
                      <PlayCircle className="w-4 h-4" />
                      Watch
                    </>
                  ) : (
                    <>
                      <BookOpen className="w-4 h-4" />
                      View
                    </>
                  )}
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Download className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMaterials.length === 0 && (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">No materials found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  )
}

export default LearningContent
