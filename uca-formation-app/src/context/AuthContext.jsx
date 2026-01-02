import React, { createContext, useContext, useState } from 'react';
import { useData } from './DataContext';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('uca-user');
    return saved ? JSON.parse(saved) : null;
  });
  const { members } = useData();

  const login = (email, password) => {
    // Simulated login logic
    if (email === 'admin@uca.org.au' && password === 'admin') {
      const adminUser = { role: 'admin', email, name: 'Admin User' };
      setUser(adminUser);
      localStorage.setItem('uca-user', JSON.stringify(adminUser));
      return true;
    }

    const member = members.find(m => m.email === email);
    // For prototype, password check is skipped or assumed 'password' for everyone
    if (member && password === 'password') {
      const memberUser = { role: 'member', email, id: member.id, name: member.fullName };
      setUser(memberUser);
      localStorage.setItem('uca-user', JSON.stringify(memberUser));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('uca-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
