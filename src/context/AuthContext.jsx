import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../services/api';

const AuthContext = createContext(null);

const demoUsers = [
  {
    id: 'demo-super-admin',
    identifier: 'superadmin@lms.com',
    password: 'super123',
    name: 'Super Admin',
    role: 'super_admin',
  },
  {
    id: 'demo-institute-admin',
    identifier: 'admin@institute.com',
    password: 'admin123',
    name: 'Institute Admin',
    role: 'institute_admin',
  },
  {
    id: 'demo-trainer',
    identifier: 'trainer@institute.com',
    password: 'trainer123',
    name: 'Trainer',
    role: 'trainer',
  },
  {
    id: 'demo-student',
    identifier: 'student@institute.com',
    password: 'student123',
    name: 'Student',
    role: 'student',
  },
  {
    id: 'demo-support',
    identifier: 'support@lms.com',
    password: 'support123',
    name: 'Support Agent',
    role: 'support',
  },
];

const mockAuthenticate = (identifier, password) => {
  const normalizedIdentifier = identifier.trim().toLowerCase();
  const match = demoUsers.find(
    (user) => user.identifier.toLowerCase() === normalizedIdentifier
  );

  if (!match || match.password !== password) {
    const error = new Error('Invalid email or password. Please try again.');
    error.status = 401;
    throw error;
  }

  return {
    access_token: `demo-token-${match.role}`,
    user: {
      id: match.id,
      name: match.name,
      email: match.identifier,
      role: match.role,
    },
  };
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const mockAuthPreference = import.meta.env.VITE_USE_MOCK_AUTH;
  const useMockOnly = mockAuthPreference === 'true';
  const allowMockFallback = mockAuthPreference !== 'false';

  const roleRoutes = {
    super_admin: '/super-admin/dashboard',
    institute_admin: '/institute-admin/dashboard',
    trainer: '/trainer/dashboard',
    student: '/student/dashboard',
    support: '/support/dashboard',
  };

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (token && savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        logout();
      }
    }
    setLoading(false);
  }, []);

  const completeLogin = (data) => {
    localStorage.setItem('token', data.access_token);
    localStorage.setItem('user', JSON.stringify(data.user));
    setUser(data.user);
    const route = roleRoutes[data.user.role] || '/';
    navigate(route);
  };

  const attemptMockLogin = (identifier, password) => {
    const data = mockAuthenticate(identifier, password);
    completeLogin(data);
    return data;
  };

  const login = async (identifier, password) => {
    if (useMockOnly) {
      return attemptMockLogin(identifier, password);
    }

    try {
      const data = await authAPI.login(identifier, password);
      completeLogin(data);
      return data;
    } catch (error) {
      if (allowMockFallback) {
        return attemptMockLogin(identifier, password);
      }
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  const updateUser = (userData) => {
    const updatedUser = { ...user, ...userData };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    login,
    logout,
    updateUser,
    loading,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
