import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import LeftPane from "../components/LeftPane";
import bookmarkContext from "../contexts/bookmarkContext";
import Map from "../components/Map";
import Authenticated from "../components/Authenticated";
function Bookmarks() {
  const { bookmarks } = useContext(bookmarkContext);
  return (
    <div>
      <Authenticated>
        <Navbar />
        <h1>Bookmarks</h1>
        <LeftPane />
        {bookmarks.map((bookmark) => {
          return <Map restrauntName={bookmark} />;
        })}
      </Authenticated>
    </div>
  );
}
export default Bookmarks;
