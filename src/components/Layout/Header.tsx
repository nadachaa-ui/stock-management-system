import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X, Package } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface HeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white dark:bg-secondary-900 border-b border-secondary-200 dark:border-secondary-700 px-4 py-3 flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95"
    >
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
        >
          {isSidebarOpen ? (
            <X className="w-5 h-5 text-secondary-600 dark:text-secondary-300" />
          ) : (
            <Menu className="w-5 h-5 text-secondary-600 dark:text-secondary-300" />
          )}
        </button>
        
        <div className="flex items-center space-x-3">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="p-2 bg-primary-500 rounded-lg"
          >
            <Package className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <h1 className="text-xl font-bold text-secondary-900 dark:text-white">Bikou</h1>
            <p className="text-xs text-secondary-500 dark:text-secondary-400">Stock Management</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-secondary-600" />
          )}
        </motion.button>
        
        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-medium">U</span>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;