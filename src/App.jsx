import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import LoginPage from './components/LoginPage'
import ForgotPasswordPage from './components/ForgotPasswordPage'
import ResetPasswordPage from './components/ResetPasswordPage'
import ContactAdminPage from './components/ContactAdminPage'
import LandingPage from './components/LandingPage'

// Super Admin
import SuperAdminLayout from './components/SuperAdmin/SuperAdminLayout'
import SuperAdminDashboard from './components/SuperAdmin/SuperAdminDashboard'
import CollegeTrainerStudentManagement from './components/SuperAdmin/CollegeTrainerStudentManagement'
import OurPrograms from './components/SuperAdmin/OurPrograms'
import AttendanceMonitoring from './components/SuperAdmin/AttendanceMonitoring'
import SuperAdminAssessment from './components/SuperAdmin/AssessmentManagement'
import ReportsPerformance from './components/SuperAdmin/ReportsPerformance'
import SystemSettings from './components/SuperAdmin/SystemSettings'
import AnnouncementsPage from './components/SuperAdmin/AnnouncementsPage'
import CertificationsPage from './components/SuperAdmin/CertificationsPage'
import SuperAdminSettings from './components/SuperAdmin/SuperAdminSettings'
import SuperAdminProfile from './components/SuperAdmin/SuperAdminProfile'
import CalendarPage from './components/SuperAdmin/CalendarPage'
import MessagingPage from './components/SuperAdmin/MessagingPage'
import FilesPage from './components/SuperAdmin/FilesPage'
import QuizManagement from './components/SuperAdmin/QuizManagement'

// Institute Admin
import InstituteAdminLayout from './components/InstituteAdmin/InstituteAdminLayout'
import InstituteAdminDashboard from './components/InstituteAdmin/InstituteAdminDashboard'
import DepartmentManagement from './components/InstituteAdmin/DepartmentManagement'
import BatchManagement from './components/InstituteAdmin/BatchManagement'
import StudentManagement from './components/InstituteAdmin/StudentManagement'
import TrainerManagement from './components/InstituteAdmin/TrainerManagement'
import CourseAssignment from './components/InstituteAdmin/CourseAssignment'
import AssessmentManagement from './components/InstituteAdmin/AssessmentManagement'
import AttendanceTracking from './components/InstituteAdmin/AttendanceTracking'
import PerformanceReports from './components/InstituteAdmin/PerformanceReports'
import AnnouncementsNotices from './components/InstituteAdmin/AnnouncementsNotices'
import CertificateTracking from './components/InstituteAdmin/CertificateTracking'
import UserAccessRoles from './components/InstituteAdmin/UserAccessRoles'
import SupportRequests from './components/InstituteAdmin/SupportRequests'
import BulkUpload from './components/InstituteAdmin/BulkUpload'
import InstituteAdminSettings from './components/InstituteAdmin/InstituteAdminSettings'
import InstituteAdminProfile from './components/InstituteAdmin/InstituteAdminProfile'
import InstituteCalendarPage from './components/InstituteAdmin/CalendarPage'
import InstituteMessagingPage from './components/InstituteAdmin/MessagingPage'
import InstituteFilesPage from './components/InstituteAdmin/FilesPage'
import InstituteQuizManagement from './components/InstituteAdmin/QuizManagement'
import LoginRequests from './components/InstituteAdmin/LoginRequests'

// Trainer
import TrainerLayout from './components/Trainer/TrainerLayout'
import TrainerDashboard from './components/Trainer/TrainerDashboard'
import AssignedBatches from './components/Trainer/AssignedBatches'
import CourseBuilder from './components/Trainer/CourseBuilder'
import LessonBuilder from './components/Trainer/LessonBuilder'
import AssessmentCreation from './components/Trainer/AssessmentCreation'
import TestScheduling from './components/Trainer/TestScheduling'
import Assignments from './components/Trainer/Assignments'
import Attendance from './components/Trainer/Attendance'
import StudentProgress from './components/Trainer/StudentProgress'
import EvaluationGrading from './components/Trainer/EvaluationGrading'
import Performance from './components/Trainer/Performance'
import AnnouncementsToStudents from './components/Trainer/AnnouncementsToStudents'
import DoubtQueryHandling from './components/Trainer/DoubtQueryHandling'
import ReportsAnalytics from './components/Trainer/ReportsAnalytics'
import TrainerAssignments from './components/Trainer/Assignments'
import TrainerSettings from './components/Trainer/TrainerSettings'
import TrainerProfile from './components/Trainer/TrainerProfile'
import TrainerCalendarPage from './components/Trainer/CalendarPage'
import TrainerMessagingPage from './components/Trainer/MessagingPage'
import TrainerFilesPage from './components/Trainer/FilesPage'
import TrainerQuizBuilderPage from './components/Trainer/QuizBuilderPage'

