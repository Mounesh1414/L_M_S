import React, { useState } from 'react';
import { Users, Search, Filter, Plus, Eye, Edit, Trash2, Mail, Phone, Award, BookOpen } from 'lucide-react';

const TrainerManagement = () => {
  const trainers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@college.com',
      phone: '+91 98765 11111',
      department: 'CSE',
      specialization: 'Data Science & AI',
      batches: 3,
      students: 185,
      courses: 4,
      experience: '12 years',
      rating: 4.8,
      status: 'active'
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      email: 'michael.chen@college.com',
      phone: '+91 98765 22222',
      department: 'IT',
      specialization: 'Web Development',
      batches: 2,
      students: 128,
      courses: 3,
      experience: '8 years',
      rating: 4.6,
      status: 'active'
    },
    {
      id: 3,
      name: 'Dr. Priya Sharma',
      email: 'priya.sharma@college.com',
      phone: '+91 98765 33333',
      department: 'ECE',
      specialization: 'VLSI Design',
      batches: 3,
      students: 156,
      courses: 5,
      experience: '15 years',
      rating: 4.9,
      status: 'active'
    },
    {
      id: 4,
      name: 'Prof. Rajesh Kumar',
      email: 'rajesh.kumar@college.com',
      phone: '+91 98765 44444',
      department: 'MECH',
      specialization: 'CAD/CAM',
      batches: 2,
      students: 98,
      courses: 3,
      experience: '10 years',
      rating: 4.5,
      status: 'active'
    }
  ];

  const stats = [
    { label: 'Total Trainers', value: '45', color: 'blue' },
    { label: 'Active Trainers', value: '42', color: 'green' },
    { label: 'Total Batches', value: '18', color: 'purple' },
    { label: 'Avg Rating', value: '4.7', color: 'orange' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Trainer Management</h1>
          <p className="text-gray-600 mt-1">Manage trainer assignments and performance</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add Trainer
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

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search trainers..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Trainer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Contact</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Specialization</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Assignment</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Experience</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Rating</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {trainers.map((trainer) => (
                <tr key={trainer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-semibold">
                          {trainer.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{trainer.name}</p>
                        <p className="text-sm text-gray-600">{trainer.department}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="w-4 h-4 mr-1" />
                        {trainer.email}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="w-4 h-4 mr-1" />
                        {trainer.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{trainer.specialization}</td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-900">{trainer.batches} Batches</p>
                      <p className="text-sm text-gray-600">{trainer.students} Students</p>
                      <p className="text-sm text-gray-600">{trainer.courses} Courses</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{trainer.experience}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span className="font-semibold text-gray-900">{trainer.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      {trainer.status}
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

export default TrainerManagement;
