import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Card from '../components/Card';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const success = login(email, password);
    if (success) {
      if (email === 'admin@uca.org.au') {
        navigate('/admin');
      } else {
        navigate('/profile');
      }
    } else {
      setError('Invalid credentials. Try member@uca.org.au / password or admin@uca.org.au / admin');
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-10">
        <Card title="Sign In">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded text-sm">
                {error}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="pt-2">
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </div>
          </form>
          <div className="mt-6 text-center text-sm text-gray-500">
             <p>Member Login: member@uca.org.au / password</p>
             <p>Admin Login: admin@uca.org.au / admin</p>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default LoginPage;
