import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import LoginPage from "./pages/auth/LoginPage";
import styled from "styled-components";
// import ProfileStats from "./components/profile";
import HomePage from "./pages/HomePage";
// import DashboardHeader from "./components/home/DashboardHeader"
import ProfilePage from "./pages/ProfilePage";
import QuizPage from "./pages/quizePage";
import QuizListPage from "./pages/QuizListPage";
import LessonCategory from "./pages/LessonCategory";
import SignupPage from "./pages/auth/SignupPage";
import VerifyPage from "./pages/auth/VerifyPage";
import SuccessfulPage from "./pages/auth/SuccessfulPage";
import SelectLanguages from "./pages/auth/SelectLanguages";
import SelectExperience from "./pages/auth/SelectExperience";

import { useSelector } from "react-redux";
import Footer from "./components/commons/Footer";
import LessonContent from "./pages/LessonContent";
import EarnPage from "./pages/EarnPage";
import SettingPage from "./pages/SettingPage";
import RedeemPoints from "./pages/RedeemPage";
import InviteCard from "./pages/ReferalPage";


import LayoutRouting from "./layout-routing";
const AppRouting = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <LoginStyle>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Navigate to="/home" replace={true} />} />

          <Route path="/*" element={<LayoutRouting />} />
        </Route>
        <Route path="/successful" element={<SuccessfulPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify/:phone" element={<VerifyPage />} />
        <Route path="/select-languages" element={<SelectLanguages />} />
        <Route path="/select-experience" element={<SelectExperience />} />
        <Route element={<Navigate to="/login" />} path="/*" />
      

        <Route path="*" element={<h1>Page is not found</h1>} />
      </Routes>

      {/* {user && (
        <div className="h-full">
          <Navbar />
          <div className="flex-1 border routes">
            
          </div>
      {user && (
      <div>
        <Navbar />
        <div className="flex-1 border routes">
          <Routes>
            <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/ai" element={<Ai />} />
            <Route
              path="/lesson-category/:id"
              element={<LessonCategory />}
            />

            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/earn" element={<EarnPage />} />

            <Route
              path="/lessons/:categoryId/:courseId"
              element={<LessonPage />}
            />
            <Route path="/select-languages" element={<SelectLanguages />} />
            <Route
              path="/select-experience"
              element={<SelectExperience />}
            />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/quizList/:quizId" element={<QuizListPage />} />
            <Route path="/redeem" element={<RedeemPoints />} />
            <Route path="/invite" element={<InviteCard />} />

            <Route
              path="/lessons-content/:id/"
              elementzzzzz={<LessonContent />}
            />
            <Route path="/setting" element={<SettingPage />} />
            </Route>
          </Routes>
        </div>

          <div>
            <Footer />
          </div>
        </div>
      )} */}
    </LoginStyle>
  );
};

const LoginStyle = styled.div`
  background-color: white;
  height: 100%;
  width: 370px;
  position: relative;
  display: flex;
  flex-direction: column;
  .routes {
    /* background-color: #6b2c2c; */

    height: calc(100% - 140px);
    /* height: 100%; */
    /* height: 600px;
    max-height: 600px; */
    overflow-x: hidden;

    overflow-y: auto;
  }
  /* @media (min-width: 768px) {
    .routes {
      height: calc(100% - 180px);
    }
  } */
  /* border: 1px solid black; */
`;
export default AppRouting;
