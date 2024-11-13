import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import categorySlice from "./category";
import notificationReducer from "./notificationSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    category: categorySlice,
    notification: notificationReducer,
  },
});
