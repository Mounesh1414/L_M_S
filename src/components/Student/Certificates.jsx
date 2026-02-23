import React from 'react';
import { Download, Award, Calendar, CheckCircle, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      courseName: 'Machine Learning Basics',
      instructor: 'Dr. James Anderson',
      issueDate: '2025-12-20',
      certificateId: 'CERT-ML-2025-001',
      score: 92,
      grade: 'A+',
      status: 'issued',
      validUntil: 'Lifetime'
    },
    {
      id: 2,
      courseName: 'UI/UX Design Principles',
      instructor: 'Lisa Martinez',
      issueDate: '2025-11-15',
      certificateId: 'CERT-UXUI-2025-002',
      score: 90,
      grade: 'A+',
      status: 'issued',
      validUntil: 'Lifetime'
    }
  ];

  const inProgressCourses = [
    {
      id: 1,
      courseName: 'Web Development Fundamentals',
      progress: 65,
      requiredScore: 70,
      estimatedCompletion: '2026-03-15'
    },
    {
      id: 2,
      courseName: 'Data Science with Python',
      progress: 45,
      requiredScore: 70,
      estimatedCompletion: '2026-04-20'
    }
  ];

  return (
    <div className="p-4 lg:p-8 pb-24 lg:pb-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">My Certificates</h1>
        <p className="text-base lg:text-lg text-gray-600">View and download your earned certificates</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Award className="w-12 h-12 opacity-80" />
            <span className="text-4xl font-bold">{certificates.length}</span>
          </div>
          <p className="text-lg font-semibold">Certificates Earned</p>
          <p className="text-sm opacity-90 mt-1">Congratulations! 🎉</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <CheckCircle className="w-12 h-12 opacity-80" />
            <span className="text-4xl font-bold">{inProgressCourses.length}</span>
          </div>
          <p className="text-lg font-semibold">In Progress</p>
          <p className="text-sm opacity-90 mt-1">Keep learning!</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="w-12 h-12 opacity-80" />
            <span className="text-4xl font-bold">95%</span>
          </div>
          <p className="text-lg font-semibold">Average Score</p>
          <p className="text-sm opacity-90 mt-1">Excellent performance!</p>
        </div>
      </div>

      {/* Earned Certificates */}
      <div className="mb-8">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Earned Certificates</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
            >
              {/* Certificate Preview */}
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-32 translate-y-32"></div>
                </div>
                <div className="relative text-center text-white">
                  <Award className="w-16 h-16 mx-auto mb-4 opacity-90" />
                  <h3 className="text-xl lg:text-2xl font-bold mb-2">Certificate of Completion</h3>
                  <p className="text-sm opacity-90 mb-4">{cert.courseName}</p>
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3 inline-block">
                    <p className="text-xs opacity-90 mb-1">Certificate ID</p>
                    <p className="font-mono font-semibold text-sm">{cert.certificateId}</p>
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-5 lg:p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Instructor</p>
                    <p className="text-sm font-semibold text-gray-900">{cert.instructor}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Issue Date</p>
                    <p className="text-sm font-semibold text-gray-900">{cert.issueDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Final Score</p>
                    <p className="text-sm font-semibold text-green-600">{cert.score}% ({cert.grade})</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Valid Until</p>
                    <p className="text-sm font-semibold text-gray-900">{cert.validUntil}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200">
                  <button className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center text-sm lg:text-base">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                  <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all flex items-center justify-center text-sm lg:text-base">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* In Progress Courses */}
      <div>
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Certificate in Progress</h2>
        <div className="space-y-4">
          {inProgressCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 lg:p-6 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{course.courseName}</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Progress</p>
                      <p className="text-sm font-semibold text-blue-600">{course.progress}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Required Score</p>
                      <p className="text-sm font-semibold text-gray-900">{course.requiredScore}%</p>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                      <p className="text-xs text-gray-500 mb-1">Est. Completion</p>
                      <p className="text-sm font-semibold text-gray-900">{course.estimatedCompletion}</p>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-2">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Complete the course and score {course.requiredScore}% or higher to earn your certificate
                  </p>
                </div>

                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center text-base whitespace-nowrap">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Continue Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
