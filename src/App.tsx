import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Welcome from './pages/Welcome';
import Auth from './pages/Auth';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setShowWelcome(false);
  };

  const handleGetStarted = () => {
    setShowWelcome(false);
  };

  if (showWelcome) {
    return (
      <ThemeProvider>
        <Welcome onGetStarted={handleGetStarted} />
      </ThemeProvider>
    );
  }

  if (!isAuthenticated) {
    return (
      <ThemeProvider>
        <Auth onAuthSuccess={handleAuthSuccess} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<div className="p-8 text-center text-secondary-600 dark:text-secondary-400">Orders page coming soon...</div>} />
            <Route path="customers" element={<div className="p-8 text-center text-secondary-600 dark:text-secondary-400">Customers page coming soon...</div>} />
            <Route path="sales" element={<div className="p-8 text-center text-secondary-600 dark:text-secondary-400">Sales page coming soon...</div>} />
            <Route path="analytics" element={<div className="p-8 text-center text-secondary-600 dark:text-secondary-400">Analytics page coming soon...</div>} />
            <Route path="low-stock" element={<div className="p-8 text-center text-secondary-600 dark:text-secondary-400">Low Stock page coming soon...</div>} />
            <Route path="settings" element={<div className="p-8 text-center text-secondary-600 dark:text-secondary-400">Settings page coming soon...</div>} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;