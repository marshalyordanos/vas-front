import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button } from "antd";
import styled from "styled-components";
import FillInTheBlankQuiz from "./fillTheBlankQuiz";
import { useParams, useNavigate } from "react-router-dom";
import CustomProgressBar from "./progressBar";
import axios from "axios";

const QuizOptionList = () => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [isFinalQuestion, setIsFinalQuestion] = useState(false);
  const [showGoBack, setShowGoBack] = useState(false);
  const { quizId } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const fetchQuizQuestions = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/quiz/${quizId}`
        );
        const data = await response.json();
        setQuizQuestions(data.data.questions);
        setIsFinalQuestion(data.data.questions.length === 1);
      } catch (error) {
        console.error("Failed to fetch quiz questions:", error);
      }
    };

    if (quizId) {
      fetchQuizQuestions();
    }
  }, [quizId]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleCheckAnswer = async () => {
    const payload = {
      quizId: quizId,
      userId: user?._id,
      questionId: quizQuestions[currentQuestionIndex]._id,
      answer: selectedOption,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/quiz/result",
        payload
      );
      setCorrectAnswer(response.data.isCorrect);

      if (response.status === 200) {
        console.log("Answer submitted successfully:", response.data);
      } else {
        console.error("Failed to submit answer:", response);
      }
    } catch (error) {
      console.error("Error submitting answer:", error);
    }

    setShowMessage(true);
    setProgressPercent(
      ((currentQuestionIndex + 1) / quizQuestions.length) * 100
    );

    setTimeout(() => {
      setShowMessage(false);

      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setIsFinalQuestion(currentQuestionIndex + 2 === quizQuestions.length);
      } else {
        setShowGoBack(true);
      }
    }, 2000);
  };

  const handleFinish = () => {
    handleCheckAnswer();
  };

  const handleGoBack = () => {
    navigate("/quiz");
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <Container>
      <CustomProgressBar percent={progressPercent} />

      {currentQuestion ? (
        <div>
          <h2>{currentQuestion.question}</h2>
          <FillInTheBlankQuiz selectedOption={currentQuestion.question} />
          <StyledScrollContainer>
            <StyledRow gutter={[24, 16]}>
              {currentQuestion.options.map((option, index) => (
                <Col span={24} key={index}>
                  <StyledCard
                    onClick={() => handleOptionSelect(option)}
                    selected={selectedOption === option}
                  >
                    <p>{option}</p>
                  </StyledCard>
                </Col>
              ))}
            </StyledRow>
          </StyledScrollContainer>
        </div>
      ) : (
        <p>No questions found for this quiz.</p>
      )}

      {!showGoBack ? (
        <ButtonContainer
          onClick={isFinalQuestion ? handleFinish : handleCheckAnswer}
        >
          {isFinalQuestion ? "Finish" : "Check"}
        </ButtonContainer>
      ) : (
        <ButtonContainer onClick={handleGoBack}>Go Back</ButtonContainer>
      )}

      {showMessage && (
        <Overlay>
          <MessageCard isCorrect={correctAnswer}>
            <h3>{correctAnswer ? "Correct!" : "Incorrect!"}</h3>
          </MessageCard>
        </Overlay>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const StyledScrollContainer = styled.div`
  max-height: 100vh;
  overflow-y: auto;
  padding-right: 10px;
  margin-top: 20px;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  background-color: #004d61;
  color: white;
  text-align: center;
  margin-top: 30px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #003b4d;
  }
`;

const StyledRow = styled(Row)`
  padding-top: 20px;
`;

const StyledCard = styled(Card)`
  border-radius: 10px;
  height: 60px;
  padding: 0px;
  display: flex;
  justify-content: start;
  align-items: center;
  border: 1px solid #8f8f8f;
  background-color: ${({ selected }) => (selected ? "#004d61" : "#ffffff")};
  color: ${({ selected }) => (selected ? "#ffffff" : "#000000")};
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #004d61;
    color: white;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const MessageCard = styled(Card)`
  background-color: #e0ffe0;
  color: ${({ isCorrect }) => (isCorrect ? "green" : "red")};
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  padding: 40px;
  text-align: center;
`;

export default QuizOptionList;
