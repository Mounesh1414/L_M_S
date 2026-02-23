import React from 'react';
import {
  BookOpen,
  Users,
  ClipboardCheck,
  TrendingUp,
  Video,
  FileText,
  Clock,
  Award,
  AlertCircle,
  Bookmark,
  ChevronRight,
} from 'lucide-react';

const TrainerDashboard = () => {
  const stats = [
    {
      title: 'Assigned Batches',
      value: '5',
      subtitle: '3 departments',
      icon: BookOpen,
      textColor: 'text-blue-700',
      chipColor: 'bg-blue-100 text-blue-700 border-blue-200',
    },
    {
      title: 'Active Courses',
      value: '8',
      subtitle: '2 new this month',
      icon: Video,
      textColor: 'text-emerald-700',
      chipColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    },
    {
      title: 'Pending Evaluations',
      value: '24',
      subtitle: 'Due this week',
      icon: ClipboardCheck,
      textColor: 'text-orange-700',
      chipColor: 'bg-orange-100 text-orange-700 border-orange-200',
    },
    {
      title: 'Total Students',
      value: '210',
      subtitle: 'Across all batches',
      icon: Users,
      textColor: 'text-purple-700',
      chipColor: 'bg-purple-100 text-purple-700 border-purple-200',
    },
  ];

  const myBatches = [
    {
      name: 'Computer Science - Batch A',
      course: 'Full Stack Development',
      students: 60,
      progress: 65,
      nextClass: 'Tomorrow, 9:00 AM',
      status: 'active',
    },
    {
      name: 'Computer Science - Batch B',
      course: 'Web Development',
      students: 55,
      progress: 45,
      nextClass: 'Today, 2:00 PM',
      status: 'active',
    },
    {
      name: 'Data Science - Advanced',
      course: 'Machine Learning',
      students: 45,
      progress: 80,
      nextClass: 'Wed, 10:00 AM',
      status: 'active',
    },
  ];

  const pendingTasks = [
    {
      type: 'Assignment',
      title: 'React Components - Evaluation',
      batch: 'CSE Batch A',
      count: 12,
      deadline: '2 days left',
      priority: 'high',
    },
    {
      type: 'Quiz',
      title: 'JavaScript Basics - Grading',
      batch: 'CSE Batch B',
      count: 8,
      deadline: '5 days left',
      priority: 'medium',
    },
    {
      type: 'Attendance',
      title: 'Weekly Attendance Update',
      batch: 'All Batches',
      count: 5,
      deadline: 'Today',
      priority: 'high',
    },
  ];

  const courseCardStyles = [
    {
      wrapper: 'bg-blue-600 text-white',
      badge: 'bg-slate-900/70 text-white',
      progressTrack: 'bg-white/30',
      progressFill: 'bg-white',
      action: 'bg-lime-300 text-slate-900',
    },
    {
      wrapper: 'bg-orange-500 text-white',
      badge: 'bg-slate-900/70 text-white',
      progressTrack: 'bg-white/30',
      progressFill: 'bg-white',
      action: 'bg-lime-300 text-slate-900',
    },
    {
      wrapper: 'bg-slate-950 text-white',
      badge: 'bg-slate-800 text-white',
      progressTrack: 'bg-white/30',
      progressFill: 'bg-white',
      action: 'bg-lime-300 text-slate-900',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-6 space-y-6">
      <div className="bg-white border border-slate-200 rounded-3xl p-5 lg:p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">My courses</h1>
            <p className="text-slate-500 mt-1">Manage your batches with a cleaner workflow</p>
          </div>
          <button className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl font-semibold transition-colors">
            <Video className="w-5 h-5" />
            Start Live Class
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-5">
          {stats.map((stat, index) => (
            <div key={index} className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium ${stat.chipColor}`}>
              <stat.icon className="w-4 h-4" />
              {stat.title}: {stat.value}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
          {myBatches.map((batch, index) => {
            const cardStyle = courseCardStyles[index % courseCardStyles.length];
            return (
              <div key={index} className={`rounded-3xl p-5 ${cardStyle.wrapper}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-xl text-xs font-semibold ${cardStyle.badge}`}>{batch.course}</span>
                  <Bookmark className="w-5 h-5 opacity-90" />
                </div>

                <h3 className="text-2xl font-semibold leading-tight mb-3">{batch.name}</h3>

                <div className="flex items-center justify-between text-xs opacity-90 mb-2">
                  <span>Progress</span>
                  <span>{batch.progress}% complete</span>
                </div>
                <div className={`w-full h-2 rounded-full ${cardStyle.progressTrack}`}>
                  <div className={`h-2 rounded-full ${cardStyle.progressFill}`} style={{ width: `${batch.progress}%` }} />
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/90 text-slate-800 text-xs font-bold flex items-center justify-center border border-white">A</div>
                    <div className="w-8 h-8 rounded-full bg-white/90 text-slate-800 text-xs font-bold flex items-center justify-center border border-white">B</div>
                    <div className="w-8 h-8 rounded-full bg-white/90 text-slate-800 text-xs font-bold flex items-center justify-center border border-white">C</div>
                    <div className="w-8 h-8 rounded-full bg-white text-slate-800 text-xs font-bold flex items-center justify-center border border-white">+{Math.max(1, Math.floor(batch.students / 10))}</div>
                  </div>
                  <button className={`px-4 py-2 rounded-xl text-sm font-semibold ${cardStyle.action}`}>Continue</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm">
          <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">My next lessons</h2>
              <p className="text-slate-500 mt-1">Upcoming items from your current workload</p>
            </div>
            <button className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center gap-1">
              View all lessons
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="px-6 py-3">
            <div className="grid grid-cols-12 text-xs font-semibold text-slate-500 py-2 border-b border-slate-200">
              <span className="col-span-6">Lesson</span>
              <span className="col-span-3">Batch</span>
              <span className="col-span-3 text-right">Deadline</span>
            </div>

            {pendingTasks.map((task, index) => (
              <div key={index} className="grid grid-cols-12 items-center py-4 border-b border-slate-100 last:border-b-0">
                <div className="col-span-6 pr-3">
                  <p className="font-semibold text-slate-900">{task.title}</p>
                  <p className="text-sm text-slate-500">{task.type} · {task.count} items</p>
                </div>
                <p className="col-span-3 text-slate-700">{task.batch}</p>
                <p className={`col-span-3 text-right font-semibold ${task.priority === 'high' ? 'text-red-600' : 'text-amber-600'}`}>
                  {task.deadline}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-lime-400 rounded-3xl p-6 shadow-sm border border-lime-300">
          <p className="text-slate-800 font-medium mb-4">Teaching focus</p>
          <span className="inline-flex px-3 py-1 rounded-xl text-xs font-semibold bg-slate-900 text-white">
            {stats[2].title}
          </span>
          <h3 className="text-4xl font-bold text-slate-900 mt-4 leading-tight">{stats[2].value}</h3>
          <p className="text-slate-800 mt-2">{stats[2].subtitle}</p>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 bg-white/60 rounded-xl px-3 py-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <p className="text-sm font-medium text-slate-800">High-priority tasks pending</p>
            </div>
            <div className="flex items-center gap-3 bg-white/60 rounded-xl px-3 py-2">
              <Clock className="w-5 h-5 text-slate-700" />
              <p className="text-sm font-medium text-slate-800">Update attendance today</p>
            </div>
            <div className="flex items-center gap-3 bg-white/60 rounded-xl px-3 py-2">
              <TrendingUp className="w-5 h-5 text-emerald-700" />
              <p className="text-sm font-medium text-slate-800">Keep batch performance improving</p>
            </div>
          </div>

          <button className="w-full mt-7 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors inline-flex items-center justify-center gap-2">
            <FileText className="w-5 h-5" />
            Open evaluations
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="bg-white border border-slate-200 rounded-2xl p-4 text-left hover:shadow-md transition-shadow">
          <Video className="w-8 h-8 text-purple-600 mb-2" />
          <h4 className="font-semibold text-slate-900">Upload Video</h4>
          <p className="text-xs text-slate-500 mt-1">Add new course content</p>
        </button>
        <button className="bg-white border border-slate-200 rounded-2xl p-4 text-left hover:shadow-md transition-shadow">
          <ClipboardCheck className="w-8 h-8 text-emerald-600 mb-2" />
          <h4 className="font-semibold text-slate-900">Mark Attendance</h4>
          <p className="text-xs text-slate-500 mt-1">Record today’s sessions</p>
        </button>
        <button className="bg-white border border-slate-200 rounded-2xl p-4 text-left hover:shadow-md transition-shadow">
          <BookOpen className="w-8 h-8 text-blue-600 mb-2" />
          <h4 className="font-semibold text-slate-900">Manage Batches</h4>
          <p className="text-xs text-slate-500 mt-1">Edit batch and schedule</p>
        </button>
        <button className="bg-white border border-slate-200 rounded-2xl p-4 text-left hover:shadow-md transition-shadow">
          <Award className="w-8 h-8 text-orange-600 mb-2" />
          <h4 className="font-semibold text-slate-900">Grade Submissions</h4>
          <p className="text-xs text-slate-500 mt-1">Complete pending reviews</p>
        </button>
      </div>
    </div>
  );
};

export default TrainerDashboard;