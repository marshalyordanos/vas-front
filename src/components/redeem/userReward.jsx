import React, { useEffect, useState } from 'react';
import RewardsList from './rewardList';
import RewardItem from './reward';
import { useSelector } from "react-redux";
import api from '../../api/api';

const UserRewardsList = () => {
  const user = useSelector((state) => state.user.user);
  const [redeemData, setRedeemData] = useState([]);

  const fetchRedeemData = async () => {
    try {
      const redeem = await api.get(`/user/${user._id}`);
      console.log(";;dldldlldldldl",redeem.data.data.redeem);
      setRedeemData(redeem.data.data.redeem);
    } catch (error) {
      console.error("Failed to fetch redeem data:", error);
    }
  };

  useEffect(() => {
    fetchRedeemData();
  }, []);

  return (
    <div>

      <h1 style={{ fontSize: '15px', color: 'black', fontWeight: 700 }}>Available Rewards</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <RewardsList onRedeemSuccess={fetchRedeemData} />
      </div>
      <h1 style={{ fontSize: '15px', color: 'black', marginBottom: '12px', fontWeight: 700 }}>Redeemed Rewards</h1>
      <div>
        <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', paddingBottom: '30px' }}>
          {redeemData.map((reward) => (
            <RewardItem
              key={reward.redeemId.id}
              title={reward.redeemId.title}
              points={reward.redeemId.point}
              count = {reward.count}
              cost={reward.redeemId.reward}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default UserRewardsList;
