import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Package, ShoppingCart, TrendingUp } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'stock',
    message: 'Low stock alert for iPhone 14 Pro',
    time: '2 minutes ago',
    icon: Package,
    color: 'text-orange-500'
  },
  {
    id: 2,
    type: 'order',
    message: 'New order #1234 received',
    time: '5 minutes ago',
    icon: ShoppingCart,
    color: 'text-green-500'
  },
  {
    id: 3,
    type: 'sales',
    message: 'Daily sales target achieved',
    time: '1 hour ago',
    icon: TrendingUp,
    color: 'text-blue-500'
  },
];

const RecentActivity: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white dark:bg-secondary-900 rounded-xl p-6 shadow-sm border border-secondary-200 dark:border-secondary-700"
    >
      <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
        Recent Activity
      </h3>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors"
          >
            <div className={`p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800`}>
              <activity.icon className={`w-4 h-4 ${activity.color}`} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-secondary-900 dark:text-white">
                {activity.message}
              </p>
              <div className="flex items-center space-x-1 mt-1">
                <Clock className="w-3 h-3 text-secondary-400" />
                <span className="text-xs text-secondary-500 dark:text-secondary-400">
                  {activity.time}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RecentActivity;