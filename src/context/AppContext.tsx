import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Paper } from '../types';
import { MOCK_PAPERS } from '../data/mockData';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';

interface AppContextType {
  papers: Paper[];
  setFilteredPapers: (papers: Paper[]) => void;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  supabase: typeof supabase;
  // Paper management functions
  fetchPapers: () => Promise<void>;
  createPaper: (paper: Omit<Paper, 'id' | 'created_at' | 'updated_at'>) => Promise<void>;
  updatePaper: (id: string, updates: Partial<Paper>) => Promise<void>;
  deletePaper: (id: string) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [papers, setPapers] = useState<Paper[]>(MOCK_PAPERS);
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useAuth();

  const isLoggedIn = !!user;

  const login = () => {
    // This will be handled by AuthContext
  };
  
  const logout = () => {
    // This will be handled by AuthContext
  };

  const setFilteredPapers = (filteredPapers: Paper[]) => {
    setPapers(filteredPapers);
  };

  // Paper management functions
  const fetchPapers = async () => {
    try {
      const { data, error } = await supabase
        .from('papers')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching papers:', error);
        return;
      }
      
      setPapers(data || []);
    } catch (error) {
      console.error('Error fetching papers:', error);
    }
  };

  const createPaper = async (paper: Omit<Paper, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('papers')
        .insert([paper])
        .select();
      
      if (error) {
        console.error('Error creating paper:', error);
        return;
      }
      
      if (data) {
        setPapers(prev => [data[0], ...prev]);
      }
    } catch (error) {
      console.error('Error creating paper:', error);
    }
  };

  const updatePaper = async (id: string, updates: Partial<Paper>) => {
    try {
      const { data, error } = await supabase
        .from('papers')
        .update(updates)
        .eq('id', id)
        .select();
      
      if (error) {
        console.error('Error updating paper:', error);
        return;
      }
      
      if (data) {
        setPapers(prev => prev.map(paper => 
          paper.id === id ? { ...paper, ...data[0] } : paper
        ));
      }
    } catch (error) {
      console.error('Error updating paper:', error);
    }
  };

  const deletePaper = async (id: string) => {
    try {
      const { error } = await supabase
        .from('papers')
        .delete()
        .eq('id', id);
      
      if (error) {
        console.error('Error deleting paper:', error);
        return;
      }
      
      setPapers(prev => prev.filter(paper => paper.id !== id));
    } catch (error) {
      console.error('Error deleting paper:', error);
    }
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
        supabase,
        fetchPapers,
        createPaper,
        updatePaper,
        deletePaper,
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