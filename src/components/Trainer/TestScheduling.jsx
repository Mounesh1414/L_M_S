import React, { useState } from 'react';
import { Calendar, Plus, Clock, Users, MapPin, Eye, Edit, Trash2, Video } from 'lucide-react';

const TestScheduling = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const tests = [
    {
      id: 1,
      title: 'Data Structures - Mid Term Exam',
      course: 'Data Structures & Algorithms',
      batch: 'CSE-2026',
      date: '2026-02-15',
      time: '10:00 AM',
      duration: 90,
      totalMarks: 100,
      students: 65,
      venue: 'Lab 301',
      mode: 'offline',
      status: 'scheduled'
    },
    {
      id: 2,
      title: 'Arrays & Linked Lists Quiz',
      course: 'Data Structures & Algorithms',
      batch: 'CSE-2026',
      date: '2026-02-08',
      time: '02:00 PM',
      duration: 30,
      totalMarks: 30,
      students: 65,
      venue: 'Online',
      mode: 'online',
      status: 'scheduled'
    },
    {
      id: 3,
      title: 'React Fundamentals Test',
      course: 'Web Development',
      batch: 'IT-2025',
      date: '2026-02-10',
      time: '11:00 AM',
      duration: 60,
      totalMarks: 50,
      students: 52,
      venue: 'Online',
      mode: 'online',
      status: 'scheduled'
    },
    {
      id: 4,
      title: 'JavaScript ES6 Quiz',
      course: 'Web Development',
      batch: 'IT-2025',
      date: '2026-01-20',
      time: '03:00 PM',
      duration: 45,
      totalMarks: 40,
      students: 52,
      venue: 'Lab 205',
      mode: 'offline',
      status: 'completed'
    }
  ];

  const stats = [
    { label: 'Total Tests', value: '32', color: 'blue' },
    { label: 'Upcoming', value: '8', color: 'orange' },
    { label: 'Completed', value: '24', color: 'green' },
    { label: 'Total Students', value: '185', color: 'purple' }
  ];

  const filteredTests = tests.filter(test => {
    if (activeTab === 'upcoming') return test.status === 'scheduled';
    if (activeTab === 'completed') return test.status === 'completed';
    return true;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Test Scheduling</h1>
          <p className="text-gray-600 mt-1">Schedule and manage test sessions</p>
        </div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Schedule Test
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
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'upcoming'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Upcoming Tests
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'completed'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Completed
            </button>
          </nav>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Test Details</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Batch</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Schedule</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Duration</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Students</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Venue</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Mode</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTests.map((test) => (
                <tr key={test.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <Calendar className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{test.title}</p>
                        <p className="text-sm text-gray-600">{test.course}</p>
                        <p className="text-xs text-gray-500 mt-1">{test.totalMarks} marks</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {test.batch}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{test.date}</p>
                    <p className="text-sm text-gray-600">{test.time}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1 text-gray-900">
                      <Clock className="w-4 h-4" />
                      <span>{test.duration} min</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1 text-gray-900">
                      <Users className="w-4 h-4" />
                      <span>{test.students}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1 text-gray-900">
                      <MapPin className="w-4 h-4" />
                      <span>{test.venue}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      test.mode === 'online' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {test.mode}
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

export default TestScheduling;
