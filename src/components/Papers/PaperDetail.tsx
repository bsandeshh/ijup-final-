import React from 'react';
import { FileText, Download, Users, Calendar, Tag, ExternalLink, MessageCircle } from 'lucide-react';
import { Paper } from '../../types';
import { motion } from 'framer-motion';

interface PaperDetailProps {
  paper: Paper;
}

const PaperDetail: React.FC<PaperDetailProps> = ({ paper }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-8">
        {/* Paper Category Tag & Date */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-primary-100 text-primary-800 font-medium text-sm rounded-full">
            {paper.keywords[0]}
          </span>
          <span className="text-gray-500 flex items-center text-sm">
            <Calendar size={16} className="mr-1" />
            Published: {new Date(paper.publicationDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>
        
        {/* Paper Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary-900 mb-6"
        >
          {paper.title}
        </motion.h1>
        
        {/* Authors Section */}
        <div className="mb-8">
          <div className="flex items-center text-gray-700 mb-4">
            <Users size={20} className="mr-2 text-primary-700" />
            <h2 className="text-xl font-medium">Authors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paper.authors.map((author) => (
              <div 
                key={author.id} 
                className="p-4 border border-gray-200 rounded-lg hover:border-primary-200 hover:bg-primary-50 transition-colors duration-200"
              >
                <h3 className="font-semibold text-primary-800">
                  {author.name}
                  {author.isCorresponding && 
                    <span className="ml-2 text-xs bg-accent-100 text-accent-800 py-1 px-2 rounded">
                      Corresponding
                    </span>
                  }
                </h3>
                <p className="text-gray-600">{author.affiliation}</p>
                {author.email && <p className="text-gray-500 text-sm">{author.email}</p>}
              </div>
            ))}
          </div>
        </div>
        
        {/* Paper Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <h3 className="text-sm uppercase text-gray-500 mb-1">DOI</h3>
            <p className="flex items-center">
              <ExternalLink size={16} className="mr-1 text-primary-600" />
              <a 
                href={`https://doi.org/${paper.doi}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-600 hover:text-primary-800 transition-colors duration-200"
              >
                {paper.doi}
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase text-gray-500 mb-1">Journal Reference</h3>
            <p className="text-gray-800">
              Vol. {paper.journalVolume}, Issue {paper.journalIssue}, pp. {paper.pageRange}
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase text-gray-500 mb-1">Status</h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium
              ${paper.status === 'published' ? 'bg-green-100 text-green-800' : 
                paper.status === 'in-review' ? 'bg-yellow-100 text-yellow-800' : 
                'bg-red-100 text-red-800'}`
            }>
              {paper.status.charAt(0).toUpperCase() + paper.status.slice(1)}
            </span>
          </div>
        </div>
        
        {/* Abstract */}
        <div className="mb-8">
          <h2 className="text-xl font-medium text-gray-800 mb-4">Abstract</h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              {paper.abstract}
            </p>
          </div>
        </div>
        
        {/* Keywords */}
        <div className="mb-8">
          <h2 className="text-xl font-medium text-gray-800 mb-4">Keywords</h2>
          <div className="flex flex-wrap gap-2">
            {paper.keywords.map((keyword, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                <Tag size={14} className="mr-1 text-gray-500" />
                {keyword}
              </span>
            ))}
          </div>
        </div>
        
        {/* Download and Citation Section */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
          {paper.pdfUrl && (
            <a 
              href={paper.pdfUrl} 
              className="flex items-center justify-center px-6 py-3 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors duration-200"
            >
              <Download size={18} className="mr-2" />
              Download Full Paper (PDF)
            </a>
          )}
          <button 
            className="flex items-center justify-center px-6 py-3 border border-primary-700 text-primary-700 rounded-md hover:bg-primary-50 transition-colors duration-200"
          >
            <FileText size={18} className="mr-2" />
            Cite This Paper
          </button>
          <button 
            className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200"
          >
            <MessageCircle size={18} className="mr-2" />
            Discuss
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaperDetail;