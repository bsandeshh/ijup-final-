import React from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import LogoSection from '../Layout/LogoSection';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-start md:items-center pt-16 md:pt-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white overflow-hidden">

      {/* Gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/50 to-primary-950 z-10"
        animate={{ opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo Section */}
            <LogoSection isHomePage={true} />

            {/* Small name below logos */}
            <motion.p
              className="text-sm text-white font-semibold tracking-wide uppercase mb-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Balaghat Mathematical Sciences Development Society's
            </motion.p>

            {/* Main title */}
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent-300 to-accent-500"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              International Journal of Universal Print
            </motion.h1>

            {/* Sub heading */}
            <motion.p 
              className="text-base md:text-xl text-white mb-4 max-w-xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              ✔️ An University Approved Journal. 

            </motion.p>

            {/* Catchy slogan */}
            <motion.p 
              className="text-lg md:text-2xl text-white/90 mb-8 max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.span 
                className="font-serif italic font-medium"
                animate={{ opacity: [0.95, 1, 0.95], y: [0, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                “Boost Your Research — where innovation meets a worldwide audience.”
              </motion.span>
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                to="/browse" 
                className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent-500/25 flex items-center space-x-2"
              >
                <Search size={20} />
                <span>Browse Papers</span>
              </Link>
              <Link 
                to="/submit" 
                className="px-6 py-3 bg-white hover:bg-accent-50 text-primary-900 font-semibold rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
              >
                <FileText size={20} />
                <span>Submit Paper</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block mt-8 lg:mt-0"
          >
            <div className="relative">
              <motion.div 
                className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-full h-[500px] sm:h-[600px] md:h-auto md:aspect-[3/4] bg-white rounded-lg shadow-2xl overflow-hidden mx-auto lg:mx-0"
                animate={{ 
                  rotate: [3, 5, 3],
                  translateY: [-4, -8, -4],
                  translateX: [6, 8, 6]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute top-0 left-0 w-full h-16 sm:h-20 md:h-24 bg-gradient-to-r from-primary-600 to-primary-700"></div>
                <div className="absolute top-16 sm:top-20 md:top-24 left-0 w-full px-4 sm:px-6 py-4 sm:py-6 md:py-8 h-full overflow-y-auto">
                  <h2 className="text-primary-900 font-serif font-bold text-lg sm:text-xl md:text-2xl mb-2">
                    International Journal of Universal Print
                  </h2>
                  <p className="text-primary-900 font-semibold text-xs sm:text-sm mb-1 flex flex-wrap gap-x-3 sm:gap-x-6 gap-y-1">
                    <span>ISSN: 2454-7263</span>
                    <span>UGC Approved No.: 62813</span>
                  </p>

                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">Volume 12, Issue 1 - 2025</p>

                                    <div className="mt-3 sm:mt-4 border-t border-gray-200 pt-3 sm:pt-4">
                    <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                      <Users size={14} className="text-primary-700" />
                      <span className="text-gray-700 font-semibold text-xs sm:text-sm">5 Featured Articles</span>
                    </div>

                    <motion.div 
                      className="text-xs sm:text-sm md:text-base lg:text-lg text-black mb-6 sm:mb-8 max-w-xl space-y-2 sm:space-y-3"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 0.4 }}
                    >
                      <p>→ Peer-reviewed, open-access journal advancing research across disciplines.</p> 
                      <p>→ Biannual Publication – Two Volumes Published Each Year</p> 
                      <p>→ Author will receive a Printed Volume distributed globally.</p> 
                      <p>→ DOI on Authors Demand.</p> 
                      <p>→ Fast Review and Publication Process.</p> 
                      <p>→ Free E-Certificate to Each Author.</p> 
                    </motion.div>

                    <div className="space-y-2 sm:space-y-3">
                      {[1, 2, 3].map((i) => (
                        <motion.div 
                          key={i} 
                          className="h-3 sm:h-4 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                        />
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
