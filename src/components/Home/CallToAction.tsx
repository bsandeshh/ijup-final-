import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
        <div className="inline-block group">
  <h1 className="text-4xl md:text-5xl font-serif font-extrabold mb-4 text-yellow-300 drop-shadow-lg">
    <span className="relative inline-block">
      <span className="relative z-10">Why</span>
      <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-200 rounded-full transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
    </span>{" "}
    to Publish In IJUP?
  </h1>
</div>


<h2 className="text-xl md:text-2xl font-medium text-red-100 mb-6">
  Share Your Research with the Global Academic Community!
</h2>


            <p className="text-lg text-gray-200 mb-8">
            Manuscript submission to UGC approved journal allows for quick publication, ensuring timely dissemination of findings. Open access journals provide unrestricted access to published research,
             promoting knowledge sharing and collaboration. Scholars often seek high-impact factor journals for wider visibility and recognition of their work. With the increasing demand for quick publishing, 
             researchers look for the best journals to publish their research papers.       </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/submit" 
                className="px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-md transition-colors duration-200 flex items-center space-x-2"
              >
                <FileText size={20} />
                <span>Submit Your Paper</span>
              </Link>
              <Link 
                to="/author-guidelines" 
                className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-primary-900 text-white font-semibold rounded-md transition-colors duration-200 flex items-center space-x-2"
              >
                <BookOpen size={20} />
                <span>Author Guidelines</span>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 text-gray-800">
              <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4">
                Publication Benefits 🏆
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Open Access Publication</span> - Reach a wider audience with no paywalls
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Rapid Peer Review</span> - Receive feedback from experts in your field
                  </p>
                </li>
                
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Global Visibility</span> - Indexed in major academic databases
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Digital Object Identifier (DOI)</span> - For permanent identification and citation
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Author Support</span> - Guidance throughout the publication process
                  </p>
                </li>
              </ul>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 bg-accent-500 opacity-50 rounded-full blur-2xl z-0"></div>
            <div className="absolute -bottom-6 -left-6 h-32 w-32 bg-primary-600 opacity-30 rounded-full blur-3xl z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;