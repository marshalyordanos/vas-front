import React from 'react';
import { useSelector } from 'react-redux';
import { message, notification } from 'antd';
import api from '../../api/api';

const RewardItemWithRedeem = ({ title, points, cost, redeemId, onRedeemSuccess }) => {
  const user = useSelector((state) => state.user.user);

  const redeemClicked = async () => {
    try {
      if (!user || !redeemId) {
        console.error("User ID or redeem ID is missing.");
        return;
      }

      const response = await api.post('/redeem/userRedeem', {
        userId: user._id,
        id: redeemId,
      });

      if (response.status === 200) {
        message.success(response.data.msg);  // Show success message
        onRedeemSuccess();
      } else {
        notification.error({
          message: 'Redemption Error',
          description: "Redemption unsuccessful, please try again.",
          placement: 'topRight',
          style: { backgroundColor: '#ff4d4f', color: 'white' },  // Red background with white text
        });
      }
    } catch (error) {
      console.error("Redemption error:", error);
      notification.error({
        message: 'Redemption Failed',
        description: "Failed to redeem. Please try again later.",
        placement: 'topRight',
        style: { backgroundColor: '#ff4d4f', color: 'white' },  // Red background with white text
      });
    }
  };

  return (
    <div style={{
      backgroundColor: '#EDEDED',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '140px',
      padding: '25px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <p style={{ fontSize: '20px', fontWeight: 800, color: '#333' }}>{cost}</p>
      <p style={{ fontSize: '12px', fontWeight: 600, color: '#141414', whiteSpace: 'nowrap' }}>{title}</p>
      <p style={{ fontSize: '16px', color: '#8F8F8F', whiteSpace: 'nowrap' }}>{points}</p>

      <button
        style={{
          backgroundColor: '#0a3c5e',
          color: '#FFFFFF',
          width: '100px',
          height: '35px',
          marginTop: '10px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 600,
        }}
        onClick={redeemClicked}
      >
        Redeem
      </button>
    </div>
  );
};

export default RewardItemWithRedeem;
