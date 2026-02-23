import React, { useState } from 'react';
import { BarChart3, Download, Filter, TrendingUp, TrendingDown, Activity } from 'lucide-react';

const ReportsPerformance = () => {
  const [selectedReport, setSelectedReport] = useState('overview');

  const performanceData = [
    { college: 'MIT College', avgScore: 85.5, students: 450, trend: 'up', change: '+5.2%' },
    { college: 'COEP', avgScore: 82.3, students: 380, trend: 'up', change: '+3.8%' },
    { college: 'VIT', avgScore: 88.7, students: 520, trend: 'up', change: '+7.1%' },
    { college: 'PICT', avgScore: 79.4, students: 310, trend: 'down', change: '-2.3%' },
  ];

  const stats = [
    { label: 'Overall Average', value: '84.0%', icon: Activity, color: 'blue', trend: '+4.5%' },
    { label: 'Top Performer', value: 'VIT', icon: TrendingUp, color: 'green', trend: '88.7%' },
    { label: 'Total Students', value: '1,660', icon: Activity, color: 'indigo', trend: '+12%' },
    { label: 'Pass Rate', value: '92.3%', icon: TrendingUp, color: 'green', trend: '+3.2%' },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Reports / Performance Analysis</h1>
        <p className="text-gray-600">Comprehensive performance reports and analytics</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">{stat.label}</p>
              <div className={`bg-${stat.color}-100 p-2 rounded-lg`}>
                <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-green-600 mt-1">{stat.trend}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none">
            <option value="overview">Overview</option>
            <option value="college">By College</option>
            <option value="program">By Program</option>
            <option value="batch">By Batch</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none">
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
            <option value="custom">Custom Range</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5" />
            <span>More Filters</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors ml-auto">
            <Download className="w-5 h-5" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Performance Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">College Performance Overview</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">College</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Students</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {performanceData.map((data, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{data.college}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{data.students}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-lg font-semibold text-gray-900">{data.avgScore}%</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          data.avgScore >= 85 ? 'bg-green-500' : data.avgScore >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${data.avgScore}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`flex items-center space-x-1 ${data.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {data.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      <span className="font-medium">{data.change}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-indigo-600 hover:text-indigo-900 font-medium text-sm">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Trend</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center text-gray-500">
              <BarChart3 className="w-12 h-12 mx-auto mb-2" />
              <p>Chart visualization will be displayed here</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Score Distribution</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center text-gray-500">
              <BarChart3 className="w-12 h-12 mx-auto mb-2" />
              <p>Chart visualization will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPerformance;
