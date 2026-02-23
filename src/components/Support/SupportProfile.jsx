import React from 'react';
import {
  CheckCircle,
  Star,
  TrendingUp,
  Headphones,
  Users,
} from 'lucide-react';
import RoleProfileTemplate from '../common/RoleProfileTemplate';

const SupportProfile = () => {
  const profileData = {
    name: 'Priya Desai',
    email: 'support@smartlms.com',
    phone: '+91 9876543210',
    department: 'Customer Support',
    role: 'Support Specialist',
    joinDate: '2023-01-15',
    experience: '6 years',
    specialization: 'Technical Issue Resolution',
    address: 'Support Center, Bangalore',
    city: 'Bangalore',
    state: 'Karnataka',
    country: 'India',
    qualifications: 'BCA, ITIL Foundation',
    bio: 'Support professional focused on fast issue resolution, great communication, and high user satisfaction.',
    linkedin: 'linkedin.com/in/priyadesai',
    twitter: '@priyadesai_support',
  };

  const stats = [
    { icon: CheckCircle, label: 'Tickets Resolved', value: '1,250+', color: 'bg-purple-100 text-purple-600' },
    { icon: Star, label: 'Satisfaction', value: '4.7/5', color: 'bg-blue-100 text-blue-600' },
    { icon: TrendingUp, label: 'Response Time', value: '2 mins', color: 'bg-amber-100 text-amber-600' },
    { icon: Headphones, label: 'Calls Handled', value: '890', color: 'bg-emerald-100 text-emerald-600' },
  ];

  const recentActivities = [
    { action: 'Resolved critical login issue', category: 'Resolution', time: '1 hour ago', icon: CheckCircle, color: 'text-green-600' },
    { action: 'Received 5-star user feedback', category: 'Feedback', time: '3 hours ago', icon: Star, color: 'text-yellow-600' },
    { action: 'Closed 15 support requests', category: 'Tickets', time: '5 hours ago', icon: Headphones, color: 'text-teal-600' },
    { action: 'Mentored new support associate', category: 'Training', time: '1 day ago', icon: Users, color: 'text-blue-600' },
  ];

  const courses = [
    { name: 'Support Excellence Program', students: 180, status: 'Active', progress: 72 },
    { name: 'Customer Communication Skills', students: 140, status: 'Active', progress: 56 },
    { name: 'Incident Management Workshop', students: 95, status: 'Active', progress: 45 },
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
        activeText: 'text-teal-600',
        activeBorder: 'border-teal-600',
        buttonBg: 'bg-teal-600',
        buttonHover: 'hover:bg-teal-700',
        softIcon: 'text-teal-600',
        progressBar: 'bg-teal-600',
        heroGradient: 'from-teal-200 to-cyan-200',
      }}
    />
  );
};

export default SupportProfile;
