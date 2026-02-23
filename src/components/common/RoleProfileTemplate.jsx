import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Lock,
  Edit,
  Save,
  Eye,
  EyeOff,
  Briefcase,
  BookOpen,
  Users,
  Star,
  Award,
  CheckCircle,
  X,
  Linkedin,
  Twitter,
  Github,
} from 'lucide-react';
import { useToast } from '../../context/ToastContext';

const defaultTabs = ['overview', 'courses', 'activity', 'settings'];

const RoleProfileTemplate = ({
  pageTitle = 'My Profile',
  profileData: initialProfileData,
  stats = [],
  recentActivities = [],
  courses = [],
  tabs = defaultTabs,
  accent = {
    activeText: 'text-indigo-600',
    activeBorder: 'border-indigo-600',
    buttonBg: 'bg-indigo-600',
    buttonHover: 'hover:bg-indigo-700',
    softIcon: 'text-indigo-600',
    progressBar: 'bg-indigo-600',
    heroGradient: 'from-purple-200 to-blue-200',
  },
}) => {
  const { success, error } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const [profileData, setProfileData] = useState(initialProfileData);

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleProfileUpdate = () => {
    setIsEditing(false);
    success('Profile updated successfully!');
  };

  const handlePasswordChange = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      error('Passwords do not match');
      return;
    }
    if (passwordData.newPassword.length < 8) {
      error('Password must be at least 8 characters');
      return;
    }
    setShowChangePassword(false);
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    success('Password changed successfully!');
  };

  const activeTabClasses = `${accent.activeText} ${accent.activeBorder}`;

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{pageTitle}</h1>
          <div className="flex items-center gap-8 mt-4 border-b border-slate-300">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize pb-3 text-base md:text-lg font-semibold transition-colors border-b-2 ${
                  activeTab === tab
                    ? activeTabClasses
                    : 'text-slate-500 border-transparent hover:text-slate-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className={`h-24 bg-gradient-to-r ${accent.heroGradient}`} />
                <div className="px-6 pb-6 -mt-10">
                  <div className="flex flex-col md:flex-row md:items-end gap-5">
                    <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-white shadow-lg shrink-0 bg-slate-200">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-slate-100 to-slate-300" />
                      <div className="absolute inset-0 rounded-full flex items-center justify-center">
                        <User className="w-14 h-14 text-slate-500" />
                      </div>
                    </div>
                    <div className="flex-1 pb-1">
                      <h2 className="text-2xl md:text-4xl font-bold text-slate-900">{profileData.name}</h2>
                      <p className="text-lg md:text-xl text-slate-600 mt-1">{profileData.role}</p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-base md:text-lg leading-relaxed mt-4">{profileData.bio}</p>

                  <div className="flex flex-wrap gap-3 mt-4">
                    {!isEditing ? (
                      <button
                        onClick={() => setIsEditing(true)}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl ${accent.buttonBg} ${accent.buttonHover} text-white font-semibold transition-colors`}
                      >
                        <Edit className="w-4 h-4" />
                        Edit Profile
                      </button>
                    ) : (
                      <button
                        onClick={handleProfileUpdate}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors"
                      >
                        <Save className="w-4 h-4" />
                        Save Changes
                      </button>
                    )}

                    <button
                      onClick={() => setShowChangePassword(true)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold transition-colors"
                    >
                      <Lock className="w-4 h-4" />
                      Change Password
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">Professional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[['Department', 'department'], ['Experience', 'experience'], ['Specialization', 'specialization'], ['Qualifications', 'qualifications']].map(([label, key]) => (
                    <div key={key}>
                      <p className="text-sm md:text-base font-semibold text-slate-700 mb-1">{label}</p>
                      {isEditing ? (
                        <input
                          type="text"
                          value={profileData[key] || ''}
                          onChange={(e) => setProfileData({ ...profileData, [key]: e.target.value })}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                        />
                      ) : (
                        <p className="text-base md:text-lg text-slate-800">{profileData[key]}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">Location</h3>
                  <div className="space-y-4 text-slate-700">
                    <div className="flex items-center gap-3 text-base md:text-lg">
                      <MapPin className={`w-5 h-5 ${accent.softIcon}`} />
                      <span>{profileData.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-base md:text-lg">
                      <Briefcase className={`w-5 h-5 ${accent.softIcon}`} />
                      <span>{profileData.city}, {profileData.state}</span>
                    </div>
                    <div className="flex items-center gap-3 text-base md:text-lg">
                      <Calendar className={`w-5 h-5 ${accent.softIcon}`} />
                      <span>Joined: {profileData.joinDate}</span>
                    </div>
                    <div className="flex items-center gap-3 text-base md:text-lg">
                      <User className={`w-5 h-5 ${accent.softIcon}`} />
                      <span>{profileData.country}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">Contact Information</h3>
                  <div className="space-y-4 text-slate-700">
                    <div className="flex items-center gap-3 text-base md:text-lg">
                      <Mail className={`w-5 h-5 ${accent.softIcon}`} />
                      <span>{profileData.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-base md:text-lg">
                      <Phone className={`w-5 h-5 ${accent.softIcon}`} />
                      <span>{profileData.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-base md:text-lg">
                      <Linkedin className={`w-5 h-5 ${accent.softIcon}`} />
                      <span>{profileData.linkedin}</span>
                    </div>
                    <div className="flex items-center gap-3 text-base md:text-lg">
                      <Twitter className={`w-5 h-5 ${accent.softIcon}`} />
                      <span>{profileData.twitter}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Achievements</h3>
                <div className="grid grid-cols-3 gap-3">
                  {stats.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${item.color}`}>
                        <item.icon className="w-9 h-9" />
                      </div>
                      <p className="text-sm text-slate-700 mt-2 leading-tight">{item.label}</p>
                    </div>
                  ))}
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center bg-slate-100 text-slate-500">
                      <Lock className="w-8 h-8" />
                    </div>
                    <p className="text-sm text-slate-700 mt-2 leading-tight">Locked</p>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <p className="text-base md:text-lg text-slate-700 font-semibold mb-3">Unlocked. {stats.length} / 10</p>
                  <button className="w-full py-3 rounded-xl bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold transition-colors">
                    View Certificates
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col justify-between min-h-[420px]">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Social Links</h3>
                  <div className="flex items-center justify-center gap-6 mb-8">
                    <button className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors">
                      <Linkedin className="w-8 h-8" />
                    </button>
                    <button className="w-16 h-16 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                      <Twitter className="w-8 h-8" />
                    </button>
                    <button className="w-16 h-16 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-slate-900 transition-colors">
                      <Github className="w-8 h-8" />
                    </button>
                  </div>
                </div>
                <button className="w-full py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold transition-colors">
                  View Certificates
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Your Courses</h3>
            <div className="space-y-4">
              {courses.map((course, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-slate-900">{course.name}</h4>
                      <p className="text-sm text-slate-600 mt-1">{course.students} participants</p>
                    </div>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                      {course.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-slate-200 rounded-full h-2">
                      <div className={`${accent.progressBar} h-2 rounded-full`} style={{ width: `${course.progress}%` }} />
                    </div>
                    <span className="text-xs text-slate-600 font-medium">{course.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Recent Activities</h3>
            <div className="space-y-4">
              {recentActivities.map((activity, idx) => (
                <div key={idx} className="flex gap-4 pb-4 border-b border-slate-200 last:border-b-0">
                  <div className="flex-shrink-0 mt-1">
                    <activity.icon className={`w-6 h-6 ${activity.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-slate-900">{activity.action}</h4>
                      <span className="text-xs text-slate-500">{activity.time}</span>
                    </div>
                    <span className="text-xs text-slate-600 mt-1 inline-block px-2 py-1 bg-slate-100 rounded">
                      {activity.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Account Security</h3>
            <button
              onClick={() => setShowChangePassword(true)}
              className="px-6 py-3 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors font-medium flex items-center gap-2"
            >
              <Lock className="w-4 h-4" />
              Change Password
            </button>
          </div>
        )}
      </div>

      {showChangePassword && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-900">Change Password</h3>
              <button onClick={() => setShowChangePassword(false)} className="text-slate-500 hover:text-slate-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Current Password</label>
                <div className="relative">
                  <input
                    type={showCurrentPassword ? 'text' : 'password'}
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter current password"
                  />
                  <button
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  >
                    {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">New Password</label>
                <div className="relative">
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter new password"
                  />
                  <button
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  >
                    {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Confirm Password</label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  placeholder="Confirm new password"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handlePasswordChange}
                className={`flex-1 ${accent.buttonBg} ${accent.buttonHover} text-white py-2 px-4 rounded-lg transition-colors`}
              >
                Change Password
              </button>
              <button
                onClick={() => setShowChangePassword(false)}
                className="flex-1 border border-slate-300 text-slate-700 py-2 px-4 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoleProfileTemplate;
