import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// initalState 타입 정의
export interface CalendartState {
  dayWork: string[];
}

// initalState 생성
const initialState: CalendartState = {
  dayWork: [],
};

// 슬라이스생성
export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

// 슬라이스를 export 해준다.
export default calendarSlice;
