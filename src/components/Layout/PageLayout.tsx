import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  className?: string;
  withPadding?: boolean;
  titleClassName?: string;
}

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  className = '',
  withPadding = true,
  titleClassName = '',
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <motion.main
        className={`flex-grow ${withPadding ? 'pt-24 pb-16' : ''} ${className}`}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        {title && (
          <div className="container mx-auto px-4 mb-6 text-center">
            <h1 className={`text-3xl md:text-4xl font-serif font-bold ${titleClassName || 'text-primary-900'} relative inline-block`}>
              {title}
              <span className="block mt-2 h-[3px] w-10 bg-primary-500 rounded-full relative mx-auto">
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-2 w-2 bg-primary-500 rounded-full"></span>
              </span>
            </h1>
          </div>
        )}
        <div className={withPadding ? 'container mx-auto px-4' : ''}>
          {children}
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default PageLayout;
