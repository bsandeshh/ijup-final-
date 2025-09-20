import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, BookOpen, Mail, Award, Building } from 'lucide-react';

const Resources: React.FC = () => {
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

  const fundingAgencies = ['DST', 'UGC', 'CSIR', 'NBHM'];
  const services = [
    'Conference proceeding',
    'Total Conference process',
    'Professional support throughout the total publishing process',
    'Copyright/Liability protection'
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 relative overflow-hidden">
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
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-3xl font-bold bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Resources & Conference Services
            </motion.h2>
            <motion.p 
              className="text-white text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Comprehensive support for academic conferences and publishing services
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Conferences Section */}
            <motion.div
              variants={itemVariants}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
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
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <Calendar className="h-8 w-8 text-accent-600 mr-3" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800">Conferences</h3>
              </motion.div>

              <motion.p 
                className="text-gray-700 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="font-bold text-accent-700">Balaghat Mathematical Sciences Development Society</span> organizes National and International conferences in collaboration with Colleges and institutions in subjects of Science and Technology.
              </motion.p>

              <motion.div
                className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-4 border border-red-100"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center mb-3">
                  <Building className="h-5 w-5 text-accent-600 mr-2" />
                  <h4 className="font-bold text-accent-800">Funding Sources</h4>
                </div>
                <p className="text-gray-700 mb-3">Funds can be received from:</p>
                <div className="flex flex-wrap gap-2">
                  {fundingAgencies.map((agency, index) => (
                    <motion.span
                      key={agency}
                      className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-accent-700 border border-accent-200 shadow-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {agency}
                    </motion.span>
                  ))}
                  <motion.span
                    className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-red-700 border border-red-200 shadow-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Other agencies
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>

            {/* Conference Publishing Services */}
            <motion.div
              variants={itemVariants}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div 
                className="flex items-center mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                >
                  <BookOpen className="h-8 w-8 text-accent-600 mr-3" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800">Publishing Services</h3>
              </motion.div>

              <motion.p 
                className="text-gray-700 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                The <span className="font-bold text-accent-700">Universal Print</span> Publishing Services produce high-quality, peer-reviewed conference publications in print, digital and online products. Our goal is to make the publishing process as effortless as possible for both organizers and authors.
              </motion.p>

              <motion.div
                className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-4 border border-red-100 mb-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center mb-3">
                  <Award className="h-5 w-5 text-accent-600 mr-2" />
                  <h4 className="font-bold text-accent-800">Our Services</h4>
                </div>
                <motion.ul 
                  className="space-y-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {services.map((service, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-gray-700"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 flex-shrink-0"></span>
                      <span className="font-medium">{service}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-r from-accent-600 to-accent-700 rounded-lg p-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-2">
                  <Mail className="h-5 w-5 mr-2" />
                  <h4 className="font-bold">Get Started</h4>
                </div>
                <p className="text-sm mb-2">To start the conference publishing process:</p>
                <motion.a
                  href="mailto:ijup@universalprint.org"
                  className="font-bold text-white hover:text-accent-100 underline transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ijup@universalprint.org
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
