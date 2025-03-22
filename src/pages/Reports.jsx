
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, TrendingDown, Download, Calendar, FileText } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, LineChart, Line } from 'recharts';

const Reports = () => {
  useEffect(() => {
    document.title = 'Gold Reports';
  }, []);

  // Mock data for reports
  const monthlyData = [
    { name: 'Jan', purchase: 1200, sale: 900 },
    { name: 'Feb', purchase: 900, sale: 1100 },
    { name: 'Mar', purchase: 1500, sale: 1300 },
    { name: 'Apr', purchase: 1800, sale: 1400 },
    { name: 'May', purchase: 1200, sale: 1500 },
    { name: 'Jun', purchase: 2100, sale: 1800 },
    { name: 'Jul', purchase: 1700, sale: 1600 },
  ];

  const inventoryData = [
    { name: 'Gold Bars', value: 45 },
    { name: 'Gold Jewelry', value: 30 },
    { name: 'Gold Coins', value: 15 },
    { name: 'Raw Gold', value: 10 },
  ];

  const priceData = [
    { name: 'Week 1', price: 1750 },
    { name: 'Week 2', price: 1780 },
    { name: 'Week 3', price: 1820 },
    { name: 'Week 4', price: 1795 },
    { name: 'Week 5', price: 1810 },
    { name: 'Week 6', price: 1850 },
    { name: 'Week 7', price: 1870 },
    { name: 'Week 8', price: 1890 },
  ];

  const COLORS = ['#FFBB28', '#9C27B0', '#0088FE', '#FF8042'];

  const stats = [
    { id: 1, name: 'Total Gold Value', value: '$82,450', change: 'increase', percent: '8.2%' },
    { id: 2, name: 'Monthly Purchases', value: '$35,210', change: 'increase', percent: '12.3%' },
    { id: 3, name: 'Monthly Sales', value: '$28,150', change: 'decrease', percent: '3.5%' },
    { id: 4, name: 'Profit Margin', value: '24.8%', change: 'increase', percent: '2.1%' },
  ];

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <BarChart3 className="mr-3 text-purple-600" size={24} />
            <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          </div>
          <div className="flex space-x-2">
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center">
              <Calendar size={18} className="mr-2" />
              Date Range
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center">
              <Download size={18} className="mr-2" />
              Export Report
            </button>
          </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <motion.div
            className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-medium text-gray-900">Transaction History</h3>
              <p className="text-sm text-gray-500 mt-1">Purchases vs Sales (grams)</p>
            </div>
            <div className="p-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={monthlyData}
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
                    <Legend />
                    <Bar dataKey="purchase" name="Purchased (g)" fill="#9C27B0" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="sale" name="Sold (g)" fill="#FFBB28" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-medium text-gray-900">Gold Price Trend</h3>
              <p className="text-sm text-gray-500 mt-1">Price per ounce (USD)</p>
            </div>
            <div className="p-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={priceData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis domain={['dataMin - 50', 'dataMax + 50']} />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#FFD700" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-medium text-gray-900">Inventory Distribution</h3>
              <p className="text-sm text-gray-500 mt-1">By category (%)</p>
            </div>
            <div className="p-6">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={inventoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {inventoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-medium text-gray-900">Recent Reports</h3>
            </div>
            <div className="p-6">
              <ul className="divide-y divide-gray-200">
                {[
                  { id: 1, title: 'Monthly Inventory Report', date: '2023-10-01', type: 'PDF' },
                  { id: 2, title: 'Q3 Financial Analysis', date: '2023-09-30', type: 'XLSX' },
                  { id: 3, title: 'Gold Price Forecast', date: '2023-09-15', type: 'PDF' },
                  { id: 4, title: 'Supplier Performance Report', date: '2023-09-10', type: 'PDF' },
                ].map((report, i) => (
                  <li key={report.id} className="py-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className={`h-8 w-8 mr-3 ${
                        report.type === 'PDF' ? 'text-red-500' : 'text-green-500'
                      }`} />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{report.title}</p>
                        <p className="text-sm text-gray-500">{new Date(report.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <button className="text-purple-600 hover:text-purple-900 text-sm font-medium flex items-center">
                      <Download size={16} className="mr-1" />
                      Download
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Reports;
