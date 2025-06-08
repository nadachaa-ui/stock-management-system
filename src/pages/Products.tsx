import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, Edit, Trash2, Eye } from 'lucide-react';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: 'iPhone 14 Pro',
      category: 'Electronics',
      price: '$999',
      stock: 45,
      status: 'In Stock'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      category: 'Electronics',
      price: '$899',
      stock: 12,
      status: 'Low Stock'
    },
    {
      id: 3,
      name: 'MacBook Air M2',
      category: 'Computers',
      price: '$1,199',
      stock: 0,
      status: 'Out of Stock'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Low Stock':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Out of Stock':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-secondary-100 text-secondary-800 dark:bg-secondary-800 dark:text-secondary-200';
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-secondary-900 dark:text-white">
            Products
          </h1>
          <p className="text-secondary-600 dark:text-secondary-400 mt-1">
            Manage your product inventory
          </p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Product</span>
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-secondary-900 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-700"
      >
        <div className="p-6 border-b border-secondary-200 dark:border-secondary-700">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary-50 dark:bg-secondary-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-secondary-900 divide-y divide-secondary-200 dark:divide-secondary-700">
              {products.map((product, index) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-secondary-900 dark:text-white">
                      {product.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-secondary-500 dark:text-secondary-400">
                      {product.category}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-secondary-900 dark:text-white">
                      {product.price}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-secondary-900 dark:text-white">
                      {product.stock}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(product.status)}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-secondary-600 hover:text-secondary-900 dark:text-secondary-400 dark:hover:text-secondary-300">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Products;