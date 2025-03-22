
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, Star } from 'lucide-react';

const Documents = () => {
  useEffect(() => {
    document.title = 'Documents';
  }, []);

  const documents = [
    { id: 1, name: 'Project Brief.pdf', type: 'PDF', size: '2.4 MB', lastModified: '2 days ago', starred: true },
    { id: 2, name: 'Team Guidelines.docx', type: 'DOCX', size: '1.8 MB', lastModified: '1 week ago', starred: false },
    { id: 3, name: 'Marketing Strategy.pptx', type: 'PPTX', size: '5.2 MB', lastModified: '3 days ago', starred: true },
    { id: 4, name: 'Financial Report.xlsx', type: 'XLSX', size: '3.7 MB', lastModified: '5 hours ago', starred: false },
    { id: 5, name: 'User Research.pdf', type: 'PDF', size: '7.1 MB', lastModified: '1 day ago', starred: false },
  ];

  const getTypeColor = (type) => {
    switch(type) {
      case 'PDF': return 'bg-red-100 text-red-800';
      case 'DOCX': return 'bg-blue-100 text-blue-800';
      case 'PPTX': return 'bg-orange-100 text-orange-800';
      case 'XLSX': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-6 flex items-center">
          <FileText className="mr-3 text-blue-600" size={24} />
          <h1 className="text-3xl font-bold text-gray-900">Documents</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
          <div className="p-6">
            <div className="mb-4 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Recent Documents</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                Upload New
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Size
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Modified
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {documents.map((doc, i) => (
                    <motion.tr 
                      key={doc.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Star className={`mr-2 h-4 w-4 ${doc.starred ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                          <span className="text-sm font-medium text-gray-900">{doc.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getTypeColor(doc.type)}`}>
                          {doc.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {doc.size}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {doc.lastModified}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          <Eye size={16} />
                        </button>
                        <button className="text-blue-600 hover:text-blue-900">
                          <Download size={16} />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Documents;
