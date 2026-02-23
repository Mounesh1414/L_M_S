import React from 'react';
import { Award, Download, Eye, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const CertificateTracking = () => {
  const certificates = [
    {
      id: 1,
      studentName: 'Rahul Kumar',
      studentId: 'CSE2026001',
      department: 'CSE',
      course: 'Full Stack Development',
      issueDate: '2026-01-20',
      certificateId: 'CERT-FS-2026-001',
      grade: 'A+',
      score: 95,
      status: 'issued',
      downloadCount: 3
    },
    {
      id: 2,
      studentName: 'Priya Sharma',
      studentId: 'CSE2026002',
      department: 'CSE',
      course: 'Data Structures & Algorithms',
      issueDate: '2026-01-22',
      certificateId: 'CERT-DS-2026-002',
      grade: 'A',
      score: 92,
      status: 'issued',
      downloadCount: 2
    },
    {
      id: 3,
      studentName: 'Amit Patel',
      studentId: 'IT2025045',
      department: 'IT',
      course: 'Web Development Bootcamp',
      issueDate: null,
      certificateId: null,
      grade: 'A',
      score: 88,
      status: 'pending',
      downloadCount: 0
    },
    {
      id: 4,
      studentName: 'Sneha Reddy',
      studentId: 'ECE2025032',
      department: 'ECE',
      course: 'VLSI Design Fundamentals',
      issueDate: '2026-01-18',
      certificateId: 'CERT-VLSI-2026-003',
      grade: 'B+',
      score: 82,
      status: 'issued',
      downloadCount: 1
    }
  ];

  const stats = [
    { label: 'Total Issued', value: '1,245', color: 'blue' },
    { label: 'This Month', value: '156', color: 'green' },
    { label: 'Pending', value: '42', color: 'orange' },
    { label: 'Verified', value: '1,203', color: 'purple' }
  ];

  const getStatusBadge = (status) => {
    if (status === 'issued') {
      return (
        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold flex items-center w-fit">
          <CheckCircle className="w-3 h-3 mr-1" />
          Issued
        </span>
      );
    }
    if (status === 'pending') {
      return (
        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold flex items-center w-fit">
          <Clock className="w-3 h-3 mr-1" />
          Pending
        </span>
      );
    }
    return null;
  };

  const getGradeColor = (grade) => {
    if (grade === 'A+' || grade === 'A') return 'text-green-600 bg-green-100';
    if (grade === 'B+' || grade === 'B') return 'text-blue-600 bg-blue-100';
    return 'text-orange-600 bg-orange-100';
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Certificate Tracking</h1>
          <p className="text-gray-600 mt-1">Manage and track course completion certificates</p>
        </div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center">
          <Download className="w-4 h-4 mr-2" />
          Bulk Export
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
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Student</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Department</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Course</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Certificate ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Grade</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Issue Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {certificates.map((cert) => (
                <tr key={cert.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <Award className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{cert.studentName}</p>
                        <p className="text-sm text-gray-600">{cert.studentId}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {cert.department}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{cert.course}</p>
                    <p className="text-sm text-gray-600">Score: {cert.score}%</p>
                  </td>
                  <td className="px-6 py-4">
                    {cert.certificateId ? (
                      <div>
                        <p className="font-mono text-sm text-gray-900">{cert.certificateId}</p>
                        {cert.downloadCount > 0 && (
                          <p className="text-xs text-gray-600 mt-1">{cert.downloadCount} downloads</p>
                        )}
                      </div>
                    ) : (
                      <span className="text-gray-400">Not generated</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${getGradeColor(cert.grade)}`}>
                      {cert.grade}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900">
                    {cert.issueDate || <span className="text-gray-400">-</span>}
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(cert.status)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      {cert.status === 'issued' ? (
                        <>
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                        </>
                      ) : (
                        <button className="px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-xs">
                          Generate
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

export default CertificateTracking;
