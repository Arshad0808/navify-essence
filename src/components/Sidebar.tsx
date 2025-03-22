
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  FolderKanban, 
  Calendar, 
  FileText, 
  BarChart3, 
  ChevronRight,
  Menu
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  badge?: string;
  onClick?: () => void;
}

const NavItem = ({ to, icon, children, badge, onClick }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={cn(
        'nav-item',
        isActive && 'active'
      )}
      onClick={onClick}
    >
      {icon}
      <span>{children}</span>
      {badge && <span className="nav-badge">{badge}</span>}
    </Link>
  );
};

interface TeamItemProps {
  letter: string;
  name: string;
  bgColor?: string;
}

const TeamItem = ({ letter, name, bgColor = 'rgba(255, 255, 255, 0.15)' }: TeamItemProps) => {
  return (
    <div className="flex items-center px-4 py-2 text-white text-sm font-medium hover:bg-sidebar-light transition-all duration-200 gap-3">
      <div className="avatar-circle" style={{ backgroundColor: bgColor }}>
        {letter}
      </div>
      <span>{name}</span>
    </div>
  );
};

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <>
      <div className={`fixed left-0 z-40 lg:hidden top-4 left-4 ${isOpen ? 'hidden' : 'block'}`}>
        <button 
          onClick={toggleSidebar}
          className="p-2 bg-sidebar rounded-lg text-white"
        >
          <Menu size={24} />
        </button>
      </div>
      
      <motion.div 
        className={`fixed inset-y-0 left-0 w-64 bg-sidebar flex flex-col z-50 ${isOpen ? 'block' : 'hidden lg:block'}`}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div className="p-4 flex items-center">
          <div className="text-white">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M20 4L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M20 4L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="lg:hidden ml-auto">
            <button 
              onClick={toggleSidebar}
              className="text-white opacity-80 hover:opacity-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <nav className="mt-4 flex-1">
          <motion.div 
            className="space-y-1"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
              hidden: {}
            }}
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <NavItem to="/" icon={<LayoutDashboard size={20} />} badge="5">
                Dashboard
              </NavItem>
            </motion.div>
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <NavItem to="/team" icon={<Users size={20} />}>
                Team
              </NavItem>
            </motion.div>
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <NavItem to="/projects" icon={<FolderKanban size={20} />} badge="12">
                Projects
              </NavItem>
            </motion.div>
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <NavItem to="/calendar" icon={<Calendar size={20} />} badge="20+">
                Calendar
              </NavItem>
            </motion.div>
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <NavItem to="/documents" icon={<FileText size={20} />}>
                Documents
              </NavItem>
            </motion.div>
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <NavItem to="/reports" icon={<BarChart3 size={20} />}>
                Reports
              </NavItem>
            </motion.div>
          </motion.div>
          
          <div className="mt-8 px-4">
            <h2 className="text-xs font-semibold text-white text-opacity-70 uppercase tracking-wider mb-2">
              Your teams
            </h2>
            <div className="space-y-1">
              <TeamItem letter="H" name="Heroicons" />
              <TeamItem letter="T" name="Tailwind Labs" />
              <TeamItem letter="W" name="Workcation" />
            </div>
          </div>
        </nav>
        
        <div className="p-4 border-t border-white border-opacity-10">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Tom Cook"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">Tom Cook</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
