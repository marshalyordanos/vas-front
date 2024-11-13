import React from 'react';
import PointsDisplay from '../components/redeem/point';
import RewardsList from '../components/redeem/rewardList';
import UserRewardsList from '../components/redeem/userReward';
const RedeemPoints = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '20px', color: 'black', fontWeight: 700 }}>Redeem Points</h1>
      <PointsDisplay points="20.5k" />


      <UserRewardsList />

    </div>
  );
};

export default RedeemPoints;

