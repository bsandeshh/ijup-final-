import React from 'react';
import { motion } from 'framer-motion';

interface LogoSectionProps {
  isHomePage?: boolean;
}

const LogoSection: React.FC<LogoSectionProps> = ({ isHomePage = false }) => {
  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <motion.div 
          className={`flex flex-row items-center gap-4 md:gap-8 ${isHomePage ? 'ml-16' : 'justify-center'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* First Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            <img 
              src="/Ijup.logo.png" 
              alt="IJUP Logo" 
              className="h-20 w-auto object-contain"
            />
          </motion.div>

          {/* Divider Line */}
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

          {/* Second Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            <img 
              src="/Ijup.logo2.png" 
              alt="IJUP Logo 2" 
              className="h-20 w-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogoSection;
