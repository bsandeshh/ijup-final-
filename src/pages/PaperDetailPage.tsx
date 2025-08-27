import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, AlertCircle } from 'lucide-react';
import PageLayout from '../components/Layout/PageLayout';
import PaperDetail from '../components/Papers/PaperDetail';
import { MOCK_PAPERS } from '../data/mockData';
import { Paper } from '../types';

const PaperDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [paper, setPaper] = useState<Paper | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const foundPaper = MOCK_PAPERS.find(p => p.id === id);
    setPaper(foundPaper || null);
    setLoading(false);
  }, [id]);
  
  if (loading) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-700"></div>
        </div>
      </PageLayout>
    );
  }
  
  if (!paper) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16">
          <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-6 flex items-start">
            <AlertCircle size={24} className="mr-3 flex-shrink-0 text-red-600" />
            <div>
              <h2 className="text-xl font-bold mb-2">Paper Not Found</h2>
              <p className="mb-4">The paper you are looking for does not exist or may have been removed.</p>
              <Link 
                to="/browse" 
                className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium"
              >
                <ChevronLeft size={18} />
                <span>Back to All Papers</span>
              </Link>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }
  
  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link 
            to="/browse" 
            className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium"
          >
            <ChevronLeft size={18} />
            <span>Back to All Papers</span>
          </Link>
        </div>
        
        <PaperDetail paper={paper} />
        
        {/* Related Papers Section - could be implemented in a real app */}
        <div className="mt-12">
          <h2 className="text-2xl font-serif font-bold text-primary-900 mb-6">Related Papers</h2>
          <p className="text-gray-600">Feature coming soon!</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default PaperDetailPage;