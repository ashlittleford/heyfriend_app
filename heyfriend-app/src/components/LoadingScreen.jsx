import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LoadingScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect after animation (e.g., 4 seconds)
    const timer = setTimeout(() => {
      navigate('/quiz');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={containerStyle}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        style={contentStyle}
      >
        <img
          src="/assets/hfLogo_1920x1080.svg"
          alt="Hey Friend Logo"
          style={logoStyle}
        />
        <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            style={{ marginTop: '20px', fontWeight: 'normal' }}
        >
          Hey friend
        </motion.h1>
      </motion.div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
  backgroundColor: '#f5f5f5'
};

const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const logoStyle = {
  maxWidth: '300px',
  width: '80%',
  height: 'auto'
};

export default LoadingScreen;
