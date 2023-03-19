import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// initalState 타입 정의
export interface WorkoutState {
  facilities: string[];
}

// initalState 생성
const initialState: WorkoutState = {
  facilities: [],
};

// 슬라이스생성
export const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

// 슬라이스를 export 해준다.
export default workoutSlice;
