import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { tools } from '../data/tools';
import { CATEGORIES } from '../data/questions';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scores = location.state?.scores;

  if (!scores) {
    return (
        <div style={containerStyle}>
            <p>No results found. Please take the quiz first.</p>
            <button onClick={() => navigate('/quiz')} style={buttonStyle}>Go to Quiz</button>
        </div>
    )
  }

  // Calculate Best Fit
  // Using Euclidean distance between User Score Vector and Tool Ideal Vector
  // Normalize scores first? For now, we assume raw scores are comparable if scales match.
  // Actually, let's normalize to percentage of max possible score for better comparison if needed,
  // but for this MVP, raw distance is fine assuming tools are calibrated to typical quiz outputs.

  const calculateDistance = (userScores, toolProfile) => {
    let sumSq = 0;
    CATEGORIES.forEach(cat => {
      const diff = (userScores[cat] || 0) - (toolProfile[cat] || 0);
      sumSq += diff * diff;
    });
    return Math.sqrt(sumSq);
  };

  const rankedTools = tools.map(tool => ({
    ...tool,
    distance: calculateDistance(scores, tool.idealProfile)
  })).sort((a, b) => a.distance - b.distance);

  const bestFit = rankedTools[0];
  const backups = rankedTools.slice(1, 3);

  // Prepare Chart Data
  // User profile vs Best Fit Profile
  const data = {
    labels: CATEGORIES,
    datasets: [
      {
        label: 'Your Profile',
        data: CATEGORIES.map(cat => scores[cat]),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.4, // smooth curve
      },
      {
        label: `${bestFit.name} Profile`,
        data: CATEGORIES.map(cat => bestFit.idealProfile[cat]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderDash: [5, 5],
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Your Needs vs. Recommended Tool',
      },
    },
    scales: {
        y: {
            beginAtZero: true
        }
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>We recommend: {bestFit.name}</h1>
      <p style={descriptionStyle}>{bestFit.description}</p>

      <div style={chartContainerStyle}>
        <Line data={data} options={options} />
      </div>

      <div style={backupContainerStyle}>
        <h3>Other options you might like:</h3>
        <ul style={listStyle}>
            {backups.map(tool => (
                <li key={tool.id} style={listItemStyle}>
                    <strong>{tool.name}</strong>: {tool.description}
                </li>
            ))}
        </ul>
      </div>

      <button onClick={() => navigate('/quiz')} style={buttonStyle}>Start Over</button>
    </div>
  );
};

const containerStyle = {
  width: '100%',
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const headerStyle = {
    fontSize: '2rem',
    fontWeight: 'normal',
    marginBottom: '1rem'
};

const descriptionStyle = {
    fontSize: '1.2rem',
    textAlign: 'center',
    marginBottom: '2rem',
    maxWidth: '600px'
};

const chartContainerStyle = {
    width: '100%',
    height: '400px',
    marginBottom: '3rem'
};

const backupContainerStyle = {
    marginBottom: '2rem',
    width: '100%',
    maxWidth: '600px',
    textAlign: 'left'
};

const listStyle = {
    listStyleType: 'none',
    padding: 0
};

const listItemStyle = {
    marginBottom: '1rem',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
};

const buttonStyle = {
    padding: '15px 30px',
    fontSize: '1rem',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    transition: 'all 0.3s ease'
};

export default Results;
