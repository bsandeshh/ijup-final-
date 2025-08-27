import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Upload, CheckCircle, Info, User } from 'lucide-react';
import PageLayout from '../components/Layout/PageLayout';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const successVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, type: 'spring', stiffness: 120 },
  },
};

const SubmitPaperPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <PageLayout title="Submit Your Paper" titleClassName="text-white">
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
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key={currentStep}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {/* Progress Steps */}
                <div className="mb-12">
                  <div className="flex items-center justify-between">
                    {[1, 2, 3].map((step) => (
                      <motion.div key={step} variants={itemVariants} className="flex flex-col items-center">
                        <div
                          className={`h-12 w-12 rounded-full flex items-center justify-center text-lg font-bold mb-2
                          ${
                            currentStep === step
                              ? 'bg-accent-600 text-white shadow-lg'
                              : currentStep > step
                              ? 'bg-accent-100 text-accent-700'
                              : 'bg-white/20 text-white/60'
                          }`}
                        >
                          {step}
                        </div>
                        <div className="text-sm font-semibold text-white">
                          {step === 1 ? 'Author Details' : step === 2 ? 'Paper Information' : 'Upload Manuscript'}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="relative mt-4">
                    <div className="absolute top-0 left-0 w-full h-1 bg-white/20 rounded-full">
                      <motion.div
                        className="absolute top-0 left-0 h-1 bg-accent-500 rounded-full"
                        style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                      />
                    </div>
                  </div>
                </div>

                <motion.div key={`step-${currentStep}`} variants={itemVariants}>
                  <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Step 1 */}
                      {currentStep === 1 && (
                        <>
                          <motion.h2 
                            className="text-2xl font-bold text-accent-700 mb-6 flex items-center justify-between border-b-2 border-accent-500 pb-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <span className="flex items-center">
                              <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                              >
                                <User className="mr-3 text-accent-600" size={28} />
                              </motion.div>
                              Author Details
                            </span>
                          </motion.h2>
                          <div className="space-y-6">
                            <div>
                              <label htmlFor="corresponding-author" className="block font-semibold text-sm text-gray-700 mb-2">
                                Corresponding Name*
                              </label>
                              <input
                                id="corresponding-author"
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-accent-500 focus:border-accent-500 transition-all duration-300"
                                placeholder="Full Name"
                                required
                              />
                            </div>

                            <div>
                              <label htmlFor="email" className="block font-semibold text-sm text-gray-700 mb-2">
                                Email Address*
                              </label>
                              <input
                                id="email"
                                type="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-accent-500 focus:border-accent-500 transition-all duration-300"
                                placeholder="email@example.com"
                                required
                              />
                            </div>

                            <div>
                              <label htmlFor="affiliation" className="block font-semibold text-sm text-gray-700 mb-2">
                                Affiliation*
                              </label>
                              <input
                                id="affiliation"
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-accent-500 focus:border-accent-500 transition-all duration-300"
                                placeholder="University/Institution"
                                required
                              />
                            </div>

                            <div>
                              <label htmlFor="co-authors" className="block font-semibold text-sm text-gray-700 mb-2">
                                Co-Authors (optional)
                              </label>
                              <textarea
                                id="co-authors"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-accent-500 focus:border-accent-500 transition-all duration-300"
                                placeholder="Add each co-author with their affiliation"
                                rows={3}
                              />
                            </div>
                          </div>
                        </>
                      )}

                      {/* Step 2 */}
                      {currentStep === 2 && (
                        <>
                          <motion.h2 
                            className="text-2xl font-bold text-accent-700 mb-6 flex items-center justify-between border-b-2 border-accent-500 pb-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <span className="flex items-center">
                              <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                              >
                                <FileText className="mr-3 text-accent-600" size={28} />
                              </motion.div>
                              Paper Information
                            </span>
                          </motion.h2>
                          <div className="space-y-6">
                            <div>
                              <label htmlFor="title" className="block font-semibold text-sm text-gray-700 mb-2">
                                Paper Title*
                              </label>
                              <input
                                id="title"
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-accent-500 focus:border-accent-500 transition-all duration-300"
                                placeholder="Enter the full title of your paper"
                                required
                              />
                            </div>

                            <div>
                              <label htmlFor="abstract" className="block font-semibold text-sm text-gray-700 mb-2">
                                Abstract*
                              </label>
                              <textarea
                                id="abstract"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-accent-500 focus:border-accent-500 transition-all duration-300"
                                placeholder="Provide a summary of your paper"
                                rows={6}
                                required
                              />
                            </div>

                            <div>
                              <label htmlFor="keywords" className="block font-semibold text-sm text-gray-700 mb-2">
                                Keywords* (comma separated)
                              </label>
                              <input
                                id="keywords"
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-accent-500 focus:border-accent-500 transition-all duration-300"
                                placeholder="e.g. AI, Sustainability"
                                required
                              />
                            </div>

                            <div>
                              <label htmlFor="category" className="block font-semibold text-sm text-gray-700 mb-2">
                                Primary Category*
                              </label>
                              <select
                                id="category"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-accent-500 focus:border-accent-500 transition-all duration-300"
                                required
                              >
                                <option value="">Select a category</option>
                                <option value="computer-science">Computer Science and AI</option>
                                <option value="life-sciences">Life Sciences and Biotechnology</option>
                                <option value="environmental">Environmental Sciences</option>
                                <option value="physics">Physics and Quantum Technologies</option>
                                <option value="engineering">Engineering and Materials Science</option>
                                <option value="social-sciences">Social Sciences and Humanities</option>
                                <option value="medical">Medical Sciences and Healthcare</option>
                              </select>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Step 3 */}
                      {currentStep === 3 && (
                        <>
                          <motion.h2 
                            className="text-2xl font-bold text-accent-700 mb-6 flex items-center justify-between border-b-2 border-accent-500 pb-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <span className="flex items-center">
                              <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                              >
                                <Upload className="mr-3 text-accent-600" size={28} />
                              </motion.div>
                              Upload Manuscript
                            </span>
                          </motion.h2>
                          <div className="space-y-6">
                            <motion.label 
                              className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-accent-500 transition-colors duration-300 flex flex-col items-center justify-center cursor-pointer"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Upload className="h-12 w-12 text-gray-400 mb-4" />
                              <p className="text-sm text-gray-600 mb-2">Drag and drop your manuscript PDF here</p>
                              <p className="text-xs text-gray-500 mb-4">Max size: 20MB</p>
                              <motion.span 
                                className="px-6 py-3 bg-accent-600 text-white rounded-xl hover:bg-accent-700 transition-all duration-300 shadow-lg"
                                whileHover={{ scale: 1.05 }}
                              >
                                Browse Files
                              </motion.span>
                              <input type="file" className="hidden" accept="application/pdf" required onChange={handleFileChange} />
                              {file && <p className="mt-4 text-green-600 text-sm font-medium">Selected File: {file.name}</p>}
                            </motion.label>

                            <motion.div 
                              className="bg-accent-50 border border-accent-200 rounded-xl p-6 shadow-lg"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              <div className="flex">
                                <Info className="h-6 w-6 text-accent-600 mr-3 flex-shrink-0 mt-1" />
                                <div>
                                  <h3 className="text-lg font-semibold text-accent-800">Submission Guidelines</h3>
                                  <ul className="mt-2 text-sm text-accent-700 list-disc pl-6 space-y-2">
                                    <li>Follow formatting guidelines</li>
                                    <li>Include figures and tables in PDF</li>
                                    <li>Remove identifying info (for double-blind review)</li>
                                    <li>Ensure references are correctly formatted</li>
                                  </ul>
                                </div>
                              </div>
                            </motion.div>

                            <div>
                              <label className="flex items-start">
                                <input type="checkbox" className="mt-1 mr-2" required />
                                <span className="text-sm text-gray-700">
                                  I confirm that this manuscript is original, unpublished work and I agree to the{' '}
                                  <a href="/ethics" className="text-accent-600 hover:text-accent-700 hover:underline transition-colors">publication ethics</a> and{' '}
                                  <a href="/author-guidelines" className="text-accent-600 hover:text-accent-700 hover:underline transition-colors">author guidelines</a>.
                                </span>
                              </label>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Navigation Buttons */}
                      <div className="mt-10 pt-8 border-t border-gray-200 flex justify-between">
                        {currentStep > 1 && (
                          <motion.button
                            type="button"
                            onClick={prevStep}
                            className="px-8 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Previous
                          </motion.button>
                        )}
                        <div className="ml-auto">
                          {currentStep < 3 ? (
                            <motion.button
                              type="button"
                              onClick={nextStep}
                              className="px-8 py-3 bg-accent-600 text-white rounded-xl hover:bg-accent-700 transition-all duration-300 shadow-lg"
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Continue
                            </motion.button>
                          ) : (
                            <motion.button
                              type="submit"
                              className="px-8 py-3 bg-accent-600 text-white rounded-xl hover:bg-accent-700 transition-all duration-300 shadow-lg"
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Submit Paper
                            </motion.button>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                variants={successVariants}
                initial="hidden"
                animate="visible"
                className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 text-center border border-white/20"
              >
                <motion.div 
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </motion.div>
                <h2 className="text-3xl font-semibold text-accent-700 mb-4">Submission Successful!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for submitting your paper to the International Journal of Universal Print.
                </p>
                <p className="text-gray-600 mb-10">
                  A confirmation email has been sent. We will notify you once the review process begins.
                </p>
                <div className="flex justify-center">
                  <motion.button
                    onClick={() => (window.location.href = '/')}
                    className="px-8 py-3 bg-accent-600 text-white rounded-xl hover:bg-accent-700 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Return to Home
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageLayout>
  );
};

export default SubmitPaperPage;
