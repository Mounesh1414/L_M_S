import React, { useState } from 'react';
import LoginPage from './LoginPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import ResetPasswordPage from './ResetPasswordPage';

const AuthFlow = () => {
  const [currentPage, setCurrentPage] = useState('login'); // 'login', 'forgot', 'reset'

  const handleForgotPassword = () => {
    setCurrentPage('forgot');
  };

  const handleBackToLogin = () => {
    setCurrentPage('login');
  };

  const handleResetSuccess = () => {
    setCurrentPage('login');
  };

  // You can navigate to reset page programmatically
  const handleNavigateToReset = () => {
    setCurrentPage('reset');
  };

  switch (currentPage) {
    case 'forgot':
      return <ForgotPasswordPage onBackToLogin={handleBackToLogin} />;
    case 'reset':
      return <ResetPasswordPage onResetSuccess={handleResetSuccess} />;
    case 'login':
    default:
      return <LoginPage onForgotPassword={handleForgotPassword} />;
  }
};

export default AuthFlow;
