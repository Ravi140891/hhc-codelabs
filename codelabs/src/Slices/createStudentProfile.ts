import { createSlice } from "@reduxjs/toolkit";

interface StudentProfileState {
  show: boolean;
}

const initialState: StudentProfileState = {
  show: false,
};

const createStudentProfile = createSlice({
  name: "studentProfile",
  initialState,
  reducers: {
    toggleShow: (state: StudentProfileState) => {
      state.show = !state.show;
    },
  },
});
export type RootState = {
  studentProfile: StudentProfileState;
};

export const { toggleShow } = createStudentProfile.actions;
export default createStudentProfile.reducer;
