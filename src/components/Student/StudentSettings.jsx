import React, { useEffect, useState } from 'react';
import { Settings, User, Bell, Shield, Mail, Eye, EyeOff, Save, RefreshCw, CheckCircle, BookOpen, Download, Globe, Video, Upload } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const StudentSettings = () => {
  const { isDark, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('account');
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [settings, setSettings] = useState({
    name: 'John Student',
    email: 'student@institute.com',
    phone: '+91 9876543210',
    studentId: 'STU2024001',
    department: 'Computer Science',
    semester: 'Semester 4',
    timezone: 'Asia/Kolkata',
    language: 'English',
    emailNotifications: {
      courseUpdates: true,
      newAssignments: true,
      gradeReleased: true,
      upcomingTests: true,
      announcements: true,
      certificatesEarned: true,
      deadlineReminders: true
    },
    pushNotifications: {
      liveClasses: true,
      deadlineAlerts: true,
      messageReplies: true
    },
    twoFactorAuth: false,
    sessionTimeout: '60',
    autoPlayVideos: true,
    videoQuality: '720p',
    playbackSpeed: '1.0',
    enableSubtitles: false,
    downloadAllowed: false,
    theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
    compactMode: false,
    showProgressBars: true,
    defaultDashboardView: 'grid',
    privacyMode: 'public',
    showProfile: true,
    allowProfileSearch: true,
    dataConsent: true
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  useEffect(() => {
    setSettings((prev) => ({
      ...prev,
      theme: isDark ? 'dark' : 'light'
    }));
  }, [isDark]);

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
    { id: 'learning', label: 'Learning', icon: BookOpen },
    { id: 'display', label: 'Display', icon: Eye },
    { id: 'privacy', label: 'Privacy', icon: Shield }
  ];

  return (
    <div className="p-4 lg:p-8 pb-24 lg:pb-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600">Manage your learning preferences</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-2 sticky top-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all mb-1 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 lg:p-8">
            
            {activeTab === 'account' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Account Information</h2>
                  <p className="text-gray-600">Manage your personal details</p>
                </div>

                <div className="flex items-center space-x-6 pb-6 border-b border-gray-200">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                      JS
                    </div>
                    <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg border-2 border-white hover:bg-gray-50">
                      <Upload className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{settings.name}</h3>
                    <p className="text-gray-600">{settings.studentId}</p>
                    <button className="mt-2 text-sm text-green-600 hover:text-green-700 font-medium">
                      Change Photo
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={settings.name}
                      onChange={(e) => setSettings({...settings, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Student ID</label>
                    <input
                      type="text"
                      value={settings.studentId}
                      disabled
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => setSettings({...settings, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={settings.phone}
                      onChange={(e) => setSettings({...settings, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                    <input
                      type="text"
                      value={settings.department}
                      disabled
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Semester</label>
                    <input
                      type="text"
                      value={settings.semester}
                      disabled
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                    <select
                      value={settings.timezone}
                      onChange={(e) => setSettings({...settings, timezone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    >
                      <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                      <option value="America/New_York">America/New York (EST)</option>
                      <option value="Europe/London">Europe/London (GMT)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                    <select
                      value={settings.language}
                      onChange={(e) => setSettings({...settings, language: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    >
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Spanish">Spanish</option>
                    </select>
                  </div>
                </div>

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
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-lg transition-all font-medium"
                    >
                      Update Password
                    </button>
                  </form>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Notification Preferences</h2>
                  <p className="text-gray-600">Customize how you receive notifications</p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-center space-x-3 mb-4">
                   <Mail className="w-6 h-6 text-green-600" />
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
                          className="w-5 h-5 text-green-600 rounded focus:ring-2 focus:ring-green-500"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Bell className="w-6 h-6 text-emerald-600" />
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
                          className="w-5 h-5 text-emerald-600 rounded focus:ring-2 focus:ring-emerald-500"
                        />
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Security Settings</h2>
                  <p className="text-gray-600">Protect your account</p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-xl">
                        <Shield className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Two-Factor Authentication</h3>
                        <p className="text-sm text-gray-600 mb-3">Add an extra layer of security</p>
                        {settings.twoFactorAuth && (
                          <div className="flex items-center space-x-2 text-blue-600">
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
                      <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
                  <input
                    type="number"
                    value={settings.sessionTimeout}
                    onChange={(e) => setSettings({...settings, sessionTimeout: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>
            )}

            {activeTab === 'learning' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Learning Preferences</h2>
                  <p className="text-gray-600">Customize your learning experience</p>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Auto-Play Videos</p>
                      <p className="text-sm text-gray-600">Automatically play next video</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.autoPlayVideos}
                      onChange={(e) => setSettings({...settings, autoPlayVideos: e.target.checked})}
                      className="w-5 h-5 text-green-600 rounded focus:ring-2 focus:ring-green-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Enable Subtitles</p>
                      <p className="text-sm text-gray-600">Show video subtitles by default</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.enableSubtitles}
                      onChange={(e) => setSettings({...settings, enableSubtitles: e.target.checked})}
                      className="w-5 h-5 text-green-600 rounded focus:ring-2 focus:ring-green-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Download Content</p>
                      <p className="text-sm text-gray-600">Allow offline content downloads</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.downloadAllowed}
                      onChange={(e) => setSettings({...settings, downloadAllowed: e.target.checked})}
                      className="w-5 h-5 text-green-600 rounded focus:ring-2 focus:ring-green-500"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Video Quality</label>
                    <select
                      value={settings.videoQuality}
                      onChange={(e) => setSettings({...settings, videoQuality: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    >
                      <option value="360p">360p</option>
                      <option value="480p">480p</option>
                      <option value="720p">720p (HD)</option>
                      <option value="1080p">1080p (Full HD)</option>
                      <option value="auto">Auto</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Playback Speed</label>
                    <select
                      value={settings.playbackSpeed}
                      onChange={(e) => setSettings({...settings, playbackSpeed: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    >
                      <option value="0.5">0.5x</option>
                      <option value="0.75">0.75x</option>
                      <option value="1.0">1.0x (Normal)</option>
                      <option value="1.25">1.25x</option>
                      <option value="1.5">1.5x</option>
                      <option value="1.75">1.75x</option>
                      <option value="2.0">2.0x</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

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
                        onClick={() => {
                          setTheme('light');
                          setSettings({...settings, theme: 'light'});
                        }}
                        className={`p-6 border-2 rounded-xl transition-all ${
                          settings.theme === 'light'
                            ? 'border-green-600 bg-green-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <p className="font-medium text-gray-900">Light</p>
                      </button>
                      <button
                        onClick={() => {
                          setTheme('dark');
                          setSettings({...settings, theme: 'dark'});
                        }}
                        className={`p-6 border-2 rounded-xl transition-all ${
                          settings.theme === 'dark'
                            ? 'border-green-600 bg-green-50'
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
                      className="w-5 h-5 text-green-600 rounded focus:ring-2 focus:ring-green-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Show Progress Bars</p>
                      <p className="text-sm text-gray-600">Display course progress indicators</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.showProgressBars}
                      onChange={(e) => setSettings({...settings, showProgressBars: e.target.checked})}
                      className="w-5 h-5 text-green-600 rounded focus:ring-2 focus:ring-green-500"
                    />
                  </label>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Dashboard View</label>
                    <select
                      value={settings.defaultDashboardView}
                      onChange={(e) => setSettings({...settings, defaultDashboardView: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    >
                      <option value="grid">Grid View</option>
                      <option value="list">List View</option>
                      <option value="compact">Compact View</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Privacy Settings</h2>
                  <p className="text-gray-600">Control your privacy and data</p>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Show Profile</p>
                      <p className="text-sm text-gray-600">Make your profile visible to others</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.showProfile}
                      onChange={(e) => setSettings({...settings, showProfile: e.target.checked})}
                      className="w-5 h-5 text-green-600 rounded focus:ring-2 focus:ring-green-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Allow Profile Search</p>
                      <p className="text-sm text-gray-600">Let others find you by search</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.allowProfileSearch}
                      onChange={(e) => setSettings({...settings, allowProfileSearch: e.target.checked})}
                      className="w-5 h-5 text-green-600 rounded focus:ring-2 focus:ring-green-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Data Sharing Consent</p>
                      <p className="text-sm text-gray-600">Allow anonymous data for improvements</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.dataConsent}
                      onChange={(e) => setSettings({...settings, dataConsent: e.target.checked})}
                      className="w-5 h-5 text-green-600 rounded focus:ring-2 focus:ring-green-500"
                    />
                  </label>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Privacy Mode</label>
                    <select
                      value={settings.privacyMode}
                      onChange={(e) => setSettings({...settings, privacyMode: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    >
                      <option value="public">Public</option>
                      <option value="friendsOnly">Friends Only</option>
                      <option value="private">Private</option>
                    </select>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Data Management</h3>
                  <div className="space-y-3">
                    <button className="w-full px-6 py-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium text-left flex items-center justify-between">
                      <span>Download My Data</span>
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

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
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-lg transition-all font-medium flex items-center space-x-2 disabled:opacity-50"
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

export default StudentSettings;
