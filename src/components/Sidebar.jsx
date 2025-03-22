
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  CircleDollarSign, 
  Tags, 
  Users, 
  ArrowLeftRight, 
  BarChart3, 
  Menu, 
  X 
} from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Set initial value
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const navItems = [
    { path: '/', icon: <LayoutDashboard size={20} />, name: 'Dashboard' },
    { path: '/inventory', icon: <CircleDollarSign size={20} />, name: 'Gold Inventory' },
    { path: '/categories', icon: <Tags size={20} />, name: 'Categories' },
    { path: '/suppliers', icon: <Users size={20} />, name: 'Suppliers' },
    { path: '/transactions', icon: <ArrowLeftRight size={20} />, name: 'Transactions' },
    { path: '/reports', icon: <BarChart3 size={20} />, name: 'Reports' },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-20">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md bg-purple-600 text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Backdrop for mobile */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={isMobile ? { x: -280 } : false}
        animate={isMobile ? { x: isOpen ? 0 : -280 } : { x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed top-0 left-0 z-20 h-full w-64 bg-purple-700 text-white shadow-lg overflow-y-auto ${isMobile ? 'block' : 'hidden lg:block'}`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold flex items-center">
            <CircleDollarSign className="mr-2" />
            Gold Manager
          </h2>
        </div>

        <nav className="mt-6">
          <ul className="space-y-2 px-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-purple-800 text-white'
                      : 'text-purple-100 hover:bg-purple-800'
                  }`}
                  onClick={isMobile ? toggleSidebar : undefined}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-purple-800">
          <div className="flex items-center px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center text-purple-800 font-bold mr-3">
              A
            </div>
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-purple-300">Gold Manager</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
