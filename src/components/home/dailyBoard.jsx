import React from "react";
import { Card, Row, Col, Button } from "antd";
import styled from "styled-components";
import dailyQuest from "../../assets/daily.svg";
const DailyQuestCard = () => {
  return (
    <StyledCard>
      <Row gutter={14} align="middle" style={{ padding: "0px" }}>
        <Col span={9}>
          <img src={dailyQuest} alt="Daily Quests" className="quest-image" />
        </Col>
        <Col span={9}>
          <div>
            <h3 style={{ fontWeight: 700 }}>Daily Quests</h3>
            {/* <span className="quest-progress">2/10</span> */}
            <p
              className="quest-progress"
              style={{ fontSize: 13, lineHeight: 1 }}
            >
              comming soon
            </p>
          </div>
        </Col>
        <Col span={6}>
          <Button
            type="primary"
            style={{
              backgroundColor: true ? "#6b6b6b" : "#0c4652ff",
              borderRadius: "12px",
              width: "90px",
              height: "35px",
            }}
            shape="round"
          >
            Start
          </Button>
        </Col>
      </Row>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  border-radius: 10px;
  padding: 0px;
  backgroundcolor: #0c4651;
  .quest-image {
    width: 100%;
    padding: 0px;
    border-radius: 5px;
  }
  .quest-progress {
    font-size: 18px;
    font-weight: 600;
    color: #0c4651;
  }
`;

export default DailyQuestCard;
