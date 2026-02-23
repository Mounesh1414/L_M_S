import React, { useState } from 'react';
import {
  Upload,
  Download,
  FileSpreadsheet,
  Users,
  CheckCircle,
  AlertCircle,
  X
} from 'lucide-react';

const BulkUpload = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    // Simulate upload
    setUploadStatus('processing');
    setTimeout(() => {
      setUploadStatus('success');
    }, 2000);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Bulk Upload</h1>
        <p className="text-gray-600 mt-1">Upload students data via Excel file</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Uploads</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">24</h3>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <Upload className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Students Added</p>
              <h3 className="text-2xl font-bold text-green-600 mt-1">1,245</h3>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <Users className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Last Upload</p>
              <h3 className="text-lg font-bold text-gray-900 mt-1">2 days ago</h3>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <FileSpreadsheet className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Download Template */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold mb-2">Download Excel Template</h3>
            <p className="text-blue-100 text-sm">
              Get the standardized template with required fields and format
            </p>
          </div>
          <button className="flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
            <Download className="w-5 h-5" />
            <span>Download Template</span>
          </button>
        </div>
      </div>

      {/* Upload Area */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Upload Student Data</h3>
        
        {!uploadedFile ? (
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-12 text-center ${
              dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            }`}
          >
            <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Drag and drop your Excel file here
            </h4>
            <p className="text-gray-600 mb-4">or</p>
            <label className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg cursor-pointer transition-colors">
              <FileSpreadsheet className="w-5 h-5" />
              <span className="font-semibold">Browse Files</span>
              <input
                type="file"
                accept=".xlsx,.xls,.csv"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            <p className="text-sm text-gray-500 mt-4">
              Supported formats: .xlsx, .xls, .csv (Max 5MB)
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* File Preview */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <FileSpreadsheet className="w-8 h-8 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">{uploadedFile.name}</p>
                  <p className="text-sm text-gray-600">
                    {(uploadedFile.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setUploadedFile(null);
                  setUploadStatus(null);
                }}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Upload Status */}
            {uploadStatus === 'processing' && (
              <div className="flex items-center space-x-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                <p className="text-blue-800 font-medium">Processing file...</p>
              </div>
            )}

            {uploadStatus === 'success' && (
              <div className="flex items-center space-x-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div className="flex-1">
                  <p className="text-green-800 font-medium">Upload Successful!</p>
                  <p className="text-sm text-green-700">120 students added to the system</p>
                </div>
              </div>
            )}

            {/* Upload Button */}
            {!uploadStatus && (
              <button
                onClick={handleUpload}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Upload and Process
              </button>
            )}
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Upload Instructions</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
              1
            </div>
            <div>
              <p className="font-semibold text-gray-900">Download the template</p>
              <p className="text-sm text-gray-600">Use our standardized Excel template</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
              2
            </div>
            <div>
              <p className="font-semibold text-gray-900">Fill in student details</p>
              <p className="text-sm text-gray-600">Name, Email, Phone, Department, Batch, etc.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
              3
            </div>
            <div>
              <p className="font-semibold text-gray-900">Upload the file</p>
              <p className="text-sm text-gray-600">Drag & drop or browse to upload</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
              4
            </div>
            <div>
              <p className="font-semibold text-gray-900">Review and confirm</p>
              <p className="text-sm text-gray-600">System will validate and add students</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Uploads */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">Recent Uploads</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {[
            { date: '2026-01-27', file: 'CSE_Students_Batch_A.xlsx', count: 60, status: 'success' },
            { date: '2026-01-25', file: 'MECH_Students_Batch_B.xlsx', count: 55, status: 'success' },
            { date: '2026-01-23', file: 'MBA_Students_2026.xlsx', count: 50, status: 'success' },
          ].map((upload, index) => (
            <div key={index} className="p-6 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center space-x-4">
                <FileSpreadsheet className="w-8 h-8 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">{upload.file}</p>
                  <p className="text-sm text-gray-600">{upload.count} students • {upload.date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                  Success
                </span>
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BulkUpload;
