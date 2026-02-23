import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { assessmentAPI } from '../../services/api';
import {
  User, Mail, Phone, Calendar, MapPin, GraduationCap, Briefcase, 
  Trophy, Users as UsersIcon, Target, CheckCircle, AlertCircle
} from 'lucide-react';

const StudentProfileForm = ({ onComplete }) => {
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    userId: user?.id || '',
    // Personal Information
    dateOfBirth: '',
    age: '',
    classLevel: '',
    gender: '',
    city: '',
    state: '',
    country: 'India',
    
    // Educational Details
    highestEducation: '',
    
    // 10th Class
    tenthBoard: '',
    tenthYearOfPassing: '',
    tenthPercentage: '',
    
    // 12th Class
    twelfthStream: '',
    twelfthYearOfPassing: '',
    twelfthPercentage: '',
    
    // Undergraduate
    ugDegree: '',
    ugStream: '',
    ugCollege: '',
    ugYearOfPassing: '',
    ugPercentage: '',
    
    // Postgraduate
    pgDegree: '',
    pgStream: '',
    pgCollege: '',
    pgYearOfPassing: '',
    pgPercentage: '',
    
    // Work Experience
    yearsOfExperience: 0,
    
    // Sports & Clubs
    sportsParticipation: [],
    clubMemberships: [],
    
    // Career Preferences
    preferredCareerTypes: [],
    interestedCareerClusters: [],
    targetJobRoles: [],
    interestedExams: [],
    willingToRelocate: false,
    
    // Goals
    shortTermGoal: '',
    longTermGoal: '',
    
    // Preferences
    emailNotifications: true,
    pushNotifications: true,
    languagePreference: 'English',
    dataConsent: false,
  });

  const classLevels = [
    'School Student (9th-10th)', 'School Student (11th-12th)',
    'Undergraduate Student', 'Postgraduate Student',
    'Working Professional (0-2 years)', 'Working Professional (2-5 years)',
    'Working Professional (5+ years)', 'Unemployed/Job Seeker'
  ];

  const educationLevels = [
    '10th Standard', '12th Standard', 'Diploma', 
    'Undergraduate (UG)', 'Postgraduate (PG)', 'Doctorate (PhD)'
  ];

  const sportsList = [
    'Cricket', 'Football', 'Basketball', 'Badminton', 'Tennis',
    'Table Tennis', 'Swimming', 'Athletics', 'Volleyball', 'Hockey',
    'Kabaddi', 'Chess', 'Martial Arts', 'Yoga', 'Gymnastics', 'Other Sports'
  ];

  const clubsList = [
    'Debate/MUN Club', 'Drama/Theatre Club', 'Music/Band Club',
    'Art/Craft Club', 'Science Club', 'Robotics/Tech Club',
    'Literary/Writing Club', 'Photography Club', 'Dance Club',
    'Sports Team Captain', 'Student Council', 'NCC/NSS',
    'Scouts/Guides', 'Environment Club', 'Social Service Club',
    'Entrepreneurship Club', 'Coding Club', 'Quiz Club', 'Other Clubs'
  ];

  const careerTypes = [
    'Private Sector', 'Government', 'Higher Studies', 'Entrepreneurship'
  ];

  const careerClusters = [
    'Information Technology', 'Health Science', 'Business & Finance',
    'Engineering & Manufacturing', 'Arts & Design', 'Education & Training',
    'Law & Public Safety', 'Science & Research', 'Hospitality & Tourism',
    'Agriculture & Environment', 'Media & Communications', 'Social Services',
    'Government Jobs & Exams', 'Defence & Security Services', 'Other'
  ];

  const jobRoles = [
    'Data Scientist', 'Software Engineer', 'Business Analyst',
    'Product Manager', 'AI/ML Engineer', 'Full Stack Developer',
    'Digital Marketing Manager', 'UX/UI Designer', 'Financial Analyst',
    'Management Consultant', 'Data Engineer', 'DevOps Engineer',
    'Cloud Architect', 'Cybersecurity Analyst', 'Business Intelligence Analyst',
    'AI Researcher', 'Mobile App Developer', 'Content Strategist',
    'Sales Manager', 'HR Manager'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleMultiSelect = (name, value) => {
    setFormData(prev => {
      const current = prev[name] || [];
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [name]: updated };
    });
  };

  const calculateAge = (dob) => {
    if (!dob) return '';
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  useEffect(() => {
    if (formData.dateOfBirth) {
      const age = calculateAge(formData.dateOfBirth);
      setFormData(prev => ({ ...prev, age }));
    }
  }, [formData.dateOfBirth]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.dataConsent) {
      setError('Please consent to data collection to proceed');
      return;
    }

    try {
      setLoading(true);
      await assessmentAPI.createOrUpdateProfile(formData);
      if (onComplete) onComplete();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save profile');
    } finally {
      setLoading(false);
    }
  };

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
        <User className="w-6 h-6 text-indigo-600" />
        Personal Information
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
          {formData.age && <p className="mt-1 text-sm text-gray-500">Age: {formData.age} years</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Class/Level <span className="text-red-500">*</span>
          </label>
          <select
            name="classLevel"
            value={formData.classLevel}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Select class/level</option>
            {classLevels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender <span className="text-red-500">*</span>
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your city"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            State <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your state"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Country
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
    </div>
  );

  const renderEducationalDetails = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
        <GraduationCap className="w-6 h-6 text-indigo-600" />
        Educational Details
      </h3>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Highest Education Completed <span className="text-red-500">*</span>
        </label>
        <select
          name="highestEducation"
          value={formData.highestEducation}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          required
        >
          <option value="">Select highest education</option>
          {educationLevels.map(level => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
      </div>

      {/* 10th Class Details */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-4">10th Standard Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Board</label>
            <input
              type="text"
              name="tenthBoard"
              value={formData.tenthBoard}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., CBSE, State Board"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Year of Passing</label>
            <input
              type="text"
              name="tenthYearOfPassing"
              value={formData.tenthYearOfPassing}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., 2015"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Percentage</label>
            <input
              type="number"
              step="0.01"
              name="tenthPercentage"
              value={formData.tenthPercentage}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., 87.5"
            />
          </div>
        </div>
      </div>

      {/* 12th Class Details */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-4">12th Standard Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Stream</label>
            <select
              name="twelfthStream"
              value={formData.twelfthStream}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select stream</option>
              <option value="Science (PCM)">Science (PCM)</option>
              <option value="Science (PCB)">Science (PCB)</option>
              <option value="Commerce">Commerce</option>
              <option value="Arts">Arts</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Year of Passing</label>
            <input
              type="text"
              name="twelfthYearOfPassing"
              value={formData.twelfthYearOfPassing}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., 2017"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Percentage</label>
            <input
              type="number"
              step="0.01"
              name="twelfthPercentage"
              value={formData.twelfthPercentage}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., 75.5"
            />
          </div>
        </div>
      </div>

      {/* Undergraduate Details */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-4">Undergraduate (UG) Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Degree</label>
            <input
              type="text"
              name="ugDegree"
              value={formData.ugDegree}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., B.Tech / B.E."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Stream/Specialization</label>
            <input
              type="text"
              name="ugStream"
              value={formData.ugStream}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., Computer Science"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">College/University</label>
            <input
              type="text"
              name="ugCollege"
              value={formData.ugCollege}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., ABC University"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Year of Passing</label>
            <input
              type="text"
              name="ugYearOfPassing"
              value={formData.ugYearOfPassing}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., 2021"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Percentage/CGPA</label>
            <input
              type="number"
              step="0.01"
              name="ugPercentage"
              value={formData.ugPercentage}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., 78.8 or 8.5"
            />
          </div>
        </div>
      </div>

      {/* Postgraduate Details */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-4">Postgraduate (PG) Details (Optional)</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Degree</label>
            <input
              type="text"
              name="pgDegree"
              value={formData.pgDegree}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., MBA, M.Tech"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Stream/Specialization</label>
            <input
              type="text"
              name="pgStream"
              value={formData.pgStream}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., Data Science"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">College/University</label>
            <input
              type="text"
              name="pgCollege"
              value={formData.pgCollege}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., XYZ University"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Year of Passing</label>
            <input
              type="text"
              name="pgYearOfPassing"
              value={formData.pgYearOfPassing}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., 2023"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Percentage/CGPA</label>
            <input
              type="number"
              step="0.01"
              name="pgPercentage"
              value={formData.pgPercentage}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., 85.5 or 8.8"
            />
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Years of Experience <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          name="yearsOfExperience"
          value={formData.yearsOfExperience}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          min="0"
          placeholder="e.g., 3"
          required
        />
      </div>
    </div>
  );

  const renderExtracurricular = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
        <Trophy className="w-6 h-6 text-indigo-600" />
        Extracurricular Activities
      </h3>

      {/* Sports */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sports Participation
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {sportsList.map(sport => (
            <label key={sport} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.sportsParticipation.includes(sport)}
                onChange={() => handleMultiSelect('sportsParticipation', sport)}
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">{sport}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clubs */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Club Memberships
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {clubsList.map(club => (
            <label key={club} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.clubMemberships.includes(club)}
                onChange={() => handleMultiSelect('clubMemberships', club)}
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">{club}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCareerPreferences = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
        <Target className="w-6 h-6 text-indigo-600" />
        Career Preferences
      </h3>

      {/* Preferred Career Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Career Type <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {careerTypes.map(type => (
            <label key={type} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.preferredCareerTypes.includes(type)}
                onChange={() => handleMultiSelect('preferredCareerTypes', type)}
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Career Clusters */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Interested Career Clusters <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {careerClusters.map(cluster => (
            <label key={cluster} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.interestedCareerClusters.includes(cluster)}
                onChange={() => handleMultiSelect('interestedCareerClusters', cluster)}
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">{cluster}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Target Job Roles */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Target Job Roles <span className="text-red-500">*</span>
          <span className="text-xs text-gray-500"> (Select up to 3)</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {jobRoles.map(role => (
            <label key={role} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.targetJobRoles.includes(role)}
                onChange={() => {
                  if (formData.targetJobRoles.includes(role) || formData.targetJobRoles.length < 3) {
                    handleMultiSelect('targetJobRoles', role);
                  }
                }}
                disabled={!formData.targetJobRoles.includes(role) && formData.targetJobRoles.length >= 3}
                className="rounded text-indigo-600 focus:ring-indigo-500 disabled:opacity-50"
              />
              <span className="text-sm text-gray-700">{role}</span>
            </label>
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-600">
          Selected: {formData.targetJobRoles.length}/3
        </p>
      </div>

      {/* Willing to Relocate */}
      <div>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="willingToRelocate"
            checked={formData.willingToRelocate}
            onChange={handleInputChange}
            className="rounded text-indigo-600 focus:ring-indigo-500"
          />
          <span className="text-sm font-medium text-gray-700">Willing to Relocate</span>
        </label>
      </div>

      {/* Goals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Short-term Goal (6-12 months)
          </label>
          <textarea
            name="shortTermGoal"
            value={formData.shortTermGoal}
            onChange={handleInputChange}
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            placeholder="Describe your short-term career goals..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Long-term Goal (3-5 years)
          </label>
          <textarea
            name="longTermGoal"
            value={formData.longTermGoal}
            onChange={handleInputChange}
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            placeholder="Describe your long-term career vision..."
          />
        </div>
      </div>
    </div>
  );

  const renderConsent = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
        <CheckCircle className="w-6 h-6 text-indigo-600" />
        Preferences & Consent
      </h3>

      {/* Notification Preferences */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-4">Notification Preferences</h4>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              name="emailNotifications"
              checked={formData.emailNotifications}
              onChange={handleInputChange}
              className="rounded text-indigo-600 focus:ring-indigo-500"
            />
            <span className="text-sm text-gray-700">Email Notifications</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              name="pushNotifications"
              checked={formData.pushNotifications}
              onChange={handleInputChange}
              className="rounded text-indigo-600 focus:ring-indigo-500"
            />
            <span className="text-sm text-gray-700">Push Notifications</span>
          </label>
        </div>
      </div>

      {/* Language Preference */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Language Preference
        </label>
        <select
          name="languagePreference"
          value={formData.languagePreference}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Tamil">Tamil</option>
          <option value="Telugu">Telugu</option>
          <option value="Kannada">Kannada</option>
        </select>
      </div>

      {/* Data Consent */}
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            name="dataConsent"
            checked={formData.dataConsent}
            onChange={handleInputChange}
            className="mt-1 rounded text-indigo-600 focus:ring-indigo-500"
            required
          />
          <div>
            <span className="text-sm font-medium text-gray-900">
              Data Consent (Required) <span className="text-red-500">*</span>
            </span>
            <p className="text-xs text-gray-600 mt-1">
              I consent to the collection and processing of my personal data for career guidance 
              and assessment purposes as per the privacy policy. This data will be used to generate 
              AI-powered career reports and recommendations.
            </p>
          </div>
        </label>
      </div>
    </div>
  );

  const steps = [
    { title: 'Personal Info', component: renderPersonalInfo },
    { title: 'Education', component: renderEducationalDetails },
    { title: 'Extracurricular', component: renderExtracurricular },
    { title: 'Career Preferences', component: renderCareerPreferences },
    { title: 'Consent', component: renderConsent },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Profile</h2>
          <p className="text-gray-600">
            Help us understand you better to provide personalized career guidance
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`flex items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      currentStep > index + 1
                        ? 'bg-green-500 text-white'
                        : currentStep === index + 1
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {currentStep > index + 1 ? <CheckCircle className="w-6 h-6" /> : index + 1}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      currentStep > index + 1 ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {steps[currentStep - 1].component()}

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-between pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
              disabled={currentStep === 1}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={() => setCurrentStep(prev => Math.min(steps.length, prev + 1))}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading || !formData.dataConsent}
                className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Saving...' : 'Complete Profile'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentProfileForm;
