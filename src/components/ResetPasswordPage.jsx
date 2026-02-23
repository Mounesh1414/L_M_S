import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, CheckCircle, X, Check } from 'lucide-react';

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState({
    minLength: false,
    hasUppercase: false,
    hasNumber: false,
    hasSpecial: false
  });

  // Real-time password validation
  useEffect(() => {
    const password = formData.newPassword;
    setPasswordStrength({
      minLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    });
  }, [formData.newPassword]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear errors when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Check if passwords match
    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Check password strength
    if (!Object.values(passwordStrength).every(Boolean)) {
      newErrors.newPassword = 'Password does not meet all requirements';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      // Auto redirect after 3 seconds
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    }, 1500);
  };

  const PasswordRequirement = ({ met, text }) => (
    <div className={`flex items-center space-x-2 text-sm ${met ? 'text-green-600' : 'text-gray-500'}`}>
      {met ? (
        <Check className="w-4 h-4" />
      ) : (
        <X className="w-4 h-4" />
      )}
      <span>{text}</span>
    </div>
  );

  const getPasswordStrengthPercentage = () => {
    const metRequirements = Object.values(passwordStrength).filter(Boolean).length;
    return (metRequirements / 4) * 100;
  };

  const getPasswordStrengthColor = () => {
    const percentage = getPasswordStrengthPercentage();
    if (percentage === 100) return 'bg-green-500';
    if (percentage >= 75) return 'bg-yellow-500';
    if (percentage >= 50) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getPasswordStrengthText = () => {
    const percentage = getPasswordStrengthPercentage();
    if (percentage === 100) return 'Strong';
    if (percentage >= 75) return 'Good';
    if (percentage >= 50) return 'Fair';
    return 'Weak';
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full animate-bounce">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
            </div>

            {/* Success Message */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Password Reset Successful!
              </h2>
              <p className="text-gray-600 mb-4">
                Your password has been reset successfully.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-green-800">
                <p>
                  🎉 You can now log in with your new password
                </p>
              </div>
            </div>

            {/* Redirect Message */}
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-4">
                Redirecting to login page in 3 seconds...
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div className="bg-indigo-600 h-2 rounded-full animate-progress" style={{ animation: 'progress 3s linear' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-indigo-100 p-4 rounded-full">
                <Lock className="w-12 h-12 text-indigo-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Reset Password
            </h2>
            <p className="text-gray-600">
              Create a strong password to secure your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* New Password Input */}
            <div>
              <label 
                htmlFor="newPassword" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${
                    errors.newPassword ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 outline-none pr-12`}
                  placeholder="Enter new password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showNewPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Password Strength Indicator */}
              {formData.newPassword && (
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Password Strength:</span>
                    <span className={`text-sm font-semibold ${
                      getPasswordStrengthPercentage() === 100 ? 'text-green-600' : 
                      getPasswordStrengthPercentage() >= 75 ? 'text-yellow-600' : 
                      getPasswordStrengthPercentage() >= 50 ? 'text-orange-600' : 'text-red-600'
                    }`}>
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                      style={{ width: `${getPasswordStrengthPercentage()}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {errors.newPassword && (
                <p className="mt-2 text-sm text-red-600">{errors.newPassword}</p>
              )}
            </div>

            {/* Confirm Password Input */}
            <div>
              <label 
                htmlFor="confirmPassword" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 outline-none pr-12`}
                  placeholder="Confirm new password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Password Requirements */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <p className="text-sm font-semibold text-gray-700 mb-3">Password must contain:</p>
              <PasswordRequirement 
                met={passwordStrength.minLength} 
                text="At least 8 characters" 
              />
              <PasswordRequirement 
                met={passwordStrength.hasUppercase} 
                text="One uppercase letter" 
              />
              <PasswordRequirement 
                met={passwordStrength.hasNumber} 
                text="One number" 
              />
              <PasswordRequirement 
                met={passwordStrength.hasSpecial} 
                text="One special character (!@#$%^&*)" 
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !Object.values(passwordStrength).every(Boolean)}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Resetting Password...
                </span>
              ) : (
                'Reset Password'
              )}
            </button>
          </form>

          {/* Security Note */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-xs text-gray-700">
                🔒 Your password is encrypted and secure. We'll never share it with anyone.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        .animate-progress {
          animation: progress 3s linear;
        }
      `}</style>
    </div>
  );
};

export default ResetPasswordPage;
