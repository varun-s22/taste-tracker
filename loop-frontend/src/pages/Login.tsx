import React from "react";
import { Link } from "react-router-dom";
import { loginHandler } from "../utils";

type LoginProps = {
  setLoggedInUserId: (id: string) => void;
  setLoggedInUsername: (username: string) => void;
};
function Login(props: LoginProps) {
  const login = async () => {
    const data = await loginHandler("sad", "asdasd");
    props.setLoggedInUserId(data.id);
    props.setLoggedInUsername(data.fields.username);
    localStorage.setItem("username", data.fields.username);
  };
  return (
    <div>
      <button onClick={login}>Login</button>
      <Link to="/">Home</Link>
    </div>
  );
}
export default Login;