// Support
import SupportLayout from './components/Support/SupportLayout'
import SupportDashboard from './components/Support/SupportDashboard'
import TicketManagement from './components/Support/TicketManagement'
import IssueCategorization from './components/Support/IssueCategorization'
import UserCommunication from './components/Support/UserCommunication'
import TicketStatusTracking from './components/Support/TicketStatusTracking'
import ResolutionLogs from './components/Support/ResolutionLogs'
import KnowledgeBase from './components/Support/KnowledgeBase'
import SystemAlerts from './components/Support/SystemAlerts'
import FeedbackCollection from './components/Support/FeedbackCollection'
import EscalationManagement from './components/Support/EscalationManagement'
import SupportSettings from './components/Support/SupportSettings'
import SupportProfile from './components/Support/SupportProfile'
import SupportCalendarPage from './components/Support/CalendarPage'
import SupportMessagingPage from './components/Support/MessagingPage'
import SupportFilesPage from './components/Support/FilesPage'

// Student
import StudentLayout from './components/Student/StudentLayout'
import StudentDashboard from './components/Student/StudentDashboard'
import MyCourses from './components/Student/MyCourses'
import LearningContent from './components/Student/LearningContent'
import LessonProgress from './components/Student/LessonProgress'
import TestsQuizzes from './components/Student/TestsQuizzes'
import StudentAssignments from './components/Student/Assignments'
import ResultsFeedback from './components/Student/ResultsFeedback'
import Certificates from './components/Student/Certificates'
import StudentAnnouncements from './components/Student/StudentAnnouncements'
import AttendanceView from './components/Student/AttendanceView'
import StudentProfile from './components/Student/StudentProfile'
import StudentSupport from './components/Student/StudentSupport'
import CourseLearning from './components/Student/CourseLearning'
import StudentSettings from './components/Student/StudentSettings'
import StudentCalendarPage from './components/Student/CalendarPage'
import StudentMessagingPage from './components/Student/MessagingPage'
import StudentFilesPage from './components/Student/FilesPage'

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/contact-admin" element={<ContactAdminPage />} />
      
      {/* Super Admin Routes */}
      <Route element={<ProtectedRoute allowedRoles={['super_admin']} />}>
        <Route path="/super-admin" element={<SuperAdminLayout />}>
          <Route index element={<Navigate to="/super-admin/dashboard" replace />} />
          <Route path="dashboard" element={<SuperAdminDashboard />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="messages" element={<MessagingPage />} />
          <Route path="files" element={<FilesPage />} />
          <Route path="management" element={<CollegeTrainerStudentManagement />} />
          <Route path="programs" element={<OurPrograms />} />
          <Route path="attendance" element={<AttendanceMonitoring />} />
          <Route path="assessment" element={<SuperAdminAssessment />} />
          <Route path="quiz" element={<QuizManagement />} />
          <Route path="reports" element={<ReportsPerformance />} />
          <Route path="profile" element={<SuperAdminProfile />} />
          <Route path="system-settings" element={<SystemSettings />} />
          <Route path="settings" element={<SuperAdminSettings />} />
          <Route path="announcements" element={<AnnouncementsPage />} />
          <Route path="certifications" element={<CertificationsPage />} />
        </Route>
      </Route>

      {/* Institute Admin Routes */}
      <Route element={<ProtectedRoute allowedRoles={['institute_admin']} />}>
        <Route path="/institute-admin" element={<InstituteAdminLayout />}>
          <Route index element={<Navigate to="/institute-admin/dashboard" replace />} />
          <Route path="dashboard" element={<InstituteAdminDashboard />} />
          <Route path="calendar" element={<InstituteCalendarPage />} />
          <Route path="messages" element={<InstituteMessagingPage />} />
          <Route path="files" element={<InstituteFilesPage />} />
          <Route path="departments" element={<DepartmentManagement />} />
          <Route path="batches" element={<BatchManagement />} />
          <Route path="students" element={<StudentManagement />} />
          <Route path="trainers" element={<TrainerManagement />} />
          <Route path="course-assignment" element={<CourseAssignment />} />
          <Route path="assessments" element={<AssessmentManagement />} />
          <Route path="quiz" element={<InstituteQuizManagement />} />
          <Route path="attendance" element={<AttendanceTracking />} />
          <Route path="performance" element={<PerformanceReports />} />
          <Route path="announcements" element={<AnnouncementsNotices />} />
          <Route path="certificates" element={<CertificateTracking />} />
          <Route path="login-requests" element={<LoginRequests />} />
          <Route path="users" element={<UserAccessRoles />} />
          <Route path="support" element={<SupportRequests />} />
          <Route path="profile" element={<InstituteAdminProfile />} />
          <Route path="bulk-upload" element={<BulkUpload />} />
          <Route path="settings" element={<InstituteAdminSettings />} />
        </Route>
      </Route>

      {/* Trainer Routes */}
      <Route element={<ProtectedRoute allowedRoles={['trainer']} />}>
        <Route path="/trainer" element={<TrainerLayout />}>
          <Route index element={<Navigate to="/trainer/dashboard" replace />} />
          <Route path="dashboard" element={<TrainerDashboard />} />
          <Route path="calendar" element={<TrainerCalendarPage />} />
          <Route path="messages" element={<TrainerMessagingPage />} />
          <Route path="files" element={<TrainerFilesPage />} />
          <Route path="batches" element={<AssignedBatches />} />
          <Route path="courses" element={<CourseBuilder />} />
          <Route path="lesson-builder" element={<LessonBuilder />} />
          <Route path="assessment-creation" element={<AssessmentCreation />} />
          <Route path="quiz-builder" element={<TrainerQuizBuilderPage />} />
          <Route path="test-scheduling" element={<TestScheduling />} />
          <Route path="assignments" element={<TrainerAssignments />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="student-progress" element={<StudentProgress />} />
          <Route path="evaluation" element={<EvaluationGrading />} />
          <Route path="performance" element={<Performance />} />
          <Route path="announcements" element={<AnnouncementsToStudents />} />
          <Route path="doubts" element={<DoubtQueryHandling />} />
          <Route path="profile" element={<TrainerProfile />} />
          <Route path="reports" element={<ReportsAnalytics />} />
          <Route path="settings" element={<TrainerSettings />} />
        </Route>
      </Route>

      {/* Support Routes */}
      <Route element={<ProtectedRoute allowedRoles={['support']} />}>
        <Route path="/support" element={<SupportLayout />}>
          <Route index element={<Navigate to="/support/dashboard" replace />} />
          <Route path="dashboard" element={<SupportDashboard />} />
          <Route path="calendar" element={<SupportCalendarPage />} />
          <Route path="messages" element={<SupportMessagingPage />} />
          <Route path="files" element={<SupportFilesPage />} />
          <Route path="tickets" element={<TicketManagement />} />
          <Route path="issue-categorization" element={<IssueCategorization />} />
          <Route path="user-communication" element={<UserCommunication />} />
          <Route path="ticket-status" element={<TicketStatusTracking />} />
          <Route path="resolution-logs" element={<ResolutionLogs />} />
          <Route path="knowledge-base" element={<KnowledgeBase />} />
          <Route path="system-alerts" element={<SystemAlerts />} />
          <Route path="feedback" element={<FeedbackCollection />} />
          <Route path="profile" element={<SupportProfile />} />
          <Route path="escalation" element={<EscalationManagement />} />
          <Route path="settings" element={<SupportSettings />} />
        </Route>
      </Route>

      {/* Student Routes */}
      <Route element={<ProtectedRoute allowedRoles={['student']} />}>
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Navigate to="/student/dashboard" replace />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="calendar" element={<StudentCalendarPage />} />
          <Route path="messages" element={<StudentMessagingPage />} />
          <Route path="files" element={<StudentFilesPage />} />
          <Route path="courses" element={<MyCourses />} />
          <Route path="course/:courseId" element={<CourseLearning />} />
          <Route path="learning-content" element={<LearningContent />} />
          <Route path="lesson-progress" element={<LessonProgress />} />
          <Route path="tests" element={<TestsQuizzes />} />
          <Route path="assignments" element={<StudentAssignments />} />
          <Route path="results" element={<ResultsFeedback />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="announcements" element={<StudentAnnouncements />} />
          <Route path="attendance" element={<AttendanceView />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="support" element={<StudentSupport />} />
          <Route path="settings" element={<StudentSettings />} />
        </Route>
      </Route>

      {/* Catch all */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
    </AuthProvider>
  )
}
