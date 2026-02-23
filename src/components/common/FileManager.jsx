import React, { useState } from 'react';
import { Upload, File, FileText, Image as ImageIcon, Video, Music, Archive, Trash2, Download, Eye, Search, Filter, Grid, List, FolderPlus, Folder, MoreVertical } from 'lucide-react';

const FileManager = ({ roleColor = 'blue' }) => {
  const [view, setView] = useState('grid'); // grid or list
  const [selectedFolder, setSelectedFolder] = useState('root');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [folders] = useState([
    { id: 1, name: 'Assignments', files: 12, color: 'blue' },
    { id: 2, name: 'Course Materials', files: 24, color: 'green' },
    { id: 3, name: 'Projects', files: 8, color: 'purple' },
    { id: 4, name: 'Documents', files: 15, color: 'yellow' },
  ]);

  const [files] = useState([
    {
      id: 1,
      name: 'Assignment_1.pdf',
      type: 'pdf',
      size: '2.4 MB',
      modified: '2024-01-15',
      folder: 'Assignments',
    },
    {
      id: 2,
      name: 'Lecture_Notes.docx',
      type: 'doc',
      size: '1.8 MB',
      modified: '2024-01-14',
      folder: 'Course Materials',
    },
    {
      id: 3,
      name: 'Project_Demo.mp4',
      type: 'video',
      size: '45.2 MB',
      modified: '2024-01-13',
      folder: 'Projects',
    },
    {
      id: 4,
      name: 'Presentation.pptx',
      type: 'ppt',
      size: '5.6 MB',
      modified: '2024-01-12',
      folder: 'Documents',
    },
    {
      id: 5,
      name: 'Code_Sample.zip',
      type: 'zip',
      size: '3.2 MB',
      modified: '2024-01-11',
      folder: 'Projects',
    },
  ]);

  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf':
        return <FileText className="w-8 h-8 text-red-500" />;
      case 'doc':
        return <FileText className="w-8 h-8 text-blue-500" />;
      case 'video':
        return <Video className="w-8 h-8 text-purple-500" />;
      case 'ppt':
        return <FileText className="w-8 h-8 text-orange-500" />;
      case 'zip':
        return <Archive className="w-8 h-8 text-gray-500" />;
      case 'image':
        return <ImageIcon className="w-8 h-8 text-green-500" />;
      case 'audio':
        return <Music className="w-8 h-8 text-pink-500" />;
      default:
        return <File className="w-8 h-8 text-gray-500" />;
    }
  };

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">File Manager</h2>
        <button
          onClick={() => setShowUploadModal(true)}
          className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-${roleColor}-600 to-${roleColor}-700 text-white rounded-lg hover:shadow-lg transition-all`}
        >
          <Upload className="w-5 h-5" />
          Upload Files
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search files..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setView('grid')}
            className={`p-2 rounded-lg transition-colors ${
              view === 'grid' ? `bg-${roleColor}-100 text-${roleColor}-600` : 'hover:bg-gray-100'
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setView('list')}
            className={`p-2 rounded-lg transition-colors ${
              view === 'list' ? `bg-${roleColor}-100 text-${roleColor}-600` : 'hover:bg-gray-100'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Folders */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Folders</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {folders.map((folder) => (
            <div
              key={folder.id}
              onClick={() => setSelectedFolder(folder.name)}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                selectedFolder === folder.name
                  ? `border-${roleColor}-500 bg-${roleColor}-50`
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Folder className={`w-8 h-8 text-${folder.color}-500`} />
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>
              <h4 className="font-semibold text-gray-900 truncate">{folder.name}</h4>
              <p className="text-sm text-gray-600">{folder.files} files</p>
            </div>
          ))}
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all flex flex-col items-center justify-center gap-2 text-gray-600">
            <FolderPlus className="w-8 h-8" />
            <span className="text-sm font-medium">New Folder</span>
          </button>
        </div>
      </div>

      {/* Files */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-700">Recent Files</h3>
          <span className="text-sm text-gray-600">{filteredFiles.length} items</span>
        </div>

        {view === 'grid' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredFiles.map((file) => (
              <div
                key={file.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-3">
                  {getFileIcon(file.type)}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreVertical className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                <h4 className="font-medium text-gray-900 truncate mb-1">{file.name}</h4>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>{file.size}</span>
                  <span>{file.modified}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Size</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Modified</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Folder</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredFiles.map((file) => (
                  <tr key={file.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        {getFileIcon(file.type)}
                        <span className="font-medium text-gray-900">{file.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{file.size}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{file.modified}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{file.folder}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                          <Eye className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                          <Download className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Upload Files</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
              <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-700 font-medium mb-2">Drop files here or click to browse</p>
              <p className="text-sm text-gray-500">Support for PDF, DOC, PPT, ZIP, Images, Videos</p>
              <input type="file" multiple className="hidden" />
            </div>
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => setShowUploadModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                className={`flex-1 px-4 py-2 bg-${roleColor}-600 text-white rounded-lg hover:bg-${roleColor}-700 transition-colors`}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileManager;
