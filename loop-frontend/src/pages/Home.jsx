import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/login">Login</Link>
      <br></br>
      <Link to="/register">Register</Link>
      <br></br>
      LoggedInUser: {props.loggedinUsername}
    </div>
  );
}
export default Home;
