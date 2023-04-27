import React from "react";
import Navbar from "../components/Navbar";
import InputField from "../components/InputField";

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
    </div>
  );
}
export default Home;
