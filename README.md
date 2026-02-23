# Smart LMS System - Frontend

A comprehensive Learning Management System built with React, Vite, and Tailwind CSS.

## 🎯 Overview

This LMS system features **5 different user portals** with complete role-based access control:
- **Super Admin** - Platform management (12 modules)
- **Institute Admin** - College management (13 modules)
- **Trainer** - Teaching & assessments (13 modules)
- **Student** - Learning & courses (6 modules)
- **Support** - Helpdesk & operations (10 modules)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔐 Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| Super Admin | superadmin@lms.com | super123 |
| Institute Admin | admin@institute.com | admin123 |
| Trainer | trainer@institute.com | trainer123 |
| Student | student@institute.com | student123 |
| Support | support@lms.com | support123 |

## 📦 Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool & dev server
- **React Router DOM 7.13.0** - Routing
- **Tailwind CSS 3.4.19** - Styling
- **Recharts** - Data visualization
- **Lucide React** - Icons

## 📁 Portal Modules

### Super Admin Portal (12 Modules)
1. College Management
2. Admin Management
3. User Overview
4. Course Content Oversight
5. Assessment Performance
6. Certification Management
7. Global Reports
8. Platform Settings
9. Security & Access Control
10. Notifications & Announcements
11. System Logs & Monitoring

### Institute Admin Portal (13 Modules)
1. Department Management
2. Batch Management
3. Student Management
4. Trainer Management
5. Course Assignment
6. Assessment Management
7. Attendance Tracking
8. Performance Reports
9. Announcements & Notices
10. Certificate Tracking
11. User Access & Roles
12. Support Requests
13. Bulk Upload

### Trainer Portal (13 Modules)
1. Assigned Batches
2. Course Builder
3. Content Upload
4. Lesson Builder
5. Assessment Creation
6. Test Scheduling
7. Assignments
8. Attendance
9. Student Progress
10. Evaluation & Grading
11. Performance Analytics
12. Announcements to Students
13. Doubt & Query Handling
14. Reports & Analytics

### Student Portal (6 Modules)
1. Dashboard
2. My Courses
3. Course Learning
4. Tests & Quizzes
5. Assignments
6. Certificates

### Support Portal (10 Modules)
1. Dashboard
2. Ticket Management
3. Issue Categorization
4. User Communication (Live Chat)
5. Ticket Status Tracking
6. Resolution Logs
7. FAQ / Knowledge Base
8. System Alerts
9. Feedback Collection
10. Escalation Management

## 🎨 Features

- ✅ Role-based authentication & routing
- ✅ Mobile-first responsive design
- ✅ Interactive charts & analytics
- ✅ Search, filter, and pagination
- ✅ Modal forms & data tables
- ✅ File upload interfaces
- ✅ Real-time chat UI
- ✅ Notification system
- ✅ Dark mode support (Login page)

## 📂 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── LoginPage.jsx
│   │   ├── ForgotPasswordPage.jsx
│   │   ├── ResetPasswordPage.jsx
│   │   ├── SuperAdmin/          # 12 modules
│   │   ├── InstituteAdmin/      # 13 modules
│   │   ├── Trainer/             # 13 modules
│   │   ├── Student/             # 6 modules
│   │   └── Support/             # 10 modules
│   ├── App.jsx                  # Main routing
│   ├── main.jsx                 # Entry point
│   ├── App.css
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── eslint.config.js
```

## 🔧 Development

This project uses:
- **Vite** for fast HMR and optimized builds
- **ESLint** for code quality
- **PostCSS** for CSS processing
- **Tailwind CSS** for utility-first styling

### Available Scripts

```bash
npm run dev      # Start dev server (port 5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🌐 Routes Structure

```
/login                          # Login page
/forgot-password                # Password recovery
/reset-password                 # Password reset

/super-admin/*                  # Super Admin portal (12 routes)
/institute-admin/*              # Institute Admin portal (13 routes)
/trainer/*                      # Trainer portal (13 routes)
/student/*                      # Student portal (6 routes)
/support/*                      # Support portal (10 routes)
```

## 📝 Notes

- All data is currently **mock/demo data** for development
- No backend API integration yet
- Authentication is client-side only
- No data persistence (mock data resets on refresh)

## 🔜 Future Enhancements

- [ ] Backend API integration
- [ ] JWT-based authentication
- [ ] Database connectivity
- [ ] Real file upload functionality
- [ ] WebSocket for real-time features
- [ ] Email notifications
- [ ] Advanced analytics
- [ ] Mobile app version

## 📄 License

This is a demo/educational project.

---

**Happy Coding! 🚀**

