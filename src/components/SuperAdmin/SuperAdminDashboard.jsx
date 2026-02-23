import React from 'react';
import {
  Building2,
  Users,
  GraduationCap,
  BookOpen,
  TrendingUp,
  TrendingDown,
  Activity,
  Clock
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const SuperAdminDashboard = () => {
  // Mock data
  const stats = [
    {
      title: 'Total Colleges',
      value: '24',
      change: '+12%',
      trend: 'up',
      icon: Building2,
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Total Students',
      value: '12,450',
      change: '+18%',
      trend: 'up',
      icon: GraduationCap,
      color: 'bg-green-500',
      lightColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Total Trainers',
      value: '856',
      change: '+8%',
      trend: 'up',
      icon: Users,
      color: 'bg-purple-500',
      lightColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      title: 'Active Batches',
      value: '142',
      change: '-3%',
      trend: 'down',
      icon: BookOpen,
      color: 'bg-orange-500',
      lightColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
  ];

  const platformUsageData = [
    { month: 'Jan', users: 4000, courses: 2400, colleges: 18 },
    { month: 'Feb', users: 5200, courses: 2800, colleges: 19 },
    { month: 'Mar', users: 6800, courses: 3200, colleges: 20 },
    { month: 'Apr', users: 8200, courses: 3600, colleges: 21 },
    { month: 'May', users: 9600, courses: 4100, colleges: 22 },
    { month: 'Jun', users: 12450, courses: 4800, colleges: 24 },
  ];

  const collegeDistributionData = [
    { name: 'Engineering', value: 35, color: '#3b82f6' },
    { name: 'Management', value: 25, color: '#8b5cf6' },
    { name: 'Medical', value: 20, color: '#10b981' },
    { name: 'Arts & Science', value: 20, color: '#f59e0b' },
  ];

  const recentActivities = [
    {
      college: 'MIT Engineering College',
      action: 'Added 120 new students',
      time: '2 hours ago',
      type: 'success'
    },
    {
      college: 'Xavier Business School',
      action: 'Created 5 new batches',
      time: '4 hours ago',
      type: 'info'
    },
    {
      college: 'St. Mary\'s Medical College',
      action: 'Updated course curriculum',
      time: '6 hours ago',
      type: 'warning'
    },
    {
      college: 'Global Arts & Science',
      action: 'Completed semester assessment',
      time: '8 hours ago',
      type: 'success'
    },
  ];

  const topPerformingColleges = [
    { name: 'MIT Engineering College', students: 1850, growth: 25 },
    { name: 'Xavier Business School', students: 1620, growth: 22 },
    { name: 'St. Mary\'s Medical College', students: 1480, growth: 18 },
    { name: 'Global Arts & Science', students: 1320, growth: 15 },
    { name: 'Tech Institute', students: 1180, growth: 12 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600 mt-1">Welcome back, Super Admin</p>
        </div>
        <div className="flex items-center space-x-3">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none">
            <option>Last 30 Days</option>
            <option>Last 60 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                <div className="flex items-center mt-2">
                  {stat.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
                  )}
                  <span
                    className={`text-sm font-semibold ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">vs last month</span>
                </div>
              </div>
              <div className={`${stat.lightColor} p-4 rounded-xl`}>
                <stat.icon className={`w-8 h-8 ${stat.textColor}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Platform Usage Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Platform Usage Analytics</h3>
              <p className="text-sm text-gray-600">Monthly growth trends</p>
            </div>
            <Activity className="w-6 h-6 text-indigo-600" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={platformUsageData}>
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorCourses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="users"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorUsers)"
                name="Students"
              />
              <Area
                type="monotone"
                dataKey="courses"
                stroke="#8b5cf6"
                fillOpacity={1}
                fill="url(#colorCourses)"
                name="Courses"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* College Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">College Distribution</h3>
              <p className="text-sm text-gray-600">By institution type</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={collegeDistributionData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {collegeDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {collegeDistributionData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-700">{item.name}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Colleges */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Top Performing Colleges</h3>
          <div className="space-y-4">
            {topPerformingColleges.map((college, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-indigo-100 text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{college.name}</p>
                    <p className="text-sm text-gray-600">{college.students} students</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span className="font-semibold">{college.growth}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Recent Activities</h3>
            <Clock className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'success'
                      ? 'bg-green-500'
                      : activity.type === 'warning'
                      ? 'bg-yellow-500'
                      : 'bg-blue-500'
                  }`}
                />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{activity.college}</p>
                  <p className="text-sm text-gray-600">{activity.action}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
