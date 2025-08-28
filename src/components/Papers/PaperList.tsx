import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import PaperCard from './PaperCard';
import { Paper } from '../../types';
import { useAppContext } from '../../context/AppContext';
import { MOCK_PAPERS } from '../../data/mockData';

const PaperList: React.FC = () => {
  const { papers, setFilteredPapers, searchTerm, setSearchTerm } = useAppContext();
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null);
  
  // Extract all unique keywords from papers
  const allKeywords = Array.from(
    new Set(
      MOCK_PAPERS.flatMap(paper => paper.keywords)
    )
  ).sort();
  
  useEffect(() => {
    let filtered = MOCK_PAPERS;
    
    // Filter by search term
    if (searchTerm) {
      const lowercaseSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(paper => 
        paper.title.toLowerCase().includes(lowercaseSearch) ||
        paper.abstract.toLowerCase().includes(lowercaseSearch) ||
        paper.authors.some(author => author.name.toLowerCase().includes(lowercaseSearch)) ||
        paper.keywords.some(keyword => keyword.toLowerCase().includes(lowercaseSearch))
      );
    }
    
    // Filter by keyword
    if (activeKeyword) {
      filtered = filtered.filter(paper => 
        paper.keywords.includes(activeKeyword)
      );
    }
    
    setFilteredPapers(filtered);
  }, [searchTerm, activeKeyword, setFilteredPapers]);
  
  const handleKeywordClick = (keyword: string) => {
    if (activeKeyword === keyword) {
      setActiveKeyword(null); // Clear filter if already active
    } else {
      setActiveKeyword(keyword);
    }
  };
  
  return (
    <div>
      {/* Search bar */}
      <div className="mb-8">
        <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500">
          <div className="pl-4">
            <Search size={20} className="text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search for papers by title, author, or keyword..."
            className="flex-grow px-4 py-3 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {/* Filter by keywords */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Filter size={18} className="mr-2 text-gray-600" />
          <h3 className="text-lg font-medium text-gray-800">Filter by Keywords</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {allKeywords.map((keyword) => (
            <button
              key={keyword}
              onClick={() => handleKeywordClick(keyword)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeKeyword === keyword
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {keyword}
            </button>
          ))}
        </div>
      </div>
      
      {/* Results count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing <span className="font-semibold">{papers.length}</span> papers
          {activeKeyword && (
            <> filtered by <span className="font-semibold">{activeKeyword}</span></>
          )}
          {searchTerm && (
            <> matching <span className="font-semibold">"{searchTerm}"</span></>
          )}
        </p>
      </div>
      
      {/* Paper list */}
      {papers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {papers.map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border border-dashed border-gray-300 rounded-lg">
          <p className="text-gray-600 mb-2">No papers found matching your criteria.</p>
          <p className="text-gray-500">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
};

export default PaperList;