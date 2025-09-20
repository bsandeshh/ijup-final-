import React from 'react';
import { motion } from 'framer-motion';
import CoverPagesViewer from './CoverPagesViewer';

const disciplines = [
  {
    title: 'Sciences & Technology',
    description: 'Advancing research and innovation across all branches of engineering to solve real-world challenges and drive technological progress.',
    image: '/cover.pages/Science & Technology.JPG', 
  },
  {
    title: 'Mathematics and Mathematical Sciences',
    description: 'Driving innovation through foundational and applied mathematical research across diverse scientific domains.',
    image: '/cover.pages/02.Mathmatics & Mathmatics Sciences.JPG',
  },
  {
    title: 'Business & Management Sciences',
    description: 'Empowering strategic decision-making through advanced research in global business, economics, and organizational leadership.',
    image: '/cover.pages/08.Bussiness &  Management Sciences.JPG',
  },
  {
    title: 'Chemistry & Industrial Chemistry',
    description: 'Exploring the molecular sciences to fuel breakthroughs in materials, energy, and sustainable industrial solutions.',
    image: '/cover.pages/05.Chemistry & Indistrial Chemistry.JPG',
  },
  {
    title: 'Electronic & Computer Sciences',
    description: 'Engineering next-generation technologies through cutting-edge research in electronics, embedded systems, and computation.',
    image: '/cover.pages/04.Elelctronic & Computer Science.jpg',
  },
  {
    title: 'History & Geographic Sciences',
    description: 'Uncovering patterns of human development and spatial dynamics through historical analysis and geographic research.',
    image: '/cover.pages/10.History.JPG',
  },
  {
    title: 'Botany & Microbiology',
    description: 'Innovating in life sciences with research in plant biology, microbial ecosystems, and environmental biotechnology.',
    image: '/cover.pages/06.Botany & Microbiology..jpg',
  },
  {
    title: 'Physics & Material Sciences',
    description: 'Advancing our understanding of the universe and material behavior to power innovation in science and technology.',
    image: '/cover.pages/Science & Technology.JPG',
  },
  {
    title: 'Zoology & Fishery Sciences',
    description: 'Enhancing biodiversity knowledge and sustainable practices through research in animal sciences and aquatic systems.',
    image: '/cover.pages/07.Zoology & Fishery Scinces.JPG',
  },
];

const Disciplines: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
            Our Scope & Disciplines
          </h2>
          <p className="text-gray-800 max-w-2xl mx-auto font-semibold text-center leading-relaxed">
            The <span className="font-bold text-orange-400">BMSD Society’s UNIVERSAL PRINT</span> publishes high-quality original research papers across all branches of science and applications. We welcome <span className="text-orange-400 font-bold">articles, surveys, and reviews</span> from researchers worldwide as follows :
          </p>
        </div>

        {/* Grid Section */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {disciplines.map((discipline, index) => (
            <motion.div
              key={index}
              variants={item}
              className="border border-gray-200 rounded-lg p-6 hover:border-primary-500 hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-center gap-4"
            >
              {/* Left Side - Title and Description */}
              <div className="flex flex-col w-full sm:w-1/2 sm:pr-6">
                <div className="h-12 w-12 flex items-center justify-center bg-primary-100 text-primary-700 rounded-full mb-4 font-bold text-xl">
                  {discipline.title.charAt(0)}
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary-900 mb-2">
                  {discipline.title}
                </h3>
                <p className="text-gray-600 text-sm font-semibold">{discipline.description}</p>
              </div>
              
              {/* Right Side - Image */}
              <div className="w-full sm:w-1/2">
                {/* --- THIS IS THE CORRECTED LINE --- */}
                <img 
                  src={discipline.image} 
                  alt={discipline.title} 
                  className="rounded-lg object-cover w-full h-40 sm:h-full" 
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cover Pages Viewer */}
        <div className="mt-12 text-center">
          <CoverPagesViewer />
        </div>
      </div>
    </section>
  );
};

export default Disciplines;