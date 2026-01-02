import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import LoginPage from './pages/LoginPage';
import MemberProfile from './pages/MemberProfile';
import AdminDashboard from './pages/AdminDashboard';
import AdminEditProfile from './pages/AdminEditProfile';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
     // Redirect based on role if they try to access unauthorized page
     return <Navigate to={user.role === 'admin' ? '/admin' : '/profile'} replace />;
  }

  return children;
};

function App() {
  return (
    <DataProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />

            <Route
              path="/profile"
              element={
                <ProtectedRoute allowedRoles={['member']}>
                  <MemberProfile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/new"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminEditProfile />
                </ProtectedRoute>
              }
            />

             <Route
              path="/admin/edit/:id"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminEditProfile />
                </ProtectedRoute>
              }
            />

            {/* Catch all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </DataProvider>
  );
}

export default App;
