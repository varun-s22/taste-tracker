import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";
import LoginContext from "./contexts/loginContext";

function App() {
  const [loggedinUsername, setLoggedInUsername] = useState<string | undefined>(
    localStorage.getItem("username") || undefined
  );
  useEffect(() => {
    console.log(loggedinUsername);
  });
  return (
    <div className="App">
      <LoginContext.Provider
        value={{
          isLoggedIn: loggedinUsername === undefined ? false : true,
          setIsLoggedIn: () => {},
          username: loggedinUsername,
          setUserName: setLoggedInUsername,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
