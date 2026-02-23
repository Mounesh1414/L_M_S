import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, GraduationCap, BookOpen, Users, Award } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      await login(formData.identifier, formData.password);
      // Navigation is handled by the login function in AuthContext
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || 'Invalid email or password. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          
          {/* Left Section - Illustration */}
          <div className="lg:w-1/2 bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-800 p-12 flex flex-col justify-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
              <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-white rounded-full"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Logo */}
              <div className="flex items-center mb-8">
                <div className="bg-white p-3 rounded-xl shadow-lg">
                  <GraduationCap className="w-10 h-10 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h1 className="text-white text-2xl font-bold">Smart LMS</h1>
                  <p className="text-indigo-200 text-sm">College Training Institute</p>
                </div>
              </div>

              {/* Illustration Content */}
              <div className="mt-12">
                <h2 className="text-white text-3xl font-bold mb-4">
                  Welcome Back to Learning
                </h2>
                <p className="text-indigo-100 text-lg mb-8">
                  Access your courses, track your progress, and achieve your educational goals.
                </p>

                {/* Features */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-white">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <span className="text-indigo-50">Interactive Learning Modules</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Users className="w-6 h-6" />
                    </div>
                    <span className="text-indigo-50">Collaborative Study Groups</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="text-indigo-50">Certified Achievements</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="mt-12 grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-indigo-200 text-sm">Students</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-indigo-200 text-sm">Courses</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-indigo-200 text-sm">Success</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Login Form */}
          <div className="lg:w-1/2 p-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              {/* Mobile Logo (visible on small screens) */}
              <div className="lg:hidden flex items-center justify-center mb-8">
                <div className="bg-indigo-600 p-3 rounded-xl shadow-lg">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <div className="ml-4">
                  <h1 className="text-gray-900 text-2xl font-bold">Smart LMS</h1>
                  <p className="text-gray-600 text-sm">College Training Institute</p>
                </div>
              </div>

              {/* Form Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Sign In
                </h2>
                <p className="text-gray-600">
                  Enter your credentials to access your account
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email/Mobile/College ID Input */}
                <div>
                  <label 
                    htmlFor="identifier" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email 
                  </label>
                  <input
                    type="text"
                    id="identifier"
                    name="identifier"
                    value={formData.identifier}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label 
                    htmlFor="password" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 outline-none pr-12"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                {/* Forgot Password Link */}
                <div className="flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => navigate('/forgot-password')}
                    className="text-sm text-indigo-600 hover:text-indigo-700 font-medium hover:underline transition duration-200"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </button>
              </form>

              {/* Additional Links */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 text-sm mb-4">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => navigate('/contact-admin')}
                    className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline transition duration-200"
                  >
                    Contact Admin
                  </button>
                </p>
                
                {/* Demo Credentials */}
                {/* <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border border-indigo-200">
                  <p className="text-sm font-bold text-gray-900 mb-3">🔑 Demo Credentials (Backend Connected)</p>
                  <div className="space-y-3 text-left">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-xs font-bold text-indigo-600 mb-1">Super Admin</p>
                      <p className="text-xs text-gray-700"><span className="font-semibold">Email:</span> admin@smartlms.com</p>
                      <p className="text-xs text-gray-700"><span className="font-semibold">Password:</span> admin123</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-xs font-bold text-blue-600 mb-1">Institute Admin</p>
                      <p className="text-xs text-gray-700"><span className="font-semibold">Email:</span> institute.admin@smartlms.com</p>
                      <p className="text-xs text-gray-700"><span className="font-semibold">Password:</span> institute123</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-xs font-bold text-purple-600 mb-1">Trainer</p>
                      <p className="text-xs text-gray-700"><span className="font-semibold">Email:</span> trainer@smartlms.com</p>
                      <p className="text-xs text-gray-700"><span className="font-semibold">Password:</span> trainer123</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-xs font-bold text-green-600 mb-1">Student</p>
                      <p className="text-xs text-gray-700"><span className="font-semibold">Email:</span> rahul.kumar@student.smartlms.com</p>
                      <p className="text-xs text-gray-700"><span className="font-semibold">Password:</span> student123</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-xs font-bold text-teal-600 mb-1">Support</p>
                      <p className="text-xs text-gray-700"><span className="font-semibold">Email:</span> support@smartlms.com</p>
                      <p className="text-xs text-gray-700"><span className="font-semibold">Password:</span> support123</p>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-center text-xs text-gray-500">
                  © 2026 Smart LMS. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LoginPage;
