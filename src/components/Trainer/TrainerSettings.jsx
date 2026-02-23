import React, { useState } from 'react';
import {
  Settings,
  User,
  Bell,
  Shield,
  Mail,
  Lock,
  Eye,
  EyeOff,
  BookOpen,
  Calendar,
  FileText,
  Save,
  RefreshCw,
  CheckCircle,
  Video,
  MessageSquare,
  Clock,
  Upload
} from 'lucide-react';

const TrainerSettings = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [settings, setSettings] = useState({
    // Account Settings
    name: 'Trainer',
    email: 'trainer@institute.com',
    phone: '+91 9876543210',
    department: 'Computer Science',
    employeeId: 'EMP2024001',
    qualification: 'M.Tech, PhD',
    specialization: 'Full Stack Development, AI/ML',
    timezone: 'Asia/Kolkata',
    language: 'English',
    
    // Notification Settings
    emailNotifications: {
      newAssignments: true,
      studentQueries: true,
      submissionReminders: true,
      batchUpdates: true,
      assessmentDeadlines: true,
      attendanceAlerts: false,
      systemAnnouncements: true
    },
    pushNotifications: {
      urgentQueries: true,
      upcomingClasses: true,
      lateSubmissions: true
    },
    
    // Security Settings
    twoFactorAuth: true,
    sessionTimeout: '30',
    
    // Teaching Preferences
    defaultClassDuration: '60', // minutes
    breakBetweenClasses: '10',
    maxStudentsPerBatch: '50',
    allowLateSubmissions: true,
    lateSubmissionGracePeriod: '24', // hours
    automaticReminders: true,
    reminderFrequency: '2', // days before deadline
    
    // Assessment Settings
    defaultTestDuration: '90', // minutes
    showResultsImmediately: false,
    allowRetake: true,
    maxRetakeAttempts: '2',
    passingPercentage: '40',
    
    // Communication Settings
    allowStudentChat: true,
    chatResponseTime: '24', // hours
    allowAnonymousQuestions: false,
    emailDigest: 'daily',
    
    // Content Settings
    defaultVideoQuality: '720p',
    autoSaveInterval: '5', // minutes
    allowContentDownload: false,
    
    // Display Settings
    theme: 'light',
    compactMode: false,
    showStudentPhotos: true,
    gradebookView: 'detailed',
    
    // Privacy Settings
    shareContactWithStudents: true,
    showOnlineStatus: true,
    allowFeedbackCollection: true
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSaveSettings = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    alert('Settings saved successfully!');
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    alert('Password changed successfully!');
  };

  const tabs = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'teaching', label: 'Teaching', icon: BookOpen },
    { id: 'assessment', label: 'Assessment', icon: FileText },
    { id: 'communication', label: 'Communication', icon: MessageSquare },
    { id: 'content', label: 'Content', icon: Video },
    { id: 'display', label: 'Display', icon: Eye }
  ];

  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-xl">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600">Manage your teaching preferences and account</p>
          </div>
        </div>
      </div>

      {/* Settings Container */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-2 sticky top-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all mb-1 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 lg:p-8">
            
            {/* Account Settings */}
            {activeTab === 'account' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Account Information</h2>
                  <p className="text-gray-600">Manage your personal and professional details</p>
                </div>

                {/* Profile Picture */}
                <div className="flex items-center space-x-6 pb-6 border-b border-gray-200">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                      TR
                    </div>
                    <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg border-2 border-white hover:bg-gray-50">
                      <Upload className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{settings.name}</h3>
                    <p className="text-gray-600">{settings.department}</p>
                    <button className="mt-2 text-sm text-purple-600 hover:text-purple-700 font-medium">
                      Change Photo
                    </button>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={settings.name}
                      onChange={(e) => setSettings({...settings, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => setSettings({...settings, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={settings.phone}
                      onChange={(e) => setSettings({...settings, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Employee ID</label>
                    <input
                      type="text"
                      value={settings.employeeId}
                      disabled
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                    <input
                      type="text"
                      value={settings.department}
                      onChange={(e) => setSettings({...settings, department: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Qualification</label>
                    <input
                      type="text"
                      value={settings.qualification}
                      onChange={(e) => setSettings({...settings, qualification: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
                    <textarea
                      value={settings.specialization}
                      onChange={(e) => setSettings({...settings, specialization: e.target.value})}
                      rows="2"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                {/* Change Password Section */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Change Password</h3>
                  <form onSubmit={handlePasswordChange} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={passwordData.currentPassword}
                          onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                        <div className="relative">
                          <input
                            type={showNewPassword ? 'text' : 'password'}
                            value={passwordData.newPassword}
                            onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                          >
                            {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                        <input
                          type="password"
                          value={passwordData.confirmPassword}
                          onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all font-medium"
                    >
                      Update Password
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Notification Preferences</h2>
                  <p className="text-gray-600">Customize how you receive notifications</p>
                </div>

                {/* Email Notifications */}
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Mail className="w-6 h-6 text-purple-600" />
                    <h3 className="text-lg font-bold text-gray-900">Email Notifications</h3>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(settings.emailNotifications).map(([key, value]) => (
                      <label key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                        <span className="text-gray-700 font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) => setSettings({
                            ...settings,
                            emailNotifications: {...settings.emailNotifications, [key]: e.target.checked}
                          })}
                          className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                {/* Push Notifications */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Bell className="w-6 h-6 text-pink-600" />
                    <h3 className="text-lg font-bold text-gray-900">Push Notifications</h3>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(settings.pushNotifications).map(([key, value]) => (
                      <label key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                        <span className="text-gray-700 font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) => setSettings({
                            ...settings,
                            pushNotifications: {...settings.pushNotifications, [key]: e.target.checked}
                          })}
                          className="w-5 h-5 text-pink-600 rounded focus:ring-2 focus:ring-pink-500"
                        />
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Security Settings</h2>
                  <p className="text-gray-600">Protect your account</p>
                </div>

                {/* Two-Factor Authentication */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-xl">
                        <Shield className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Two-Factor Authentication</h3>
                        <p className="text-sm text-gray-600 mb-3">Add an extra layer of security</p>
                        {settings.twoFactorAuth && (
                          <div className="flex items-center space-x-2 text-green-600">
                            <CheckCircle className="w-5 h-5" />
                            <span className="text-sm font-medium">Enabled</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.twoFactorAuth}
                        onChange={(e) => setSettings({...settings, twoFactorAuth: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
                  <input
                    type="number"
                    value={settings.sessionTimeout}
                    onChange={(e) => setSettings({...settings, sessionTimeout: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>
            )}

            {/* Teaching Preferences */}
            {activeTab === 'teaching' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Teaching Preferences</h2>
                  <p className="text-gray-600">Configure your teaching and class settings</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Default Class Duration (minutes)</label>
                    <input
                      type="number"
                      value={settings.defaultClassDuration}
                      onChange={(e) => setSettings({...settings, defaultClassDuration: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Break Between Classes (minutes)</label>
                    <input
                      type="number"
                      value={settings.breakBetweenClasses}
                      onChange={(e) => setSettings({...settings, breakBetweenClasses: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Max Students Per Batch</label>
                    <input
                      type="number"
                      value={settings.maxStudentsPerBatch}
                      onChange={(e) => setSettings({...settings, maxStudentsPerBatch: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Late Submission Grace Period (hours)</label>
                    <input
                      type="number"
                      value={settings.lateSubmissionGracePeriod}
                      onChange={(e) => setSettings({...settings, lateSubmissionGracePeriod: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Allow Late Submissions</p>
                      <p className="text-sm text-gray-600">Permit assignments after deadline</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.allowLateSubmissions}
                      onChange={(e) => setSettings({...settings, allowLateSubmissions: e.target.checked})}
                      className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Automatic Reminders</p>
                      <p className="text-sm text-gray-600">Send deadline reminders to students</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.automaticReminders}
                      onChange={(e) => setSettings({...settings, automaticReminders: e.target.checked})}
                      className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                    />
                  </label>
                </div>
              </div>
            )}

            {/* Assessment Settings */}
            {activeTab === 'assessment' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Assessment Settings</h2>
                  <p className="text-gray-600">Configure test and evaluation preferences</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Default Test Duration (minutes)</label>
                    <input
                      type="number"
                      value={settings.defaultTestDuration}
                      onChange={(e) => setSettings({...settings, defaultTestDuration: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Max Retake Attempts</label>
                    <input
                      type="number"
                      value={settings.maxRetakeAttempts}
                      onChange={(e) => setSettings({...settings, maxRetakeAttempts: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Passing Percentage</label>
                    <input
                      type="number"
                      value={settings.passingPercentage}
                      onChange={(e) => setSettings({...settings, passingPercentage: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Show Results Immediately</p>
                      <p className="text-sm text-gray-600">Display results after test completion</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.showResultsImmediately}
                      onChange={(e) => setSettings({...settings, showResultsImmediately: e.target.checked})}
                      className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Allow Retake</p>
                      <p className="text-sm text-gray-600">Let students retake failed assessments</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.allowRetake}
                      onChange={(e) => setSettings({...settings, allowRetake: e.target.checked})}
                      className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                    />
                  </label>
                </div>
              </div>
            )}

            {/* Communication Settings */}
            {activeTab === 'communication' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Communication Settings</h2>
                  <p className="text-gray-600">Manage how you communicate with students</p>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Allow Student Chat</p>
                      <p className="text-sm text-gray-600">Enable direct messaging with students</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.allowStudentChat}
                      onChange={(e) => setSettings({...settings, allowStudentChat: e.target.checked})}
                      className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Allow Anonymous Questions</p>
                      <p className="text-sm text-gray-600">Students can ask without revealing identity</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.allowAnonymousQuestions}
                      onChange={(e) => setSettings({...settings, allowAnonymousQuestions: e.target.checked})}
                      className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                    />
                  </label>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expected Response Time (hours)</label>
                    <input
                      type="number"
                      value={settings.chatResponseTime}
                      onChange={(e) => setSettings({...settings, chatResponseTime: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Digest Frequency</label>
                    <select
                      value={settings.emailDigest}
                      onChange={(e) => setSettings({...settings, emailDigest: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    >
                      <option value="realtime">Real-time</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="never">Never</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Content Settings */}
            {activeTab === 'content' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Content Settings</h2>
                  <p className="text-gray-600">Configure content creation and sharing preferences</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Default Video Quality</label>
                  <select
                    value={settings.defaultVideoQuality}
                    onChange={(e) => setSettings({...settings, defaultVideoQuality: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  >
                    <option value="480p">480p</option>
                    <option value="720p">720p (HD)</option>
                    <option value="1080p">1080p (Full HD)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Auto-Save Interval (minutes)</label>
                  <input
                    type="number"
                    value={settings.autoSaveInterval}
                    onChange={(e) => setSettings({...settings, autoSaveInterval: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                </div>

                <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div>
                    <p className="font-medium text-gray-900">Allow Content Download</p>
                    <p className="text-sm text-gray-600">Let students download course materials</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.allowContentDownload}
                    onChange={(e) => setSettings({...settings, allowContentDownload: e.target.checked})}
                    className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                  />
                </label>
              </div>
            )}

            {/* Display Settings */}
            {activeTab === 'display' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Display Preferences</h2>
                  <p className="text-gray-600">Customize your visual experience</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Theme</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => setSettings({...settings, theme: 'light'})}
                        className={`p-6 border-2 rounded-xl transition-all ${
                          settings.theme === 'light'
                            ? 'border-purple-600 bg-purple-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <p className="font-medium text-gray-900">Light</p>
                      </button>
                      <button
                        onClick={() => setSettings({...settings, theme: 'dark'})}
                        className={`p-6 border-2 rounded-xl transition-all ${
                          settings.theme === 'dark'
                            ? 'border-purple-600 bg-purple-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <p className="font-medium text-gray-900">Dark</p>
                      </button>
                    </div>
                  </div>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Compact Mode</p>
                      <p className="text-sm text-gray-600">Reduce spacing for more content</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.compactMode}
                      onChange={(e) => setSettings({...settings, compactMode: e.target.checked})}
                      className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Show Student Photos</p>
                      <p className="text-sm text-gray-600">Display profile pictures in lists</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.showStudentPhotos}
                      onChange={(e) => setSettings({...settings, showStudentPhotos: e.target.checked})}
                      className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                    />
                  </label>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gradebook View</label>
                    <select
                      value={settings.gradebookView}
                      onChange={(e) => setSettings({...settings, gradebookView: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    >
                      <option value="simple">Simple</option>
                      <option value="detailed">Detailed</option>
                      <option value="summary">Summary</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-medium flex items-center space-x-2"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Reset</span>
              </button>
              <button
                onClick={handleSaveSettings}
                disabled={loading}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all font-medium flex items-center space-x-2 disabled:opacity-50"
              >
                <Save className="w-5 h-5" />
                <span>{loading ? 'Saving...' : 'Save Changes'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerSettings;
