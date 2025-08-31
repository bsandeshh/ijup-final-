import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock4 } from 'lucide-react';
import PageLayout from '../components/Layout/PageLayout';
import LogoSection from '../components/Layout/LogoSection';

const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <PageLayout title="Contact Us..." titleClassName="text-white">
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
      
      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.p 
            className="text-white/90 mb-10 text-center text-lg leading-relaxed bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Have questions about submitting your paper, the review process, or any other aspect of the
            <strong className="text-accent-300 ml-1">IJUP?</strong><br />
            Our editorial team is here to help.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* Contact Form Animated from Left */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/95 backdrop-blur-sm shadow-2xl p-6 rounded-xl border border-white/20"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.h2 
                className="text-2xl font-bold text-accent-700 mb-6 relative inline-block"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Get in Touch
                <motion.span 
                  className="block mt-1 h-[3px] w-10 bg-accent-500 rounded-full relative"
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-2 w-2 bg-accent-500 rounded-full"></span>
                </motion.span>
              </motion.h2>

              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {['name', 'email', 'subject'].map((field) => (
                    <div key={field}>
                      <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                        {field.replace('-', ' ')}*
                      </label>
                      <input
                        id={field}
                        type={field === 'email' ? 'email' : 'text'}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="px-6 py-3 bg-accent-600 text-white rounded-xl hover:bg-accent-700 transition-all duration-300 flex items-center shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-6 text-center shadow"
                >
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We’ll get back to you within 2–3 business days.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Info Animated from Right */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/95 backdrop-blur-sm shadow-2xl p-6 rounded-xl border border-white/20"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.h2 
                className="text-2xl font-bold text-accent-700 mb-6 relative inline-block"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Contact Information
                <motion.span 
                  className="block mt-1 h-[3px] w-10 bg-accent-500 rounded-full relative"
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-2 w-2 bg-accent-500 rounded-full"></span>
                </motion.span>
              </motion.h2>

              <div className="space-y-6 text-sm">
                {/* Address */}
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <MapPin className="h-5 w-5 text-accent-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600 font-semibold">
                      MATHURA Heights, BMSD Society Office, <br />
                     Basaveshwar Chowke,  M G Road,<br />
                      Ahmedpur, Dist. Latur, MH, India – 413515
                    </p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Mail className="h-5 w-5 text-accent-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600 font-semibold">
                      Managing Editor:{' '}
                      <a href="mailto:sandeshbellale2020@gmail.com" className="text-accent-600 hover:text-accent-700 hover:underline transition-colors">
                        sandeshbellale2@gmail.com
                      </a><br />
                      Editor in Chief:{' '}
                      <a href="mailto:sidhesh.bellale@gmail.com" className="text-accent-600 hover:text-accent-700 hover:underline transition-colors">
                        sidhesh.bellale@gmail.com
                      </a>
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Phone className="h-5 w-5 text-accent-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600 font-semibold">
                      +91 8830005678<br />
                      +91 7887828878<br />
                      +91 7249835979
                    </p>
                  </div>
                </motion.div>

                {/* Office Hours */}
                <motion.div 
                  className="flex items-start bg-accent-100 border border-accent-200 rounded-xl p-4 shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Clock4 className="h-5 w-5 text-accent-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-accent-800 mb-2">Office Hours</h3>
                    <p className="text-accent-700 font-semibold">
                      Mon – Fri: 9:00 AM – 6:00 PM (EST)<br />
                      Sat – Sun: Closed
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Map Placeholder */}
          <motion.div 
            className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden h-80 shadow-2xl border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-accent-100 to-accent-200">
              <motion.p 
                className="text-accent-700 font-medium text-lg"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Interactive Map Would Be Embedded Here
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Logo Section */}
        <div className="mt-16">
          <LogoSection />
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
