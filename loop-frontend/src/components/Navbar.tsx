import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { logoutHandler } from "../utils";
import LoginContext from "../contexts/loginContext";

function Navbar() {
  const { username, isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const logout = () => {
    logoutHandler();
    setIsLoggedIn(false);
    window.location.reload();
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/login">Login</Link>
      <br></br>
      LoggedInUser: {username}
      {isLoggedIn ? <button onClick={logout}>Logout</button> : null}
    </div>
  );
}
export default Navbar;
