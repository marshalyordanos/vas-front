import React from "react";
import { styled } from "styled-components";
import QuizListGrid from "../components/quiz/quiz";
import QuizOptionList from "../components/quiz/quizChoice";
import AudioQuiz from "../components/quiz/quizAudio";
import FillInTheBlankQuiz from "../components/quiz/fillTheBlankQuiz";
import CustomProgressBar from "../components/quiz/progressBar";
const QuizListPage = () => {
  return (
    <HomeStyled>
      {/* <CustomProgressBar/> */}

      <div>
        {/* <QuizListGrid /> */}
        {/* <AudioQuiz/> */}
        {/* <FillInTheBlankQuiz/> */}

      </div>
      <QuizOptionList />

    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  background-color: white;
  overflow-y: auto; /* Enable vertical scrolling */
  height: 100vh; /* Full viewport height */
  width: 370px;
  padding: 16px; /* Adding padding to all borders */
  padding-bottom: 100px; /* Adding some space for the footer */

  /* Hide the scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
  scrollbar-width: none; /* For Firefox */
`;

export default QuizListPage;
