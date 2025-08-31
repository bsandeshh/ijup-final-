import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, User, Tag } from 'lucide-react';
import { Paper } from '../../types';
import { motion } from 'framer-motion';

interface LatestPapersProps {
  papers: Paper[];
}

const LatestPapers: React.FC<LatestPapersProps> = ({ papers }) => {
  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="py-16 bg-gray-70">
      <div className="container mx-auto px-4">
        {/* Conference Inquiry Section */}
        <div className="bg-[#f7f7f7] p-6 md:p-10 mb-12">
  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
    <div className="text-left md:max-w-[50%] mt-2 md:mt-4">
    <h2 className="text-2xl md:text-4xl font-bold text-[#a0522d] mb-2">
  Conferences Organized by
</h2>
<h2 className="text-2xl md:text-4xl font-bold text-[#a0522d] mb-2">
   BMSD Society!
</h2>
      <div className="w-16 md:w-20 h-[3px] bg-[#3498db] mt-3 md:mt-5"></div>
    </div>
    
    <div className="mb-8">
      <p className="text-gray-600 md:max-w-2xl mx-auto mb-4 md:mb-6 font-semibold text-base md:text-lg leading-relaxed">
        The <span className="text-[#2c3e50] font-bold">Balaghat Mathematical Sciences Development Society</span> regularly organizes National and International Conferences in collaboration with various colleges and institutions, focusing on{' '}
        <span className="font-bold text-[#2c3e50]">Science and Technology</span>. These conferences aim to foster collaboration and bring together experts from around the world.
      </p>
      <p className="text-gray-600 md:max-w-2xl mx-auto mb-4 md:mb-6 font-semibold text-base md:text-lg leading-relaxed">
        We welcome funding support from esteemed agencies such as <span className="text-[#2c3e50] font-bold">DST</span>, <span className="text-[#2c3e50] font-bold">UGC</span>, <span className="text-[#2c3e50] font-bold">CSIR</span>, <span className="text-[#2c3e50] font-bold">NBHM</span>, and other government or private organizations to facilitate these conferences.{' '}
        <span className="font-bold text-[#2c3e50]">IJUP members</span> have the opportunity to participate in these events and present their research papers before a global audience of experts.
      </p>
      <p className="text-gray-600 md:max-w-2xl mx-auto mb-2 md:mb-6 font-semibold text-base md:text-lg leading-relaxed">
        The conferences are held <span className="font-bold text-[#2c3e50]">twice or thrice a year</span> in both <span className="font-bold text-[#2c3e50]">National</span> and <span className="font-bold text-[#2c3e50]">International</span> formats. The objective is to provide an international platform for researchers, scientists, and engineers, and to encourage original research, articles, surveys, and review papers from across the world, fostering the exchange of knowledge and innovations in science and technology.
      </p>
    </div>
  </div>
        </div>

        {/* Latest Updates Section */}
        <div className="mb-12 -mx-4 -mt-16 pt-16">
          <div className="bg-primary-900 text-white p-6">
            <div className="container mx-auto px-4">
              <div className="flex items-center space-x-6">
                <div className="bg-orange-500 p-3 rounded-full flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-semibold text-xl flex-shrink-0">Latest Updates</span>
                <div className="overflow-hidden flex-1">
                  <motion.div 
                    className="flex space-x-8 whitespace-nowrap text-lg"
                    animate={{ x: [200, -300] }}
                    transition={{ 
                      duration: 12, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                  >
                    <span className="text-orange-200 font-bold">→</span>
                    <span className="text-white">A call for papers, open to all branches of study, has been announced for the next issue.</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Publications Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">Latest Publications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most recent peer-reviewed research papers from leading scholars around the world.
          </p>
        </div>

        {/* ... rest of your Latest Publications code ... */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {papers.slice(0, 3).map((paper, index) => (
            <motion.div
              key={paper.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={animationVariants}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary-100 text-primary-800">
                    {paper.keywords[0]}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {new Date(paper.publicationDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-primary-900 mb-3 line-clamp-2">{paper.title}</h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{paper.abstract}</p>

                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <User size={16} className="mr-2" />
                    <span className="font-medium">Authors:</span>
                  </div>
                  <p className="text-sm text-gray-700">{paper.authors.map((author) => author.name).join(', ')}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {paper.keywords.slice(0, 3).map((keyword, i) => (
                    <span key={i} className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      <Tag size={12} className="mr-1 text-gray-500" />
                      {keyword}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/paper/${paper.id}`}
                  className="flex items-center text-primary-700 hover:text-primary-800 font-medium transition-colors duration-200"
                >
                  <span>Read Paper</span>
                  <ChevronRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/browse"
            className="inline-flex items-center px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-md transition-colors duration-200"
          >
            <span>View All Papers</span>
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestPapers;