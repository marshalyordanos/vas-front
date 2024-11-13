import React from 'react';
import redeemImage from '../../assets/redeem.svg';

const PointsDisplay = ({ points }) => {
  return (
    <div style={{
      backgroundImage: `url(${redeemImage})`,
      backgroundSize: 'cover',
      backgroundColor: '#0C4651',
      backgroundPosition: 'center',
      color: '#E2F20F',
      padding: '20px',
      borderRadius: '10px',
      margin: '20px 0',
      textAlign: 'center',
      position: 'relative',
      height: '120px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h2 style={{
        margin: '0',
        fontSize: '24px',
        fontWeight: 'bold',
      }}>{points} MP</h2>
      <p style={{
        margin: '0',
        fontSize: '16px',
        opacity: 0.8,
        color: '#EDEDED66'
      }}>  Available Points</p>
    </div>
  );
};

export default PointsDisplay;
