import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Redirect to their appropriate dashboard
    const roleRoutes = {
      super_admin: '/super-admin/dashboard',
      institute_admin: '/institute-admin/dashboard',
      trainer: '/trainer/dashboard',
      student: '/student/dashboard',
      support: '/support/dashboard',
    };
    
    return <Navigate to={roleRoutes[user.role] || '/login'} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
