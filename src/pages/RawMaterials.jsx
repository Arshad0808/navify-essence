
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { GemIcon, Plus, Tag, Scale, Calendar, Truck, Filter } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const RawMaterials = () => {
  useEffect(() => {
    document.title = 'Raw Materials Inventory';
  }, []);

  // Mock raw materials data
  const materials = [
    { 
      id: 1, 
      name: 'Raw Gold Ore', 
      type: 'Gold',
      purity: '22K',
      weight: '1.5 kg',
      supplier: 'Sierra Mining Co.',
      dateReceived: '2023-10-15',
      cost: '$78,500',
      status: 'In Stock'
    },
    { 
      id: 2, 
      name: 'Gold Nuggets', 
      type: 'Gold',
      purity: '24K',
      weight: '750 g',
      supplier: 'Yukon Extracts',
      dateReceived: '2023-11-02',
      cost: '$42,300',
      status: 'Reserved'
    },
    { 
      id: 3, 
      name: 'Gold Dust', 
      type: 'Gold',
      purity: '18K',
      weight: '350 g',
      supplier: 'Amazon Basin Inc',
      dateReceived: '2023-11-22',
      cost: '$16,800',
      status: 'In Stock'
    },
    { 
      id: 4, 
      name: 'Gold Bars', 
      type: 'Gold',
      purity: '24K',
      weight: '2 kg',
      supplier: 'Swiss Pure Metals',
      dateReceived: '2023-12-01',
      cost: '$112,500',
      status: 'In Transit'
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
            <GemIcon className="mr-3 text-sidebar" size={24} />
            <h1 className="text-3xl font-bold text-gray-900">Raw Materials</h1>
          </div>
          <div className="flex gap-2">
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center">
              <Filter size={18} className="mr-2" />
              Filter
            </button>
            <button className="bg-sidebar text-white px-4 py-2 rounded-md hover:bg-sidebar-dark transition-colors flex items-center justify-center">
              <Plus size={18} className="mr-2" />
              Add Material
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border-b">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-500">Total Materials</div>
              <div className="text-2xl font-bold text-gray-900">24</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-500">Total Weight</div>
              <div className="text-2xl font-bold text-gray-900">12.5 kg</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-500">Value</div>
              <div className="text-2xl font-bold text-gray-900">$653,200</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-500">Pending Orders</div>
              <div className="text-2xl font-bold text-gray-900">8</div>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Material Name</TableHead>
                <TableHead>Type/Purity</TableHead>
                <TableHead>Weight</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Date Received</TableHead>
                <TableHead>Cost</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {materials.map((material) => (
                <TableRow key={material.id}>
                  <TableCell className="font-medium">{material.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Tag size={14} className="mr-1 text-gray-400" />
                      <span>{material.type}, {material.purity}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Scale size={14} className="mr-1 text-gray-400" />
                      <span>{material.weight}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Truck size={14} className="mr-1 text-gray-400" />
                      <span>{material.supplier}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1 text-gray-400" />
                      <span>{material.dateReceived}</span>
                    </div>
                  </TableCell>
                  <TableCell>{material.cost}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      material.status === 'In Stock' ? 'bg-green-100 text-green-800' : 
                      material.status === 'Reserved' ? 'bg-blue-100 text-blue-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {material.status}
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

export default RawMaterials;
