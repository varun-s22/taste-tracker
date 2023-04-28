import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import InputField from "../components/InputField";
import LeftPane from "../components/LeftPane";
import Map from "../components/Map";
import Authenticated from "../components/Authenticated";
import { setCookie } from "../utils";

function Home() {
  const addRestrauntHandler = async () => {
    const query = searchBarRef.current?.value;
    setHomePageMaps([...homePageMaps, query!]);
    setCookie("homePageMaps", JSON.stringify(homePageMaps));
  };
  const searchBarRef = useRef<HTMLInputElement>(null);
  const [homePageMaps, setHomePageMaps] = useState<string[]>([]);
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <Authenticated>
        <InputField placeholder="Search restraunts" ref={searchBarRef} />
        <button onClick={addRestrauntHandler}>Add</button>
        <LeftPane />
        {homePageMaps.map((restraunt) => {
          return <Map restrauntName={restraunt} />;
        })}
      </Authenticated>
    </div>
  );
}
export default Home;
