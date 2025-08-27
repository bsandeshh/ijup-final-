import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ChevronRight } from 'lucide-react';
import { Paper } from '../../types';

interface PaperCardProps {
  paper: Paper;
}

const PaperCard: React.FC<PaperCardProps> = ({ paper }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
              day: 'numeric'
            })}
          </span>
        </div>
        
        <h3 className="font-serif text-xl font-bold text-primary-900 mb-3 line-clamp-2">
          {paper.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {paper.abstract}
        </p>
        
        <div className="mb-4">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <User size={16} className="mr-2" />
            <span className="font-medium">Authors:</span>
          </div>
          <p className="text-sm text-gray-700">
            {paper.authors.map(author => author.name).join(', ')}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {paper.keywords.slice(0, 3).map((keyword, i) => (
            <span key={i} className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              <Tag size={12} className="mr-1 text-gray-500" />
              {keyword}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <span className="font-medium">DOI:</span> {paper.doi}
          </div>
          <Link 
            to={`/paper/${paper.id}`} 
            className="flex items-center text-primary-700 hover:text-primary-800 font-medium transition-colors duration-200"
          >
            <span>View Details</span>
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaperCard;