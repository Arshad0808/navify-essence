
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Reports = () => {
  useEffect(() => {
    document.title = 'Reports';
  }, []);

  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 900 },
    { name: 'Jul', value: 750 },
  ];

  const stats = [
    { id: 1, name: 'Total Revenue', value: '$45,231.89', change: 'increase', percent: '20.1%' },
    { id: 2, name: 'Active Users', value: '2,344', change: 'decrease', percent: '3.2%' },
    { id: 3, name: 'Conversion Rate', value: '12.3%', change: 'increase', percent: '5.4%' },
    { id: 4, name: 'Average Session', value: '2m 14s', change: 'increase', percent: '1.7%' },
  ];

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-6 flex items-center">
          <BarChart3 className="mr-3 text-blue-600" size={24} />
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-2 rounded-full ${
                  stat.change === 'increase' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {stat.change === 'increase' ? (
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-red-600" />
                  )}
                </div>
              </div>
              <div className="mt-2 flex items-center">
                <span className={`text-sm font-medium ${
                  stat.change === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.percent}
                </span>
                <span className="text-sm text-gray-500 ml-1">from last month</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-gray-900">Monthly Performance</h3>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                View Full Report <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#5842DF" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Reports;
