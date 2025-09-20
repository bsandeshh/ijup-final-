import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/Layout/PageLayout';
import PaperList from '../components/Papers/PaperList';

const BrowsePapersPage: React.FC = () => {
  return (
    <PageLayout title="Browse Papers" titleClassName="text-white">
      <div className="fixed inset-0 -z-10">
        <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 relative overflow-hidden">
        
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/50 to-primary-950"
          animate={{ opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion.div 
            className="mb-16 bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="mb-8">
              <p className="text-gray-600 max-w-2xl">
                Explore our collection of peer-reviewed research papers across various disciplines. 
                Use the filters and search functionality to find papers relevant to your interests.
              </p>
            </div>
            <PaperList />
          </motion.div>
      </div>
    </PageLayout>
  );
};

export default BrowsePapersPage;