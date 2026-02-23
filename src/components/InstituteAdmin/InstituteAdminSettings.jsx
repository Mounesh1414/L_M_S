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
  Building2,
  Users,
  BookOpen,
  Globe,
  Download,
  Upload,
  Save,
  RefreshCw,
  Calendar,
  FileText,
  Printer,
  Database,
  CheckCircle
} from 'lucide-react';

const InstituteAdminSettings = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [settings, setSettings] = useState({
    // Account Settings
    name: 'Institute Admin',
    email: 'admin@institute.com',
    phone: '+91 9876543210',
    instituteName: 'Tech Institute of Excellence',
    instituteCode: 'TIE2024',
    address: '123 Main Street, Mumbai',
    website: 'www.techinstitute.edu',
    timezone: 'Asia/Kolkata',
    language: 'English',
    
    // Notification Settings
    emailNotifications: {
      newStudentRegistration: true,
      batchUpdates: true,
      trainerAssignments: true,
      attendanceAlerts: true,
      assessmentResults: true,
      certificateGeneration: true,
      supportTickets: true,
      systemUpdates: false
    },
    pushNotifications: {
      urgentAlerts: true,
      dailySummary: true,
      weeklyReports: false
    },
    
    // Security Settings
    twoFactorAuth: true,
    sessionTimeout: '30',
    requireStrongPassword: true,
    loginAttempts: '3',
    
    // Institute Settings
    academicYear: '2025-2026',
    semesterSystem: 'semester',
    attendanceThreshold: '75',
    passingMarks: '40',
    gradingSystem: 'percentage',
    
    // Enrollment Settings
    autoApproveStudents: false,
    requireDocumentVerification: true,
    maxBatchSize: '60',
    allowSelfEnrollment: false,
    
    // Assessment Settings
    allowLateSubmissions: true,
    lateSubmissionPenalty: '10',
    autoGrading: true,
    plagiarismCheck: true,
    
    // Display Settings
    theme: 'light',
    compactMode: false,
    showStudentPhotos: true,
    defaultView: 'grid',
    
    // Report Settings
    exportFormat: 'pdf',
    includeGraphs: true,
    autoGenerateReports: true,
    reportFrequency: 'weekly',
    
    // Privacy Settings
    shareDataWithParents: true,
    allowStudentProfileEdit: true,
    publicDirectory: false,
    dataRetention: '365'
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
    { id: 'institute', label: 'Institute', icon: Building2 },
    { id: 'enrollment', label: 'Enrollment', icon: Users },
    { id: 'assessment', label: 'Assessment', icon: BookOpen },
    { id: 'display', label: 'Display', icon: Eye },
    { id: 'reports', label: 'Reports', icon: FileText }
  ];

  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-xl">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600">Manage your account and institute preferences</p>
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
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-md'
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
                  <p className="text-gray-600">Manage your personal and institute details</p>
                </div>

                {/* Profile Picture */}
                <div className="flex items-center space-x-6 pb-6 border-b border-gray-200">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                      IA
                    </div>
                    <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg border-2 border-white hover:bg-gray-50">
                      <Upload className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{settings.name}</h3>
                    <p className="text-gray-600">{settings.instituteName}</p>
                    <button className="mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => setSettings({...settings, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={settings.phone}
                      onChange={(e) => setSettings({...settings, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Institute Code</label>
                    <input
                      type="text"
                      value={settings.instituteCode}
                      disabled
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Institute Name</label>
                    <input
                      type="text"
                      value={settings.instituteName}
                      onChange={(e) => setSettings({...settings, instituteName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <textarea
                      value={settings.address}
                      onChange={(e) => setSettings({...settings, address: e.target.value})}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                    <input
                      type="text"
                      value={settings.website}
                      onChange={(e) => setSettings({...settings, website: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                    <select
                      value={settings.timezone}
                      onChange={(e) => setSettings({...settings, timezone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    >
                      <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                      <option value="America/New_York">America/New York (EST)</option>
                      <option value="Europe/London">Europe/London (GMT)</option>
                    </select>
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl hover:shadow-lg transition-all font-medium"
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
                    <Mail className="w-6 h-6 text-blue-600" />
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
                          className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                {/* Push Notifications */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Bell className="w-6 h-6 text-purple-600" />
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
                          className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
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
                  <p className="text-gray-600">Protect your account with enhanced security</p>
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
                      <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                {/* Session & Password Settings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
                    <input
                      type="number"
                      value={settings.sessionTimeout}
                      onChange={(e) => setSettings({...settings, sessionTimeout: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Max Login Attempts</label>
                    <input
                      type="number"
                      value={settings.loginAttempts}
                      onChange={(e) => setSettings({...settings, loginAttempts: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div>
                    <p className="font-medium text-gray-900">Require Strong Password</p>
                    <p className="text-sm text-gray-600">Enforce strong password policy for all users</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.requireStrongPassword}
                    onChange={(e) => setSettings({...settings, requireStrongPassword: e.target.checked})}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  />
                </label>
              </div>
            )}

            {/* Institute Settings */}
            {activeTab === 'institute' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Institute Configuration</h2>
                  <p className="text-gray-600">Manage academic and institutional policies</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Academic Year</label>
                    <input
                      type="text"
                      value={settings.academicYear}
                      onChange={(e) => setSettings({...settings, academicYear: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">System Type</label>
                    <select
                      value={settings.semesterSystem}
                      onChange={(e) => setSettings({...settings, semesterSystem: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    >
                      <option value="semester">Semester</option>
                      <option value="trimester">Trimester</option>
                      <option value="annual">Annual</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Attendance Threshold (%)</label>
                    <input
                      type="number"
                      value={settings.attendanceThreshold}
                      onChange={(e) => setSettings({...settings, attendanceThreshold: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Passing Marks (%)</label>
                    <input
                      type="number"
                      value={settings.passingMarks}
                      onChange={(e) => setSettings({...settings, passingMarks: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Grading System</label>
                    <select
                      value={settings.gradingSystem}
                      onChange={(e) => setSettings({...settings, gradingSystem: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    >
                      <option value="percentage">Percentage</option>
                      <option value="gpa">GPA (4.0 Scale)</option>
                      <option value="cgpa">CGPA (10.0 Scale)</option>
                      <option value="letter">Letter Grades</option>
                    </select>
                  </div>
                </div>
              </div>
           )}

            {/* Enrollment Settings */}
            {activeTab === 'enrollment' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Enrollment Settings</h2>
                  <p className="text-gray-600">Manage student enrollment policies</p>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Auto-Approve Students</p>
                      <p className="text-sm text-gray-600">Automatically approve new registrations</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.autoApproveStudents}
                      onChange={(e) => setSettings({...settings, autoApproveStudents: e.target.checked})}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Require Document Verification</p>
                      <p className="text-sm text-gray-600">Verify student documents before approval</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.requireDocumentVerification}
                      onChange={(e) => setSettings({...settings, requireDocumentVerification: e.target.checked})}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Allow Self-Enrollment</p>
                      <p className="text-sm text-gray-600">Let students enroll in courses directly</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.allowSelfEnrollment}
                      onChange={(e) => setSettings({...settings, allowSelfEnrollment: e.target.checked})}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </label>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Maximum Batch Size</label>
                    <input
                      type="number"
                      value={settings.maxBatchSize}
                      onChange={(e) => setSettings({...settings, maxBatchSize: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Assessment Settings */}
            {activeTab === 'assessment' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Assessment Settings</h2>
                  <p className="text-gray-600">Configure assessment and evaluation policies</p>
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
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </label>

                  {settings.allowLateSubmissions && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Late Submission Penalty (%)</label>
                      <input
                        type="number"
                        value={settings.lateSubmissionPenalty}
                        onChange={(e) => setSettings({...settings, lateSubmissionPenalty: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                  )}

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Auto-Grading</p>
                      <p className="text-sm text-gray-600">Automatically grade objective assessments</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.autoGrading}
                      onChange={(e) => setSettings({...settings, autoGrading: e.target.checked})}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Plagiarism Check</p>
                      <p className="text-sm text-gray-600">Check submissions for plagiarism</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.plagiarismCheck}
                      onChange={(e) => setSettings({...settings, plagiarismCheck: e.target.checked})}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </label>
                </div>
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
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <p className="font-medium text-gray-900">Light</p>
                      </button>
                      <button
                        onClick={() => setSettings({...settings, theme: 'dark'})}
                        className={`p-6 border-2 rounded-xl transition-all ${
                          settings.theme === 'dark'
                            ? 'border-blue-600 bg-blue-50'
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
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Show Student Photos</p>
                      <p className="text-sm text-gray-600">Display student profile pictures</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.showStudentPhotos}
                      onChange={(e) => setSettings({...settings, showStudentPhotos: e.target.checked})}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </label>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Default View</label>
                    <select
                      value={settings.defaultView}
                      onChange={(e) => setSettings({...settings, defaultView: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    >
                      <option value="grid">Grid View</option>
                      <option value="list">List View</option>
                      <option value="table">Table View</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Reports Settings */}
            {activeTab === 'reports' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Report Generation</h2>
                  <p className="text-gray-600">Configure automatic report settings</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Export Format</label>
                    <select
                      value={settings.exportFormat}
                      onChange={(e) => setSettings({...settings, exportFormat: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    >
                      <option value="pdf">PDF</option>
                      <option value="excel">Excel</option>
                      <option value="csv">CSV</option>
                    </select>
                  </div>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Include Graphs</p>
                      <p className="text-sm text-gray-600">Add charts and visualizations in reports</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.includeGraphs}
                      onChange={(e) => setSettings({...settings, includeGraphs: e.target.checked})}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Auto-Generate Reports</p>
                      <p className="text-sm text-gray-600">Automatically create periodic reports</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.autoGenerateReports}
                      onChange={(e) => setSettings({...settings, autoGenerateReports: e.target.checked})}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </label>

                  {settings.autoGenerateReports && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Report Frequency</label>
                      <select
                        value={settings.reportFrequency}
                        onChange={(e) => setSettings({...settings, reportFrequency: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                      </select>
                    </div>
                  )}
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
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl hover:shadow-lg transition-all font-medium flex items-center space-x-2 disabled:opacity-50"
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

export default InstituteAdminSettings;
