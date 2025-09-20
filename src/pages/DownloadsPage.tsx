import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import PageLayout from '../components/Layout/PageLayout';

const DownloadsPage: React.FC = () => {
  const downloads = [
    { 
      name: 'Bank Transfer Form', 
      file: '/PDF\'s/Bank transfer ijup .pages',
      description: 'Bank transfer form for IJUP payments',
      category: 'Payment',
      type: 'PAGES',
      instructions: 'Download and open with Pages app or convert to PDF'
    },
    { 
      name: 'Registration Form', 
      file: '/PDF\'s/Registration FORM IJUP.pages',
      description: 'Conference registration form',
      category: 'Registration',
      type: 'PAGES',
      instructions: 'Download and open with Pages app or convert to PDF'
    },
    { 
      name: 'Membership Registration Form', 
      file: '/PDF\'s/Registration Membership FORM IJUP.pages',
      description: 'Membership registration form for IJUP',
      category: 'Membership',
      type: 'PAGES',
      instructions: 'Download and open with Pages app or convert to PDF'
    },
    { 
      name: 'Manuscript Template', 
      file: '/manuscript_template.pdf',
      description: 'Template for manuscript submission',
      category: 'Submission',
      type: 'PDF',
      instructions: 'Use this template for your manuscript'
    },
    { 
      name: 'Copyright Form', 
      file: '/copyright_form.pdf',
      description: 'Copyright transfer form',
      category: 'Legal',
      type: 'PDF',
      instructions: 'Required for copyright transfer to IJUP'
    },
    { 
      name: 'Reviewer Guidelines', 
      file: '/reviewer_guidelines.pdf',
      description: 'Guidelines for paper reviewers',
      category: 'Review',
      type: 'PDF',
      instructions: 'Review these guidelines before reviewing papers'
    },
  ];

  return (
    <PageLayout title="Downloads" titleClassName="text-white">
      <div className="fixed inset-0 -z-10">
        <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/50 to-primary-950"
          animate={{ opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion.div 
          className="mb-8 bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl p-8 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-primary-900 mb-4 text-center">Available Downloads</h2>
          <p className="text-gray-600 text-center mb-8">
            Download forms, templates, and guidelines for IJUP submissions and conferences
          </p>
        </motion.div>

        {/* Group downloads by category */}
        {['Payment', 'Registration', 'Membership', 'Submission', 'Legal', 'Review'].map((category) => {
          const categoryDownloads = downloads.filter(item => item.category === category);
          if (categoryDownloads.length === 0) return null;
          
          return (
            <motion.div
              key={category}
              className="mb-8 bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                <div className="w-3 h-3 bg-accent-500 rounded-full mr-3"></div>
                {category} Documents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryDownloads.map((item, index) => (
                  <motion.div
                    key={index}
                    className="group flex flex-col p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-accent-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-primary-900 group-hover:text-accent-700 transition-colors">
                        {item.name}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          item.type === 'PDF' 
                            ? 'bg-red-100 text-red-700' 
                            : item.type === 'PAGES'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {item.type}
                        </span>
                        <Download className="h-5 w-5 text-primary-700 group-hover:text-accent-700 transition-colors" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors mb-2">
                      {item.description}
                    </p>
                    <p className="text-xs text-gray-500 mb-3 italic">
                      {item.instructions}
                    </p>
                    <a
                      href={item.file}
                      target="_self"
                      download
                      className="inline-flex items-center justify-center px-3 py-2 bg-accent-600 text-white text-sm font-medium rounded-md hover:bg-accent-700 transition-colors duration-200"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      {item.type === 'PAGES' ? 'Download Pages File' : 'Download PDF'}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default DownloadsPage;
