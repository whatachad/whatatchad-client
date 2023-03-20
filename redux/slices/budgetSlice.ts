import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// initalState 타입 정의
export interface BudgetState {
  account: string[];
}

// initalState 생성
const initialState: BudgetState = {
  account: [],
};

// 슬라이스생성
export const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

// 슬라이스를 export 해준다.
export default budgetSlice;
