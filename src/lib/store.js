import homeReducer from "@/app/home.reducer";
import { configureStore } from "@reduxjs/toolkit";
// Import your reducers

const store = configureStore({
  reducer: {
    home: homeReducer,
    // Add more reducers as needed
  },
});
export default store;
