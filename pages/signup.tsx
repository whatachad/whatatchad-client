import React from "react";

const signup = () => {
  return (
    <div>
      <h1>Sign Up to WaC</h1>
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
        <button type="submit">확인</button>
      </form>
    </div>
  );
};

export default signup;
