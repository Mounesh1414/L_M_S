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
  Moon,
  Sun,
  Globe,
  Database,
  Download,
  Upload,
  Activity,
  Clock,
  CheckCircle,
  Save,
  RefreshCw,
  Server,
  Key,
  Smartphone,
  Chrome,
  AlertTriangle
} from 'lucide-react';

const SuperAdminSettings = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [settings, setSettings] = useState({
    // Account Settings
    name: 'Super Admin',
    email: 'superadmin@lms.com',
    phone: '+91 9876543210',
    role: 'Super Administrator',
    timezone: 'Asia/Kolkata',
    language: 'English',
    dateFormat: 'DD/MM/YYYY',
    
    // Notification Settings
    emailNotifications: {
      newCollegeRegistration: true,
      criticalSystemAlerts: true,
      dailyReports: true,
      weeklyDigest: true,
      userFeedback: false,
      securityAlerts: true,
      performanceReports: true,
      backupStatus: true
    },
    pushNotifications: {
      systemDown: true,
      criticalIssues: true,
      newAdminRequests: true
    },
    smsNotifications: {
      criticalAlertsOnly: true,
      twoFactorAuth: true
    },
    
    // Security Settings
    twoFactorAuth: true,
    sessionTimeout: '30', // minutes
    passwordExpiry: '90', // days
    loginNotifications: true,
    ipWhitelist: [],
    
    // System Settings
    maintenanceMode: false,
    debugMode: false,
    autoBackup: true,
    backupFrequency: 'daily',
    dataRetention: '365', // days
    
    // Display Settings
    theme: 'light',
    compactMode: false,
    showAdvancedMetrics: true,
    dashboardLayout: 'default',
    
    // Privacy Settings
    dataSharing: false,
    analyticsTracking: true,
    errorReporting: true,
    usageStatistics: true,
    
    // API & Integrations
    apiAccess: true,
    webhooksEnabled: true,
    maxApiCalls: '10000',
    
    // Email Configuration
    emailProvider: 'smtp',
    smtpHost: 'smtp.gmail.com',
    smtpPort: '587',
    smtpUsername: '',
    smtpPassword: '',
    
    // Database Settings
    autoOptimize: true,
    queryLogging: false,
    slowQueryThreshold: '1000', // ms
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSaveSettings = async () => {
    setLoading(true);
    // Simulate API call
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
    { id: 'system', label: 'System', icon: Server },
    { id: 'display', label: 'Display', icon: Eye },
    { id: 'privacy', label: 'Privacy', icon: Lock },
    { id: 'integrations', label: 'Integrations', icon: Activity },
    { id: 'database', label: 'Database', icon: Database }
  ];

  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600">Manage your account and system preferences</p>
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
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md'
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
                  <p className="text-gray-600">Manage your personal account details</p>
                </div>

                {/* Profile Picture */}
                <div className="flex items-center space-x-6 pb-6 border-b border-gray-200">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                      SA
                    </div>
                    <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg border-2 border-white hover:bg-gray-50">
                      <Upload className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{settings.name}</h3>
                    <p className="text-gray-600">{settings.role}</p>
                    <button className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => setSettings({...settings, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={settings.phone}
                      onChange={(e) => setSettings({...settings, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                    <select
                      value={settings.timezone}
                      onChange={(e) => setSettings({...settings, timezone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    >
                      <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                      <option value="America/New_York">America/New York (EST)</option>
                      <option value="Europe/London">Europe/London (GMT)</option>
                      <option value="Asia/Tokyo">Asia/Tokyo (JST)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                    <select
                      value={settings.language}
                      onChange={(e) => setSettings({...settings, language: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    >
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date Format</label>
                    <select
                      value={settings.dateFormat}
                      onChange={(e) => setSettings({...settings, dateFormat: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    >
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all font-medium"
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
                    <Mail className="w-6 h-6 text-indigo-600" />
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
                          className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                {/* Push Notifications */}
                <div className="border-b border-gray-200 pb-6">
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

                {/* SMS Notifications */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Smartphone className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-bold text-gray-900">SMS Notifications</h3>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(settings.smsNotifications).map(([key, value]) => (
                      <label key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                        <span className="text-gray-700 font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) => setSettings({
                            ...settings,
                            smsNotifications: {...settings.smsNotifications, [key]: e.target.checked}
                          })}
                          className="w-5 h-5 text-green-600 rounded focus:ring-2 focus:ring-green-500"
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
                  <p className="text-gray-600">Protect your account and manage security preferences</p>
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
                        <p className="text-sm text-gray-600 mb-3">Add an extra layer of security to your account</p>
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
                      <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>
                </div>

                {/* Session Management */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900">Session Management</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
                      <input
                        type="number"
                        value={settings.sessionTimeout}
                        onChange={(e) => setSettings({...settings, sessionTimeout: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Password Expiry (days)</label>
                      <input
                        type="number"
                        value={settings.passwordExpiry}
                        onChange={(e) => setSettings({...settings, passwordExpiry: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Login Notifications */}
                <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div>
                    <p className="font-medium text-gray-900">Login Notifications</p>
                    <p className="text-sm text-gray-600">Get notified of new login attempts</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.loginNotifications}
                    onChange={(e) => setSettings({...settings, loginNotifications: e.target.checked})}
                    className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                  />
                </label>

                {/* Active Sessions */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Active Sessions</h3>
                  <div className="space-y-3">
                    {[
                      { device: 'Windows PC', browser: 'Chrome', location: 'Mumbai, India', current: true, time: 'Current session' },
                      { device: 'iPhone 13', browser: 'Safari', location: 'Mumbai, India', current: false, time: '2 hours ago' }
                    ].map((session, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center space-x-4">
                          <Chrome className="w-6 h-6 text-gray-600" />
                          <div>
                            <p className="font-medium text-gray-900">{session.device} • {session.browser}</p>
                            <p className="text-sm text-gray-600">{session.location} • {session.time}</p>
                          </div>
                        </div>
                        {!session.current && (
                          <button className="text-red-600 hover:text-red-700 font-medium text-sm">
                            Revoke
                          </button>
                        )}
                        {session.current && (
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* System Settings */}
            {activeTab === 'system' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">System Configuration</h2>
                  <p className="text-gray-600">Manage platform-wide system settings</p>
                </div>

                {/* Maintenance Mode */}
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-100 p-3 rounded-xl">
                        <AlertTriangle className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Maintenance Mode</h3>
                        <p className="text-sm text-gray-600">Temporarily disable platform access for maintenance</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.maintenanceMode}
                        onChange={(e) => setSettings({...settings, maintenanceMode: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-orange-600"></div>
                    </label>
                  </div>
                </div>

                {/* Backup Settings */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900">Backup & Data</h3>
                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Auto Backup</p>
                      <p className="text-sm text-gray-600">Automatically backup system data</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.autoBackup}
                      onChange={(e) => setSettings({...settings, autoBackup: e.target.checked})}
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                    />
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Backup Frequency</label>
                      <select
                        value={settings.backupFrequency}
                        onChange={(e) => setSettings({...settings, backupFrequency: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                      >
                        <option value="hourly">Hourly</option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Data Retention (days)</label>
                      <input
                        type="number"
                        value={settings.dataRetention}
                        onChange={(e) => setSettings({...settings, dataRetention: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium">
                      <Download className="w-5 h-5" />
                      <span>Download Backup</span>
                    </button>
                    <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                      <Upload className="w-5 h-5" />
                      <span>Restore Backup</span>
                    </button>
                  </div>
                </div>

                {/* Debug Mode */}
                <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div>
                    <p className="font-medium text-gray-900">Debug Mode</p>
                    <p className="text-sm text-gray-600">Enable detailed error logging and debugging</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.debugMode}
                    onChange={(e) => setSettings({...settings, debugMode: e.target.checked})}
                    className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
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

                {/* Theme Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Theme</label>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: 'light', icon: Sun, label: 'Light' },
                      { value: 'dark', icon: Moon, label: 'Dark' },
                      { value: 'auto', icon: Activity, label: 'Auto' }
                    ].map((theme) => (
                      <button
                        key={theme.value}
                        onClick={() => setSettings({...settings, theme: theme.value})}
                        className={`p-6 border-2 rounded-xl transition-all ${
                          settings.theme === theme.value
                            ? 'border-indigo-600 bg-indigo-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <theme.icon className={`w-8 h-8 mx-auto mb-2 ${
                          settings.theme === theme.value ? 'text-indigo-600' : 'text-gray-600'
                        }`} />
                        <p className="font-medium text-gray-900">{theme.label}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Layout Options */}
                <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div>
                    <p className="font-medium text-gray-900">Compact Mode</p>
                    <p className="text-sm text-gray-600">Reduce spacing for more content</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.compactMode}
                    onChange={(e) => setSettings({...settings, compactMode: e.target.checked})}
                    className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                  />
                </label>

                <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div>
                    <p className="font-medium text-gray-900">Show Advanced Metrics</p>
                    <p className="text-sm text-gray-600">Display detailed analytics on dashboard</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.showAdvancedMetrics}
                    onChange={(e) => setSettings({...settings, showAdvancedMetrics: e.target.checked})}
                    className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                  />
                </label>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dashboard Layout</label>
                  <select
                    value={settings.dashboardLayout}
                    onChange={(e) => setSettings({...settings, dashboardLayout: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  >
                    <option value="default">Default</option>
                    <option value="compact">Compact</option>
                    <option value="detailed">Detailed</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>
              </div>
            )}

            {/* Privacy Settings */}
            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Privacy & Data</h2>
                  <p className="text-gray-600">Control your data and privacy settings</p>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Data Sharing</p>
                      <p className="text-sm text-gray-600">Share anonymous data with partners</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.dataSharing}
                      onChange={(e) => setSettings({...settings, dataSharing: e.target.checked})}
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Analytics Tracking</p>
                      <p className="text-sm text-gray-600">Help us improve by tracking usage patterns</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.analyticsTracking}
                      onChange={(e) => setSettings({...settings, analyticsTracking: e.target.checked})}
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Error Reporting</p>
                      <p className="text-sm text-gray-600">Automatically send error reports</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.errorReporting}
                      onChange={(e) => setSettings({...settings, errorReporting: e.target.checked})}
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Usage Statistics</p>
                      <p className="text-sm text-gray-600">Collect anonymous usage statistics</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.usageStatistics}
                      onChange={(e) => setSettings({...settings, usageStatistics: e.target.checked})}
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                    />
                  </label>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Data Management</h3>
                  <div className="space-y-3">
                    <button className="w-full px-6 py-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium text-left flex items-center justify-between">
                      <span>Download My Data</span>
                      <Download className="w-5 h-5" />
                    </button>
                    <button className="w-full px-6 py-4 border border-red-300 text-red-600 rounded-xl hover:bg-red-50 transition-colors font-medium text-left flex items-center justify-between">
                      <span>Delete Account</span>
                      <AlertTriangle className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Integrations */}
            {activeTab === 'integrations' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">API & Integrations</h2>
                  <p className="text-gray-600">Manage third-party integrations and API access</p>
                </div>

                {/* API Access */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-xl">
                        <Key className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">API Access</h3>
                        <p className="text-sm text-gray-600">Enable REST API access for external applications</p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.apiAccess}
                      onChange={(e) => setSettings({...settings, apiAccess: e.target.checked})}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  {settings.apiAccess && (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">API Key</label>
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            value="API_KEY_MANAGED_SERVER_SIDE"
                            readOnly
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 outline-none"
                          />
                          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium">
                            Regenerate
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Max API Calls (per day)</label>
                        <input
                          type="number"
                          value={settings.maxApiCalls}
                          onChange={(e) => setSettings({...settings, maxApiCalls: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Webhooks */}
                <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div>
                    <p className="font-medium text-gray-900">Webhooks</p>
                    <p className="text-sm text-gray-600">Receive real-time event notifications</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.webhooksEnabled}
                    onChange={(e) => setSettings({...settings, webhooksEnabled: e.target.checked})}
                    className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                  />
                </label>
              </div>
            )}

            {/* Database Settings */}
            {activeTab === 'database' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Database Configuration</h2>
                  <p className="text-gray-600">Manage database performance and optimization</p>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Auto Optimize</p>
                      <p className="text-sm text-gray-600">Automatically optimize database tables</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.autoOptimize}
                      onChange={(e) => setSettings({...settings, autoOptimize: e.target.checked})}
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Query Logging</p>
                      <p className="text-sm text-gray-600">Log all database queries for analysis</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.queryLogging}
                      onChange={(e) => setSettings({...settings, queryLogging: e.target.checked})}
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                    />
                  </label>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Slow Query Threshold (ms)</label>
                    <input
                      type="number"
                      value={settings.slowQueryThreshold}
                      onChange={(e) => setSettings({...settings, slowQueryThreshold: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Maintenance Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <button className="px-6 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium">
                      Optimize Tables
                    </button>
                    <button className="px-6 py-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                      Clear Cache
                    </button>
                    <button className="px-6 py-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                      Repair Tables
                    </button>
                    <button className="px-6 py-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                      Analyze Queries
                    </button>
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
                className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all font-medium flex items-center space-x-2 disabled:opacity-50"
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

export default SuperAdminSettings;
