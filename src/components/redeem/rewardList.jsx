import React, { useEffect, useState } from 'react';
import RewardItemWithRedeem from './rewardItem';
import { useSelector } from "react-redux";
import api from '../../api/api';

const RewardsList = ({ onRedeemSuccess }) => {
  const user = useSelector((state) => state.user.user);
  const [redeemData, setRedeemData] = useState([]);

  useEffect(() => {
    const fetchRedeemData = async () => {
      try {
        const redeem = await api.get("/redeem");
        console.log("[[[w[w[w",redeem)
        setRedeemData(redeem.data.data);
      } catch (error) {
        console.error("Failed to fetch redeem data:", error);
      }
    };
    fetchRedeemData();
  }, []);
  console.log("pppspsps",redeemData)

  return (
    <div>
      <h2>Available Rewards</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', paddingBottom: '30px' }}>
          {redeemData.map((reward) => (
            <RewardItemWithRedeem
              key={reward._id}
              redeemId={reward._id}
              title={reward.title}
              points={reward.point}
              cost={reward.reward}
              onRedeemSuccess={onRedeemSuccess}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RewardsList;
