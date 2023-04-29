import React, { useContext, useEffect, useRef, useState } from "react";
import InputField from "../components/InputField";
import LeftPane from "../components/LeftPane";
import Map from "../components/Map";
import Authenticated from "../components/Authenticated";
import { restrauntsList, setCookie, getCookie } from "../utils";
import LoginContext from "../contexts/loginContext";
import bookmarkContext from "../contexts/bookmarkContext";
import HomePageContext from "../contexts/homePageContext";

function Home() {
  const [restraunts, setRestraunts] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const { username, isLoggedIn } = useContext(LoginContext);
  const { bookmarks } = useContext(bookmarkContext);
  const searchBarRef = useRef<HTMLInputElement | null>(null);

  const addRestrauntHandler = async () => {
    const query = searchBarRef.current?.value;
    const updatedHomePageMaps = [...homePageMaps, query!];
    setCookie(
      "cookie",
      JSON.stringify({
        user: username,
        homePageMaps: updatedHomePageMaps,
        bookmarks: bookmarks,
      })
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
  const [homePageMaps, setHomePageMaps] = useState<string[]>(
    JSON.parse(getCookie("cookie") || JSON.stringify(""))?.homePageMaps || []
  );
  const setInputField = (e: any) => {
    if (searchBarRef && searchBarRef.current && e.target.innerText)
      searchBarRef.current.value = e.target.innerText;
    setSuggestions([]);
  };
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
    <div className="home-div">
      <HomePageContext.Provider value={{ homePageMaps, setHomePageMaps }}>
        <LeftPane />
        <div className="body-content">
          {!isLoggedIn ? (
            <>
              <div>
                <div className="heading-div">
                  <h1 className="heading"> taste</h1>
                  <h1 className="heading"> tracker</h1>
                </div>
                <div className="home-body" style={{ marginTop: "-210px" }}>
                  Discover the best restaurants in your city with our powerful
                  search engine.
                </div>
              </div>
            </>
          ) : null}

          <Authenticated>
            <h2 className="subheading">taste tracker</h2>
            <div className="home-body">
              Find the perfect spot for any occasion, from casual dining to fine
              dining and everything in between.
            </div>
            <InputField
              placeholder="Search restraunts"
              ref={searchBarRef}
              onChange={generateAutoComplete}
              buttonText="Add"
              buttonOnClick={addRestrauntHandler}
            />
            {searchBarRef.current?.value &&
              suggestions.map((suggestion) => {
                return (
                  <li
                    className="list-suggestions"
                    style={{
                      border: "2px solid grey",
                      padding: "5px",
                      display: "flex",
                      justifyContent: "center",
                      marginLeft: "200px",
                      width: "630px",
                    }}
                    onClick={setInputField}
                  >
                    {suggestion}
                  </li>
                );
              })}
            <br></br>
            {homePageMaps.map((restraunt) => {
              return <Map restrauntName={restraunt} />;
            })}
          </Authenticated>
        </div>
      </HomePageContext.Provider>
    </div>
  );
}
export default Home;
