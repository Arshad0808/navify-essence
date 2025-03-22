
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Users, Plus, Phone, Mail, MapPin, ExternalLink, Building, ShoppingBag } from 'lucide-react';

const Clients = () => {
  useEffect(() => {
    document.title = 'Gold Clients';
  }, []);

  // Mock clients data
  const clients = [
    { 
      id: 1, 
      name: 'Luxe Jewelers', 
      contact: 'Sarah Johnson', 
      email: 'sarah@luxejewelers.com', 
      phone: '+1 (555) 123-4567', 
      address: '123 Fifth Ave, New York, NY 10001',
      totalOrders: 28,
      lastOrder: '3 days ago',
      commission: '4.5%',
      status: 'Active'
    },
    { 
      id: 2, 
      name: 'Elite Goldsmith', 
      contact: 'Michael Brown', 
      email: 'michael@elitegoldsmith.com', 
      phone: '+1 (555) 987-6543', 
      address: '456 Rodeo Dr, Los Angeles, CA 90210',
      totalOrders: 15,
      lastOrder: '1 week ago',
      commission: '5%',
      status: 'Active'
    },
    { 
      id: 3, 
      name: 'Royal Gold Works', 
      contact: 'Jennifer Adams', 
      email: 'jennifer@royalgold.com', 
      phone: '+1 (555) 456-7890', 
      address: '789 Market St, San Francisco, CA 94103',
      totalOrders: 42,
      lastOrder: '2 days ago',
      commission: '4%',
      status: 'Active'
    },
    { 
      id: 4, 
      name: 'Prestige Jewelry', 
      contact: 'David Wilson', 
      email: 'david@prestigejewelry.com', 
      phone: '+1 (555) 234-5678', 
      address: '321 Michigan Ave, Chicago, IL 60601',
      totalOrders: 9,
      lastOrder: '2 weeks ago',
      commission: '3.5%',
      status: 'Inactive'
    },
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
            <Users className="mr-3 text-sidebar" size={24} />
            <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
          </div>
          <button className="bg-sidebar text-white px-4 py-2 rounded-md hover:bg-sidebar-dark transition-colors flex items-center justify-center">
            <Plus size={18} className="mr-2" />
            Add Client
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={client.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{client.name}</h3>
                    <p className="text-sm text-gray-500">Contact: {client.contact}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    client.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {client.status}
                  </span>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Phone size={16} className="mr-2 text-gray-400" />
                    {client.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Mail size={16} className="mr-2 text-gray-400" />
                    <a href={`mailto:${client.email}`} className="text-blue-600 hover:underline">{client.email}</a>
                  </div>
                  <div className="flex items-start text-sm text-gray-500">
                    <MapPin size={16} className="mr-2 mt-1 flex-shrink-0 text-gray-400" />
                    <span>{client.address}</span>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="text-xs text-gray-500 mb-1">
                      <ShoppingBag size={14} className="inline mr-1" />
                      Orders
                    </div>
                    <div className="font-semibold text-gray-900">{client.totalOrders}</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="text-xs text-gray-500 mb-1">Last Order</div>
                    <div className="font-semibold text-gray-900">{client.lastOrder}</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="text-xs text-gray-500 mb-1">Commission</div>
                    <div className="font-semibold text-sidebar-dark">{client.commission}</div>
                  </div>
                </div>
                
                <div className="mt-5 flex justify-between">
                  <button className="text-sidebar text-sm font-medium hover:text-sidebar-dark">View Orders</button>
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

export default Clients;
