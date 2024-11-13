import React from 'react';
import { Progress } from 'antd';
import 'antd/dist/reset.css';

const CustomProgressBar = ({ percent }) => { // Accept percent as a prop
  console.log("Percent:", percent);
  return (
    <div style={{ padding: '10px', borderRadius: '10px' }}>
      <Progress
        percent={percent} // Use the passed percent prop here
        showInfo={false}
        strokeColor="#7fed46"
        trailColor="#0c4652ff"
        strokeLinecap="round"
      />
    </div>
  );
};

export default CustomProgressBar;
