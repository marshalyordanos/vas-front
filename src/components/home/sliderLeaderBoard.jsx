import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';
import { TrophyOutlined } from '@ant-design/icons';

const SliderComponent = () => {
  return (
    <StyledCarousel autoplay>
      <div>
        <StyledItem>
          <div className="amount">
            <TrophyOutlined style={{color :""}}/>
            30,000br</div>
          <div className="phone">+251932****45</div>
        </StyledItem>
      </div>
      <div>
        <StyledItem>
          <div className="amount">
            <TrophyOutlined style={{ color: '#FFD700' }} /> 30,000br
          </div>
          <div className="phone">+251932****45</div>
        </StyledItem>
      </div>
      {/* Add more items as needed */}
    </StyledCarousel>
  );
};

const StyledCarousel = styled(Carousel)`
  width: 100%;
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  background: white;
  font-size: 18px;

  .amount {
    font-weight: bold;
  }

  .phone {
    color: #000;
    font-size: 18px;
    margin-left: 10px;
    font-weight : 500
  }

  .description {
    font-size: 14px;
    color: #888;
    margin-left: auto;
  }

  svg {
    font-size: 24px;
    margin-right: 5px;
  }
`;

export default SliderComponent;
