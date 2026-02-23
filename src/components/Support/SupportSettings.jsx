import React, { useState } from 'react';
import { Settings, User, Bell, Shield, Mail, Eye, EyeOff, Save, RefreshCw, CheckCircle, Headphones, MessageSquare, Clock, AlertTriangle, Upload } from 'lucide-react';

const SupportSettings = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [settings, setSettings] = useState({
    name: 'Support Agent',
    email: 'support@lms.com',
    phone: '+91 9876543210',
    role: 'Support Specialist',
    timezone: 'Asia/Kolkata',
    language: 'English',
    emailNotifications: {
      newTickets: true,
      highPriorityAlerts: true,
      ticketReplies: true,
      escalations: true,
      resolutionConfirmation: false,
      feedbackReceived: true
    },
    pushNotifications: {
      urgentTickets: true,
      assignedTickets: true,
      overdueReminders: true
    },
    twoFactorAuth: true,
    sessionTimeout: '30',
    autoAssignTickets: true,
    maxActiveTickets: '15',
    responseTimeTarget: '2', // hours
    priorityOrder: 'urgentFirst',
    defaultTicketView: 'list',
    showResolvedTickets: false,
    autoCloseAfter: '7', // days
    enableChatbot: true,
    theme: 'light',
    compactMode: false,
    showCustomerHistory: true
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
    { id: 'support', label: 'Support', icon: Headphones },
    { id: 'display', label: 'Display', icon: Eye }
  ];

  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-3 rounded-xl">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600">Manage your support preferences</p>
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
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-md'
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
                    <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                      SP
                    </div>
                    <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg border-2 border-white hover:bg-gray-50">
                      <Upload className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{settings.name}</h3>
                    <p className="text-gray-600">{settings.role}</p>
                    <button className="mt-2 text-sm text-teal-600 hover:text-teal-700 font-medium">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => setSettings({...settings, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={settings.phone}
                      onChange={(e) => setSettings({...settings, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                    <input
                      type="text"
                      value={settings.role}
                      onChange={(e) => setSettings({...settings, role: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    />
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl hover:shadow-lg transition-all font-medium"
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
                    <Mail className="w-6 h-6 text-teal-600" />
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
                          className="w-5 h-5 text-teal-600 rounded focus:ring-2 focus:ring-teal-500"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Bell className="w-6 h-6 text-cyan-600" />
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
                          className="w-5 h-5 text-cyan-600 rounded focus:ring-2 focus:ring-cyan-500"
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
                      <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-teal-600"></div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
                  <input
                    type="number"
                    value={settings.sessionTimeout}
                    onChange={(e) => setSettings({...settings, sessionTimeout: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>
            )}

            {activeTab === 'support' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Support Configuration</h2>
                  <p className="text-gray-600">Configure your support workflow</p>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Auto-Assign Tickets</p>
                      <p className="text-sm text-gray-600">Automatically assign new tickets</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.autoAssignTickets}
                      onChange={(e) => setSettings({...settings, autoAssignTickets: e.target.checked})}
                      className="w-5 h-5 text-teal-600 rounded focus:ring-2 focus:ring-teal-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Enable Chatbot</p>
                      <p className="text-sm text-gray-600">AI-powered first-line support</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.enableChatbot}
                      onChange={(e) => setSettings({...settings, enableChatbot: e.target.checked})}
                      className="w-5 h-5 text-teal-600 rounded focus:ring-2 focus:ring-teal-500"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Max Active Tickets</label>
                    <input
                      type="number"
                      value={settings.maxActiveTickets}
                      onChange={(e) => setSettings({...settings, maxActiveTickets: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Response Time Target (hours)</label>
                    <input
                      type="number"
                      value={settings.responseTimeTarget}
                      onChange={(e) => setSettings({...settings, responseTimeTarget: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Priority Order</label>
                    <select
                      value={settings.priorityOrder}
                      onChange={(e) => setSettings({...settings, priorityOrder: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    >
                      <option value="urgentFirst">Urgent First</option>
                      <option value="chronological">Chronological</option>
                      <option value="balanced">Balanced</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Auto-Close After (days)</label>
                    <input
                      type="number"
                      value={settings.autoCloseAfter}
                      onChange={(e) => setSettings({...settings, autoCloseAfter: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    />
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
                        onClick={() => setSettings({...settings, theme: 'light'})}
                        className={`p-6 border-2 rounded-xl transition-all ${
                          settings.theme === 'light'
                            ? 'border-teal-600 bg-teal-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <p className="font-medium text-gray-900">Light</p>
                      </button>
                      <button
                        onClick={() => setSettings({...settings, theme: 'dark'})}
                        className={`p-6 border-2 rounded-xl transition-all ${
                          settings.theme === 'dark'
                            ? 'border-teal-600 bg-teal-50'
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
                      className="w-5 h-5 text-teal-600 rounded focus:ring-2 focus:ring-teal-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Show Customer History</p>
                      <p className="text-sm text-gray-600">Display previous ticket history</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.showCustomerHistory}
                      onChange={(e) => setSettings({...settings, showCustomerHistory: e.target.checked})}
                      className="w-5 h-5 text-teal-600 rounded focus:ring-2 focus:ring-teal-500"
                    />
                  </label>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Default Ticket View</label>
                    <select
                      value={settings.defaultTicketView}
                      onChange={(e) => setSettings({...settings, defaultTicketView: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    >
                      <option value="list">List View</option>
                      <option value="grid">Grid View</option>
                      <option value="kanban">Kanban Board</option>
                    </select>
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
                className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl hover:shadow-lg transition-all font-medium flex items-center space-x-2 disabled:opacity-50"
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

export default SupportSettings;
