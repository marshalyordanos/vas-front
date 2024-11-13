import React, { useState } from 'react';
import { Modal, Button, Input, notification } from 'antd';
import { CopyOutlined, ShareAltOutlined } from '@ant-design/icons';
import api from '../api/api';
import { useSelector } from "react-redux";
import shareIcon from '../assets/share.png';

const InviteCard = () => {
  const [inviteLink, setInviteLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const user = useSelector((state) => state.user.user);

  const handleInviteClick = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/user/invite/${user._id}`);
      const data = response.data;

      if (response.status === 200) {
        setInviteLink(data.inviteLink);
        setIsModalVisible(true);
      } else {
        console.error("Failed to generate invite link:", data.msg);
      }
    } catch (error) {
      console.error("Failed to generate invite link:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteLink);
    notification.success({
      message: 'Link Copied!',
      description: 'Invite link copied to clipboard.',
      placement: 'topRight',
      duration: 2,
    });
  };

  return (
    <div style={{
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingTop: '100px',
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        width: '100%',
      }}>
        <div style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'center'
        }}>
          <div><img src={shareIcon} alt="Share Icon" /></div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '10px 0', color: 'black' }}>Sharing Is Caring</h3>
          <p style={{
            fontSize: '14px',
            color: '#141414',
            margin: '10px 0',
            lineHeight: '1.5',
            padding: '0 10px',
            fontWeight: 500
          }}>
            Lorem ipsum dolor sit amet consectetur. Ultrices interdum aliquet cras ut nisl risus cursus ut. Sit ut turpis lorem suspendisse rhoncus.
          </p>
          <Button
            onClick={handleInviteClick}
            style={{
              backgroundColor: '#0C4651',
              color: '#FFFFFF',
              padding: '10px 20px',
              width: '80%',
              marginTop: '15px',
              borderRadius: '5px',
              fontWeight: 600,
            }}
            loading={loading}
          >
            {loading ? 'Generating...' : 'Invite'}
          </Button>
        </div>
      </div>
      <Modal
  title="Your Invite Link"
  visible={isModalVisible}
  onCancel={() => setIsModalVisible(false)}
  footer={null}
  centered // This centers the modal
  bodyStyle={{ height: '90px', padding: '20px' }}
>
  <Input
    value={inviteLink}
    readOnly
  bodyStyle={{ height: '90px', padding: '20px' }}


    addonAfter={
      <CopyOutlined onClick={handleCopy} style={{ cursor: 'pointer', color: '#0C4651' }} />
    }
    style={{
      height: '550px',
      fontSize: '16px',
      // paddingTop: '60px',
      borderRadius: '5px',
    }}
  />
</Modal>

    </div>
  );
};

export default InviteCard;
