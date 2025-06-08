import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Package, label: 'Products', path: '/products' },
  { icon: ShoppingCart, label: 'Orders', path: '/orders' },
  { icon: Users, label: 'Customers', path: '/customers' },
  { icon: TrendingUp, label: 'Sales', path: '/sales' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: AlertTriangle, label: 'Low Stock', path: '/low-stock' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          />
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-secondary-900 border-r border-secondary-200 dark:border-secondary-700 z-50 lg:relative lg:translate-x-0"
          >
            <div className="p-6 pt-20 lg:pt-6">
              <nav className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                          isActive
                            ? 'bg-primary-500 text-white shadow-lg'
                            : 'text-secondary-600 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-secondary-800 hover:text-primary-600 dark:hover:text-primary-400'
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                      <span className="font-medium">{item.label}</span>
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;