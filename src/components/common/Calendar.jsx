import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, Clock, MapPin, Users, Video, X, Edit, Trash2 } from 'lucide-react';

const Calendar = ({ roleColor = 'blue' }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState('month'); // month, week, day
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Team Meeting',
      date: new Date(),
      startTime: '10:00 AM',
      endTime: '11:00 AM',
      type: 'meeting',
      location: 'Room 301',
      attendees: ['John Doe', 'Jane Smith'],
      color: 'blue',
    },
    {
      id: 2,
      title: 'Assignment Deadline',
      date: new Date(new Date().setDate(new Date().getDate() + 2)),
      startTime: '11:59 PM',
      endTime: '11:59 PM',
      type: 'deadline',
      location: 'Online',
      color: 'red',
    },
  ]);

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const changeMonth = (offset) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const hasEvent = (day) => {
    return events.some((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === day &&
        eventDate.getMonth() === currentDate.getMonth() &&
        eventDate.getFullYear() === currentDate.getFullYear()
      );
    });
  };

  const getEventsByDate = (date) => {
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      );
    });
  };

  const renderCalendarDays = () => {
    const days = [];
    const totalDays = daysInMonth(currentDate);
    const firstDay = firstDayOfMonth(currentDate);

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    // Days of the month
    for (let day = 1; day <= totalDays; day++) {
      const dateObj = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dayEvents = getEventsByDate(dateObj);

      days.push(
        <div
          key={day}
          onClick={() => setSelectedDate(dateObj)}
          className={`p-2 min-h-[80px] border border-gray-200 cursor-pointer transition-colors ${
            isToday(day)
              ? `bg-${roleColor}-50 border-${roleColor}-500`
              : 'hover:bg-gray-50'
          } ${
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentDate.getMonth()
              ? 'ring-2 ring-blue-500'
              : ''
          }`}
        >
          <div className={`text-sm font-semibold ${isToday(day) ? `text-${roleColor}-600` : 'text-gray-700'}`}>
            {day}
          </div>
          <div className="mt-1 space-y-1">
            {dayEvents.slice(0, 2).map((event) => (
              <div
                key={event.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedEvent(event);
                  setShowEventModal(true);
                }}
                className={`text-xs px-1 py-0.5 rounded bg-${event.color}-100 text-${event.color}-700 truncate`}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-xs text-gray-500">+{dayEvents.length - 2} more</div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-900">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => changeMonth(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentDate(new Date())}
              className="px-3 py-1 text-sm font-medium hover:bg-gray-100 rounded-lg transition-colors"
            >
              Today
            </button>
            <button
              onClick={() => changeMonth(1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <button
          onClick={() => {
            setSelectedEvent(null);
            setShowEventModal(true);
          }}
          className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-${roleColor}-600 to-${roleColor}-700 text-white rounded-lg hover:shadow-lg transition-all`}
        >
          <Plus className="w-5 h-5" />
          New Event
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-0 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="p-2 text-center font-semibold text-gray-600 text-sm">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-0 border-t border-l border-gray-200">
        {renderCalendarDays()}
      </div>

      {/* Selected date events */}
      {selectedDate && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-3">
            Events on {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </h3>
          {getEventsByDate(selectedDate).length === 0 ? (
            <p className="text-gray-500 text-sm">No events scheduled</p>
          ) : (
            <div className="space-y-2">
              {getEventsByDate(selectedDate).map((event) => (
                <div
                  key={event.id}
                  onClick={() => {
                    setSelectedEvent(event);
                    setShowEventModal(true);
                  }}
                  className="flex items-center justify-between p-3 bg-white rounded-lg cursor-pointer hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-1 h-12 bg-${event.color}-500 rounded-full`}></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{event.title}</h4>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {event.startTime} - {event.endTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Edit className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Event Modal */}
      {showEventModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                {selectedEvent ? 'Event Details' : 'Create New Event'}
              </h3>
              <button
                onClick={() => {
                  setShowEventModal(false);
                  setSelectedEvent(null);
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {selectedEvent ? (
              <div className="space-y-4">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">{selectedEvent.title}</h4>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>{selectedEvent.startTime} - {selectedEvent.endTime}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>{selectedEvent.location}</span>
                </div>
                {selectedEvent.attendees && (
                  <div>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Users className="w-5 h-5" />
                      <span>Attendees</span>
                    </div>
                    <div className="ml-7 space-y-1">
                      {selectedEvent.attendees.map((attendee, idx) => (
                        <div key={idx} className="text-sm text-gray-700">{attendee}</div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex gap-2 pt-4">
                  <button className={`flex-1 py-2 bg-${roleColor}-600 text-white rounded-lg hover:bg-${roleColor}-700 transition-colors`}>
                    Join Meeting
                  </button>
                  <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors">
                    Edit
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter event title"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
                    <input
                      type="time"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
                    <input
                      type="time"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter location"
                  />
                </div>
                <div className="flex gap-2 pt-4">
                  <button
                    type="submit"
                    className={`flex-1 py-2 bg-${roleColor}-600 text-white rounded-lg hover:bg-${roleColor}-700 transition-colors`}
                  >
                    Create Event
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowEventModal(false)}
                    className="px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
