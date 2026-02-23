import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const formatBreadcrumb = (str) => {
    return str
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
      <Link to="/" className="hover:text-gray-900 flex items-center gap-1">
        <Home className="w-4 h-4" />
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
          <React.Fragment key={to}>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {isLast ? (
              <span className="text-gray-900 font-medium">{formatBreadcrumb(value)}</span>
            ) : (
              <Link to={to} className="hover:text-gray-900">
                {formatBreadcrumb(value)}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
