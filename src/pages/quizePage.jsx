import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizGrid from '../components/quiz/quizCard';
import QuizListPage from './QuizListPage';

const QuizPage = () => {
  const navigate = useNavigate();

  const handleSelectQuiz = (quizId) => {
    // Navigate to the quiz detail page with the selected quiz ID
    navigate(`/quizList/${quizId}`);
  
  };

  return (
    <div>
      <QuizGrid onSelectQuiz={handleSelectQuiz} /> {/* Pass handleSelectQuiz to QuizGrid */}
    </div>
  );
};

export default QuizPage;
