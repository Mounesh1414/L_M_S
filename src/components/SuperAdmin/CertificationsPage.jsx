import React, { useState } from 'react';
import { Award, Plus, Search, Download, Eye, CheckCircle } from 'lucide-react';

const CertificationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const certifications = [
    {
      id: 1,
      studentName: 'Sneha Patel',
      program: 'Full Stack Web Development',
      college: 'MIT College',
      issueDate: '2026-01-15',
      certificateId: 'CERT-2026-001',
      grade: 'A+',
      status: 'Issued'
    },
    {
      id: 2,
      studentName: 'Rohan Mehta',
      program: 'Data Science & Analytics',
      college: 'COEP',
      issueDate: '2026-01-18',
      certificateId: 'CERT-2026-002',
      grade: 'A',
      status: 'Issued'
    },
    {
      id: 3,
      studentName: 'Ananya Singh',
      program: 'Digital Marketing',
      college: 'VIT',
      issueDate: '2026-01-20',
      certificateId: 'CERT-2026-003',
      grade: 'A+',
      status: 'Issued'
    },
    {
      id: 4,
      studentName: 'Vikram Sharma',
      program: 'Cloud Computing & DevOps',
      college: 'PICT',
      issueDate: null,
      certificateId: 'CERT-2026-004',
      grade: 'B+',
      status: 'Pending'
    },
  ];

  const stats = [
    { label: 'Total Certificates', value: '1,245', color: 'blue' },
    { label: 'Issued This Month', value: '85', color: 'green' },
    { label: 'Pending', value: '12', color: 'yellow' },
    { label: 'This Year', value: '450', color: 'indigo' },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Certifications</h1>
        <p className="text-gray-600">Manage and issue course completion certificates</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Search and Actions */}
      <div className="mb-6 flex justify-between items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search certificates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
          />
        </div>
        <div className="flex space-x-3 ml-4">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-5 h-5" />
            <span>Bulk Export</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            <Plus className="w-5 h-5" />
            <span>Issue Certificate</span>
          </button>
        </div>
      </div>

      {/* Certifications Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certificate ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">College</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {certifications.map((cert) => (
                <tr key={cert.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-600">{cert.certificateId}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{cert.studentName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{cert.program}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{cert.college}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      cert.grade.startsWith('A') ? 'bg-green-100 text-green-800' : 
                      cert.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {cert.grade}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {cert.issueDate || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      cert.status === 'Issued' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {cert.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex space-x-2">
                      {cert.status === 'Issued' ? (
                        <>
                          <button className="text-blue-600 hover:text-blue-900">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-green-600 hover:text-green-900">
                            <Download className="w-4 h-4" />
                          </button>
                        </>
                      ) : (
                        <button className="text-indigo-600 hover:text-indigo-900">
                          <CheckCircle className="w-4 h-4" />
                        </button>
                      )}
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

export default CertificationsPage;
