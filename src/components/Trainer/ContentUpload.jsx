import React from 'react';
import { BookOpen, Upload, Plus, Eye, Edit, Trash2, FileText, Video, File } from 'lucide-react';

const ContentUpload = () => {
  const content = [
    {
      id: 1,
      title: 'Introduction to Data Structures',
      course: 'Data Structures & Algorithms',
      type: 'video',
      size: '245 MB',
      duration: '45:30',
      uploadDate: '2026-01-25',
      views: 128,
      status: 'published'
    },
    {
      id: 2,
      title: 'Arrays and Linked Lists - Notes',
      course: 'Data Structures & Algorithms',
      type: 'pdf',
      size: '2.5 MB',
      pages: 24,
      uploadDate: '2026-01-24',
      downloads: 95,
      status: 'published'
    },
    {
      id: 3,
      title: 'React Hooks Tutorial',
      course: 'Web Development',
      type: 'video',
      size: '189 MB',
      duration: '38:15',
      uploadDate: '2026-01-23',
      views: 86,
      status: 'published'
    },
    {
      id: 4,
      title: 'JavaScript ES6 Features',
      course: 'Web Development',
      type: 'pdf',
      size: '3.2 MB',
      pages: 18,
      uploadDate: '2026-01-22',
      downloads: 72,
      status: 'published'
    }
  ];

  const stats = [
    { label: 'Total Content', value: '48', color: 'blue' },
    { label: 'Videos Uploaded', value: '28', color: 'purple' },
    { label: 'PDFs Uploaded', value: '20', color: 'orange' },
    { label: 'Total Views', value: '3.2K', color: 'green' }
  ];

  const getTypeIcon = (type) => {
    if (type === 'video') return <Video className="w-5 h-5 text-purple-600" />;
    if (type === 'pdf') return <FileText className="w-5 h-5 text-red-600" />;
    return <File className="w-5 h-5 text-gray-600" />;
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Content Upload</h1>
          <p className="text-gray-600 mt-1">Upload videos, PDFs, and learning materials</p>
        </div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Upload Content
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Content</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Course</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Size</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Upload Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Engagement</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {content.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      {getTypeIcon(item.type)}
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-600">
                          {item.type === 'video' ? `Duration: ${item.duration}` : `${item.pages} pages`}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{item.course}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.type === 'video' ? 'bg-purple-100 text-purple-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {item.type.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{item.size}</td>
                  <td className="px-6 py-4 text-gray-600">{item.uploadDate}</td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-gray-900">
                      {item.type === 'video' ? `${item.views} views` : `${item.downloads} downloads`}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContentUpload;
