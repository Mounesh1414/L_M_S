import React, { useState } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  BookOpen,
  UserCheck,
  ClipboardCheck,
  BarChart3,
  Settings,
  Shield,
  Bell,
  Award,
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  LogOut,
  User,
  HelpCircle,
} from 'lucide-react';

const SuperAdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const isDashboardPage =
    location.pathname === '/super-admin/dashboard' || location.pathname.startsWith('/super-admin/dashboard/');

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/super-admin/dashboard' },
    { icon: Users, label: 'User Management', path: '/super-admin/management' },
    { icon: BookOpen, label: 'Our Programs', path: '/super-admin/programs' },
    { icon: UserCheck, label: 'Attendance Monitoring', path: '/super-admin/attendance' },
    { icon: ClipboardCheck, label: 'Assessment', path: '/super-admin/assessment' },
    { icon: BarChart3, label: 'Reports', path: '/super-admin/reports' },
    { icon: Award, label: 'Certifications', path: '/super-admin/certifications' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-72' : 'w-20'
        } fixed inset-y-4 left-4 z-50 bg-white border border-slate-200 rounded-3xl shadow-xl transition-all duration-300 ease-in-out`}
      >
        {/* Logo */}
        <div className={`flex items-center px-6 py-5 border-b border-slate-200 ${sidebarOpen ? 'justify-between' : 'justify-center'}`}>
          {sidebarOpen ? (
            <div className="flex items-center space-x-3">
              <div className="bg-red-500/10 p-2 rounded-xl">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-slate-900">Smart LMS</h1>
                <p className="text-xs text-slate-500">Super Admin</p>
              </div>
            </div>
          ) : (
            <div className="bg-red-500/10 p-2 rounded-xl">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-slate-500 hover:text-slate-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-3 py-6 space-y-2 overflow-y-auto scrollbar-hide" style={{ maxHeight: 'calc(100vh - 180px)' }}>
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center ${sidebarOpen ? 'space-x-3 px-4 py-3' : 'justify-center w-12 h-12 mx-auto'} rounded-xl transition-all duration-200 ${
                isActive(item.path)
                  ? 'bg-red-500 text-white shadow-md'
                  : 'text-slate-600 hover:bg-red-50 hover:text-red-700'
              }`}
              title={!sidebarOpen ? item.label : ''}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setSidebarOpen((previous) => !previous)}
          className="absolute -right-10 top-1/2 -translate-y-1/2 z-30 w-10 h-16 rounded-full border border-slate-200 bg-white/95 text-slate-400 hover:text-slate-600 shadow-lg backdrop-blur-sm flex items-center justify-center"
          aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {sidebarOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
        </button>

        {/* User Info at Bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 cursor-pointer"
          onClick={() => navigate('/super-admin/profile')}
        >
          {sidebarOpen ? (
            <div className="flex items-center space-x-3 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="bg-red-500 text-white p-2 rounded-full">
                <User className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900">Super Admin</p>
                <p className="text-xs text-slate-500">admin@smartlms.com</p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="bg-red-500 text-white p-2 rounded-full">
                <User className="w-5 h-5" />
              </div>
            </div>
          )}
        </div>
       
      </aside>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${
        sidebarOpen ? 'ml-80' : 'ml-24'
      }`}>
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-slate-50">
          {isDashboardPage && (
            <div className="bg-white border border-slate-200 shadow-sm rounded-2xl mx-6 mt-4">
              <div className="flex items-center justify-between px-6 py-4">
                {/* Left: Search */}
                <div className="flex items-center space-x-4 flex-1">
                {/* Search Bar */}
                <div className="hidden md:flex items-center flex-1 max-w-md">
                  <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search colleges, admins, reports..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Right: Notifications & Profile */}
              <div className="flex items-center space-x-4">
                {/* Notification Bell */}
                <div className="relative group">
                  <button
                    onClick={() => navigate('/super-admin/announcements')}
                    className="relative p-2 text-slate-600 hover:text-red-600 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <Bell className="w-5 h-5" />
                  </button>
                  <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                    Announcements
                  </span>
                </div>

                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setProfileDropdown(!profileDropdown)}
                    className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-semibold text-gray-900">Super Admin</p>
                      <p className="text-xs text-gray-500">Super Administrator</p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  </button>

                  {/* Dropdown Menu */}
                  {profileDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                      <button onClick={() => {
                        navigate('/super-admin/profile');
                        setProfileDropdown(false);
                      }} className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </button>
                      <button onClick={() => {
                        navigate('/super-admin/settings');
                        setProfileDropdown(false);
                      }} className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                      </button>
                      <button onClick={() => {
                        navigate('/super-admin/certifications');
                        setProfileDropdown(false);
                      }} className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                        <Award className="w-4 h-4" />
                        <span>Certificates</span>
                      </button>
                      <button onClick={() => {
                        navigate('/super-admin/system-settings');
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
          )}

          <div className="px-6 pb-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SuperAdminLayout;
