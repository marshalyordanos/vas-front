import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import styled from 'styled-components';
import Frame1 from '../../assets/Frame1.svg';
import Frame2 from '../../assets/Frame2.svg';
import Frame3 from '../../assets/Frame3.svg';
import Frame4 from '../../assets/Frame4.svg';
// Dummy image URLs (replace with your own image links)
const images = [
  { label: 'A', src:  Frame1 },
  { label: 'B', src:  Frame2  },
  { label: 'C', src:  Frame3  },
  { label: 'D', src:  Frame4  },
];

const QuizListGrid = () => {
  return (
    <StyledRow gutter={[18, 16]}>
      {images.map((image, index) => (
        <Col span={12} key={index}>
          {/* <StyledCard
            cover={
              <img
                alt={`cat-${image.label}`}
                src={image.src}

                style={{ borderRadius: '10px', width: '50%' }}
              />
            }
            bordered={false}
          >
            <StyledButton>{image.label}</StyledButton>
          </StyledCard> */}
          {/* <StyledCard bordered={false}> */}
          <StyledButton>{image.label}</StyledButton>

            <ImageContainer>
              <img alt={`quiz-${image.label}`} src={image.src} />
            </ImageContainer>
            {/* <TextContainer>
              <h3>{image.label}</h3>
            </TextContainer> */}

          {/* </StyledCard> */}
        </Col>
      ))}
    </StyledRow>
  );
};

// Styled components
const StyledRow = styled(Row)`
  padding: 20px;
  background-color: #f7f7f7;
  display: flex;
  border-radius: 15px;


`;

const StyledCard = styled(Card)`
  border-radius: 15px;
  position: relative;
  display: flex;

  flex-direction: row;
  background-color: #f7f7f7;


  img {
    width: 100%;
    border-radius: 15px;
  }
`;
const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  margin-left: 40px;

  img {
    width: 100%;
    height: 100%;
    // object-fit: contain;
    border-radius: 8px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 10px;
  left: 0px;
  margin: 0;
  background-color: white;
  border-radius: 10px;
  border: none;
  font-weight: bold;
`;

export default QuizListGrid;
