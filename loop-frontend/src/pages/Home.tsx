import React, { useContext, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import InputField from "../components/InputField";
import LeftPane from "../components/LeftPane";
import Map from "../components/Map";
import LoginContext from "../contexts/loginContext";

function Home() {
  const addRestrauntHandler = async () => {
    const query = searchBarRef.current?.value;
    setHomePageMaps([...homePageMaps, query!]);
  };
  const searchBarRef = useRef<HTMLInputElement>(null);
  const [homePageMaps, setHomePageMaps] = useState<string[]>([]);
  const [bookmarkedMaps, setBookmarkedMaps] = useState<string[]>([]);
  const { isLoggedIn } = useContext(LoginContext);
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      {!isLoggedIn ? (
        <>
          <InputField placeholder="Search restraunts" ref={searchBarRef} />
          <button onClick={addRestrauntHandler}>Add</button>
          <LeftPane />
          {homePageMaps.map((restraunt) => {
            return (
              <Map
                restrauntName={restraunt}
                bookMarkedMaps={bookmarkedMaps}
                setBookmarkedMaps={setBookmarkedMaps}
              />
            );
          })}
        </>
      ) : null}
    </div>
  );
}
export default Home;
