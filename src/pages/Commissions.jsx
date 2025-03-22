
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { PercentIcon, Plus, Filter, Download, ChevronDown, Users, Calendar, DollarSign } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Commissions = () => {
  useEffect(() => {
    document.title = 'Commissions';
  }, []);

  // Mock commission data
  const commissions = [
    { 
      id: 1, 
      client: 'Luxe Jewelers', 
      material: 'Raw Gold Ore (22K)', 
      weight: '500g',
      orderDate: '2023-11-15',
      orderValue: '$26,500',
      commissionRate: '4.5%',
      commissionAmount: '$1,192.50',
      status: 'Paid'
    },
    { 
      id: 2, 
      client: 'Elite Goldsmith', 
      material: 'Gold Nuggets (24K)', 
      weight: '750g',
      orderDate: '2023-11-20',
      orderValue: '$42,300',
      commissionRate: '5%',
      commissionAmount: '$2,115.00',
      status: 'Pending'
    },
    { 
      id: 3, 
      client: 'Royal Gold Works', 
      material: 'Gold Bars (24K)', 
      weight: '1kg',
      orderDate: '2023-11-25',
      orderValue: '$56,250',
      commissionRate: '4%',
      commissionAmount: '$2,250.00',
      status: 'Paid'
    },
    { 
      id: 4, 
      client: 'Prestige Jewelry', 
      material: 'Gold Dust (18K)', 
      weight: '350g',
      orderDate: '2023-12-01',
      orderValue: '$16,800',
      commissionRate: '3.5%',
      commissionAmount: '$588.00',
      status: 'Pending'
    },
    { 
      id: 5, 
      client: 'Luxe Jewelers', 
      material: 'Gold Bars (24K)', 
      weight: '500g',
      orderDate: '2023-12-05',
      orderValue: '$28,125',
      commissionRate: '4.5%',
      commissionAmount: '$1,265.63',
      status: 'Processing'
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
            <PercentIcon className="mr-3 text-sidebar" size={24} />
            <h1 className="text-3xl font-bold text-gray-900">Commissions</h1>
          </div>
          <div className="flex gap-2">
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center">
              <Download size={18} className="mr-2" />
              Export
            </button>
            <button className="bg-sidebar text-white px-4 py-2 rounded-md hover:bg-sidebar-dark transition-colors flex items-center justify-center">
              <Plus size={18} className="mr-2" />
              Add Commission
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border-b">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-500">Total Commissions (Month)</div>
              <div className="flex items-end">
                <div className="text-2xl font-bold text-gray-900">$12,450.75</div>
                <div className="ml-2 text-xs text-green-600 flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  8.2%
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-500">Pending Commissions</div>
              <div className="text-2xl font-bold text-gray-900">$4,325.50</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-500">Avg. Commission Rate</div>
              <div className="text-2xl font-bold text-gray-900">4.3%</div>
            </div>
          </div>

          <div className="p-4 flex flex-wrap gap-2 border-b">
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">Filter:</span>
              <button className="px-3 py-1 bg-gray-100 rounded-md text-sm flex items-center">
                Client
                <ChevronDown size={14} className="ml-1" />
              </button>
            </div>
            <button className="px-3 py-1 bg-gray-100 rounded-md text-sm flex items-center">
              Date Range
              <Calendar size={14} className="ml-1" />
            </button>
            <button className="px-3 py-1 bg-gray-100 rounded-md text-sm flex items-center">
              Status
              <ChevronDown size={14} className="ml-1" />
            </button>
            <button className="px-3 py-1 bg-sidebar-light rounded-md text-sm flex items-center text-sidebar-dark font-medium">
              Clear Filters
            </button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Material</TableHead>
                <TableHead>Order Date</TableHead>
                <TableHead>Order Value</TableHead>
                <TableHead>Commission Rate</TableHead>
                <TableHead>Commission</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {commissions.map((commission) => (
                <TableRow key={commission.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <Users size={14} className="mr-1 text-gray-400" />
                      {commission.client}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div>{commission.material}</div>
                      <div className="text-xs text-gray-500">{commission.weight}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1 text-gray-400" />
                      {commission.orderDate}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{commission.orderValue}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center text-sidebar-dark font-medium">
                      <PercentIcon size={14} className="mr-1" />
                      {commission.commissionRate}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center font-medium">
                      <DollarSign size={14} className="mr-1 text-green-600" />
                      {commission.commissionAmount}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      commission.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                      commission.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {commission.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <button className="text-xs text-sidebar font-medium hover:underline">View</button>
                      <button className="text-xs text-gray-500 font-medium hover:underline">Edit</button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Commissions;
