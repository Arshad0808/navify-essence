
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const Team = () => {
  useEffect(() => {
    document.title = 'Team';
  }, []);

  const teamMembers = [
    { id: 1, name: 'Jane Cooper', role: 'CEO', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' },
    { id: 2, name: 'Cody Fisher', role: 'CTO', imageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' },
    { id: 3, name: 'Esther Howard', role: 'Designer', imageUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' },
    { id: 4, name: 'Jenny Wilson', role: 'Developer', imageUrl: 'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' },
    { id: 5, name: 'Kristin Watson', role: 'Marketing', imageUrl: 'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' },
    { id: 6, name: 'Cameron Williamson', role: 'Support', imageUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' },
  ];

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-6 flex items-center">
          <Users className="mr-3 text-blue-600" size={24} />
          <h1 className="text-3xl font-bold text-gray-900">Team Members</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
          <ul className="divide-y divide-gray-200">
            {teamMembers.map((person, i) => (
              <motion.li 
                key={person.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="px-6 py-5 flex items-center"
              >
                <img className="h-12 w-12 rounded-full object-cover" src={person.imageUrl} alt={person.name} />
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">{person.name}</div>
                  <div className="text-sm text-gray-500">{person.role}</div>
                </div>
                <div className="ml-auto">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View Profile</button>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Team;
