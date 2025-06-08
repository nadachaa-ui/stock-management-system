import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, BarChart3, Shield, Zap } from 'lucide-react';
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';
import ForgotPasswordForm from '../components/Auth/ForgotPasswordForm';

type AuthMode = 'login' | 'register' | 'forgot-password';

interface AuthProps {
  onAuthSuccess: () => void;
}

const Auth: React.FC<AuthProps> = ({ onAuthSuccess }) => {
  const [authMode, setAuthMode] = useState<AuthMode>('login');

  const handleLogin = (credentials: { email: string; password: string }) => {
    console.log('Login attempt:', credentials);
    // Here you would typically make an API call to your Django backend
    onAuthSuccess();
  };

  const handleRegister = (userData: { username: string; email: string; password: string }) => {
    console.log('Register attempt:', userData);
    // Here you would typically make an API call to your Django backend
    onAuthSuccess();
  };

  const features = [
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Track your products, stock levels, and manage your inventory efficiently'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reports',
      description: 'Get insights into your business with detailed analytics and reports'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Your data is protected with enterprise-grade security measures'
    },
    {
      icon: Zap,
      title: 'Fast & Efficient',
      description: 'Streamline your workflow with our intuitive and fast interface'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-800 flex">
      {/* Left Side - Branding and Features */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 flex-col justify-center p-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3 mb-8">
            <motion.div
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="p-3 bg-primary-500 rounded-2xl"
            >
              <Package className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h1 className="text-3xl font-bold text-secondary-900 dark:text-white">Bikou</h1>
              <p className="text-primary-600 dark:text-primary-400 font-medium">Stock Management System</p>
            </div>
          </div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-4xl font-bold text-secondary-900 dark:text-white mb-4 leading-tight">
              Manage Your Inventory with{' '}
              <span className="text-primary-600 dark:text-primary-400">Confidence</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed">
              Streamline your stock management, track inventory levels, and grow your business with our powerful and intuitive platform.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className="flex-shrink-0 p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <feature.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 dark:text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Side - Auth Forms */}
      <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {authMode === 'login' && (
            <LoginForm
              onLogin={handleLogin}
              onForgotPassword={() => setAuthMode('forgot-password')}
              onSwitchToRegister={() => setAuthMode('register')}
            />
          )}
          
          {authMode === 'register' && (
            <RegisterForm
              onRegister={handleRegister}
              onSwitchToLogin={() => setAuthMode('login')}
            />
          )}
          
          {authMode === 'forgot-password' && (
            <ForgotPasswordForm
              onBackToLogin={() => setAuthMode('login')}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;