import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Mail, CircleCheck, Search, CheckCircle } from 'lucide-react';
import { createLoginRequest } from '../services/loginRequests';

const initialForm = {
  registerNumber: '',
  email: '',
  courseName: '',
  issueType: '',
};

const ContactAdminPage = () => {
  const navigate = useNavigate();
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [requestForm, setRequestForm] = useState(initialForm);

  const handleRequestChange = (event) => {
    const { name, value } = event.target;
    setRequestForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRequestSubmit = (event) => {
    event.preventDefault();
    createLoginRequest({
      fullName: `Student ${requestForm.registerNumber}`,
      registerNumber: requestForm.registerNumber,
      email: requestForm.email,
      mobile: 'N/A',
      department: 'N/A',
      course: requestForm.courseName,
      yearSemester: 'N/A',
      batch: '',
      message: `Issue Type: ${requestForm.issueType}`,
    });
    setRequestSubmitted(true);
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  const handleCreateAnother = () => {
    setRequestSubmitted(false);
    setRequestForm(initialForm);
  };

  return (
    <div className="h-screen overflow-hidden bg-[#d9d9e3] flex items-center justify-center p-4">
      {!requestSubmitted ? (
        <div className="w-full max-w-5xl h-full max-h-[calc(100vh-2rem)] bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row h-full">
            <div className="lg:w-5/12 bg-gradient-to-br from-indigo-700 via-purple-600 to-blue-700 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 opacity-15">
                <div className="absolute top-10 left-8 w-40 h-40 border border-white rounded-full" />
                <div className="absolute bottom-20 right-6 w-56 h-56 border border-white rounded-full" />
                <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white rounded-full" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="bg-white p-3 rounded-xl shadow-lg">
                    <GraduationCap className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h1 className="text-white text-2xl font-bold">Smart LMS</h1>
                    <p className="text-indigo-100 text-sm">College Training Institute</p>
                  </div>
                </div>

                <h2 className="text-white text-5xl font-bold leading-tight mb-4">Need Assistance?</h2>
                <p className="text-indigo-100 text-lg leading-relaxed mb-8">
                  Submit your issue and our admin team will get back to you quickly.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center text-white">
                    <div className="bg-white/20 p-2 rounded-lg mr-3">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-indigo-50 text-lg">Quick Response</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="bg-white/20 p-2 rounded-lg mr-3">
                      <CircleCheck className="w-5 h-5" />
                    </div>
                    <span className="text-indigo-50 text-lg">Dedicated Admin Support</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="bg-white/20 p-2 rounded-lg mr-3">
                      <Search className="w-5 h-5" />
                    </div>
                    <span className="text-indigo-50 text-lg">Issue Tracking</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-3 mt-8">
                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center">
                  <p className="text-white text-4xl font-bold">500+</p>
                  <p className="text-indigo-100">Students</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center">
                  <p className="text-white text-4xl font-bold">95%</p>
                  <p className="text-indigo-100">Success</p>
                </div>
              </div>
            </div>

            <div className="lg:w-7/12 p-8 md:p-10 flex items-center">
              <div className="w-full max-w-xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">Contact Admin</h2>
                <p className="text-slate-500 text-lg mb-6">Submit your support request below</p>

                <form onSubmit={handleRequestSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="registerNumber" className="block text-sm font-semibold text-slate-700 mb-2">
                      Register Number
                    </label>
                    <input
                      id="registerNumber"
                      name="registerNumber"
                      value={requestForm.registerNumber}
                      onChange={handleRequestChange}
                      required
                      placeholder="Enter register number"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-base outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      College Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={requestForm.email}
                      onChange={handleRequestChange}
                      required
                      placeholder="e.g. student@college.edu"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-base outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="courseName" className="block text-sm font-semibold text-slate-700 mb-2">
                      Course Name
                    </label>
                    <input
                      id="courseName"
                      name="courseName"
                      value={requestForm.courseName}
                      onChange={handleRequestChange}
                      required
                      placeholder="Enter your course name"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-base outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="issueType" className="block text-sm font-semibold text-slate-700 mb-2">
                      Select Issue Type
                    </label>
                    <select
                      id="issueType"
                      name="issueType"
                      value={requestForm.issueType}
                      onChange={handleRequestChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-base outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                    >
                      <option value="">Select Issue Type</option>
                      <option value="Account Access">Account Access</option>
                      <option value="Forgot Password">Forgot Password</option>
                      <option value="Course Enrollment">Course Enrollment</option>
                      <option value="Technical Issue">Technical Issue</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-3 rounded-xl transition"
                  >
                    Submit Request
                  </button>

                  <div className="text-center pt-1">
                    <button
                      type="button"
                      onClick={handleBackToLogin}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 text-lg font-medium"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle className="w-14 h-14 text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted Successfully</h2>
          <p className="text-gray-600 mb-6">
            Your support request has been sent to the admin. You will be notified after review.
          </p>
          <div className="space-y-3">
            <button
              type="button"
              onClick={handleCreateAnother}
              className="w-full border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50"
            >
              Submit Another Request
            </button>
            <button
              type="button"
              onClick={handleBackToLogin}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg"
            >
              Back to Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactAdminPage;