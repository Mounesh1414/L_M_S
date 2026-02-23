import React from 'react';
import { BarChart, Download, TrendingUp, Users, Award, FileText } from 'lucide-react';
import { LineChart, Line, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ReportsAnalytics = () => {
  const performanceData = [
    { month: 'Aug', avgScore: 72 },
    { month: 'Sep', avgScore: 75 },
    { month: 'Oct', avgScore: 78 },
    { month: 'Nov', avgScore: 80 },
    { month: 'Dec', avgScore: 82 },
    { month: 'Jan', avgScore: 85 }
  ];

  const batchComparison = [
    { batch: 'CSE-2026', progress: 78, attendance: 92, avgScore: 85 },
    { batch: 'IT-2025', progress: 72, attendance: 88, avgScore: 80 },
    { batch: 'ECE-2025', progress: 75, attendance: 90, avgScore: 82 }
  ];

  const stats = [
    { label: 'Total Students', value: '185', color: 'blue', icon: Users },
    { label: 'Avg Performance', value: '82%', color: 'green', icon: TrendingUp },
    { label: 'Course Completion', value: '75%', color: 'purple', icon: Award },
    { label: 'Attendance Rate', value: '90%', color: 'orange', icon: FileText }
  ];

  const reports = [
    {
      id: 1,
      title: 'Monthly Performance Report',
      description: 'Detailed analysis of student performance for January 2026',
      date: '2026-01-31',
      format: 'PDF',
      size: '2.4 MB'
    },
    {
      id: 2,
      title: 'Attendance Summary',
      description: 'Batch-wise attendance statistics and trends',
      date: '2026-01-31',
      format: 'Excel',
      size: '1.2 MB'
    },
    {
      id: 3,
      title: 'Assessment Analytics',
      description: 'Quiz and exam performance breakdown',
      date: '2026-01-30',
      format: 'PDF',
      size: '3.1 MB'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-1">Insights and performance analytics</p>
        </div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center">
          <Download className="w-4 h-4 mr-2" />
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <Icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Performance Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="avgScore" stroke="#9333ea" strokeWidth={2} name="Avg Score %" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Batch Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RechartsBarChart data={batchComparison}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="batch" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="progress" fill="#9333ea" name="Progress %" />
              <Bar dataKey="attendance" fill="#10b981" name="Attendance %" />
              <Bar dataKey="avgScore" fill="#f59e0b" name="Avg Score %" />
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">Generated Reports</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {reports.map((report) => (
            <div key={report.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{report.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-xs text-gray-500">Generated: {report.date}</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                        {report.format}
                      </span>
                      <span className="text-xs text-gray-500">{report.size}</span>
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;
