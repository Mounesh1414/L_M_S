import React from 'react';
import {
  BookOpen,
  CheckCircle,
  TrendingUp,
  Award,
  Brain,
  FileText,
} from 'lucide-react';
import RoleProfileTemplate from '../common/RoleProfileTemplate';

const StudentProfile = () => {
  const profileData = {
    name: 'Rahul Kumar',
    email: 'rahul.kumar@smartlms.edu',
    phone: '+91 9876543210',
    department: 'Computer Science',
    role: 'Student',
    joinDate: '2023-08-01',
    experience: '2 years learning track',
    specialization: 'Full Stack Development',
    address: 'Bangalore Campus Hostel',
    city: 'Bangalore',
    state: 'Karnataka',
    country: 'India',
    qualifications: 'Higher Secondary, B.Tech Ongoing',
    bio: 'Motivated learner focused on building practical skills in software development and data-driven problem solving.',
    linkedin: 'linkedin.com/in/rahulkumar',
    twitter: '@rahul_learns',
  };

  const stats = [
    { icon: BookOpen, label: 'Courses Completed', value: '8', color: 'bg-purple-100 text-purple-600' },
    { icon: CheckCircle, label: 'Assignments Done', value: '52', color: 'bg-blue-100 text-blue-600' },
    { icon: TrendingUp, label: 'Average Grade', value: '8.5/10', color: 'bg-amber-100 text-amber-600' },
    { icon: Award, label: 'Certificates', value: '6', color: 'bg-emerald-100 text-emerald-600' },
  ];

  const recentActivities = [
    { action: 'Completed React UI assignment', category: 'Assignment', time: '5 hours ago', icon: FileText, color: 'text-green-600' },
    { action: 'Submitted AI aptitude assessment', category: 'Assessment', time: '1 day ago', icon: Brain, color: 'text-blue-600' },
    { action: 'Joined DSA practice session', category: 'Learning', time: '2 days ago', icon: BookOpen, color: 'text-purple-600' },
    { action: 'Earned JavaScript fundamentals badge', category: 'Achievement', time: '1 week ago', icon: Award, color: 'text-yellow-600' },
  ];

  const courses = [
    { name: 'Full Stack Web Development', students: 85, status: 'Active', progress: 75 },
    { name: 'Data Structures & Algorithms', students: 62, status: 'Active', progress: 60 },
    { name: 'Cloud Foundations', students: 45, status: 'Active', progress: 50 },
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
        activeText: 'text-green-600',
        activeBorder: 'border-green-600',
        buttonBg: 'bg-green-600',
        buttonHover: 'hover:bg-green-700',
        softIcon: 'text-green-600',
        progressBar: 'bg-green-600',
        heroGradient: 'from-green-200 to-emerald-200',
      }}
    />
  );
};

export default StudentProfile;
