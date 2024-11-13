import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";
const initialState = {
  user: null,
  token: null,
};

export const updateUserExtra = createAsyncThunk(
  "user/updateUser",
  async (_, { getState, rejectWithValue }) => {
    const { token, user } = getState().user;
    try {
      const response = await api.get("/user/" + user?._id, {
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.setItem(
        "user",
        JSON.stringify({ user: response.data?.data, token: token })
      );

      return response.data?.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("action: ", action.payload);
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
    },
    updateUser: (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserExtra.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserExtra.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload; // Merge updated fields into user state
      })
      .addCase(updateUserExtra.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, updateUser } = userSlice.actions;

export default userSlice.reducer;
