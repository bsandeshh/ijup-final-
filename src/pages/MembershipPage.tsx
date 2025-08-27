import React, { useState } from 'react';
import { Mail, Users, CheckCircle, Star, Send } from 'lucide-react';
import PageLayout from '../components/Layout/PageLayout';
import { motion } from 'framer-motion';

const MembershipPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    affiliation: '',
    position: '',
    researchArea: '',
    experience: '',
    motivation: '',
    membershipType: 'reviewer'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const membershipBenefits = [
    {
      icon: <CheckCircle className="h-6 w-6 text-accent-600" />,
      title: "Peer Review Opportunities",
      description: "Contribute to the academic community by reviewing cutting-edge research papers"
    },
    {
      icon: <Star className="h-6 w-6 text-accent-600" />,
      title: "Editorial Board Recognition",
      description: "Potential invitation to join our prestigious editorial board"
    },
    {
      icon: <Users className="h-6 w-6 text-accent-600" />,
      title: "Academic Network",
      description: "Connect with leading researchers and academics worldwide"
    },
    {
      icon: <Mail className="h-6 w-6 text-accent-600" />,
      title: "Priority Access",
      description: "Early access to published papers and journal updates"
    }
  ];

  const membershipTypes = [
    {
      type: "reviewer",
      title: "Peer Reviewer",
      description: "Review submitted manuscripts in your area of expertise",
      requirements: ["PhD or equivalent degree", "Active research experience", "Publication record"]
    },
    {
      type: "editorial",
      title: "Editorial Board Member",
      description: "Guide journal direction and oversee peer review process",
      requirements: ["Senior academic position", "Extensive publication record", "Editorial experience preferred"]
    },
    {
      type: "advisory",
      title: "Advisory Board Member",
      description: "Provide strategic guidance for journal development",
      requirements: ["Distinguished career", "International recognition", "Leadership experience"]
    }
  ];

  return (
    <PageLayout title="Membership" titleClassName="text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/50 to-primary-950"
            animate={{ opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          
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
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Join Our Academic Community</h2>
            <p className="text-white/90 text-lg leading-relaxed bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl">
              Become a valued member of the International Journal of Universal Print community. 
              Contribute to advancing research across multiple disciplines while building connections 
              with leading academics worldwide.
            </p>
          </motion.div>

          {/* Membership Benefits */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          >
            {membershipBenefits.map((benefit, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-accent-700 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Membership Types */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-8 text-center">Membership Types</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {membershipTypes.map((type, index) => (
                <motion.div 
                  key={type.type}
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <h4 className="text-xl font-bold text-accent-700 mb-3">{type.title}</h4>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Requirements:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {type.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-accent-600 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Membership Application Form */}
        <motion.div 
          className="max-w-3xl mx-auto bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-bold text-accent-700 mb-4">Apply for Membership</h3>
            <p className="text-gray-600">Fill out the form below to apply for membership in our academic community.</p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="affiliation" className="block text-sm font-medium text-gray-700 mb-2">
                    Institutional Affiliation *
                  </label>
                  <input
                    type="text"
                    id="affiliation"
                    name="affiliation"
                    required
                    value={formData.affiliation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                    placeholder="University/Institution name"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Position *
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                    placeholder="Professor, Researcher, etc."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="membershipType" className="block text-sm font-medium text-gray-700 mb-2">
                  Membership Type *
                </label>
                <select
                  id="membershipType"
                  name="membershipType"
                  required
                  value={formData.membershipType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                >
                  <option value="reviewer">Peer Reviewer</option>
                  <option value="editorial">Editorial Board Member</option>
                  <option value="advisory">Advisory Board Member</option>
                </select>
              </div>

              <div>
                <label htmlFor="researchArea" className="block text-sm font-medium text-gray-700 mb-2">
                  Research Area/Expertise *
                </label>
                <input
                  type="text"
                  id="researchArea"
                  name="researchArea"
                  required
                  value={formData.researchArea}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                  placeholder="Your primary research area"
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Academic/Research Experience *
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  required
                  rows={4}
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors resize-none"
                  placeholder="Brief description of your academic background and research experience"
                />
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                  Motivation for Membership *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  required
                  rows={4}
                  value={formData.motivation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors resize-none"
                  placeholder="Why do you want to join our academic community?"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent-600 to-accent-700 text-white py-4 px-8 rounded-lg font-bold hover:from-accent-700 hover:to-accent-800 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting Application...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="h-5 w-5 mr-2" />
                    Submit Application
                  </div>
                )}
              </motion.button>
            </form>
          ) : (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-accent-700 mb-4">Application Submitted!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for your interest in joining our academic community. We will review your application 
                and contact you within 5-7 business days.
              </p>
              <motion.button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    affiliation: '',
                    position: '',
                    researchArea: '',
                    experience: '',
                    motivation: '',
                    membershipType: 'reviewer'
                  });
                }}
                className="bg-accent-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Another Application
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-white mb-4">Questions about Membership?</h4>
            <p className="text-white/90 mb-4">
              If you have any questions about our membership program or need assistance with your application, 
              please don't hesitate to contact us.
            </p>
            <motion.a 
              href="mailto:bmsdsa@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-accent-600 text-white rounded-lg font-medium hover:bg-accent-700 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact Membership Team
            </motion.a>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default MembershipPage;
