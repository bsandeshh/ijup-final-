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
              {/* Facebook */}
              <motion.a
                href="https://www.facebook.com/share/1B6vSHtuNn/"
                aria-label="Follow on Facebook"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: '#a7f3d0' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-gray-300 hover:text-teal-300 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24H12.82V14.706H9.692V11.23h3.128V8.413c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.765v2.316h3.59l-.467 3.476h-3.123V24h6.127C23.405 24 24 23.405 24 22.676V1.325C24 .595 23.405 0 22.675 0z" />
                </svg>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/ijuniversalprint_?igsh=OHVuZ3hzdzc3N3g0"
                aria-label="Follow on Instagram"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: '#a7f3d0' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-gray-300 hover:text-teal-300 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.403a4.92 4.92 0 0 1 1.78 1.153 4.92 4.92 0 0 1 1.153 1.78c.163.457.347 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.427a4.92 4.92 0 0 1-1.153 1.78 4.92 4.92 0 0 1-1.78 1.153c-.457.163-1.257.347-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.403a4.92 4.92 0 0 1-1.78-1.153 4.92 4.92 0 0 1-1.153-1.78c-.163-.457-.347-1.257-.403-2.427C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.427a4.92 4.92 0 0 1 1.153-1.78 4.92 4.92 0 0 1 1.78-1.153c.457-.163 1.257-.347 2.427-.403C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.897.304 4.158.555A7.08 7.08 0 0 0 1.44 1.44 7.08 7.08 0 0 0 .555 4.158c-.251.739-.425 1.617-.483 2.894C.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.277.232 2.155.483 2.894a7.08 7.08 0 0 0 .885 2.718 7.08 7.08 0 0 0 2.718.885c.739.251 1.617.425 2.894.483C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.155-.232 2.894-.483a7.08 7.08 0 0 0 2.718-.885 7.08 7.08 0 0 0 .885-2.718c.251-.739.425-1.617.483-2.894.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.277-.232-2.155-.483-2.894a7.08 7.08 0 0 0-.885-2.718A7.08 7.08 0 0 0 19.842.555c-.739-.251-1.617-.425-2.894-.483C15.668.014 15.259 0 12 0z" />
                  <path d="M12 5.838A6.162 6.162 0 1 0 18.162 12 6.169 6.169 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 16 12a3.999 3.999 0 0 1-4 4z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </motion.a>

              {/* YouTube */}
              <motion.a
                href="#"
                aria-label="Follow on YouTube"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: '#a7f3d0' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-gray-300 hover:text-teal-300 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.499 6.203a3.006 3.006 0 0 0-2.115-2.128C19.468 3.5 12 3.5 12 3.5s-7.468 0-9.384.575A3.006 3.006 0 0 0 .501 6.203C0 8.128 0 12 0 12s0 3.872.501 5.797a3.006 3.006 0 0 0 2.115 2.128C4.532 20.5 12 20.5 12 20.5s7.468 0 9.384-.575a3.006 3.006 0 0 0 2.115-2.128C24 15.872 24 12 24 12s0-3.872-.501-5.797zM9.75 15.021V8.979L15.545 12 9.75 15.021z" />
                </svg>
              </motion.a>
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
