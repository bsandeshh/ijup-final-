import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; // arrow icon from lucide-react

// No need to import images from the public folder. We will reference them directly.

const disciplines = [
  {
    title: 'Sciences & Technology',
    description:
      'Advancing research and innovation across all branches of engineering to solve real-world challenges and drive technological progress.',
    // Correct Path: Starts with '/' to reference the public folder root.
    image: '/01.Science & Technology.jpg', 
  },
  {
    title: 'Mathematics and Mathematical Sciences',
    description:
      'Driving innovation through foundational and applied mathematical research across diverse scientific domains.',
    image: '/02.Mathmatics & Mathmatics Sciences.JPG',
  },
  {
    title: 'Business & Management Sciences',
    description:
      'Empowering strategic decision-making through advanced research in global business, economics, and organizational leadership.',
    image: '/08.Bussiness &  Management Sciences.JPG',
  },
  {
    title: 'Chemistry & Industrial Chemistry',
    description:
      'Exploring the molecular sciences to fuel breakthroughs in materials, energy, and sustainable industrial solutions.',
    image: '/05.Chemistry & Indistrial Chemistry.JPG',
  },
  {
    title: 'Electronic & Computer Sciences',
    description:
      'Engineering next-generation technologies through cutting-edge research in electronics, embedded systems, and computation.',
    image: '/04.Elelctronic & Computer Science  ..jpg',
  },
  {
    title: 'History & Geographic Sciences',
    description:
      'Uncovering patterns of human development and spatial dynamics through historical analysis and geographic research.',
    image: '/10.History.JPG',
  },
  {
    title: 'Botany & Microbiology',
    description:
      'Innovating in life sciences with research in plant biology, microbial ecosystems, and environmental biotechnology.',
    image: '/06.Botany & Microbiology..jpg',
  },
  {
    title: 'Physics & Material Sciences',
    description:
      'Advancing our understanding of the universe and material behavior to power innovation in science and technology.',
    // You'll need to add the correct filename for this one.
    image: '/path/to/image8.jpg', // << UPDATE THIS PATH
  },
  {
    title: 'Zoology & Fishery Sciences',
    description: 
      'Enhancing biodiversity knowledge and sustainable practices through research in animal sciences and aquatic systems.',
    image: '/07.Zoology & Fishery Scinces.JPG',
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
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6"
        >
          {disciplines.map((discipline, index) => (
            <motion.div
              key={index}
              variants={item}
              className="border border-gray-200 rounded-lg p-6 hover:border-primary-500 hover:shadow-md transition-all duration-300 flex items-center"
            >
              {/* Left Side - Title and Description */}
              <div className="flex flex-col w-1/2 pr-6">
                <div className="h-12 w-12 flex items-center justify-center bg-primary-100 text-primary-700 rounded-full mb-4 font-bold text-xl">
                  {discipline.title.charAt(0)}
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary-900 mb-2">
                  {discipline.title}
                </h3>
                <p className="text-gray-600 text-sm font-semibold">{discipline.description}</p>
              </div>
              
              {/* Right Side - Image */}
              <div className="w-1/2">
                <img 
                  src={process.env.PUBLIC_URL + discipline.image} 
                  alt={discipline.title} 
                  className="rounded-lg object-cover w-full h-full" 
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Cover Page Button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors duration-300">
            View Cover Pages
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Disciplines;