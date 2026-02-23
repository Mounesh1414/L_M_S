import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Lock, Zap, BookOpen, CheckCircle } from 'lucide-react';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!identifier.trim()) {
      setError('Please enter your registered email');
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  const handleContactAdmin = () => {
    navigate('/contact-admin');
  };

  if (isSubmitted) {
    return (
      <div className="h-screen overflow-hidden bg-[#d9d9e3] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle className="w-14 h-14 text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Check Your Inbox</h2>
          <p className="text-gray-600 mb-1">Password reset instructions were sent to:</p>
          <p className="text-indigo-600 font-semibold mb-6">{identifier}</p>
          <div className="space-y-3">
            <button
              onClick={handleBackToLogin}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg"
            >
              Back to Login
            </button>
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50"
            >
              Resend Link
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-hidden bg-[#d9d9e3] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl h-full max-h-[calc(100vh-2rem)] bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 bg-gradient-to-br from-indigo-700 via-purple-600 to-blue-700 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-12 left-8 w-40 h-40 border border-white rounded-full" />
              <div className="absolute bottom-16 right-6 w-56 h-56 border border-white rounded-full" />
              <div className="absolute top-1/2 left-1/3 w-28 h-28 border border-white rounded-full" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center mb-10">
                <div className="bg-white p-3 rounded-xl shadow-lg">
                  <GraduationCap className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h1 className="text-white text-2xl font-bold">Smart LMS</h1>
                  <p className="text-indigo-100 text-sm">College Training Institute</p>
                </div>
              </div>

              <h2 className="text-white text-5xl leading-tight font-bold mb-5">Reset Your Password</h2>
              <p className="text-indigo-100 text-lg leading-7 mb-8">
                Create a strong password to secure your account and continue learning.
              </p>

              <div className="space-y-4">
                <div className="flex items-center text-white">
                  <div className="bg-white/20 p-2 rounded-lg mr-3">
                    <Lock className="w-5 h-5" />
                  </div>
                  <span className="text-indigo-50 text-lg">Secure Account Protection</span>
                </div>
                <div className="flex items-center text-white">
                  <div className="bg-white/20 p-2 rounded-lg mr-3">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-indigo-50 text-lg">Fast & Easy Recovery</span>
                </div>
                <div className="flex items-center text-white">
                  <div className="bg-white/20 p-2 rounded-lg mr-3">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-indigo-50 text-lg">Continue Your Learning Journey</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 text-center">
                <p className="text-white text-4xl font-bold">500+</p>
                <p className="text-indigo-100">Students</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 text-center">
                <p className="text-white text-4xl font-bold">50+</p>
                <p className="text-indigo-100">Courses</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-8 md:p-10 flex items-center">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Forgot Password</h2>
              <p className="text-slate-500 text-lg mb-8">Enter your registered email below</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="identifier" className="block text-sm font-semibold text-slate-700 mb-2">
                    Registered Email
                  </label>
                  <input
                    id="identifier"
                    type="email"
                    value={identifier}
                    onChange={(event) => {
                      setIdentifier(event.target.value);
                      setError('');
                    }}
                    placeholder="Enter your registered email"
                    className={`w-full px-4 py-3 border ${error ? 'border-red-500' : 'border-slate-300'} rounded-xl text-base outline-none focus:ring-2 focus:ring-indigo-500`}
                    required
                  />
                  {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-3 rounded-xl transition disabled:opacity-60"
                >
                  {isLoading ? 'Sending...' : 'Send Reset Link'}
                </button>

                <div className="text-center pt-1 space-y-3">
                  <button
                    type="button"
                    onClick={handleBackToLogin}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 text-lg font-medium"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Login
                  </button>
                  <div>
                    <button
                      type="button"
                      onClick={handleContactAdmin}
                      className="text-sm text-indigo-600 hover:underline"
                    >
                      Need help? Contact Admin
                    </button>
                  </div>
                </div>
              </form>

              <p className="text-center text-xs text-gray-500 mt-10">© 2026 Smart LMS, All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
