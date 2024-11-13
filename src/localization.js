import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Subscription from "./pages/Subscription";
import Security from "./pages/Security";
import { list } from "postcss";
import { notification } from "antd";

const am = {
  welcome: "ሰላም",
  welcome_back: "እንኳን ደህና መጡ",
};

const en = {
  welcome: "Welcome",
  welcome_back: "Welcome Back",
  login: "Login",
  remember_me: " Remember me",
  login_signup_info: "If you don't have an account",
  signup: "Sign up",
  signup_info:
    "Start Learning a New Language Today! Sign up now and be one of our first learners!",
  terms: "I agree to the Terms and Conditions.",
  back_to: "Back to",
  verify: "Verify",
  verify_info:
    "Enter the 6-digit code sent to your phone to verify your account",
  verify_info_two: "Didn’t receive the code?",
  resend: "Resend",
  select_language: "Select Language",
  select_language_info:
    "Choose the language you want to learn and start your journey to fluency!",
  language_search: "Language search",
  next: "Next",
  select_experience: "Select Experience",
  select_experience_info:
    "Choose your proficiency level for the selected language",
  beginner: "Beginner",
  intermediate: "intermediate",
  advanced: "Advanced",
  superior: "Superior",
  lets_go: "Let's Go",
  lessons: "Lessons",
  quizzes: "Quizzes",
  open_lesson: "Open Lessons",
  open_quizzes: "Open Quizzes",
  daily_quests: "Daily Quests",
  comming_soon: "comming soon",
  start: "Start",
  home: "Home",
  leaderboard: "Leaderboard",
  your_rank: "Your Rank",
  redeem_points: "Redeem Points",
  redeem: "Redeem",
  referral: "referral",
  refer: "Refer",
  games: "Games",
  profile: "Profile",
  overveiew: "OverView",
  current_rank: "current_rank",
  total_points: "Total Points",
  achievements: "Achivements",
  see_all: "See all",
  successful: "Successful",
  successful_info:
    "Congratulations! Your account has been successfully verified. You can now log in and start your language learning journey!",
  account_settings: "Account Settings",
  edit_profile: "Edit Profile",
  subscription: "Subscription",
  security: "Security",
  full_name: "Full Name",
  email: "Email",
  phone_number: "Phone Number",
  edit_goal: "Edit Goal",
  basic: "Basic",
  casual: "casual",
  regular: "Regular",
  serious: "Serious",
  intense: "Intense",
  premium: "Premium",
  update_settings: "Update Settings",
  select_plan: "Select Plan",
  remove_device: "Remove Device",
  sound: "Sound",
  sound_effect: "Sound Effect",
  speaking_exercises: "Speaking Exercises",
  listening_exercises: "Listening Exercises",
  notification: "Notification",
  dangerous_area: "Dangerous Area",
  delete_account: "Delete Account",
};

i18n.use(initReactI18next).init({
  // the translations
  // (tip move them in a JSON file and import them,
  // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
  resources: {
    EN: {
      translation: en,
    },
    ET: {
      translation: am,
    },
  },
  lng: "EN",
  fallbackLng: "EN",
  compatibilityJSON: "v3",
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});

async function confLocale() {
  console.log("confLocale ||||");
  const locale = localStorage.getItem("locale");
  if (locale != null) i18n.changeLanguage(locale);
}

confLocale();

export { confLocale };
export default i18n;
