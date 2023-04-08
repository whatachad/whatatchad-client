import { login } from "@/redux/actions/user";
import { ReducerStates } from "@/redux/store";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface LoginState {
  id: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const loginLoading = useSelector(
    (state: ReducerStates) => state.user.loginLoading
  );
  const loginError = useSelector(
    (state: ReducerStates) => state.user.loginError
  );
  const loginDone = useSelector((state: ReducerStates) => state.user.loginDone);

  const [loginState, setLoginState] = useState<LoginState>({
    id: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginState((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id, password } = loginState;
    dispatch(login({ id, password }));
    console.log("success!");
  };

  if (loginDone) {
    router.push("/");
  }
 

const login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Email:
          <input type="email" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default login;
