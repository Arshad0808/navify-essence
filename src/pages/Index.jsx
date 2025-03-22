
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { CircleDollarSign, ArrowUpRight, ArrowDownRight, Users, ArrowLeftRight, Scale } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    document.title = 'Gold Inventory Management';
  }, []);

  const stats = [
    { id: 1, name: 'Total Gold (g)', value: '1,285', change: 'increase', percent: '12.5%', icon: <Scale className="h-6 w-6 text-yellow-500" /> },
    { id: 2, name: 'Gold Value (USD)', value: '$82,450', change: 'increase', percent: '8.2%', icon: <CircleDollarSign className="h-6 w-6 text-green-500" /> },
    { id: 3, name: 'Active Suppliers', value: '12', change: 'same', percent: '0%', icon: <Users className="h-6 w-6 text-blue-500" /> },
    { id: 4, name: 'Recent Transactions', value: '24', change: 'decrease', percent: '3.1%', icon: <ArrowLeftRight className="h-6 w-6 text-purple-500" /> },
  ];

  const recentItems = [
    { id: 1, name: '24K Gold Bar', category: 'Bars', weight: '500g', purity: '99.9%', arrival: '2 days ago' },
    { id: 2, name: '22K Gold Chain', category: 'Jewelry', weight: '45g', purity: '91.6%', arrival: '1 week ago' },
    { id: 3, name: '18K Gold Ring', category: 'Jewelry', weight: '12g', purity: '75.0%', arrival: '3 days ago' },
    { id: 4, name: '24K Gold Coin', category: 'Coins', weight: '31.1g', purity: '99.9%', arrival: '5 hours ago' },
  ];

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Gold Inventory Dashboard</h1>
          <p className="mt-2 text-sm text-gray-600">
            Welcome back, here's an overview of your gold inventory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
                <div className="p-2 rounded-full bg-gray-50">
                  {stat.icon}
                </div>
              </div>
              <div className="mt-2 flex items-center">
                {stat.change !== 'same' && (
                  <span className={`text-sm font-medium ${
                    stat.change === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change === 'increase' ? (
                      <ArrowUpRight className="inline h-4 w-4 mr-1" />
                    ) : (
                      <ArrowDownRight className="inline h-4 w-4 mr-1" />
                    )}
                    {stat.percent}
                  </span>
                )}
                {stat.change === 'same' && (
                  <span className="text-sm font-medium text-gray-500">
                    No change
                  </span>
                )}
                <span className="text-sm text-gray-500 ml-1">from last month</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 mb-6">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Recent Inventory Additions</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purity</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Arrival</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentItems.map((item, i) => (
                  <motion.tr 
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.weight}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.purity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.arrival}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Gold Price Trend</h2>
            </div>
            <div className="p-6">
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">Gold price chart will be displayed here</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Inventory Distribution</h2>
            </div>
            <div className="p-6">
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">Category distribution chart will be displayed here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Index;
