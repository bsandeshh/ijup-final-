import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Paper } from '../types';
import { MOCK_PAPERS } from '../data/mockData';

interface AppContextType {
  papers: Paper[];
  setFilteredPapers: (papers: Paper[]) => void;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [papers, setPapers] = useState<Paper[]>(MOCK_PAPERS);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  const setFilteredPapers = (filteredPapers: Paper[]) => {
    setPapers(filteredPapers);
  };

  return (
    <AppContext.Provider
      value={{
        papers,
        setFilteredPapers,
        isLoggedIn,
        login,
        logout,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};