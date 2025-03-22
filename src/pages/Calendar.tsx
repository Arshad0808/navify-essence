
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon } from 'lucide-react';

const Calendar = () => {
  useEffect(() => {
    document.title = 'Calendar';
  }, []);

  // Generate days for the calendar
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Sample events
  const events = [
    { id: 1, title: 'Team Meeting', date: 5, type: 'work' },
    { id: 2, title: 'Project Deadline', date: 15, type: 'important' },
    { id: 3, title: 'Client Call', date: 8, type: 'work' },
    { id: 4, title: 'Lunch with Team', date: 12, type: 'social' },
    { id: 5, title: 'Review Session', date: 20, type: 'work' },
  ];

  const getEventForDay = (day) => {
    return events.find(event => event.date === day);
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-6 flex items-center">
          <CalendarIcon className="mr-3 text-blue-600" size={24} />
          <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">October 2023</h2>
              <div className="flex space-x-2">
                <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-2">
              {weekdays.map((day) => (
                <div key={day} className="text-center text-sm font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {days.map((day) => {
                const event = getEventForDay(day);
                return (
                  <motion.div
                    key={day}
                    className={`aspect-square p-2 rounded-lg border ${event ? 'border-blue-200 bg-blue-50' : 'border-gray-200'} hover:border-blue-300 transition-colors cursor-pointer relative`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-sm font-medium text-gray-700">{day}</div>
                    {event && (
                      <div className={`mt-1 text-xs font-medium p-1 rounded ${
                        event.type === 'work' ? 'bg-blue-100 text-blue-800' :
                        event.type === 'important' ? 'bg-red-100 text-red-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {event.title}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Calendar;
