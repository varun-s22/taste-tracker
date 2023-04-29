import React, { useContext, useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import InputField from "../components/InputField";
import LeftPane from "../components/LeftPane";
import Map from "../components/Map";
import Authenticated from "../components/Authenticated";
import { restrauntsList, setCookie, getCookie } from "../utils";
import LoginContext from "../contexts/loginContext";

function Home() {
  const [restraunts, setRestraunts] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const { username } = useContext(LoginContext);

  const addRestrauntHandler = async () => {
    const query = searchBarRef.current?.value;
    const updatedHomePageMaps = [...homePageMaps, query!];
    setCookie(
      "cookie",
      JSON.stringify({ user: username, homePageMaps: updatedHomePageMaps })
    );
    setHomePageMaps(updatedHomePageMaps);
  };
  const generateAutoComplete = async () => {
    const query = searchBarRef.current?.value;
    const suggestions = restraunts.filter((restraunt) =>
      restraunt.startsWith(query!)
    );
    setSuggestions(suggestions);
  };
  const searchBarRef = useRef<HTMLInputElement>(null);
  const [homePageMaps, setHomePageMaps] = useState<string[]>(
    JSON.parse(getCookie("cookie") || JSON.stringify(""))?.homePageMaps || []
  );

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
      <LeftPane />
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
        {homePageMaps.map((restraunt) => {
          return <Map restrauntName={restraunt} />;
        })}
      </Authenticated>
    </div>
  );
}
export default Home;
