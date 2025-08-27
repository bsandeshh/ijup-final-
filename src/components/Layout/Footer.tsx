import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const footerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: 'easeInOut' },
  }),
};

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-95" />

        {/* Geometric Pattern Overlay */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="gridPattern"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 0h10v10H0V0z"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#gridPattern)" />
        </svg>

        {/* Sharp Edge Bottom */}
        <div
          className="absolute bottom-0 left-0 w-full h-32 bg-gray-900"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 20px))', // Angled cut
          }}
        />

        {/* Abstract Shapes */}
        <div
          className="absolute top-1/4 left-0 w-40 h-40 bg-blue-500/20 rounded-lg transform rotate-45 blur-xl -translate-x-1/2 -translate-y-1/2"
        />
        <div
          className="absolute bottom-1/4 right-0 w-64 h-32 bg-purple-500/20 rounded-xl transform -rotate-12 blur-lg translate-x-1/3 translate-y-1/4"
        />
        <div
          className="absolute top-20 right-20 w-32 h-32 bg-green-500/20 rounded-full blur-2xl"
          style={{
            transform: 'translate(50%, -50%)',
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Journal Info */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
            className="flex flex-col space-y-4"
          >
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="font-serif font-bold text-xl tracking-wide text-gray-200">Follow IJUP</span>
            </div>
            <p className="text-gray-400 text-sm">International Journal of Universal Print</p>
            <p className="text-gray-400 text-sm">ISSN: 2455-7263</p>
            <p className="text-gray-400 text-sm">UGC Approved No.: 62813</p>

            <div className="flex space-x-4 mt-4">
              {['facebook', 'twitter', 'linkedin'].map((_, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, color: '#a7f3d0' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="text-gray-300 hover:text-teal-300 transition-colors duration-300"
                >
                  {/* Placeholder SVG icons */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
          >
            <h3 className="text-lg font-semibold mb-4 border-b border-purple-400/50 pb-1 text-gray-200">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                ['/', 'Home'],
                ['/about', 'About'],
                ['/browse', 'Browse Papers'],
                ['/submit', 'Submit Paper'],
                ['/editorial-board', 'Editorial Board'],
                ['/contact', 'Contact'],
              ].map(([to, label], i) => (
                <li key={i}>
                  <Link
                    to={to}
                    className="text-gray-400 hover:text-blue-300 transition-all duration-300 hover:pl-2 block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
          >
            <h3 className="text-lg font-semibold mb-4 border-b border-green-400/50 pb-1 text-gray-200">Resources</h3>
            <ul className="space-y-2 text-sm">
              {[
                ['/author-guidelines', 'Author Guidelines'],
                ['/reviewer-guidelines', 'Reviewer Guidelines'],
                ['/ethics', 'Publication Ethics'],
                ['/faq', 'FAQ'],
                ['/archives', 'Archives'],
                ['/membership', 'Membership'],
              ].map(([to, label], i) => (
                <li key={i}>
                  <Link
                    to={to}
                    className="text-gray-400 hover:text-teal-300 transition-all duration-300 hover:pl-2 block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
          >
            <h3 className="text-lg font-semibold mb-4 border-b border-yellow-400/50 pb-1 text-gray-200">Contact Research Center</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-yellow-400 mt-1.5 shrink-0" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  MATHURA Heights, BMSD Society Office, M.G. Road, Basaveshwar Chowk,<br />
                  Ahmedpur, Dist. Latur,<br />
                  Maharashtra, India – 413515
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <p className="text-gray-400">+91 8830005678, +91 78878 28878</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-400" />
                <a href="mailto:info@ijup-journal.org" className="text-gray-400 hover:text-red-300 transition-colors duration-300">
                  info@ijup-journal.org
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} universalprint. All rights reserved. | Designed by <span className="text-teal-400 font-medium">Sandesh Bellale</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
