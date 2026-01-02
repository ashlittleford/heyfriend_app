import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { questions, CATEGORIES } from '../data/questions';

const Quiz = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState(
    CATEGORIES.reduce((acc, cat) => ({ ...acc, [cat]: 0 }), {})
  );
  const navigate = useNavigate();

  const handleAnswer = (option) => {
    // Update scores based on the selected option's impacts
    const newScores = { ...scores };
    Object.keys(option.impacts).forEach(cat => {
      newScores[cat] += option.impacts[cat];
    });
    setScores(newScores);

    // Move to next question or finish
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
        // Pass the final scores to the parent or navigate with state
        if (onComplete) {
            onComplete(newScores);
        }
        navigate('/results', { state: { scores: newScores } });
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div style={containerStyle}>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          style={questionContainerStyle}
        >
          <h2 style={questionTextStyle}>{currentQuestion.text}</h2>
          <div style={optionsContainerStyle}>
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                style={buttonStyle}
              >
                {option.text}
              </button>
            ))}
          </div>
          <div style={progressStyle}>
              Question {currentQuestionIndex + 1} of {questions.length}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const containerStyle = {
  width: '100%',
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  display: 'flex',
  justifyContent: 'center'
};

const questionContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%'
};

const questionTextStyle = {
  fontSize: '1.5rem',
  marginBottom: '2rem',
  textAlign: 'center',
  fontWeight: 'normal'
};

const optionsContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  width: '100%',
  maxWidth: '400px'
};

const buttonStyle = {
  padding: '15px 20px',
  fontSize: '1rem',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
};

const progressStyle = {
    marginTop: '2rem',
    color: '#888',
    fontSize: '0.9rem'
};

export default Quiz;
