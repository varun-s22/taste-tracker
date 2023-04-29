import React from "react";

interface HomePageContextInterface {
  homePageMaps: string[];
  setHomePageMaps: React.Dispatch<React.SetStateAction<string[]>>;
}

const HomePageContext = React.createContext<HomePageContextInterface>({
  homePageMaps: [],
  setHomePageMaps: (value: any) => {},
});
export default HomePageContext;
