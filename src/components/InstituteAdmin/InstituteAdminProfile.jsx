import React from 'react';
import {
  Users,
  BookOpen,
  Building2,
  TrendingUp,
  CheckCircle,
} from 'lucide-react';
import RoleProfileTemplate from '../common/RoleProfileTemplate';

const InstituteAdminProfile = () => {
  const profileData = {
    name: 'Priya Sharma',
    email: 'admin@institute.edu',
    phone: '+91 9876543210',
    department: 'Academic Administration',
    role: 'Institute Administrator',
    joinDate: '2023-06-01',
    experience: '12 years',
    specialization: 'Institution Management',
    address: 'Educational Campus, Mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    qualifications: 'M.Ed, MBA (Education)',
    bio: 'Dedicated academic leader focused on operational excellence, learner outcomes, and faculty enablement.',
    linkedin: 'linkedin.com/in/priyasharma',
    twitter: '@priyasharmaadmin',
  };

  const stats = [
    { icon: Users, label: 'Students', value: '2,450', color: 'bg-purple-100 text-purple-600' },
    { icon: BookOpen, label: 'Courses', value: '48', color: 'bg-blue-100 text-blue-600' },
    { icon: Building2, label: 'Departments', value: '12', color: 'bg-amber-100 text-amber-600' },
    { icon: TrendingUp, label: 'Completion Rate', value: '94%', color: 'bg-emerald-100 text-emerald-600' },
  ];

  const recentActivities = [
    { action: 'Conducted institute performance review', category: 'Admin', time: '2 hours ago', icon: CheckCircle, color: 'text-green-600' },
    { action: 'Approved curriculum updates', category: 'Academic', time: '5 hours ago', icon: BookOpen, color: 'text-blue-600' },
    { action: 'Onboarded new trainer batch', category: 'HR', time: '1 day ago', icon: Users, color: 'text-purple-600' },
    { action: 'Published institute report', category: 'Reports', time: '2 days ago', icon: TrendingUp, color: 'text-orange-600' },
  ];

  const courses = [
    { name: 'Institution Leadership Program', students: 120, status: 'Active', progress: 70 },
    { name: 'Faculty Development Track', students: 90, status: 'Active', progress: 62 },
    { name: 'Academic Quality Framework', students: 150, status: 'Active', progress: 48 },
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
        activeText: 'text-blue-600',
        activeBorder: 'border-blue-600',
        buttonBg: 'bg-blue-600',
        buttonHover: 'hover:bg-blue-700',
        softIcon: 'text-blue-600',
        progressBar: 'bg-blue-600',
        heroGradient: 'from-blue-200 to-cyan-200',
      }}
    />
  );
};

export default InstituteAdminProfile;
