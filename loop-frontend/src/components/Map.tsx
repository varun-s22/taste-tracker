import React, { useContext } from "react";
import bookmarkContext from "../contexts/bookmarkContext";
import { setCookie } from "../utils";
import LoginContext from "../contexts/loginContext";
import { Button } from "react-bootstrap";
import HomePageContext from "../contexts/homePageContext";

type MapProps = {
  restrauntName: string;
  isBookmarked?: boolean;
};
function Map(props: MapProps) {
  const { bookmarks, setBookmarks } = useContext(bookmarkContext);
  const { username } = useContext(LoginContext);
  const { homePageMaps } = useContext(HomePageContext);

  const bookmarkHandler = () => {
    const updatedBookmarks = [...bookmarks, props.restrauntName];
    setBookmarks(updatedBookmarks);
    setCookie(
      "cookie",
      JSON.stringify({
        user: username,
        bookmarks: updatedBookmarks,
        homePageMaps,
      })
    );
  };
  const removeFromBookmarks = () => {
    const updatedBookmarks = bookmarks.filter(
      (bookmark) => bookmark !== props.restrauntName
    );
    setBookmarks(updatedBookmarks);
    setCookie(
      "cookie",
      JSON.stringify({
        user: username,
        bookmarks: updatedBookmarks,
        homePageMaps,
      })
    );
  };
  return (
    <div>
      <iframe
        title={props.restrauntName}
        width="800"
        height="600"
        src={`https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params=%7B%22ds2.name2%22:%22${props.restrauntName}%22%7D`}
        allowFullScreen
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h3 style={{ marginLeft: "60px" }}>{props.restrauntName}</h3>
        <span style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button
            variant="light"
            onClick={bookmarkHandler}
            disabled={props.isBookmarked}
          >
            Bookmark
          </Button>
          <Button
            style={{ marginLeft: "20px" }}
            variant="light"
            onClick={removeFromBookmarks}
          >
            Remove from Bookmarks
          </Button>
        </span>
      </div>
    </div>
  );
}
export default Map;
