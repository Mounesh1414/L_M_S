import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Headphones,
  Tags,
  Activity,
  FileText,
  BookOpen,
  Bell,
  ThumbsUp,
  AlertTriangle,
  X,
  Search,
  LogOut,
  Settings,
  User,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';

const SupportLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isDashboardPage =
    location.pathname === '/support' ||
    location.pathname === '/support/' ||
    location.pathname === '/support/dashboard' ||
    location.pathname.startsWith('/support/dashboard/');

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/support' },
    { icon: Headphones, label: 'Ticket Management', path: '/support/tickets' },
    { icon: Activity, label: 'Ticket Status', path: '/support/ticket-status' },
    { icon: AlertTriangle, label: 'Escalation', path: '/support/escalation' },
    { icon: Tags, label: 'Issue Categorization', path: '/support/issue-categorization' },
    { icon: FileText, label: 'Resolution Logs', path: '/support/resolution-logs' },
    { icon: Bell, label: 'System Alerts', path: '/support/system-alerts' },
    { icon: BookOpen, label: 'Knowledge Base', path: '/support/knowledge-base' },
    { icon: ThumbsUp, label: 'Feedback', path: '/support/feedback' },
    { icon: Settings, label: 'Settings', path: '/support/settings' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } fixed inset-y-4 left-4 z-50 bg-white border border-slate-200 rounded-3xl shadow-xl transition-all duration-300 ease-in-out`}
      >
        {/* Logo */}
        <div className={`flex items-center px-6 py-5 border-b border-slate-200 ${isSidebarOpen ? 'justify-between' : 'justify-center'}`}>
          {isSidebarOpen ? (
            <div className="flex items-center space-x-3">
              <div className="bg-teal-500/10 p-2 rounded-xl">
                <Headphones className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-slate-900">Smart LMS</h1>
                <p className="text-xs text-slate-500">Support Portal</p>
              </div>
            </div>
          ) : (
            <div className="bg-teal-500/10 p-2 rounded-xl">
              <Headphones className="w-6 h-6 text-teal-600" />
            </div>
          )}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden text-slate-500 hover:text-slate-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-3 py-6 space-y-2 overflow-y-auto max-h-[calc(100vh-180px)] scrollbar-hide">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`w-full flex items-center ${
                  isSidebarOpen ? 'space-x-3 px-4 py-3' : 'justify-center w-12 h-12 mx-auto'
                } rounded-xl transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-teal-500 text-white shadow-md'
                    : 'text-slate-600 hover:bg-teal-50 hover:text-teal-700'
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {isSidebarOpen && <span className="font-medium">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setIsSidebarOpen((previous) => !previous)}
          className="absolute -right-10 top-1/2 -translate-y-1/2 z-30 w-10 h-16 rounded-full border border-slate-200 bg-white/95 text-slate-400 hover:text-slate-600 shadow-lg backdrop-blur-sm flex items-center justify-center"
          aria-label={isSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {isSidebarOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
        </button>

        {/* User Info at Bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 cursor-pointer"
          onClick={() => navigate('/support/profile')}
        >
          {isSidebarOpen ? (
            <div className="flex items-center space-x-3 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="bg-teal-500 text-white p-2 rounded-full">
                <User className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900">Support Admin</p>
                <p className="text-xs text-slate-500">support@lms.com</p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="bg-teal-500 text-white p-2 rounded-full">
                <User className="w-5 h-5" />
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${
        isSidebarOpen ? 'ml-72' : 'ml-24'
      }`}>
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-slate-50">
          {isDashboardPage && (
            <>
              {/* Header */}
              <div className="bg-white shadow-sm border border-slate-200 rounded-2xl mx-6 mt-4 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex-1 max-w-2xl mx-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search tickets, users, issues..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Notification Bell */}
                  <div className="relative group">
                    <button
                      onClick={() => navigate('/support/system-alerts')}
                      className="relative p-2 text-slate-600 hover:text-teal-600 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <Bell className="w-5 h-5" />
                    </button>
                    <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                      System Alerts
                    </span>
                  </div>

                  {/* Profile Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setProfileDropdown(!profileDropdown)}
                      className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div className="hidden md:block text-left">
                        <p className="text-sm font-semibold text-gray-900">Support Admin</p>
                        <p className="text-xs text-gray-500">Support Team</p>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-600" />
                    </button>

                    {/* Dropdown Menu */}
                    {profileDropdown && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                        <button onClick={() => {
                          navigate('/support/profile');
                          setProfileDropdown(false);
                        }} className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>Profile</span>
                        </button>
                        <button onClick={() => {
                          navigate('/support/settings');
                          setProfileDropdown(false);
                        }} className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                          <Settings className="w-4 h-4" />
                          <span>Settings</span>
                        </button>
                        <button onClick={() => {
                          navigate('/support/tickets');
                          setProfileDropdown(false);
                        }} className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                          <HelpCircle className="w-4 h-4" />
                          <span>Support / Help</span>
                        </button>
                        <hr className="my-2" />
                        <button
                          onClick={() => navigate('/login')}
                          className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Logout</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

              {/* Curved Section */}
              <div className="bg-gradient-to-b from-cyan-50 to-white border-b border-cyan-100 rounded-b-3xl pt-8 pb-10 px-6 mx-6 mb-6 relative z-20 shadow-sm">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl font-bold text-slate-900">Support Center</h2>
                  <p className="text-slate-600 mt-1">Manage tickets, issues, and user concerns</p>
                </div>
              </div>
            </>
          )}

          <div className="px-6 pb-6">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default SupportLayout;
