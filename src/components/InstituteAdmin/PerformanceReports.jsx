import React from 'react';
import { BarChart as BarChartIcon, Download, TrendingUp, Users, Award } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const PerformanceReports = () => {
  const departmentPerformance = [
    { department: 'CSE', avgScore: 85, students: 685, passRate: 92 },
    { department: 'ECE', avgScore: 82, students: 542, passRate: 89 },
    { department: 'IT', avgScore: 80, students: 498, passRate: 87 },
    { department: 'MECH', avgScore: 78, students: 425, passRate: 84 },
    { department: 'CIVIL', avgScore: 75, students: 380, passRate: 82 }
  ];

  const monthlyTrend = [
    { month: 'Aug', avgScore: 72 },
    { month: 'Sep', avgScore: 75 },
    { month: 'Oct', avgScore: 77 },
    { month: 'Nov', avgScore: 79 },
    { month: 'Dec', avgScore: 81 },
    { month: 'Jan', avgScore: 83 }
  ];

  const performanceDistribution = [
    { name: 'Excellent (90-100%)', value: 580, color: '#10b981' },
    { name: 'Good (75-89%)', value: 1245, color: '#3b82f6' },
    { name: 'Average (60-74%)', value: 485, color: '#f59e0b' },
    { name: 'Poor (<60%)', value: 140, color: '#ef4444' }
  ];

  const stats = [
    { label: 'Avg Institute Score', value: '82%', color: 'blue', icon: Award },
    { label: 'Total Students', value: '2,450', color: 'green', icon: Users },
    { label: 'Pass Rate', value: '88%', color: 'purple', icon: TrendingUp },
    { label: 'Top Performers', value: '580', color: 'orange', icon: Award }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Performance & Reports</h1>
          <p className="text-gray-600 mt-1">Comprehensive academic performance analytics</p>
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
          <h3 className="text-lg font-bold text-gray-900 mb-4">Department-wise Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={departmentPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="department" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="avgScore" fill="#9333ea" name="Avg Score %" />
              <Bar dataKey="passRate" fill="#10b981" name="Pass Rate %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Performance Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="avgScore" stroke="#9333ea" strokeWidth={2} name="Avg Score %" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Performance Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={performanceDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {performanceDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {performanceDistribution.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-gray-700">{item.name}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{item.value} students</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Top Performing Departments</h3>
          <div className="space-y-4">
            {departmentPerformance.map((dept, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">{dept.department} Department</h4>
                    <p className="text-sm text-gray-600">{dept.students} students</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-purple-600">{dept.avgScore}%</p>
                    <p className="text-xs text-gray-600">Avg Score</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-1 mr-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: `${dept.passRate}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-green-600">{dept.passRate}% Pass</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceReports;
