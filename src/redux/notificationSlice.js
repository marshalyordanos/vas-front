import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    s1: false,
    s2: false,
    s3: false,
    n1: false,
    n2: false,
    n3: false
  },
  reducers: {
    toggleS1: (state) => { state.s1 = !state.s1 },
    toggleS2: (state) => { state.s2 = !state.s2 },
    toggleS3: (state) => { state.s3 = !state.s3 },
    toggleN1: (state) => { state.n1 = !state.n1 },
    toggleN2: (state) => { state.n2 = !state.n2 },
    toggleN3: (state) => { state.n3 = !state.n3 },
  },
});

export const { toggleS1, toggleS2, toggleS3, toggleN1, toggleN2, toggleN3 } = notificationSlice.actions;
export default notificationSlice.reducer;
