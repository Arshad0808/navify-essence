
import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { ArrowLeftRight, Filter, Search, Calendar, Download } from 'lucide-react';

const Transactions = () => {
  useEffect(() => {
    document.title = 'Gold Transactions';
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  // Mock transactions data
  const transactions = [
    { 
      id: 1, 
      date: '2023-10-15', 
      type: 'purchase', 
      item: '24K Gold Bar', 
      quantity: '500g', 
      price: '$30,125.00', 
      supplier: 'Golden Mines Ltd.',
      status: 'completed'
    },
    { 
      id: 2, 
      date: '2023-10-12', 
      type: 'sale', 
      item: '22K Gold Chain', 
      quantity: '45g', 
      price: '$2,520.00', 
      customer: 'Sarah Williams',
      status: 'completed'
    },
    { 
      id: 3, 
      date: '2023-10-10', 
      type: 'purchase', 
      item: '24K Gold Coins', 
      quantity: '250g', 
      price: '$15,062.50', 
      supplier: 'Pure Gold Imports',
      status: 'completed'
    },
    { 
      id: 4, 
      date: '2023-10-05', 
      type: 'sale', 
      item: '18K Gold Ring', 
      quantity: '12g', 
      price: '$545.00', 
      customer: 'Michael Johnson',
      status: 'completed'
    },
    { 
      id: 5, 
      date: '2023-10-01', 
      type: 'purchase', 
      item: 'Raw Gold', 
      quantity: '120g', 
      price: '$7,230.00', 
      supplier: 'Precious Metals Co.',
      status: 'pending'
    },
    { 
      id: 6, 
      date: '2023-09-28', 
      type: 'sale', 
      item: '24K Gold Bar', 
      quantity: '100g', 
      price: '$6,150.00', 
      customer: 'Robert Brown',
      status: 'completed'
    },
  ];

  const filteredTransactions = transactions
    .filter(transaction => 
      (filter === 'all' || transaction.type === filter) &&
      (transaction.item.toLowerCase().includes(searchTerm.toLowerCase()) || 
       (transaction.supplier && transaction.supplier.toLowerCase().includes(searchTerm.toLowerCase())) ||
       (transaction.customer && transaction.customer.toLowerCase().includes(searchTerm.toLowerCase())))
    );

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <ArrowLeftRight className="mr-3 text-green-600" size={24} />
            <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
          </div>
          <div className="flex space-x-2">
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center">
              <Calendar size={18} className="mr-2" />
              Date Range
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center">
              <Download size={18} className="mr-2" />
              Export
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 mb-6">
          <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row items-center gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Transactions</option>
                <option value="purchase">Purchases Only</option>
                <option value="sale">Sales Only</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier/Customer</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTransactions.map((transaction, i) => (
                  <motion.tr 
                    key={transaction.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(transaction.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        transaction.type === 'purchase' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {transaction.type === 'purchase' ? 'Purchase' : 'Sale'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{transaction.item}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{transaction.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {transaction.supplier || transaction.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        transaction.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {transaction.status === 'completed' ? 'Completed' : 'Pending'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-purple-600 hover:text-purple-900">View Details</button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">{filteredTransactions.length}</span> of <span className="font-medium">{transactions.length}</span> transactions
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white text-gray-700">Previous</button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white text-gray-700">Next</button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Transactions;
