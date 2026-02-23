import React from 'react';
import { Star, ThumbsUp, ThumbsDown, MessageSquare, TrendingUp, Users } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const FeedbackCollection = () => {
  const feedbackData = [
    {
      id: 1,
      ticketId: 'TICK-2026-0156',
      userName: 'Rahul Kumar',
      category: 'Technical Issues',
      rating: 5,
      sentiment: 'positive',
      comment: 'Very quick response and solution was effective. Great support!',
      timestamp: '2026-01-29 11:50 AM',
      helpful: true,
      agentName: 'John Doe'
    },
    {
      id: 2,
      ticketId: 'TICK-2026-0155',
      userName: 'Priya Sharma',
      category: 'Account & Access',
      rating: 4,
      sentiment: 'positive',
      comment: 'Issue resolved but took a bit longer than expected.',
      timestamp: '2026-01-29 09:20 AM',
      helpful: true,
      agentName: 'Sarah Smith'
    },
    {
      id: 3,
      ticketId: 'TICK-2026-0154',
      userName: 'Amit Patel',
      category: 'Assessment & Grading',
      rating: 5,
      sentiment: 'positive',
      comment: 'Excellent support! They recovered my quiz submission perfectly.',
      timestamp: '2026-01-28 05:35 PM',
      helpful: true,
      agentName: 'Mike Johnson'
    },
    {
      id: 4,
      ticketId: 'TICK-2026-0153',
      userName: 'Sneha Reddy',
      category: 'Certificates',
      rating: 3,
      sentiment: 'neutral',
      comment: 'Problem solved but the process was confusing.',
      timestamp: '2026-01-28 12:15 PM',
      helpful: false,
      agentName: 'John Doe'
    }
  ];

  const ratingDistribution = [
    { rating: '5 Star', count: 245, percentage: 58, color: '#10b981' },
    { rating: '4 Star', count: 124, percentage: 29, color: '#3b82f6' },
    { rating: '3 Star', count: 42, percentage: 10, color: '#f59e0b' },
    { rating: '2 Star', count: 8, percentage: 2, color: '#ef4444' },
    { rating: '1 Star', count: 4, percentage: 1, color: '#991b1b' }
  ];

  const weeklyTrend = [
    { week: 'Week 1', avgRating: 4.2 },
    { week: 'Week 2', avgRating: 4.5 },
    { week: 'Week 3', avgRating: 4.6 },
    { week: 'Week 4', avgRating: 4.8 }
  ];

  const stats = [
    { label: 'Total Feedback', value: '423', color: 'blue' },
    { label: 'Avg Rating', value: '4.6/5', color: 'green' },
    { label: 'Positive', value: '94%', color: 'purple' },
    { label: 'Response Rate', value: '87%', color: 'orange' }
  ];

  const getRatingStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const getSentimentBadge = (sentiment) => {
    if (sentiment === 'positive') return 'bg-green-100 text-green-700';
    if (sentiment === 'neutral') return 'bg-orange-100 text-orange-700';
    return 'bg-red-100 text-red-700';
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Feedback Collection</h1>
        <p className="text-gray-600 mt-1">User satisfaction and feedback analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Rating Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Rating Distribution</h3>
          <div className="space-y-3">
            {ratingDistribution.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{item.rating}</span>
                  <span className="text-sm text-gray-600">{item.count} ({item.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full"
                    style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rating Trend */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Rating Trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={weeklyTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis domain={[0, 5]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="avgRating" stroke="#10b981" strokeWidth={2} name="Avg Rating" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Feedback</h3>
        <div className="space-y-4">
          {feedbackData.map((feedback) => (
            <div key={feedback.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      {feedback.userName.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="font-semibold text-gray-900">{feedback.userName}</p>
                      <span className="text-sm text-gray-500">on {feedback.ticketId}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg">{getRatingStars(feedback.rating)}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getSentimentBadge(feedback.sentiment)}`}>
                        {feedback.sentiment}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  {feedback.helpful ? (
                    <div className="flex items-center text-green-600">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      <span className="text-xs font-semibold">Helpful</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-red-600">
                      <ThumbsDown className="w-4 h-4 mr-1" />
                      <span className="text-xs font-semibold">Not Helpful</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg mb-2">
                <div className="flex items-start space-x-2">
                  <MessageSquare className="w-4 h-4 text-gray-400 mt-1" />
                  <p className="text-sm text-gray-700 italic">"{feedback.comment}"</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  Handled by: {feedback.agentName}
                </span>
                <span>{feedback.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackCollection;
