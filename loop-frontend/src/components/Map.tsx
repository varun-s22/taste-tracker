import React, { useContext } from "react";
import bookmarkContext from "../contexts/bookmarkContext";
import { setCookie } from "../utils";
import LoginContext from "../contexts/loginContext";

type MapProps = {
  restrauntName: string;
};
function Map(props: MapProps) {
  const { bookmarks, setBookmarks } = useContext(bookmarkContext);
  const { username } = useContext(LoginContext);
  const bookmarkHandler = () => {
    const updatedBookmarks = [...bookmarks, props.restrauntName];
    setBookmarks(updatedBookmarks);
    setCookie(
      "cookie",
      JSON.stringify({ user: username, bookmarks: updatedBookmarks })
    );
  };
  const removeFromBookmarks = () => {
    const updatedBookmarks = bookmarks.filter(
      (bookmark) => bookmark !== props.restrauntName
    );
    setBookmarks(updatedBookmarks);
    setCookie(
      "cookie",
      JSON.stringify({ user: username, bookmarks: updatedBookmarks })
    );
  };
  return (
    <div>
      <iframe
        title={props.restrauntName}
        width="700"
        height="500"
        src={`https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params=%7B%22ds2.name2%22:%22${props.restrauntName}%22%7D`}
        allowFullScreen
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <button onClick={bookmarkHandler}>Bookmark</button>
      <button onClick={removeFromBookmarks}>Remove from Bookmarks</button>
    </div>
  );
}
export default Map;
