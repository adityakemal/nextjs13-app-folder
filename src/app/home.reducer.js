import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    count: 0,
    // isRegister: false
  },

  reducers: {
    // handleRegister: (state, action) => {
    //     state.isRegister = !state.isRegister
    // },
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
  //   extraReducers: {
  //    [postLogin.pending]: (state, action) => {
  //        state.loading = true
  //    },
  //    [postLogin.fulfilled]: (state, { payload }) => {
  //        state.loading = false
  //    },
  //    [postLogin.rejected]: (state, action) => {
  //        state.loading = false
  //    },
  // }
});

export const { increment, decrement } = homeSlice.actions;

export default homeSlice.reducer;
