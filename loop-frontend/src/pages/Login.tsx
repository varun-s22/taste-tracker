import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginHandler, setCookie } from "../utils";
import InputField from "../components/InputField";
import LoginContext from "../contexts/loginContext";
import LeftPane from "../components/LeftPane";
import { Button } from "react-bootstrap";
import bookmarkContext from "../contexts/bookmarkContext";

function Login() {
  const userNameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const { bookmarks } = useContext(bookmarkContext);
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
    setCookie(
      "cookie",
      JSON.stringify({
        user: data.fields.username,
        homePageMaps: [],
        bookmarks: bookmarks,
      })
    );
    navigateTo("/");
  };
  return (
    <div className="home-div">
      <LeftPane />
      <div className="body-content" style={{ marginTop: "200px" }}>
        <h1 className="subheading">Login</h1>
        <br></br>
        <br></br>
        <InputField
          id="username"
          placeholder="Enter Username"
          ref={userNameRef}
        />
        <br></br>
        <InputField
          id="password"
          placeholder="Enter Password"
          type="password"
          ref={passwordRef}
        />

        <br></br>
        <Button variant="light" onClick={login}>
          Login
        </Button>
        <p className="error-msg">{errorMessage}</p>
      </div>
    </div>
  );
}
export default Login;
