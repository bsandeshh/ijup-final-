import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, UserCheck, FileCheck } from 'lucide-react';
import PageLayout from '../components/Layout/PageLayout';


const EthicsPage: React.FC = () => {
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

  return (
    <PageLayout title="Publication Ethics..." titleClassName="text-white">
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
          <div className="max-w-4xl mx-auto space-y-12">

            <motion.p
              className="text-white/90 text-lg leading-relaxed bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl"
              variants={itemVariants}
            >
              <strong className="font-semibold text-accent-300">
                The International Journal of Universal Print
              </strong>{' '}
              is committed to maintaining the highest standards of publication ethics and follows the
              principles outlined by the Committee on Publication Ethics (COPE). This page details
              our expectations for authors, reviewers, and editors.
            </motion.p>

            {/* Section: General Principles */}
            <motion.section 
              className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300" 
              variants={itemVariants}
              whileHover={{ scale: 1.01, y: -2 }}
            >
              <motion.h2 
                className="text-xl font-extrabold mb-6 flex items-center bg-gradient-to-r from-accent-600 to-accent-700 p-4 text-white rounded-xl shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Shield size={24} className="text-white mr-3" />
                </motion.div>
                General Principles
              </motion.h2>
              <motion.ul 
                className="list-disc pl-6 space-y-3 text-gray-700 text-base"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.li variants={itemVariants}>The integrity and validity of research reporting</motion.li>
                <motion.li variants={itemVariants}>Fair and unbiased evaluation of submissions</motion.li>
                <motion.li variants={itemVariants}>Transparency in editorial decisions and processes</motion.li>
                <motion.li variants={itemVariants}>Respect for intellectual property and proper attribution</motion.li>
                <motion.li variants={itemVariants}>Protection of human and animal subjects in research</motion.li>
                <motion.li variants={itemVariants}>Disclosure of conflicts of interest</motion.li>
              </motion.ul>
            </motion.section>

            {/* Section: Responsibilities of Authors */}
            <motion.section 
              className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300 space-y-6" 
              variants={itemVariants}
              whileHover={{ scale: 1.01, y: -2 }}
            >
              <motion.h2 
                className="text-xl font-extrabold mb-6 flex items-center bg-gradient-to-r from-accent-600 to-accent-700 p-4 text-white rounded-xl shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                >
                  <UserCheck size={24} className="text-white mr-3" />
                </motion.div>
                Responsibilities of Authors
              </motion.h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {[
                  {
                    title: 'Originality and Plagiarism',
                    text: 'Authors must ensure that their work is entirely original and properly cites the work of others. Plagiarism in any form is unacceptable.',
                  },
                  {
                    title: 'Data Integrity',
                    text: 'Authors are responsible for the accuracy of their data. Fabrication or falsification of results is serious misconduct.',
                  },
                  {
                    title: 'Authorship and Acknowledgment',
                    text: 'Only individuals who made significant contributions should be listed as authors. Others should be acknowledged appropriately.',
                  },
                  {
                    title: 'Multiple, Redundant, or Concurrent Publication',
                    text: 'Submitting the same manuscript to multiple journals is unethical.',
                  },
                  {
                    title: 'Disclosure and Conflicts of Interest',
                    text: 'Authors must disclose financial or personal relationships that could influence their work.',
                  },
                  {
                    title: 'Research Involving Human Subjects or Animals',
                    text: 'All such research must follow ethical guidelines and receive proper approvals.',
                  },
                ].map(({ title, text }) => (
                  <motion.div key={title} variants={itemVariants} className="border-l-4 border-accent-500 pl-4 py-2">
                    <h3 className="font-semibold text-accent-700 mb-2">
                      ⇒ {title}
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed">{text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section: Editorial Responsibilities */}
            <motion.section 
              className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300 space-y-6" 
              variants={itemVariants}
              whileHover={{ scale: 1.01, y: -2 }}
            >
              <motion.h2 
                className="text-xl font-extrabold mb-6 flex items-center bg-gradient-to-r from-accent-600 to-accent-700 p-4 text-white rounded-xl shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                >
                  <FileCheck size={24} className="text-white mr-3" />
                </motion.div>
                Editorial Responsibilities
              </motion.h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {[
                  {
                    title: 'Publication Decisions',
                    text: "Editors are responsible for deciding which articles to publish, guided by policies and legal requirements.",
                  },
                  {
                    title: 'Fair Play',
                    text: 'Editors evaluate manuscripts based solely on academic merit without discrimination.',
                  },
                  {
                    title: 'Confidentiality',
                    text: 'Editors must not disclose any manuscript information to unauthorized persons.',
                  },
                  {
                    title: 'Disclosure and Conflicts of Interest',
                    text: 'Editors must avoid using unpublished materials for personal research.',
                  },
                ].map(({ title, text }) => (
                  <motion.div key={title} variants={itemVariants} className="border-l-4 border-accent-500 pl-4 py-2">
                    <h3 className="font-semibold text-accent-700 mb-2">
                      ⇒ {title}
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed">{text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section: Handling Violations */}
            <motion.section 
              className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300 space-y-6" 
              variants={itemVariants}
              whileHover={{ scale: 1.01, y: -2 }}
            >
              <motion.h2 
                className="text-xl font-extrabold mb-6 flex items-center bg-gradient-to-r from-accent-600 to-accent-700 p-4 text-white rounded-xl shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
                >
                  <AlertTriangle size={24} className="text-white mr-3" />
                </motion.div>
                Handling Publication Ethics Violations
              </motion.h2>
              <motion.p 
                className="text-gray-700 text-base"
                variants={itemVariants}
              >
                We take allegations seriously and follow COPE guidelines to resolve them. Steps include:
              </motion.p>
              <motion.ol 
                className="list-decimal pl-6 space-y-3 text-gray-700"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.li variants={itemVariants}>Gathering relevant information and documentation</motion.li>
                <motion.li variants={itemVariants}>Contacting authors for explanation or clarification</motion.li>
                <motion.li variants={itemVariants}>Consulting additional experts if needed</motion.li>
                <motion.li variants={itemVariants}>
                  Possible actions:
                  <motion.ul 
                    className="list-disc pl-6 mt-2 space-y-1"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.li variants={itemVariants}>Rejection of the manuscript</motion.li>
                    <motion.li variants={itemVariants}>Correction or retraction notices</motion.li>
                    <motion.li variants={itemVariants}>Notifying institution/funding body</motion.li>
                    <motion.li variants={itemVariants}>Submission embargo for future work</motion.li>
                  </motion.ul>
                </motion.li>
              </motion.ol>
              <motion.p 
                className="text-gray-700 text-base"
                variants={itemVariants}
              >
                Allegations may be submitted to the Editor-in-Chief or Managing Editor and will be handled confidentially.
              </motion.p>
            </motion.section>

            {/* Commitment Box */}
            <motion.div
              className="bg-gradient-to-r from-accent-600 to-accent-700 rounded-xl p-8 text-center shadow-2xl border border-accent-500/30"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h2 
                className="text-2xl font-extrabold text-white mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Our Commitment
              </motion.h2>
              <motion.p 
                className="text-white/90 mb-4 leading-relaxed text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Advertising or commercial revenue does not influence editorial decisions. We strive to uphold transparency and ethical integrity.
              </motion.p>
              <motion.p 
                className="text-white/90 leading-relaxed text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Our policy aligns with COPE's Code of Conduct and international publishing standards.
              </motion.p>
            </motion.div>
          </div>
      </motion.div>
    </PageLayout>
  );
};

export default EthicsPage;
