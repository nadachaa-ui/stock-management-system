import React from 'react';
import { motion } from 'framer-motion';
import { XIcon as Icon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: Icon;
  index: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon, 
  index 
}) => {
  const changeColor = {
    positive: 'text-green-600 dark:text-green-400',
    negative: 'text-red-600 dark:text-red-400',
    neutral: 'text-secondary-600 dark:text-secondary-400'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-secondary-900 rounded-xl p-6 shadow-sm border border-secondary-200 dark:border-secondary-700 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-secondary-600 dark:text-secondary-400 text-sm font-medium">
            {title}
          </p>
          <p className="text-2xl font-bold text-secondary-900 dark:text-white mt-1">
            {value}
          </p>
          <p className={`text-sm mt-1 ${changeColor[changeType]}`}>
            {change}
          </p>
        </div>
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg"
        >
          <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StatsCard;