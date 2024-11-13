import React from 'react';
import { Card } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const AudioQuiz = () => {
  return (
    <div style={{ display: 'flex', width: '100%',marginBottom: '12px' }}>
      <Card
        style={{
          display: 'inline-block',
          padding: '20px',
          width: '100%',
          borderRadius: '20px',
          backgroundColor: '#0c4652ff',
          color: 'white',
          border: '1px solid #2E3B4A',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }}
        bodyStyle={{ padding: '0 10px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AudioOutlined style={{ fontSize: '28px', color: '#00AEEF', marginRight: '10px' }} />
          <span style={{ fontSize: '18px', color: '#ffffff' }}>un homme</span>
        </div>
      </Card>
    </div>
  );
};

export default AudioQuiz;
