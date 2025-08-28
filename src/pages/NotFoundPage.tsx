import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, HelpCircle } from 'lucide-react';
import PageLayout from '../components/Layout/PageLayout';
import { motion } from 'framer-motion';

const NotFoundPage: React.FC = () => {
  return (
    <PageLayout className="flex items-center justify-center">
      <div className="container mx-auto px-4 text-center py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-primary-200">404</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            The page you are looking for doesn't exist or has been moved.
            Please check the URL or navigate to another section of our journal.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/" 
              className="px-6 py-3 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors duration-200 flex items-center"
            >
              <Home size={18} className="mr-2" />
              Return Home
            </Link>
            
            <Link 
              to="/browse" 
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200 flex items-center"
            >
              <Search size={18} className="mr-2" />
              Browse Papers
            </Link>
            
            <Link 
              to="/contact" 
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200 flex items-center"
            >
              <HelpCircle size={18} className="mr-2" />
              Contact Support
            </Link>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;