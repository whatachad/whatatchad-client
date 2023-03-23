import { SignupData } from "@/types/users";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 회원가입
export const signup = createAsyncThunk(
  "user/signup",
  async (data: SignupData, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://129.154.212.45:3000/v1/signUp",
        data
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// 로그인
export const login = createAsyncThunk("user/login", async (data: any) => {
  try {
  } catch (error: any) {}
});
