import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <header className="bg-brand-black text-white shadow-md border-b-4 border-brand-red">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
             {/* Placeholder for UCA Logo */}
             <div className="bg-brand-red text-white font-bold p-2 rounded-full h-10 w-10 flex items-center justify-center">
                UCA
             </div>
             <h1 className="text-xl font-semibold tracking-wide">Uniting Church in Australia</h1>
          </div>
          <div className="flex items-center space-x-4">
            {user && (
              <>
                <span className="text-sm hidden sm:block">Welcome, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-sm bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded transition-colors"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm border-t-4 border-brand-red">
        <p>&copy; {new Date().getFullYear()} Uniting Church in Australia. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
