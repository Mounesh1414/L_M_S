import React, { useState } from 'react';
import {
  Video,
  FileText,
  Plus,
  Upload,
  Play,
  Edit,
  Trash2,
  Eye,
  Download,
  Folder
} from 'lucide-react';

const CourseBuilder = () => {
  const [selectedBatch, setSelectedBatch] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'Introduction to React',
      batch: 'CSE Batch A',
      type: 'video',
      duration: '45 min',
      views: 58,
      status: 'published',
      uploadDate: '2026-01-20'
    },
    {
      id: 2,
      title: 'JavaScript Fundamentals',
      batch: 'CSE Batch B',
      type: 'pdf',
      pages: 25,
      downloads: 45,
      status: 'published',
      uploadDate: '2026-01-18'
    },
    {
      id: 3,
      title: 'State Management in React',
      batch: 'CSE Batch A',
      type: 'video',
      duration: '60 min',
      views: 42,
      status: 'draft',
      uploadDate: '2026-01-25'
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Course Builder</h1>
          <p className="text-gray-600 mt-1">Create and manage course content</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <Video className="w-5 h-5" />
            <span className="font-semibold">Upload Video</span>
          </button>
          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <FileText className="w-5 h-5" />
            <span className="font-semibold">Upload PDF</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Videos</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">24</h3>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <Video className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total PDFs</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">18</h3>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Views</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">1,245</h3>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Downloads</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">856</h3>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg">
              <Download className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <select
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          >
            <option value="all">All Batches</option>
            <option value="CSE Batch A">CSE Batch A</option>
            <option value="CSE Batch B">CSE Batch B</option>
            <option value="Data Science">Data Science</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none">
            <option>All Types</option>
            <option>Videos</option>
            <option>PDFs</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none">
            <option>All Status</option>
            <option>Published</option>
            <option>Draft</option>
          </select>
        </div>
      </div>

      {/* Course Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            {/* Thumbnail */}
            <div className={`h-40 ${course.type === 'video' ? 'bg-gradient-to-br from-green-500 to-green-600' : 'bg-gradient-to-br from-blue-500 to-blue-600'} flex items-center justify-center`}>
              {course.type === 'video' ? (
                <Play className="w-16 h-16 text-white" />
              ) : (
                <FileText className="w-16 h-16 text-white" />
              )}
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-gray-900 flex-1">{course.title}</h3>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    course.status === 'published'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {course.status}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-4">{course.batch}</p>

              <div className="space-y-2 mb-4">
                {course.type === 'video' ? (
                  <>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-900">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Views:</span>
                      <span className="font-semibold text-gray-900">{course.views}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Pages:</span>
                      <span className="font-semibold text-gray-900">{course.pages}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Downloads:</span>
                      <span className="font-semibold text-gray-900">{course.downloads}</span>
                    </div>
                  </>
                )}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Uploaded:</span>
                  <span className="font-semibold text-gray-900">{course.uploadDate}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2">
                <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm font-medium">View</span>
                </button>
                <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Modal Placeholder */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Upload New Content</h3>
            <p className="text-purple-100">
              Share videos, PDFs, and learning materials with your students
            </p>
          </div>
          <Upload className="w-16 h-16 text-purple-200" />
        </div>
      </div>
    </div>
  );
};

export default CourseBuilder;
