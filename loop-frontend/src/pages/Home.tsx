import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import InputField from "../components/InputField";
import LeftPane from "../components/LeftPane";
import Map from "../components/Map";
import Authenticated from "../components/Authenticated";
import { restrauntsList, setCookie } from "../utils";

function Home() {
  const addRestrauntHandler = async () => {
    const query = searchBarRef.current?.value;
    setHomePageMaps([...homePageMaps, query!]);
    setCookie("homePageMaps", JSON.stringify(homePageMaps));
  };
  const generateAutoComplete = async () => {
    const query = searchBarRef.current?.value;
    const suggestions = restraunts.filter((restraunt) =>
      restraunt.startsWith(query!)
    );
    setSuggestions(suggestions);
  };
  const searchBarRef = useRef<HTMLInputElement>(null);
  const [homePageMaps, setHomePageMaps] = useState<string[]>([]);
  const [restraunts, setRestraunts] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const getRestraunts = async () => {
      const restraunts = await restrauntsList();
      setRestraunts(
        restraunts.map(
          (restraunt: { fields: { Name: any } }) => restraunt.fields?.Name
        )
      );
    };
    getRestraunts();
  }, []);
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <Authenticated>
        <InputField
          placeholder="Search restraunts"
          ref={searchBarRef}
          onChange={generateAutoComplete}
        />
        {searchBarRef.current?.value &&
          suggestions.map((suggestion) => {
            return <p>{suggestion}</p>;
          })}
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
