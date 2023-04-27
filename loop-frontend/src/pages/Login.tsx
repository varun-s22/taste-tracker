import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginHandler } from "../utils";
import InputField from "../components/InputField";
import LoginContext from "../contexts/loginContext";

function Login() {
  const userNameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigateTo = useNavigate();
  const { setUserName } = useContext(LoginContext);

  const login = async (e: any) => {
    e.preventDefault();
    const data = await loginHandler(
      userNameRef.current?.value,
      passwordRef.current?.value
    );
    if (data.message) {
      setErrorMessage(data.message);
      return;
    }
    setUserName(data?.fields?.username);
    localStorage.setItem("username", data.fields.username);
    navigateTo("/");
  };
  return (
    <div>
      <InputField
        label="Username"
        id="username"
        placeholder="Enter Username"
        ref={userNameRef}
      />
      <InputField
        label="Password"
        id="password"
        placeholder="Enter Password"
        type="password"
        ref={passwordRef}
      />
      <button onClick={login}>Login</button>
      <p>{errorMessage}</p>
      <Link to="/">Home</Link>
    </div>
  );
}
export default Login;
