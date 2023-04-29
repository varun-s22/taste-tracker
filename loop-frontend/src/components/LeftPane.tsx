import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import LoginContext from "../contexts/loginContext";
import { logoutHandler } from "../utils";
import Authenticated from "./Authenticated";
import { useNavigate } from "react-router-dom";

function LeftPane() {
  const { username, isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const navigateTo = useNavigate();
  const logout = () => {
    logoutHandler();
    setIsLoggedIn(false);
    navigateTo("/");
    window.location.reload();
  };
  return (
    <div className="sidebar">
      <Authenticated>
        <Navbar.Text style={{ color: "black", fontSize: "20px" }}>
          Signed in as: {username}
        </Navbar.Text>
      </Authenticated>
      <div>
        <Nav
          className="me-auto"
          style={{
            display: "flex",
            justifyContent: "center ",
          }}
        >
          {isLoggedIn ? (
            <Nav.Link
              className="sidebar-link"
              style={{ color: "black", fontSize: "20px" }}
              onClick={logout}
            >
              <div className="sidebar-link">Logout</div>
            </Nav.Link>
          ) : (
            <Nav.Link
              style={{ color: "black", fontSize: "20px" }}
              className="sidebar-link"
              href="/login"
            >
              <div className="sidebar-link">Login</div>
            </Nav.Link>
          )}
        </Nav>
      </div>
      <Nav.Link href="/">
        <div className="sidebar-link">Home Page</div>
      </Nav.Link>
      <Authenticated>
        <Nav.Link href="/bookmarks">
          <div className="sidebar-link">My Bookmarks</div>
        </Nav.Link>
      </Authenticated>
    </div>
  );
}
export default LeftPane;
