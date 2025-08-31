import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PageLayout from '../components/Layout/PageLayout';
import { motion, AnimatePresence } from 'framer-motion';

const FaqPage: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

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

  const faqItems = [
    {
      question: "What is the scope of the International Journal of Universal Print?",
      answer:
        "The International Journal of Universal Print is an interdisciplinary, peer-reviewed journal that publishes original research across multiple fields including Computer Science, Life Sciences, Environmental Sciences, Physics, Engineering, Social Sciences, and Medical Sciences. We welcome submissions that make significant contributions to their respective fields.",
    },
    {
      question: "How long does the peer review process take?",
      answer:
        "Our goal is to provide authors with a first decision within 4-5 days of submission. The complete process, from submission to final decision, typically takes 4-5 days, depending on the availability of reviewers and the extent of any revisions required. We strive to maintain a balance between thoroughness and efficiency in our review process.",
    },
    {
      question: "Is there a publication fee?",
      answer:
        "Yes, the International Journal of Universal Print charges an Article Processing Charge (APC) of $1,200 USD for accepted manuscripts. This fee covers the costs of peer review, production, and open access publication. We offer fee waivers and discounts for researchers from low and middle-income countries. Please contact the editorial office for more information about our waiver policy.",
    },
    {
      question: "Does the journal offer open access?",
      answer:
        "Yes, the International Journal of Universal Print is fully open access. All published articles are immediately and permanently available for anyone to read, download, and share. We publish under a Creative Commons Attribution (CC BY) license, which allows for maximum dissemination and reuse of the content while requiring attribution to the original authors.",
    },
    {
      question: "How do I submit a manuscript?",
      answer:
        "Manuscripts should be submitted through our online submission system, accessible from the 'Submit Paper' section of our website. First-time users will need to create an account. The system will guide you through the submission process, including uploading your manuscript files, providing author information, and suggesting potential reviewers. Please ensure your manuscript follows our formatting guidelines before submission.",
    },
    {
      question: "Can I suggest or exclude reviewers?",
      answer:
        "Yes, during the submission process, you have the option to suggest up to 5 potential reviewers who you believe are qualified to review your manuscript. You may also indicate up to 3 individuals you would prefer not to review your work. While the editor will consider these suggestions, the final selection of reviewers is at the editor's discretion.",
    },
    {
      question: "What is your policy on preprints?",
      answer:
        "The International Journal of Universal Print accepts submissions of papers that have been previously posted on preprint servers such as arXiv, bioRxiv, or medRxiv. We consider such postings to be preliminary communications that do not compromise the originality of the work. However, we ask that you disclose any preprint postings during the submission process.",
    },
    {
      question: "How are special issues organized?",
      answer:
        "Special issues focus on emerging topics or themes within the journal's scope. They may be proposed by potential guest editors or initiated by the journal's editorial board. If you're interested in proposing a special issue, please contact the Editor-in-Chief with a detailed proposal including the topic, rationale, potential contributors, and timeline. Guest editors are responsible for the call for papers, preliminary screening of submissions, and recommending reviewers, while the journal's editors maintain oversight of the peer review process.",
    },
    {
      question: "What citation style should I use?",
      answer:
        "The International Journal of Universal Print uses the APA (American Psychological Association) citation style, 7th edition. This applies to in-text citations and the reference list. Please ensure all citations are accurate and complete, including DOIs where available.",
    },
    {
      question: "How can I become a reviewer for the journal?",
      answer:
        "We are always looking for qualified reviewers across our fields of interest. If you're interested in becoming a reviewer, please send an email to the editorial office with your CV, areas of expertise, and any specific keywords that match your research interests. Having a publication record in peer-reviewed journals is generally expected for reviewers.",
    },
  ];

  return (
    <PageLayout title="Frequently Asked Questions..." titleClassName="text-white">
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
        <div className="max-w-3xl mx-auto">
          <motion.p 
            className="text-white/90 mb-8 text-center font-medium text-lg leading-relaxed bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl"
            variants={itemVariants}
          >
            Find answers to common questions about the International Journal of Universal Print,
            including submission guidelines, review processes, and publication policies.
          </motion.p>

          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-white/20 hover:shadow-3xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <motion.button
                  onClick={() => toggleItem(index)}
                  className={`w-full px-6 py-5 text-left font-extrabold flex justify-between items-center transition-all duration-300
                    ${openItem === index 
                      ? "bg-gradient-to-r from-accent-600 to-accent-700 text-white" 
                      : "text-gray-800 hover:bg-accent-50"
                    }
                  `}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="text-base">{item.question}</span>
                  <motion.div
                    animate={{ rotate: openItem === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openItem === index ? (
                      <ChevronUp className="h-6 w-6" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-accent-600" />
                    )}
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {openItem === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 py-6 bg-white text-gray-700 text-base leading-relaxed border-t border-accent-100">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-12 bg-gradient-to-r from-accent-600 to-accent-700 rounded-xl p-8 shadow-2xl border border-accent-500/30"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h2 
              className="text-2xl font-bold text-white mb-4 text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Didn't Find Your Answer?
            </motion.h2>
            <motion.p 
              className="text-white/90 text-center mb-6 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              If you have any questions that aren't addressed here, please don't hesitate to contact us.
            </motion.p>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-accent-700 rounded-xl font-bold hover:bg-accent-50 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default FaqPage;
