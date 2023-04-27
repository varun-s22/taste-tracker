import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";

function App() {
  const [loggedinUsername, setLoggedInUsername] = useState<string>(
    localStorage.getItem("username") || ""
  );
  const [loggedinUserId, setLoggedInUserId] = useState<string>("");

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                loggedinUserId={loggedinUserId}
                loggedinUsername={loggedinUsername}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                setLoggedInUserId={setLoggedInUserId}
                setLoggedInUsername={setLoggedInUsername}
              />
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
