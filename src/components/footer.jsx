import React from 'react';

const footer = () => {
  const footerStyles = {
    container: {
      background: 'linear-gradient(to bottom right, #8f8ea7, #2c2e3e)',
      padding: '60px 20px',
      color: '#fff',
      textAlign: 'center',
    },
    stats: {
      display: 'flex',
      justifyContent: 'center',
      gap: '80px',
      flexWrap: 'wrap',
    },
    box: {
      minWidth: '200px',
    },
    number: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    label: {
      fontSize: '1rem',
      color: '#d1d1e0',
    },
    pink: { color: '#c084fc' },
    magenta: { color: '#f472b6' },
    blue: { color: '#60a5fa' },
  };

  return (
    <footer style={footerStyles.container}>
      <div style={footerStyles.stats}>
        <div style={footerStyles.box}>
          <h2 style={{ ...footerStyles.number, ...footerStyles.pink }}>10,000+</h2>
          <p style={footerStyles.label}>Games Available</p>
        </div>
        <div style={footerStyles.box}>
          <h2 style={{ ...footerStyles.number, ...footerStyles.magenta }}>1M+</h2>
          <p style={footerStyles.label}>Active Players</p>
        </div>
        <div style={footerStyles.box}>
          <h2 style={{ ...footerStyles.number, ...footerStyles.blue }}>500+</h2>
          <p style={footerStyles.label}>New Releases Monthly</p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
