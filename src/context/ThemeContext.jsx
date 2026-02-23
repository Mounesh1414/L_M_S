import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const getIsDarkByTime = () => {
  const currentHour = new Date().getHours();
  return currentHour >= 18 || currentHour < 6;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(getIsDarkByTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsDark(getIsDarkByTime());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const setTheme = (theme) => setIsDark(theme === 'dark');

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
