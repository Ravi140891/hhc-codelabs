import { configureStore } from "@reduxjs/toolkit";
import createStudentProfile from "./Slices/createStudentProfile";


const store = configureStore({
  reducer: {
    studentProfile: createStudentProfile,
  },
});

export default store;
