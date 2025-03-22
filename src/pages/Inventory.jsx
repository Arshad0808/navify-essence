
import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { CircleDollarSign, Search, Plus, Filter, ArrowUpDown } from 'lucide-react';

const Inventory = () => {
  useEffect(() => {
    document.title = 'Gold Inventory';
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  // Mock inventory data
  const inventory = [
    { id: 1, name: '24K Gold Bar', type: 'Bar', weight: '500g', purity: '99.9%', value: '$30,125', location: 'Main Vault' },
    { id: 2, name: '22K Gold Chain', type: 'Jewelry', weight: '45g', purity: '91.6%', value: '$2,340', location: 'Display Case A' },
    { id: 3, name: '18K Gold Ring', type: 'Jewelry', weight: '12g', purity: '75.0%', value: '$520', location: 'Display Case B' },
    { id: 4, name: '24K Gold Coin', type: 'Coin', weight: '31.1g', purity: '99.9%', value: '$1,870', location: 'Coin Cabinet' },
    { id: 5, name: '24K Gold Biscuit', type: 'Bar', weight: '100g', purity: '99.9%', value: '$6,025', location: 'Main Vault' },
    { id: 6, name: '22K Gold Bangle', type: 'Jewelry', weight: '30g', purity: '91.6%', value: '$1,560', location: 'Display Case A' },
    { id: 7, name: '24K Gold Bar', type: 'Bar', weight: '250g', purity: '99.9%', value: '$15,062', location: 'Main Vault' },
    { id: 8, name: '20K Gold Necklace', type: 'Jewelry', weight: '55g', purity: '83.3%', value: '$2,570', location: 'Display Case C' },
  ];

  const filteredInventory = inventory.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
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
            <CircleDollarSign className="mr-3 text-yellow-500" size={24} />
            <h1 className="text-3xl font-bold text-gray-900">Gold Inventory</h1>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center">
            <Plus size={18} className="mr-2" />
            Add New Item
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 mb-6">
          <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Search inventory..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex space-x-2">
              <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
              <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                Sort
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purity</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredInventory.map((item, i) => (
                  <motion.tr 
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        item.type === 'Bar' ? 'bg-yellow-100 text-yellow-800' :
                        item.type === 'Jewelry' ? 'bg-purple-100 text-purple-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {item.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.weight}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.purity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{item.value}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-purple-600 hover:text-purple-900 mr-3">Edit</button>
                      <button className="text-gray-600 hover:text-gray-900">View</button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">{filteredInventory.length}</span> of <span className="font-medium">{inventory.length}</span> items
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

export default Inventory;
