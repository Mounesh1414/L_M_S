import React from 'react';
import { Bell, AlertTriangle, CheckCircle, Info, Server, Database, Cloud } from 'lucide-react';

const SystemAlerts = () => {
  const alerts = [
    {
      id: 1,
      type: 'critical',
      title: 'Database Connection Slow',
      message: 'Database response time exceeding threshold. Average query time: 2.5s (threshold: 1s)',
      source: 'Database Monitor',
      timestamp: '2026-01-29 11:45 AM',
      status: 'active',
      affectedUsers: 245
    },
    {
      id: 2,
      type: 'warning',
      title: 'High Server Load',
      message: 'Server CPU usage at 85%. Consider scaling resources during peak hours.',
      source: 'Server Monitor',
      timestamp: '2026-01-29 11:30 AM',
      status: 'active',
      affectedUsers: 0
    },
    {
      id: 3,
      type: 'info',
      title: 'Scheduled Maintenance',
      message: 'System maintenance scheduled for tonight 2:00 AM - 4:00 AM. Users notified.',
      source: 'Admin Console',
      timestamp: '2026-01-29 10:00 AM',
      status: 'scheduled',
      affectedUsers: 2450
    },
    {
      id: 4,
      type: 'success',
      title: 'Backup Completed',
      message: 'Daily database backup completed successfully. Size: 2.4 GB',
      source: 'Backup Service',
      timestamp: '2026-01-29 03:00 AM',
      status: 'resolved',
      affectedUsers: 0
    },
    {
      id: 5,
      type: 'critical',
      title: 'Video CDN Issues',
      message: 'Video delivery network experiencing high latency in Asia region. Investigating...',
      source: 'CDN Monitor',
      timestamp: '2026-01-29 09:15 AM',
      status: 'investigating',
      affectedUsers: 156
    },
    {
      id: 6,
      type: 'warning',
      title: 'Storage Capacity Warning',
      message: 'File storage at 78% capacity. Consider archiving old content or expanding storage.',
      source: 'Storage Monitor',
      timestamp: '2026-01-28 06:00 PM',
      status: 'active',
      affectedUsers: 0
    }
  ];

  const stats = [
    { label: 'Active Alerts', value: '4', color: 'red', icon: AlertTriangle },
    { label: 'Resolved Today', value: '12', color: 'green', icon: CheckCircle },
    { label: 'System Uptime', value: '99.8%', color: 'blue', icon: Server },
    { label: 'Affected Users', value: '401', color: 'orange', icon: Bell }
  ];

  const getAlertIcon = (type) => {
    if (type === 'critical') return <AlertTriangle className="w-5 h-5" />;
    if (type === 'warning') return <Info className="w-5 h-5" />;
    if (type === 'success') return <CheckCircle className="w-5 h-5" />;
    return <Bell className="w-5 h-5" />;
  };

  const getAlertColor = (type) => {
    if (type === 'critical') return 'bg-red-100 text-red-700 border-red-200';
    if (type === 'warning') return 'bg-orange-100 text-orange-700 border-orange-200';
    if (type === 'success') return 'bg-green-100 text-green-700 border-green-200';
    return 'bg-blue-100 text-blue-700 border-blue-200';
  };

  const getStatusBadge = (status) => {
    if (status === 'active') return 'bg-red-100 text-red-700';
    if (status === 'investigating') return 'bg-orange-100 text-orange-700';
    if (status === 'scheduled') return 'bg-blue-100 text-blue-700';
    return 'bg-green-100 text-green-700';
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">System Alerts</h1>
        <p className="text-gray-600 mt-1">Monitor system health and incidents</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <Icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className={`rounded-xl shadow-sm border-2 p-6 hover:shadow-lg transition-shadow ${getAlertColor(alert.type)}`}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start space-x-3 flex-1">
                <div className={`p-2 rounded-lg ${getAlertColor(alert.type)}`}>
                  {getAlertIcon(alert.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{alert.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${getStatusBadge(alert.status)}`}>
                      {alert.status}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">{alert.message}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center text-gray-600">
                      <Server className="w-4 h-4 mr-1" />
                      {alert.source}
                    </span>
                    <span className="text-gray-500">{alert.timestamp}</span>
                    {alert.affectedUsers > 0 && (
                      <span className="text-red-600 font-semibold">
                        {alert.affectedUsers} users affected
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {alert.status === 'active' && (
              <div className="flex gap-2 pt-3 border-t border-gray-200">
                <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                  Mark as Resolved
                </button>
                <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                  View Details
                </button>
                <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                  Notify Users
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemAlerts;
