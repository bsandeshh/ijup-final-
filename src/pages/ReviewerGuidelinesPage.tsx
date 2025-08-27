import React from 'react';
import { Glasses, ClipboardCheck, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import PageLayout from '../components/Layout/PageLayout';

const ReviewerGuidelinesPage: React.FC = () => {
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

  return (
    <PageLayout title="Reviewer Guidelines..." titleClassName="text-white">
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
            className="text-white/90 mb-8 text-lg leading-relaxed bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            variants={itemVariants}
          >
            Peer reviewers play a crucial role in maintaining the quality and integrity of research 
            published in the International Journal of Universal Print. These guidelines aim to help 
            reviewers understand their responsibilities and provide constructive, fair evaluations.
          </motion.p>
          
          <motion.section 
            className="mb-10"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-xl font-extrabold mb-4 flex items-center bg-gradient-to-r from-accent-600 to-accent-700 p-4 text-white rounded-xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Glasses className="mr-3 text-white" size={24} />
              </motion.div>
              Reviewer Responsibilities
            </motion.h2>
            
            <motion.div 
              className="space-y-4 bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300"
              whileHover={{ scale: 1.01, y: -2 }}
            >
              <motion.p 
                className="text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="font-bold text-accent-700">As a reviewer for the International Journal of Universal Print, you are asked to:</span>
              </motion.p>
              
              <motion.ul 
                className="list-disc pl-6 space-y-3 text-gray-700"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.li variants={itemVariants}>
                  <span className="font-medium text-accent-600">Provide objective assessment:</span> Evaluate 
                  the manuscript based on its academic merit, originality, methodological rigor, 
                  and relevance to the field.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <span className="font-medium text-accent-600">Maintain confidentiality:</span> Treat the 
                  manuscript as a confidential document. Do not share or discuss it with colleagues 
                  or use the information for personal advantage.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <span className="font-medium text-accent-600">Identify conflicts of interest:</span> Inform 
                  the editor immediately if you have any conflict of interest that might influence 
                  your review.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <span className="font-medium text-accent-600">Deliver timely reviews:</span> Complete your 
                  review within the agreed timeframe. If you cannot meet the deadline, inform the 
                  editor promptly.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <span className="font-medium text-accent-600">Provide constructive feedback:</span> Offer 
                  specific, actionable feedback that helps authors improve their work, even when 
                  recommending rejection.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <span className="font-medium text-accent-600">Respect diversity:</span> Appreciate different 
                  theoretical perspectives, methodologies, and writing styles that may reflect 
                  cultural or disciplinary differences.
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.section>

          <motion.section 
            className="mb-10"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-xl font-extrabold mb-4 flex items-center bg-gradient-to-r from-accent-600 to-accent-700 p-4 text-white rounded-xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <ClipboardCheck className="mr-3 text-white" size={24} />
              </motion.div>
              Review Process & Timeline
            </motion.h2>
            
            <motion.div 
              className="space-y-6 bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/20"
              whileHover={{ scale: 1.01, y: -2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.h3 
                  className="font-bold text-accent-700 mb-3 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Review Timeline
                </motion.h3>
                <motion.ul 
                  className="list-disc pl-6 space-y-2 text-gray-700"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.li variants={itemVariants}>
                    <span className="font-medium text-accent-600">Initial Response:</span> Please respond within 
                    <strong> 7 days</strong> to confirm your availability to review the manuscript.
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <span className="font-medium text-accent-600">Review Completion:</span> Complete your review within 
                    <strong> 3-4 weeks</strong> from the date of acceptance.
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <span className="font-medium text-accent-600">Extension Requests:</span> If you need more time, 
                    please contact the editor at least one week before the deadline.
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <span className="font-medium text-accent-600">Emergency Situations:</span> If unexpected circumstances 
                    arise, notify the editor immediately to arrange alternative arrangements.
                  </motion.li>
                </motion.ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.h3 
                  className="font-bold text-accent-700 mb-3 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Review Process Steps
                </motion.h3>
                <motion.ol 
                  className="list-decimal pl-6 space-y-2 text-gray-700"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.li variants={itemVariants}>
                    <strong>Initial Assessment:</strong> Review the title, abstract, and keywords to determine if the manuscript falls within your expertise.
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <strong>Detailed Review:</strong> Thoroughly examine the methodology, results, discussion, and conclusions.
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <strong>Technical Evaluation:</strong> Check for statistical accuracy, data presentation, and figure quality.
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <strong>Literature Review:</strong> Assess the adequacy of literature review and citation practices.
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <strong>Final Recommendation:</strong> Provide clear recommendation (Accept, Minor Revision, Major Revision, or Reject).
                  </motion.li>
                </motion.ol>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section 
            className="mb-10"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-xl font-extrabold mb-4 flex items-center bg-gradient-to-r from-accent-600 to-accent-700 p-4 text-white rounded-xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
              >
                <Clock className="mr-3 text-white" size={24} />
              </motion.div>
              Review Criteria & Standards
            </motion.h2>
            
            <motion.div 
              className="space-y-6 bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/20"
              whileHover={{ scale: 1.01, y: -2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.h3 
                  className="font-bold text-accent-700 mb-3 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Key Evaluation Areas
                </motion.h3>
                <motion.div 
                  className="grid md:grid-cols-2 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div 
                    className="bg-accent-50 p-4 rounded-lg border border-accent-200"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="font-semibold text-accent-700 mb-2">Originality & Significance</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Novel contribution to the field</li>
                      <li>• Theoretical or practical importance</li>
                      <li>• Advancement of knowledge</li>
                    </ul>
                  </motion.div>
                  <motion.div 
                    className="bg-accent-50 p-4 rounded-lg border border-accent-200"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="font-semibold text-accent-700 mb-2">Methodology & Design</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Appropriate research methods</li>
                      <li>• Sound experimental design</li>
                      <li>• Statistical validity</li>
                    </ul>
                  </motion.div>
                  <motion.div 
                    className="bg-accent-50 p-4 rounded-lg border border-accent-200"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="font-semibold text-accent-700 mb-2">Results & Analysis</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Clear presentation of findings</li>
                      <li>• Appropriate data interpretation</li>
                      <li>• Logical conclusions</li>
                    </ul>
                  </motion.div>
                  <motion.div 
                    className="bg-accent-50 p-4 rounded-lg border border-accent-200"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="font-semibold text-accent-700 mb-2">Writing & Presentation</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Clear and concise writing</li>
                      <li>• Proper structure and flow</li>
                      <li>• Quality of figures and tables</li>
                    </ul>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section 
            className="mb-10"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-xl font-extrabold mb-4 flex items-center bg-gradient-to-r from-accent-600 to-accent-700 p-4 text-white rounded-xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
              >
                <Shield className="mr-3 text-white" size={24} />
              </motion.div>
              Ethics & Best Practices
            </motion.h2>
            
            <motion.div 
              className="space-y-6 bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/20"
              whileHover={{ scale: 1.01, y: -2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.h3 
                  className="font-bold text-accent-700 mb-3 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Ethical Guidelines
                </motion.h3>
                <motion.ul 
                  className="list-disc pl-6 space-y-3 text-gray-700"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.li variants={itemVariants}>
                    <span className="font-medium text-accent-600">Plagiarism Detection:</span> Check for potential 
                    plagiarism and report any concerns to the editor immediately.
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <span className="font-medium text-accent-600">Data Integrity:</span> Evaluate the authenticity 
                    and reliability of presented data and research findings.
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <span className="font-medium text-accent-600">Authorship Issues:</span> Report any suspected 
                    authorship problems or ethical violations to the editorial team.
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <span className="font-medium text-accent-600">Research Ethics:</span> Ensure the research 
                    follows appropriate ethical standards and institutional approvals.
                  </motion.li>
                </motion.ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-accent-50 to-accent-100 p-6 rounded-xl border border-accent-200"
              >
                <motion.h3 
                  className="font-bold text-accent-800 mb-3 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Contact Information
                </motion.h3>
                <motion.p 
                  className="text-gray-700 mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  For any questions or concerns regarding the review process, please contact:
                </motion.p>
                <motion.div 
                  className="text-accent-700 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p>Editorial Office: <span className="text-accent-600">editor@ijup.org</span></p>
                  <p>Technical Support: <span className="text-accent-600">support@ijup.org</span></p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default ReviewerGuidelinesPage;
