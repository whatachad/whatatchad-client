import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// initalState 타입 정의
export interface UserState {
  name: string;
  email: string;
}

// initalState 생성
const initialState: UserState = {
  name: "test",
  email: "test@example.com",
};

// 슬라이스생성
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

// 슬라이스를 export 해준다.
export default userSlice;
