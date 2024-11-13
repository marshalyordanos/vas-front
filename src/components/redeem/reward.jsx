import React from 'react';

const RewardItem = ({ title, points, cost, count }) => {
  return (
    <div style={{
      backgroundColor: '#EDEDED',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '140px',
      padding: '25px',
      textAlign: 'center',
      position: 'relative',  // Set position to relative for the count positioning
    }}>
      {/* Top-right count */}
      <div style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: '#0a3c5e',
        color: 'white',
        borderRadius: '50%',
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '12px',
      }}>
        {count}
      </div>

      <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ fontSize: '20px', fontWeight: 800, color: '#333' }}>{cost}</p>
        <p style={{ fontSize: '12px', color: '#141414', fontWeight: 600, whiteSpace: 'nowrap' }}>{title}</p>
        <p style={{ fontSize: '16px', color: '#8F8F8F', whiteSpace: 'nowrap' }}>{points}</p>
      </div>
    </div>
  );
};

export default RewardItem;
