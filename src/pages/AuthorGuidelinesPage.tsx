import React from 'react';
import { Info, FileText, CheckCircle, AlertCircle, FilePlus, FileSignature } from 'lucide-react';
import { motion } from 'framer-motion';
import PageLayout from '../components/Layout/PageLayout';

// AuthorGuidelinesPage component as the default export
const AuthorGuidelinesPage: React.FC = () => {

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

  const floatingAnimation = {
    x: [0, 20, 0],
    y: [0, -20, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
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
    <PageLayout title="Author Guidelines" titleClassName="text-white">
      <div className="relative">
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
        
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DC2626' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
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
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.2, 0.5, 0.2],
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
        <motion.div 
          className="container mx-auto px-4 py-12 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-8 shadow-2xl"
            variants={itemVariants}
          >
            <div className="flex">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <Info className="h-6 w-6 text-accent-600 mr-3 flex-shrink-0 mt-0.5" />
              </motion.div>
              <div>
                <motion.h2 
                  className="text-lg font-bold text-accent-700 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Before You Submit
                </motion.h2>
                <motion.p 
                  className="text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <strong>Please review these guidelines carefully</strong> before submitting your manuscript. 
                  <strong>Adherence to these guidelines ensures</strong> that your paper moves smoothly through our 
                  peer review and production processes.
                </motion.p>
              </div>
            </div>
          </motion.div>
          
          {/* Add Publication Process section here */}
          {/* <PublicationProcess /> */}
          
          <motion.section 
            className="mb-10 bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/20" 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.01, y: -2 }}
          >
            <motion.h2 
              className="text-xl font-bold mb-6 flex items-center bg-gradient-to-r from-accent-600 to-accent-700 p-4 text-white rounded-xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <AlertCircle className="mr-3 text-white" size={24} />
              </motion.div>
              General Submission Requirements
            </motion.h2>
            
            <motion.div 
              className="bg-accent-50 border border-accent-200 rounded-xl p-4 mb-6 shadow-lg"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.p 
                className="text-accent-800 font-bold text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                IMPORTANT: The paper under submission should <strong>NOT</strong> be published, copyrighted and submitted elsewhere.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="space-y-4 text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, staggerChildren: 0.1 }}
            >
              <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}><strong>Three hard copies</strong> of the paper should be submitted either to <strong>editor-in-chief</strong> or to any member of the <strong>editorial board</strong>.</motion.p>
              <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>The author/authors is/are <strong>required submitting the electronic versions</strong> upon or prior to the acceptance of paper.</motion.p>
              <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}>The <strong>acceptance of the paper implies the copyright transfer</strong> to the publications automatically.</motion.p>
              <motion.p 
                className="font-bold text-accent-800 bg-accent-50 p-3 rounded-lg border border-accent-200"
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 1.1 }}
              >
                Submit online at: <motion.a 
                  href="http://www.universalprint.org" 
                  className="text-accent-600 hover:text-accent-700 hover:underline font-bold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  www.universalprint.org  
                </motion.a>
              </motion.p>
            </motion.div>
          </motion.section>

          <motion.section 
            className="mb-10 bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/20" 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.01, y: -2 }}
          >
            <motion.h2 
              className="text-xl font-bold mb-6 flex items-center bg-gradient-to-r from-accent-600 to-accent-700 p-4 text-white rounded-xl shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FileText className="mr-3 text-white" size={24} />
              </motion.div>
              Manuscript Format Requirements
            </motion.h2>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, staggerChildren: 0.1 }}
            >
              <motion.div
                className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <motion.h3 
                  className="font-bold text-accent-700 mb-3 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Language & Software
                </motion.h3>
                <motion.p 
                  className="text-gray-700 mb-3 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <strong>Manuscript should be in English</strong> and prepared using:
                </motion.p>
                <motion.ul 
                  className="list-disc pl-6 space-y-2 text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, staggerChildren: 0.1 }}
                >
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}><strong>MS-Word</strong> (with MathType)</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}><strong>LaTeX or AMS-LaTeX</strong> (preferred)</motion.li>
                </motion.ul>
              </motion.div>
              
              <motion.div
                className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <motion.h3 
                  className="font-bold text-accent-700 mb-3 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Page Setup
                </motion.h3>
                <motion.ul 
                  className="list-disc pl-6 space-y-2 text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, staggerChildren: 0.05 }}
                >
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}><strong>Single spacing</strong> on good quality <strong>A4-size paper</strong></motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.85 }}>Page size: <strong>6.5" × 8.5"</strong></motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }} className="text-accent-700 font-bold bg-accent-50 p-2 rounded">Length: <strong>Maximum 10 typed pages</strong> (papers exceeding this will be rejected)</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.95 }}><strong>1" margin</strong> on all sides</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}>Page numbers: <strong>right aligned at bottom</strong></motion.li>
                </motion.ul>
              </motion.div>
              
              <motion.div
                className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <motion.h3 
                  className="font-bold text-accent-700 mb-3 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Required Format/Order
                </motion.h3>
                <motion.ol 
                  className="list-decimal pl-6 space-y-2 text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, staggerChildren: 0.05 }}
                >
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.85 }}><strong>1. Title</strong> (First letter capital)</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}><strong>2. Author/Authors</strong> (small capital)</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.95 }}><strong>3. Address</strong> (affiliation and e-mail)</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}><strong>4. Abstract</strong> (not more than 200 words)</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.05 }}><strong>5. Keywords</strong> (primary and secondary)</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }}><strong>6. Headings and Subheadings</strong> (Bold 14, 12 points)</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.15 }}><strong>7. Content of Paper</strong> (12 point)</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }}><strong>8. References</strong> (alphabetical in roman)</motion.li>
                </motion.ol>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section 
            className="mb-10 bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/20" 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.01, y: -2 }}
          >
            <motion.h2 
              className="text-xl font-bold mb-6 flex items-center bg-gradient-to-r from-accent-600 to-accent-700 p-4 text-white rounded-xl shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FilePlus className="mr-3 text-white" size={24} />
              </motion.div>
              Detailed Manuscript Structure
            </motion.h2>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, staggerChildren: 0.1 }}
            >
              <motion.div
                className="bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <motion.h3 
                  className="font-bold text-accent-700 mb-3 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Cover (First) Page: Title & Authors Detail
                </motion.h3>
                <motion.ul 
                  className="list-disc pl-6 space-y-2 text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, staggerChildren: 0.05 }}
                >
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.65 }}>Title: Bold, centered, capital letters, 14-point Times New Roman</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>Author details: Full name, designation, organization, city, state, country</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.75 }}>Contact: E-mail ID, alternate e-mail, mobile/landline numbers</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>Font: 11-point Times New Roman, centered below title</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.85 }}><strong>Note:</strong> Author names must not be mentioned in the manuscript body</motion.li>
                </motion.ul>
              </motion.div>
              
              <motion.div
                className="bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <motion.h3 
                  className="font-bold text-accent-700 mb-3 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Abstract & Keywords
                </motion.h3>
                <motion.ul 
                  className="list-disc pl-6 space-y-2 text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, staggerChildren: 0.05 }}
                >
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.75 }}>Maximum 200 words including keywords</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>Fully justified and italicized text</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.85 }}>Should highlight: research background, methodology, major findings, conclusion</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>Keywords: 4-7 keywords, listed alphabetically, separated by commas, full stop at end</motion.li>
                </motion.ul>
              </motion.div>
              
              <motion.div
                className="bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <motion.h3 
                  className="font-bold text-accent-700 mb-3 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Main Paper Structure
                </motion.h3>
                <motion.ol 
                  className="list-decimal pl-6 space-y-2 text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, staggerChildren: 0.05 }}
                >
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.85 }}>Introduction</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>Materials and Methods</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.95 }}>Results</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}>Discussions</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.05 }}>Conclusions</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }}>Acknowledgments</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.15 }}>References</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }}>Tables and Figures</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.25 }}>Supplementary information</motion.li>
                </motion.ol>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section 
            className="mb-10 bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/20" 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.01, y: -2 }}
          >
            <motion.h2 
              className="text-xl font-bold mb-6 flex items-center bg-gradient-to-r from-accent-600 to-accent-700 p-4 text-white rounded-xl shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FileSignature className="mr-3 text-white" size={24} />
              </motion.div>
              Formatting Specifications
            </motion.h2>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, staggerChildren: 0.1 }}
            >
              <motion.div
                className="bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <motion.h3 
                  className="font-bold text-accent-700 mb-3 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Text Formatting
                </motion.h3>
                <motion.ul 
                  className="list-disc pl-6 space-y-2 text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, staggerChildren: 0.05 }}
                >
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.65 }}>Font: 12-point Times New Roman</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>Language: English</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.75 }}>Spacing: Single space, single column</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>Text alignment: Fully justified</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.85 }}>Maximum length: 15 pages total</motion.li>
                </motion.ul>
              </motion.div>
              
              <motion.div
                className="bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <motion.h3 
                  className="font-bold text-accent-700 mb-3 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Headings
                </motion.h3>
                <motion.ul 
                  className="list-disc pl-6 space-y-2 text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, staggerChildren: 0.05 }}
                >
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.75 }}>All headings: Bold-faced, left aligned, fully capitalized</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>Sub-headings: Bold, fully capitalized, left aligned</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.85 }}>Text matter: Bold 12-point Times New Roman, single spaced</motion.li>
                </motion.ul>
              </motion.div>
              
              <motion.div
                className="bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <motion.h3 
                  className="font-bold text-accent-700 mb-3 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Figures and Tables
                </motion.h3>
                <motion.ul 
                  className="list-disc pl-6 space-y-2 text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, staggerChildren: 0.05 }}
                >
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.85 }}>Titles must be above the table</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>Sources of data should be mentioned below the table</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.95 }}>Figures and tables should be centered and separately numbered</motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}>Must be referred to from the main text</motion.li>
                </motion.ul>
              </motion.div>
              
              <motion.div
                className="bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <motion.h3 
                  className="font-bold text-accent-700 mb-3 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Equations
                </motion.h3>
                <motion.p 
                  className="text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  All equations should be consecutively numbered in parentheses, horizontally centered with equation number placed at the right.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.section>
          
          <motion.section 
            className="mb-10 bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/20" 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.01, y: -2 }}
          >
            <motion.h2 
              className="text-xl font-bold mb-6 flex items-center bg-gradient-to-r from-accent-600 to-accent-700 p-4 text-white rounded-xl shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                whileHover={{ rotate: 360 }}
              >
                <CheckCircle className="mr-3 text-white" size={24} />
              </motion.div>
              References & Acknowledgments
            </motion.h2>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, staggerChildren: 0.1 }}
            >
              <motion.div
                className="bg-white/95 backdrop-blur-sm border border-white/20 shadow-2xl rounded-lg p-4 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.h3 
                  className="font-bold text-accent-800 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  References
                </motion.h3>
                <motion.p 
                  className="text-gray-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Authors should list all references alphabetically at the end of the paper.
                </motion.p>
              </motion.div>
              
              <motion.div
                className="bg-white/95 backdrop-blur-sm border border-white/20 shadow-2xl rounded-lg p-4 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.h3 
                  className="font-bold text-accent-800 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Acknowledgments
                </motion.h3>
                <motion.p 
                  className="text-gray-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Acknowledgment of any funding sources, if any, should be included.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.section>
        </motion.div>
        </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AuthorGuidelinesPage;
