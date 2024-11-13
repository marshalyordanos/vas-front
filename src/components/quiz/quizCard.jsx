import React, { useState, useEffect } from "react";
import { Card, Col, Row, Popover } from "antd";
import { LockOutlined } from "@ant-design/icons"; // Import lock icon
import styled from "styled-components";
import quizListimage from "../../assets/quizListimage.svg";
import api from "../../api/api";
import { useSelector } from "react-redux";
import tokenService from "../../api/token.service";
const QuizGrid = ({ onSelectQuiz }) => {
  const [quizData, setQuizData] = useState([]);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    console.log("user Quiz:", user);
    const fetchQuizData = async () => {
      try {
        const res2 = tokenService.getUser();

        const userResponse = await api.get(`/user/${res2?.user?._id}`);
        const userData = userResponse.data.data;

        const quizzesWithResults = await Promise.all(
          userData?.quizzes.map(async (quiz) => {
            const quizResultResponse = await api.post("/quiz/totalResult", {
              userId: res2?.user?._id,
              quizId: quiz.quizId?._id,
            });

            return {
              ...quiz,
              totalResult: quizResultResponse,
              locked: quiz.status === "Locked",
            };
          })
        );

        console.log("quizzesWithResults::", quizzesWithResults);
        setQuizData(quizzesWithResults);
      } catch (error) {
        console.error("Failed to fetch quiz data:", error);
      }
    };

    console.log("=======================------");
    fetchQuizData();
  }, []);

  return (
    <ScrollContainer>
      <Row gutter={30} style={{ paddingLeft: "7px", paddingTop: "20px" }}>
        {quizData.map((quiz, index) => (
          <Col span={12} key={index}>
            <Popover
              content={<Description>{quiz.quizId?.description}</Description>}
              placement="center"
              trigger="hover"
            >
              <StyledCard
                onClick={() => !quiz.locked && onSelectQuiz(quiz.quizId._id)}
                locked={quiz.locked}
              >
                <Card bordered={false}>
                  <ImageTitleWrapper>
                    <img
                      alt={quiz.title || "Quiz"}
                      src={quiz.imageUrl || quizListimage}
                      className="quiz-image"
                    />
                    {quiz.locked && (
                      <LockIcon>
                        <LockOutlined />
                      </LockIcon>
                    )}
                    <h3 className="quiz-title">{quiz.quizId?.title}</h3>

                    {!quiz.locked ? (
                      <>
                        <div className="flex ">
                          <h3
                            className={
                              quiz.totalResult.data.passed
                                ? "text-green-500"
                                : "text-red-500"
                            }
                          >
                            {quiz.totalResult.data.passed ? "Passed" : "Failed"}
                          </h3>
                          <h3 className="quiz-rank pl-[10px]">
                            {quiz.totalResult.data.correctAnswers} /{" "}
                            {quiz.totalResult.data.totalQuestions}
                          </h3>
                        </div>
                      </>
                    ) : (
                      <h3 className="quiz-rank"></h3>
                    )}
                  </ImageTitleWrapper>
                </Card>
              </StyledCard>
            </Popover>
          </Col>
        ))}
      </Row>
    </ScrollContainer>
  );
};

// Styled component for description
const Description = styled.div`
  font-size: 14px;
  color: #555;
  max-width: 200px;
`;

const ScrollContainer = styled.div`
  padding: 20px;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 50px;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const StyledCard = styled.div`
  overflow: hidden;
  cursor: ${({ locked }) =>
    locked ? "not-allowed" : "pointer"}; // Disable pointer if locked
  padding-right: 0px;
  padding-bottom: 20px;
  opacity: ${({ locked }) => (locked ? 0.5 : 1)}; // Lower opacity if locked

  .ant-card-body {
    padding: 0;
    text-align: center;
  }
`;

const ImageTitleWrapper = styled.div`
  position: relative; /* Ensure lock icon appears on top */
  text-align: center;
  padding: 15px;
  background-color: #f7f7f7ff;
  border-radius: 13px;

  .quiz-image {
    border-radius: 15px;
    width: 100%;
    background-color: #0c4651;
  }

  .quiz-title {
    text-align: start;
    font-weight: 700;
    font-size: 16px;
    margin-top: 10px;
  }
  .quiz-rank {
    color: #8f8f8fff;
    font-size: 15px;
  }
  .passed {
    color: #00ff00;
    font-size: 25px;
  }
`;

const LockIcon = styled.div`
  font-size: 24px;
  color: #ff0000; // Red lock icon for locked quizzes
  position: absolute;
  top: 15px;
  right: 15px;
`;

export default QuizGrid;
