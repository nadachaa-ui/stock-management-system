import React from 'react';
import { motion } from 'framer-motion';
import { Package, ShoppingCart, Users, TrendingUp } from 'lucide-react';
import StatsCard from '../components/Dashboard/StatsCard';
import RecentActivity from '../components/Dashboard/RecentActivity';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Products',
      value: '2,847',
      change: '+12% from last month',
      changeType: 'positive' as const,
      icon: Package
    },
    {
      title: 'Orders Today',
      value: '156',
      change: '+8% from yesterday',
      changeType: 'positive' as const,
      icon: ShoppingCart
    },
    {
      title: 'Active Customers',
      value: '1,234',
      change: '+5% from last week',
      changeType: 'positive' as const,
      icon: Users
    },
    {
      title: 'Revenue',
      value: '$45,678',
      change: '+15% from last month',
      changeType: 'positive' as const,
      icon: TrendingUp
    }
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-secondary-900 dark:text-white">
            Dashboard
          </h1>
          <p className="text-secondary-600 dark:text-secondary-400 mt-1">
            Welcome back! Here's what's happening with your store.
          </p>
        </div>
        
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
          className="text-4xl"
        >
          👋
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={stat.title} {...stat} index={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-secondary-900 rounded-xl p-6 shadow-sm border border-secondary-200 dark:border-secondary-700 h-80"
          >
            <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
              Sales Overview
            </h3>
            <div className="flex items-center justify-center h-full text-secondary-500 dark:text-secondary-400">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>Chart will be integrated with your Django backend</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <RecentActivity />
      </div>
    </div>
  );
};

export default Dashboard;