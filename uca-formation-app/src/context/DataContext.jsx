import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

const initialMembers = [
  {
    id: 1,
    email: 'member@uca.org.au',
    fullName: 'Sarah Johnson',
    formationPanelMembers: [
      { name: 'Rev. David Smith', role: 'Chair' },
      { name: 'Ms. Emily Brown', role: 'Mentor' }
    ],
    formationDaysCompleted: 2,
    walkingOnCountry: 'Yes',
    upcomingDates: [
      { date: '2024-05-15', description: 'Formation Day 3' },
      { date: '2024-08-20', description: 'Retreat' }
    ],
    panelDates: {
        term1: 'March 10-12',
        term2: 'July 15-17',
        term3: 'November 5-7'
    }
  },
  {
    id: 2,
    email: 'john@uca.org.au',
    fullName: 'John Doe',
    formationPanelMembers: [
      { name: 'Rev. Peter Jones', role: 'Chair' }
    ],
    formationDaysCompleted: 0,
    walkingOnCountry: 'No',
    upcomingDates: [],
    panelDates: {
        term1: 'March 10-12',
        term2: 'July 15-17',
        term3: 'November 5-7'
    }
  }
];

export const DataProvider = ({ children }) => {
  const [members, setMembers] = useState(() => {
    const saved = localStorage.getItem('uca-members');
    return saved ? JSON.parse(saved) : initialMembers;
  });

  useEffect(() => {
    localStorage.setItem('uca-members', JSON.stringify(members));
  }, [members]);

  const updateMember = (id, updatedData) => {
    setMembers(prev => prev.map(m => m.id === id ? { ...m, ...updatedData } : m));
  };

  const addMember = (newMember) => {
    const memberWithId = { ...newMember, id: Date.now() }; // Simple ID generation
    setMembers(prev => [...prev, memberWithId]);
  };

  const getMember = (id) => members.find(m => m.id === id);

  return (
    <DataContext.Provider value={{ members, updateMember, addMember, getMember }}>
      {children}
    </DataContext.Provider>
  );
};
