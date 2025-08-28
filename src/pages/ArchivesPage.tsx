import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import PageLayout from '../components/Layout/PageLayout';

const ArchivesPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Mock data for journal volumes and issues
  const archives = [
    {
      year: 2025,
      volume: 12,
      issues: [
        { number: 1, month: "January-March", papers: 15 },
      ]
    },
    {
      year: 2024,
      volume: 11,
      issues: [
        { number: 4, month: "October-December", papers: 18 },
        { number: 3, month: "July-September", papers: 20 },
        { number: 2, month: "April-June", papers: 17 },
        { number: 1, month: "January-March", papers: 16 }
      ]
    },
    {
      year: 2023,
      volume: 10,
      issues: [
        { number: 4, month: "October-December", papers: 19 },
        { number: 3, month: "July-September", papers: 18 },
        { number: 2, month: "April-June", papers: 16 },
        { number: 1, month: "January-March", papers: 15 }
      ]
    },
    {
      year: 2022,
      volume: 9,
      issues: [
        { number: 4, month: "October-December", papers: 17 },
        { number: 3, month: "July-September", papers: 15 },
        { number: 2, month: "April-June", papers: 16 },
        { number: 1, month: "January-March", papers: 14 }
      ]
    }
  ];
  
  return (
    <PageLayout title="Archives" titleClassName="text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 relative overflow-hidden">
        
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/50 to-primary-950"
          animate={{ opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent-400/20 to-accent-600/20 rounded-full blur-3xl"
          animate={{
            y: [-10, 10, -10],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent-500/20 to-accent-700/20 rounded-full blur-3xl"
          animate={{
            y: [10, -10, 10],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        
        {/* Floating Dots */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
        </div>
      </div>
      
      <motion.div 
        className="container mx-auto px-4 py-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          <motion.p 
            className="text-white/90 mb-8 text-lg leading-relaxed bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl text-center"
            variants={itemVariants}
          >
            Browse all previously published issues of the International Journal of Universal Print.
            Our archive contains all published papers organized by year, volume, and issue.
          </motion.p>
          
          {archives.map((archive) => (
            <motion.div 
              key={archive.year} 
              className="mb-12"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-2xl font-serif font-bold mb-6 flex items-center bg-gradient-to-r from-accent-600 to-accent-700 p-4 text-white rounded-xl shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <BookOpen className="mr-3 text-white" size={24} />
                </motion.div>
                {archive.year} - Volume {archive.volume}
              </motion.h2>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {archive.issues.map((issue) => (
                  <motion.div 
                    key={`${archive.volume}-${issue.number}`}
                    className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="p-6">
                      <motion.h3 
                        className="text-xl font-semibold text-accent-700 mb-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        Issue {issue.number} ({issue.month})
                      </motion.h3>
                      <motion.p 
                        className="text-gray-600 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {issue.papers} papers published
                      </motion.p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          Volume {archive.volume}, Issue {issue.number}
                        </span>
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Link
                            to={`/archives/volume-${archive.volume}/issue-${issue.number}`}
                            className="flex items-center text-accent-600 hover:text-accent-700 font-medium transition-colors duration-200"
                          >
                            <span>View Issue</span>
                            <ChevronRight size={18} />
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
          
          <motion.div 
            className="bg-gradient-to-r from-accent-600 to-accent-700 rounded-xl p-8 text-center shadow-2xl border border-accent-500/30"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h2 
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Access to Older Archives
            </motion.h2>
            <motion.p 
              className="text-white/90 mb-6 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Issues published before 2022 (Volumes 1-8) are available in our digital repository. 
              All published papers remain fully accessible and citable with their original DOIs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/browse"
                  className="inline-flex items-center px-8 py-4 bg-white text-accent-700 rounded-xl font-bold hover:bg-accent-50 transition-all duration-300 shadow-lg"
                >
                  <BookOpen size={18} className="mr-2" />
                  Browse Complete Archive
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default ArchivesPage;