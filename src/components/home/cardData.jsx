import React from "react";
import { Card, Button, Col, Row } from "antd";
import styled from "styled-components";
import lessonCard from "../../assets/image.svg";
import quizCard from "../../assets/quiz.svg";
import { NavLink } from "react-router-dom";

const CardGrid = ({ category }) => {
  const cardData = [
    {
      title: "Lessons",
      imgSrc: lessonCard,
      buttonText: (
        <NavLink to={"/lesson-category/" + category?.categoryId?._id}>
          Open Lessons
        </NavLink>
      ),
    },
    {
      title: "Quizzes",
      imgSrc: quizCard,
      buttonText:  <NavLink to={"/quiz"}>
    Open Quizzes
    </NavLink>,
    },
  ];
  return (
    <Row gutter={30} style={{ paddingLeft: "7px", paddingTop: "50px" }}>
      {cardData.map((card, index) => (
        <Col span={12} key={index}>
          <StyledCard>
            <Card
              bordered={false}
              style={{ backgroundColor: "#f7f7f7ff", borderRadius: "15px" }}
              cover={
                <div className=" relative ">
                  <h3
                    style={{
                      textAlign: "start",
                      fontWeight: 600,
                      fontSize: "17px",
                      color: "black",
                      marginBottom: "2px",
                      // backgroundColor: "#f7f7f7ff",
                    }}
                  >
                    {card.title}
                  </h3>
                  {/* <div className="absolute bg-[#0C4651] opacity-[0.5] top-0 bottom-0 left-0 right-0" ></div> */}
                  <img
                    alt={card.title}
                    src={card.imgSrc}
                    style={{
                      borderRadius: "15px",
                      // padding: "10px",
                      width: "100%",
                      backgroundColor: "#background: #0C4651", // Background color for the image
                    }}
                  />
                </div>
              }
            >
              {/* <h3
                                style={{
                                    textAlign: "center",
                                    fontWeight: 700,
                                    fontSize: "20px",
                                    backgroundColor: "#f7f7f7ff",
                                }}
                            >
                                {card.title}
                            </h3> */}
              <ButtonBlock>
                <Button
                  type="primary"
                  style={{
                    textAlign: "center",
                    borderRadius: "12px",
                    backgroundColor: "#0c4652ff",
                    width: "100%",
                    height: "40px",
                  }}
                >
                  <span style={{ fontWeight: 600 }}> {card.buttonText}</span>
                </Button>
              </ButtonBlock>
            </Card>
          </StyledCard>
        </Col>
      ))}
    </Row>
  );
};

const StyledCard = styled.div`
  .ant-card-body {
    padding: 0px;
    text-align: center;

    backgroundcolor: "#f7f7f7ff";
  }
`;

const ButtonBlock = styled.div`
  margin-top: 15px;
  text-align: center;
  button {
    width: 100%; /* Make the button align to the image width */
  }
`;

export default CardGrid;
