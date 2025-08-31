import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface CoverPage {
  id: number;
  title: string;
  image: string;
  description: string;
}

const CoverPagesViewer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const coverPages: CoverPage[] = [
    {
      id: 1,
      title: "Mathematics & Mathematical Sciences",
      image: "/cover.pages/02.Mathmatics & Mathmatics Sciences.JPG",
      description: "Research in pure and applied mathematics, statistics, and mathematical modeling"
    },
    {
      id: 2,
      title: "Electronic & Computer Science",
      image: "/cover.pages/04.Elelctronic & Computer Science.jpg",
      description: "Computer science, electronics, software engineering, and information technology"
    },
    {
      id: 3,
      title: "Chemistry & Industrial Chemistry",
      image: "/cover.pages/05.Chemistry & Indistrial Chemistry.JPG",
      description: "Chemical sciences, industrial processes, and material chemistry"
    },
    {
      id: 4,
      title: "Botany & Microbiology",
      image: "/cover.pages/06.Botany & Microbiology..jpg",
      description: "Plant sciences, microbiology, and biological research"
    },
    {
      id: 5,
      title: "Zoology & Fishery Sciences",
      image: "/cover.pages/07.Zoology & Fishery Scinces.JPG",
      description: "Animal sciences, marine biology, and fisheries research"
    },
    {
      id: 6,
      title: "Business & Management Sciences",
      image: "/cover.pages/08.Bussiness &  Management Sciences.JPG",
      description: "Business administration, management, and organizational studies"
    },
    {
      id: 7,
      title: "Language & Communication Sciences",
      image: "/cover.pages/09.Language & Communication Sciences.JPG",
      description: "Linguistics, communication studies, and language research"
    },
    {
      id: 8,
      title: "History",
      image: "/cover.pages/10.History.JPG",
      description: "Historical research, cultural studies, and archival research"
    },
    {
      id: 9,
      title: "Science & Technology",
      image: "/cover.pages/Science & Technology.JPG",
      description: "General science, technology, and interdisciplinary research"
    }
  ];

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % coverPages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + coverPages.length) % coverPages.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        onClick={openModal}
        className="inline-flex items-center px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>View Cover Pages</span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-accent-600 to-accent-700 text-white">
                <h2 className="text-2xl font-bold">Journal Cover Pages</h2>
                <motion.button
                  onClick={closeModal}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Main Content */}
              <div className="p-6">
                {/* Current Image Display */}
                <div className="relative mb-6">
                  <motion.img
                    key={currentIndex}
                    src={coverPages[currentIndex].image}
                    alt={coverPages[currentIndex].title}
                    className="w-full h-96 object-contain rounded-lg shadow-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Navigation Arrows */}
                  <motion.button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft size={24} className="text-gray-800" />
                  </motion.button>
                  
                  <motion.button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight size={24} className="text-gray-800" />
                  </motion.button>
                </div>

                {/* Image Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {coverPages[currentIndex].title}
                  </h3>
                  <p className="text-gray-600">
                    {coverPages[currentIndex].description}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    {currentIndex + 1} of {coverPages.length}
                  </p>
                </div>

                {/* Thumbnail Navigation */}
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                  {coverPages.map((page, index) => (
                    <motion.div
                      key={page.id}
                      onClick={() => goToImage(index)}
                      className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        index === currentIndex
                          ? 'border-accent-500 shadow-lg'
                          : 'border-gray-200 hover:border-accent-300'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src={page.image}
                        alt={page.title}
                        className="w-full h-20 object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CoverPagesViewer;
