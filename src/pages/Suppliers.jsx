
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Users, Plus, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Suppliers = () => {
  useEffect(() => {
    document.title = 'Gold Suppliers';
  }, []);

  // Mock suppliers data
  const suppliers = [
    { 
      id: 1, 
      name: 'Golden Mines Ltd.', 
      contact: 'John Smith', 
      email: 'john@goldenmines.com', 
      phone: '+1 (555) 123-4567', 
      address: '123 Gold St, New York, NY 10001',
      items: 28,
      lastDelivery: '3 days ago',
      rating: 5
    },
    { 
      id: 2, 
      name: 'Pure Gold Imports', 
      contact: 'Sarah Johnson', 
      email: 'sarah@puregold.com', 
      phone: '+1 (555) 987-6543', 
      address: '456 Silver Ave, Los Angeles, CA 90001',
      items: 15,
      lastDelivery: '1 week ago',
      rating: 4
    },
    { 
      id: 3, 
      name: 'Precious Metals Co.', 
      contact: 'Michael Brown', 
      email: 'michael@preciousmetals.com', 
      phone: '+1 (555) 456-7890', 
      address: '789 Platinum Blvd, Chicago, IL 60007',
      items: 42,
      lastDelivery: '2 days ago',
      rating: 5
    },
    { 
      id: 4, 
      name: 'Gold & Silver Traders', 
      contact: 'Emily Wilson', 
      email: 'emily@gstraders.com', 
      phone: '+1 (555) 234-5678', 
      address: '321 Jewelry Lane, Miami, FL 33101',
      items: 9,
      lastDelivery: '2 weeks ago',
      rating: 3
    },
  ];

  const renderRating = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <Users className="mr-3 text-blue-600" size={24} />
            <h1 className="text-3xl font-bold text-gray-900">Gold Suppliers</h1>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center">
            <Plus size={18} className="mr-2" />
            Add Supplier
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {suppliers.map((supplier, i) => (
            <motion.div
              key={supplier.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{supplier.name}</h3>
                    <p className="text-sm text-gray-500">Contact: {supplier.contact}</p>
                  </div>
                  <div className="flex items-center">
                    {renderRating(supplier.rating)}
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Phone size={16} className="mr-2 text-gray-400" />
                    {supplier.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Mail size={16} className="mr-2 text-gray-400" />
                    <a href={`mailto:${supplier.email}`} className="text-blue-600 hover:underline">{supplier.email}</a>
                  </div>
                  <div className="flex items-start text-sm text-gray-500">
                    <MapPin size={16} className="mr-2 mt-1 flex-shrink-0 text-gray-400" />
                    <span>{supplier.address}</span>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between items-center text-sm">
                  <div>
                    <span className="font-medium text-gray-900">{supplier.items}</span> items supplied
                  </div>
                  <div>
                    Last delivery: <span className="font-medium text-gray-900">{supplier.lastDelivery}</span>
                  </div>
                </div>
                
                <div className="mt-5 flex justify-between">
                  <button className="text-purple-600 text-sm font-medium hover:text-purple-800">View Orders</button>
                  <button className="text-sm font-medium text-gray-700 flex items-center">
                    Visit Website
                    <ExternalLink size={14} className="ml-1" />
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

export default Suppliers;
