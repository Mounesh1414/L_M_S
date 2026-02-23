import React, { useState } from 'react';
import {
  Headphones,
  CheckCircle,
  Clock,
  AlertTriangle,
  MessageSquare,
  Filter,
  Search,
  Eye,
  X
} from 'lucide-react';

const TicketManagement = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const tickets = [
    {
      id: 'TKT-1245',
      user: 'Alice Johnson',
      email: 'alice@example.com',
      issue: 'Cannot access course videos',
      description: 'Videos are not loading in React Fundamentals course',
      priority: 'high',
      status: 'open',
      category: 'Technical',
      createdAt: '2026-01-29 09:15 AM',
      assignedTo: 'John Doe'
    },
    {
      id: 'TKT-1244',
      user: 'Bob Smith',
      email: 'bob@example.com',
      issue: 'Login credentials not working',
      description: 'Unable to login with registered credentials',
      priority: 'urgent',
      status: 'in-progress',
      category: 'Account',
      createdAt: '2026-01-29 08:30 AM',
      assignedTo: 'Jane Smith'
    },
    {
      id: 'TKT-1243',
      user: 'Charlie Brown',
      email: 'charlie@example.com',
      issue: 'Assignment submission error',
      description: 'Getting error 500 when submitting assignment',
      priority: 'medium',
      status: 'open',
      category: 'Technical',
      createdAt: '2026-01-29 07:45 AM',
      assignedTo: 'Unassigned'
    },
    {
      id: 'TKT-1242',
      user: 'Diana Prince',
      email: 'diana@example.com',
      issue: 'Certificate not generated',
      description: 'Completed course but certificate not available',
      priority: 'low',
      status: 'resolved',
      category: 'Certificate',
      createdAt: '2026-01-28 05:20 PM',
      assignedTo: 'John Doe'
    },
    {
      id: 'TKT-1241',
      user: 'Eve Wilson',
      email: 'eve@example.com',
      issue: 'Payment not reflected',
      description: 'Made payment yesterday but still showing pending',
      priority: 'urgent',
      status: 'in-progress',
      category: 'Payment',
      createdAt: '2026-01-28 03:10 PM',
      assignedTo: 'Jane Smith'
    },
  ];

  const filteredTickets = tickets.filter(ticket => {
    if (statusFilter !== 'all' && ticket.status !== statusFilter) return false;
    if (priorityFilter !== 'all' && ticket.priority !== priorityFilter) return false;
    return true;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Ticket Management</h1>
          <p className="text-gray-600 mt-1">Track and resolve support tickets</p>
        </div>
        <button className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <Headphones className="w-5 h-5" />
          <span className="font-semibold">Create New Ticket</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Tickets</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">156</h3>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <Headphones className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Open</p>
              <h3 className="text-2xl font-bold text-orange-600 mt-1">24</h3>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">In Progress</p>
              <h3 className="text-2xl font-bold text-blue-600 mt-1">12</h3>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <MessageSquare className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Resolved Today</p>
              <h3 className="text-2xl font-bold text-green-600 mt-1">18</h3>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tickets..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
          >
            <option value="all">All Status</option>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
          >
            <option value="all">All Priority</option>
            <option value="urgent">Urgent</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>

      {/* Tickets Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Ticket ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  User
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Issue
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Priority
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Assigned To
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">{ticket.id}</td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{ticket.user}</p>
                      <p className="text-sm text-gray-500">{ticket.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{ticket.issue}</p>
                    <p className="text-sm text-gray-500">{ticket.createdAt}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                      {ticket.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        ticket.priority === 'urgent'
                          ? 'bg-red-100 text-red-700'
                          : ticket.priority === 'high'
                          ? 'bg-orange-100 text-orange-700'
                          : ticket.priority === 'medium'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {ticket.priority.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        ticket.status === 'resolved'
                          ? 'bg-green-100 text-green-700'
                          : ticket.status === 'in-progress'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{ticket.assignedTo}</td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-2 bg-teal-50 text-teal-600 rounded-lg hover:bg-teal-100 transition-colors text-sm font-medium">
                      <Eye className="w-4 h-4" />
                    </button>
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

export default TicketManagement;
