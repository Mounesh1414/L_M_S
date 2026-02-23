import React, { useState } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import {
  Home,
  BookOpen,
  ClipboardList,
  FileText,
  CheckCircle,
  Calendar,
  Award,
  HelpCircle,
  Bell,
  User,
  LogOut,
  Settings,
  ChevronDown,
} from 'lucide-react';

const StudentLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [profileDropdown, setProfileDropdown] = useState(false);
  const isDashboardPage =
    location.pathname === '/student/dashboard' || location.pathname.startsWith('/student/dashboard/');

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/student/dashboard' },
    { icon: BookOpen, label: 'My Courses', path: '/student/courses' },
    { icon: ClipboardList, label: 'Tests & Assessments', path: '/student/tests' },
    { icon: FileText, label: 'Assignments', path: '/student/assignments' },
    { icon: CheckCircle, label: 'Results', path: '/student/results' },
    { icon: Calendar, label: 'Attendance', path: '/student/attendance' },
  ];

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <div className="student-theme min-h-screen bg-slate-100 dark:bg-slate-950">
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm rounded-2xl mx-6 mt-4 sticky top-4 z-30">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center px-6 py-4 gap-2 sm:flex sm:items-center sm:justify-between sm:gap-4">
              <div className="min-w-0 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:gap-2">
                <nav className="min-w-0 flex items-center gap-2 overflow-x-auto scrollbar-hide sm:flex-1 sm:min-w-0 md:overflow-visible md:gap-3">
                  {menuItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => navigate(item.path)}
                      className={`flex items-center gap-2.5 whitespace-nowrap px-3.5 py-2.5 rounded-xl transition-colors md:flex-1 md:justify-center md:px-2 ${
                        isActive(item.path)
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-800 hover:text-blue-700 dark:hover:text-blue-300'
                      }`}
                    >
                      <item.icon className="w-4 h-4 shrink-0" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              <div className="relative justify-self-center shrink-0 z-40 sm:ml-2 group">
                <button
                  onClick={() => navigate('/student/announcements')}
                  className="flex items-center justify-center px-3.5 py-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-800 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  aria-label="Announcements"
                  title="Announcements"
                >
                  <Bell className="w-4 h-4" />
                </button>
                <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                  Announcements
                </span>
              </div>

              <div className="justify-self-end flex items-center space-x-4">
                <div className="relative hidden sm:block">
                  <button
                    onClick={() => setProfileDropdown(!profileDropdown)}
                    className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-semibold text-gray-900 dark:text-slate-100">Rahul Kumar</p>
                      <p className="text-xs text-gray-500 dark:text-slate-400">Student</p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-600 dark:text-slate-300" />
                  </button>

                  {profileDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-gray-200 dark:border-slate-700 py-2 z-50">
                      <button
                        onClick={() => {
                          navigate('/student/profile');
                          setProfileDropdown(false);
                        }}
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 flex items-center gap-2.5"
                      >
                        <User className="w-4 h-4 shrink-0" />
                        <span>Profile</span>
                      </button>
                      <button
                        onClick={() => {
                          navigate('/student/settings');
                          setProfileDropdown(false);
                        }}
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 flex items-center gap-2.5"
                      >
                        <Settings className="w-4 h-4 shrink-0" />
                        <span>Settings</span>
                      </button>
                      <button
                        onClick={() => {
                          navigate('/student/certificates');
                          setProfileDropdown(false);
                        }}
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 flex items-center gap-2.5"
                      >
                        <Award className="w-4 h-4 shrink-0" />
                        <span>Certificates</span>
                      </button>
                      <button
                        onClick={() => {
                          navigate('/student/support');
                          setProfileDropdown(false);
                        }}
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 flex items-center gap-2.5"
                      >
                        <HelpCircle className="w-4 h-4 shrink-0" />
                        <span>Support / Help</span>
                      </button>
                      <hr className="my-2" />
                      <button
                        onClick={() => navigate('/login')}
                        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2.5"
                      >
                        <LogOut className="w-4 h-4 shrink-0" />
                        <span>Logout</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

          {isDashboardPage && (
            <>
              <div className="bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/80 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 border border-blue-100 dark:border-slate-700 rounded-3xl pt-8 pb-10 px-6 mx-6 mb-6 mt-4 relative z-20 shadow-sm">
                <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
                  <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Welcome back, Rahul</h2>
                  <p className="text-slate-600 dark:text-slate-300 mt-1">Continue your learning journey</p>
                  </div>
                  <span className="hidden md:inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/80 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                    Student Workspace
                  </span>
                </div>
              </div>
            </>
          )}

          <div className="px-6 pb-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentLayout;
