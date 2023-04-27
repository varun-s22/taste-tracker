import React from "react";
import { Link } from "react-router-dom";
import { logoutHandler } from "../utils";

type HomeProps = {
  loggedinUserId: string;
  loggedinUsername: string;
};
function Home(props: HomeProps) {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/login">Login</Link>
      <br></br>
      <Link to="/register">Register</Link>
      <br></br>
      LoggedInUser: {props.loggedinUsername}
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}
export default Home;
