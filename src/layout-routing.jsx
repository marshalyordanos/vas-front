import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import LayoutApp from "./LayoutApp";
import EditProfile from "./pages/EditProfile";
import Subscription from "./pages/Subscription";
import SettingPage from "./pages/SettingPage";
import Security from "./pages/Security";
import LessonContent from "./pages/LessonContent";
import QuizListPage from "./pages/QuizListPage";
import QuizPage from "./pages/quizePage";
import SelectLanguages from "./pages/auth/SelectLanguages";
import SelectExperience from "./pages/auth/SelectExperience";
import LessonPage from "./pages/LessonPage";
import EarnPage from "./pages/EarnPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LessonCategory from "./pages/LessonCategory";
import LeaderboardPage from "./pages/LeaderBoardPage";
import RedeemPoints from "./pages/RedeemPage";
import InviteCard from "./pages/ReferalPage";

const LayoutRouting = () => {
  return (
    <Routes>
      <Route element={<LayoutApp />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/lesson-category/:id" element={<LessonCategory />} />

        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/earn" element={<EarnPage />} />

        <Route path="/lessons/:categoryId/:courseId" element={<LessonPage />} />
        <Route path="/select-languages" element={<SelectLanguages />} />
        <Route path="/select-experience" element={<SelectExperience />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quizList/:quizId" element={<QuizListPage />} />
        <Route path="/redeem" element={<RedeemPoints />} />
        <Route path="/invite" element={<InviteCard />} />

        <Route
          path="/lessons-content/:categoryId/:courseId/:id/"
          element={<LessonContent />}
        />
        <Route path="/setting" element={<SettingPage />} />

        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/security" element={<Security />} />
      </Route>
    </Routes>
  );
};

export default LayoutRouting;
