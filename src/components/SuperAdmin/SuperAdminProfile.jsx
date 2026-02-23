import React from 'react';
import {
  Building2,
  Users,
  BookOpen,
  TrendingUp,
  Shield,
  Lock,
} from 'lucide-react';
import RoleProfileTemplate from '../common/RoleProfileTemplate';

const SuperAdminProfile = () => {
  const profileData = {
    name: 'Administrator',
    email: 'superadmin@smartlms.com',
    phone: '+91 9876543210',
    department: 'System Administration',
    role: 'Super Administrator',
    joinDate: '2023-01-01',
    experience: '10+ years',
    specialization: 'Platform Governance & Security',
    address: 'Tech Park, Bangalore',
    city: 'Bangalore',
    state: 'Karnataka',
    country: 'India',
    qualifications: 'B.Tech, M.Tech',
    bio: 'Experienced system administrator focused on reliability, scalability, and secure digital learning operations.',
    linkedin: 'linkedin.com/in/superadmin',
    twitter: '@smartlms_admin',
  };

  const stats = [
    { icon: Building2, label: 'Institutes', value: '45', color: 'bg-purple-100 text-purple-600' },
    { icon: Users, label: 'Users Managed', value: '12,450', color: 'bg-blue-100 text-blue-600' },
    { icon: BookOpen, label: 'Active Courses', value: '230', color: 'bg-amber-100 text-amber-600' },
    { icon: TrendingUp, label: 'Uptime', value: '99.9%', color: 'bg-emerald-100 text-emerald-600' },
  ];

  const recentActivities = [
    { action: 'System backup completed successfully', category: 'System', time: '2 hours ago', icon: Shield, color: 'text-blue-600' },
    { action: 'Onboarded new institute cluster', category: 'Operations', time: '5 hours ago', icon: Building2, color: 'text-purple-600' },
    { action: 'Published monthly platform report', category: 'Reports', time: '1 day ago', icon: TrendingUp, color: 'text-green-600' },
    { action: 'Rolled out security policy update', category: 'Security', time: '2 days ago', icon: Lock, color: 'text-red-600' },
  ];

  const courses = [
    { name: 'Platform Onboarding Program', students: 450, status: 'Active', progress: 82 },
    { name: 'Compliance & Security Awareness', students: 800, status: 'Active', progress: 65 },
    { name: 'Admin Leadership Track', students: 220, status: 'Active', progress: 58 },
  ];

  return (
    <RoleProfileTemplate
      pageTitle="My Profile"
      profileData={profileData}
      stats={stats}
      recentActivities={recentActivities}
      courses={courses}
      tabs={['overview', 'courses', 'activity', 'settings']}
      accent={{
        activeText: 'text-indigo-600',
        activeBorder: 'border-indigo-600',
        buttonBg: 'bg-indigo-600',
        buttonHover: 'hover:bg-indigo-700',
        softIcon: 'text-indigo-600',
        progressBar: 'bg-indigo-600',
        heroGradient: 'from-indigo-200 to-blue-200',
      }}
    />
  );
};

export default SuperAdminProfile;
