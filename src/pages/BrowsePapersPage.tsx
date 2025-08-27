import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import PaperList from '../components/Papers/PaperList';

const BrowsePapersPage: React.FC = () => {
  return (
    <PageLayout title="Browse Papers" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <p className="text-gray-600 max-w-2xl">
            Explore our collection of peer-reviewed research papers across various disciplines. 
            Use the filters and search functionality to find papers relevant to your interests.
          </p>
        </div>
        <PaperList />
      </div>
    </PageLayout>
  );
};

export default BrowsePapersPage;