import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, BookOpen } from 'lucide-react';
import PageLayout from '../components/Layout/PageLayout';
import { JOURNAL_INFO } from '../data/mockData';

const AboutPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <PageLayout titleClassName="text-white">
      {/* Hero-style Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 overflow-hidden pointer-events-none">
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/50 to-primary-950"
          animate={{ opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent-400/20 to-accent-600/20 rounded-full blur-3xl"
          animate={floatingAnimation}
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
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-accent-300/15 to-accent-500/15 rounded-full blur-2xl"
          animate={pulseAnimation}
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
      
      {/* Page Title Section */}
      <div className="container mx-auto px-4 mb-6 text-center relative z-10 pt-12">
        <motion.h1 
          className="text-3xl md:text-4xl font-serif font-bold text-white relative inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About...
          <span className="block mt-2 h-[3px] w-10 bg-primary-500 rounded-full relative mx-auto">
            <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-2 w-2 bg-primary-500 rounded-full"></span>
          </span>
        </motion.h1>
      </div>

      <motion.div 
        className="container mx-auto px-4 pb-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        <div className="max-w-4xl mx-auto">
          
          {/* Journal Overview */}
          <motion.section 
            variants={itemVariants}
            className="mb-16 bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              {JOURNAL_INFO.description}
            </p>

            <motion.div 
              className="bg-gradient-to-br from-white/95 to-accent-50/50 rounded-xl shadow-lg p-8 border border-accent-200/50"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="flex items-center mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Award className="h-8 w-8 text-accent-600 mr-3" />
                </motion.div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent">Journal Information</h2>
              </motion.div>
              <motion.ul 
                className="space-y-4 text-base"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.li 
                  className="flex flex-col sm:flex-row sm:items-center p-3 rounded-lg hover:bg-accent-50/50 transition-colors duration-200"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-gray-800 sm:w-40 font-medium">Title</span>
                  <span className="hidden sm:inline text-gray-800 mx-2">:</span>
                  <span className="font-bold text-accent-700">{JOURNAL_INFO.title}</span>
                </motion.li>
                <motion.li 
                  className="flex flex-col sm:flex-row sm:items-center p-3 rounded-lg hover:bg-accent-50/50 transition-colors duration-200"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-gray-800 sm:w-40 font-medium">ISSN</span>
                  <span className="hidden sm:inline text-gray-800 mx-2">:</span>
                  <span className="font-bold text-accent-700">2354-7463</span>
                </motion.li>
                <motion.li 
                  className="flex flex-col sm:flex-row sm:items-center p-3 rounded-lg hover:bg-accent-50/50 transition-colors duration-200"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-gray-800 sm:w-40 font-medium">Frequency</span>
                  <span className="hidden sm:inline text-gray-800 mx-2">:</span>
                  <span className="font-bold text-accent-700">Two Volumes Per Year</span>
                </motion.li>
                <motion.li 
                  className="flex flex-col sm:flex-row sm:items-center p-3 rounded-lg hover:bg-accent-50/50 transition-colors duration-200"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-gray-800 sm:w-40 font-medium">Open Access</span>
                  <span className="hidden sm:inline text-gray-800 mx-2">:</span>
                  <span className="font-bold text-accent-700">Yes (CC BY 4.0 License)</span>
                </motion.li>
                <motion.li 
                  className="flex flex-col sm:flex-row sm:items-center p-3 rounded-lg hover:bg-accent-50/50 transition-colors duration-200"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-gray-800 sm:w-40 font-medium">Publication Fee</span>
                  <span className="hidden sm:inline text-gray-800 mx-2">:</span>
                  <span className="font-bold text-accent-700">INR 2099 (Intl. Authors $100)</span>
                </motion.li>
                <motion.li 
                  className="flex flex-col sm:flex-row sm:items-center p-3 rounded-lg hover:bg-accent-50/50 transition-colors duration-200"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-gray-800 sm:w-40 font-medium">Membership Fee</span>
                  <span className="hidden sm:inline text-gray-800 mx-2">:</span>
                  <span className="font-bold text-accent-700">INR 999  ( Intl. Authors 20$)</span>
                </motion.li>
                <motion.li 
                  className="flex flex-col sm:flex-row sm:items-center p-3 rounded-lg hover:bg-accent-50/50 transition-colors duration-200"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-gray-800 sm:w-40 font-medium">Review Process</span>
                  <span className="hidden sm:inline text-gray-800 mx-2">:</span>
                  <span className="font-bold text-accent-700">Double-blind peer review</span>
                </motion.li>
                <motion.li 
                  className="flex flex-col sm:flex-row sm:items-center p-3 rounded-lg hover:bg-accent-50/50 transition-colors duration-200"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-gray-800 sm:w-40 font-medium">Acceptance Rate</span>
                  <span className="hidden sm:inline text-gray-800 mx-2">:</span>
                  <span className="font-bold text-accent-700">72% (2024)</span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.section>

          {/* History & Development */}
          <motion.section 
            variants={itemVariants}
            className="mb-16 bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <BookOpen className="h-8 w-8 text-accent-600 mr-3" />
              </motion.div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent">History & Development</h2>
            </motion.div>

            <motion.p 
              className="text-gray-700 mb-4 text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="font-bold text-accent-700">Twenty years ago</span>, a group of visionary leaders from the Marathwada region—<span className="font-semibold text-red-600">Dr. Sidheshwar Bellale, Dr. Bapurao Dhage, Prof. Rajkumar Kawade, Dr. Dillip Palimkar, Dr. Bhalchandra Karande, Sou. Jyoti Kadwade, Prof. Ram Bellale, Prof. Bapurao Shinde</span>, and <span className="font-semibold text-red-600">Sou. Meenabai Khedkar</span>—recognized the vital role of higher education and research in driving regional development and prosperity.
            </motion.p>

            <motion.p 
              className="text-gray-700 mb-4 text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              United by a shared commitment to progress, these distinguished individuals came together with a mission to establish a dedicated research hub and mathematics institution in Ahmedpur and other parts of Marathwada. Inspired by their admiration for mathematics and its transformative power, they named the initiative the <span className="italic text-accent-700 font-bold bg-accent-50 px-2 py-1 rounded">Balaghat Mathematical Sciences Development Society (BMSD Society)</span>.
            </motion.p>

            <motion.p 
              className="text-gray-700 mb-4 text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              The journey began modestly in <span className="font-bold text-accent-700 bg-accent-50 px-2 py-1 rounded">1999</span>, with the founding of <span className="italic font-semibold text-accent-600">Bellale's Mathematics Institution</span> in Ahmedpur. Over the years, the Society has grown rapidly, establishing <span className="font-semibold text-accent-600">CBSE and ICSE schools</span>, junior colleges, research centers, and advanced institutions for mathematical sciences across the region.
            </motion.p>

            <motion.p 
              className="text-gray-700 mb-4 text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              Building on this foundation, the Society recently took a significant step forward. In the previous year, it launched a series of international, open-access research journals aimed at promoting scientific research and innovation in Marathwada and beyond. These journals are published by the Society's own publishing house, <span className="font-bold text-accent-700 bg-gradient-to-r from-accent-100 to-accent-200 px-3 py-1 rounded-lg border border-accent-300">UNIVERSAL PRINT</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 }}
              className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-6 border border-accent-200 mt-8"
            >
              <motion.p 
                className="text-accent-800 mb-3 font-bold text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                Proposed International Journals:
              </motion.p>
              <motion.ul 
                className="text-gray-700 space-y-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  "International Journal of Universal Sciences & Technology",
                  "International Journal of Universal Mathematics & Mathematical Sciences",
                  "International Journal of Universal Physics & Material Sciences",
                  "International Journal of Universal Chemistry & Industrial Chemistry",
                  "International Journal of Universal Botany & Microbiology",
                  "International Journal of Universal Electronics & Computer Sciences",
                  "International Journal of Universal Zoology & Fishery Sciences",
                  "International Journal of Universal Languages & Communication Sciences",
                  "International Journal of Universal History & Geographic Sciences",
                  "International Journal of Universal Business & Management Sciences"
                ].map((journal, index) => (
                  <motion.li 
                    key={index}
                    variants={itemVariants}
                    className="flex items-center p-2 rounded-lg hover:bg-white/50 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="font-medium">{journal}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.p 
              className="text-gray-700 mt-4 text-base leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
            >
              These journals aim to provide a <span className="font-bold text-accent-700 bg-gradient-to-r from-accent-100 to-accent-200 px-2 py-1 rounded">global platform</span> for researchers, scholars, and academicians to share their work and contribute to the growing body of knowledge across disciplines.
            </motion.p>
          </motion.section>

          {/* Journal Aims */}
          <motion.section 
            variants={itemVariants}
            className="mb-16 bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: 2,
                  ease: "easeInOut"
                }}
              >
                <Target className="h-8 w-8 text-accent-600 mr-3" />
              </motion.div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent">Our Aims & Objectives</h2>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {JOURNAL_INFO.aims.map((aim, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start p-4 rounded-xl bg-gradient-to-r from-accent-50/50 to-accent-100/50 border border-accent-200 hover:shadow-md transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.div 
                    className="h-8 w-8 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 text-white flex items-center justify-center mr-4 mt-1 font-bold shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {index + 1}
                  </motion.div>
                  <p className="text-gray-700 flex-1 text-base leading-relaxed">{aim}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>


        </div>
      </motion.div>
    </PageLayout>
  );
};

export default AboutPage;
