import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Bookmarks from "./pages/Bookmarks";
import { useState } from "react";
import LoginContext from "./contexts/loginContext";
import bookmarkContext from "./contexts/bookmarkContext";
import { getCookie } from "./utils";
function App() {
  const [loggedinUsername, setLoggedInUsername] = useState<string | undefined>(
    JSON.parse(getCookie("cookie") || JSON.stringify(""))?.user || undefined
  );
  const [bookmarkedMaps, setBookmarkedMaps] = useState<string[]>(
    JSON.parse(getCookie("cookie") || JSON.stringify(""))?.bookmarks || []
  );
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
        <bookmarkContext.Provider
          value={{ bookmarks: bookmarkedMaps, setBookmarks: setBookmarkedMaps }}
        >
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
            </Routes>
          </Router>
        </bookmarkContext.Provider>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
