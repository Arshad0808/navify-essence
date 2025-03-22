
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { FolderKanban, Clock, Users } from 'lucide-react';

const Projects = () => {
  useEffect(() => {
    document.title = 'Projects';
  }, []);

  const projects = [
    { id: 1, name: 'Website Redesign', status: 'In Progress', members: 5, lastUpdated: '3 hours ago', completion: 75 },
    { id: 2, name: 'Mobile App Development', status: 'Planning', members: 3, lastUpdated: '1 day ago', completion: 25 },
    { id: 3, name: 'Dashboard Analytics', status: 'Completed', members: 4, lastUpdated: '2 days ago', completion: 100 },
    { id: 4, name: 'Marketing Campaign', status: 'In Progress', members: 2, lastUpdated: '5 hours ago', completion: 60 },
    { id: 5, name: 'User Research', status: 'Planning', members: 2, lastUpdated: '12 hours ago', completion: 15 },
  ];

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-6 flex items-center">
          <FolderKanban className="mr-3 text-blue-600" size={24} />
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                  <p className="mt-1 text-xs text-gray-500 text-right">{project.completion}% complete</p>
                </div>
                
                <div className="mt-4 flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-500">
                    <Users size={16} className="mr-1" />
                    <span>{project.members} members</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock size={16} className="mr-1" />
                    <span>Updated {project.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default Projects;
