import React from "react";
import { Link } from "react-router-dom";
function LeftPane() {
  return (
    <div>
      <h1>Left Pane</h1>
      <Link to="/">Home</Link>
      <Link to="/bookmarks">My Bookmarks</Link>
    </div>
  );
}
export default LeftPane;
