import React from "react";
import Navbar from "../components/Navbar";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";
import LeftPane from "../components/LeftPane";

function Home() {
  const searchRestrauntHandler = () => {
    console.log("Searching restraunt");
  };
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <InputField placeholder="Search restraunts" />
      <button onClick={searchRestrauntHandler}>Search</button>
      <LeftPane />
    </div>
  );
}
export default Home;
