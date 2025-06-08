import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-secondary-50 dark:bg-secondary-950 transition-colors duration-300">
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} />
        
        <main className="flex-1 p-6 lg:ml-0">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;