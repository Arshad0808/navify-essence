
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Tags, Plus, Edit, Trash2 } from 'lucide-react';

const Categories = () => {
  useEffect(() => {
    document.title = 'Gold Categories';
  }, []);

  // Mock categories data
  const categories = [
    { id: 1, name: 'Gold Bars', description: '24K gold bars of various weights', items: 15, totalWeight: '1050g' },
    { id: 2, name: 'Gold Jewelry', description: 'Necklaces, rings, bracelets, etc.', items: 42, totalWeight: '386g' },
    { id: 3, name: 'Gold Coins', description: 'Collectible and investment coins', items: 28, totalWeight: '870g' },
    { id: 4, name: 'Raw Gold', description: 'Unprocessed gold nuggets and dust', items: 5, totalWeight: '120g' },
    { id: 5, name: 'Gold Bullion', description: 'Investment grade gold bullion', items: 8, totalWeight: '400g' },
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
            <Tags className="mr-3 text-purple-600" size={24} />
            <h1 className="text-3xl font-bold text-gray-900">Gold Categories</h1>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center">
            <Plus size={18} className="mr-2" />
            Add Category
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {categories.map((category, i) => (
            <motion.div
              key={category.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-500 hover:text-purple-600 rounded-full hover:bg-purple-50 transition-colors">
                      <Edit size={16} />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-red-600 rounded-full hover:bg-red-50 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                
                <p className="mt-2 text-sm text-gray-500">{category.description}</p>
                
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 uppercase">Items</div>
                    <div className="text-lg font-semibold text-gray-900">{category.items}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 uppercase">Total Weight</div>
                    <div className="text-lg font-semibold text-gray-900">{category.totalWeight}</div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <button className="text-purple-600 text-sm font-medium hover:text-purple-800">
                    View Inventory
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default Categories;
